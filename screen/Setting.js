import React from 'react'
import Header from '../components/header/Header'
import {
    Card,
    Title,
    Paragraph
} from 'react-native-paper'
import {
    StyleSheet,
    ScrollView,
    View,
    ActionSheetIOS
} from 'react-native'
import { SIZES, COLORS, FONTS, HexToRGB } from '../constant'
import ListSetting from '../components/ListSetting'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import Routes from '../routes'
import AppContext from '../context'

const Setting = () => {

    const navigation = useNavigation()

    const lists = [
        [
            {
                title: 'COVID-19 Vault',
                icon: 'virus-outline',
                iconColor: COLORS.danger,
                rightTxt: null,
                isIconRight: true,
                isSwitchBtn: false
            }
        ],
        [
            {
                title: 'Language',
                icon: 'web',
                iconColor: COLORS.warning,
                rightTxt: 'English',
                isIconRight: true,
                isSwitchBtn: false
            },
            {
                title: 'Strarred Message',
                icon: 'star',
                iconColor: COLORS.cerulean,
                rightTxt: null,
                isIconRight: true,
                isSwitchBtn: false
            },
            {
                title: 'Notification',
                icon: 'bell-outline',
                iconColor: COLORS.danger,
                rightTxt: null,
                isIconRight: true,
                isSwitchBtn: false
            },
            {
                title: 'Storage and Data',
                icon: 'playlist-check',
                iconColor: COLORS.green,
                rightTxt: null,
                isIconRight: true,
                isSwitchBtn: false
            },
            {
                title: 'Dark Mode',
                icon: 'brightness-6',
                iconColor: COLORS.secondary1,
                rightTxt: null,
                isIconRight: false,
                isSwitchBtn: true
            }
        ],
        [
            {
                title: 'Stickers',
                icon: 'sticker-circle-outline',
                iconColor: COLORS.ping,
                rightTxt: null,
                isIconRight: true,
                isSwitchBtn: false
            }
        ],
        [
            {
                title: 'Invite Frinds to Chat Plus',
                icon: 'account-arrow-right-outline',
                iconColor: COLORS.ligth_ping,
                rightTxt: null,
                isIconRight: true,
                isSwitchBtn: false
            }
        ],
        [
            {
                title: 'Support',
                icon: 'help-circle-outline',
                iconColor: COLORS.info,
                rightTxt: null,
                isIconRight: true,
                isSwitchBtn: false
            }
        ],
        [
            {
                title: 'Blocked User',
                icon: 'block-helper',
                iconColor: COLORS.danger,
                rightTxt: null,
                isIconRight: true,
                isSwitchBtn: false
            }
        ],
        [
            {
                title: 'Version',
                icon: 'cog-outline',
                iconColor: COLORS.warning,
                rightTxt: '2.5.7 (131)',
                isIconRight: false,
                isSwitchBtn: false
            }
        ],
        [
            {
                title: 'Log Out',
                icon: 'logout-variant',
                iconColor: COLORS.red,
                rightTxt: null,
                isIconRight: false,
                isSwitchBtn: false
            }
        ]
    ]

    const onSelectList = (value, isDark) => {
        if (value.title === 'Log Out') {
            ActionSheetIOS.showActionSheetWithOptions(
                {
                    options: [
                        "Cancel",
                        "Log Out"
                    ],
                    title: 'Are you sure you want to log out?',
                    destructiveButtonIndex: 1,
                    cancelButtonIndex: 0,
                    userInterfaceStyle: isDark ? 'dark' : 'light'
                },
                buttonIndex => {
                    if (buttonIndex === 1) {
                        navigation.push(Routes.PHONE_NUMBER)
                    }
                }
            )
        } else {
            navigation.push(Routes.SETTING_DETAIL, value)
        }
    }

    return (
        <AppContext.Consumer>
            {
            ({ isDark }) =>
            <>
                <Header
                    title="Settings"
                    icon="pencil-box-outline"
                />

                <ScrollView
                    showsVerticalScrollIndicator={ false }
                >
                    <Card style={[
                        styles.card,
                        {
                            backgroundColor: isDark ? COLORS.primary : COLORS.white
                        }
                    ]}>
                        <Card.Cover style={ styles.profileImg } source={ require('../asset/cover.jpeg') } />
                        <Card.Content style={ styles.border }>
                            <Title style={[
                                styles.name,
                                {
                                    color: isDark ? COLORS.white : COLORS.black
                                }
                            ]}>Kun Kun</Title>
                        </Card.Content>
                        <Card.Content style={ styles.border }>
                            <Paragraph style={[
                                styles.label,
                                {
                                    color: isDark ? COLORS.white : COLORS.black
                                }
                            ]}>Mobile</Paragraph>
                            <Title style={[
                                styles.whileColor,
                                {
                                    color: isDark ? COLORS.white : COLORS.black
                                }
                            ]}>+855 17 500 859</Title>
                        </Card.Content>
                        <Card.Content style={ styles.border }>
                            <View style={ styles.bd_contain }>
                                <View>
                                    <Paragraph style={[
                                        styles.label,
                                        {
                                            color: isDark ? COLORS.white : COLORS.black
                                        }
                                    ]}>Date of Birth</Paragraph>
                                    <Title style={[
                                        styles.whileColor,
                                        {
                                            color: isDark ? COLORS.white : COLORS.black
                                        }
                                    ]}>N/A</Title>
                                </View>
                                <View style={[
                                    styles.bd_view_right,
                                    {
                                        backgroundColor: isDark ? COLORS.dark : COLORS.secondary
                                    }
                                ]}>
                                    <Icon
                                        name='check-circle'
                                        style={ styles.logo_icon }
                                        color={ COLORS.warning } size={ SIZES.base() } />
                                    <Paragraph style={[
                                        styles.bd_label,
                                        {
                                            color: isDark ? COLORS.white : COLORS.black
                                        }
                                    ]}>Public (Hide year)</Paragraph>
                                </View>
                            </View>
                        </Card.Content>
                        <Card.Content>
                            <Paragraph style={[
                                styles.label,
                                {
                                    color: isDark ? COLORS.white : COLORS.black
                                }
                            ]}>About</Paragraph>
                            <Title style={[
                                styles.whileColor,
                                {
                                    color: isDark ? COLORS.white : COLORS.black
                                }
                            ]}>About</Title>
                        </Card.Content>
                    </Card>

                    {
                        lists.map(items => (
                            <ListSetting 
                                items={ items }
                                setSelectItem={ value => onSelectList(value, isDark) }
                            />
                        ))
                    }
                </ScrollView>
            </>
            } 
        </AppContext.Consumer>
    )
}

export default Setting

const styles = StyleSheet.create({
    card: {
        margin: SIZES.base(),
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.base(1.5)
    },
    profileImg: {
        height: SIZES.width - (6 * SIZES.base()),
        borderTopStartRadius: SIZES.base(1.5),
        borderTopRightRadius: SIZES.base(1.5)
    },
    name: {
        color: COLORS.warning,
        paddingBottom: SIZES.base(),
        paddingTop: SIZES.base()
    },
    whileColor: {
        color: COLORS.white,
        marginTop: -SIZES.base(.5),
        marginBottom: SIZES.base(1)
    },
    label: {
        color: COLORS.secondary1,
        marginTop: SIZES.base(1)
    },
    border: {
        borderBottomWidth: .2,
        borderBottomColor: HexToRGB(COLORS.secondary1, .5)
    },
    bd_contain: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bd_view_right: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.base(1),
        backgroundColor: COLORS.dark,
        marginVertical: SIZES.base(1.5),
        borderRadius: SIZES.radius(.7)
    },
    bd_label: {
        color: COLORS.white,
        fontSize: FONTS.h5,
        marginLeft: SIZES.base(1)
    }
})