import React from 'react'
import DetailHeader from '../components/header/DetailHeader'
import DarkMode from '../components/settingDetail/DarkMode'

const SettingDetail = ({ route }) => {

    const title = route.params.title

    return (
        <>
            <DetailHeader
                title={ title }
            />
            {
                title === 'Dark Mode' ?
                <DarkMode /> :
                <></>
            }
        </>
    )
}

export default SettingDetail