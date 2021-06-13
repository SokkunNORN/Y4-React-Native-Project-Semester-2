import React from 'react'
import {
    View,
    Text
} from 'react-native'
import DetailHeader from '../components/header/DetailHeader'

const ChatDetail = ({ route }) => {

    const name = route.params

    return (
        <>
            <DetailHeader
                iconRight1='phone'
                iconRight2='video'
                iconRight3='dots-vertical'
                name={ name }
            />
            <View><Text>This is ChatDetail</Text></View>
        </>
    )
}

export default ChatDetail