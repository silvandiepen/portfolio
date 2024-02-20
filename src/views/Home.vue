
<template>
    <div :class="bemm()">


        <Intro></Intro>

        <Tools :class="bemm('tools')" />
        <List :class="bemm('list')" />
    </div>
</template>
<script setup lang="ts">
import List from '@/components/ProjectList.vue';
import Tools from '@/components/Tools.vue';
import Intro from "@/components/Intro.vue";

import { useBemm } from 'bemm';
const bemm = useBemm('home');

</script>
  

<style lang="scss">
@keyframes load {
    0% {
        clip-path: inset(0 0 100% 0);
    }

    100% {
        clip-path: inset(0 0 0% 0);
    }


}

.home {

    clip-path: inset(0 0 100% 0);
    animation: load 2s .5s ease-in-out forwards;

    &__intro {}

    &__container {
        padding: calc(var(--spacing) * 2) var(--spacing);
        width: 960px;
        max-width: 100%;
        margin: auto;
    }


    &__tools {
        z-index: 2;
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -50%);

        transition: transform .3s ease-in-out;

        .scroll-down & {
            transform: translate(-50%, 100%);
            opacity: 0;
        }
    }
}

// @keyframes spin {
//     0% {
//         transform: translate(75%, -50%) rotate(0deg);
//     }

//     100% {
//         transform: translate(75%, -50%) rotate(360deg);
//     }
// }

.ring {
    transform-origin: 50% 50%;
    --size: 100vh;
    opacity: 1;

    position: fixed;
    top: 50lvh;
    right: 0;
    font-family: 'Inter', 'Roboto', sans-serif;
    font-size: 13.5px;
    font-weight: 800;
    text-transform: uppercase;
    fill: var(--current-color, var(--foreground));
    transform: translate(75%, -50%) rotate(var(--rotation));
    opacity: .125;
    transform-box: fill-box;

    svg {
        width: var(--size);
        height: var(--size);
        transform-origin: 50% 50%;

        circle {
            fill: transparent;
            transform-origin: 50% 50%;
        }
    }


    width: var(--size);
    height: var(--size);


}
</style>