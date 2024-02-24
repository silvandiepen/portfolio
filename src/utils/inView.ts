export const isInview = (block: Element, options: {
    percentage: number,
    basedOnElement: boolean
} = {
        percentage: 50,
        basedOnElement: false
    }): boolean => {
    if (!block) return false;

    const percentageInView = options.percentage;
    const basedOnElement = options.basedOnElement;

    const rect = block.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    const elementHeight = rect.bottom - rect.top;

    const elementInViewHeight = Math.min(rect.bottom, viewHeight) - Math.max(rect.top, 0);

    const percentage = basedOnElement
        ? (elementInViewHeight / elementHeight) * 100
        : (elementInViewHeight / viewHeight) * 100;

    return percentage >= percentageInView;
};