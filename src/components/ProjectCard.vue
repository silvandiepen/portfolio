<template>
    <div :class="blockClasses" ref="block"
        :style="`--card-bg: ${colors.background}; --card-fg: ${colors.foreground}; --card-image: ${colors.image}`">
        <figure :class="bemm('figure')" @click="goToDetail()">
            <template v-if="project.icon">
                <Icon :class="bemm('icon')" v-if="typeof project.icon == 'string'" :name="project.icon"></Icon>
                <Icon :class="bemm('icon')" v-else v-for="icon in project.icon" :name="icon"></Icon>
            </template>
        </figure>
        <div :class="bemm('container')">
            <h3 :class="bemm('title')">{{ project.title }}</h3>

            <div :class="bemm('content')">
                <p v-if="project.summary" :class="bemm('summary')">{{ project.summary }}</p>



                <div :class="bemm('tag-container')">
                    <ul :class="bemm('tag-list')">
                        <Tag is="li" :class="bemm('tag')" v-for="tag in project.tags" :key="tag" :tag="tag" />
                    </ul>
                </div>

            </div>
            <ButtonGroup>
                <Button @click="goToDetail()" :icon="Icons.ARROW_RIGHT">Read more</Button>
                <Button @click="goToProject()" :icon="Icons.ARROW_UP_RIGHT">Visit</Button>

            </ButtonGroup>
        </div>


    </div>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
import { PropType, computed, onMounted, ref } from "vue";

import { Icons } from "open-icon";

import Icon from "@/components/Icon.vue";
import Tag from "@/components/Tag.vue";
import Button from "@/components/Button.vue";


import { Project } from "@/types";
import router, { RouteName } from "@/router";
import { getColor } from "@/utils/color";
import ButtonGroup from "./ButtonGroup.vue";

const bemm = useBemm('project-card');
const props = defineProps({
    project: {
        type: Object as PropType<Project>,
        required: true
    }
})

const inView = ref(false);
const block = ref();
const goToDetail = () => {
    router.push({ name: RouteName.PROJECT, params: { slug: props.project.slug } });
}
const goToProject = () => {
    document.location.href = props.project.link;
}

onMounted(() => {
    isInview();
    window.addEventListener('scroll', isInview);
})

const colors = computed(() => {

    return getColor(props.project.color);

})

const isInview = () => {
    if (!block.value) return;

    const percentageInView = 50; // adjust this value to change the percentage in view

    const rect = block.value.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

    const elementHeight = rect.bottom - rect.top;
    const elementInViewHeight = Math.min(rect.bottom, viewHeight) - Math.max(rect.top, 0);

    inView.value = (elementInViewHeight / elementHeight) * 100 >= percentageInView;
};
const blockClasses = computed(() => {
    return [bemm(), inView.value ? 'in-view' : 'out-view'];
})

</script>

<style lang="scss">
.project-card {
    $b: &;
    width: 100%;
    display: flex;
    text-align: left;
    flex-direction: column;
    width: 100%;
    margin: auto;

    align-items: flex-start;
    gap: var(--space);
    transform: scale(.8);
    opacity: 0;
    transition: all .3s ease;
    max-width: 640px;

    &+& {
        // border-top: 1px solid rgba(var(--foreground-rgb),.2);

    }

    &.in-view {
        opacity: 1;
        transform: scale(1);

        #{$b}__icon {
            transform: scale(1);

        }

        &__container {
            transform: translate(calc((var(--spacing) * -1) / 2), var(--spacing));
        }
    }

    &__container {
        padding: calc(var(--spacing) / 2);
        background-color: var(--background);
        transition: all .3s ease-in-out;
        transform: translate(0, 0);
        border-radius: var(--border-radius);
        width: calc(100% - calc(var(--spacing) / 2));

        .in-view & {
            transform: translate(var(--spacing), calc((var(--spacing) * -1)));

        }
    }

    &__figure {
        width: 100%;
        aspect-ratio: 16/9;
        background-color: var(--card-bg);
        color: var(--card-fg);
        border-radius: var(--border-radius);
        background-image: var(--card-image);

        align-items: center;
        justify-content: center;
        display: flex;
    }

    &__icon {
        width: 1em;
        height: 1em;
        font-size: 5em;
        transform: scale(.5);
        transition: all .3s 1s cubic-bezier(.25, .1, .25, 1);

        @for $i from 1 through 4 {
            &:nth-child(#{$i}) {
                transition-delay: #{$i * .2}s;
            }
        }
    }

    &__title {
        font-weight: bold;
        font-size: 1.25em;
        // color: var(--secondary);
        // color: var(--card-bg);

    }


    &__tag-container {
        @media screen and (width <=800px) {
            display: none;
        }
    }

    &__tag-list {
        margin-top: var(--space);
        display: flex;
        gap: calc(var(--space) / 2);
        flex-wrap: wrap;
        width: 100%;
        opacity: 0;
        transition: all .3s ease;
    }

    &__content {
        color: color-mix(in oklab, var(--card-bg), white 75%);

        p {
            line-height: 1.75;
            // opacity: .5;
            // font-size: .875em;

        }
    }

    &:hover {
        .project-card__tag-list {
            opacity: 1;
        }
    }

    --icon-border-color: var(--card-bg);



}
</style>