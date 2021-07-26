
import AsyncStorage from '@react-native-async-storage/async-storage'

export const setThemeApp = async isDark => {
    await AsyncStorage.setItem('isDark', JSON.stringify(isDark))
}

export const getThemeApp = async () => {
    const theme = await AsyncStorage.getItem('isDark') || false

    return theme
}

export const setChatBackgroundAppIndex = async index => {
    await AsyncStorage.setItem('chatBGIndex', JSON.stringify(index))
}

export const getChatBackgroundAppIndex = async () => {
    const index = await AsyncStorage.getItem('chatBGIndex') || 0

    return index
}