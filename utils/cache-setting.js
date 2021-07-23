
import AsyncStorage from '@react-native-async-storage/async-storage'

export const setTheme = async isDark => {
    await AsyncStorage.setItem('isDark', JSON.stringify(isDark))
}

export const getTheme = async () => {
    const theme = await AsyncStorage.getItem('isDark')

    return theme
}

export const setChatBackgroundIndex = async index => {
    await AsyncStorage.setItem('chatBackgroundIndex', JSON.stringify(index))
}

export const getChatBackgroundIndex = async () => {
    const index = await AsyncStorage.getItem('chatBackgroundIndex')

    return index
}