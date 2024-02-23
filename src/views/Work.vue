<template>
    <div :class="blockClasses">
        <Hero>
            <h1>Some of my <strong>Work</strong></h1>

            <ButtonGroup>
                <Button :type="ButtonType.GHOST" :size="ButtonSize.XLARGE" v-for="project in  projectTypes "
                    :to="{ name: RouteName.WORK_CATEGORY, params: { category: project.value }}"
                    :icon="project.icon">{{ project.label }}</Button>
            </ButtonGroup>
        </Hero>

        <Tools :class="bemm('tools')" :types="projectTypes" />
        <List :class="bemm('list')" />

    </div>
</template>

<script lang="ts" setup>

import { useBemm } from 'bemm';
import { Icons } from 'open-icon';
import { computed, onMounted } from 'vue';

import Hero from '@/components/Hero.vue';
import List from '@/components/ProjectList.vue';
import Tools from '@/components/Tools.vue';
import ButtonGroup from '@/components/ButtonGroup.vue';
import Button from '@/components/Button.vue';

import { useProjects } from '@/composables/useProjects';
import { ButtonSize, ButtonType } from '@/components/Button.model';
import { RouteName } from '@/router';

const { loadProjects } = useProjects();
const bemm = useBemm('work');

const blockClasses = computed(() => {
    return [
        bemm(),
    ]
})

onMounted(() => {
    loadProjects();

})


const projectTypes = [{
    label: "All",
    value: "all",
    icon: Icons.MORE
}, {
    label: "Projects",
    value: "projects",
    icon: Icons.WEBSITE
}, {
    label: "Packages",
    value: "packages",
    icon: Icons.BOX
}, {
    label: "Icons",
    value: "icons",
    icon: Icons.SHAPE_SQUARE
}, {
    label: "Photography",
    value: "photography",
    icon: Icons.CAMERA
}, {
    label: "Clients",
    value: "clients",
    icon: Icons.USER
}, {
    label: "Logos",
    value: "logo",
    icon: Icons.PATH3
}]

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
