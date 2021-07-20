
import auth from '@react-native-firebase/auth'

export const signInWithPhoneNumber = async phoneNumber => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber)

    return confirmation
}

export const createUser = payload => {

}