import * as React from 'react';
import { StyleSheet } from "react-native";
import { DataTable, Button, Title } from 'react-native-paper';
import LayoutHome from "./Home/LayoutHome";
import * as ScoreService from '../services/score';
import ItemScore from '../components/ItemScore';

const ScoresScreen = () => {

  const top : Number = 5;

  let [scores, setScores] = React.useState([]);
  let [period, setPeriod] = React.useState('month');
  let [btnDisabled, setBtnDisabled] = React.useState(false);

  React.useEffect( () => {
    loadScores();
  });

  const loadScores = async () => {
    setScores( await ScoreService.getScores(top, period) )
  }

  const changePediod = async () => {
    setBtnDisabled(true)
    period === 'month' ? setPeriod('year') : setPeriod('month')
    await loadScores();
    setBtnDisabled(false)
  }

   return (
    <LayoutHome>
      <Title>Top {top} {period === 'month' ? 'de l\'année' : 'du mois'}</Title>
      <DataTable style={styles.container}>
        <DataTable.Header>
          <DataTable.Title>Utilisateur</DataTable.Title>
          <DataTable.Title numeric>Points</DataTable.Title>
        </DataTable.Header>
        {scores.map( (value) => {
          return <ItemScore score={value}></ItemScore>
        })}
      </DataTable>
      <Button style={styles.button} disabled={btnDisabled} color='#666' mode="contained" onPress={() => changePediod() }>
        Voir la classement par {period === 'year' ? 'année' : 'mois'} 
      </Button>
    </LayoutHome>
  );
};

const styles = StyleSheet.create({
  container: {
      width: "70%",
  },
  button: {
    marginTop: 25
  }
});

export default ScoresScreen
