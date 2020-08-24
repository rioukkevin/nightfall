import React, { useState } from 'react';
import { BarCodeScanningResult } from "expo-camera";
import { StyleSheet, View, Text } from 'react-native';
import Scanner from '../components/Scanner'
import { FAB, Surface, Button } from 'react-native-paper';
import { BlurView } from "expo-blur";

const FlashScreen = () => {
  const [flash, setFlash] = useState<string>('off')
  const [styleOverlayTop, setstyleOverlayTop] = useState<string>('100%')

  const toggleFlash = () => {
    (flash === 'off') ? setFlash('torch') : setFlash('off')
  }

  const onFlash = (scanningResult: BarCodeScanningResult) => {
    setstyleOverlayTop('0%')
  }
  const onNext = () => {
    console.log("LOLOLO")
  }

  return (
    <View style={styles.view}>
      <Scanner flash={flash} callback={onFlash}/>
      <Surface style={styles.flashButtonContainer}>
        <FAB icon="flash" onPress={toggleFlash} />
      </Surface>
      <BlurView tint="light" intensity={100} style={[styles.qrOverlay, { top: styleOverlayTop }]}>
        <Text>Challenge réussi !</Text>
        <Text>+20</Text>
        <Text>Points Nightfall</Text>
        <FAB icon="close" onPress={onNext} style={styles.qrOverlayClose} />
      </BlurView>
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
  },
  qrOverlay:{
    height: '100%',
    position: 'absolute',
    right: 0,
    left: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'yellow',
  },
  qrOverlayClose:{
    position: 'absolute',
    bottom: 10,
  }
});

export default FlashScreen