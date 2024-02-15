
<template>
  <div class="app-container">
    <RouterView :key="routeKey" />
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

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
