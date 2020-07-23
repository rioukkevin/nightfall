import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Scanner from '../components/Scanner'
import { FAB, Surface } from 'react-native-paper';

const FlashScreen = () => {
  let [flash, setFlash] = useState<string>('off')

  const toggleFlash = () => {
    (flash === 'off') ? setFlash('torch') : setFlash('off')
  }

  return (
    <View style={styles.view}>
      <Scanner flash={flash}/>
      <Surface style={styles.flashButtonContainer}>
        <FAB icon="flash" onPress={toggleFlash} />
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  view: { 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  flashButtonContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'transparent'
  }
});

export default FlashScreen