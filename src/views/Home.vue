
<template>
    <div :class="bemm()">


        <div :class="bemm('intro')">
            <div :class="bemm('container')">

                <div class="ring" ref="ring" :style="`--rotation: ${rotation}deg`">
                    <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <path id="textPath" d="M100 100 m -80, 0 a 80,80 0 0,1 160,0 a 80,80 0 0,1 -160,0" />
                        </defs>
                        <circle cx="100" cy="100" r="80" fill="none" />
                        <text>
                            <textPath href="#textPath" startOffset="0">
                                Dad, Husband, Illustrator, Developer, Designer, Photographer,
                            </textPath>
                        </text>
                    </svg>
                </div>

                <h1>Sil's Portfolio</h1>
                <p>Here are some of the projects I've been working on.</p>
            </div>
        </div>

        <Tools :class="bemm('tools')" />
        <List :class="bemm('list')" />
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import List from '@/components/ProjectList.vue';
import Tools from '@/components/Tools.vue';

import { useBemm } from 'bemm';
const bemm = useBemm('home');

const ring = ref(null);
const rotation = ref(0);

const handleScroll = () => {
    if (!ring.value) return;
    rotation.value = window.scrollY / 10;
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
})
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
    &__intro {
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: var(--space);
        text-align: left;

        background-color: var(--tertiary);
        color: var(--tertiary-text);

        @media screen and (orientation:portrait) {
            aspect-ratio: 3/2;
        }

        @media screen and (width <=769px) {
            aspect-ratio: 1/1;
        }
    }

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


}</style>