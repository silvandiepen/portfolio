import { ref, onMounted, onUnmounted, Ref } from 'vue';


export const ScrollDirection = {
    UP: 'up',
    DOWN: 'down'
}
export type ScrollDirection = typeof ScrollDirection[keyof typeof ScrollDirection];

export const useScrollDirection = (): {
    onTop: Ref<boolean>,
    scrollDirection: Ref<ScrollDirection>
} => {
    const onTop = ref(true);
    const scrollDirection = ref<ScrollDirection>(ScrollDirection.DOWN);
    const previousScroll = ref(0);

    const handleScroll = () => {
        const currentScroll = window.scrollY;
        onTop.value = currentScroll <= 0;
        scrollDirection.value = currentScroll > previousScroll.value ? ScrollDirection.DOWN : ScrollDirection.UP;
        previousScroll.value = currentScroll;
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });

    return { onTop, scrollDirection };
}