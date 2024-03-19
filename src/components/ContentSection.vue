<template>
  <section
    :data-color="color.background"
    :class="blockClasses"
    :style="blockStyles"
    ref="block"
  >
    <div :class="[bemm('divider'), bemm('divider', divider)]"></div>
    <div :class="bemm('container')">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, PropType, ref, onMounted, watch } from "vue";
import { useBemm } from "bemm";
import { accentColor, getColor, isInview, GetColorOutput } from "@/utils";

const bemm = useBemm("content-section");

const inView = ref(false);
const block = ref(null);

const props = defineProps({
  color: {
    type: String as PropType<string>,
    default: null,
  },
  fullWidth: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});

const color = ref<GetColorOutput>({
  background: "",
  foreground: "",
  image: "",
  brightness: 0,
});

const setColor = () => {
  let pColor = props.color;
  if (props.color == "background") {
    pColor = "#0d0529";
  }
  color.value = getColor(pColor ? pColor : undefined);
};

watch(
  () => props.color,
  () => {
    setColor();
  },
  { immediate: true }
);

const divider = ["saw", "waves", "castle"][Math.floor(Math.random() * 3)];

const blockClasses = computed(() => {
  return [
    bemm(),
    inView.value ? "in-view" : "out-view",
    props.fullWidth ? bemm("", "full-width") : "",
  ];
});

onMounted(() => {
  if (block.value)
    inView.value = isInview(block.value, {
      percentage: 25,
      basedOnElement: false,
    });

  window.addEventListener("scroll", () => {
    inView.value = block.value
      ? isInview(block.value, {
          percentage: 25,
          basedOnElement: false,
        })
      : false;
  });
});

const blockStyles = computed(() => {
  return {
    "--block-background": color.value.background,
    "--block-accent": accentColor(color.value.background),
    "--block-foreground": color.value.foreground,
  };
});
</script>

