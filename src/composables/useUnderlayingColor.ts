// useUnderlayingColor.ts
import { observeSections } from "@/utils/mutationObserver";
import { ref, onMounted, onUnmounted, watch, reactive } from "vue";
import { useRoute } from "vue-router";

export function useUnderlayingColor() {
  const allSections = ref<{ top: number; color: string | null }[]>([]);

  const colors = reactive({
    top: {
      bg: "#000000",
      fg: "#ffffff",
    },
    mid: {
      bg: "#000000",
      fg: "#ffffff",
    },
    bottom: {
      bg: "#000000",
      fg: "#ffffff",
    },
  });

  const route = useRoute();

  const initSections = async () => {
    allSections.value = Array.from(
      document.querySelectorAll("section[data-color]")
    ).map((section) => {
      return {
        top: section.getBoundingClientRect().top,
        color: section.getAttribute("data-color"),
      };
    });
    return allSections.value;
  };

  const getColorByPosition = (position: number) => {
    const currentSection = allSections.value.filter(
      (section) => section.top > position
    )[0];
    if (currentSection?.color) {
      return currentSection.color;
    } else {
      return null;
    }
  };

  const getTextColor = (color: string) => {
    return color.includes("--") ? `var(${color}-text)` : "white";
  };

  const getUnderlayingColor = () => {
    const topColor = getColorByPosition(
      window.scrollY - window.innerHeight + 100
    );
    const midColor = getColorByPosition(
      window.scrollY - window.innerHeight / 2 + 10
    );
    const bottomColor = getColorByPosition(window.scrollY - 10);

    if (topColor) {
      colors.top.bg = topColor;
      colors.top.fg = getTextColor(topColor);
    }
    if (midColor) {
      colors.mid.bg = midColor;
      colors.mid.fg = getTextColor(midColor);
    }
    if (bottomColor) {
      colors.bottom.bg = bottomColor;
      colors.bottom.fg = getTextColor(bottomColor);
    }
  };

  onMounted(() => {
    // getUnderlayingColor();
    window.addEventListener("scroll", getUnderlayingColor);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", getUnderlayingColor);
  });

  watch(
    () => route.path,
    () => {
      const observer = observeSections("section[data-color]", () => {
        initSections();
        getUnderlayingColor();
        observer.disconnect();
      });
    },
    {
      immediate: true,
      deep: true,
    }
  );

  return { top: colors.top, mid: colors.mid, bottom: colors.bottom };
}
