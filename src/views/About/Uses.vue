<template>
    <div :class="blockClasses">
        <Hero :color="colors[0]">
            <h1>Uses</h1>
            <h4>What did Sil do? For which companies does and did he work? That.. you will find here. </h4>
        </Hero>
        <ContentSection :colors="colors[1]">
            
        </ContentSection>

    </div>
</template>

<script lang="ts" setup>
import ContentSection from '@/components/ContentSection.vue';
import Hero from '@/components/Hero.vue';
import { getColorSet } from '@/utils';
import { useBemm } from 'bemm';
import { computed } from 'vue';
const bemm = useBemm('uses');


const colors = computed(() => {

    return getColorSet(10);
})

const blockClasses = computed(() => {
    return [
        bemm(),
    ]
})

</script>
