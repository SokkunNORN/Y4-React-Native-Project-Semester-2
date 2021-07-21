
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { setCachedUser } from '../utils'

const docRef = firestore().collection("user")

export const signInWithPhoneNumber = async phoneNumber => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber)

    return confirmation
}

export const createUser = async payload => {
    const response = await docRef.doc(payload.id).set(payload)

    return response
}

export const getAuthentication = async id => {
    await docRef.doc(id).get().then(document => {
        await setCachedUser(document.data())
    })
}

export const signOut = async () => {
    try {
        await auth().signOut()
    } catch (error) {
       console.log(error); 
    }
}