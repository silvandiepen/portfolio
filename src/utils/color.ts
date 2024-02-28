import { getBrightness, getComplimentary, getRandomBright, getRandomColor, toHSL, toHex } from "@sil/color";



export const getColor = (color: string | string[] | undefined = undefined): {
    background: string;
    foreground: string;
    image: string;
    brightness: number;
} => {


    const defaultColor = getRandomBright();

    if (color && typeof color !== "string") {
        const bg = color[0] || defaultColor;



        const fg = getBrightness(bg) > 50 ? 'var(--light)' : 'var(--dark)';

        const points = color.map((color) => {
            return `${color}`
        }).join(', ');

        return {
            foreground: fg,
            background: bg,
            image: `linear-gradient(to right bottom, ${points})`,
            brightness: getBrightness(bg)
        }
    }

    const bg = color as string || defaultColor;
    const fg = getBrightness(bg) < 50 ? 'var(--light)' : 'var(--dark)';

    return {
        foreground: fg,
        background: bg,
        brightness: getBrightness(bg),
        image: ''
    }

}

const getPastel = () => {

    return getRandomColor({
        limit: {
            // h: [0, 360],
            // s: [75, 85],
            // l: [40, 60],

            h: [0, 360],
            s: 100,
            l: [20, 30],
        }
    });
}

export const getColorSet = (total: number = 5) => {

    const color = getPastel();

    const complimentaryColors = getComplimentary(color, {
        total,
        type: 'hue'
    });


    return complimentaryColors.map((c) => (toHex(c)));

}

export const accentColor = (color: string) => {
    const c = toHSL(color);
    return `hsl(${c.h}, ${c.s}%, ${c.l / 1.1}%)`
}