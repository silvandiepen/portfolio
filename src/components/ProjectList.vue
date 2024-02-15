
<template>
    <div :class="bemm()">
        <ul :class="bemm('list')">
            <ProjectCard :class="bemm('item')" v-for="project in allProjects" :project="project">

            </ProjectCard>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { useBemm } from 'bemm';
import { defineProps, computed, PropType } from 'vue';
import { useProjects } from '@/composables/useProjects';
import ProjectCard from './ProjectCard.vue';

import { Project } from '@/types';

const bemm = useBemm('project-list');
const { projects } = useProjects();

const props = defineProps({
    projects: {
        type: Array as PropType<Project[]>,
        default: () => []
    }
})

const allProjects = computed(() => {
    if (props.projects.length > 0) {
        return props.projects
    } else {
        return projects.value;
    }
})

</script>

<style lang="scss">
.project-list {

    &__list {
        padding: calc(var(--space) * 2);
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: var(--space);
        align-items: center;
        justify-content: center;
    }


}
</style>