import React, { useState, useRef } from 'react'
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
    ActionSheetIOS
} from 'react-native'
import {
    Card,
    Paragraph,
    Button,
    Title
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DetailHeader from '../../components/header/DetailHeader'
import { COLORS, FONTS, SIZES, HexToRGB, BirthDateStatusLists } from '../../constant'
import AppContext from '../../context'
import { useNavigation } from '@react-navigation/native'
import { format } from 'date-fns'
import DateTimePicker from '@react-native-community/datetimepicker'
import Routes from '../../routes'
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'
import { phoneFormatter855, setCachedUser } from '../../utils'
import { createUser } from '../../api'
const keyboardVerticalOffset = Platform.OS === 'ios' ? SIZES.base(12.5) : 0

const Information = ({ route }) => {

    const scrollViewRef = useRef()
    const sheetRef = React.useRef(null)
    const phoneNumber = phoneFormatter855(route.params.phoneNumber) || null
    const navigation = useNavigation()

    const [firstName, setFirstName] = useState('')
    const [date, setDate] = useState(new Date())
    const [birthDate, setBirthDate] = useState(null)
    const [isSelectDate, setIsSelectDate] = useState(false)
    const [statusBirthDate, setStatusBirthDate] = useState(BirthDateStatusLists[0])
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)

    fall = new Animated.Value(1)

    const renderHeader = () => {
        return (
            <AppContext.Consumer>
                {
                    ({ 
                        isDark
                    }) =>

                    <View style={[
                        styles.bottom_header,
                        {
                            backgroundColor: isDark ? COLORS.primary : COLORS.secondary
                        }
                    ]}>
                        <View style={[
                            styles.bottom_panel_header,
                            {
                                backgroundColor: isDark ? COLORS.primary : COLORS.secondary
                            }
                        ]}>
                            <View style={[
                                styles.bottom_panel_handle,
                                {
                                    backgroundColor: isDark ? HexToRGB(COLORS.secondary, .5) : HexToRGB(COLORS.secondary1, .5)
                                }
                            ]}/>
                            <Title style={{
                                marginTop: SIZES.base(4),
                                color: isDark ? COLORS.white : COLORS.black
                            }}>Select Profile Photo</Title>
                            <Paragraph style={{
                                color: isDark ? COLORS.white : COLORS.black
                            }}>Choose your profile picture</Paragraph>
                            <View style={ styles.bottom_content }>
                                <Button
                                    style={ styles.bottom_button }
                                    labelStyle={ styles.bottom_label_button }
                                    color={ COLORS.primary }
                                    uppercase={ false }
                                    onPress={ () => {} }
                                >
                                    Open Gallery
                                </Button>
                                <Button
                                    style={ styles.bottom_button }
                                    labelStyle={ styles.bottom_label_button }
                                    color={ COLORS.primary }
                                    uppercase={ false }
                                    onPress={ () => {} }
                                >
                                    Take Photo
                                </Button>
                                <Button
                                    style={ styles.bottom_button }
                                    labelStyle={ styles.bottom_label_button }
                                    color={ COLORS.red }
                                    uppercase={ false }
                                    onPress={ () => {} }
                                >
                                    Remove Photo
                                </Button>
                                <Button
                                    style={ styles.bottom_button }
                                    labelStyle={ styles.bottom_label_button }
                                    color={ COLORS.primary }
                                    uppercase={ false }
                                    onPress={ () => sheetRef.current.snapTo(1) }
                                >
                                    Cancel
                                </Button>
                            </View>
                        </View>
                    </View>
                }
            </AppContext.Consumer>
        )
    }

    const onOpenStartSheet = () => {
        setIsBottomSheetOpen(true)
    }

    const onCloseEndSheet = () => {
        setIsBottomSheetOpen(false)
    }

    const onDone = async () => {
        const data = {
            about: null,
            bd: birthDate,
            fname: firstName,
            image_profile: null,
            lname: null,
            phone: phoneNumber,
            status_bd: statusBirthDate,
            id: route.params.uid
        }

        try {
            await createUser(data)

            navigation.push(Routes.DASHBOARD)
        } catch (error) {
            alert(error)
        }
        
        await setCachedUser(data)
    }

    const onShowDatePicker = () => {
        Keyboard.dismiss()
        setIsSelectDate(true)
        scrollViewRef.current.scrollToEnd({ animated: true })
    }

    const onCloseSelectDate = () => {
        setIsSelectDate(false)
    }

    const onSelectDateStatus = (isDark) => {
        Keyboard.dismiss()
        onCloseSelectDate()
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: [
                    "Cancel",
                    ...BirthDateStatusLists
                ],
                cancelButtonIndex: 0,
                userInterfaceStyle: isDark ? 'dark' : 'light'
            },
            buttonIndex => {
                if (buttonIndex !== 0) {
                    setStatusBirthDate(BirthDateStatusLists[buttonIndex - 1])
                }
            }
        )
    }

    const onDoneSelectBirthDate = () => {
        const dateFormat = format(date, 'dd MMM yyyy')

        setBirthDate(dateFormat)
        setIsSelectDate(false)
    }

    const onChooseImageOption = () => {
        if (isBottomSheetOpen) {
            sheetRef.current.snapTo(1)
        } else {
            sheetRef.current.snapTo(0)
            setIsSelectDate(false)
        }
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
                        backgroundColor: isDark ? COLORS.primary1 : COLORS.light_gray
                    }
                ]}>
                    <DetailHeader
                        backgroundColor={ isDark ? COLORS.primary1 : COLORS.white }
                        title={ phoneNumber }
                        isTitleCenter
                    />
                    <Animated.View
                        style={[
                            styles.container,
                            {
                                opacity: Animated.add(.3, Animated.multiply(this.fall, 1.0))
                            }
                        ]}
                    >
                        <View style={ styles.header }>
                            <ScrollView
                                keyboardDismissMode='interactive'
                                showsVerticalScrollIndicator={ false }
                                ref={ scrollViewRef }
                            >
                                <Card
                                    style={[
                                        styles.card_contain,
                                        {
                                            backgroundColor: isDark ? COLORS.primary1 : COLORS.light_gray
                                        }
                                    ]}
                                >
                                    <ImageBackground
                                        style={ styles.profile_img }
                                        imageStyle={ styles.profile_img }
                                        source={ require('../../asset/cover.jpeg') }
                                    >
                                        <TouchableWithoutFeedback
                                            onPress={ () => onChooseImageOption() }
                                        >
                                            <View style={ styles.view_camera_icon }>
                                                <Icon
                                                    name='camera-outline'
                                                    style={ styles.camera_icon }
                                                    color={ COLORS.warning } size={ SIZES.base(2.5) } />
                                            </View>
                                        </TouchableWithoutFeedback>
                                    </ImageBackground>

                                    <Title
                                        style={[
                                            {
                                                color: !isDark ? COLORS.dark : COLORS.white
                                            },
                                            styles.text_para
                                        ]}
                                    >Hello!</Title>
                                    <Paragraph
                                        style={[
                                            {
                                                color: !isDark ? COLORS.dark : COLORS.white
                                            },
                                            styles.text_para
                                        ]}
                                    >Please enter your name</Paragraph>

                                    <TextInput
                                        keyboardAppearance={ !isDark ? 'light' : 'dark'}
                                        placeholder='Enter your name here'
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
                                                    styles.date_label,
                                                    {
                                                        color: !birthDate ? COLORS.secondary1 : isDark ? COLORS.white : COLORS.dark 
                                                    }
                                                ]}
                                            >
                                                { birthDate || 'Date of Birth' }
                                            </Text>
                                            <TouchableWithoutFeedback
                                                onPress={ () => onSelectDateStatus(isDark) }
                                            >
                                                <View
                                                    style={[
                                                        styles.bd_view_right,
                                                        {
                                                            backgroundColor: isDark ? COLORS.primary1 : COLORS.white
                                                        }
                                                    ]}
                                                >
                                                    <Icon
                                                        name='check-circle'
                                                        color={ COLORS.warning } size={ SIZES.base() } />
                                                    <Paragraph style={[
                                                        styles.bd_label,
                                                        {
                                                            color: isDark ? COLORS.white : COLORS.black
                                                        }
                                                    ]}>{ statusBirthDate }</Paragraph>
                                                    <Icon
                                                        name='chevron-down'
                                                        color={ COLORS.warning } size={ SIZES.base(3) } />
                                                </View>
                                            </TouchableWithoutFeedback>
                                        </View>
                                    </TouchableWithoutFeedback>

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
                                        Let's Chat!
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
                                            onPress={ () => onDoneSelectBirthDate() }
                                        >Done</Text>
                                    </View>
                                    <DateTimePicker
                                        themeVariant={ isDark ? 'dark' : 'light' }
                                        mode='date'
                                        value={ date }
                                        onDateChange={ value => setDate(value) }
                                        display='spinner'
                                    />
                                </> : null
                            }
                        </KeyboardAvoidingView>
                    </Animated.View>
                        
                    <BottomSheet
                        ref={ sheetRef }
                        snapPoints={ [400, -100, -100] }
                        renderHeader={ renderHeader }
                        initialSnap={ 1 }
                        callbackNode={ this.fall }
                        onOpenStart={ () => onOpenStartSheet() }
                        onCloseEnd={ () => onCloseEndSheet() }
                    />

                </SafeAreaView>
            }
        </AppContext.Consumer>
    )
}

