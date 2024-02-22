<template>
    <div :class="blockClasses">
        <Hero>
            <h1>Some of my <strong>Work</strong></h1>
            <h4>More work...</h4>
        </Hero>

        <Tools :class="bemm('tools')" />
        <List :class="bemm('list')" />

    </div>
</template>

<script lang="ts" setup>

import Hero from '@/components/Hero.vue';

import List from '@/components/ProjectList.vue';
import Tools from '@/components/Tools.vue';

import { useProjects } from '@/composables/useProjects';
const { loadProjects } = useProjects();

import { useBemm } from 'bemm';
import { computed, onMounted } from 'vue';
const bemm = useBemm('work');

const blockClasses = computed(() => {
    return [
        bemm(),
    ]
})

onMounted(() => {
    loadProjects();

})
</script>

<style lang="scss">
.work {

    &__tools {
        z-index: 2;
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -50%);

        transition: transform .3s ease-in-out;

        .scroll-down & {
            transform: translate(-50%, 100%);
            opacity: 0;
        }
    }
}
</style>
