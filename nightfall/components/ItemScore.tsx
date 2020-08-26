import React, { FC } from "react";
import { Text } from 'react-native-paper';
import User from "../models/User";

interface IscoreItem {
  user: User;
}

const ItemScore: FC<IscoreItem> = (props) => {
  return (
    <Text>{props.user.login} {props.user.countPointsLastMonth}</Text>
  );
};

export default ItemScore;
