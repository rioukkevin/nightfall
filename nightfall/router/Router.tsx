import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./RootNavigator";
import React from "react";

/**
 * Application router
 */
const Router = () => (
    <NavigationContainer>
        <RootNavigator></RootNavigator>
    </NavigationContainer>
);

export default Router;
