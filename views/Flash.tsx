import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FlashScreen = () => {
  return (
    <View style={styles.view}>
      <Text>Flash</Text>
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

export default FlashScreen