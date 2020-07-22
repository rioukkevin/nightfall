import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MapScreen = () => {
  return (
    <View style={styles.view}>
      <Text>Map</Text>
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

export default MapScreen