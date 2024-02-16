
<template>
    <div :class="bemm()">


        <div :class="bemm('intro')">
            <h1>Sil's Portfolio</h1>
            <p>Here are some of the projects I've been working on.</p>
        </div>
        <Tools :class="bemm('tools')" />
        <List :class="bemm('list')" />
    </div>
</template>
<script setup lang="ts">
import List from '@/components/ProjectList.vue';
import Tools from '@/components/Tools.vue';

import { useBemm } from 'bemm';
const bemm = useBemm('home');

</script>
  

<style lang="scss">
.home {
    &__intro {


        display: flex;
        flex-direction: column;
        gap: var(--space);
        text-align: left;
        padding: var(--spacing);
        background-color: var(--secondary);
        color: var(--secondary-text);
    }

    &__tools {
        transform: translateY(-50%);
    }
}
</style>