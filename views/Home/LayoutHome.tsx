import * as React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import * as AuthService from '../../services/auth';
import BackgroubdImageImage from '../../assets/background-image.jpg';
import {AnimatedCircularProgress} from "react-native-circular-progress";

const LayoutHomeScreen = (props) => {

  let countPointsLastMonth = AuthService.getAuthUser().countPointsLastMonth;

  return (
    <View style={styles.view}>
      <ImageBackground source={BackgroubdImageImage} style={styles.image}>
        <View style={styles.text}>
          { props.children[0] }
          <AnimatedCircularProgress
            size={120}
            width={15}
            fill={countPointsLastMonth}
            tintColor="#00e0ff"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#3d5875">
            {
              (countPointsLastMonth) => (
                <Text>
                  { countPointsLastMonth } / 1000
                </Text>
              )
            }
          </AnimatedCircularProgress>
          { props.children[1] }
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
