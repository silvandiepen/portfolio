<template>
    <div :class="bemm()"
        :style="`--detail-bg: ${colors.background}; --detail-fg: ${colors.foreground}; --detail-image: ${colors.image}`">
        <div :class="bemm('container')">
            <div :class="bemm('column')">
                <figure :class="bemm('figure')">
                    <template v-if="project.icon">
                        <Icon :class="bemm('icon')" v-if="typeof project.icon == 'string'" :name="project.icon"></Icon>
                        <Icon :class="bemm('icon')" v-else v-for="icon in project.icon" :name="icon"></Icon>
                    </template>
                </figure>
            </div>
            <div :class="bemm('column')">
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
            </div>
            <!-- <img :src="`//image.thum.io/get/${project.link}`" /> -->
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
import { PropType, computed } from "vue";

import ButtonGroup from "@/components/ButtonGroup.vue";
import Button from "@/components/Button.vue";
import Icon from "@/components/Icon.vue";

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
        display: flex;
        gap: var(--space);

        @media screen and (width <= 769px) {
            flex-direction: column;
        }
    }

    &__column {
        width: 100%;
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
            background-color: color-mix(in oklab, var(--background) 100%, black 25%);
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



    &__figure {
        width: 250px;
        aspect-ratio: 1/1;
        // background-color: var(--card-bg);
        // color: var(--card-fg);
        background-color: var(--background);
        color: var(--foreground);
        border-radius: var(--border-radius);
        background-image: var(--card-image);

        align-items: center;
        justify-content: center;
        display: flex;
        @media screen and (width <= 769px) {
            width: 100%;
            aspect-ratio: 16/9;
        }
    }

    &__icon {
        width: 1em;
        height: 1em;
font-size: 4em;
        transform: scale(.5);
        transition: all .3s 1s cubic-bezier(.25, .1, .25, 1);

        @for $i from 1 through 4 {
            &:nth-child(#{$i}) {
                transition-delay: #{$i * .2}s;
            }
        }
    }

}</style>