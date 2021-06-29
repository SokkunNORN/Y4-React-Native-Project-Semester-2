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
    Button,
    Paragraph
} from 'react-native-paper'
import { COLORS, FONTS, SIZES } from '../../constant'
import AppContext from '../../context'

console.disableYellowBox = true

const Header = props => {

    const [isShowSearchField, setIsShowSearchField] = useState(false)

    const onCancelSearch = () => {
        Keyboard.dismiss()
        setIsShowSearchField(false)
    }

    const SearchIcon = ({
        isDark
    }) => {
        return (
            <Appbar.Action
                style={[
                    styles.appbar_icon,
                    {
                        backgroundColor: isDark ? COLORS.primary : COLORS.secondary
                    }
                ]}
                icon='magnify'
                color={ COLORS.warning }
                onPress={ () => setIsShowSearchField(true) }
            />
        )
    }

    return (
        <AppContext.Consumer>
            {
                ({ isDark }) =>
                <SafeAreaView style={[
                    styles.safearea,
                    {
                        backgroundColor: isDark ? COLORS.dark : COLORS.light_gray
                    }
                ]}>
                    <StatusBar barStyle={ isDark ? 'light-content' : 'dark-content' } />
                    <Appbar.Header style={[
                        styles.header,
                        {
                            backgroundColor: isDark ? COLORS.dark : COLORS.light_gray
                        }
                    ]}>
                        {
                            isShowSearchField ?
                            <>
                                <Searchbar
                                    keyboardAppearance={ isDark ? 'dark' : 'light' }
                                    placeholder="Search"
                                    onChangeText={ () => {} }
                                    value={ null }
                                    style={[
                                        styles.searchField,
                                        {
                                            backgroundColor: isDark ? COLORS.primary : COLORS.white
                                        }
                                    ]}
                                    color={ isDark ? COLORS.white : COLORS.black }
                                    fontSize={ SIZES.font() }
                                    placeholderTextColor={ COLORS.secondary1 }
                                    iconColor={ COLORS.secondary1 }
                                    autoFocus
                                />
                                <Appbar.Content />
                                <Paragraph
                                    style={ styles.cancelBtn }
                                    onPress={ () => onCancelSearch() }
                                >
                                    Cancel
                                </Paragraph>
                            </> :
                            <>
                                <Appbar.Content
                                    title={ props.title }
                                    titleStyle={[
                                        styles.headerTitle
                                    ]}/>
                                { props.isSearch ? <SearchIcon navigation={ props.navigation } isDark={ isDark }/> : null }
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
                                            {
                                                backgroundColor: isDark ? COLORS.primary : COLORS.secondary
                                            }
                                        ]}
                                        icon={ props.icon } 
                                        color={ COLORS.warning } 
                                        onPress={() => {}}
                                    /> 
                                }
                            </>
                        }
                    </Appbar.Header>
                </SafeAreaView>
            }
        </AppContext.Consumer>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.dark,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0
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
      borderWidth: .17,
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
      position: 'absolute',
      elevation: 0,
      shadowOpacity: 0,
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
    },
    cancelBtn: {
        color: COLORS.warning,
        fontSize: FONTS.p,
        marginRight: SIZES.base()
    }
})
