import React from 'react'
import Header from '../components/header/Header'
import {
    Card,
    Title,
    Paragraph
} from 'react-native-paper'
import {
    StyleSheet,
    ScrollView
} from 'react-native'
import { SIZES } from '../constant'

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
                        <Title></Title>
                        <Title>Kun Kun</Title>
                    </Card.Content>
                    <Card.Content>
                        <Title></Title>
                        <Title>Kun Kun</Title>
                    </Card.Content>
                    <Card.Content>
                        <Title></Title>
                        <Title>Kun Kun</Title>
                    </Card.Content>
                </Card>
            </ScrollView>
        </>
    )
}

export default Setting

const styles = StyleSheet.create({
    card: {
        margin: SIZES.base()
    },
    profileImg: {
        height: SIZES.width - (2 * SIZES.base())
    }
})