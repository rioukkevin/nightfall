import React, { useState, useRef } from 'react';
import { BarCodeScanningResult } from "expo-camera";
import { StyleSheet, View, Animated } from 'react-native';
import Scanner from '../components/Scanner'
import { FAB, Surface, Text } from 'react-native-paper';
import { postTransaction } from '../services/flash';
// import { BlurView } from "expo-blur";

const FlashScreen = () => {
  const [flash, setFlash] = useState<string>('off')

  const fadeAnim = useRef(new Animated.Value(100)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 100,
      duration: 500,
      useNativeDriver: false
    }).start();
  };

  const toggleFlash = () => {
    (flash === 'off') ? setFlash('torch') : setFlash('off')
  }

  const onFlash = async (scanningResult: BarCodeScanningResult) => {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAaa')
    console.log(scanningResult)

    await postTransaction(scanningResult.data);
    fadeIn()
  }
  const onNext = () => {
    fadeOut()
  }

  return (
    <View style={styles.view}>
      <Scanner flash={flash} callback={onFlash} />
      <Surface style={styles.flashButtonContainer}>
        <FAB icon="flash" onPress={toggleFlash} />
      </Surface>
      <Surface style={styles.flashArea}>
      </Surface>
      <Animated.View style={[styles.qrOverlay,{ top: fadeAnim.interpolate({
        inputRange: [0,100],
        outputRange: ['0%', '100%']
      }), position: 'absolute' }]}>
        <Text style={styles.qrText}>Challenge réussi !</Text>
        <Text style={styles.qrTextPoint}>+20</Text>
        <Text style={styles.qrText}>Points Nightfall</Text>
        <FAB icon="close" onPress={onNext} style={styles.qrOverlayClose} />
      </Animated.View>
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
  qrOverlay: {
    height: '100%',
    position: 'absolute',
    right: 0,
    left: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  qrOverlayClose: {
    position: 'absolute',
    bottom: 10,
  },
  qrText: {
    color: '#FFFFFF',
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 25
  },
  qrTextPoint: {
    color: '#fea500',
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 70
  },
  flashArea: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'transparent',
    borderColor: '#003348',
    borderWidth: 5,
    height: 300,
    width: 300,
    margin: -150,
  }
});

export default FlashScreen