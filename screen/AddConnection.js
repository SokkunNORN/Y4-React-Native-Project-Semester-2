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
import { checkParticipantConnected, createParticipant, findUser } from '../api'

const AddConnection = () => {

    const navigation = useNavigation()

    const [phoneNumber, setPhoneNumber] = useState('')
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false)
    const [participantObject, setParticipantObject] = useState(null)

    const onFindParticipant = async phone => {
        const auth = await getCachedUser()

        if (auth.phone === `+855 ${phone}`) return

        const response = await findUser(phone)

        if (response) {
            const isParticipantConnected = await checkParticipantConnected(auth.id, response.id)

            if (isParticipantConnected) {
                alert('The phone number is already connected.')
            } else {
                setParticipantObject(response)
                setIsValidPhoneNumber(true)
            }
        } else {
            setParticipantObject(null)
            setIsValidPhoneNumber(false)
        }
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

        if (value.length >= 10) {
            onFindParticipant(newTxt)
        } else {
            setParticipantObject('')
            setIsValidPhoneNumber(false)
        }

        setPhoneNumber(newTxt)
    }

    const onBack = () => {
        navigation.goBack()
    }

    const onAddParticipant = async () => {
        const auth = await getCachedUser()
        const newParticipant = {
            isConnected: false,
            is_group: false,
            last_message: {
                created_at: new Date(),
                id: null,
                message: null,
                participant_id: auth.id,
                seen: false,
                updated_at: new Date(),
                user: {
                    fname: null,
                    id: null,
                    image_profile: null,
                    lname: null
                }
            },
            participants: [
                {
                    fname: participantObject.fname,
                    uid: participantObject.id,
                    image_profile: participantObject.image_profile,
                    lname: participantObject.lname
                },
                {
                    fname: auth.fname,
                    uid: auth.id,
                    image_profile: auth.image_profile,
                    lname: auth.lname
                }
            ],
            requested_at: new Date(),
            unseen_messages: []
        }

        try {
            await createParticipant(newParticipant)
            onBack()
        } catch (error) {
            alert(error)
        }
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
                                <Text style={ styles.participant_name }> { participantObject?.fname || '...' }</Text>
                            </Text>
                        </View>

                        <Button
                            style={[
                                styles.btn_continue,
                                {
                                    backgroundColor: isValidPhoneNumber ? COLORS.warning : 
                                    !isDark ? COLORS.secondary : COLORS.secondary1
                                }
                            ]}
                            disabled={ !isValidPhoneNumber }
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