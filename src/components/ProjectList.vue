
<template>
    <div :class="bemm()">

        <ul :class="bemm('list')">
            <li :class="bemm('item')" v-for="project in allProjects">
                <ProjectCard :project="project" />
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { useBemm, } from 'bemm';
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

// watch(() => projects.value,
//     () => {
//         console.log('changed');
//         console.log(projects.value.length)
//     }, {
//     deep: true
// })
</script>

<style lang="scss">
.project-list {

    &__list {
        padding: var(--spacing) 0;

        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: calc(var(--space) * 3);
        align-items: center;
        justify-content: center;
    }

    &__item{
        width: 480px;
        max-width: calc(100% - (var(--spacing) * 2));
        @media screen and (width >= 1024px){
            &:nth-child(2n){
            transform: translateY(50%);
        }

        }
    }


}
</style>