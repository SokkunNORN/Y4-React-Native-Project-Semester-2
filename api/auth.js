
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { setCachedUser, resetAuth } from '../utils'

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
    await docRef.doc(id).get().then(async document => {
        await setCachedUser(document.data())
    })
}

export const updateAuthentication = async payload => {
    await docRef.doc(payload.id).set(payload)
}

export const signOut = async () => {
    try {
        await resetAuth()
        await auth().signOut()

        return true
    } catch (error) {
        return false
    }
}

export const findUser = async phoneNumber => {
    let users = []

    await docRef
    .where('phone', '==', `+855 ${phoneNumber}`)
    .get()
    .then(document => {
        document.forEach(item => {
            users.push(item.data())
        })
    })

    return users ? users[0] : null
}