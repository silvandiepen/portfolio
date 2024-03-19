import { computed, reactive } from "vue";
import { watchState, retrieveState } from "@sil/storage";
import { textColor } from "@sil/color";

const StateKey = "billy:ui";

const uiState = reactive<{
  mobile: boolean;
  topColor: string;
  midColor: string;
}>(
  await retrieveState(
    {
      mobile: false,
      color: {
        top: "#ffffff",
        mid: "#ffffff",
      },
    },
    StateKey
  )
);

watchState(uiState, StateKey);

const initCheckMobile = () => {
  window && uiState.mobile === window.innerWidth < 768;
  window &&
    window.addEventListener("resize", () => {
      uiState.mobile = window.innerWidth < 768;
    });
};

export const useUI = () => {
  return {
    initCheckMobile,
    isMobile: computed(() => uiState.mobile),
    color: computed({
      get() {
        return uiState.color;
      },
      set(value: { top: string; mid: string }) {
        uiState.color = { ...uiState.color, ...value };
      },
    }),
    topColor: computed(() => ({
      bg: uiState.color.top,
      fg: uiState.color.top.includes("--")
        ? `var(${uiState.color.top}-text)`
        : textColor(uiState.color.top),
    })),
    midColor: computed(() => ({
      bg: uiState.color.mid,
      fg: uiState.color.mid.includes("--")
        ? `var(${uiState.color.mid}-text)`
        : textColor(uiState.color.mid),
    })),
    bottomColor: computed(() => ({
      bg: uiState.color.bottom,
      fg: uiState.color.bottom.includes("--")
        ? `var(${uiState.color.bottom}-text)`
        : textColor(uiState.color.bottom),
    })),
  };
};
