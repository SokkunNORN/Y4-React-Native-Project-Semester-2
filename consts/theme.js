import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const COLORS = {
    // base colors
    primary: '#001C26',
    secondary: '#EAEAEA',
    secondary1: '#808080',
    warning: '#F9A11C',
    dark: '#00141C',

    white: '#FFF',
    black: '#000'
}

export const SIZES = {
    // global sizes
    base: (times = 2) => times * 8,
    radius: 8,
    font: (size = 14) => size,
    radius: (size = 30) => size,
    space: (size = 16) => size,

    // dimentsions
    width,
    height
}

export const FONTS = {

}