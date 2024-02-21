<template>
    <div :class="bemm()" @click="handleClick">
        <InputSearch :class="bemm('search')" placeholder="Search" v-model="filter.search" :collapse="true" />
        <InputSwitch :class="bemm('category')" :options="projectTypes" v-model="filter.type"></InputSwitch>
    </div>
</template>

<script lang="ts" setup>


import { useBemm } from 'bemm';
import { useProjects } from "@/composables/useProjects";

import { InputSwitch, InputSearch } from "@/components/form";
// import Tags from './Tags.vue';

const bemm = useBemm('tools');
const { filter } = useProjects();

import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

const { params } = useRoute();

onMounted(() => {
    console.log(params)
    if (params.category) {
        filter.value.type = params.category as string;
    }
});

const projectTypes = [{
    label: "All",
    value: "all"
}, {
    label: "Projects",
    value: "projects"
}, {
    label: "Packages",
    value: "packages"
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
            max-width: 500px;
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