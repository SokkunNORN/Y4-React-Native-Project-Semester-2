import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StatusBar
} from 'react-native'
import {
    Button,
    Paragraph,
    Title
} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Routes from '../../routes'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { COLORS, FONTS, SIZES, HexToRGB } from '../../constant'
import AppContext from '../../context'

const PhoneNumber = () => {

    const navigation = useNavigation()
    const [phoneNumber, setPhoneNumber] = useState('')
    const [keyboardStatus, setKeyboardStatus] = useState(false)

    const onTextChange = value => {
        let newTxt = ''
        const cleaned = ('' + value).replace(/\D/g, '')
        for (let i = 0; i < cleaned.length; i++) {
            if (i == 2 || i == 5) {
                newTxt += ' '
            }
            newTxt += cleaned[i]
        }
        setPhoneNumber(newTxt)
    }

    async function onContinue () {
        navigation.push(Routes.VERIFICATION, `+855 ${phoneNumber}`)
    }

    return (
        <AppContext.Consumer>
        {
            ({ isDark }) =>
            <TouchableWithoutFeedback
                onPress={ () => Keyboard.dismiss() }
            >
                <View style={{ flex: 1 }}>
                    <StatusBar barStyle={ isDark ? 'light-content' : 'dark-content' } />
                    <View
                        style={ styles.container }
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
                            <Title style={[
                                styles.greeting_text,
                                {
                                    color: !isDark ? COLORS.black : COLORS.white
                                }
                            ]}>Welcome to Chat Plus!</Title>
                            <Paragraph style={[
                                styles.introduction,
                                {
                                    color: !isDark ? COLORS.black : COLORS.white
                                }
                            ]}>
                                Provide your phone number to receive your conformation code. {keyboardStatus}
                            </Paragraph>
                            <View style={ styles.contain_phone_number_text_input } >
                                <Text
                                    style={[
                                        styles.label_phone_text_field,
                                        {
                                            color: !isDark ? COLORS.dark : COLORS.white
                                        }
                                    ]}
                                >+855</Text>
                                <TextInput
                                    keyboardAppearance={ !isDark ? 'light' : 'dark'}
                                    keyboardType='number-pad'
                                    placeholder='Enter phone number'
                                    placeholderTextColor={ COLORS.secondary1 }
                                    style={[
                                        styles.phone_number_text_input,
                                        {
                                            color: !isDark ? COLORS.dark : COLORS.white,
                                            backgroundColor: !isDark ? COLORS.secondary : COLORS.primary
                                        }
                                    ]}
                                    onChangeText={ value => onTextChange(value) }
                                    value={ phoneNumber }
                                    maxLength={ 11 }
                                    onFocus={ () => setKeyboardStatus(true) }
                                    onBlur={ () => setKeyboardStatus(false) }
                                />
                            </View>
                        </View>
        
                        <KeyboardAvoidingView
                            behavior={ Platform.OS === 'ios' ? 'position' : null }
                        >
                            <View>
                                <Text
                                    style={[
                                        styles.condition_text,
                                        {
                                            color: !isDark ? COLORS.black : COLORS.white
                                        }
                                    ]}
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
                                            backgroundColor: phoneNumber.length >= 10 ? COLORS.warning : 
                                            !isDark ? COLORS.secondary : COLORS.secondary1
                                        }
                                    ]}
                                    disabled={ phoneNumber.length >= 10 ? false : true }
                                    labelStyle={ styles.label_btn_continue }
                                    color={ COLORS.secondary }
                                    uppercase={ false }
                                    onPress={() => onContinue() }
                                >
                                    Continue
                                </Button>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        }
        </AppContext.Consumer>
    )
}

export default PhoneNumber

const styles = StyleSheet.create({
    container: {
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
    label_phone_text_field: {
        position: 'absolute',
        zIndex: 1000,
        top: SIZES.base(2.1),
        fontSize: FONTS.h4,
        left: SIZES.base()
    },
    phone_number_text_input: {
        backgroundColor: COLORS.primary,
        color: COLORS.white,
        borderRadius: SIZES.radius(1),
        padding: SIZES.base(),
        fontSize: FONTS.h4,
        paddingLeft: SIZES.base(8)
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
        fontSize: FONTS.h4,
        paddingVertical: SIZES.base(.7)
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