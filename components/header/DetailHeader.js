import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    View
} from 'react-native'
import {
    Appbar,
    Avatar,
    Paragraph,
    Title
} from 'react-native-paper'
import AppContext from '../../context'

import { COLORS, FONTS, SIZES } from '../../constant'

console.disableYellowBox = true

const DetailHeader = props => {

    const navigation = useNavigation()

    return (
        <AppContext.Consumer>
            {
                ({ isDark }) =>
                <SafeAreaView style={{ 
                    backgroundColor: props.backgroundColor ? props.backgroundColor : 
                    isDark ? COLORS.dark : COLORS. light_gray 
                }}>
                    <StatusBar barStyle={ isDark ? 'light-content' : 'dark-content' } />
                    <Appbar.Header style={[
                        styles.header,
                        {
                            backgroundColor: props.backgroundColor ? props.backgroundColor : 
                            isDark ? COLORS.dark : COLORS. light_gray 
                        }
                    ]}>
                        <Appbar.Action
                            icon='chevron-left' 
                            color={ COLORS.warning } 
                            onPress={ () => navigation.pop() }
                        />
                        {
                            props.isProfile ?
                                <>
                                    <Avatar.Image
                                        size={ SIZES.base(5) }
                                        source={ require('../../asset/profile.jpeg') }
                                    />
                                    <View style={ styles.profile_view }>
                                        <Title style={[
                                            styles.profile_name,
                                            {
                                                color: isDark ? COLORS.secondary : COLORS.black
                                            }
                                        ]}>{ props.name }</Title>
                                        <Paragraph style={ styles.time_seen } numberOfLines={ 1 }>Last seen at 2:14 AM</Paragraph>
                                    </View>
                                </>
                            : null
                        }
                        <Appbar.Content title={ props.title } />
                        {
                            props.iconRight1 ?
                            <Appbar.Action
                                icon={ props.iconRight1 }
                                color={ COLORS.warning }
                                style={[
                                    styles.action_btn,
                                    (!props.iconRight2 && !props.iconRight3)
                                    ? styles.action_btn_mr : {}
                                ]}
                                onPress={ () => {} }
                            /> : 
                            <></>
                        }
                        {
                            props.iconRight2 ?
                            <Appbar.Action
                                icon={ props.iconRight2 }
                                color={ COLORS.warning } 
                                style={[
                                    styles.action_btn,
                                    !props.iconRight3
                                    ? styles.action_btn_mr : {}
                                ]}
                                onPress={ () => {} }
                            /> : 
                            <></>
                        }
                        {
                            props.iconRight3 ?
                            <Appbar.Action
                                icon={ props.iconRight3 }
                                color={ COLORS.warning } 
                                style={[
                                    styles.action_btn,
                                    styles.action_btn_mr
                                ]}
                                onPress={ () => {} }
                            /> : 
                            <></>
                        }
                    </Appbar.Header>
                </SafeAreaView>     
            }
        </AppContext.Consumer>
    )
}

export default DetailHeader

const styles = StyleSheet.create({
    header: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0
    },
    profile_view: {
        marginStart: SIZES.base(1),
    },
    profile_name: {
        color: COLORS.secondary,
        fontSize: FONTS.h4
    },
    time_seen: {
        color: COLORS.secondary1,
        fontSize: FONTS.small,
        marginTop: -SIZES.base(1)
    },
    action_btn: {
        margin: 0
    },
    action_btn_mr: {
        marginRight: SIZES.base(1)
    },
    appbar_icon: {
        backgroundColor: COLORS.primary
    },
    showElement: {
        opacity: 1
    },
    blockElement: {
        opacity: 0
    }
})
