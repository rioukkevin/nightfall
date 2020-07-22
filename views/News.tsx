import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import * as NewsService from '../services/news';
const { News } = require("../models/news");
import { Button, Card, Title, Paragraph } from 'react-native-paper';

const getNews = () => {
  // return NewsService.getNewsData();

  return [
    new News({id : 1, name : 'News n°1', content : 'blbabla1', image : 'https://data.theupsider.com.au/wp-content/uploads/2017/09/shady-pines-saloon.jpg'}),
    new News({id : 2, name : 'News n°2', content : 'blbabla2', image : 'https://whyy.org/wp-content/uploads/2018/05/owner-jp-teti-stands-behind-the-basement-bar-at-passyunk-avenue-a-philly-themed-dive-bar-in-london.original-e1526133272703-768x462.jpg'}),
  ];

};

console.log( getNews() );

const NewsScreen = () => {
  return (
    <View style={styles.view}>
      {getNews().map( ( news ) => (
        <Card>
          <Card.Title title={ news.name }/>
          <Card.Content>
            <Title>{ news.name }</Title>
            <Paragraph>{ news.content }</Paragraph>
          </Card.Content>
          <Card.Cover source={ news.image } />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
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
