import React from 'react'
import DetailHeader from '../components/header/DetailHeader'

const SettingDetail = ({ route }) => {

    const name = route.params.title

    return (
        <>
            <DetailHeader
                name={ name }
            />
        </>
    )
}

export default SettingDetail