<template>
  <div :class="blockClasses">
    <Hero :color="colors[0]">
      <h1>Some of my <strong>Work</strong></h1>

      <ButtonGroup>
        <Button
          :type="ButtonType.GHOST"
          :size="ButtonSize.XLARGE"
          v-for="work in workTypes"
          :to="{
            name: RouteName.WORK_CATEGORY,
            params: { category: work.value },
          }"
          :icon="work.icon"
          >{{ work.label }}</Button
        >
      </ButtonGroup>
    </Hero>

    <Tools :class="bemm('tools')" :types="workTypes" />
    <List :class="bemm('list')" />
  </div>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
import { Icons } from "open-icon";
import { computed, onMounted, ref } from "vue";

import Hero from "@/components/Hero.vue";
import List from "@/components/WorkList.vue";
import Tools from "@/components/Tools.vue";
import {
  Button,
  ButtonGroup,
  ButtonSize,
  ButtonType,
} from "@/components/button";

import { useWork } from "@/composables/useWork";
import { RouteName } from "@/router";
import { WorkType } from "@/types";
import { eventBus, getColorSet } from "@/utils";

const { loadWork } = useWork();
const bemm = useBemm("work");

const blockClasses = computed(() => {
  return [bemm()];
});


const colors = ref(getColorSet(2));

onMounted(() => {
  eventBus.on("change-colors", () => {
    colors.value = getColorSet(4);
  });
});

onMounted(() => {
  loadWork();
});

const workTypes = [
  {
    label: "All",
    value: WorkType.ALL,
    icon: Icons.MORE,
  },
  {
    label: "Projects",
    value: WorkType.PROJECT,
    icon: Icons.WEBSITE,
  },
  {
    label: "Packages",
    value: WorkType.PACKAGE,
    icon: Icons.BOX,
  },
  // {
  //     label: "Icons",
  //     value: WorkType.ICONS,
  //     icon: Icons.SHAPE_SQUARE
  // },

  {
    label: "Photography",
    value: WorkType.PHOTOGRAPHY,
    icon: Icons.CAMERA,
  },
  // {
  //     label: "Clients",
  //     value: WorkType.CLIENTS,
  //     icon: Icons.USER
  // },

  {
    label: "Logos",
    value: WorkType.LOGO,
    icon: Icons.PATH3,
  },
];
</script>

<style lang="scss">
.work {
  &__tools {
    z-index: 2;
    position: sticky;
    top: 0;

    transition: transform 0.3s ease-in-out;

    // .scroll-down & {
    //     transform: translate(-50%, 100%);
    //     opacity: 0;
    // }
  }
}
</style>
