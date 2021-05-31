import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView
} from 'react-native'
import {
    Appbar
} from 'react-native-paper'

import { COLORS, SIZES } from '../consts'

const Header = (props) => {
    return (
        <>
            <Appbar.Header style={ styles.header }>
                <Appbar.Content title="ChatPlus" titleStyle={styles.headerTitle}/>
                <Appbar.Action />
                <Appbar.Action icon="plus" color={ COLORS.warning } onPress={() => {}} />
            </Appbar.Header>
            <SafeAreaView style={styles.safearea}>
                <ScrollView style={styles.scroll}>
                    { props.children }
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Header

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
        backgroundColor: COLORS.primary
    },
    scroll: {
        maxHeight: SIZES.height - 190,
        height: 100 + '%',
        backgroundColor: COLORS.primary
    }
})
