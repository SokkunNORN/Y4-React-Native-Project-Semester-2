import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Routes from '../routes'
import {
    ScrollView
} from 'react-native'
import Header from '../components/header/Header'
import ListChat from '../components/ListChat'
import { getParticipant } from '../api'
import { getCachedUser } from '../utils'

let intervalId = null

const Chat = () => {

  const navigation = useNavigation()
  const [participants, setParticipants] = useState([])

    const getListParticipants = async () => {
        const user = await getCachedUser()

        try {
            const response = await getParticipant(user.id)

            setParticipants(response)
        } catch (error) {
            alert(error)
        }
    }

    const onSelectParticipant = participant => {
        navigation.push(Routes.CHAT_DETAIL, participant)
    }

    useEffect(() => {
        getListParticipants()

        navigation.addListener('focus', () => {
            getListParticipants()
            intervalId = setInterval(() => {
                getListParticipants()
            }, 1500)
        })

        navigation.addListener('blur', () => {
            clearInterval(intervalId)
        })
    }, [])

    return (
        <>
            <Header
                title="Chat Plus"
                isSearch
                icon="plus"
                onClickBtnOne={ () => {} }
            />
            <ScrollView
                showsVerticalScrollIndicator={ false }
            >
                {
                    participants.map((item, i) => (
                        <ListChat
                            key={ i }
                            participant={ item }
                            selectParticipant={ value => onSelectParticipant(value) }
                        />
                    ))
                }   
            </ScrollView>
        </>
    )
}

export default Chat