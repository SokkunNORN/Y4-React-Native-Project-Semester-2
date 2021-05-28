import React from 'react'

import {
    Button
} from 'react-native-paper'

const Setting = () => {
    return (
        <>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Setting
            </Button>
        </>
    )
}

export default Setting