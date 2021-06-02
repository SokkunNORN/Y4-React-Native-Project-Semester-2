import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Header from './Header'
import DetailHeader from '../components/DetailHeader'
import {
  Chat,
  ChatDetail,
  Discover,
  Setting
} from '../screen'
import { COLORS } from '../consts'

const Stack = createStackNavigator()

export const ChatStackScreen = () => {
    return (
      <Stack.Navigator screenOptions={{
        cardStyle: {
          backgroundColor: COLORS.primary
        }
      }}>
        <Stack.Screen
          name="Chat"
          component={ Chat }
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="ChatDetail"
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
          backgroundColor: COLORS.primary
        }
      }}>
        <Stack.Screen
          name="Discover"
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
            backgroundColor: COLORS.primary
          }
      }}>
        <Stack.Screen
          name="Settings"
          component={ Setting }
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    )
}
