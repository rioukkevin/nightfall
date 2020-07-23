import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../views/Home";
import MapScreen from "../views/Map";
import NewsScreen from "../views/News";
import ShareScreen from "../views/Share";
import FlashScreen from "../views/Flash";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator initialRouteName="Home">
        {/**Home screen */}
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                tabBarLabel: "Accueil",
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name="home"
                        color={color}
                        size={size}
                    />
                ),
            }}
        ></Tab.Screen>

        {/**Map screen */}
        <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{
                tabBarLabel: "Carte",
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name="map-search"
                        color={color}
                        size={size}
                    />
                ),
            }}
        ></Tab.Screen>

        {/**News screen */}
        <Tab.Screen
            name="News"
            component={NewsScreen}
            options={{
                tabBarLabel: "Actualités",
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name="newspaper-variant"
                        color={color}
                        size={size}
                    />
                ),
            }}
        ></Tab.Screen>

        {/**Share screen */}
        <Tab.Screen
            name="Share"
            component={ShareScreen}
            options={{
                tabBarLabel: "Partager",
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name="share-variant"
                        color={color}
                        size={size}
                    />
                ),
            }}
        ></Tab.Screen>

        {/**Share screen */}
        <Tab.Screen
            name="Flash"
            component={FlashScreen}
            options={{
                tabBarLabel: "QR Code",
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name="camera-control"
                        color={color}
                        size={size}
                    />
                ),
            }}
        ></Tab.Screen>
    </Tab.Navigator>
);

export default TabNavigator;
