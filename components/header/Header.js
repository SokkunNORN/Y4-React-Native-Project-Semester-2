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
                    styles.appbar_icon
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
                {
                    isShowSearchField ?
                    <>
                        <Searchbar
                            keyboardAppearance='dark'
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
                        { props.isSearch ? <SearchIcon navigation={ props.navigation } /> : null }
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
                                    styles.appbar_icon
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
