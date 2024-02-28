<template>
    <Hero :style="`--rotation: ${rotation}deg; --scrolled: ${scrolled}px`">
        <div class="ring" ref="ring" :style="`--ring-color: ${ringColor}`">
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
        <h1 v-if="!loaded">Let me introduce <strong>myself</strong></h1>
        <h1 v-if="loaded">My name is <strong>Sil van Diepen</strong></h1>
        <h4>I’m a Dad, Husband, Illustrator, Developer, Designer, Photographer and love to create good looking and
            working things.
        </h4>
    </Hero>
</template>


<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import Hero from "@/components/Hero.vue";

import { useUI } from "@/composables/useUI";
import { accentColor } from "@/utils";
const { currentColor } = useUI();

const ring = ref(null);
const rotation = ref(0);
const scrolled = ref(0);
const loaded = ref(false);

const handleScroll = () => {
    if (!ring.value) return;
    rotation.value = window.scrollY / 10;
    scrolled.value = window.scrollY;
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);

    setTimeout(() => {
        loaded.value = true;
    }, 4000);
})

const ringColor = computed(() => {
    return accentColor(currentColor.value);
})



</script>

<style lang="scss">
.ring {
    transform-origin: 50% 50%;
    --size: 100vh;

    @media screen and (width <=800px) {
        --size: 100vw;
        opacity: .25;
    }

    opacity: 1;
    position: fixed;
    top: 50lvh;
    right: 0;
    font-family: 'Inter',
    'Roboto',
    sans-serif;
    font-size: 13.5px;
    font-weight: 800;
    text-transform: uppercase;
    fill: var(--ring-color, var(--foreground));
    transform: translate(75%, -50%) rotate(var(--rotation));
    // opacity: .125;
    transform-box: fill-box;
    z-index: 2;

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