<style lang="scss">
.content-section {
  $b: &;
  background-color: var(--block-background);
  color: var(--block-foreground);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--spacing) * 2) var(--spacing);
  padding-top: var(--spacing);
  position: relative;

  &__divider {
    width: 100vw;
    height: var(--spacing);
    top: calc((var(--spacing) * -1) + 1px);
    left: 0;
    position: absolute;
    overflow: hidden;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      display: block;
    }

    &--saw {
      &::before {
        background-image: linear-gradient(
          to right bottom,
          transparent 50%,
          var(--block-background) 50%
        );
        background-size: calc(var(--spacing) * 2) var(--spacing);
        background-position: 0 0;
        background-repeat: repeat-x;

        animation: saw 15s infinite linear;

        @keyframes saw {
          0% {
            background-position: 0 0;
          }

          100% {
            background-position: calc(var(--spacing) * 2) 0;
          }
        }
      }
    }

    &--castle {
      &::before {
        background-image: linear-gradient(
          to right,
          transparent 50%,
          var(--block-background) 50%
        );
        background-size: calc(var(--spacing) * 2) var(--spacing);
        background-position: 0 0;
        background-repeat: repeat-x;
        animation: castle 20s infinite linear;

        @keyframes castle {
          0% {
            background-position: 0 0;
          }

          100% {
            background-position: calc(var(--spacing) * 2) 0;
          }
        }
      }
    }

    &--waves {
      width: 100vw;

      &::before {
        width: 200%;

        clip-path: polygon(
          100% 100%,
          0 100%,
          0% 100%,
          0.67% 98.91%,
          1.33% 95.68%,
          2% 90.45%,
          2.67% 83.46%,
          3.33% 75%,
          4% 65.45%,
          4.67% 55.23%,
          5.33% 44.77%,
          6% 34.55%,
          6.67% 25%,
          7.33% 16.54%,
          8% 9.55%,
          8.67% 4.32%,
          9.33% 1.09%,
          10% 0%,
          10.67% 1.09%,
          11.33% 4.32%,
          12% 9.55%,
          12.67% 16.54%,
          13.33% 25%,
          14% 34.55%,
          14.67% 44.77%,
          15.33% 55.23%,
          16% 65.45%,
          16.67% 75%,
          17.33% 83.46%,
          18% 90.45%,
          18.67% 95.68%,
          19.33% 98.91%,
          20% 100%,
          20.67% 98.91%,
          21.33% 95.68%,
          22% 90.45%,
          22.67% 83.46%,
          23.33% 75%,
          24% 65.45%,
          24.67% 55.23%,
          25.33% 44.77%,
          26% 34.55%,
          26.67% 25%,
          27.33% 16.54%,
          28% 9.55%,
          28.67% 4.32%,
          29.33% 1.09%,
          30% 0%,
          30.67% 1.09%,
          31.33% 4.32%,
          32% 9.55%,
          32.67% 16.54%,
          33.33% 25%,
          34% 34.55%,
          34.67% 44.77%,
          35.33% 55.23%,
          36% 65.45%,
          36.67% 75%,
          37.33% 83.46%,
          38% 90.45%,
          38.67% 95.68%,
          39.33% 98.91%,
          40% 100%,
          40.67% 98.91%,
          41.33% 95.68%,
          42% 90.45%,
          42.67% 83.46%,
          43.33% 75%,
          44% 65.45%,
          44.67% 55.23%,
          45.33% 44.77%,
          46% 34.55%,
          46.67% 25%,
          47.33% 16.54%,
          48% 9.55%,
          48.67% 4.32%,
          49.33% 1.09%,
          50% 0%,
          50.67% 1.09%,
          51.33% 4.32%,
          52% 9.55%,
          52.67% 16.54%,
          53.33% 25%,
          54% 34.55%,
          54.67% 44.77%,
          55.33% 55.23%,
          56% 65.45%,
          56.67% 75%,
          57.33% 83.46%,
          58% 90.45%,
          58.67% 95.68%,
          59.33% 98.91%,
          60% 100%,
          60.67% 98.91%,
          61.33% 95.68%,
          62% 90.45%,
          62.67% 83.46%,
          63.33% 75%,
          64% 65.45%,
          64.67% 55.23%,
          65.33% 44.77%,
          66% 34.55%,
          66.67% 25%,
          67.33% 16.54%,
          68% 9.55%,
          68.67% 4.32%,
          69.33% 1.09%,
          70% 0%,
          70.67% 1.09%,
          71.33% 4.32%,
          72% 9.55%,
          72.67% 16.54%,
          73.33% 25%,
          74% 34.55%,
          74.67% 44.77%,
          75.33% 55.23%,
          76% 65.45%,
          76.67% 75%,
          77.33% 83.46%,
          78% 90.45%,
          78.67% 95.68%,
          79.33% 98.91%,
          80% 100%,
          80.67% 98.91%,
          81.33% 95.68%,
          82% 90.45%,
          82.67% 83.46%,
          83.33% 75%,
          84% 65.45%,
          84.67% 55.23%,
          85.33% 44.77%,
          86% 34.55%,
          86.67% 25%,
          87.33% 16.54%,
          88% 9.55%,
          88.67% 4.32%,
          89.33% 1.09%,
          90% 0%,
          90.67% 1.09%,
          91.33% 4.32%,
          92% 9.55%,
          92.67% 16.54%,
          93.33% 25%,
          94% 34.55%,
          94.67% 44.77%,
          95.33% 55.23%,
          96% 65.45%,
          96.67% 75%,
          97.33% 83.46%,
          98% 90.45%,
          98.67% 95.68%,
          99.33% 98.91%,
          100% 100%
        );
        background-color: var(--block-background);
        animation: waves 20s infinite linear;

        @keyframes waves {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      }
    }
  }

  & + .content-section {
    --previous-color: var(--block-background);
  }

  &__container {
    width: 640px;
    margin: auto;
    max-width: 100%;

    #{$b}--full-width & {
      width: 100%;
    }

    @media screen and (width <=800px) {
      transform: translateX(calc(var(--spacing) * -1));
      padding-left: calc(var(--spacing) * 2);
    }
  }
}

h2 {
  transform: translateX(calc(var(--spacing) * -1))
    translateY(calc(var(--spacing) * -2));
  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  opacity: 0;
  position: sticky;
  top: 0;
  line-height: 1;

  display: flex;
  font-size: 2em;

  gap: var(--space);

  writing-mode: vertical-rl;
  text-orientation: sideways-right;
  height: 0;
  transform: translateX(-150%);
  padding-top: var(--spacing);

  align-items: center;

  padding: var(--space);

  @media screen and (width <=800px) {
    font-size: 1em;
    transform: translateX(calc(var(--spacing) * -2));
  }

  .in-view & {
    transform: translateX(-100%) translateY(0);

    @media screen and (width <=800px) {
      transform: translateX(calc(var(--spacing) * -2)) translateY(0);
    }

    opacity: 1;
  }

  .icon {
    font-size: 2em;
  }
}

figure {
  max-width: calc(100vw - (var(--spacing) * 2));
  width: 100%;

  & + figure {
    margin-top: var(--spacing);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: var(--space);
  }
}

article,
dl {
  display: block;
  transform: translateX(calc(var(--spacing) * -1));
  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  opacity: 0;

  .in-view & {
    opacity: 1;
    transform: translateX(0);
  }

  @for $i from 1 through 20 {
    &:nth-child(#{$i}) {
      transition-delay: #{$i * 0.1}s;
    }
  }
}
</style>
