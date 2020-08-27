import * as React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
// @ts-ignore
import BackgroubdImageImage from '../../assets/background-image-dark.png';

const LayoutHomeScreen = (props: any) => {

  return (
    <View style={styles.view}>
      <ImageBackground source={BackgroubdImageImage} style={styles.image}>
        <View style={styles.text}>
          { props.children }
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
    width: '100%'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    alignItems: 'center',
    justifyContent: "center"
  }
});

export default LayoutHomeScreen
