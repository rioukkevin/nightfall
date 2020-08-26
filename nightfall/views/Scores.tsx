import * as React from 'react';
import {View} from 'react-native';
import {Text, List, Badge} from 'react-native-paper';
import LayoutHome from "./Home/LayoutHome";
import * as ScoreService from '../services/score';

const ScoresScreen = () => {

  // let [scores, setScores] = React.useState([]);

  // React.useEffect( () => {
  //   loadScores();
  // });

  // const loadScores = () => {
  //   setScores( ScoreService.getScores() )
  // }

  const scores =  [
    {
      user : {
        id : 5,
        login : 'antoine',
        countPointsLastMonth : 795
      }
    },
    {
      user : {
        id : 6,
        login : 'paul',
        countPointsLastMonth : 789
      },
    },
  ]

   return (
    <LayoutHome>
      <List.Section>
        {scores.map( (value) => {
          return <
            View>
              <Text>{value.user.login} {value.user.countPointsLastMonth}</Text>
            </View>
        })}
      </List.Section>
    </LayoutHome>
  );
};

export default ScoresScreen
