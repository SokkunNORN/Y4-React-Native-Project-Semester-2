
import AsyncStorage from '@react-native-async-storage/async-storage'

export const setCachedUser = async payload => {
    await AsyncStorage.setItem('user', JSON.stringify(payload))
}
  
export const getCachedUser = async () => {
    const user = await AsyncStorage.getItem('user') || null

    return user
}

export const resetAuth = async () => {
    await AsyncStorage.removeItem('user')
}
