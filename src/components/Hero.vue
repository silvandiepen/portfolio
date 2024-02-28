<template>
    <section :data-color="color.background" :class="bemm()" :style="blockStyles">
        <div :class="bemm('container')">
            <slot></slot>
        </div>
    </section>
</template>


<script lang="ts" setup>
import { computed, PropType } from "vue";
import { useBemm } from 'bemm';
import { getColor } from "@/utils";
import { useMousePosition } from "@/composables";
const bemm = useBemm('hero');


const mousePosition = useMousePosition();

const props = defineProps({
    color: {
        type: String as PropType<string>,
        default: null
    }
})

const color = computed(() => {
    return getColor(props.color ? props.color : undefined)
})

const blockStyles = computed(() => {
    return {
        '--block-background': color.value.background,
        '--block-foreground': color.value.foreground,
        '--mouse-x': `${mousePosition.value[0]}px`,
        '--mouse-y': `${mousePosition.value[1]}px`
    }
})



</script>


<style lang="scss">
.hero {
    background-color: var(--block-background);
    color: var(--block-foreground);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing);
    padding-block: calc(var(--spacing) * 2);
    position: relative;

    &::before {
        background-image: radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--block-foreground) 0%, var(--block-background) 100%);
        content: "";
        z-index: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        opacity: .25;
    }


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

    .button-group {
        margin-top: var(--spacing);
        gap: 0;
        font-size: .75em;
    }
}
</style>
