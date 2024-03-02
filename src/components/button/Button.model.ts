export const ButtonType = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    GHOST: 'ghost',
    INHERIT: 'inherit',
    DEFAULT: 'default'
}
export type ButtonType = typeof ButtonType[keyof typeof ButtonType];


export const ButtonSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
    XLARGE: 'xlarge'
}
export type ButtonSize = typeof ButtonSize[keyof typeof ButtonSize];