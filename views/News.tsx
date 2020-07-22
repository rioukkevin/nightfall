import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NewsService from '../services/news.js'

const getNews = () => {
    console.log(NewsService);
    return NewsService.getNews();
};

console.log( getNews() );

const NewsScreen = () => {
    return (
        <View style={styles.view}>
            <Text>News Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default NewsScreen
