<script setup lang="ts">
import { usePosts } from '@/composables/usePosts'
import { useBemm } from 'bemm'
import { onMounted, computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MarkdownIt from 'markdown-it'
import Hero from '@/components/Hero.vue'
import { getColorSet, randomBetween } from '@/utils'
import { ButtonType ,ButtonSize } from '@/components/button'
import ContentSection from '@/components/ContentSection.vue'
import { RouteName } from '@/router'
import { Icons } from 'open-icon'
import Button from '@/components/button/Button.vue'
const colors = ref(getColorSet(2));

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})

const bemm = useBemm('article')
const route = useRoute()
const router = useRouter()
const { posts, isLoading, error, loadPosts } = usePosts({
  owner: 'silvandiepen',
  repo: 'sil.mt',
  path:'/blog',
  token: import.meta.env.VITE_GITHUB_TOKEN
})

const currentPost = computed(() => {
  return posts.value.find(post => post.slug === route.params.slug)
})

const formattedContent = computed(() => {
  if (!currentPost.value?.content) return ''
  return md.render(currentPost.value.content)
})

onMounted(async () => {
  if (posts.value.length === 0) {
    await loadPosts()
  }

  if (!isLoading.value && !currentPost.value) {
    router.push({ name: 'blog' })
  }
})

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
    <div v-if="isLoading" :class="bemm('loading')">
      <div :class="bemm('loading-spinner')"></div>
    </div>

    <div v-else-if="error" :class="bemm('error')">
      {{ error }}
    </div>


    <Hero v-if="currentPost" :color="colors[randomBetween(0, colors.length)]">

      <ButtonGroup>
        <Button
          :type="ButtonType.GHOST"
          :size="ButtonSize.XLARGE"
          :to="{ name: RouteName.BLOG }"
          :icon="Icons.ARROW_LEFT"
          >Blog</Button>
      </ButtonGroup>
      <h1 :class="bemm('title')">{{ currentPost.title }}</h1>
    </Hero>

    <ContentSection :color="colors[randomBetween(0, colors.length)]">
    <article v-if="currentPost" :class="bemm('content')">



      <div
        v-if="currentPost.metadata?.date"
        :class="bemm('date')"
      >
        {{ formatDate(currentPost.metadata.date as string) }}
      </div>

      <div
        :class="bemm('markdown')"
        v-html="formattedContent"
      />

      <div :class="bemm('footer')">
        <Button  :to="{ name: RouteName.BLOG }">
          Back to Blog
        </Button>
      </div>
    </article>
  </ContentSection>
</template>

<style lang="scss">
.article {
  &__container {
padding: calc(var(--spacing) * 2) var(--spacing);
  }

  &__loading {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 0;
  }

  &__loading-spinner {
    width: 2rem;
    height: 2rem;
    border: 2px solid #e2e8f0;
    border-top-color: #1a202c;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  &__error {
    background-color: #fef2f2;
    border: 1px solid #fee2e2;
    color: #dc2626;
    padding: 1rem;
    border-radius: 0.375rem;
  }

  &__content {
    max-width: 100%;
    display: flex; flex-direction: column;
    gap: var(--space);
  }

  &__back-link {
    text-decoration: none;
    display: inline-block;
  }

  &__title {

  }

  &__date {

  }

  &__markdown {
    line-height: 1.7;
    font-size: 1.125rem;

    h2 {
color: var(--primary);
    }

    h3 {
      color: var(--tertiary);
    }

    p {
      margin-bottom: 1rem;
    }

    ul, ol {
      margin-bottom: 1rem;
      padding-left: 1.5rem;
    }

    li {
      margin-bottom: 0.5rem;
    }

    pre {
      font-size: .875em;
      padding: var(--space);
      background-color: color-mix(in srgb, var(--block-background), black 75%);
      overflow: scroll;
      color:color-mix(in srgb, var(--block-background), white 75%);
      border-radius:var(--border-radius);
      //   background-color: var(--background);
    //   padding: 1rem;
    //   border-radius: 0.375rem;
    //   margin-bottom: 1rem;
    //   overflow-x: auto;
    // }
    }
    // code {
    //   // background-color: #f3f4f6;
    //   padding: 0.25rem;
    //   border-radius: 0.25rem;
    // }

    :not(pre) code{
      background-color: color-mix(in srgb, var(--background), black 50%);
      padding: var(--space-s);
      border-radius:var(--border-radius);
      font-size: .75em;
    }

    blockquote {
      border-left: 4px solid #e5e7eb;
      padding-left: 1rem;
      font-style: italic;
      margin: 1rem 0;
    }
  }

  &__footer {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #e5e7eb;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
