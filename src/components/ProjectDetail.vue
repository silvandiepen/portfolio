<template>
    <Card :title="project.title">

        <div :class="bemm('content')">
            <p v-if="project.summary" :class="bemm('description')">{{ project.description }}</p>

            <ButtonGroup direction="horizontal">

                <Button v-if="project.link" :href="project.link">Visit website</Button>
                <Button v-if="project.npm" :href="`https://npmjs.org/package/${project.npm}`" type="secondary">npm</Button>

            </ButtonGroup>

            <div :class="bemm('npm')" v-if="project.npm">
                <code>npm install {{ project.npm }}</code>
            </div>
        </div>
        <img :src="`//image.thum.io/get/${project.link}`" />

    </Card>

</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
import { PropType } from "vue";

import ButtonGroup from "./ButtonGroup.vue";
import Button from "./Button.vue";
import Card from "./Card.vue";
import { Project } from "@/types";



const bemm = useBemm('project-detail');

defineProps({
    project: {
        type: Object as PropType<Project>,
        required: true
    }
})





</script>

<style lang="scss">
.project-detail {
    &__content {
        display: flex;
        flex-direction: column;
        gap: var(--space);
    }

    &__description {
        font-size: 1.2em;
    }

    &__npm {
        font-size: 1.2em;
    }

    &__iframe-container {
        display: flex;
        justify-content: center;
    }

    &__iframe {
        width: 100%;
        max-width: 800px;
        height: 800px;
    }
}
</style>