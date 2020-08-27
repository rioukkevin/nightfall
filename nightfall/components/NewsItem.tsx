import { FC } from "react";
import { StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import News from "../models/News";
import React from "react";
import * as Linking from "expo-linking";

export interface NewsProps {
    /**News to display */
    news: News;
}

export const NewsItem: FC<NewsProps> = ({ news }) => {
    return (
        <Card style={styles.card}>
            <Card.Cover source={{ uri: news.image }} />
            <Card.Content>
                <Text
                    theme={{ colors: { text: "#111111" } }}
                    style={styles.title}
                >
                    {news.name}
                </Text>
            </Card.Content>
            <Card.Actions style={styles.actions}>
                <Button
                    icon="plus"
                    compact={true}
                    color="#fea500"
                    mode="contained"
                    style={styles.button}
                    labelStyle={styles.buttonLabel}
                    onPress={() => Linking.openURL(news.link)}
                >
                    Lire la suite
                </Button>
            </Card.Actions>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: "5%",
        backgroundColor: "#FFFFFF",
    },
    title: {
        fontSize: 25,
        fontWeight: "700",
        marginTop: 10,
        marginBottom: 5,
        textAlign: "center",
    },
    actions: {
        display: "flex",
        justifyContent: "center",
    },
    button: {
        borderRadius: 50,
        paddingRight: 6,
    },
    buttonLabel: {
        color: "white",
        fontSize: 11,
    },
});
