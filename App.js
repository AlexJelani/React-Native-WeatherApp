import React from 'react'

import UpcomingWeather from './src/screens/UpcomingWeather'
import City from './src/screens/City'
import CurrentWeather from './src/screens/CurrentWeather'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.screen name="Current" component={CurrentWeather} />
        <Tab.screen name="Upcoming" component={UpcomingWeather} />
        <Tab.screen name="City" component={City} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
