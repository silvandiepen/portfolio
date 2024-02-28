
<template>
  <div :class="blockClasses" :style="`--current-color: ${currentColor}`">

    <Navigation></Navigation>
    <MobileNavigation></MobileNavigation>
    <RouterView v-slot="{ Component }">
      <!-- <transition> -->
      <component :is="Component" :key="routeKey" />
      <!-- </transition> -->
    </RouterView>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useBemm } from "bemm";
import Navigation from '@/components/Navigation.vue';
import MobileNavigation from '@/components/MobileNavigation.vue';
import { useUI, useScrollDirection } from "@/composables";

const bemm = useBemm('app');

const { initCheckMobile, currentColor } = useUI();
const { onTop, scrollDirection } = useScrollDirection();


onMounted(() => {
  initCheckMobile();
})


const route = useRoute();
const routeKey = ref();
watch(
  () => route,
  () => {
    routeKey.value = `${route.path}${route.params.slug ? "-" + route.params.slug : ""}`;
  },
  { immediate: true, deep: true }
);



const blockClasses = computed(() => {
  return [
    bemm(),
    onTop.value ? 'on-top' : 'off-top',
    `scroll-${scrollDirection.value}`
  ]
})

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
</style>