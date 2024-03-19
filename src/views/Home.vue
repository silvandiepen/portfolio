
<template>
    <div :class="bemm()">
        <Intro :background-color="colors[0]"> </Intro>
        
        <ContentSection :color="colors[1]">
            <h2>
                <Icon :name="Icons.USER" />About
            </h2>

            <ButtonGroup>
                <Button v-for="button in aboutNav" :type="ButtonType.INHERIT" :icon="button.icon" :size="ButtonSize.XLARGE"
                    :to="button.link">{{button.label}}</Button>
            </ButtonGroup>
        </ContentSection>

        <ContentSection :color="colors[2]">
            <h2>
                <Icon :name="Icons.BAG2" />Work
            </h2>
            <ButtonGroup>
                <Button v-for="button in workNav" :type="ButtonType.INHERIT" :icon="button.icon" :size="ButtonSize.XLARGE"
                    :to="button.link">{{button.label}}</Button>
            </ButtonGroup>

        </ContentSection>

        <ContentSection :color="colors[3]">
            <h2>
                <Icon :name="Icons.EMAIL" />Contact
            </h2>
            <ButtonGroup>
                <Button v-for="button in contactNav" :type="ButtonType.INHERIT" :icon="button.icon" :size="ButtonSize.XLARGE"
                    :to="button.link">{{button.label}}</Button>
            </ButtonGroup>
        </ContentSection>

    </div>
</template>
<script setup lang="ts">
import { Icons } from "open-icon";
import { useBemm } from 'bemm';

import { navigationData } from "@/data/navigation";

import ContentSection from "@/components/ContentSection.vue";
import Intro from "@/components/Intro.vue";
import { ButtonGroup, Button, ButtonSize, ButtonType } from "@/components/button";
import Icon from "@/components/Icon.vue";
import { onMounted, ref } from "vue";
import { eventBus, getColorSet } from "@/utils";

const bemm = useBemm('home');

const workNav = navigationData.find(item => item.name === 'Work')?.items || [];
const aboutNav = navigationData.find(item => item.name === 'About')?.items || [];
const contactNav = navigationData.find(item => item.name === 'Contact')?.items || [];

const colors = ref(getColorSet(2));

onMounted(() => {
  eventBus.on("change-colors", () => {
    colors.value = getColorSet(4);
  });
});
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