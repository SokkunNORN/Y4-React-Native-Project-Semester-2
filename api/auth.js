
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
    await docRef.where('uid', '==', id).get().then(doc => {
        doc.forEach(async element => {
            await setCachedUser(element.data())
        })
    })
}

export const signOut = async () => {
    try {
        await auth().signOut()
    } catch (error) {
       console.log(error); 
    }
}