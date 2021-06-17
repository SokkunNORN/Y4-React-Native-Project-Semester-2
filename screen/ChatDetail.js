import React, { useState, useRef } from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native'
import { Badge } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DetailHeader from '../components/header/DetailHeader'
import { COLORS, FONTS, SIZES } from '../constant'
const keyboardVerticalOffset = Platform.OS === 'ios' ? SIZES.base(12.5) : 0
import MessageBubble from '../components/MessageBubble'

let yPosition = 0

const ChatDetail = ({ route }) => {

    const scrollViewRef = useRef()
    const name = route.params
    const [message, setMessage] = useState('')
    const [isBtnScrollDown, setIsBtnScrollDown] = useState(true)

    const messages = [
        {
            owner: true,
            messages: 'Hello World!!!',
            time: '7:14 AM'
        },
        {
            owner: false,
            messages: 'Jaa, Hello Sky!!!',
            time: '7:15 AM'
        },
        {
            owner: true,
            messages: 'Jaa, Good Bye!!',
            time: '7:19 AM'
        }
    ]

    const onScrollDown = () => {
        scrollViewRef.current.scrollToEnd({ animated: true })
    }

    const onScroll = (event) => {
        yPosition = event.nativeEvent.contentOffset.y
        const contentHeight = event.nativeEvent.contentSize.height

        if (contentHeight < (SIZES.height - SIZES.base(14))) {
            setIsBtnScrollDown(false)
        } else {
            setIsBtnScrollDown(!(yPosition + (SIZES.height - SIZES.base(24)) >= contentHeight))
        }
    }

    const onContentSizeChange = (_, contentHeight) => {
        if (contentHeight < (SIZES.height - SIZES.base(14))) {
            setIsBtnScrollDown(false)
        }
        scrollViewRef.current.scrollToEnd({ animated: true })
    }

    return (
        <SafeAreaView style={ styles.safe_area_view }>
            <DetailHeader
                iconRight1='phone'
                iconRight2='video'
                iconRight3='dots-vertical'
                name={ name }
            />
            <View style={ styles.container }>
                <View style={ styles.header }>
                    <ScrollView
                        keyboardDismissMode='interactive'
                        showsHorizontalScrollIndicator={ false }
                        ref={ scrollViewRef }
                        onScroll={ onScroll }
                        onContentSizeChange={ onContentSizeChange }
                    >
                        {
                            messages.map(item => (
                                <MessageBubble
                                    owner={ item.owner }
                                    text={ item.messages }
                                    time={ item.time }
                                />
                            ))
                        }
                    </ScrollView>
                </View>
                <KeyboardAvoidingView
                    behavior={ Platform.OS === 'ios' ? 'padding' : null }
                    keyboardVerticalOffset={ keyboardVerticalOffset }
                >
                    <View style={ styles.footer }>
                        <Icon
                            name={ 'sticker-emoji' } 
                            style={ styles.icon_left_text }
                            color={ COLORS.secondary1 } size={ SIZES.base(3.5) } />
                        <Icon
                            name={ 'paperclip' } 
                            style={ styles.icon_left_text }
                            color={ COLORS.secondary1 } size={ SIZES.base(3.5) } />
                        <TextInput
                            placeholder='Write your message'
                            placeholderTextColor={ COLORS.secondary1 }
                            style={ styles.message_text_field }
                            value={ message }
                            onChangeText={ value => setMessage(value) }
                        />
                        <View style={ styles.view_right_text }>
                            <Icon
                                name={ message.trim() ? 'send' : 'microphone' } 
                                style={ styles.icon_right_text }
                                color={ COLORS.dark } size={ SIZES.base(3.5) } />
                        </View>
                        {
                            isBtnScrollDown ?
                                <TouchableWithoutFeedback
                                    onPress={ () => onScrollDown() }
                                >
                                    <View
                                        style={ styles.view_icon_down }
                                    >
                                        <Badge
                                            style={ styles.badge }
                                            visible={ false }
                                        >
                                            3.5K
                                        </Badge>
                                        <Icon
                                            name={ 'chevron-down' } 
                                            style={ styles.icon_down }
                                            color={ COLORS.secondary1 } size={ SIZES.base(4.5) } />
                                    </View>
                                </TouchableWithoutFeedback>
                            : null
                        }
                    </View>  
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}

export default ChatDetail

const styles = StyleSheet.create({
    safe_area_view: {
        flex: 1,
        backgroundColor: COLORS.dark
    },
    container: {
        flex: 1
    },
    header: {
        flex: 1
    },
    footer: {
        padding: SIZES.base(1),
        backgroundColor: COLORS.dark,
        flexDirection: 'row'
    },
    icon_left_text: {
        padding: SIZES.base(.5),
        marginEnd: SIZES.base(.5),
        marginTop: SIZES.base(.5)
    },
    message_text_field: {
        backgroundColor: COLORS.primary,
        paddingLeft: SIZES.base(),
        paddingRight: SIZES.base(),
        paddingTop: SIZES.base(1.5),
        paddingBottom: SIZES.base(1.5),  
        fontSize: FONTS.h4,
        color: COLORS.white,
        borderRadius: SIZES.radius(),
        width: SIZES.width - (SIZES.base(18.5)),
        marginStart: SIZES.base(.5),
        borderWidth: .5,
        borderColor: COLORS.secondary1
    },
    view_right_text: {
        padding: SIZES.base(.5),
        backgroundColor: COLORS.warning,
        borderRadius: SIZES.radius(1.5),
        marginStart: SIZES.base(.5)
    },
    icon_right_text: {
        padding: SIZES.base(.5)
    },
    view_icon_down: {
        position: 'absolute',
        right: SIZES.base(1),
        padding: SIZES.base(.5),
        borderRadius: SIZES.radius(4),
        borderWidth: .5,
        borderColor: COLORS.secondary1,
        bottom: SIZES.base(8)
    },
    badge: {
        position: 'absolute',
        left: SIZES.base(1),
        top: -SIZES.base(1),
        backgroundColor: COLORS.warning
    }
})