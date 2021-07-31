import React, { useState, useRef, useEffect } from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    ImageBackground,
    FlatList
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
import { createMessage, getMessages, getUnseenMessageNumber, updateParticipant } from '../api'
import uuid from 'react-native-uuid'

let isNeedScrollToTop = true
let intervalId = null

const ChatDetail = ({ route }) => {

    const scrollViewRef = useRef()
    const participant = route.params
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [isBtnScrollDown, setIsBtnScrollDown] = useState(false)

    const onScrollDown = () => {
        scrollViewRef.current.scrollToOffset({ animated: true, offset: 0 })
    }

    const onScroll = (event) => {
        const yPosition = event.nativeEvent.contentOffset.y

        if (yPosition < 5) {
            isNeedScrollToTop = true
            setIsBtnScrollDown(false)
        } else {
            isNeedScrollToTop = false
            setIsBtnScrollDown(true)
        }
    }

    const getListMessages = async () => {
        const user = await getCachedUser()

        try {
            const response = await getMessages(user.id, participant.id)

            setMessages(response)
        } catch (error) {
            alert(error)
        } finally {
            isNeedScrollToTop && onScrollDown()
        }
    }

    const onUpdateParticipant = async (id, msg, uid) => {
        const newParticipant = _.omit(participant, 'contact_profile')
        delete newParticipant.id
        newParticipant.last_message = msg
        newParticipant.unseen_messages.push({
            uid: uid,
            message_id: msg.id
        })

        updateParticipant(id, newParticipant)
    }

    const onSendMessage = async isSend => {
        if (isSend) {
            const auth = await getCachedUser()

            const user = {
                fname: auth.fname,
                lname: auth.lname,
                id: auth.id,
                image_profile: auth.image_profile
            }

            const msg = {
                id: uuid.v4(),
                created_at: new Date(),
                updated_at: new Date(),
                message: message,
                participant_id: participant.id,
                seen: false,
                user: user
            }
            
            try {
                await createMessage(msg)

                getListMessages()
                setMessage('')
                onScrollDown()

                onUpdateParticipant(participant.id, msg, auth.id)
            } catch (error) {
                alert(error)
            }
        }
    }

    const onNavigationBack = () => {
        clearInterval(intervalId)
    }

    useEffect(() => {
        getListMessages()
        intervalId = setInterval(() => {
            getListMessages() 
        }, 1500)
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
                        onNavigationBack={ () => onNavigationBack() }
                    />
                    <View style={ styles.container }>
                        <View style={ styles.header }>
                            <FlatList
                                data={ messages }
                                showsVerticalScrollIndicator={ false }
                                ref={ scrollViewRef }
                                onScroll={ onScroll }
                                renderItem={ item => {
                                    return (
                                        <MessageBubble
                                            key={ item.index }
                                            owner={ item.item.owner }
                                            text={ item.item.message }
                                            time={ item.item.created_at }
                                        />
                                    )
                                }}
                                inverted
                            />
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
        width: SIZES.width - (SIZES.base(19)),
        marginStart: SIZES.base(.5),
        borderWidth: .3,
        borderColor: COLORS.secondary1
    },
    view_right_text: {
        padding: SIZES.base(.5),
        backgroundColor: COLORS.warning,
        borderRadius: SIZES.radius(1.5),
        marginStart: SIZES.base(1)
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
        bottom: SIZES.base(8.5)
    },
    badge: {
        position: 'absolute',
        left: SIZES.base(1),
        top: -SIZES.base(1),
        backgroundColor: COLORS.warning
    }
})