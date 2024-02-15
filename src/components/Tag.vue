<template>
    <component :is="is" :class="[bemm(), bemm('', active ? 'active' : 'inactive')]">{{ tag }}</component>
</template>


<script lang="ts" setup>
import { useBemm } from 'bemm';
const bemm = useBemm('tag');
defineProps({
    tag: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    },
    is: {
        type: String,
        default: 'span'
    }
})
</script>
<style lang="scss">
.tag {
    white-space: nowrap;
    font-size: .75em;
    padding: calc(var(--space) / 3) var(--space);
    border-radius: 3em;
    border: 1px solid rgba(var(--primary-rgb), .5);

    --bg-color: color-mix(in oklch, var(--background) 100%, black 25%);
    background-image: linear-gradient(to right bottom, var(--bg-color), var(--background));



    &--active {
        background-image: linear-gradient(to right bottom, var(--primary), var(--secondary));
    }

    &::before {
        opacity: .25;
        content: "#"
    }
}
</style>