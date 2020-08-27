import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LoginScreen from "../views/Login";
import RootScreen from "./TabNavigator";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Root" component={RootScreen} />
    </Stack.Navigator>
  );
}

export default MyStack