export default Information

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
        marginHorizontal: SIZES.base(),
        flex: 1,
    },
    profile_img: {
        height: SIZES.base(17),
        width: SIZES.base(17),
        borderRadius: SIZES.base(10),
        alignSelf: 'center',
        borderWidth: .5,
        borderColor: COLORS.warning
    },
    view_camera_icon: {
        position: 'absolute',
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius(6),
        margin: SIZES.base(.8),
        bottom: -SIZES.base(.5),
        right: -SIZES.base(.5),
        elevation: 1,
        shadowColor: COLORS.secondary1,
        shadowOffset: { width: -1, height: -1 },
        shadowRadius: SIZES.base(4),
        shadowOpacity: .7
    },
    camera_icon: {
        padding: SIZES.base(1)
    },
    
    text_para: {
        textAlign: 'center',
        marginTop: SIZES.base()
    },

    text_input: {
        backgroundColor: COLORS.primary,
        color: COLORS.white,
        borderRadius: SIZES.radius(1),
        padding: SIZES.base(),
        fontSize: FONTS.h4,
        marginTop: SIZES.base(7)
    },
    date_picker_contain_view: {
        backgroundColor: COLORS.secondary,
        height: SIZES.customHiegthTextField(-5),
        marginTop: SIZES.base(),
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
        marginTop: SIZES.base(7),
        borderRadius: SIZES.radius(4),
        backgroundColor: COLORS.secondary1,
        marginHorizontal: SIZES.base()
    },

    footer: {
        borderTopWidth: .2,
        borderTopColor: HexToRGB(COLORS.secondary1, .2),
        padding: SIZES.base(1),
        backgroundColor: COLORS.dark,
        flexDirection: 'row'
    },
    label_btn_done: {
        fontSize: FONTS.h4,
        paddingVertical: SIZES.base(.7)
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
    },

    bottom_header: {
        shadowColor: COLORS.secondary1,
        shadowOffset: { width: -1, height: -1 },
        shadowRadius: 2,
        shadowOpacity: .4,
        paddingTop: SIZES.base(),
        borderTopLeftRadius: SIZES.base(),
        borderTopRightRadius: SIZES.base()
    },
    bottom_panel_header: {
        alignItems: 'center'
    },
    bottom_panel_handle: {
        width: SIZES.base(5),
        height: SIZES.base(1),
        borderRadius: 4,
        backgroundColor: HexToRGB(COLORS.secondary1, .5),
        marginBottom: SIZES.base(1),
    },
    bottom_content: {
        paddingHorizontal: SIZES.base(),
        paddingTop: SIZES.base(5),
        height: 600
    },
    bottom_button: {
        marginTop: SIZES.base(1),
        borderRadius: SIZES.radius(1),
        backgroundColor: COLORS.white,
        width: SIZES.width - SIZES.base(4)
    },
    bottom_label_button: {
        fontSize: FONTS.h4,
        paddingVertical: SIZES.base(.7),
        fontWeight: 'normal'
    }
})