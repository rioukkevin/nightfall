import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Text } from 'react-native-paper';
import { Button, Card, DefaultTheme } from "react-native-paper";
import * as NewsService from "../services/news";

const getNews = () => {
    return NewsService.getNewsData();
};

const NewsScreen = () => {
    return (
        <ScrollView style={styles.view}>
            {getNews().map((news) => (
                <Card key={news.id.toString()} style={styles.card}>
                    <Card.Cover source={{ uri: news.image }} />
                    <Card.Content>
                        <Text theme={{colors:{text:'#111111'}}} style={styles.title}>{news.name}</Text>
                        <Text theme={{colors:{text:'#111111'}}} style={styles.content}>{news.content}</Text>
                    </Card.Content>
                    <Card.Actions style={styles.actions}>
                        <Button icon="plus" color="#fea500" mode="text" theme={{}} style={styles.button}>Lire la suite</Button>
                    </Card.Actions>
                </Card>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    view: {
        height: '100%',
        overflow: 'scroll',
        backgroundColor: '#EEEEEE',
        paddingTop: 20,
        paddingBottom: 20
    },
    card : {
        width: '90%',
        margin: '5%',
        backgroundColor: '#FFFFFF'
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        marginTop: 10,
        marginBottom: 5
    },
    content: {
        fontSize: 15,
        marginTop: 10,
        marginBottom: 5
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    button: {
        fontSize: 15,
        marginLeft: 10
    }
});

export default NewsScreen;
