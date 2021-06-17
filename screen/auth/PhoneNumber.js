import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'
import {
    Button,
    Paragraph,
    Title
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS, FONTS, SIZES, HexToRGB } from '../../constant'

const PhoneNumber = () => {
    return (
        <>
            <View
                style={ styles.constainer }
            >
                <View
                    style={ styles.top_contain }
                >
                    <View style={ styles.border_view_phone_icon }>
                        <View style={ styles.view_phone_icon }>
                            <Icon
                                name='cellphone'
                                style={ styles.phone_icon }
                                color={ COLORS.warning } size={ SIZES.base(6.5) } />
                        </View>
                    </View>
                    <Title style={ styles.greeting_text }>Welcome to Chat Plus!</Title>
                    <Paragraph style={ styles.introduction }>
                        Provide your phone number to receive your conformation code.
                    </Paragraph>
                </View>

                <View>
                    <Text
                        style={ styles.condition_text }
                    >
                        By continuing, you are agreeing to the 
                        <Text style={ styles.privacy_text }> Privacy Plicy</Text> and 
                        <Text style={ styles.privacy_text }> Terms and Conditions</Text>
                    </Text>
                    <Button
                        style={[
                            styles.btn_continue
                        ]}
                        labelStyle={ styles.label_btn_continue }
                        color={ COLORS.secondary }
                        uppercase={ false }
                        onPress={() => console.log('Pressed')}
                    >
                        Continue
                    </Button>
                </View>
            </View>
        </>
    )
}

export default PhoneNumber

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginHorizontal: SIZES.base(5)
    },
    top_contain: {
        flexDirection: 'column',
        justifyContent: 'center'
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
        padding: SIZES.base(1.5)
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

    btn_continue: {
        marginTop: SIZES.base(5),
        borderRadius: SIZES.radius(4),
        backgroundColor: COLORS.secondary1
    },
    label_btn_continue: {
        fontSize: FONTS.h3,
        paddingVertical: SIZES.base(1)
    },
    condition_text: {
        color: COLORS.white,
        fontSize: FONTS.p,
        textAlign: 'center',
        lineHeight: SIZES.base(3)
    },
    privacy_text: {
        color: COLORS.warning
    }
})