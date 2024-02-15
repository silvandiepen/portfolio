<template>
    <div :class="bemm()">
        <InputText placeholder="Search"  v-model="filter.search" />
        <!-- <Tags></Tags> -->
        <InputSwitch :options="projectTypes" v-model="filter.type"></InputSwitch>

    </div>
</template>

<script lang="ts" setup>


import { useBemm } from 'bemm';
import { useProjects } from "@/composables/useProjects";

import { InputSwitch, InputText } from "@/components/form";
// import Tags from './Tags.vue';

const bemm = useBemm('tools');
const { filter } = useProjects();



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

</script>

<style lang="scss">
.tools {
    background-color: color-mix(in oklch, var(--background) 100%, black 25%);
    padding: var(--space);
    display: flex; gap: var(--space);
    align-items: center; justify-content: center;
    // flex-direction: column;

    margin: auto;

}
</style>