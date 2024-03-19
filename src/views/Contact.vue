<template>
  <div :class="blockClasses">
    <Hero :color="colors[0]">
      <h1>Let's say <strong>Hi</strong></h1>
      <h4>
        Understandably, after all you've seen and read on this website, you want
        to get in contact with Sil. Or maybe you just want to get more.. Let me
        help you.
      </h4>
    </Hero>

    <ContentSection :color="colors[1]">
      <ButtonGroup>
        <Button
          :href="social.link"
          v-for="social in socials"
          :type="ButtonType.GHOST"
          :size="ButtonSize.XLARGE"
          :icon="social.icon"
        ></Button>
      </ButtonGroup>
    </ContentSection>
  </div>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
import { computed, onMounted, ref } from "vue";

import { navigationData } from "@/data/navigation";

import ContentSection from "@/components/ContentSection.vue";
import Hero from "@/components/Hero.vue";
import {
  ButtonGroup,
  Button,
  ButtonSize,
  ButtonType,
} from "@/components/button";
import { eventBus, getColorSet } from "@/utils";

const bemm = useBemm("contact");

const socials = computed(() => {
  const contactData = navigationData.find((item) => item.name === "Contact");
  return contactData?.items || [];
});

const colors = ref(getColorSet(2));

onMounted(() => {
  eventBus.on("change-colors", () => {
    colors.value = getColorSet(4);
  });
});

const blockClasses = computed(() => {
  return [bemm()];
});
</script>
