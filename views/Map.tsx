import React, { FunctionComponent, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Region } from "react-native-maps";
import Establishment from "../models/Establishment";
import { getEstablishments } from "../services/establishments.service";
import getMarkerFromAddress from "../utils/getMarkerFromAddress";

const MapScreen: FunctionComponent = () => {
    //Load establishments
    //TODO: Get it from props or cache
    useEffect(() => {
        const loadEstablishments = async () => {
            const estab = await getEstablishments();
            setEstablishments(estab);
        };
        loadEstablishments();
    }, []);
    //#region Fields
    /**
     * Default delta
     */
    const defaultDelta = 0.5;
    /**
     * Initial position
     */
    const initialPosition: Region = {
        latitude: 47.47111129760742,
        longitude: -0.5482971668243408,
        latitudeDelta: defaultDelta,
        longitudeDelta: defaultDelta,
    };
    //#endregion

    //#region State
    /**
     * Map position
     */
    const [mapPosition, setMapPosition] = useState(initialPosition);

    /**
     * Establishments
     */
    const [establishments, setEstablishments] = useState([] as Establishment[]);
    //#endregion

    //#region Get current location
    navigator.geolocation.getCurrentPosition((position) => {
        setMapPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: defaultDelta,
            longitudeDelta: defaultDelta,
        });
    });

    //#endregion

    return (
        <MapView style={styles.map} region={mapPosition || initialPosition}>
            {establishments &&
                establishments.map((x) => getMarkerFromAddress(x))}
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
});

export default MapScreen;
