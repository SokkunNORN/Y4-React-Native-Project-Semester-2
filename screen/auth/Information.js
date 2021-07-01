import React, { useState } from 'react'
import { 
    TouchableWithoutFeedback,
    Keyboard,
    StatusBar,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    TextInput
} from 'react-native'
import {
    Button
} from 'react-native-paper'
import { COLORS, SIZES, FONTS } from '../../constant'
import AppContext from '../../context'
import { useNavigation } from '@react-navigation/native'
import Routes from '../../routes'

const Information = () => {

    const navigation = useNavigation()    
    const [keyboardStatus, setKeyboardStatus] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const onDone = () => {
        navigation.push(Routes.DASHBOARD)
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
                        style={[
                            styles.container
                        ]}
                    >
                        <View
                            style={[
                                styles.top_contain
                            ]}
                        >
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
                                onFocus={ () => setKeyboardStatus(true) }
                                onBlur={ () => setKeyboardStatus(false) }
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
                                onFocus={ () => setKeyboardStatus(true) }
                                onBlur={ () => setKeyboardStatus(false) }
                            />
                        </View>

                        <KeyboardAvoidingView
                            behavior={ Platform.OS === 'ios' ? 'position' : null }
                        >
                            <View
                                style={[
                                    styles.bottom_contain
                                ]}
                            >
                                <Button
                                    style={[
                                        styles.btn_done,
                                        keyboardStatus ? styles.btn_done_with_active_keyboard : {},
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
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        }
        </AppContext.Consumer>
    )
}

export default Information

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
    text_input: {
        backgroundColor: COLORS.primary,
        color: COLORS.white,
        borderRadius: SIZES.radius(1),
        padding: SIZES.base(),
        fontSize: FONTS.h4,
        marginBottom: SIZES.base()
    },
    bottom_contain: {

    },
    btn_done: {
        marginTop: SIZES.base(5),
        borderRadius: SIZES.radius(4),
        backgroundColor: COLORS.secondary1,
        marginHorizontal: SIZES.base(5)
    },
    btn_done_with_active_keyboard: {
        borderRadius: 0,
        marginHorizontal: 0
    },
    label_btn_done: {
        fontSize: FONTS.h3,
        paddingVertical: SIZES.base(1)
    }
})