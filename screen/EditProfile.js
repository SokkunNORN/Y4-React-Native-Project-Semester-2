import React from 'react'
import {
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
import Header from '../components/header/Header'
import AppContext from '../context'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../constant'

const EditProfile = () => {

    const navigation = useNavigation()

    const onBack = () => {
        navigation.goBack()
    }

    return (
        <AppContext.Consumer>
            {
                ({ isDark }) => 
                <TouchableWithoutFeedback
                    onPress={ () => Keyboard.dismiss() }
                >
                    <>
                        <Header
                            title='Edit Profile'
                            icon='close'
                            onClickBtnOne={ () => onBack() }
                            backgroundColor={ isDark ? COLORS.primary1 : COLORS.light_gray }
                        />
                    </>
                </TouchableWithoutFeedback>
            }
        </AppContext.Consumer>
    )
}

export default EditProfile