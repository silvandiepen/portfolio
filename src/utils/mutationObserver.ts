import { onUnmounted } from 'vue';

export function createMutationObserver(callback: MutationCallback) {
    const observer = new MutationObserver(callback);

    observer.observe(document, { childList: true, subtree: true });

    onUnmounted(() => {
        observer.disconnect();
    });

    return observer;
}

export const observeSections = (selector: string = 'section', callback: () => void): MutationObserver => {
    return createMutationObserver((mutations, observer) => {
        // Check if the elements you are interested in have been added
        for (let mutation of mutations) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                for (let node of mutation.addedNodes) {
                    if (node instanceof HTMLElement && node.querySelector(selector)) {

                        callback();
                        observer.disconnect();
                        return;
                    }
                }
            }

        }
    });
}