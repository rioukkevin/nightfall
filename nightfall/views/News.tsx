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

const styles = StyleSheet.create({
    view: {
        height: "100%",
        overflow: "scroll",
        backgroundColor: "#EEEEEE",
        paddingTop: 20,
        paddingBottom: 20,
    },
});

export default NewsScreen;
