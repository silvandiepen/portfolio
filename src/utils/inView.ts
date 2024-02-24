export const isInview = (block: Element, options: {
    percentage: number
} = {
        percentage: 1
    }): boolean => {
    if (!block) return false;

    const percentageInView = options.percentage;

    const rect = block.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

    const elementInViewHeight = Math.min(rect.bottom, viewHeight) - Math.max(rect.top, 0);

    return (elementInViewHeight / viewHeight) * 100 >= percentageInView;
};