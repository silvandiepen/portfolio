

import { computed, reactive } from 'vue';
import { watchState, retrieveState } from "@sil/storage";

const StateKey = 'billy:ui';


const uiState = reactive<{
    mobile: boolean,
}>(await retrieveState(
    {
        mobile: false,

    }, StateKey))

watchState(uiState, StateKey)

const initCheckMobile = () => {
    window && uiState.mobile === window.innerWidth < 768;
    window && window.addEventListener('resize', () => {
        uiState.mobile = window.innerWidth < 768
    })
}

export const useUI = () => {

    return {
        initCheckMobile,
        isMobile: computed(() => uiState.mobile),

    }

}