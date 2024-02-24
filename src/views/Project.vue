
<template>
    <div :class="bemm()">
        <Detail :class="bemm('detail')" v-if="work" :work="work" />
        <List :class="bemm('list')" :projects="relatedWork" data-color="--background" />
    </div>
</template>

<script setup lang="ts">

import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { useBemm } from 'bemm';

import Detail from '@/components/WorkDetail.vue';
import List from '@/components/WorkList.vue';
import { useWork } from '@/composables/useWork';

const { getWork, getRelatedWork } = useWork();

const bemm = useBemm('project');

const { params } = useRoute();

const work = computed(() => {
    return getWork(params.slug as string);
})


const relatedWork = computed(() => {
    return getRelatedWork(params.slug as string);
})


</script>

<style lang="scss">
.project {
    background-color: color-mix(in oklab, var(--background) 100%, black 25%);

    &__detail {}

    &__list {}
}
</style>