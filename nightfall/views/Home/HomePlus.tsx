import * as React from 'react';
import { Image, View} from 'react-native';
import { Badge, Text } from 'react-native-paper';
import * as AuthService from '../../services/auth';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LayoutHome from "./LayoutHome";
import {AnimatedCircularProgress} from "react-native-circular-progress";

const HomePlusScreen = () => {

  let countPointsLastYear = AuthService.getAuthUser().countPointsLastYear;
  let countPointsLastMonth = AuthService.getAuthUser().countPointsLastMonth;

  return (
    <LayoutHome>
      <Text>{AuthService.getAuthUser().login}</Text>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <AnimatedCircularProgress
          size={90}
          width={10}
          fill={countPointsLastYear}
          tintColor="#00e0ff"
          backgroundColor="#3d5875">
          {
            (countPointsLastYear) => (
              <Text>
                {countPointsLastYear} / 12000
              </Text>
            )
          }
        </AnimatedCircularProgress>
        <AnimatedCircularProgress
          size={120}
          width={10}
          fill={countPointsLastMonth}
          tintColor="#00e0ff"
          backgroundColor="#3d5875">
          {
            (countPointsLastMonth) => (
              <Text>
                {countPointsLastMonth} / 1000
              </Text>
            )
          }
        </AnimatedCircularProgress>
        {/*<Badge size={90}>*/}
        {/*    Nantes*/}
        {/*    mars 2020*/}
        {/*</Badge>*/}
      </View>
      <MaterialCommunityIcons name="account"/>
      <Image source={{uri: '../../assets/logo-nightfall.png'}}/>
    </LayoutHome>
  );
};


export default HomePlusScreen
