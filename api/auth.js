
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { setCachedUser } from '../utils'

const docRef = firestore().collection("user")

export const signInWithPhoneNumber = async phoneNumber => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber)

    return confirmation
}

export const createUser = async payload => {
    const response = await docRef.add(payload)

    return response
}

export const getAuthentication = async uid => {
    await docRef.where('uid', '==', uid).get().then(doc => {
        doc.forEach(async element => {
            await setCachedUser(element.data())
        })
    })
}