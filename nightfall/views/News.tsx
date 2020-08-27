import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { DefaultTheme } from "react-native-paper";
import { NewsItem } from "../components/NewsItem";
import * as NewsService from "../services/news";

const getNews = () => {
    return NewsService.getNewsData();
};

const NewsScreen = () => {
    return (
        <ScrollView style={styles.view}>
            {getNews().map((news) => (
                <NewsItem key={news.id.toString()} news={news}></NewsItem>
            ))}
        </ScrollView>
    );
};

const lightTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        text: "#FFFFFF",
        primary: "#003348", // Brand color
        accent: "#fea500", // Button background color
    },
};

const styles = StyleSheet.create({
    view: {
        height: "100%",
        overflow: "scroll",
        backgroundColor: "#EEEEEE",
        paddingTop: 20,
        paddingBottom: 20,
    },
    card: {
        width: "90%",
        margin: "5%",
        backgroundColor: "#FFFFFF",
    },
    title: {
        fontSize: 25,
        fontWeight: "700",
        marginTop: 10,
        marginBottom: 5,
    },
    content: {
        fontSize: 15,
        marginTop: 10,
        marginBottom: 5,
    },
    actions: {
        display: "flex",
        justifyContent: "flex-end",
    },
    button: {
        fontSize: 15,
        marginLeft: 10,
    },
});

export default NewsScreen;
