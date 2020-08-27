import * as React from 'react';
import { Image, View} from 'react-native';
import { Badge, Text } from 'react-native-paper';
import * as AuthService from '../../services/auth';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LayoutHome from "./LayoutHome";
import {AnimatedCircularProgress} from "react-native-circular-progress";

const HomePlusScreen = () => {

  let [countPointsLastMonth, setCountPointsLastMonth] = React.useState(0);
  let [countPointsLastYear, setCountPointsLastYear] = React.useState(0);
  let [firstname, setFirstname] = React.useState('');

  React.useEffect( () => {
    loadUser();
  });
  
  const loadUser = async () => {
    const user : any = await AuthService.getAuthUser()
    setFirstname(user.firstname)
    setCountPointsLastYear(user.countPointsLastYear)
    setCountPointsLastMonth(user.countPointsLastMonth)
  }

  return (
    <LayoutHome>
      <Text>{firstname}</Text>
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
