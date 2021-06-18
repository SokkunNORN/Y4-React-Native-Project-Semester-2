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

const Verification = ({ route }) => {

    const navigation = useNavigation()
    let textInput = useRef(null)
    const phoneNumber = route.params
    const lenghtInput = 4
    const [internalVar, setInternalVal] = useState('')
    const [isSendingCode, setIsSendingCode] = useState(true)
    const [sendingCode, setSendingCode] = useState(0)

    useEffect(() => {
        setSendingCode(30)
    }, [])

    const onChangeText = value => {
        setInternalVal(value)
        if (internalVar.length >= 3) {
            setTimeout(() => {
                navigation.push(Routes.DASHBOARD)
            }, 500)
        }
    }

    return (
        <>
            <DetailHeader backgroundColor={ COLORS.dark }/>

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
                    <Title style={ styles.title }>Verification</Title>
                    <Paragraph style={ styles.decription }>
                        We've sent you an SMS with a code to you number.
                        { phoneNumber }
                    </Paragraph>

                    <TextInput
                        ref={ input => textInput = input }
                        style={{ width: 0, height: 0 }}
                        maxLength={ lenghtInput }
                        keyboardType='number-pad'
                        value={ internalVar }
                        onChangeText={onChangeText}
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
                                        style={ styles.cell_view } 
                                    >
                                        <Paragraph
                                            style={ styles.cell_text }
                                        >
                                            {
                                                internalVar[index] || ''
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
        margin: SIZES.base(1),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
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