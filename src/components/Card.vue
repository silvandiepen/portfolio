<template>
    <div :class="bemm()">
        <h3 :class="bemm('title')" v-if="title">{{ title }}</h3>
        <div :class="bemm('container')">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

import { useBemm } from "bemm";
const bemm = useBemm('card');

defineProps({
    title: {
        type: String,
        default: ''
    }
})

</script>

<style lang="scss">
.card {
    padding:calc(var(--space) * 3);
    border-radius: var(--border-radius);

    &__title {
font-weight: 100;
        font-size: 4vw;margin: 0; 
    }

    &__container {
        display: flex;
        gap: var(--space);
        flex-direction: row;
        @media screen and (width <= 800px){
            flex-direction: column;
        }
    }
}
</style>