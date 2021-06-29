import React from 'react'
import DetailHeader from '../components/header/DetailHeader'
import ChatBackground from '../components/settingDetail/ChatBackground'

const SettingDetail = ({ route }) => {

    const title = route.params.title

    return (
        <>
            <DetailHeader
                title={ title }
            />
            {
                title === 'Chat Background' ?
                <ChatBackground /> :
                <></>
            }
        </>
    )
}

export default SettingDetail