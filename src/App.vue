
<template>
  <div class="app-container">
    <RouterView :key="routeKey" />
  </div>
</template>
<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

import { useUI } from "@/composables/useUI";


const { initCheckMobile } = useUI();
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

</script>
