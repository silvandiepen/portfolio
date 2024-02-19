
<template>
    <div :class="bemm()">
        <Detail :class="bemm('detail')" v-if="project" :project="project" />
        <List :class="bemm('list')" :projects="relatedProjects" />
    </div>
</template>

<script setup lang="ts">

import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { useBemm } from 'bemm';

import Detail from '@/components/ProjectDetail.vue';
import List from '@/components/ProjectList.vue';
import { useProjects } from '@/composables/useProjects';

const { getProject, getRelatedProjects } = useProjects();

const bemm = useBemm('project');

const { params } = useRoute();

const project = computed(() => {
    return getProject(params.slug as string);
})


const relatedProjects = computed(() => {
    return getRelatedProjects(params.slug as string);
})


</script>

<style lang="scss">
.project {
    background-color: color-mix(in oklab, var(--background) 100%, black 25%);

    &__detail {}

    &__list {}
}
</style>