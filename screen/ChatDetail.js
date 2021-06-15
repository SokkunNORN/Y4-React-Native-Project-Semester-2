import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DetailHeader from '../components/header/DetailHeader'
import { COLORS, FONTS, SIZES } from '../constant'

const ChatDetail = ({ route }) => {

    const name = route.params
    const [message, setMessage] = useState('')

    return (
        <SafeAreaView style={ styles.safe_area_view }>
            <DetailHeader
                iconRight1='phone'
                iconRight2='video'
                iconRight3='dots-vertical'
                name={ name }
            />
            <View style={ styles.container }>
                <View style={ styles.header }></View>
                <KeyboardAvoidingView
                    behavior={ Platform.OS === 'ios' ? 'padding' : null }
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
        width: SIZES.width - (SIZES.base(20)),
        marginStart: SIZES.base(.5),
        borderWidth: .5,
        borderColor: COLORS.secondary1
    },
    view_right_text: {
        padding: SIZES.base(.5),
        backgroundColor: COLORS.warning,
        borderRadius: SIZES.radius(1.5),
        marginStart: SIZES.base(1)
    },
    icon_right_text: {
        padding: SIZES.base(.5),
        borderRadius: SIZES.radius()
    }
})