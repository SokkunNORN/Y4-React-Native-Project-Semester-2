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

const Setting = () => {
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