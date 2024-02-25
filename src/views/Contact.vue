<template>
    <div :class="blockClasses">

        <Hero>

            <h1>Let's say <strong>Hi</strong></h1>
            <h4>Understandably, after all you've seen and read on this website, you want to get in contact with Sil. Or
                maybe
                you just want to get more.. Let me help you.</h4>

        </Hero>

        <ContentSection>
            <ButtonGroup>
                <Button :href="social.link" v-for="social in socials" :type="ButtonType.GHOST" :size="ButtonSize.XLARGE" :icon="social.icon"></Button>
            </ButtonGroup>
        </ContentSection>
    </div>
</template>

<script lang="ts" setup>
import { useBemm } from 'bemm';
import { computed } from 'vue';

import { navigationData } from '@/data/navigation';

import ContentSection from '@/components/ContentSection.vue';
import Hero from '@/components/Hero.vue';
import { ButtonGroup, Button, ButtonSize, ButtonType } from '@/components/button';

const bemm = useBemm('contact');

const socials = computed(()=>{
    const contactData = navigationData.find((item) => item.name === 'Contact')
    return contactData?.items || [];
})

const blockClasses = computed(() => {
    return [
        bemm(),
    ]
})




</script>
