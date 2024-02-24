<template>
    <div :class="bemm()">
        <ul :class="bemm('list')">
            <Tag v-if="allTags" is="li" v-for="tag in allTags" :tag="tag.label" :active="isActive(tag)" @click="setTag(tag)" />
            <Button v-if="!showAll" size="small" @click="showAllTags = !showAllTags">{{ showAll ? 'Hide most' : 'Show all tags' }}</Button>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, PropType } from 'vue';
import { useBemm } from 'bemm';

import { Tag as TagType } from "@/types";
import { useWork } from '@/composables/useWork';

import Button from "@/components/Button.vue";
import Tag from '@/components/Tag.vue';

const bemm = useBemm('tags');
const { filter } = useWork();

const props = defineProps({
    tags: {
        type: Array as PropType<{ label: string, occurance?: number }[]>,
        default: null
    },
    showAll: {
        type: Boolean,
        default: true
    }
})

const setTag = (tag: TagType) => {
    if (filter.value.tag?.label == tag.label) filter.value.tag = null;
    else filter.value.tag = tag;
}

const isActive = (tag: TagType): boolean => {
    if (filter.value.tag == null) return false;
    return !!(filter.value.tag.label == tag.label);
}

const showAllTags = ref(props.showAll);

const allTags = computed(() => {
    const { tags } = useWork();
    const myTags = props.tags || tags.value;


    if (props.showAll || showAllTags.value) return myTags;
    else {
        return myTags.filter((tag) => tag.occurance || 2 > 1).sort((a, b) => (b.occurance || 2) - (a.occurance || 2)).splice(0, 10);
    }
});

</script>

<style lang="scss">
.tags {
    &__list {
        list-style: none;

        display: flex;
        gap: calc(var(--space) / 2);
        flex-wrap: wrap;
        align-items: center;
    }
}
</style>