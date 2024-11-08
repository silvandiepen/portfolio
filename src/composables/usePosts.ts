import { ref, Ref } from 'vue'

interface GitHubFile {
  name: string
  path: string
  sha: string
  url: string
  content?: string
  encoding?: string
}

interface PostMetadata {
  title?: string
  date?: string
  author?: string
  tags?: string[]
  excerpt?: string
  slug?: string
  [key: string]: unknown
}

interface Post {
  content: string
  excerpt: string
  sha: string
  path: string
  slug: string
  title?: string
  metadata?: PostMetadata
}

interface RepoConfig {
  owner: string
  repo: string
  path: string
  token?: string // GitHub personal access token
}

interface UsePosts {
  posts: Ref<Post[]>
  isLoading: Ref<boolean>
  error: Ref<string | null>
  loadPosts: () => Promise<void>
  getSlugs: () => string[]
  getPostBySlug: (slug: string) => Post | undefined
}

export const usePosts = (config: RepoConfig): UsePosts => {
  const posts = ref<Post[]>([]) as Ref<Post[]>
  const isLoading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const getHeaders = () => {
    const headers: Record<string, string> = {
      'Accept': 'application/vnd.github.v3+json'
    }

    if (config.token) {
      headers['Authorization'] = `token ${config.token}`
    }

    return headers
  }

  const fetchPostsList = async (): Promise<GitHubFile[]> => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${config.path}`,
        {
          headers: getHeaders()
        }
      )

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data.filter((file: GitHubFile) => file.name.endsWith('.md'))
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch posts list'
      throw err
    }
  }

  const fetchPost = async (url: string): Promise<Post> => {
    try {
      const response = await fetch(url, {
        headers: getHeaders()
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const data: GitHubFile = await response.json()

      if (!data.content || !data.encoding || data.encoding !== 'base64') {
        throw new Error('Invalid file data received')
      }

      const content = atob(data.content.replace(/\n/g, ''))

      // Parse front matter
      const frontMatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
      let metadata: PostMetadata = {}
      let finalContent = content

      if (frontMatterMatch) {
        try {
          const [, frontMatter, contentWithoutFrontMatter] = frontMatterMatch
          metadata = Object.fromEntries(
            frontMatter.split('\n')
              .filter(Boolean)
              .map(line => {
                const [key, ...values] = line.split(':')
                return [key.trim(), values.join(':').trim()]
              })
          )
          metadata.slug = data.name.replace('.md', '')
          finalContent = contentWithoutFrontMatter.trim()
        } catch (e) {
          console.warn('Failed to parse front matter:', e)
        }
      }

      // Extract title from first heading
      let title = metadata.title
      if (!title) {
        const firstHeadingMatch = finalContent.match(/^#\s*(.*?)$/m) || finalContent.match(/^##\s*(.*?)$/m)
        if (firstHeadingMatch) {
          title = firstHeadingMatch[1]
          // Strip the first title from the finalContent
          finalContent = finalContent.replace(`${firstHeadingMatch[0]}\n`, '').trim()
        } else {
          title = data.name.replace('.md', '')
        }
      }

      // Extract excerpt from first paragraph
      const firstParagraph = finalContent.split('\n').filter(Boolean)[0] || ''
      const excerpt = metadata.excerpt || firstParagraph

      return {
        content: finalContent,
        excerpt,
        sha: data.sha,
        path: data.path,
        slug: metadata.slug || data.name.replace('.md', ''),
        title,
        metadata
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch post'
      throw err
    }
  }

  const loadPosts = async (): Promise<void> => {
    isLoading.value = true
    error.value = null

    try {
      const files = await fetchPostsList()
      const postPromises = files.map(file => fetchPost(file.url))
      posts.value = await Promise.all(postPromises)
    } catch (err) {
      console.error('Error loading posts:', err)
      error.value = err instanceof Error ? err.message : 'Failed to load posts'
    } finally {
      isLoading.value = false
    }
  }

  const getSlugs = (): string[] => {
    return posts.value.map(post => post.slug)
  }

  const getPostBySlug = (slug: string): Post | undefined => {
    return posts.value.find(post => post.slug === slug)
  }

  return {
    posts,
    isLoading,
    error,
    loadPosts,
    getSlugs,
    getPostBySlug
  }
}
