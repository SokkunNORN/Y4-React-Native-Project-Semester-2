
import firestore from '@react-native-firebase/firestore'
import { dateFormat } from '../utils'

const docRef = firestore().collection("participant")

export const getParticipant = async (uid) => {
    let participants = [] 
    await docRef.where('uid', '==', uid).get().then(document => {
        document.forEach(element => {
            const participant = {
                contact: {
                    fname: element.data().contact.fname, 
                    image: element.data().contact.image, 
                    lname: element.data().contact.lname, 
                    uid: element.data().contact.uid
                },
                last_massage: {
                    created_at: dateFormat(element.data().last_massage.created_at), 
                    id: element.data().last_massage.id, 
                    message: element.data().last_massage.message, 
                    updated_at: dateFormat(element.data().last_massage.updated_at)
                }, 
                uid: element.data().uid
            }

            participants.push(participant)
        })
    })

    return participants
}