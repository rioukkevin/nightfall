import React, { FC } from "react";
import { DataTable } from 'react-native-paper';
import User from "../models/User";

interface IscoreItem {
  score : {
    user: User,
    points: Number
  }
}

const ItemScore: FC<IscoreItem> = (props) => {
  return (
    <DataTable.Row>
      <DataTable.Cell>{props.score.user.firstname} {props.score.user.lastname}</DataTable.Cell>
      <DataTable.Cell numeric>{props.score.points}</DataTable.Cell>
    </DataTable.Row>
  );
};

export default ItemScore;
