<template>
    <div :class="blockClasses">
        <Hero>
            <h1>Some of my <strong>Work</strong></h1>

            <ButtonGroup>
                <Button :type="ButtonType.GHOST" :size="ButtonSize.XLARGE" v-for="work in  workTypes "
                    :to="{ name: RouteName.WORK_CATEGORY, params: { category: work.value } }" :icon="work.icon">{{
                        work.label }}</Button>
            </ButtonGroup>
        </Hero>

        <Tools :class="bemm('tools')" :types="workTypes" />
        <List :class="bemm('list')" />

    </div>
</template>

<script lang="ts" setup>

import { useBemm } from 'bemm';
import { Icons } from 'open-icon';
import { computed, onMounted } from 'vue';

import Hero from '@/components/Hero.vue';
import List from '@/components/WorkList.vue';
import Tools from '@/components/Tools.vue';
import ButtonGroup from '@/components/ButtonGroup.vue';
import Button from '@/components/Button.vue';

import { useWork } from '@/composables/useWork';
import { ButtonSize, ButtonType } from '@/components/Button.model';
import { RouteName } from '@/router';
import { WorkType } from '@/types';

const { loadWork } = useWork();
const bemm = useBemm('work');

const blockClasses = computed(() => {
    return [
        bemm(),
    ]
})

onMounted(() => {
    loadWork();
})


const workTypes = [{
    label: "All",
    value: WorkType.ALL,
    icon: Icons.MORE
}, {
    label: "Projects",
    value: WorkType.PROJECT,
    icon: Icons.WEBSITE
}, {
    label: "Packages",
    value: WorkType.PACKAGE,
    icon: Icons.BOX
}, 
// {
//     label: "Icons",
//     value: WorkType.ICONS,
//     icon: Icons.SHAPE_SQUARE
// }, 

{
    label: "Photography",
    value: WorkType.PHOTOGRAPHY,
    icon: Icons.CAMERA
}, 
// {
//     label: "Clients",
//     value: WorkType.CLIENTS,
//     icon: Icons.USER
// }, 

{
    label: "Logos",
    value: WorkType.LOGO,
    icon: Icons.PATH3
}]

</script>

<style lang="scss">
.work {

    &__tools {
        z-index: 2;
        position: sticky;
        top: 0;

        transition: transform .3s ease-in-out;


        // .scroll-down & {
        //     transform: translate(-50%, 100%);
        //     opacity: 0;
        // }
    }
}
</style>
