import React, { useRef } from 'react'
import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, SIZES, HexToRGB } from '../constant'
import {
    View,
    Text,
    ImageBackground,
    ScrollView
} from 'react-native'
import {
    Title,
    Paragraph,
    Card,
    Button
} from 'react-native-paper'
import AppContext from '../context'

let xPosition = 0

const SlideShow = ({
    elements = []
}) => {

    const scrollViewRef = useRef()

    const handleScroll = function(event) {
        xPosition = event.nativeEvent.contentOffset.x
    }

    const onContentSizeChange = (contentWidth, _) => {
        setInterval(() => {
            if (contentWidth > SIZES.width) {
                xPosition += SIZES.width
                if (xPosition === contentWidth) {
                    xPosition = 0
                }
            }
    
            scrollViewRef.current.scrollTo({
                x: xPosition,
                y: 0,
                animated: true
            })
        }, 5000);
    }

    return (
        <AppContext.Consumer>
            {
                ({ isDark }) =>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={ false }
                    style={ styles.slide_show }
                    ref={ scrollViewRef }
                    onScroll={ handleScroll }
                    onContentSizeChange={ onContentSizeChange }
                >
                    {
                        elements.map((item, i) => (
                            <Card style={[
                                styles.card,
                                {
                                    backgroundColor: isDark ? COLORS.primary : COLORS.secondary
                                }
                            ]}>

                                <ImageBackground
                                    source={ require('../asset/feature.jpeg') }
                                    imageStyle={ styles.imgFeature }
                                    style={ styles.imgFeature }
                                >
                                    <LinearGradient
                                        colors={[
                                            HexToRGB(isDark ? COLORS.black : COLORS.secondary, .1),
                                            HexToRGB(isDark ? COLORS.black : COLORS.secondary, .1),
                                            HexToRGB(isDark ? COLORS.black : COLORS.secondary, .1),
                                            HexToRGB(isDark ? COLORS.black : COLORS.secondary, .2),
                                            HexToRGB(isDark ? COLORS.dark : COLORS.white, .5),
                                            HexToRGB(isDark ? COLORS.dark : COLORS.white, .9),
                                            HexToRGB(isDark ? COLORS.dark : COLORS.white)
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
                                                <Text style={{ 
                                                    color: isDark ? COLORS.secondary1 : HexToRGB(COLORS.black, .5)
                                                 }}>{ item.category.title }</Text>
                                                <Title 
                                                    style={{
                                                        color: isDark ? COLORS.white : COLORS.black
                                                    }}
                                                    numberOfLines={ 1 }>
                                                    { item.profile.name }
                                                </Title>
                                                <Text
                                                    style={{
                                                        color: isDark ? COLORS.secondary1 : HexToRGB(COLORS.black, .7)
                                                    }} 
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
                                            style={[
                                                styles.name
                                            ]}
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
                                            !item.isJoined ? styles.joinBtn : isDark ? {} :
                                            {
                                                backgroundColor: COLORS.light_gray
                                            }
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
                </ScrollView>
            }
        </AppContext.Consumer>
    )
}

export default SlideShow

const styles = StyleSheet.create({
    slide_show: {
        width: SIZES.width,
        paddingBottom: SIZES.base()
    },
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
        height: SIZES.base(4),
        marginTop: SIZES.base(.3)
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
        marginTop: SIZES.base(1.3),
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