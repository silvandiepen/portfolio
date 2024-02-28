// useUnderlayingColor.ts
import { observeSections } from '@/utils/mutationObserver';
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';

export function useUnderlayingColor() {
    const allSections = ref<{ top: number; color: string | null; }[]>([]);
    const backgroundColor = ref<string>('#000000');
    const foregroundColor = ref<string>('#ffffff');
    const route = useRoute();

    const initSections = async () => {
        allSections.value = Array.from(document.querySelectorAll('section[data-color]')).map((section) => {
            return {
                top: section.getBoundingClientRect().top,
                color: section.getAttribute('data-color')
            };
        });
        return allSections.value;
    };

    const getUnderlayingColor = () => {
        // if (!Object.keys(allSections.value).length) initSections();

        const currentTop = window.scrollY - window.innerHeight + 100;
        const currentSection = allSections.value.find(section => section.top > currentTop);

        if (currentSection?.color) {
            backgroundColor.value = currentSection.color;
            foregroundColor.value = currentSection.color.includes('--') ? `var(${currentSection.color}-text)` : 'white';
        }
    };

    onMounted(() => {
        // getUnderlayingColor();
        window.addEventListener('scroll', getUnderlayingColor);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', getUnderlayingColor);
    });

    watch(() => route.path, () => {
        const observer = observeSections('section[data-color]', () => {
            initSections();
            getUnderlayingColor();
            observer.disconnect();
        });
    }, {
        immediate: true,
        deep: true
    });

    return { backgroundColor, foregroundColor };
}