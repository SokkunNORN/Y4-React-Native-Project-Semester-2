import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    Indivual,
    Group,
    Setting
} from '../screen'

const Tab = createMaterialBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Indivual"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
    >
      <Tab.Screen
        name="Indivual"
        component={ Indivual }
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="account" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Group"
        component={ Group }
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="account-multiple" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Setting"
        component={ Setting }
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="cog" color={color} size={26} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNav