import React from 'react'
import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constant'
import {
    View,
    Text
} from 'react-native'
import {
    Title,
    Paragraph,
    Card,
    Button
} from 'react-native-paper'

const SlideShow = () => {
    return (
        <>
            <Card style={ styles.card }>
                <View style={ styles.viewFeature } >
                    <Text style={ styles.labelFeature }>FEATURED</Text>
                </View>
                <Card.Cover
                    style={ styles.imgFeature }
                    source={ require('../asset/feature.jpeg') }
                />
                <View>
                    <Card.Cover
                        style={ styles.logoSlide }
                        source={ require('../asset/news.png') }
                    />
                    <View style={ styles.title }>
                        <Title style={ styles.name }>Reak Smey New Day</Title>
                        <Paragraph style={ styles.joineder }>11628 Members</Paragraph>
                    </View>
                    <Button
                        icon='check-circle'
                        color={ COLORS.warning }
                        style={ styles.joinedBtn }
                        labelStyle={ styles.labelStyle }
                        uppercase={ false }
                        mode='outlined'
                        onPress={() => {}}>
                        Joined
                    </Button>
                </View>
            </Card>
        </>
    )
}

export default SlideShow

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.base(1.5)
    },
    imgFeature: {
        height: SIZES.width - (4 * SIZES.base()),
        borderTopStartRadius: SIZES.base(1.5),
        borderTopRightRadius: SIZES.base(1.5)
    },
    viewFeature: {
        position: 'absolute', 
        backgroundColor: 'rgba(57, 61, 58, 0.5)',
        borderRadius: SIZES.radius(100),
        zIndex: 1000,
        marginStart: SIZES.base(),
        marginTop: SIZES.base()
    },
    labelFeature: {
        opacity: 10000,
        color: COLORS.warning,
        fontSize: SIZES.font(18),
        fontWeight: 'bold',
        paddingStart: SIZES.base(),
        paddingEnd: SIZES.base(),
        paddingTop: SIZES.base(1),
        paddingBottom: SIZES.base(1)
    },
    logoSlide: {
        width: SIZES.base(7),
        height: SIZES.base(7),
        borderTopRightRadius: SIZES.base(1.5),
        borderBottomLeftRadius: SIZES.base(1.5)
    },
    title: {
        position: 'absolute',
        marginStart: SIZES.base(8),
        width: SIZES.width - (SIZES.base(28)),
        height: SIZES.base(4)
    },
    name: {
        color: COLORS.secondary1,
        fontSize: SIZES.font(17)
    },
    joineder: {
        color: COLORS.secondary1,
        marginTop: -SIZES.base(1)
    },
    joinedBtn: {
        position: 'absolute',
        marginTop: SIZES.base(1),
        borderRadius: SIZES.radius(4),
        backgroundColor: COLORS.dark,
        width: SIZES.base(13),
        marginLeft: SIZES.width - (SIZES.base(19))
    },
    labelStyle: {
        fontSize: SIZES.font(),
        fontWeight: 'normal',
        color: COLORS.secondary1
    }
})