<template>
    <div :class="bemm()" :data-color="colors.background"
        :style="`--detail-bg: ${colors.background}; --detail-fg: ${colors.foreground}; --detail-image: ${colors.image}; --scrolled: ${scrolled}px`">
        <Hero :class="bemm('intro')" :data-color="colors.background">
            <figure :class="bemm('figure')">
                <template v-if="work.icon">
                    <Icon :class="bemm('icon')" v-if="typeof work.icon == 'string'" :name="work.icon"></Icon>
                    <Icon :class="bemm('icon')" v-else v-for="icon in work.icon" :name="icon"></Icon>
                </template>
            </figure>

            <div :class="bemm('content')">
                <h1 :class="bemm('title')">{{ work.title }}</h1>
                <p v-if="work.summary" :class="bemm('description')">{{ work.summary }}</p>
            </div>

        </Hero>
        <ContentSection :class="bemm('description-section')" v-if="work.description">
            <div :class="bemm('content')">
                <h3 :class="bemm('title')">Description</h3>
                <p v-if="work.description" :class="bemm('description')">{{ work.description }}</p>

                <ButtonGroup direction="vertical">
                    <Button v-if="work.link" @click="goToWork()" :icon="Icons.ARROW_UP_RIGHT">Visit {{
                        work.type == 'project' ? 'Project' : 'Docs' }}</Button>

                    <Button v-if="work.npm" :icon="Icons.ARROW_UP_RIGHT"
                        :href="`https://npmjs.org/package/${work.npm}`">npm</Button>

                    <div :class="bemm('npm')" v-if="work.npm">
                        <code>npm install {{ work.npm }}</code>
                    </div>
                </ButtonGroup>
            </div>
        </ContentSection>

        <ContentSection v-if="work.data && work.type == WorkType.PHOTOGRAPHY" fullWidth :color="`var(--background)`">
            <figure v-for="item in (work.data as any).images || []">
                <img :src="item?.image" />
                <p v>{{ item.description }}</p>
            </figure>
        </ContentSection>

        <ContentSection v-if="work.data && work.type == WorkType.LOGO" :color="`var(--foreground)`">
            <figure v-for="item in (work.data as any).images">
                <img :src="item?.image" />
                <p v>{{ item.description }}</p>
            </figure>
        </ContentSection>
    </div>
</template>

<script lang="ts" setup>

import { useBemm } from "bemm";
import { PropType, computed, onMounted, ref } from "vue";

import ContentSection from "@/components/ContentSection.vue";
import Hero from "@/components/Hero.vue";

import { ButtonGroup, Button } from "@/components/button";

import Icon from "@/components/Icon.vue";

import { Icons, Work, WorkType } from "@/types";
import { getColor } from "@/utils/color";


const scrolled = ref(0);

onMounted(() => {
    window.addEventListener('scroll', () => {
        scrolled.value = window.scrollY;
    })
})


const bemm = useBemm('work-detail');
const props = defineProps({
    work: {
        type: Object as PropType<Work>,
        required: true
    }
})


const goToWork = () => {
    if (props.work.link) window.location.href = props.work.link;

}

const colors = computed(() => {

    return getColor(props.work.color);

})



// Whenever the work.type is package, I want to do a call to npms.io to get all the details from the package using work.npm 
const getPackageInfo = async () => {

    const url = 'https://api.npms.io/v2/search?q=';

    const result = await fetch(`${url}${props.work.npm}`);
    console.log(result);
    return result;

}
onMounted(() => {
    if (props.work.npm) {
        getPackageInfo();

    }
})

</script>

<style lang="scss">
.work-detail {

    color: var(--detail-fg);
    position: relative;


    // &__intro {
    //     height: 80vh;
    //     background-color: var(--foreground);

    //     position: relative;

    //     padding: var(--spacing);

    //     display: flex;
    //     align-items: center;
    //     justify-content: flex-end;

    //     &::before {
    //         content: "";
    //         background-color: var(--detail-bg);
    //         clip-path: polygon(100% 0, 0 0, 0.00% 95.00%, 2.00% 94.94%, 4.00% 94.77%, 6.00% 94.48%, 8.00% 94.10%, 10.00% 93.63%, 12.00% 93.09%, 14.00% 92.50%, 16.00% 91.88%, 18.00% 91.25%, 20.00% 90.64%, 22.00% 90.06%, 24.00% 89.54%, 26.00% 89.10%, 28.00% 88.75%, 30.00% 88.50%, 32.00% 88.36%, 34.00% 88.34%, 36.00% 88.44%, 38.00% 88.65%, 40.00% 88.97%, 42.00% 89.38%, 44.00% 89.88%, 46.00% 90.44%, 48.00% 91.04%, 50.00% 91.67%, 52.00% 92.29%, 54.00% 92.89%, 56.00% 93.45%, 58.00% 93.95%, 60.00% 94.36%, 62.00% 94.68%, 64.00% 94.90%, 66.00% 94.99%, 68.00% 94.97%, 70.00% 94.84%, 72.00% 94.59%, 74.00% 94.24%, 76.00% 93.79%, 78.00% 93.27%, 80.00% 92.70%, 82.00% 92.08%, 84.00% 91.46%, 86.00% 90.84%, 88.00% 90.25%, 90.00% 89.71%, 92.00% 89.24%, 94.00% 88.85%, 96.00% 88.57%, 98.00% 88.39%, 100.00% 88.33%);

    //         height: 100%;
    //         width: 150%;
    //         position: absolute;
    //         top: 0;
    //         left: 0;
    //         z-index: 1;

    //         --divide: 2;

    //         @media screen and (width <=800px) {
    //             --divide: 4;
    //         }

    //         transform: translateY(calc(var(--scrolled) / 10)) translateX(calc((var(--scrolled) / var(--divide)) * -1));
    //     }
    // }

    &__description-section {
        // color: var(--background);
        // background-color: var(--foreground);
        // padding: var(--spacing);
    }

    &__content {
        // width: 800px;
        // margin: auto;
        // max-width: 100%;
        // position: relative;
        // z-index: 2;
    }

    // &__container {
    //     z-index: 2;
    //     position: relative;
    //     padding: calc(var(--spacing) * 2) var(--spacing);
    //     max-width: 960px;
    //     width: 100%;
    //     margin: auto;
    //     display: flex;
    //     border: 2px solid red;
    //     gap: var(--space);

    //     @media screen and (width <=769px) {
    //         flex-direction: column;
    //     }
    // }


    // &__title {
    //     font-size: clamp(2em, 8vw, 4em);

    // }

    &__content {
        display: flex;
        flex-direction: column;
        gap: var(--space);
    }

    &__description {
        font-size: 1.2em;
    }


    &__figure {
        z-index: 2;
        // top: 0; left: 0; 
        // position: absolute; 
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
        display: flex;

        position: absolute;
        font-size: 8vw;
        align-items: center;
        justify-content: center;
        left: 0;
        width: 100%;
        opacity: 0.1;

        transform: translateX(calc(var(--scrolled) / 2));

        // width: 250px;
        // aspect-ratio: 1/1;
        // // background-color: var(--block-background);
        // // color: var(--block-foreground);
        // background-color: var(--background);
        // color: var(--foreground);
        // border-radius: var(--border-radius);
        // background-image: var(--block-image);

        // align-items: center;
        // justify-content: center;
        // display: flex;

        // @media screen and (width <=769px) {
        //     width: 100%;
        //     aspect-ratio: 16/9;
        // }
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

}
</style>