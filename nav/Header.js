import React from 'react'
import {
    SafeAreaView,
    Platform,
    StyleSheet,
    ScrollView
} from 'react-native'
import {
    Appbar
} from 'react-native-paper'

import { COLORS, SIZES } from '../consts'

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const Header = (props) => {
    return (
        <>
            <Appbar.Header style={ styles.header }>
                <Appbar.Content title="ChatPlus" titleStyle={styles.headerTitle}/>
                <Appbar.Action icon="magnify" style={styles.headerAction} onPress={() => {}} />
                <Appbar.Action icon={MORE_ICON} style={styles.headerAction} onPress={() => {}} />
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
        fontWeight: 'bold'
    },
    headerAction: {
        backgroundColor: COLORS.warning
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
