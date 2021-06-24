import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
  ChatStackScreen,
  DiscoverStackScreen,
  SettingStackScreen
} from './Stack'

import {
  StyleSheet
} from 'react-native'

import { COLORS } from '../constant'
import AppContext from '../context'

const Tab = createMaterialBottomTabNavigator()
const ChatPlusContext = AppContext

const BottomNav = () => {
  return (
    <ChatPlusContext.Consumer>
      {
        ({ isDark }) => 
        <Tab.Navigator
          initialRouteName="Chat"
          activeColor={COLORS.warning}
          inactiveColor={COLORS.secondary1}
          barStyle={{
            backgroundColor:  isDark ? COLORS.dark : COLORS.white
          }}
        >
          <Tab.Screen
            name="Chat"
            component={ ChatStackScreen }
            options={{
              title: "Chats",
              tabBarIcon: ({ color, focused }) => (
                <Icon name={ focused ? "comment-text-multiple" : "comment-text-multiple-outline" } color={color} size={26} />
              )
            }}
          />
          <Tab.Screen
            name="Discover"
            component={ DiscoverStackScreen }
            options={{
              title: "Discover",
              tabBarIcon: ({ color, focused }) => (
                <Icon name={ focused ? "compass" : "compass-outline" } color={color} size={26} />
              )
            }}
          />
          <Tab.Screen
            name="Setting"
            component={ SettingStackScreen }
            options={{
              title: "Settings",
              tabBarIcon: ({ color, focused }) => (
                <Icon name={focused ? "cog" : "cog-outline" } color={color} size={26} />
              )
            }}
          />
        </Tab.Navigator>
      }
    </ChatPlusContext.Consumer>
  );
}

export default BottomNav

const styles = StyleSheet.create({
  bottomTabBar: {
    backgroundColor: COLORS.dark
  }
})