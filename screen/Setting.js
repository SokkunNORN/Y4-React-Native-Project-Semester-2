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
    View
} from 'react-native'
import { SIZES, COLORS } from '../constant'
import ListSetting from '../components/ListSetting'

const Setting = () => {

    const lists = [
        [
            {
                title: 'COVID-19 Vault',
                icon: 'virus-outline',
                iconColor: COLORS.danger,
                rightTxt: null
            }
        ],
        [
            {
                title: 'Language',
                icon: 'virus-outline',
                iconColor: COLORS.warning,
                rightTxt: 'English'
            },
            {
                title: 'Language',
                icon: 'web',
                iconColor: COLORS.green,
                rightTxt: null
            },
            {
                title: 'Dark Mode',
                icon: 'brightness-6',
                iconColor: COLORS.secondary1,
                rightTxt: 'System'
            }
        ],
        [
            {
                title: 'Stickers',
                icon: 'sticker-circle-outline',
                iconColor: COLORS.ping,
                rightTxt: null
            }
        ],
        [
            {
                title: 'Invite Frinds to Chat Plus',
                icon: 'account-alert-outline',
                iconColor: COLORS.ligthPing,
                rightTxt: null
            }
        ],
        [
            {
                title: 'Support',
                icon: 'help-circle-outline',
                iconColor: COLORS.info,
                rightTxt: null
            }
        ],
        [
            {
                title: 'Blocked User',
                icon: 'block-helper',
                iconColor: COLORS.danger,
                rightTxt: null
            }
        ],
        [
            {
                title: 'Version',
                icon: 'cog-outline',
                iconColor: COLORS.warning,
                rightTxt: null
            }
        ],
        [
            {
                title: 'Log Out',
                icon: 'logout-variant',
                iconColor: COLORS.danger,
                rightTxt: null
            }
        ]
    ]

    return (
        <>
            <Header
                title="Settings"
                icon="pencil-box-outline"
            />

            <ScrollView>
                <Card style={ styles.card }>
                    <Card.Cover style={ styles.profileImg } source={ require('../asset/cover.jpeg') } />
                    <Card.Content>
                        <Title style={ styles.name }>Kun Kun</Title>
                    </Card.Content>
                    <View style={ styles.border }></View>
                    <Card.Content>
                        <Paragraph style={ styles.label }>Mobile</Paragraph>
                        <Title style={ styles.whileColor }>+855 17 500 859</Title>
                    </Card.Content>
                    <View style={ styles.border }></View>
                    <Card.Content>
                        <Paragraph style={ styles.label }>About</Paragraph>
                        <Title style={ styles.whileColor }>About</Title>
                    </Card.Content>
                </Card>

                {
                    lists.map(items => (
                        <ListSetting items={ items } />
                    ))
                }
            </ScrollView>
        </>
    )
}

export default Setting

const styles = StyleSheet.create({
    card: {
        margin: SIZES.base(),
        backgroundColor: COLORS.primary
    },
    profileImg: {
        height: SIZES.width - (4 * SIZES.base())
    },
    name: {
        color: COLORS.warning,
        paddingBottom: SIZES.base(),
        paddingTop: SIZES.base()
    },
    whileColor: {
        color: COLORS.white
    },
    label: {
        color: COLORS.secondary1
    },
    border: {
        height: 2,
        backgroundColor: COLORS.dark
    }
})