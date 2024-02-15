<template>
    <div :class="bemm()">
        <ul :class="bemm('list')">
            <Tag is="li" v-for="tag in allTags" :tag="tag.label" :active="isActive(tag)" @click="setTag(tag)" />
            <Button size="small" @click="showAll = !showAll">{{ showAll ? 'Hide most' : 'Show all tags' }}</Button>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useBemm } from 'bemm';

import { Tag as TagType } from "@/types";
import Button from "@/components/Button.vue";
import { useProjects } from '@/composables/useProjects';

import Tag from './Tag.vue';

const bemm = useBemm('tags');
const { tags, filter } = useProjects();

const setTag = (tag: TagType) => {
    if (filter.value.tag?.label == tag.label) filter.value.tag = null;
    else filter.value.tag = tag;
}

const isActive = (tag: TagType): boolean => {
    if (filter.value.tag == null) return false;
    return !!(filter.value.tag.label == tag.label);
}

const showAll = ref(false);

const allTags = computed(() => {
    if (showAll.value) return tags.value;
    else {
        return tags.value.filter((tag) => tag.occurance > 1).sort((a, b) => b.occurance - a.occurance).splice(0, 10);
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