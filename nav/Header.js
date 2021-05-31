import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Animated,
    StatusBar
} from 'react-native'
import {
    Appbar
} from 'react-native-paper'

import Search from './Search'

import { COLORS, SIZES } from '../consts'

console.disableYellowBox = true;

const Header = props => {

    const [scrollYValue, setScrollYValue] = useState(new Animated.Value(0));
    const clampedScroll = Animated.diffClamp(
        Animated.add(
            scrollYValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolateLeft: 'clamp',
            }),
            new Animated.Value(0),
        ),
        0,
        50,
    )

    return (
        <SafeAreaView style={ styles.safearea }>
            <Animated.View>
                <StatusBar barStyle='light-content' />
                <Appbar.Header style={ styles.header }>
                    <Appbar.Content title="ChatPlus" titleStyle={styles.headerTitle}/>
                    <Appbar.Action />
                    <Appbar.Action icon="plus" color={ COLORS.warning } onPress={() => {}} />
                </Appbar.Header>
                <Search clampedScroll={clampedScroll} />
                <Animated.ScrollView
                    showsVerticalScrollIndicator={false}
                    style={ styles.scroll }
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollYValue } } }],
                        () => {}
                    )}
                    contentInsetAdjustmentBehavior="automatic">
                    {
                        props.children 
                    }
                    </Animated.ScrollView>
            </Animated.View>
        </SafeAreaView>
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
        backgroundColor: COLORS.dark
    },
    scroll: {
        maxHeight: SIZES.height - 190,
        height: 100 + '%',
        backgroundColor: COLORS.primary,
        paddingTop: SIZES.base(5) - 4
    }
})
