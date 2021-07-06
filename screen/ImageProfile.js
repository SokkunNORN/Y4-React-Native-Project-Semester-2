import React from 'react'
import {
    StyleSheet,
    View,
    Image
} from 'react-native'
import {
    Appbar
} from 'react-native-paper'
import Header from '../components/header/Header'
import { COLORS, SIZES } from '../constant'
import AppContext from '../context'
import { useNavigation } from '@react-navigation/native'

const ImageProfile = () => {

    const navigation = useNavigation()

    const onBack = () => {
        navigation.goBack()
    }

    return (
        <AppContext.Consumer>
            {
                ({ 
                    isDark
                }) =>
                <>
                    <Header
                        icon='close'
                        onClickBtnOne={ () => onBack() }
                        backgroundColor={  isDark ? COLORS.primary1 : COLORS.light_gray }
                    />
                    <View style={ styles.container }>
                        <Image
                            source={ require('../asset/cover.jpeg') }
                            style={ styles.profile_img }
                            resizeMode='cover'
                        />
                    </View>
                    <Appbar.Header
                        style={{
                            backgroundColor: isDark ? COLORS.primary1 : COLORS.light_gray
                        }}
                    />
                </>
            }
        </AppContext.Consumer>
    )
}

export default ImageProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profile_img: {
        height: SIZES.width,
        width: SIZES.width
    }
})