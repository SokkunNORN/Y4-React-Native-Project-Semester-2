
import firestore from '@react-native-firebase/firestore'
import { dateFormat } from '../utils'

const docRef = firestore().collection("message")

export const getMessages = async (uid, participant_id) => {
    let messages = []
    const connectionsId = [uid, participant_id]

    await docRef
    .orderBy('created_at', 'desc')
    .get()
    .then(document => {
        document.forEach(element => {
            if (
                connectionsId.includes(element.data().uid) && 
                connectionsId.includes(element.data().participant_id)
            ) {
                const message = {
                    created_at: dateFormat(element.data().created_at), 
                    uid: element.data().uid,
                    message: element.data().message,
                    participant_id: element.data().participant_id,
                    updated_at: dateFormat(element.data().updated_at),
                    owner: participant_id === element.data().participant_id
                }
                messages.push(message)
            }
        })
    })

    return messages
}