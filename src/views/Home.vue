
<template>
    <div :class="bemm()">
        <Intro></Intro>
        <ContentSection>
            <h2>
                <Icon :name="Icons.USER" />About
            </h2>

            <ButtonGroup>
                <Button :type="ButtonType.GHOST" :icon="Icons.USER" :size="ButtonSize.XLARGE" to="/about">About me</Button>
                <Button :type="ButtonType.GHOST" :icon="Icons.LAPTOP" :size="ButtonSize.XLARGE"
                    to="/about/uses">Uses</Button>
                <Button :type="ButtonType.GHOST" :icon="Icons.DOCUMENTS" :size="ButtonSize.XLARGE"
                    to="/about/cv">Curriculeum Vitae</Button>
            </ButtonGroup>
        </ContentSection>
        <ContentSection>
            <h2>
                <Icon :name="Icons.BAG2" />Work
            </h2>

            <ButtonGroup>
                <Button :type="ButtonType.GHOST" :icon="Icons.WEBSITE" :size="ButtonSize.XLARGE"
                    to="/work/projects">Projects</Button>
                <Button :type="ButtonType.GHOST" :icon="Icons.BOX" :size="ButtonSize.XLARGE"
                    to="/work/packages">Packages</Button>
                <Button :type="ButtonType.GHOST" :icon="Icons.CAMERA" :size="ButtonSize.XLARGE"
                    to="/work/photography">Photography</Button>
                <Button :type="ButtonType.GHOST" :icon="Icons.USER" :size="ButtonSize.XLARGE"
                    to="/work/clients">Clients</Button>
                <Button :type="ButtonType.GHOST" :icon="Icons.SHAPE_SQUARE" :size="ButtonSize.XLARGE"
                    to="/work/icons">Icons</Button>
                <Button :type="ButtonType.GHOST" :icon="Icons.IMAGE" :size="ButtonSize.XLARGE"
                    to="/work/illustration">Illustration</Button>
            </ButtonGroup>
        </ContentSection>
        <ContentSection>
            <h2>
                <Icon :name="Icons.EMAIL" />Contact
            </h2>
            <ButtonGroup>
                <Button :type="ButtonType.GHOST" :icon="Icons.EMAIL_LETTER" :size="ButtonSize.XLARGE">Contact</Button>
            </ButtonGroup>
        </ContentSection>
    </div>
</template>
<script setup lang="ts">
import { Icons } from "open-icon";
import { useBemm } from 'bemm';

import ContentSection from "@/components/ContentSection.vue";
import Intro from "@/components/Intro.vue";
import {ButtonGroup, Button, ButtonSize, ButtonType } from "@/components/button";
import Icon from "@/components/Icon.vue";
// import Button from "@/components/button/Button.vue";
// import ButtonGroup from "@/components/button/ButtonGroup.vue";

const bemm = useBemm('home');

</script>
  

<style lang="scss">
@keyframes load {
    0% {
        clip-path: inset(0 0 100% 0);
    }

    100% {
        clip-path: inset(0 0 0% 0);
    }


}

.home {

    clip-path: inset(0 0 100% 0);
    animation: load 2s .5s ease-in-out forwards;

    &__intro {}

    &__container {
        padding: calc(var(--spacing) * 2) var(--spacing);
        width: 960px;
        max-width: 100%;
        margin: auto;
    }


}
</style>