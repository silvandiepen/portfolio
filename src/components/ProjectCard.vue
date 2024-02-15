<template>
    <div :class="blockClasses" @click="goToProject()" ref="block">
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

import Tag from "@/components/Tag.vue";

import { Project } from "@/types";
import router, { RouteName } from "@/router";

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

const isInview = () => {

    if(!block.value) return;

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
    justify-content: space-between;
    text-align: left;

    width: 100%;
    margin: auto;

    align-items: flex-start;
    padding: calc(var(--space) * 2) 8vw;
    transform: scale(.8);
    opacity: 0;
    transition: all .3s ease;

    &+& {
        // border-top: 1px solid rgba(var(--foreground-rgb),.2);

    }

    &--in-view{
        opacity: 1;
        transform: scale(1);
    }

    &__title {
        width: 320px;
        font-size: 1.5em;
        color: var(--secondary);
    }

    &__content {
        width: 100%;
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

    &:hover{
        .project-card__tag-list {
            opacity: 1;
        }
    }



}
</style>