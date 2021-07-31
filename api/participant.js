
import firestore from '@react-native-firebase/firestore'
import { dateFormat } from '../utils'

const docRef = firestore().collection("participant")

export const getParticipant = async (uid) => {
    let participants = [] 
    await docRef
    .orderBy('last_message.created_at', 'desc')
    .get()
    .then(document => {
        document.forEach(doc => {
            const usersId = doc.data().participants.map(item => item.uid)

            if (usersId.includes(uid)) {
                const participant = doc.data()

                participant.id = doc.id
                participant.last_message.created_at = dateFormat(doc.data().last_message.created_at)
                participant.last_message.updated_at = dateFormat(doc.data().last_message.updated_at)

                if (participant.last_message.user.id == uid) {
                    participant.unseen_message = 0
                }

                if (!doc.data().is_group) {
                    doc.data().participants.map(item => {
                        if (item.uid !== uid) {
                            participant.contact_profile = item
                        }
                    })
                }

                participants.push(participant)
            }
        })
    })

    return participants
}

export const updateParticipant = async (id, payload) => {
    await docRef.doc(id)
    .set(payload)
    .then(() => {
        return true
    })

    return false
}