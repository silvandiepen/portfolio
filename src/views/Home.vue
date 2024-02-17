
<template>
    <div :class="bemm()">


        <div :class="bemm('intro')">
            <div :class="bemm('container')">
            
                <h1>Sil's Portfolio</h1>
            <p>Here are some of the projects I've been working on.</p>
            </div>
        </div>
        <Tools :class="bemm('tools')" />
        <List :class="bemm('list')" />
    </div>
</template>
<script setup lang="ts">
import List from '@/components/ProjectList.vue';
import Tools from '@/components/Tools.vue';

import { useBemm } from 'bemm';
const bemm = useBemm('home');

</script>
  

<style lang="scss">
.home {
    &__intro {


        display: flex;
        flex-direction: column;
        gap: var(--space);
        text-align: left;

        background-color: var(--secondary);
        color: var(--secondary-text);

        @media screen and (orientation:portrait){
            aspect-ratio:3/2;
        }
        @media screen and (width <= 769px){
            aspect-ratio:1/1;
        }
    }
    &__container {
        padding: calc(var(--spacing) * 2) var(--spacing);
        width: 960px;
        max-width: 100%;
        margin: auto;
    }


    &__tools {
        transform: translateY(-50%);
    }
}
</style>