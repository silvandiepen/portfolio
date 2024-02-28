<template>
    <nav :class="blockClasses" ref="nav" :style="`--text-color: ${foregroundColor}`">
        <div :class="bemm('container')">
            <div :class="bemm('start')">
                <Button v-if="!isHome" type="ghost" :icon="Icons.ARROW_LEFT" @click="goHome()">Back</Button>

            </div>
            <div :class="bemm('middle')">
                <RouterLink :class="bemm('logo-link')" to="/">
                    <Logo :class="bemm('logo')"></Logo>
                </RouterLink>
            </div>
            <div :class="bemm('end')">

                <ul :class="bemm('list')">
                    <li :class="bemm('item')" v-for="item in navigationData">
                        <RouterLink :class="bemm('link')" :to="item.link">
                            <span :class="bemm('text')">
                                {{ item.name }}
                            </span>
                        </RouterLink>
                    </li>
                </ul>
                <span @click="triggerMobileNavigation()" :class="bemm('nav-trigger')">
                    <span></span>
                    <span></span>
                    <span></span>

                </span>
            </div>

        </div>

    </nav>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { useBemm } from "bemm";
import { Icons } from "open-icon";
import { useRouter, RouterLink } from 'vue-router';

import Logo from '@/components/Logo.vue';
import { Button } from "@/components/button";

import { RouteName } from '@/router';
import { getBrightness } from "@sil/color";

import { navigationData } from "@/data/navigation";
import { EventAction, eventBus } from "@/utils";


import { useUI } from "@/composables/useUI";
const router = useRouter();
const bemm = useBemm('nav');
const { currentColor } = useUI();

const nav = ref();

const goHome = () => {
    router.push({ name: RouteName.HOME });
}
const isHome = computed(() => {
    return router.currentRoute.value.name === RouteName.HOME;
})


const blockClasses = computed(() => {
    return [
        bemm(),
    ]
})

const foregroundColor = ref('white');

const triggerMobileNavigation = () => {
    eventBus.emit(EventAction.MOBILE_NAVIGATION);
}


const allSections = ref<{ top: number; color: string | null; }[]>([]);
const initSections = () => {
    allSections.value = Object.values(document.querySelectorAll('section[data-color]')).map((section) => {
        return {
            top: parseInt(`${section.getBoundingClientRect().top}`),
            color: section.getAttribute('data-color')
        }
    });
}
const getUnderlayingColor = () => {
    if (!allSections.value.length) initSections();

    const currentTop = (window.scrollY - window.innerHeight) + 100;
    const currentSection = allSections.value.find(section => section.top > currentTop);




    if (currentSection) {

        if (currentSection?.color) {
            currentColor.value = currentSection.color;
        }

        if (currentSection.color?.includes('--')) {
            foregroundColor.value = currentSection.color ? `var(${currentSection.color}-text)` : 'white';
        } else {
            console.log(currentSection.color, getBrightness(currentSection.color || ''));
            foregroundColor.value = currentSection.color ? getBrightness(currentSection.color) > 50 ? 'var(--dark)' : 'var(--light)' : 'blue';
        }
    }
    else {
        console.log(allSections.value, currentTop, allSections.value);
        // foregroundColor.value = 'red';
    }

    // console.log('getting the color', currentColor.value, foregroundColor.value);
    setTimeout(() => {
        if (Object.keys(allSections.value).length === 0) getUnderlayingColor();
    }, 1000);
}
onMounted(() => {
    getUnderlayingColor();

    window.addEventListener('scroll', () => {
        getUnderlayingColor();
    })

})

watch(() => router.currentRoute.value, () => {
    initSections();
    getUnderlayingColor();
    setTimeout(() => {
        initSections();
        getUnderlayingColor();
    }, 1000);
})



</script>

<style lang="scss">
@keyframes lineTop {
    0% {
        transform: translate(0em, 0em) rotate(0deg);
    }

    50% {
        transform: translate(0em, calc(.5em - 1px)) rotate(0deg);
    }

    100% {
        transform: translate(0em, calc(.5em - 1px)) rotate(45deg);
    }
}

@keyframes lineTopStart {
    0% {
        transform: translate(0em, calc(.5em - 1px)) rotate(45deg);
    }

    100% {
        transform: translate(0em, 0em) rotate(0deg);
    }
}

