<template>
    <div :class="bemm()" @click="handleClick">
        <InputSearch :class="bemm('search')" placeholder="Search" v-model="filter.search" :collapse="true" />
        <InputSwitch :class="bemm('category')" :options="types" v-model="filter.type" :as-tooltip="true"></InputSwitch>
    </div>
</template>

<script lang="ts" setup>
import { useBemm } from 'bemm';
import { useRoute } from 'vue-router';
import { PropType, onMounted } from 'vue';
import { Icons } from 'open-icon';

import { useWork } from "@/composables/useWork";
import { InputSwitch, InputSearch } from "@/components/form";


const { bemm } = useBemm('tools');
const { filter } = useWork();
const { params } = useRoute();


defineProps({
    types: {
        type: Array as PropType<{
            label: string,
            value: string,
            icon: Icons
        }[]>,
        default: "all"
    }
})


onMounted(() => {
    if (params.category) {
        filter.value.type = params.category as string;
    }
});


const handleClick = (e: Event) => {
    e.stopPropagation();
}
</script>

<style lang="scss">
.tools {
    $b: &;
    background: var(--background);
    padding: var(--space);
    display: flex;
    gap: var(--space);
    align-items: center;
    justify-content: center;

    margin: auto;
    width: 100%;
    // border-radius: 6em;
    pointer-events: all;

    --input-border-radius: 5em;

    &__search {
        &+#{$b}__category {
            transform: scale(1);
            transition: all .3s;
            max-width: 100vw;
        }

        &:has([class*="full"]) {
            &+#{$b}__category {
                transform: scale(0);
                max-width: 0px;

            }
        }
    }
}
</style>