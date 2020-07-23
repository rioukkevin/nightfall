import * as React from 'react';
import {Text, Image} from 'react-native';
import * as AuthService from '../../services/auth';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LayoutHome from "./LayoutHome";
import {AnimatedCircularProgress} from "react-native-circular-progress";

const HomePlusScreen = () => {

  let countPointsLastYear = AuthService.getAuthUser().countPointsLastYear;

  return (
    <LayoutHome>
      <React.Fragment>
        <Text>{AuthService.getAuthUser().login}</Text>
        <AnimatedCircularProgress
          size={120}
          width={15}
          fill={countPointsLastYear}
          tintColor="#00e0ff"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875">
          {
            (countPointsLastYear) => (
              <Text>
                { countPointsLastYear } / 12000
              </Text>
            )
          }
        </AnimatedCircularProgress>
      </React.Fragment>
      <React.Fragment>
        <MaterialCommunityIcons name="account"/>
        <Image source={{ uri: '../../assets/logo-nightfall.png' }} />
      </React.Fragment>
    </LayoutHome>
  );

};


export default HomePlusScreen
