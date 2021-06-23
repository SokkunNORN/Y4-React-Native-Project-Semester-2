import React from 'react'
import DetailHeader from '../components/header/DetailHeader'

const SettingDetail = ({ route }) => {

    const title = route.params.title

    return (
        <>
            <DetailHeader
                title={ title }
            />
        </>
    )
}

export default SettingDetail