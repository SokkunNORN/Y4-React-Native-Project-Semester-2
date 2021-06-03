import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  Chat,
  ChatDetail,
  Discover,
  Setting
} from '../screen'
import Routes from '../routes'
import { COLORS } from '../constant'

const Stack = createStackNavigator()

export const ChatStackScreen = () => {
    return (
      <Stack.Navigator screenOptions={{
        cardStyle: {
          backgroundColor: COLORS.primary
        }
      }}>
        <Stack.Screen
          name={ Routes.CHAT }
          component={ Chat }
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name={ Routes.CHAT_DETAIL}
          component={ ChatDetail }
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    )
}

export const DiscoverStackScreen = () => {
    return (
      <Stack.Navigator screenOptions={{
        cardStyle: {
          backgroundColor: COLORS.dark
        }
      }}>
        <Stack.Screen
          name={ Routes.DISCOVER }
          component={ Discover }
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    )
}

export const SettingStackScreen = () => {
    return (
      <Stack.Navigator screenOptions={{
          cardStyle: {
            backgroundColor: COLORS.dark
          }
      }}>
        <Stack.Screen
          name={ Routes.SETTINGS }
          component={ Setting }
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    )
}
