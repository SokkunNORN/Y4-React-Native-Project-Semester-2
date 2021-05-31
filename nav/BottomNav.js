import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    Indivual,
    Group,
    Setting
} from '../screen'

import {
  StyleSheet
} from 'react-native'

import { SIZES, COLORS } from '../consts'

const Tab = createMaterialBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Indivual"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={styles.bottomTabBar}
    >
      <Tab.Screen
        name="Indivual"
        component={ Indivual }
        options={{
          title: null,
          tabBarIcon: ({ color }) => (
            <Icon style={styles.icon} name="account" color={color} size={40} />
          )
        }}
      />
      <Tab.Screen
        name="Group"
        component={ Group }
        options={{
          title: null,
          tabBarIcon: ({ color }) => (
            <Icon style={styles.icon} name="account-multiple" color={color} size={40} />
          )
        }}
      />
      <Tab.Screen
        name="Setting"
        component={ Setting }
        options={{
          title: null,
          tabBarIcon: ({ color }) => (
            <Icon style={styles.icon} name="cog" color={color} size={40} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNav

const styles = StyleSheet.create({
  bottomTabBar: {
    backgroundColor: COLORS.primary
  },
  icon: {
    width: 40,
    height: 40
  }
})