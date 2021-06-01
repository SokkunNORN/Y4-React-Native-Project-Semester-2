
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Button
} from 'react-native'
import {
    Appbar
} from 'react-native-paper'

import { COLORS, SIZES } from '../consts'

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
        fontWeight: 'bold',
        fontSize: SIZES.font(24)
    },
    safearea: {
        backgroundColor: COLORS.dark
    },
    appbar_icon: {
        backgroundColor: COLORS.primary
    },
    searchField: {
      borderWidth: .167,
      borderColor: COLORS.secondary1,
      borderRadius: SIZES.radius(1),
      marginLeft: SIZES.base(),
      marginRight: SIZES.base(),
      marginBottom: SIZES.base(1),
      backgroundColor: COLORS.primary,
      tintColor: COLORS.white,
      color: COLORS.white,
      height: SIZES.customHiegthTextField(8),
      width: SIZES.width - SIZES.base(14),
      position: 'absolute'
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
