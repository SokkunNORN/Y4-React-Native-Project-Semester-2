import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AppContext from '../context'
import { COLORS } from '../constant'
import Header from '../components/header/Header'

const ImageProfile = () => {

    const navigation = useNavigation()

    const onBack = () => {
        navigation.goBack()
    }

    return <AppContext.Consumer>
        {
            ({ isDark }) =>
            <>
                <Header
                    icon='close'
                    onClickBtnOne={ () => onBack() }
                    backgroundColor={  isDark ? COLORS.primary1 : COLORS.light_gray }
                />
                <View>
                </View>
            </>
        }
    </AppContext.Consumer>
}

export default ImageProfile

const style = StyleSheet.create({

})