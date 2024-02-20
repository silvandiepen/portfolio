<template>
    <nav :class="blockClasses" ref="nav" :style="`--text-color: ${foregroundColor}`">
        <div :class="bemm('container')">
            <div :class="bemm('start')">
                <Button v-if="!isHome" type="ghost" :icon="Icons.ARROW_LEFT" @click="goHome()">Back</Button>

            </div>
            <div :class="bemm('middle')">
                <Logo :class="bemm('logo')"></Logo>
            </div>
            <div :class="bemm('end')">
            </div>

        </div>

    </nav>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useBemm } from "bemm";
import { Icons } from "open-icon";
import { useRouter } from 'vue-router';

import Logo from '@/components/Logo.vue';
import Button from "@/components/Button.vue";

import { RouteName } from '@/router';
import { textColor } from "@sil/color";

const router = useRouter();
const bemm = useBemm('nav');

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

const foregroundColor = ref('black');

const initObserver = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const color = entry.target.getAttribute('data-color');
               
                console.log(color);
               
                if (color?.includes('--')) foregroundColor.value = `var(${color}-text)`;
                else if (color) foregroundColor.value = textColor(color) as string;
            }
        });
    }, { rootMargin: '0px 0px 0px 0px' });

    document.querySelectorAll('[data-color]').forEach(el => observer.observe(el));

}
onMounted(() => {
    setTimeout(() => {
        initObserver();
    }, 500);
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
        align-self: flex-end;
        justify-content: flex-end;
    }

    &__logo {
        height: 3.5em;
        width: 3.5em;
    }
}
</style>