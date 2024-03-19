<template>
  <div :class="blockClasses" :style="blockStyles">
    <Navigation></Navigation>
    <Teleport to="body">
      <button
        :class="
          bemm('change-colors', ['', changingColors ? 'changing' : 'idle'])
        "
        @click="changeColors()"
      >
        <Icon :name="Icons.COLOR_PALLETTE" />
      </button>
    </Teleport>
    <MobileNavigation></MobileNavigation>
    <RouterView v-slot="{ Component }">
      <!-- <transition> -->
      <component :is="Component" :key="routeKey" />
      <!-- </transition> -->
    </RouterView>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, onMounted, computed, Teleport } from "vue";
import { useRoute } from "vue-router";
import { useBemm } from "bemm";
import Navigation from "@/components/Navigation.vue";
import MobileNavigation from "@/components/MobileNavigation.vue";
import { useUI, useScrollDirection } from "@/composables";
import { eventBus } from "./utils";
import Icon from "./components/Icon.vue";
import { Icons } from "open-icon";

const bemm = useBemm("app");

const { initCheckMobile, topColor, midColor, bottomColor } = useUI();
const { onTop, scrollDirection } = useScrollDirection();

onMounted(() => {
  initCheckMobile();
});

const route = useRoute();
const routeKey = ref();
watch(
  () => route,
  () => {
    routeKey.value = `${route.path}${
      route.params.slug ? "-" + route.params.slug : ""
    }`;
  },
  { immediate: true, deep: true }
);

const blockClasses = computed(() => {
  return [
    bemm(),
    onTop.value ? "on-top" : "off-top",
    `scroll-${scrollDirection.value}`,
  ];
});

const blockStyles = computed(() => {
  return {
    "--top-color": topColor.value.bg,
    "--top-text": topColor.value.fg as string,
    "--mid-color": midColor.value.bg,
    "--mid-text": midColor.value.fg as string,
    "--bottom-color": bottomColor.value.bg,
    "--bottom-text": bottomColor.value.fg as string,
  };
});

const changingColors = ref(false);
const changeColors = () => {
  changingColors.value = true;
  setTimeout(() => {
    changingColors.value = false;
  }, 1000);
  eventBus.emit("change-colors");
};
</script>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.app {
  &__change-colors {
    position: fixed;
    left: calc(var(--space) / 2);
    bottom: calc(var(--space) / 2);
    font-size: 1.5em;
    border-radius: 50%;
    border: none;
    background: rgba(var(--foreground-rgb),.5);
    color: var(--background);
    padding: 0.25em;
    transition: all .3s ease-in-out;
    &--changing{
      background-color: var(--foreground);
      animation: rotate 1s infinite forwards;
      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
}
</style>
