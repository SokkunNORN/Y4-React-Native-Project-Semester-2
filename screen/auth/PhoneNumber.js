import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Platform
} from 'react-native'
import {
    Button,
    Paragraph,
    Title
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { COLORS, FONTS, SIZES, HexToRGB } from '../../constant'

const keyboardVerticalOffset = Platform.OS === 'ios' ? SIZES.base(7) : 0

const PhoneNumber = () => {

    const [phoneNumber, setPhoneNumber] = useState(null)
    const [keyboardStatus, setKeyboardStatus] = useState(false)

    const onTextChange = value => {
        const cleaned = ('' + value).replace(/\D/g, '')
        const match = cleaned.match(/^(1|)?(\d{2})(\d{3})(\d{4})$/)
        if (match) {
            const intlCode = (match[1] ? '+1 ' : ''),
                number = [intlCode, '+855 ', match[2], ' ', match[3], ' ', match[4]].join('');

            setPhoneNumber(number)

            return
        }
        setPhoneNumber(value)
    }

    return (
        <TouchableWithoutFeedback
            onPress={ () => Keyboard.dismiss() }
        >
            <View
                style={ styles.constainer }
            >
                <View
                    style={ styles.top_contain }
                >
                    <View style={ styles.border_view_phone_icon }>
                        <View style={ styles.view_phone_icon }>
                            <Icon
                                name='mobile-alt'
                                style={ styles.phone_icon }
                                color={ COLORS.warning } size={ SIZES.base(5.5) } />
                        </View>
                    </View>
                    <Title style={ styles.greeting_text }>Welcome to Chat Plus!</Title>
                    <Paragraph style={ styles.introduction }>
                        Provide your phone number to receive your conformation code. {keyboardStatus}
                    </Paragraph>
                    <View style={ styles.contain_phone_number_text_input } >
                        <TextInput
                            keyboardType='number-pad'
                            placeholder='Enter phone number'
                            placeholderTextColor={ COLORS.secondary1 }
                            style={ styles.phone_number_text_input }
                            onChangeText={ value => onTextChange(value) }
                            value={ phoneNumber }
                            maxLength={ 12 }
                            onFocus={ () => setKeyboardStatus(true) }
                            onBlur={ () => setKeyboardStatus(false) }
                        />
                    </View>
                </View>

                <KeyboardAvoidingView
                    behavior={ Platform.OS === 'ios' ? 'padding' : null }
                    keyboardVerticalOffset={ keyboardVerticalOffset }
                >
                    <View>
                        <Text
                            style={ styles.condition_text }
                        >
                            By continuing, you are agreeing to the 
                            <Text style={ styles.privacy_text }> Privacy Plicy</Text> and 
                            <Text style={ styles.privacy_text }> Terms and Conditions</Text>
                        </Text>
                        <Button
                            style={[
                                styles.btn_continue,
                                keyboardStatus ? styles.btn_continue_with_active_keyboard : {},
                                {
                                    backgroundColor: phoneNumber ? COLORS.warning : COLORS.secondary1
                                }
                            ]}
                            disabled={ phoneNumber ? false : true }
                            labelStyle={ styles.label_btn_continue }
                            color={ COLORS.secondary }
                            uppercase={ false }
                            onPress={() => console.log('Pressed')}
                        >
                            Continue
                        </Button>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default PhoneNumber

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    top_contain: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginHorizontal: SIZES.base(5)
    },
    border_view_phone_icon: {
        borderWidth: 1,
        borderColor:  HexToRGB(COLORS.warning, .3),
        borderRadius: SIZES.radius(8),
        alignSelf: 'center'
    },
    view_phone_icon: {
        backgroundColor: HexToRGB(COLORS.warning, .2),
        borderRadius: SIZES.radius(6),
        margin: SIZES.base(.8)
    },
    phone_icon: {
        padding: SIZES.base(1.5),
        paddingHorizontal: SIZES.base(2.5)
    },
    greeting_text: {
        alignSelf: 'center',
        color: COLORS.white,
        fontSize: FONTS.h2,
        lineHeight: SIZES.base(6)
    },
    introduction: {
        color: COLORS.secondary,
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: FONTS.h4
    },
    contain_phone_number_text_input: {
        marginTop: SIZES.base(3)
    },
    phone_number_text_input: {
        backgroundColor: COLORS.primary,
        color: COLORS.white,
        borderRadius: SIZES.radius(),
        padding: SIZES.base(),
        fontSize: FONTS.h4
    },

    btn_continue: {
        marginTop: SIZES.base(5),
        borderRadius: SIZES.radius(4),
        backgroundColor: COLORS.secondary1,
        marginHorizontal: SIZES.base(5)
    },
    btn_continue_with_active_keyboard: {
        borderRadius: 0,
        marginHorizontal: 0
    },
    label_btn_continue: {
        fontSize: FONTS.h3,
        paddingVertical: SIZES.base(1)
    },
    condition_text: {
        color: COLORS.white,
        fontSize: FONTS.p,
        textAlign: 'center',
        lineHeight: SIZES.base(3),
        marginHorizontal: SIZES.base(5)
    },
    privacy_text: {
        color: COLORS.warning
    }
})