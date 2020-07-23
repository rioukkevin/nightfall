import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Card } from "react-native-paper";
import * as NewsService from "../services/news";

const getNews = () => {
    return NewsService.getNewsData();
};

const NewsScreen = () => {
    return (
        <View style={styles.view}>
            {getNews().map((news) => (
                <Card key={news.id.toString()} style={styles.card}>
                    <Card.Cover source={{ uri: news.image }} />
                    <Card.Title title={news.name} />
                    <Card.Actions>
                        <Avatar.Icon size={24} icon="plus" />
                        <Text>Lire la suite</Text>
                    </Card.Actions>
                </Card>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    card : {
        width : "90%"
    }
});

export default NewsScreen;
