import * as React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import BackgroubdImageImage from '../../assets/background-image.jpg';

const LayoutHomeScreen = (props) => {

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
    flexDirection: "column"
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
