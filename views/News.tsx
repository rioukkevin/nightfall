import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import * as NewsService from '../services/news';
import {Button, Card, Title, Paragraph, Avatar} from 'react-native-paper';

const getNews = () => {
  return NewsService.getNewsData();
};

const NewsScreen = () => {
  return (
    <View style={styles.view}>
      {getNews().map( ( news ) => (
        <Card>
          <Card.Cover source={ news.image } />
          <Card.Title title={ news.name }/>
          <Card.Actions>
            <Avatar.Icon size={24} icon="plus" />
            <Text>
              Lire la suite
            </Text>
          </Card.Actions>
        </Card>
      ))}
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
