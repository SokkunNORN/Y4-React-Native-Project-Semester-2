import React, { useState } from 'react'
import {
    TouchableWithoutFeedback,
    Keyboard,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    ImageBackground,
    DatePickerIOS,
    Text
} from 'react-native'
import Header from '../components/header/Header'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AppContext from '../context'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, FONTS, HexToRGB } from '../constant'
import { Card, Button, Paragraph } from 'react-native-paper'

const EditProfile = () => {

    const navigation = useNavigation()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState(new Date())
    const [about, setAbout] = useState('')
    const [isSelectDate, setIsSelectDate] = useState(false)
    const [isSelectStatusDate, setIsSelectStatusDate] = useState(false)
    const [statusDate, setStatusDate] = useState(false)

    const onBack = () => {
        navigation.goBack()
    }

    const onDone = () => {
        onBack()
    }

    const onShowDatePicker = () => {
        Keyboard.dismiss()
        setIsSelectDate(true)
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
                                    <ImageBackground
                                        style={ styles.card_profile }
                                        imageStyle={ styles.card_profile }
                                        source={ require('../asset/cover.jpeg') }
                                    >
                                        <View style={ styles.view_camera_icon }>
                                            <Icon
                                                name='camera-outline'
                                                style={ styles.camera_icon }
                                                color={ COLORS.warning } size={ SIZES.base(3) } />
                                        </View>
                                    </ImageBackground>

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

                                    <TouchableWithoutFeedback
                                        onPress={ () => onShowDatePicker() }
                                    >
                                        <View
                                            style={[
                                                styles.date_picker_contain_view,
                                                {
                                                    backgroundColor: !isDark ? COLORS.secondary : COLORS.primary
                                                }
                                            ]}
                                        >
                                            <Text
                                                style={[
                                                    styles.date_label
                                                ]}
                                            >Date of Birth</Text>
                                            <View style={[
                                                styles.bd_view_right,
                                                {
                                                    backgroundColor: isDark ? COLORS.dark : COLORS.white
                                                }
                                            ]}>
                                                <Icon
                                                    name='check-circle'
                                                    color={ COLORS.warning } size={ SIZES.base() } />
                                                <Paragraph style={[
                                                    styles.bd_label,
                                                    {
                                                        color: isDark ? COLORS.white : COLORS.black
                                                    }
                                                ]}>Public (Hide year)</Paragraph>
                                                <Icon
                                                    name='chevron-down'
                                                    color={ COLORS.warning } size={ SIZES.base(3) } />
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>

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

                        {
                            isSelectDate ? 
                            <>
                                <View 
                                    style={[
                                        styles.view_button_on_date_picker
                                    ]}
                                >
                                    <Text 
                                        style={ styles.btn_on_date_picker }
                                        onPress={ () => setIsSelectDate(false) }
                                    >Cancel</Text>
                                    <Text
                                        style={ styles.btn_on_date_picker }
                                        onPress={ () => setIsSelectDate(false) }
                                    >Done</Text>
                                </View>
                                <DatePickerIOS
                                    date={date}
                                    onDateChange={ value => setDate(value) }
                                    mode='date'
                                />
                            </> : <></>
                        }
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
    view_camera_icon: {
        position: 'absolute',
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius(6),
        margin: SIZES.base(.8),
        bottom: SIZES.base(1),
        right: SIZES.base(1)
    },
    camera_icon: {
        padding: SIZES.base(1)
    },
    text_input: {
        backgroundColor: COLORS.primary,
        color: COLORS.white,
        borderRadius: SIZES.radius(1),
        padding: SIZES.base(),
        fontSize: FONTS.h4,
        marginTop: SIZES.base(1)
    },
    date_picker_contain_view: {
        backgroundColor: COLORS.secondary,
        height: SIZES.customHiegthTextField(-5),
        marginTop: SIZES.base(1),
        borderRadius: SIZES.radius(1),
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    date_label: {
        color: COLORS.secondary1,
        fontSize: FONTS.h4,
        marginStart: SIZES.base(),
        marginTop: SIZES.base(1.7)
    },
    bd_view_right: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.base(1),
        backgroundColor: COLORS.dark,
        marginVertical: SIZES.base(.7),
        borderRadius: SIZES.radius(.7),
        marginEnd: SIZES.base(.7)
    },
    bd_label: {
        color: COLORS.white,
        fontSize: FONTS.h5,
        marginLeft: SIZES.base(1),
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
    },
    view_button_on_date_picker: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.light_gray,
        borderTopWidth: .3,
        borderTopColor: HexToRGB(COLORS.secondary1),
        borderBottomWidth: .3,
        borderBottomColor: HexToRGB(COLORS.secondary1),
        paddingVertical: SIZES.base(1.5)
    },
    btn_on_date_picker: { 
        color: COLORS.warning,
        fontSize: FONTS.p
    }
})