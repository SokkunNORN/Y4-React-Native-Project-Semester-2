import React, { useState } from 'react'

import {
    View
} from 'react-native'

import {
    Button,
    Snackbar
} from 'react-native-paper'

const ButtonView = () => {

    const [isShow, setIsShow] = useState(false)

    const onDismissSnackBar = () => {
        setIsShow(false)
    }

    return (
        <>
            <View>
                <Button mode='contained' onPress={() => setIsShow(true)}>
                    Click Sen Merl
                </Button>

                <Snackbar
                    visible={isShow}
                    onDismiss={onDismissSnackBar}
                    action={{
                        label: 'Undo',
                        onPress: () => {
                            // Do something
                        },
                    }}>
                    Hey there! I'm a Snackbar.
                </Snackbar>
            </View>
        </>
    )
}

export default ButtonView