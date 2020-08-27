import React, { FC } from "react";
import { DataTable } from 'react-native-paper';
import User from "../models/User";

interface IscoreItem {
  user: User;
}

const ItemScore: FC<IscoreItem> = (props) => {
  return (
    <DataTable.Row>
      <DataTable.Cell>{props.user.login}</DataTable.Cell>
      <DataTable.Cell numeric>{props.user.countPointsLastMonth}</DataTable.Cell>
    </DataTable.Row>
  );
};

export default ItemScore;
