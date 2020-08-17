import React from "react";
import { Marker } from "react-native-maps";
import { getFullAddress } from "../models/Address";
import Establishment from "../models/Establishment";

export default (establishment: Establishment) => {
    //Get the description
    return (
        <Marker
            key={establishment.id}
            coordinate={establishment.address.coordinate}
            title={establishment.name}
            description={getFullAddress(establishment.address)}
            pinColor={establishment?.type?.color}
        ></Marker>
    );
};
