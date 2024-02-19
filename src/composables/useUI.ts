

import { computed, reactive } from 'vue';
import { watchState, retrieveState } from "@sil/storage";

const StateKey = 'billy:ui';


const uiState = reactive<{
    mobile: boolean,
    currentColor: string
}>(await retrieveState(
    {
        mobile: false,
        currentColor: 'white',

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
        currentColor: computed({
            get() {
                return uiState.currentColor
            }, set(value: string) {
                uiState.currentColor = value;
            }
        })

    }

}