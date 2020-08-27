import React, { FC, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Surface, Text } from "react-native-paper";
import { PieChart } from 'react-native-chart-kit'

interface IPie {
  value: number;
  max: number;
  text: string;
  style: any
}

const Pie: FC<IPie> = (props) => {

  const getPoints = () => {
      const MAX = props.max;
      let points = props.value
      points = points ? points : 0
      return [
        { name: 'Points', population: points, color: 'rgba(254, 165, 0, 1)', legendFontColor: 'transparent', legendFontSize: 0 },
        { name: 'Other', population: MAX - points, color: 'rgba(255, 255, 255, 0.4)', legendFontColor: 'transparent', legendFontSize: 0 },
      ]
    }

    return (
      <Surface style={styles.container}>
        <Text style={styles.title}>{ props.text }</Text>
        <Text style={styles.content}>{ props.value }</Text>
        <Surface style={styles.separator}><Text>.</Text></Surface>
        <Text style={styles.max}>{ props.max }</Text>
        <PieChart  style={styles.chart} data={getPoints()} width={170} height={170} accessor="population" hasLegend={false} backgroundColor="transparent" paddingLeft="42" chartConfig={{
          backgroundColor: 'transparent',
          color: () => 'transparent',
        }}/>
      </Surface>
    );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    minWidth: 200,
    minHeight: 200,
    backgroundColor: 'transparent'
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: '700'
  },
  chart: {
    position: 'absolute',
    marginLeft: -85,
    marginTop: -65,
    top: '50%',
    left: '50%',
    zIndex: 5
  },
  content: {
    position: 'absolute',
    textAlign: 'center',
    width: 150,
    height: 150,
    marginLeft: -75,
    marginTop: -30,
    top: '50%',
    left: '50%',
    zIndex: 10,
    fontSize: 40,
    fontWeight: 'bold'
  },
  separator: {
    position: 'absolute',
    width: 70,
    marginLeft: -35,
    marginTop: 20,
    height: 2,
    top: '50%',
    left: '50%',
    zIndex: 10,
  },
  max: {
    position: 'absolute',
    textAlign: 'center',
    width: 150,
    height: 150,
    marginLeft: -75,
    marginTop: 20,
    top: '50%',
    left: '50%',
    zIndex: 10,
    fontSize: 30,
    fontWeight: 'bold'
  },
});

export default Pie;
