import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const NewsScreen = () => {
  return (
    <View style={styles.view}>
      <Text>News</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});

export default NewsScreen