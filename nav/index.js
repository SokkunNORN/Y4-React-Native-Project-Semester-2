import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import BottomNav from './BottomNav'
import Routes from '../routes'
import {
    PhoneNumber,
    ChatDetail,
    Verification,
    SettingDetail,
    Information,
    EditAccount,
    ImageProfile
} from '../screen'
import {
    COLORS, HexToRGB
} from '../constant'
import AppContext from '../context'

const Stack = createStackNavigator();

const Navigate = () => {

    return (
        <AppContext.Consumer>
            {
            ({ isDark }) =>
            <Stack.Navigator>
                {/* <Stack.Screen
                    name={ Routes.PHONE_NUMBER }
                    component={ PhoneNumber }
                    options={{
                        headerShown: false,
                        cardStyle: {
                            backgroundColor: isDark ? COLORS.primary1 : COLORS.white
                        }
                    }}
                />
                <Stack.Screen
                    name={ Routes.VERIFICATION }
                    component={ Verification }
                    options={{
                        headerShown: false,
                        cardStyle: {
                            backgroundColor: isDark ? COLORS.primary1 : COLORS.white
                        }
                    }}
                />
                <Stack.Screen
                    name={ Routes.INFORMATION }
                    component={ Information }
                    options={{
                        headerShown: false,
                        cardStyle: {
                            backgroundColor: isDark ? COLORS.primary1 : COLORS.white
                        }
                    }}
                /> */}
                <Stack.Screen
                    name={ Routes.DASHBOARD } 
                    component={ BottomNav }
                    options={{
                        headerShown: false,cardOverlayEnabled: true,
                        cardStyleInterpolator: ({ current: { progress } }) => ({
                            cardStyle: {
                                opacity: progress.interpolate({
                                    inputRange: [0, 0.5, 0.9, 1],
                                    outputRange: [0, 0.25, 0.7, 1],
                                }),
                            },
                            overlayStyle: {
                                opacity: progress.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 0.5],
                                    extrapolate: 'clamp',
                                }),
                            },
                        })
                    }}
                    mode="modal"
                />
                <Stack.Screen
                    name={ Routes.CHAT_DETAIL}
                    component={ ChatDetail }
                    options={{
                        headerShown: false,
                        cardStyle: {
                            backgroundColor: isDark ? COLORS.primary1 : COLORS.light_gray
                        }
                    }}
                />
                <Stack.Screen
                    name={ Routes.SETTING_DETAIL }
                    component={ SettingDetail }
                    options={{
                        headerShown: false,
                        cardStyle: {
                            backgroundColor: isDark ? COLORS.primary1 : COLORS.light_gray
                        }
                    }}
                />
                <Stack.Screen
                    name={ Routes.EDIT_PROFIILE }
                    component={ EditAccount }
                    options={{
                        headerShown: false,
                        cardStyle: {
                            backgroundColor: isDark ? COLORS.primary1 : COLORS.light_gray
                        },
                        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
                    }}
                />
                <Stack.Screen
                    name={ Routes.IMAGE_PROFILE }
                    component={ ImageProfile }
                    options={{
                        headerShown: false,
                        cardStyle: {
                            backgroundColor: isDark ? COLORS.primary1 : COLORS.light_gray
                        },
                        cardOverlayEnabled: true,
                        cardStyleInterpolator: ({ current: { progress } }) => ({
                            cardStyle: {
                                opacity: progress.interpolate({
                                    inputRange: [0, 0.5, 0.9, 1],
                                    outputRange: [0, 0.25, 0.7, 1],
                                }),
                            },
                            overlayStyle: {
                                opacity: progress.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 0.5],
                                    extrapolate: 'clamp',
                                }),
                            },
                        })
                    }}
                    mode="modal"
                />
            </Stack.Navigator>
            }
        </AppContext.Consumer>
    )
}

export default Navigate