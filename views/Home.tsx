import * as React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Avatar, Badge } from "react-native-paper";
import * as AuthService from "../services/auth";

const HomeScreen = () => {
    const authUser = AuthService.getAuthUser();
    return (
        <View style={styles.view}>
            <ImageBackground
                source={{ uri: "../assets/background-image.jpg" }}
                style={styles.image}
            >
                <View style={styles.text}>
                    <Avatar.Icon size={24} icon="info" />
                    <Text>{authUser.login}</Text>
                    <Badge visible={true}>
                        {authUser.countPointsLastMonth || 0 / 1000}
                    </Badge>

                    <Avatar.Icon size={24} icon="user" />
                    <Image source={{ uri: "../assets/logo-nightfall.png" }} />
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: "column",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    text: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default HomeScreen;
