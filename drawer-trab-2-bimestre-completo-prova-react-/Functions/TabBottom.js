import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'

import DrawerHome from './HomeDrawer'

const Bottom = createBottomTabNavigator(
  {
    AxiosApp: { screen: DrawerHome }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        console.log(navigation.state)        
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
)

export default createAppContainer(Bottom)