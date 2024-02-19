
<template>
  <div :class="blockClasses" :style="`--current-color: ${currentColor}`">

    <Navigation></Navigation>
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
import { useUI } from "@/composables/useUI";

const bemm = useBemm('app');

const { initCheckMobile, currentColor } = useUI();
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


const onTop = ref(true);
const scrollDirection = ref<'up' | 'down'>('down');
const previousScroll = ref(0);
const handleScroll = () => {
  const currentScroll = window.scrollY;
  onTop.value = currentScroll <= 0;
  scrollDirection.value = currentScroll > previousScroll.value ? 'down' : 'up';
  previousScroll.value = currentScroll;
}


onMounted(() => {

  window.addEventListener('scroll', function () {
    handleScroll();
  })
})

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