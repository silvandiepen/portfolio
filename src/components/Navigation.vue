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
                    <li :class="bemm('item')" v-for="item in menu">
                        <RouterLink :class="bemm('link')" :to="item.link">
                            <span :class="bemm('text')">
                                {{ item.name }}
                            </span>
                        </RouterLink>
                    </li>
                </ul>
            </div>

        </div>

    </nav>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useBemm } from "bemm";
import { Icons } from "open-icon";
import { useRouter, RouterLink } from 'vue-router';

import Logo from '@/components/Logo.vue';
import Button from "@/components/Button.vue";

import { RouteName } from '@/router';
import { getBrightness } from "@sil/color";

const router = useRouter();
const bemm = useBemm('nav');

const nav = ref();

const goHome = () => {
    router.push({ name: RouteName.HOME });
}
const isHome = computed(() => {
    return router.currentRoute.value.name === RouteName.HOME;
})

const menu = computed(() => {
    return [{
        name: 'Work',
        link: '/work'
    }, {
        name: 'About',
        link: '/about'
    }, {
        name: 'Contact',
        link: '/contact'
    }]
})


const blockClasses = computed(() => {
    return [
        bemm(),
    ]
})

const foregroundColor = ref('white');



const allSections = ref<{ top: number; color: string | null; }[]>([]);
const initSections = () => {
    allSections.value = Object.values(document.querySelectorAll('section[data-color]')).map((section) => {
        return {
            top: section.getBoundingClientRect().top,
            color: section.getAttribute('data-color')
        }
    });
}
const getUnderlayingColor = () => {
    initSections();

    const currentTop = window.scrollY;
    const currentSection = allSections.value.find(section => section.top > currentTop);

    if (currentSection) {
        if (currentSection.color?.includes('--')) {
            foregroundColor.value = currentSection.color ? `var(${currentSection.color}-text)` : 'white';
        } else {
            foregroundColor.value = currentSection.color ? getBrightness(currentSection.color) > 50 ? 'var(--dark)' : 'var(--light)' : 'white';

        }
    }
    else {
        foregroundColor.value = 'white';
    }

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




</script>

<style lang="scss">
.nav {
    $b: &;
    position: fixed;
    width: 100%;
    transform: translate(0);
    transition: transform .25s ease-in-out;
    padding: calc(var(--spacing) / 2) calc(var(--spacing) - (var(--space) * 2));

    z-index: 10;
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
        transform: translateY(-100%);



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
    }

    &__start {
        align-self: flex-start;
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
    }

    &__link {
        color: inherit;
        text-decoration: none;
    }
}
</style>