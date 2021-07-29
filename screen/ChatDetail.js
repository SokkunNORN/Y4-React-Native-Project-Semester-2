import React, { useState, useRef, useEffect } from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableWithoutFeedback,
    ImageBackground
} from 'react-native'
import _ from 'lodash'
import { Badge } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DetailHeader from '../components/header/DetailHeader'
import { COLORS, FONTS, SIZES, HexToRGB, CHAT_BACKGROUND } from '../constant'
const keyboardVerticalOffset = Platform.OS === 'ios' ? SIZES.base(12.5) : 0
import MessageBubble from '../components/MessageBubble'
import AppContext from '../context'
import { getCachedUser } from '../utils'
import { createMessage, getMessages, updateParticipant } from '../api'

let yPosition = 0

const ChatDetail = ({ route }) => {

    const scrollViewRef = useRef()
    const participant = route.params
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [isBtnScrollDown, setIsBtnScrollDown] = useState(true)

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

    const getListMessages = async () => {
        const user = await getCachedUser()

        try {
            const response = await getMessages(user.id, participant.id)

            setMessages(response)
        } catch (error) {
            alert(error)
        }
    }

    const onSendMessage = async isSend => {
        const newParticipant = _.omit(participant, 'contact_profile')
        delete newParticipant.id

        if (isSend) {
            const user = await getCachedUser()

            const msg = {
                created_at: new Date(),
                updated_at: new Date(),
                message: message,
                participant_id: participant.id,
                seen: false,
                uid: user.id
            }
            
            try {
                await createMessage(msg)

                getListMessages()
                setMessage('')
                newParticipant.last_message = msg

                updateParticipant(participant.id, newParticipant)
            } catch (error) {
                alert(error)
            }
        }
    }

    useEffect(() => {
        getListMessages()
    }, [])

    return (
        <AppContext.Consumer>
            {
                ({ 
                    isDark,
                    chatBackgroundIndex
                }) =>
                <SafeAreaView style={[
                    styles.safe_area_view,
                    {
                        backgroundColor: isDark ? COLORS.dark : COLORS.light_gray
                    }
                ]}>
                    <ImageBackground
                        source={ CHAT_BACKGROUND[chatBackgroundIndex] }
                        imageStyle={ styles.chat_image_background }
                        style={ styles.chat_image_background }
                    >
                    <DetailHeader
                        iconRight1='phone'
                        iconRight2='video'
                        iconRight3='dots-vertical'
                        name={ participant.contact_profile.fname }
                        isProfile
                    />
                    <View style={ styles.container }>
                        <View style={ styles.header }>
                            <ScrollView
                                keyboardDismissMode='interactive'
                                showsVerticalScrollIndicator={ false }
                                ref={ scrollViewRef }
                                onScroll={ onScroll }
                                onContentSizeChange={ onContentSizeChange }
                            >
                                {
                                    messages.map(item => (
                                        <MessageBubble
                                            owner={ item.owner }
                                            text={ item.message }
                                            time={ item.created_at }
                                        />
                                    ))
                                }
                            </ScrollView>
                        </View>
                        <KeyboardAvoidingView
                            behavior={ Platform.OS === 'ios' ? 'padding' : null }
                            keyboardVerticalOffset={ keyboardVerticalOffset }
                        >
                            <View style={[
                                styles.footer,
                                {
                                    backgroundColor: isDark ? COLORS.dark : COLORS. light_gray
                                }
                            ]}>
                                <Icon
                                    name={ 'sticker-emoji' } 
                                    style={ styles.icon_left_text }
                                    color={ COLORS.secondary1 } size={ SIZES.base(3.5) } />
                                <Icon
                                    name={ 'paperclip' } 
                                    style={ styles.icon_left_text }
                                    color={ COLORS.secondary1 } size={ SIZES.base(3.5) } />
                                <TextInput
                                    keyboardAppearance={ isDark ? 'dark' : 'light' }
                                    placeholder='Write your message'
                                    placeholderTextColor={ COLORS.secondary1 }
                                    style={[
                                        styles.message_text_field,
                                        {
                                            backgroundColor: isDark ? COLORS.dark : COLORS.white,
                                            color: isDark ? COLORS.white : COLORS.black
                                        }
                                    ]}
                                    value={ message }
                                    onChangeText={ value => setMessage(value) }
                                />
                                <TouchableWithoutFeedback
                                    onPress={ () => onSendMessage(message.trim() ? true : false) }
                                >
                                    <View style={ styles.view_right_text }>
                                        <Icon
                                            name={ message.trim() ? 'send' : 'microphone' } 
                                            style={ styles.icon_right_text }
                                            color={ COLORS.dark } size={ SIZES.base(3.5) } />
                                    </View>
                                </TouchableWithoutFeedback>
                                {
                                    isBtnScrollDown ?
                                        <TouchableWithoutFeedback
                                            onPress={ () => onScrollDown() }
                                        >
                                            <View
                                                style={[
                                                    styles.view_icon_down,
                                                    {
                                                        backgroundColor: isDark ? COLORS.dark : COLORS.white
                                                    }
                                                ]}
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
                                                    color={ COLORS.warning } size={ SIZES.base(4.5) } />
                                            </View>
                                        </TouchableWithoutFeedback>
                                    : null
                                }
                            </View>  
                        </KeyboardAvoidingView>
                    </View>
                </ImageBackground>
                </SafeAreaView>
            }
        </AppContext.Consumer>
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
    chat_image_background: {
        width: 100 + '%',
        height: 100 + '%'
    },
    header: {
        flex: 1
    },
    footer: {
        borderTopWidth: .2,
        borderTopColor: HexToRGB(COLORS.secondary1, .2),
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
        borderWidth: .3,
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
        borderWidth: .3,
        borderColor: COLORS.warning,
        bottom: SIZES.base(8)
    },
    badge: {
        position: 'absolute',
        left: SIZES.base(1),
        top: -SIZES.base(1),
        backgroundColor: COLORS.warning
    }
})