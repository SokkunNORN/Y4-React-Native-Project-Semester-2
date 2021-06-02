import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    SafeAreaView,
    StyleSheet,
    StatusBar
} from 'react-native'
import {
    Appbar
} from 'react-native-paper'

import { COLORS, SIZES } from '../../constant'

console.disableYellowBox = true

const DetailHeader = props => {

    const navigation = useNavigation()

    return (
        <SafeAreaView style={ styles.safearea }>
            <StatusBar barStyle='light-content' />
            <Appbar.Header style={ styles.header }>
                <Appbar.Action
                    icon='chevron-left' 
                    color={ COLORS.warning } 
                    onPress={ () => navigation.pop() }
                />
                <Appbar.Content
                    title={ props.title || '' }
                    titleStyle={[
                        styles.headerTitle
                    ]}
                />
                <Appbar.Action
                    icon={ props.iconRight || '' }
                    color={ COLORS.warning } 
                    onPress={ () => {} }
                />
            </Appbar.Header>
        </SafeAreaView>
    )
}

export default DetailHeader

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.dark
    },
    headerTitle: {
        color: COLORS.warning,
        fontWeight: 'normal',
        fontSize: SIZES.font(18)
    },
    safearea: {
        backgroundColor: COLORS.dark
    },
    appbar_icon: {
        backgroundColor: COLORS.primary
    },
    cancelBtn: {
        position: 'absolute'
    },
    showElement: {
        opacity: 1
    },
    blockElement: {
        opacity: 0
    }
})
