import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

import { SIZES, COLORS } from '../consts'

import Header from '../nav/Header'

const Indivual = () => {
    return (
        <>
            <Header>
                <View style={styles.fake_post}></View>
                <View style={styles.fake_post}></View>
                <View style={styles.fake_post}></View>
                <View style={styles.fake_post}></View>
                <View style={styles.fake_post}></View>
                <View style={styles.fake_post}></View>
            </Header>
        </>
    )
}

export default Indivual

const styles = StyleSheet.create({
    fake_post: {
        height: 54,
        marginBottom: SIZES.base(1),
        backgroundColor: COLORS.white,
        shadowColor: COLORS.secondary,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 2,
        shadowOpacity: .3
    }
})