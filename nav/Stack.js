import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Header from './Header'
import {
    Chat,
    Search,
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
            header: ({ scene, previous, navigation }) => (
              <Header
                scene={ scene } 
                previous={ previous } 
                navigation={ navigation } 
                title="ChatPlus"
                isSearch
                icon="plus"
              />
            ),
          }}
        />
        <Stack.Screen name="Search" component={ Search } />
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
          name="Chat"
          component={ Discover }
          options={{
            header: ({ scene, previous, navigation }) => (
              <Header
                scene={ scene } 
                previous={ previous } 
                navigation={ navigation } 
                title="Discover"
                icon="check-circle"
              />
            ),
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
          name="Chat"
          component={ Setting }
          options={{
            header: ({ scene, previous, navigation }) => (
              <Header
                scene={ scene } 
                previous={ previous } 
                navigation={ navigation } 
                title="Settings"
                icon="pencil-box-outline"
              />
            ),
          }}
        />
      </Stack.Navigator>
    )
}
