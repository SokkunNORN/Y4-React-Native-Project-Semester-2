import React from 'react'

import {
    Button
} from 'react-native-paper'

const Indivual = () => {
    return (
        <>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Indivual
            </Button>
        </>
    )
}

export default Indivual