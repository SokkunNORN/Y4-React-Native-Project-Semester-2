import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableWithoutFeedback,
    ImageBackground,
    Text,
    Keyboard,
    DatePickerIOS
} from 'react-native'
import { Card, Paragraph, Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from '../components/header/Header'
import { COLORS, FONTS, SIZES, HexToRGB } from '../constant'
const keyboardVerticalOffset = Platform.OS === 'ios' ? SIZES.base(12.5) : 0
import AppContext from '../context'
import { useNavigation } from '@react-navigation/native'

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

    const onCloseSelectDate = () => {
        setIsSelectDate(false)
    }

    return (
        <AppContext.Consumer>
            {
                ({ 
                    isDark
                }) =>
                <SafeAreaView style={[
                    styles.safe_area_view,
                    {
                        backgroundColor: isDark ? COLORS.dark : COLORS.light_gray
                    }
                ]}>
                    <Header
                        title='Edit Profile'
                        icon='close'
                        onClickBtnOne={ () => onBack() }
                    />
                    <View style={ styles.container }>
                        <View style={ styles.header }>
                            <ScrollView
                                keyboardDismissMode='interactive'
                                showsVerticalScrollIndicator={ false }
                            >
                                <Card
                                    style={[
                                        styles.card_contain,
                                        {
                                            backgroundColor: isDark ? COLORS.dark : COLORS.light_gray
                                        }
                                    ]}
                                >
                                    <ImageBackground
                                        style={ styles.profile_img }
                                        imageStyle={ styles.profile_img }
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
                                        onFocus={ () => onCloseSelectDate() }
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
                                        onFocus={ () => onCloseSelectDate() }
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
                                        onFocus={ () => onCloseSelectDate() }
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
                                        onFocus={ () => onCloseSelectDate() }
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
                        </View>

                        <KeyboardAvoidingView
                            behavior={ Platform.OS === 'ios' ? 'padding' : null }
                            keyboardVerticalOffset={ keyboardVerticalOffset }
                        >
                            {           
                                isSelectDate ? 
                                <>
                                    <View 
                                        style={[
                                            styles.view_button_on_date_picker,
                                            {
                                                backgroundColor: isDark ?  HexToRGB(COLORS.dark, .4) : COLORS.light_gray
                                            }
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
                                        date={ date }
                                        onDateChange={ value => setDate(value) }
                                        mode='date'
                                    />
                                </> : null
                            }
                        </KeyboardAvoidingView>
                    </View>
                </SafeAreaView>
            }
        </AppContext.Consumer>
    )
}

export default EditProfile

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
    card_contain: {
        elevation: 0,
        borderRadius: SIZES.base(1.5),
        marginHorizontal: SIZES.base()
    },
    profile_img: {
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
        marginTop: SIZES.base(1.85)
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

    footer: {
        borderTopWidth: .2,
        borderTopColor: HexToRGB(COLORS.secondary1, .2),
        padding: SIZES.base(1),
        backgroundColor: COLORS.dark,
        flexDirection: 'row'
    },
    label_btn_done: {
        fontSize: FONTS.h3,
        paddingVertical: SIZES.base(1)
    },
    view_button_on_date_picker: {
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
        fontSize: FONTS.p,
        marginHorizontal: SIZES.base()
    }
})