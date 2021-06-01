import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Animated,
    StatusBar
} from 'react-native'
import {
    Appbar,
    
} from 'react-native-paper'

import { COLORS, SIZES } from '../consts'

console.disableYellowBox = true;

const SearchIcon = () => {
    return (
        <Appbar.Action icon='magnify' color={ COLORS.warning } onPress={() => {}}/>
    )
}

const Header = props => {

    const [scrollYValue, setScrollYValue] = useState(new Animated.Value(0));

    return (
        <SafeAreaView style={ styles.safearea }>
            <Animated.View>
                <StatusBar barStyle='light-content' />
                <Appbar.Header style={ styles.header }>
                    <Appbar.Content title={ props.title } titleStyle={styles.headerTitle}/>
                    { props.isSearch ? <SearchIcon /> : <Appbar.Action /> }
                    <Appbar.Action icon={props.icon} color={ COLORS.warning } onPress={() => {}} />
                </Appbar.Header>
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
        backgroundColor: COLORS.primary
    }
})
