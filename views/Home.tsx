import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.view}>
      <Text>Home Screen</Text>
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

export default HomeScreen