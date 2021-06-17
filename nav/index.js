import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomNav from './BottomNav'
import Routes from '../routes'
import {
    PhoneNumber,
    ChatDetail,
    Verification
} from '../screen'
import {
    COLORS
} from '../constant'

const Stack = createStackNavigator();

const Navigate = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen
                    name={ Routes.PHONE_NUMBER }
                    component={ PhoneNumber }
                    options={{
                        headerShown: false,
                        cardStyle: {
                            backgroundColor: COLORS.primary1
                        }
                    }}
                />
                <Stack.Screen
                    name={ Routes.VERIFICATION }
                    component={ Verification }
                    options={{
                        headerShown: false,
                        cardStyle: {
                            backgroundColor: COLORS.primary1
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
            </Stack.Navigator>
        </>
    )
}

export default Navigate