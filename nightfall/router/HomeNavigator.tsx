import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../views/Home/Home";
import ScoresScreen from "../views/Scores";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack(props: any) {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="HomeScreen" >
        {_ => <HomeScreen {..._} justConnected={props.justConnected} />}
      </Stack.Screen>
      <Stack.Screen name="Scores" component={ScoresScreen} />
    </Stack.Navigator>
  );
}

export default MyStack