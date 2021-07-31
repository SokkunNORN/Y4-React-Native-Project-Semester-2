
import firestore from '@react-native-firebase/firestore'
import { dateFormat } from '../utils'

const docRef = firestore().collection("message")

export const getMessages = async (uid, participant_id) => {
    let messages = []

    await docRef
    .orderBy('created_at', 'desc')
    .get()
    .then(document => {
        document.forEach(element => {
            if (participant_id == element.data().participant_id) {
                const message = {
                    created_at: dateFormat(element.data().created_at), 
                    uid: element.data().uid,
                    message: element.data().message,
                    participant_id: element.data().participant_id,
                    updated_at: dateFormat(element.data().updated_at),
                    owner: uid === element.data().user.id
                }
                messages.push(message)
            }
        })
    })

    return messages
}

export const getUnseenMessageNumber = async (uid, participant_id) => {
    let unseenMessage = 0

    await docRef
    .orderBy('created_at', 'desc')
    .get()
    .then(document => {
        document.forEach(element => {
            if (
                participant_id == element.data().participant_id &&
                uid == element.data().user.id &&
                !element.data().seen
            ) {
                unseenMessage++
            }
        })
    })
    console.log(unseenMessage)
    return unseenMessage
}

export const createMessage = async payload => {
    await docRef.add(payload)
    .then(() => {
        return true
    })

    return false
}