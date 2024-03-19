<template>
  <nav
    :class="blockClasses"
    ref="nav"
    :style="`--text-color: ${foregroundColor}`"
  >
    <div :class="bemm('container')">
      <div :class="bemm('start')">
        <Button
          v-if="!isHome"
          type="ghost"
          :icon="Icons.ARROW_LEFT"
          @click="goHome()"
          >Back</Button
        >
      </div>
      <div :class="bemm('middle')">
        <RouterLink :class="bemm('logo-link')" to="/">
          <Logo :class="bemm('logo')"></Logo>
        </RouterLink>
      </div>
      <div :class="bemm('end')">
        <ul :class="bemm('list')">
          <li :class="bemm('item')" v-for="item in navigationData">
            <RouterLink :class="bemm('link')" :to="item.link">
              <span :class="bemm('text')">
                {{ item.name }}
              </span>
            </RouterLink>
          </li>
        </ul>
        <span @click="triggerMobileNavigation()" :class="bemm('nav-trigger')">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useBemm } from "bemm";
import { Icons } from "open-icon";
import { useRouter, RouterLink } from "vue-router";

import Logo from "@/components/Logo.vue";
import { Button } from "@/components/button";

import { RouteName } from "@/router";
import { navigationData } from "@/data/navigation";
import { EventAction, eventBus } from "@/utils";
import { useUI, useUnderlayingColor } from "@/composables";

const { push, currentRoute } = useRouter();
const { bemm } = useBemm("nav");
const { color } = useUI();
const { top, mid, bottom } = useUnderlayingColor();

const nav = ref();

const goHome = () => {
  push({ name: RouteName.HOME });
};
const isHome = computed(() => {
  return currentRoute.value.name === RouteName.HOME;
});

const blockClasses = computed(() => {
  return [bemm()];
});

const triggerMobileNavigation = () => {
  eventBus.emit(EventAction.MOBILE_NAVIGATION);
};

const foregroundColor = computed(() => {
  if (top.fg) return top.fg;
  else return `#000000`;
});

watch(
  () => [top.bg, mid.bg, bottom.bg],
  () => {
    color.value = { top: top.bg, mid: mid.bg, bottom: bottom.bg };
  }
);
</script>

<style lang="scss">
@keyframes lineTop {
  0% {
    transform: translate(0em, 0em) rotate(0deg);
  }

  50% {
    transform: translate(0em, calc(0.5em - 1px)) rotate(0deg);
  }

  100% {
    transform: translate(0em, calc(0.5em - 1px)) rotate(45deg);
  }
}

@keyframes lineTopStart {
  0% {
    transform: translate(0em, calc(0.5em - 1px)) rotate(45deg);
  }

  100% {
    transform: translate(0em, 0em) rotate(0deg);
  }
}

@keyframes lineMiddle {
  0% {
    transform: translate(0em, 0em) rotate(0deg);
  }

  50% {
    transform: translate(0, 0) rotate(0deg) scale(3, 1);
  }

  100% {
    transform: translate(0, 0) rotate(0deg) scale(0, 1);
  }
}

@keyframes lineMiddleStart {
  0% {
    transform: translate(5em, 0) rotate(0deg) scale(1, 1);
  }

  100% {
    transform: translate(0em, 0em) rotate(0deg);
  }
}

@keyframes lineBottom {
  0% {
    transform: translate(0em, 0em) rotate(0deg);
  }

  50% {
    transform: translate(0em, calc((0.5em - 1px) * -1)) rotate(0);
  }

  100% {
    transform: translate(0em, calc((0.5em - 1px) * -1)) rotate(-45deg);
  }
}

@keyframes lineBottomStart {
  0% {
    transform: translate(0em, calc((0.5em - 1px) * -1)) rotate(-45deg);
  }

  100% {
    transform: translate(0em, 0em) rotate(0deg);
  }
}

.nav {
  $b: &;
  position: fixed;
  width: 100%;
  transform: translate(0);
  transition: transform 0.25s ease-in-out;
  // padding: calc(var(--spacing) / 2) calc(var(--spacing) - (var(--space) * 2));

  z-index: 20;
  color: var(--text-color);



    font-size: clamp(1em, 2vw, 1.5em);

  &__container {
    display: flex;
    align-items: center;
    width: 100%;
    padding: var(--space);
    border-radius: var(--space);
    position: relative;

    &::before {
      border-radius: inherit;
      content: "";
      z-index: -1;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      // background-color: blue;
    }
  }

  .scroll-down & {
    #{$b}__start,
    #{$b}__middle,
    #{$b}__list {
      transform: translateY(calc((var(--spacing) * 2) * -1));
    }
  }

  .app:has(.mobile-navigation--active) & {
    transform: translateY(0%);

    // color: white !important;
    #{$b}__start,
    #{$b}__middle,
    #{$b}__list {
      transform: translateY(0%);
    }
  }

  .on-top & {
    transform: translateY(0%);
  }

  &--scroll-up {
  }

  &__start,
  &__end,
  &__middle {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 1em;
    transform: translateY(0);
    transition: transform 0.25s ease-in-out;
  }

  &__start {
    align-self: center;
    justify-content: flex-start;
  }

  &__middle {
    align-self: center;
    justify-content: center;
  }

  &__end {
    justify-content: flex-end;
  }

  &__logo {
    height: var(--logo-size, 2em);
    width: var(--logo-size, 2em);
    color: currentColor;
  }

  &__logo-link {
    color: currentColor;
  }

  &__list {
    display: flex;
    gap: var(--space);
    list-style: none;
    padding: 0;
    margin: 0;
    transform: translateY(0);
    transition: transform 0.25s ease-in-out;

    @media screen and (max-width: 768px) {
      display: none;
    }

    margin-right: var(--space);
  }

  &__nav-trigger {
    display: none;
    position: relative;
    cursor: pointer;
    width: var(--nav-trigger-size);
    height: var(--nav-trigger-size);
    padding: 0.5em;
    color: var(--text-color);

    border-radius: 4px;
    flex-direction: column;

    display: flex;
    align-items: center;
    justify-content: space-between;

    --transition-time: 0.5s;

    --transition-ease: cubic-bezier(0, 0.75, 0.5, 1.5);

    span {
      width: 100%;
      height: 2px;
      border-radius: 1px;
      background-color: currentColor;
      transition: transform 0.25s ease-in-out;

      &:nth-child(1) {
        animation: lineTopStart var(--transition-time) var(--transition-ease)
          forwards;
      }

      &:nth-child(2) {
        animation: lineMiddleStart var(--transition-time) var(--transition-ease)
          forwards;
      }

      &:nth-child(3) {
        animation: lineBottomStart var(--transition-time) var(--transition-ease)
          forwards;
      }
    }

    @media screen and (max-width: 768px) {
      display: flex;
    }

    .app:has(.mobile-navigation--active) & {
      span {
        &:nth-child(1) {
          animation: lineTop var(--transition-time) var(--transition-ease)
            forwards;
        }

        &:nth-child(2) {
          animation: lineMiddle var(--transition-time) var(--transition-ease)
            forwards;
        }

        &:nth-child(3) {
          animation: lineBottom var(--transition-time) var(--transition-ease)
            forwards;
        }
      }
    }
  }

  &__link {
    color: inherit;
    text-decoration: none;
  }

    .router-link-active{
        background-color: color-mix(in oklab, var(--current-color), var(--background 10%));
    }

}

</style>
