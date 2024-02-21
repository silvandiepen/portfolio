<template>
    <section :data-color="color.background"  :class="bemm()" :style="`--block-bg: ${color.background}; --block-fg: ${color.foreground}`">
        <div :class="bemm('container')">
            <slot></slot>
        </div>
    </section>
</template>


<script lang="ts" setup>
import { computed, PropType } from "vue";
import { useBemm } from 'bemm';
import { getColor } from "@/utils";
const bemm = useBemm('hero');

const props = defineProps({
    color: {
        type: String as PropType<string>,
        default: null
    }
})

const color = computed(() => {
    return getColor(props.color ? props.color : undefined)
})
</script>


<style lang="scss">
.hero {
    background-color: var(--block-bg);
    color: var(--block-fg);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing);
    padding-block: calc(var(--spacing) * 2);

    @media screen and (width <=800px) {
        padding-top: calc(var(--spacing) * 3);

    }

    &__container {
        width: 640px;
        margin: auto;
        max-width: 100%;
    }

    // h1 {
    //     font-size: clamp(2em, 10vw, 6em);
    // }
}
</style>
