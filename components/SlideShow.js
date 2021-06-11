import React from 'react'
import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, SIZES, HexToRGB } from '../constant'
import {
    View,
    Text,
    ImageBackground
} from 'react-native'
import {
    Title,
    Paragraph,
    Card,
    Button
} from 'react-native-paper'

const SlideShow = ({
    elements = []
}) => {
    return (
        <>
            {
                elements.map((item, i) => (
                    <Card style={[
                        styles.card
                    ]}>

                        <ImageBackground
                            source={ require('../asset/feature.jpeg') }
                            imageStyle={ styles.imgFeature }
                            style={ styles.imgFeature }
                        >
                            <LinearGradient
                                colors={[
                                    HexToRGB(COLORS.black, .1),
                                    HexToRGB(COLORS.black, .1),
                                    HexToRGB(COLORS.black, .1),
                                    HexToRGB(COLORS.black, .2),
                                    HexToRGB(COLORS.dark, .5),
                                    HexToRGB(COLORS.dark, .9),
                                    HexToRGB(COLORS.dark)
                                ]}
                                style={ styles.linear_radient }
                            >
                                <View>
                                    <View style={ styles.viewFeature } >
                                        <Text style={ styles.labelFeature }>FEATURED</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={ styles.feature_contain }>
                                        <Text style={{ color: COLORS.secondary1 }}>{ item.category.title }</Text>
                                        <Title 
                                            style={{ color: COLORS.secondary }}
                                            numberOfLines={ 1 }>
                                            { item.profile.name }
                                        </Title>
                                        <Text
                                            style={{ color: COLORS.secondary1 }} 
                                            numberOfLines={ 2 }>
                                            { item.title }
                                        </Text>
                                    </View>
                                </View>
                            </LinearGradient>
                        </ImageBackground>

                        <View>
                            <Card.Cover
                                style={ styles.logoSlide }
                                source={ require('../asset/news.png') }
                            />
                            <View style={ styles.title }>
                                <Title
                                    style={ styles.name }
                                    numberOfLines={ 1 }>
                                    { item.profile.name }
                                </Title>
                                <Paragraph style={ styles.joineder }>{ item.joineder } Members</Paragraph>
                            </View>

                            <Button
                                disabled={ item.isJoined }
                                icon={ item.isJoined ? 'check-circle' : null }
                                style={[
                                    styles.joinedBtn,
                                    item.isJoined ? {} : styles.joinBtn
                                ]}
                                labelStyle={[
                                    styles.labelStyle,
                                    item.isJoined ? {} : styles.labelJoinBtn
                                ]}
                                uppercase={ false }
                                mode='outlined'
                                onPress={() => {}}>
                                Joined
                            </Button>
                        </View>
                    </Card>
                ))
            }
        </>
    )
}

export default SlideShow

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.base(1.5),
        marginEnd: SIZES.base(),
        marginStart: SIZES.base(),
        width: SIZES.width - SIZES.base(4)
    },
    imgFeature: {
        height: SIZES.width - (8 * SIZES.base()),
        borderTopStartRadius: SIZES.base(1.5),
        borderTopRightRadius: SIZES.base(1.5)
    },
    linear_radient: {
        height: 100 + '%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    viewFeature: {
        position: 'absolute', 
        backgroundColor: HexToRGB(COLORS.dark, .3),
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
    feature_contain: {
        marginStart: SIZES.base(),
        marginEnd: SIZES.base(),
        marginBottom: SIZES.base()
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
    },
    joinBtn: {
       backgroundColor: COLORS.warning 
    },
    labelJoinBtn: {
        color: COLORS.white
    }
})