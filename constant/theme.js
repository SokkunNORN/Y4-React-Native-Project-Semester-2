import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const COLORS = {
    // base colors
    primary: '#002536',
    primary1: '#012130',
    secondary: '#EAEAEA',
    secondary1: '#808080',
    warning: '#F9A11C',
    dark: '#00141C',
    info: '#1549B6',
    danger: '#881E28',
    astronaut_blue: '#033666',
    tuna: '#323443',
    cerulean: '#068AD5',

    red: '#d61545',
    green: '#229F36',
    light_gray: '#FAFAFA',
    ping: '#C5346C',
    ligthPing: '#803065',

    white: '#FFFFFF',
    black: '#000000'
}

export const SIZES = {
    // global sizes
    base: (times = 2) => times * 8,
    font: (size = 14) => size,
    radius: (size = 2) => size * 8,
    space: (size = 16) => size,
    defaultHieghtTextField: 44,
    customHiegthTextField: (value = 10) => 44 - value,

    // dimentsions
    width,
    height
}

export const HexToRGB = (hex, alpha = 1) => {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
}

export const Rounder = (size = SIZES.base()) => {
    return {
        width: size,
        height: size,
        borderRadius: 2 * size
    }
}

export const FONTS = {
    h1: SIZES.base(4),
    h2: SIZES.base(3),
    h3: 18.72,
    h4: SIZES.base(),
    h5: 13.28,
    h6: 12,

    p: SIZES.base(),
    small: SIZES.base(1.5)
}