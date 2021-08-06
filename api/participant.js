
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

                let numberOfUnseenMessage = 0
                participant.unseen_messages.map(item => {
                    if (uid != item.uid) {
                        numberOfUnseenMessage++
                    }
                })
                participant.unseen_message = numberOfUnseenMessage

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

export const participantSeenMessage = async (uid, payload) => {

    payload.unseen_messages.map((item, i) => {
        if (item.uid != uid) {
            payload.unseen_messages.splice(i, 1)
        }
    })

    await docRef.doc(payload.id).update({
        unseen_messages: payload.unseen_messages
    })
    .then(() => {
        return true
    })

    return false
}

export const createParticipant = async payload => {
    await docRef
    .add(payload)
    .then(() => {
        return true
    })
    .catch(() => {
        return false
    })
}

export const checkParticipantConnected = async (uid, participantId) => {
    let isParticipantConnected = false

    await docRef
    .get()
    .then(document => {
        document.forEach(doc => {
            const connectionIds = doc.data().participants.map(item => item.uid)

            if (
                connectionIds.includes(uid) && 
                connectionIds.includes(participantId)
            ) {
                isParticipantConnected = true
            }
        })
    })

    return isParticipantConnected
}