import { getBrightness, toHex } from "@sil/color";

const getRandomColor = () => {
    const { r, g, b } = {
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255)
    }
    return toHex(`rgb(${r},${g},${b})`)
}

export const getColor = (color: string | string[] | undefined): {
    background: string;
    foreground: string;
    image: string;
    brightness: number;
} => {


    const defaultColor = getRandomColor();

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