<template>
    <div :class="bemm()" @click="handleClick">
        <InputSearch :class="bemm('search')" placeholder="Search" v-model="filter.search" :collapse="true" />
        <InputSwitch :class="bemm('category')" :options="projectTypes" v-model="filter.type" :as-tooltip="true"></InputSwitch>
    </div>
</template>

<script lang="ts" setup>
import { useBemm } from 'bemm';
import { useProjects } from "@/composables/useProjects";

import { InputSwitch, InputSearch } from "@/components/form";

const bemm = useBemm('tools');
const { filter } = useProjects();

import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { Icons } from 'open-icon';

const { params } = useRoute();

onMounted(() => {
    if (params.category) {
        filter.value.type = params.category as string;
    }
});

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

const handleClick = (e: Event) => {
    e.stopPropagation();
}
</script>

<style lang="scss">
.tools {
    $b: &;
    background: var(--background);
    padding: var(--space);
    display: flex;
    gap: var(--space);
    align-items: center;
    justify-content: center;

    margin: auto;
    width: fit-content;
    border-radius: 6em;
    pointer-events: all;

    --input-border-radius: 5em;

    &__search {
        &+#{$b}__category {
            transform: scale(1);
            transition: all .3s;
            max-width: 100vw;
        }

        &:has([class*="full"]) {
            &+#{$b}__category {
                transform: scale(0);
                max-width: 0px;

            }
        }
    }
}
</style>