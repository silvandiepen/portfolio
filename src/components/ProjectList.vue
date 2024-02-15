
<template>
    <div :class="bemm()">

       total: {{ projects.length }}
        <ul :class="bemm('list')">
            <ProjectCard :class="bemm('item')" v-for="project in projects" :project="project">

            </ProjectCard>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { useBemm } from 'bemm';
import { useProjects } from '@/composables/useProjects';
import ProjectCard from './ProjectCard.vue';

const bemm = useBemm('project-list');
const { projects } = useProjects();

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