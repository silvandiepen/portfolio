
<template>
    <div :class="bemm()">
        <div :class="bemm('tools')">
            <InputSwitch :options="projectTypes" v-model="currentType"></InputSwitch>
            <InputText label="filter" v-model="search" />
        </div>

        <ul :class="bemm('list')">
            <Card v-for="project in filteredProjects">
                <h3 v-if="project.title">{{ project.title }}</h3>
                <p v-if="project.description">{{ project.description }}</p>
                <a v-if="project.link" :href="project.link">Read more</a>
                <a v-if="project.npm" :href="`https://npmjs.org/package/${project.npm}`">npm</a>
            </Card>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { useBemm } from 'bemm';
import { computed, ref } from 'vue';

import { InputSwitch, InputText } from "@/components/form";
import Card from '@/components/Card.vue';
import { useProjects } from '@/composables/useProjects';
import { ProjectType } from '@/data/projects';

const bemm = useBemm('project-list');

const { all, projects, packages } = useProjects();
const search = ref('');
const currentType = ref(ProjectType.ALL);

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
const filteredProjects = computed(() => {

    let currentProjects = all;
    if (currentType.value == ProjectType.PROJECT) {
        currentProjects = projects

    } else if (currentType.value == ProjectType.PACKAGE) {
        currentProjects = packages;
    }
    if (search.value == '') return currentProjects.value;
    return currentProjects.value.filter((p) => {
        return p.title.toLowerCase().includes(search.value.toLowerCase());
    });
});
</script>