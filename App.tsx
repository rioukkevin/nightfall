import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Views
import MapScreen from "./views/Map";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={MapScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
