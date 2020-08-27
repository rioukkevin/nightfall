import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FlashScreen from "../views/Flash";
import HomeScreen from "./HomeNavigator";
import MapScreen from "../views/Map";
import NewsScreen from "../views/News";
import ShareScreen from "../views/Share";
import { StyleSheet } from "react-native";

/**Component style */
const style = StyleSheet.create({
    tabBar: {
        backgroundColor: "black",
        color: "white",
        paddingVertical: 4,
    }

});


/**
 * Get an JSX icon element
 * @param iconName Icon to use
 * @param color Icon color
 */
const getIcon = (iconName: string, color: string) => (
    <MaterialCommunityIcons name={iconName} color={color} size={26} />
);



const Tab = createMaterialBottomTabNavigator();
class TabNavigator extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            justConnected: true,
        }
    }
    
    componentDidMount(){
        this.setState({
            justConnected: false,
        })
    }

    render = () => (
        <Tab.Navigator initialRouteName="Home" barStyle={style.tabBar} labeled={false}>
            {/**Home screen */}
            <Tab.Screen
                name="Home"
                children={() => <HomeScreen justConnected={this.state.justConnected} />}
                options={{
                    tabBarLabel: "Accueil",
                    tabBarIcon: ({ color }) => getIcon("home", color),
                }}
            ></Tab.Screen>

            {/**Map screen */}
            <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{
                    tabBarLabel: "Carte",
                    tabBarIcon: ({ color }) => getIcon("map-search", color),
                }}
            ></Tab.Screen>

            {/**News screen */}
            <Tab.Screen
                name="News"
                component={NewsScreen}
                options={{
                    tabBarLabel: "Actualités",
                    tabBarIcon: ({ color }) => getIcon("newspaper", color),
                }}
            ></Tab.Screen>

            {/**Share screen */}
            <Tab.Screen
                name="Share"
                component={ShareScreen}
                options={{
                    tabBarLabel: "Partager",
                    tabBarIcon: ({ color }) => getIcon("share-variant", color),
                }}
            ></Tab.Screen>

            {/**Share screen */}
            <Tab.Screen
                name="Flash"
                component={FlashScreen}
                options={{
                    tabBarLabel: "QR Code",
                    tabBarIcon: ({ color }) => getIcon("camera-control", color),
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    );
}

export default TabNavigator;
