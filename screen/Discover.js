import React from 'react'

import {
    Button
} from 'react-native-paper'

const Discover = () => {
    return (
        <>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Discover
            </Button>
        </>
    )
}

export default Discover