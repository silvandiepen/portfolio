<template>
    <div :class="bemm()"
        :style="`--detail-bg: ${colors.background}; --detail-fg: ${colors.foreground}; --detail-image: ${colors.image}`">
        <div :class="bemm('container')">
            <h1 :class="bemm('title')">{{ project.title }}</h1>
            <div :class="bemm('content')">
                <p v-if="project.summary" :class="bemm('description')">{{ project.description }}</p>

                <ButtonGroup direction="horizontal" mobile-direction="vertical">

                    <Button v-if="project.link" :href="project.link" :icon="Icons.ARROW_RIGHT">Check {{ project.title
                    }}</Button>
                    <Button v-if="project.npm" :href="`https://npmjs.org/package/${project.npm}`"
                        type="secondary">npm</Button>

                    <div :class="bemm('npm')" v-if="project.npm">
                        <code>npm install {{ project.npm }}</code>
                    </div>
                </ButtonGroup>

            </div>
            <!-- <img :src="`//image.thum.io/get/${project.link}`" /> -->
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
import { PropType, computed } from "vue";

import ButtonGroup from "./ButtonGroup.vue";
import Button from "./Button.vue";
import { Icons, Project } from "@/types";
import { getColor } from "@/utils/color";



const bemm = useBemm('project-detail');
const props = defineProps({
    project: {
        type: Object as PropType<Project>,
        required: true
    }
})




const colors = computed(() => {

    return getColor(props.project.color);

})

</script>

<style lang="scss">
.project-detail {

    background-color: var(--detail-bg);
    color: var(--detail-fg);

    &__container {
        padding: calc(var(--spacing) * 2) var(--spacing);
        width: 960px;
        max-width: 100%;
        margin: auto;
    }

    &__title {
        font-size: clamp(2em, 8vw, 4em);
        font-weight: 100;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: var(--space);
    }

    &__description {
        font-size: 1.2em;
        font-weight: 100;
    }

    &__npm {
        code {
            padding: var(--space);
            border-radius: var(--space);
            background-color: color-mix(in oklch, var(--background) 100%, black 25%);
        }

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