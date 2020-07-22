import * as React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import * as AuthService from '../services/auth';
import { Avatar, Badge  } from 'react-native-paper';
import LogoImage from '../assets/logo-nightfall.png'
import BackgroubdImageImage from '../assets/background-image.jpg'

const HomeScreen = () => {
  return (
    <View style={styles.view}>
      <ImageBackground source={BackgroubdImageImage} style={styles.image}>
        <View style={styles.text}>
          <Avatar.Icon size={24} icon="info"/>
          <Text>{AuthService.getAuthUser().login}</Text>
          <Badge>{AuthService.getAuthUser().countPointsLastMonth}/1000</Badge>
          <Avatar.Icon size={24} icon="user"/>
          <img src={LogoImage} alt="Logo"/>
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
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
    alignItems: 'center',
    justifyContent: "center"
  }
});

export default HomeScreen
