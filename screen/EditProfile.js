import React from 'react'
import {
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
import AppContext from '../context'

const EditProfile = () => {
    return (
        <AppContext.Consumer>
            {
                ({ isDark }) => 
                <TouchableWithoutFeedback
                    onPress={ () => Keyboard.dismiss() }
                >
                    <>

                    </>
                </TouchableWithoutFeedback>
            }
        </AppContext.Consumer>
    )
}

export default EditProfile