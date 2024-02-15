
<template>
    <ProjectDetail v-if="project" :project="project" />
</template>

<script setup lang="ts">

import { computed } from 'vue';
import { useRoute } from 'vue-router';

import ProjectDetail from '@/components/ProjectDetail.vue';
import { useProjects } from '@/composables/useProjects';

const { getProject } = useProjects();


const { params } = useRoute();

const project = computed(() => {
    return getProject(params.slug as string);
})


</script>