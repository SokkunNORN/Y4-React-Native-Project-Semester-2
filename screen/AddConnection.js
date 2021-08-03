import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native'
import {
    Button
} from 'react-native-paper'
import Header from '../components/header/Header'
import { COLORS, SIZES, FONTS } from '../constant'
import AppContext from '../context'
import { useNavigation } from '@react-navigation/native'
import { getCachedUser } from '../utils/cache-authentication'

const AddConnection = () => {

    const navigation = useNavigation()

    const [phoneNumber, setPhoneNumber] = useState('')
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false)
    const [participantName, setParticipantName] = useState('')

    const onFindParticipant = async () => {

    }

    const onTextChange = value => {
        let newTxt = ''
        const cleaned = ('' + value).replace(/\D/g, '')
        for (let i = 0; i < cleaned.length; i++) {
            if (i == 2 || i == 5) {
                newTxt += ' '
            }
            newTxt += cleaned[i]
        }

        if (value.length >= 8) {
            onFindParticipant()
        }

        setPhoneNumber(newTxt)
    }

    const onBack = () => {
        navigation.goBack()
    }

    const onAddParticipant = async () => {
        const auth = await getCachedUser()

        onBack()
    }

    return (
        <AppContext.Consumer>
            {
                ({ 
                    isDark
                }) =>
                <>
                    <Header
                        icon='close'
                        onClickBtnOne={ () => onBack() }
                        backgroundColor={  isDark ? COLORS.primary1 : COLORS.light_gray }
                    />

                    <View style={ styles.container }>
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
                            />
                        </View>

                        <View style={ styles.participant_name_view }>
                            <Text
                                style={{
                                    color: !isDark ? COLORS.dark : COLORS.white   
                                }}
                            >
                                Name:
                                <Text style={ styles.participant_name }> { participantName || '...' }</Text>
                            </Text>
                        </View>

                        <Button
                            style={[
                                styles.btn_continue,
                                {
                                    backgroundColor: phoneNumber.length >= 10 ? COLORS.warning : 
                                    !isDark ? COLORS.secondary : COLORS.secondary1
                                }
                            ]}
                            disabled={ phoneNumber.length >= 10 ? false : true }
                            labelStyle={ styles.label_btn_continue }
                            color={ COLORS.secondary }
                            uppercase={ false }
                            onPress={() => onAddParticipant() }
                        >
                            Add
                        </Button>
                    </View>
                </>
            }
        </AppContext.Consumer>
    )
}

export default AddConnection

const styles = StyleSheet.create({
    container: {
        marginHorizontal: SIZES.base()
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
    
    participant_name_view: {
        marginTop: SIZES.base(4),
        alignSelf: 'center'
    },
    participant_name: {
        fontSize: FONTS.h4,
        fontWeight: 'bold'
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
    }
})