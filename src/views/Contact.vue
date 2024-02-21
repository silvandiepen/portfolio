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
                <Button :href="social.link" v-for="social in socials" :icon="getIcon(social.brand)">{{ social.brand }}</Button>

            </ButtonGroup>

        </ContentSection>
    </div>
</template>

<script lang="ts" setup>
import { useBemm } from 'bemm';
import { computed } from 'vue';

import ContentSection from '@/components/ContentSection.vue';
import Hero from '@/components/Hero.vue';
import Button from '@/components/Button.vue';
const bemm = useBemm('contact');

import { searchIcon, Icons } from 'open-icon';
import ButtonGroup from '@/components/ButtonGroup.vue';

const blockClasses = computed(() => {
    return [
        bemm(),
    ]
})

const getIcon = (brand: string): Icons => {
    const foundIcons = searchIcon(`brand-${brand}`);
    if (!foundIcons || !foundIcons.length) {
        console.log('couldnt find icon', brand)
        return Icons.RECYCLE;
    }
    return foundIcons[0].name as Icons;
}

const socials = [{
    brand: 'x',
    link: 'https://x.com/silvandiepen'
}, {
    brand: 'facebook',
    link: 'https://facebook.com/silvandiepen'
}, {
    brand: 'linkedin',
    link: 'https://linkedin.com/in/silvandiepen'
}, {
    brand: 'instagram',
    link: 'https://instagram.com/silvandiepen'
}, {
    brand: 'github',
    link: 'http://github.com/silvandiepen'
}, {
    brand: 'codepen',
    link: 'http://codepen.io/silvandiepen'
}]

</script>
