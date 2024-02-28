<template>
    <nav :class="blockClasses" :style="blockStyles">
        <div :class="bemm('container')">

            <ul :class="bemm('list')">
                <li :class="bemm('item')" v-for="item in navigationData">
                    <RouterLink :class="bemm('link')" :to="item.link">
                        <span :class="bemm('text')">
                            {{ item.name }}

                        </span>
                        <Icon :name="Icons.ARROW_RIGHT" />

                    </RouterLink>
                    <ButtonGroup>
                        <Button v-for="button in item.items" :class="bemm('button')" :icon="button.icon"
                            :type="ButtonType.GHOST" :size="ButtonSize.MEDIUM"
                            :to="!isHref(button.link || '') ? button.link : ''"
                            :href="isHref(button.link || '') ? button.link : ''">{{ button.label }}</Button>
                    </ButtonGroup>

                </li>
            </ul>
        </div>
    </nav>
</template>
<script setup lang="ts">
import {
    computed,
    watch,
    ref,
    onMounted
} from "vue";
import { useBemm } from "bemm";
import { Icons } from "open-icon";
import {
    RouterLink
} from 'vue-router';
import { navigationData } from "@/data/navigation";
import router from "@/router";
import { accentColor, EventAction, eventBus } from "@/utils";

import { Button, ButtonGroup, ButtonType, ButtonSize } from "@/components/button";
import Icon from "@/components/Icon.vue";
import { textColor } from "@sil/color";


import { useUI } from "@/composables/useUI";


const { currentColor } = useUI();

const bemm = useBemm('mobile-navigation');

const isActive = ref(false);

const blockClasses = computed(() => {
    return [
        bemm(),
        bemm('', isActive.value ? 'active' : 'inactive')
    ]
})

const blockStyles = computed(() => {
    return {
        '--block-background': accentColor(currentColor.value),
        '--block-foreground': `${textColor(currentColor.value)}`
    }
})

const isHref = (link: string) => link.includes('//');

watch(() => router.currentRoute.value, () => {
    isActive.value = false;
})

onMounted(() => {

    eventBus.on(EventAction.MOBILE_NAVIGATION, () => {
        isActive.value = !isActive.value;
    })

})



</script>

<style lang="scss">
.mobile-navigation {
    $b: &;
    position: fixed;


    width: 100vw;
    height: 100vh;
    background-color: var(--block-background);
    color: var(--block-foreground);
    z-index: 10;
    display: flex;
    // align-items: center;
    // justify-content: center;
    padding-top: calc(var(--spacing) * 2);

    clip-path: circle(2em at calc(100vw - var(--spacing)) calc(var(--spacing) + (var(--space) * 1)));

    @media screen and (width >=800px) {
        clip-path: circle(2em at calc(100vw - var(--spacing) - (var(--space) / 2)) calc(var(--spacing) + (var(--space) / 2)));

    }

    transition: all .8s cubic-bezier(0.86, 0, 0.07, 1);



    &--inactive {}

    &--active {

        // background-color:  var(--block-background);
        clip-path: circle(200% at calc(100vw - var(--spacing)) calc(var(--spacing) + var(--space)));
    }

    .scroll-down & {
        // transform: translateX(calc(var(--spacing) * 2));
    }

    .on-top &,
    .app:has(.mobile-navigation--active) & {
        transform: translateX(0);
    }

    &__list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        // align-items: center;
        // justify-content: center;
    }

    &__container {
        padding: var(--spacing);
    }

    &__link {
        // color: var(--primary);
        color: currentColor;
        font-size: 1.5em;
        text-decoration: none;
        font-weight: 900;
        text-transform: uppercase;
        width: 100%;
        text-align: center;
        margin-top: var(--space);
        display: flex;
        align-items: center;
    }
}
</style>