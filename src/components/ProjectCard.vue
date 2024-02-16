<template>
    <div :class="blockClasses" @click="goToProject()" ref="block"
        :style="`--card-bg: ${colors.background}; --card-fg: ${colors.foreground}; --card-image: ${colors.image}`">
        <figure :class="bemm('figure')">
            <template v-if="project.icon">
                <Icon :class="bemm('icon')" v-if="typeof project.icon == 'string'" :name="project.icon"></Icon>
                <Icon :class="bemm('icon')" v-else v-for="icon in project.icon" :name="icon"></Icon>
            </template>
        </figure>
        <h3 :class="bemm('title')">{{ project.title }}</h3>

        <div :class="bemm('content')">
            <p v-if="project.summary" :class="bemm('summary')">{{ project.summary }}</p>



            <div :class="bemm('tag-container')">
                <ul :class="bemm('tag-list')">
                    <Tag is="li" :class="bemm('tag')" v-for="tag in project.tags" :key="tag" :tag="tag" />
                </ul>
            </div>

        </div>



    </div>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
import { PropType, computed, onMounted, ref } from "vue";



import Icon from "@/components/Icon.vue";
import Tag from "@/components/Tag.vue";


import { Project } from "@/types";
import router, { RouteName } from "@/router";
import { getColor } from "@/utils/color";

const bemm = useBemm('project-card');
const props = defineProps({
    project: {
        type: Object as PropType<Project>,
        required: true
    }
})

const inView = ref(false);
const block = ref();
const goToProject = () => {
    router.push({ name: RouteName.PROJECT, params: { slug: props.project.slug } });
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

    const rect = block.value.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    inView.value = !(rect.bottom < 0 || rect.top - viewHeight >= 0);

};
const blockClasses = computed(() => {
    return [bemm(), inView.value && bemm('', 'in-view')];
})

</script>

<style lang="scss">
.project-card {
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

    &--in-view {
        opacity: 1;
        transform: scale(1);
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
    }

    &__title {
        font-weight: bold;
        font-size: 1.25em;
        // color: var(--secondary);
    }

    &__content {
        width: 100%;
        font-weight: 100;
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



}
</style>