import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  Chat,
  Discover,
  Setting
} from '../screen'
import Routes from '../routes'
import { COLORS } from '../constant'
import AppContext from '../context'

const Stack = createStackNavigator()
const ChatPlusContext = AppContext

export const ChatStackScreen = () => {
    return (
      <ChatPlusContext.Consumer>
        {
          ({ isDark }) => 
          <Stack.Navigator screenOptions={{
            cardStyle: {
              backgroundColor: isDark ? COLORS.primary1 : COLORS.light_gray
            }
          }}>
            <Stack.Screen
              name={ Routes.CHAT }
              component={ Chat }
              options={{
                headerShown: false
              }}
            />
          </Stack.Navigator>
        }
      </ChatPlusContext.Consumer>
    )
}

export const DiscoverStackScreen = () => {
    return (
      <ChatPlusContext.Consumer>
        {
          ({ isDark }) => 
          <Stack.Navigator screenOptions={{
            cardStyle: {
              backgroundColor: isDark ? COLORS.dark : COLORS.light_gray
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
        }
      </ChatPlusContext.Consumer>
    )
}

export const SettingStackScreen = () => {
    return (
      <ChatPlusContext.Consumer>
        {
          ({ isDark }) => 
          <Stack.Navigator screenOptions={{
            cardStyle: {
              backgroundColor: isDark ? COLORS.primary1 : COLORS.light_gray
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
        }
      </ChatPlusContext.Consumer>
    )
}
