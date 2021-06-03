import React from 'react'
import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constant'
import {
    View,
    Text
} from 'react-native'
import {
    Title,
    Card
} from 'react-native-paper'

const SlideShow = () => {
    return (
        <>
            <Card>
                <View style={ styles.viewFeature } >
                    <Text style={ styles.labelFeature }>FEATURED</Text>
                </View>
                <Card.Cover
                    style={ styles.imgFeature }
                    source={ require('../asset/feature.jpeg') }
                />
            </Card>
        </>
    )
}

export default SlideShow

const styles = StyleSheet.create({
    imgFeature: {
        height: SIZES.width - (4 * SIZES.base())
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
    }
})