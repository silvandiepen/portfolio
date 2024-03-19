<template>
  <div :class="bemm('')">
    <div :class="bemm('category')" v-for="category in Object.values(items)">
      <strong :class="bemm('title')">{{ category.name }}</strong>
      <ul :class="bemm('items')">
        <li :class="bemm('item')" v-for="item in category.technologies"
        :data-tooltip="item.description">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { useBemm } from "bemm";
import { Technologies } from "@/data/cv/types";
const bemm = useBemm("technology-list");

defineProps({
  items: {
    type: Object as PropType<Technologies>,
    required: true,
  },
});
</script>

<style lang="scss">
.technology-list {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--space) * 2);
  &__category {
    width: calc(33.33% - (var(--space) * 1.5));
    @media screen and (width <= 800px){
      width: calc(50% - var(--space)); 
    }
  }
  &__title {
    opacity: 0.5;
  }
  &__item{
    position: relative; 
    &::before{
      transform: scale(0.75);
      content: attr(data-tooltip);
      background-color: var(--background); color: var(--foreground); font-size: .75em; 
      position: absolute; 
      top: 100%; left: 50%; 
      width: 100%; 
      padding: .5em;border-radius: 4px;
      z-index: 2;
      transition: all .2s 0s ease-in-out;
      transform-origin: 0 0;
      opacity: 0; 
      pointer-events:none;
    }
    &:hover::before{
      opacity: 1; 
      pointer-events: all;
      transform: scale(1);   transition: all .3s .5s ease-in-out;
    }
  }
}
</style>
