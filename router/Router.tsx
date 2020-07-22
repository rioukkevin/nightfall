import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Items from './Items'

const Tab = createBottomTabNavigator();
const list = Items(Tab)

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        {list}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router