
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const docRef = firestore().collection("user")

export const signInWithPhoneNumber = async phoneNumber => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber)

    return confirmation
}

export const createUser = async payload => {
    const response = await docRef.add(payload)

    return response
}