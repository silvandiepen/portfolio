<script setup lang="ts">
import ContentSection from '@/components/ContentSection.vue';
import Hero from '@/components/Hero.vue';
import { usePosts } from '@/composables/usePosts'
import { RouteName } from '@/router';
import { getColorSet, randomBetween } from '@/utils';
import { useBemm } from 'bemm'
import { onMounted, computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import Button from '@/components/button/Button.vue';

const bemm = useBemm('blog')

const colors = ref(getColorSet(2));

const { posts, isLoading, error, loadPosts } = usePosts({
  owner: 'silvandiepen',
  repo: 'sil.mt',
  path: '/blog',
  token: import.meta.env.VITE_GITHUB_TOKEN
})

const sortedPosts = computed(() => {
  return [...posts.value].sort((a, b) => {
    const dateA = a.metadata?.date ? new Date(a.metadata.date as string) : new Date(0)
    const dateB = b.metadata?.date ? new Date(b.metadata.date as string) : new Date(0)
    return dateB.getTime() - dateA.getTime()
  })
})

onMounted(async () => {
  await loadPosts()
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

  <Hero :color="colors[randomBetween(0, colors.length)]">

    <h1 :class="bemm('title')">Blog</h1>

  </Hero>


  <div v-if="isLoading" :class="bemm('loading')">
    <div :class="bemm('loading-spinner')"></div>
  </div>

  <div v-else-if="error" :class="bemm('error')">
    {{ error }}
  </div>

  <div v-else-if="posts.length === 0" :class="bemm('empty')">
    No posts found.
  </div>

  <ContentSection v-for="post in sortedPosts" :key="post.slug" :class="bemm('post')" :color="colors[randomBetween(0, colors.length)]">

<div :class="bemm('post')">

      <h3 :class="bemm('post-title')">
        <RouterLink :to="{ name: RouteName.BLOG_POST, params: { slug: post.slug } }" :class="bemm('post-link')">
          {{ post.title }}
        </RouterLink>
      </h3>

      <div v-if="post.metadata?.date" :class="bemm('post-date')">
        {{ formatDate(post.metadata.date as string) }}
      </div>

      <p v-if="post.excerpt" :class="bemm('post-excerpt')">
        {{ post.excerpt }}
      </p>

      <Button :to="{ name: RouteName.BLOG_POST, params: { slug: post.slug } }" >
        Read more
      </Button></div>
  </ContentSection>
</template>

<style lang="scss">
.blog {
  &__container {
    padding: var(--spacing);
    display: flex;
    flex-direction: column;
    gap: var(--space);
  }

  &__title {}

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

  &__empty {
    text-align: center;
    color: #6b7280;
    padding: 3rem 0;
  }

  &__posts {
    // display: flex;
    // flex-direction: column;
    // gap: 2rem;
  }

  &__post {
    // background-color: var(--secondary);
    // color: var(--secondary-text);
    // border-radius: var(--border-radius);
    // padding: var(--spacing);
    display: flex; flex-direction: column; gap: var(--space);
  }

  &__post-title {
    // font-size: 1.5rem;
    // font-weight: bold;
    // margin-bottom: 0.5rem;
    font-size: clamp(2em, 4vw, 6em);
  }

  &__post-link {
    // color: inherit;
    // text-decoration: none;

    // &:hover {
    //   color: #2563eb;
    // }
  }

  &__post-date {
    opacity: .5;
    // font-size: 0.875rem;
    // // color: #6b7280;
    // margin-bottom: 1rem;
  }

  &__post-excerpt {
    // color: #4b5563;
    // margin-bottom: 1rem;
  }

  &__post-read-more {
    // color: #2563eb;
    // text-decoration: none;
    // font-weight: 500;

    // &:hover {
    //   // color: #1d4ed8;
    // }
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
