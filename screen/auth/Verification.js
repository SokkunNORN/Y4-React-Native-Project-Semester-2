import React, { useState, useRef, useEffect } from 'react'
import {
    Keyboard,
    TouchableWithoutFeedback,
    View,
    StyleSheet
} from 'react-native'
import Routes from '../../routes'
import { useNavigation } from '@react-navigation/native'
import { Paragraph, TextInput, Title } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DetailHeader from '../../components/header/DetailHeader'
import { COLORS, SIZES, HexToRGB, FONTS } from '../../constant'
import AppContext from '../../context'
import auth from '@react-native-firebase/auth'

const Verification = ({ route }) => {

    const navigation = useNavigation()
    let textInput = useRef(null)
    const phoneNumber = route.params
    const lenghtInput = 6
    const [confirm, setConfirm] = useState(null)
    const [otpCode, setOtpCode] = useState('')
    const [isSendingCode, setIsSendingCode] = useState(true)
    const [sendingCode, setSendingCode] = useState(0)

    useEffect(() => {
        setSendingCode(30)
        signInWithPhoneNumber()
    }, [])

    const signInWithPhoneNumber = async () => {
        try {
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber)
            alert(JSON.stringify(confirmation))
        } catch (error) {
            alert(error)
        }
    }

    const confirmCode = async () => {
        try {
            await confirm.confirm(otpCode)
            setTimeout(() => {
                navigation.push(Routes.INFORMATION, phoneNumber)
            }, 500)
        } catch (_) {
            alert('The confirmation code is invalid')
        }
    }

    const onChangeText = value => {
        setOtpCode(value)
        if (
            value.length > otpCode.length &&
            otpCode.length >= 5
        ) {
            confirmCode()
        }
    }

    return (
        <AppContext.Consumer>
            {
            ({ isDark }) =>
            <>
                <DetailHeader 
                    backgroundColor={ isDark ? COLORS.primary1 : COLORS.white }
                    title={ phoneNumber }
                    isTitleCenter
                />

                <TouchableWithoutFeedback
                    onPress={ () => Keyboard.dismiss() }
                >
                    <View style={ styles.container }>
                        <View style={ styles.border_view_lock_icon }>
                            <View style={ styles.view_lock_icon }>
                                <Icon
                                    name='lock-outline'
                                    style={ styles.lock_icon }
                                    color={ COLORS.warning } size={ SIZES.base(5.5) } />
                            </View>
                        </View>
                        <Title style={[ 
                            styles.title,
                            {
                                color: isDark ? COLORS.white : COLORS.black 
                            }
                        ]}>Verification</Title>
                        <Paragraph style={[
                            styles.decription,
                            {
                                color: isDark ? COLORS.white : COLORS.black 
                            } 
                        ]}>
                            We've sent you an SMS with a code to you number.
                            { phoneNumber }
                        </Paragraph>

                        <TextInput
                            keyboardAppearance={ isDark ? 'dark' : 'light' }
                            ref={ input => textInput = input }
                            style={{ width: 0, height: 0 }}
                            maxLength={ lenghtInput }
                            keyboardType='number-pad'
                            value={ otpCode }
                            onChangeText={ onChangeText }
                            autoFocus
                        />

                        <View style={ styles.container_input }>
                            {
                                Array(lenghtInput).fill().map((_, index) => (
                                    <TouchableWithoutFeedback 
                                        onPress={ () => textInput.focus() }
                                    >
                                        <View 
                                            key={ index }
                                            style={[
                                                styles.cell_view,
                                                {
                                                    backgroundColor: isDark ? HexToRGB(COLORS.warning, .2) :
                                                    HexToRGB(COLORS.secondary)
                                                }
                                            ]} 
                                        >
                                            <Paragraph
                                                style={[
                                                    styles.cell_text,
                                                    {
                                                        color: isDark ? COLORS.white : COLORS.black 
                                                    }
                                            ]}
                                            >
                                                {
                                                    otpCode[index] || ''
                                                }
                                            </Paragraph>
                                        </View>
                                    </TouchableWithoutFeedback>
                                ))
                            }
                        </View>

                        {
                            isSendingCode ? 
                            <Paragraph style={ styles.send_code } >00:{ sendingCode }</Paragraph> 
                            : 
                            <Paragraph style={ styles.send_code }>
                                Didn't receive a code?
                                <Paragraph style={ styles.btn_resend_code }> Resend Code</Paragraph>
                            </Paragraph>
                        }
                    </View>
                </TouchableWithoutFeedback>
            </>
            }
        </AppContext.Consumer>
    )
}

export default Verification

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignSelf: 'center',
        marginHorizontal: SIZES.base()
    },
    border_view_lock_icon: {
        borderWidth: 1,
        borderColor:  HexToRGB(COLORS.warning, .3),
        borderRadius: SIZES.radius(8),
        alignSelf: 'center'
    },
    view_lock_icon: {
        backgroundColor: HexToRGB(COLORS.warning, .2),
        borderRadius: SIZES.radius(6),
        margin: SIZES.base(.8)
    },
    lock_icon: {
        padding: SIZES.base(1.5)
    },
    title: {
        color: COLORS.white,
        fontSize: FONTS.h2,
        lineHeight: SIZES.base(8),
        alignSelf: 'center'
    },
    decription: {
        color: COLORS.secondary,
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: FONTS.h4
    },
    container_input: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -SIZES.base(5)
    },
    cell_view: {
        paddingVertical: SIZES.base(1.5),
        width: SIZES.base(6),
        height: SIZES.base(6),
        margin: SIZES.base(.5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: HexToRGB(COLORS.warning, .2),
        borderRadius: SIZES.radius(1)
    },
    cell_text: {
        alignItems: 'center',
        fontSize: FONTS.h3,
        color: COLORS.white
    },
    send_code: {
        color: COLORS.secondary1,
        fontSize: FONTS.h4,
        alignSelf: 'center',
        marginTop: SIZES.base()
    },
    btn_resend_code: {
        color: COLORS.warning,
        fontSize: FONTS.h4
    }
})