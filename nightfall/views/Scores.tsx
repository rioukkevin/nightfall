import * as React from 'react';
import { StyleSheet } from "react-native";
import { DataTable } from 'react-native-paper';
import LayoutHome from "./Home/LayoutHome";
import * as ScoreService from '../services/score';
import ItemScore from '../components/ItemScore';

const ScoresScreen = () => {

  //TODO en attente du backend
  // let [scores, setScores] = React.useState([]);

  // React.useEffect( () => {
  //   loadScores();
  // });

  // const loadScores = () => {
  //   setScores( ScoreService.getScores() )
  // }

  const scores =  [
    {
      id : 5,
      login : 'antoine',
      countPointsLastMonth : 795
    },
    {     
      id : 6,
      login : 'paul',
      countPointsLastMonth : 789
    },
  ]

   return (
    <LayoutHome>
      <DataTable style={styles.container}>
        <DataTable.Header>
          <DataTable.Title>Utilisateur</DataTable.Title>
          <DataTable.Title numeric>Points</DataTable.Title>
        </DataTable.Header>
        {scores.map( (value) => {
          return <ItemScore user={value}></ItemScore>
        })}
      </DataTable>
    </LayoutHome>
  );
};

const styles = StyleSheet.create({
  container: {
      width: "70%",
  },
});

export default ScoresScreen