@keyframes lineMiddle {
    0% {
        transform: translate(0em, 0em) rotate(0deg);
    }

    50% {
        transform: translate(0, 0) rotate(0deg) scale(3, 1);
    }

    100% {
        transform: translate(0, 0) rotate(0deg) scale(0, 1);
    }
}

@keyframes lineMiddleStart {
    0% {
        transform: translate(5em, 0) rotate(0deg) scale(1, 1);
    }

    100% {
        transform: translate(0em, 0em) rotate(0deg);
    }
}

@keyframes lineBottom {
    0% {
        transform: translate(0em, 0em) rotate(0deg);
    }

    50% {
        transform: translate(0em, calc((.5em - 1px) * -1)) rotate(0);
    }

    100% {
        transform: translate(0em, calc((.5em - 1px) * -1)) rotate(-45deg);
    }
}

@keyframes lineBottomStart {

    0% {
        transform: translate(0em, calc((.5em - 1px) * -1)) rotate(-45deg);
    }

    100% {
        transform: translate(0em, 0em) rotate(0deg);
    }


}

.nav {
    $b: &;
    position: fixed;
    width: 100%;
    transform: translate(0);
    transition: transform .25s ease-in-out;
    padding: calc(var(--spacing) / 2) calc(var(--spacing) - (var(--space) * 2));

    z-index: 20;
    color: var(--text-color);

    &__container {

        display: flex;
        align-items: center;
        width: 100%;
        padding: var(--space);
        border-radius: var(--space);
        position: relative;

        &::before {
            border-radius: inherit;
            content: "";
            z-index: -1;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            // background-color: blue;
        }
    }

    .scroll-down & {

        #{$b}__start,
        #{$b}__middle,
        #{$b}__list {
            transform: translateY(calc((var(--spacing) * 2) * -1));
        }
    }

    .app:has(.mobile-navigation--active) & {
        transform: translateY(0%);

        // color: white !important;
        #{$b}__start,
        #{$b}__middle,
        #{$b}__list {
            transform: translateY(0%);
        }

    }


    .on-top & {
        transform: translateY(0%);
    }

    &--scroll-up {}

    &__start,
    &__end,
    &__middle {
        display: flex;
        align-items: center;
        width: 100%;
        font-size: clamp(1em, 2vw, 1.5em);
        transform: translateY(0);
        transition: transform .25s ease-in-out;
    }

    &__start {
        align-self: center;
        justify-content: flex-start;
    }

    &__middle {
        align-self: center;
        justify-content: center;
    }

    &__end {
        justify-content: flex-end;
    }

    &__logo {
        height: 3.5em;
        width: 3.5em;
        color: currentColor;
    }

    &__logo-link {
        color: currentColor;

    }

    &__list {
        display: flex;
        gap: var(--space);
        list-style: none;
        padding: 0;
        margin: 0;
        transform: translateY(0);
        transition: transform .25s ease-in-out;

        @media screen and (max-width: 768px) {
            display: none;
        }

        margin-right: var(--space);

    }

    &__nav-trigger {
        display: none;
        position: relative;
        cursor: pointer;
        width: 2em;
        height: 2em;
        padding: .5em;
        color: var(--text-color);


        border-radius: 4px;
        flex-direction: column;



        display: flex;
        align-items: center;
        justify-content: space-between;

        --transition-time: .5s;

        --transition-ease: cubic-bezier(0, .75, .5, 1.5);

        span {

            width: 100%;
            height: 2px;
            border-radius: 1px;
            background-color: currentColor;
            transition: transform .25s ease-in-out;


            &:nth-child(1) {
                animation: lineTopStart var(--transition-time) var(--transition-ease) forwards;
            }

            &:nth-child(2) {
                animation: lineMiddleStart var(--transition-time) var(--transition-ease) forwards;
            }

            &:nth-child(3) {
                animation: lineBottomStart var(--transition-time) var(--transition-ease) forwards;
            }
        }


        @media screen and (max-width: 768px) {
            display: flex;
        }


        .app:has(.mobile-navigation--active) & {
            span {
                &:nth-child(1) {
                    animation: lineTop var(--transition-time) var(--transition-ease) forwards;
                }

                &:nth-child(2) {
                    animation: lineMiddle var(--transition-time) var(--transition-ease) forwards;
                }

                &:nth-child(3) {
                    animation: lineBottom var(--transition-time) var(--transition-ease) forwards;
                }
            }
        }
    }

    &__link {
        color: inherit;
        text-decoration: none;
    }
}
</style>