<template>
    <component :is="componentType" :class="blockClasses" :to="to">
        <div :class="bemm('container')">
            <span v-if="icon" :class="bemm('icon-container')">
                <span :class="bemm('icon')">
                    <Icon :name="icon"></Icon>
                </span>
            </span>

            <span v-if="hasSlot" :class="bemm('text')">
                <slot></slot>
            </span>
        </div>
    </component>
</template>

<script lang="ts" setup>
import { PropType, computed, useSlots } from "vue";
import { RouterLink } from "vue-router";
import Icon from '@/components/Icon.vue';
import { useBemm } from 'bemm';

import { Icons } from "@/types";

const bemm = useBemm('button');

const slots = useSlots();


const props = defineProps({
    icon: {
        type: String as PropType<Icons>
    },
    size: {
        type: String as PropType<'small' | 'medium' | 'large'>,
        default: 'medium'
    },
    type: {
        type: String as PropType<'primary' | 'secondary' | 'ghost' | 'default'>,
        default: 'default'
    },
    to: {
        type: String
    },
})

const blockClasses = computed(() => {

    const classes = [bemm()];

    if (props.icon) {
        classes.push(bemm('', 'has-icon'));
    }
    classes.push(bemm('', props.size))
    classes.push(bemm('', props.type))

    if (!hasSlot.value && props.icon) {
        classes.push(bemm('', 'icon-only'));
    }
    if (hasSlot.value && props.icon) {
        classes.push(bemm('', 'text-icon'));
    }

    return classes;
})

const componentType = computed(() => {
    return props.to ? RouterLink : 'button';
})

const hasSlot = computed(() => {
    return !!slots.default;
})

</script>

<style lang="scss">
.button {
    $b: &;
    // background-color: var(--secondary);
    color: var(--secondary-text);
    border-radius: var(--border-radius);
    padding: calc(var(--space) / 2);
    padding-inline: var(--space);
    border: none;

    border-radius: 2em;
    border: none;
    background-color: var(--background);
    position: relative;
    color: var(--foreground);

    text-decoration:none;
    &:has(.icon){
        padding-left: calc(var(--space) / 2);
    }
    


    [style*="--block-bg"] & {
        background-color: color-mix(in oklab, var(--block-bg), var(--background) 20%);
    }



    &__container {
        display: flex;
        gap: calc(var(--space) / 2);
        align-items: center;
    }

    &__text {
        white-space: nowrap;
        line-height: 1.5;
    }

    &--small {
        font-size: .75em;
    }

    &--medium {
        font-size: 1em;
    }

    &--large {
        font-size: 1.25em;
    }

    &--primary {
        background-color: var(--primary);
        color: var(--primary-text);
    }

    &--secondary {
        background-color: var(--secondary);
        color: var(--secondary-text);
    }

    &--ghost {
        color: currentColor;
        background-color: transparent;
    }

    &--default {
        box-shadow: 0 0 0 0px var(--icon-border-color, currentColor) inset;

        transition: box-shadow .2s ease-in-out;

        #{$b}__icon-container {
            padding: .25em;
            box-shadow: 0 0 0 2px var(--icon-border-color, currentColor) inset;
            transition: box-shadow .2s ease-in-out;
        }

        &:hover {
            box-shadow: 0 0 0 2px var(--icon-border-color, currentColor) inset;

            #{$b}__icon-container {

                box-shadow: 0 0 0 2em var(--icon-border-color, currentColor) inset;
            }
        }
    }

    &__icon-container {
        display: block;
        margin-right: .25em;
        border-radius: 50%;
    }

    // &--icon-only {
    //     padding: 0;
    //     font-size: 1.5em;
    //     aspect-ratio: 1/1;
    //     padding: .25em;
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;

    //     .button__icon {
    //         font-size: 1em;
    //         margin: 0;
    //         width: 1em;
    //         height: 1em;
    //     }
    // }

    // &--text-icon {

    //     // padding-left: .25em;
    // }

    &__icon {
        width: 1em;
        height: 1em;
        font-size: 1.5em;
        display: block;

        svg {
            width: 1em;
            height: 1em;

            // filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, .5));

            path {
                fill: currentColor;
            }
        }

    }
}</style>