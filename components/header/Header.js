import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Keyboard
} from 'react-native'
import {
    Appbar,
    Searchbar,
    Button
} from 'react-native-paper'
import { COLORS, SIZES } from '../../constant'

console.disableYellowBox = true

const Header = props => {

    const [isShowSearchField, setIsShowSearchField] = useState(false)

    const onCancelSearch = () => {
        Keyboard.dismiss()
        setIsShowSearchField(false)
    }

    const SearchIcon = () => {
        return (
            <Appbar.Action
                style={[
                    styles.appbar_icon,
                    !isShowSearchField ? styles.showElement : styles.blockElement
                ]}
                icon='magnify'
                color={ COLORS.warning }
                onPress={ () => setIsShowSearchField(true) }
            />
        )
    }

    return (
        <SafeAreaView style={ styles.safearea }>
            <StatusBar barStyle='light-content' />
            <Appbar.Header style={ styles.header }>
                <Appbar.Content
                    title={ props.title }
                    titleStyle={[
                        styles.headerTitle,
                        !isShowSearchField ? styles.showElement : styles.blockElement
                    ]}/>
                { props.isSearch ? <SearchIcon navigation={ props.navigation } /> : <Appbar.Action /> }
                { 
                    props.isJoined ?
                        <Button
                            icon={ props.icon }
                            color={ COLORS.warning }
                            style={ styles.joinBtn }
                            labelStyle={ styles.labelStyle }
                            uppercase={ false }
                            mode='outlined'
                            onPress={() => {}}>
                            Joined
                        </Button>
                    : <Appbar.Action
                        style={[
                            styles.appbar_icon,
                            !isShowSearchField ? styles.showElement : styles.blockElement
                        ]}
                        icon={ props.icon } 
                        color={ COLORS.warning } 
                        onPress={() => {}}
                    /> 
                }
                <Searchbar
                    placeholder="Search"
                    onChangeText={ () => {} }
                    value={ null }
                    style={[
                        styles.searchField,
                        isShowSearchField ? styles.showElement : styles.blockElement
                    ]}
                    color={ COLORS.white }
                    fontSize={ SIZES.font() }
                    placeholderTextColor={ COLORS.secondary1 }
                    iconColor={ COLORS.secondary1 }
                />
                {
                    isShowSearchField ?
                    <Button 
                        color={ COLORS.warning }
                        uppercase={ false }
                        labelStyle={ styles.labelStyle }
                        mode='text'
                        onPress={ () => onCancelSearch() }>
                        Cancel
                    </Button> : <></>
                }
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
    showElement: {
        opacity: 1
    },
    blockElement: {
        opacity: 0
    },
    joinBtn: {
        marginRight: SIZES.base(),
        borderColor: COLORS.warning,
        borderWidth: .9,
        borderRadius: SIZES.radius(4),
    },
    labelStyle: {
        fontSize: SIZES.font(),
        fontWeight: 'normal'
    }
})
