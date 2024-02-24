<template>
    <div :class="blockClasses" ref="block"
        :style="`--block-bg: ${colors.background}; --block-fg: ${colors.foreground}; --block-image: ${colors.image}`">
        <figure :class="bemm('figure')" @click="goToDetail()" :style="figureStyle">
            <template v-if="work.icon">
                <Icon :class="bemm('icon')" v-if="typeof work.icon == 'string'" :name="work.icon"></Icon>
                <Icon :class="bemm('icon')" v-else v-for="icon in work.icon" :name="icon"></Icon>
            </template>
        </figure>
        <div :class="bemm('container')">
            <h3 :class="bemm('title')">{{ work.title }}</h3>

            <div :class="bemm('content')">
                <p v-if="work.summary" :class="bemm('summary')">{{ work.summary }}</p>
            </div>
            <ButtonGroup>
                <Button @click="goToDetail()" :icon="Icons.ARROW_RIGHT">Read more</Button>
                <Button v-if="[WorkType.PACKAGE, WorkType.PROJECT].includes(work.type)" @click="goToProject()"
                    :icon="Icons.ARROW_UP_RIGHT">Visit <span class="hide-mobile">{{ work.type
                        == 'project' ? 'Project' :
                        'Docs' }}</span></Button>

            </ButtonGroup>
        </div>


    </div>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
import { PropType, computed, onMounted, ref } from "vue";
import { Icons } from "open-icon";

import { getColor, isInview } from "@/utils";
import { Work, WorkType } from "@/types";
import router, { RouteName } from "@/router";

import Icon from "@/components/Icon.vue";
// import Tag from "@/components/Tag.vue";
import Button from "@/components/Button.vue";
import ButtonGroup from "@/components/ButtonGroup.vue";



const bemm = useBemm('work-card');
const props = defineProps({
    work: {
        type: Object as PropType<Work>,
        required: true
    }
})

const inView = ref(false);
const block = ref(null);

const goToDetail = () => {
    router.push({ name: RouteName.PROJECT, params: { slug: props.work.slug } });
}
const goToProject = () => {
    if (document && props.work.link) document.location.href = props.work.link;
}

onMounted(() => {
    if (block.value) inView.value = isInview(block.value, {
        percentage: 50,
        basedOnElement: true
    });

    window.addEventListener('scroll', () => {
        inView.value = block.value ? isInview(block.value, {
            percentage: 50,
            basedOnElement: true
        }) : false
    });
})

const colors = computed(() => {
    return getColor(props.work.color);
})

const blockClasses = computed(() => {
    return [bemm(), inView.value ? 'in-view' : 'out-view'];
})


const figureStyle = computed(() => {
    if (!props.work.image) return {}
    return {
        backgroundImage: `url(${props.work.image})`
    }

})

</script>

<style lang="scss">
.hide-mobile {
    @media screen and (width <=800px) {
        display: none;
    }
}

.work-card {
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



    &+& {
        // border-top: 1px solid rgba(var(--foreground-rgb),.2);

    }

    &.in-view {
        opacity: 1;
        transform: scale(1);

        #{$b}__icon {
            transform: scale(1);

        }

        // &__container {
        //     transform: translate(calc((var(--spacing) * -1) / 2), var(--spacing));
        // }
    }

    &__container {
        padding: calc(var(--spacing) / 2);
        background-color: var(--background);
        transition: all .3s ease-in-out;
        transform: translate(0, 0);
        border-radius: var(--border-radius);
        width: calc(100% - calc(var(--spacing) / 2));



        // .in-view & {
        //     transform: translate(var(--spacing), calc((var(--spacing) * -1)));

        //     @media screen and (width <=800px) {
        //         transform: translate(calc(var(--spacing) / 2), calc(((var(--spacing) / 2) * -1)));


        //     }
        // }
    }

    &__figure {
        width: 100%;
        aspect-ratio: 16/9;
        background-color: var(--block-bg);
        color: var(--block-fg);
        border-radius: var(--border-radius);
        background-image: var(--block-image);

        align-items: center;
        justify-content: center;
        display: flex;
        background-size: cover;
        background-position: center center;
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
        // color: var(--block-bg);

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
        color: color-mix(in oklab, var(--block-bg), white 75%);

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

    .button-group {
        margin-top: var(--space);
    }

    --icon-border-color: var(--block-bg);



}
</style>