import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

import { SIZES, COLORS } from '../const'

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
        height: 244,
        marginBottom: SIZES.base(),
        backgroundColor: COLORS.white,
        shadowColor: COLORS.secondary1,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 2,
        shadowOpacity: .3
    }
})