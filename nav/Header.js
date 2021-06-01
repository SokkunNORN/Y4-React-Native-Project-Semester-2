import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    StatusBar
} from 'react-native'
import {
    Appbar
} from 'react-native-paper'

import { COLORS, SIZES } from '../consts'

console.disableYellowBox = true;

const SearchIcon = ({ navigation }) => {
    return (
        <Appbar.Action
            style={ styles.appbar_icon }
            icon='magnify'
            color={ COLORS.warning }
            onPress={() => navigation.push('Search')}
        />
    )
}

const Header = props => {
    return (
        <SafeAreaView style={ styles.safearea }>
            <StatusBar barStyle='light-content' />
            <Appbar.Header style={ styles.header }>
                <Appbar.Content title={ props.title } titleStyle={styles.headerTitle}/>
                { props.isSearch ? <SearchIcon navigation={ props.navigation }/> : <Appbar.Action /> }
                <Appbar.Action
                    style={ styles.appbar_icon }
                    icon={ props.icon } 
                    color={ COLORS.warning } 
                    onPress={() => {}}
                />
            </Appbar.Header>
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
    appbar_icon: {
        backgroundColor: COLORS.primary
    }
})
