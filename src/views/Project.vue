
<template>
    <Detail v-if="project" :project="project" />
    <List :projects="relatedProjects" />
</template>

<script setup lang="ts">

import { computed } from 'vue';
import { useRoute } from 'vue-router';

import Detail from '@/components/ProjectDetail.vue';
import List from '@/components/ProjectList.vue';
import { useProjects } from '@/composables/useProjects';

const { getProject, getRelatedProjects } = useProjects();


const { params } = useRoute();

const project = computed(() => {
    return getProject(params.slug as string);
})


const relatedProjects = computed(() => {
    return getRelatedProjects(params.slug as string);
})


</script>