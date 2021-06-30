import React from 'react'

import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { moderateScale } from 'react-native-size-matters'
import { COLORS, FONTS, SIZES } from '../constant'
import AppContext from '../context'

const MessageBubble = ({
    owner = false,
    image = null,
    text = null,
    time = null
}) => {
    return (
        <AppContext.Consumer>
            {
                ({ isDark }) =>
                <View style={[
                    styles.message,
                    !owner ? styles.owner : styles.contact
                ]}>
                    <View style={[
                        styles.cloud,
                        isDark ?
                        {
                            backgroundColor: !owner ? COLORS.tuna : COLORS.primary
                        } : 
                        {
                            backgroundColor: !owner ? COLORS.secondary : COLORS.navajo_white
                        }
                    ]}>
                        {
                            image ?
                                <Image 
                                    style={[
                                        styles.image,
                                        {
                                            alignSelf: !owner ? 'flex-end' : 'flex-start'
                                        }
                                    ]}
                                    borderRadius={ 10 }
                                    source={ image }
                                    resizeMode='cover'
                                />
                            : null
                        }
                        {
                            text ?
                                <>
                                    <Text
                                        style={[
                                            styles.text,
                                            {
                                                color: isDark ? COLORS.white : COLORS.black
                                            }
                                        ]}
                                    >
                                        { text }
                                    </Text>
                                    <Text
                                        style={ styles.time }
                                    >
                                        { time || '7:30 PM' }
                                    </Text>
                                </>
                            : null
                        }
                        <View
                            style={[
                                styles.arrow_container,
                                !owner ? styles.arrow_left_container : styles.arrow_right_container
                            ]}
                        >
                            <Svg
                                style={ !owner ? styles.arrow_left : styles.arrow_right }
                                width={ moderateScale(15.5, 0, .6)}
                                height={ moderateScale(17.5, 0, .6)}
                                viewBox='32.484 17.5 15.515 17.5'
                                enable-background='new 32.485 17.5 15.515 17.5'
                            >
                                <Path
                                    d={ !owner ?
                                        'M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z'
                                    : 'M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z'
                                    }
                                    fill={
                                        isDark && !owner ? COLORS.tuna : 
                                        isDark && owner ? COLORS.primary :
                                        !owner ? COLORS.secondary :
                                        COLORS.navajo_white
                                    }
                                    x={ 0 }
                                    y={ 0 }
                                />
                            </Svg>
                        </View>
                    </View>
                </View>
            }
        </AppContext.Consumer>
    )
}

export default MessageBubble

const styles = StyleSheet.create({
    message: {
        flexDirection: 'row',
        marginVertical: moderateScale(7, 2)
    },
    owner: {
        marginLeft: SIZES.base()
    },
    contact: {
        alignSelf: 'flex-end',
        marginRight: SIZES.base()
    },
    cloud: {
        maxWidth: moderateScale(250, 2),
        paddingHorizontal: moderateScale(10, 2),
        paddingTop: moderateScale(5, 2),
        paddingBottom: moderateScale(7, 2),
        borderRadius: SIZES.radius()
    },
    text: {
        paddingTop: 3,
        fontSize: FONTS.p,
        lineHeight: SIZES.base(3),
        color: COLORS.white
    },
    image: {
        width: 100 + '%'
    },
    time: {
        color: COLORS.secondary1,
        alignSelf: 'flex-end',
        fontSize: FONTS.small
    },
    arrow_container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        flex: 1
    },
    arrow_left_container: {
        marginLeft: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    arrow_right_container: {
        marginRight: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    arrow_left: {
        left: moderateScale(-6, .5)
    },
    arrow_right: {
        right: moderateScale(-6, .5)
    }
})