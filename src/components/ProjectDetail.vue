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

                    <ButtonGroup direction="vertical">

                        <Button v-if="project.link" @click="goToProject()" :icon="Icons.ARROW_UP_RIGHT">Visit {{
                            project.type == 'project' ? 'Project' : 'Docs' }}</Button>

                        <Button v-if="project.npm" :icon="Icons.ARROW_UP_RIGHT"
                            :href="`https://npmjs.org/package/${project.npm}`">npm</Button>

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


const goToProject = () => {
    if (props.project.link) window.location.href = props.project.link;

}

const colors = computed(() => {

    return getColor(props.project.color);

})

</script>

<style lang="scss">
.project-detail {

    background-color: var(--detail-bg);
    color: var(--detail-fg);


    clip-path: polygon(100% 0, 0 0, 0.00% 95.00%, 2.00% 94.94%, 4.00% 94.77%, 6.00% 94.48%, 8.00% 94.10%, 10.00% 93.63%, 12.00% 93.09%, 14.00% 92.50%, 16.00% 91.88%, 18.00% 91.25%, 20.00% 90.64%, 22.00% 90.06%, 24.00% 89.54%, 26.00% 89.10%, 28.00% 88.75%, 30.00% 88.50%, 32.00% 88.36%, 34.00% 88.34%, 36.00% 88.44%, 38.00% 88.65%, 40.00% 88.97%, 42.00% 89.38%, 44.00% 89.88%, 46.00% 90.44%, 48.00% 91.04%, 50.00% 91.67%, 52.00% 92.29%, 54.00% 92.89%, 56.00% 93.45%, 58.00% 93.95%, 60.00% 94.36%, 62.00% 94.68%, 64.00% 94.90%, 66.00% 94.99%, 68.00% 94.97%, 70.00% 94.84%, 72.00% 94.59%, 74.00% 94.24%, 76.00% 93.79%, 78.00% 93.27%, 80.00% 92.70%, 82.00% 92.08%, 84.00% 91.46%, 86.00% 90.84%, 88.00% 90.25%, 90.00% 89.71%, 92.00% 89.24%, 94.00% 88.85%, 96.00% 88.57%, 98.00% 88.39%, 100.00% 88.33%);

    &__container {
        padding: calc(var(--spacing) * 2) var(--spacing);
        width: 960px;
        max-width: 100%;
        margin: auto;
        display: flex;
        gap: var(--space);

        @media screen and (width <=769px) {
            flex-direction: column;
        }
    }

    &__column {
        width: 100%;
    }

    &__title {
        font-size: clamp(2em, 8vw, 4em);

    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: var(--space);
    }

    &__description {
        font-size: 1.2em;
    }

    &__npm {
        display: block;

        code {
            padding: var(--space);
            border-radius: var(--space);
            background-color: var(--background);
            color: var(--foreground);
            display: block;
        }

        font-size: 1.2em;
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

        @media screen and (width <=769px) {
            width: 100%;
            aspect-ratio: 16/9;
        }
    }

    &__icon {
        width: 1em;
        height: 1em;
        font-size: 4em;
        transform: scale(.75);
        transition: all .3s 1s cubic-bezier(.25, .1, .25, 1);
        @for $i from 1 through 4 {
            &:nth-child(#{$i}) {
                transition-delay: #{$i * .2}s;
            }
        }
    }

    .button {
        --icon-border-color: var(--detail-bg);
    }

}</style>