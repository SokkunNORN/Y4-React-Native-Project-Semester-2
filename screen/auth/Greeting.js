import React, { useEffect } from 'react'
import {
    StyleSheet,
    StatusBar,
    View
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SIZES, COLORS, HexToRGB } from '../../constant'
import AppContext from '../../context'
import Routes from '../../routes'
import { useNavigation } from '@react-navigation/native'

const Greeting = () => {

    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.push(Routes.PHONE_NUMBER)
        }, 1000)
    }, [])

    return (
        <AppContext.Consumer>
            {
                ({ isDark }) =>
                <>
                    <StatusBar barStyle={ isDark ? 'light-content' : 'dark-content' } />
                    <View style={[
                        styles.container,
                        {
                            backgroundColor: isDark ? COLORS.primary : COLORS.white
                        }
                    ]}>
                        <View style={ styles.view_logo_icon }>
                            <Icon
                                name='snapchat'
                                style={ styles.logo_icon }
                                color={ COLORS.warning } size={ SIZES.base(12) } />
                        </View>
                    </View>
                </>
            }
        </AppContext.Consumer>
    )
}

export default Greeting

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    },
    view_logo_icon: {
        backgroundColor: HexToRGB(COLORS.warning, .2),
        borderRadius: SIZES.radius(),
        alignSelf: 'center'
    },
    logo_icon: {
        padding: SIZES.base(1.5)
    },
})