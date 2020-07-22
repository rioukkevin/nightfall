import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import React from "react";

/**
 * Application router
 */
const Router = () => (
    <NavigationContainer>
        <TabNavigator></TabNavigator>
    </NavigationContainer>
);

export default Router;
