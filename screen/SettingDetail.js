import React from 'react'
import DetailHeader from '../components/header/DetailHeader'
import ChatBackground from '../components/settingDetail/ChatBackground'
import { COLORS } from '../constant'
import AppContext from '../context'

const SettingDetail = ({ route }) => {

    const title = route.params.title

    return (
        <AppContext.Consumer>
            {
                ({ isDark }) =>
                <>
                    <DetailHeader
                        title={ title }
                        backgroundColor={  isDark ? COLORS.primary1 : COLORS.light_gray }
                    />
                    {
                        title === 'Chat Background' ?
                        <ChatBackground /> :
                        <></>
                    }
                </>
            }
        </AppContext.Consumer>
    )
}

export default SettingDetail