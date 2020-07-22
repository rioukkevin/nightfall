import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ShareScreen = () => {
  return (
    <View style={styles.view}>
      <Text>Share</Text>
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

export default ShareScreen
