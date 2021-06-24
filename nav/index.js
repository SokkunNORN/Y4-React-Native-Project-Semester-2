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

    let ChatPlusContext = AppContext

    return (
        <ChatPlusContext.Consumer>
            {
            ({ theme }) =>
            <Stack.Navigator>
                <Stack.Screen
                    name={ Routes.PHONE_NUMBER }
                    component={ PhoneNumber }
                    options={{
                        headerShown: false,
                        cardStyle: {
                            backgroundColor: theme === 'dark' ? COLORS.primary1 : COLORS.white
                        }
                    }}
                />
                <Stack.Screen
                    name={ Routes.VERIFICATION }
                    component={ Verification }
                    options={{
                        headerShown: false,
                        cardStyle: {
                            backgroundColor: theme === 'dark' ? COLORS.primary1 : COLORS.white
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
                            backgroundColor: COLORS.primary
                        }
                    }}
                />
                <Stack.Screen
                    name={ Routes.SETTING_DETAIL }
                    component={ SettingDetail }
                    options={{
                        headerShown: false,
                        cardStyle: {
                            backgroundColor: COLORS.dark
                        }
                    }}
                />
            </Stack.Navigator>
            }
        </ChatPlusContext.Consumer>
    )
}

export default Navigate