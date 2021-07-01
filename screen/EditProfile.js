import React, { useState } from 'react'
import {
    TouchableWithoutFeedback,
    Keyboard,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from 'react-native'
import Header from '../components/header/Header'
import AppContext from '../context'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, FONTS } from '../constant'
import { Card, Button } from 'react-native-paper'

const EditProfile = () => {

    const navigation = useNavigation()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState('')
    const [about, setAbout] = useState('')

    const onBack = () => {
        navigation.goBack()
    }

    const onDone = () => {
        onBack()
    }

    return (
        <AppContext.Consumer>
            {
                ({ isDark }) => 
                <TouchableWithoutFeedback
                    onPress={ () => Keyboard.dismiss() }
                >
                    <View>
                        <Header
                            title='Edit Profile'
                            icon='close'
                            onClickBtnOne={ () => onBack() }
                            backgroundColor={ isDark ? COLORS.primary1 : COLORS.light_gray }
                        />
                        <KeyboardAvoidingView
                            behavior={ Platform.OS === 'ios' ? 'height' : null }
                        >
                            <ScrollView
                                showsVerticalScrollIndicator={ false }
                            >
                                <Card style={[
                                    styles.card_container,
                                    {
                                        backgroundColor: isDark ? COLORS.primary1 : COLORS.light_gray
                                    }
                                ]}>
                                    <Card.Cover style={ styles.card_profile } source={ require('../asset/cover.jpeg') } />

                                    <TextInput
                                        keyboardAppearance={ !isDark ? 'light' : 'dark'}
                                        placeholder='First Name'
                                        placeholderTextColor={ COLORS.secondary1 }
                                        style={[
                                            styles.text_input,
                                            {
                                                color: !isDark ? COLORS.dark : COLORS.white,
                                                backgroundColor: !isDark ? COLORS.secondary : COLORS.primary
                                            }
                                        ]}
                                        onChangeText={ value => setFirstName(value) }
                                        value={ firstName }
                                        maxLength={ 12 }
                                    />

                                    <TextInput
                                        keyboardAppearance={ !isDark ? 'light' : 'dark'}
                                        placeholder='Last Name (Optional)'
                                        placeholderTextColor={ COLORS.secondary1 }
                                        style={[
                                            styles.text_input,
                                            {
                                                color: !isDark ? COLORS.dark : COLORS.white,
                                                backgroundColor: !isDark ? COLORS.secondary : COLORS.primary
                                            }
                                        ]}
                                        onChangeText={ value => setLastName(value) }
                                        value={ lastName }
                                        maxLength={ 12 }
                                    />

                                    <TextInput
                                        keyboardAppearance={ !isDark ? 'light' : 'dark'}
                                        placeholder='Mobile'
                                        placeholderTextColor={ COLORS.secondary1 }
                                        style={[
                                            styles.text_input,
                                            {
                                                color: !isDark ? COLORS.dark : COLORS.white,
                                                backgroundColor: !isDark ? COLORS.secondary : COLORS.primary
                                            }
                                        ]}
                                        onChangeText={ value => setPhone(value) }
                                        value={ phone }
                                        maxLength={ 12 }
                                    />

                                    <TextInput
                                        keyboardAppearance={ !isDark ? 'light' : 'dark'}
                                        placeholder='Date of Birth'
                                        placeholderTextColor={ COLORS.secondary1 }
                                        style={[
                                            styles.text_input,
                                            {
                                                color: !isDark ? COLORS.dark : COLORS.white,
                                                backgroundColor: !isDark ? COLORS.secondary : COLORS.primary
                                            }
                                        ]}
                                        onChangeText={ value => setDate(value) }
                                        value={ date }
                                        maxLength={ 12 }
                                    />

                                    <TextInput
                                        keyboardAppearance={ !isDark ? 'light' : 'dark'}
                                        placeholder='About'
                                        placeholderTextColor={ COLORS.secondary1 }
                                        style={[
                                            styles.text_input,
                                            {
                                                color: !isDark ? COLORS.dark : COLORS.white,
                                                backgroundColor: !isDark ? COLORS.secondary : COLORS.primary
                                            }
                                        ]}
                                        onChangeText={ value => setAbout(value) }
                                        value={ about }
                                        maxLength={ 12 }
                                    />

                                    <Button
                                        style={[
                                            styles.btn_done,
                                            {
                                                backgroundColor: firstName ? COLORS.warning : 
                                                !isDark ? COLORS.secondary : COLORS.secondary1
                                            }
                                        ]}
                                        disabled={ firstName ? false : true }
                                        labelStyle={ styles.label_btn_done }
                                        color={ COLORS.secondary }
                                        uppercase={ false }
                                        onPress={() => onDone() }
                                    >
                                        Done
                                    </Button>
                                </Card>
                            </ScrollView>
                        </KeyboardAvoidingView>
                    </View>
                </TouchableWithoutFeedback>
            }
        </AppContext.Consumer>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    card_container: {
        marginHorizontal: SIZES.base(),
        borderWidth: 0,
        elevation: 0
    },
    card_profile: {
        height: SIZES.width - (6 * SIZES.base()),
        borderRadius: SIZES.base(1.5),
        borderTopStartRadius: SIZES.base(1.5),
        borderTopRightRadius: SIZES.base(1.5)
    },
    text_input: {
        backgroundColor: COLORS.primary,
        color: COLORS.white,
        borderRadius: SIZES.radius(),
        padding: SIZES.base(),
        fontSize: FONTS.h4,
        marginTop: SIZES.base(1)
    },
    btn_done: {
        marginTop: SIZES.base(5),
        borderRadius: SIZES.radius(4),
        backgroundColor: COLORS.secondary1,
        marginHorizontal: SIZES.base(5)
    },
    label_btn_done: {
        fontSize: FONTS.h3,
        paddingVertical: SIZES.base(1)
    }
})