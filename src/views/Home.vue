
<template>
    <div :class="bemm()">
        <Intro></Intro>
        <ContentSection>
            <h2>About</h2>

            <ButtonGroup>
                <Button :icon="Icons.USER" size="large" to="/about">About me</Button>
                <Button size="large" to="/about/uses">Uses</Button>
                <Button size="large" to="/about/cv">Curriculeum Vitae</Button>
            </ButtonGroup>
        </ContentSection>
        <ContentSection>
            <h2>Work</h2>

            <ButtonGroup>
                <Button size="large" to="/work/projects">Projects</Button>
                <Button size="large" to="/work/packages">Packages</Button>
                <Button size="large" to="/work/photography">Photography</Button>
                <Button size="large" to="/work/clients">Clients</Button>
                <Button size="large" to="/work/icons">Icons</Button>
                <Button size="large" to="/work/illustration">Illustration</Button>
            </ButtonGroup>
        </ContentSection>
        <ContentSection>
            <h2>Contact</h2>
            <ButtonGroup>
                <Button>Contact</Button>
                <Button>Newsletter</Button>
                <Button>Press</Button>
            </ButtonGroup>
        </ContentSection>
    </div>
</template>
<script setup lang="ts">
import ContentSection from "@/components/ContentSection.vue";
import Intro from "@/components/Intro.vue";
import Button from "@/components/Button.vue";
import ButtonGroup from "@/components/ButtonGroup.vue";

import { Icons } from "open-icon";
import { useBemm } from 'bemm';
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