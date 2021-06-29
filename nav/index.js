import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomNav from './BottomNav'
import Routes from '../routes'
import {
    PhoneNumber,
    ChatDetail,
    Verification,
    SettingDetail
} from '../screen'
import {
    COLORS
} from '../constant'
import AppContext from '../context'

const Stack = createStackNavigator();

const Navigate = () => {

    return (
        <AppContext.Consumer>
            {
            ({ isDark }) =>
            <Stack.Navigator>
                <Stack.Screen
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
                    name={ Routes.DASHBOARD } 
                    component={ BottomNav }
                    options={{
                        headerShown: false
                    }}
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
            </Stack.Navigator>
            }
        </AppContext.Consumer>
    )
}

export default Navigate