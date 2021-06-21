import React from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SIZES, COLORS, HexToRGB } from '../../constant'

const Greeting = () => {
    return (
        <>
            <View style={ styles.container }>
                <View style={ styles.view_logo_icon }>
                    <Icon
                        name='snapchat'
                        style={ styles.logo_icon }
                        color={ COLORS.warning } size={ SIZES.base(12) } />
                </View>
            </View>
        </>
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