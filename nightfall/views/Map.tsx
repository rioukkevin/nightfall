import React, { FunctionComponent, useEffect, useState } from "react";
import { StyleSheet, Dimensions  } from "react-native";
import MapView, { Region } from "react-native-maps";
import Establishment from "../models/Establishment";
import { getEstablishments } from "../services/establishments.service";
import getMarkerFromAddress from "../utils/getMarkerFromAddress";
import { Searchbar, Surface} from 'react-native-paper';

const MapScreen: FunctionComponent = () => {
    //Load establishments
    //TODO: Get it from props or cache
    useEffect(() => {
        const loadEstablishments = async () => {
            const estab = await getEstablishments();
            setEstablishments(estab);
            setFilteredEstablishments(estab)
        };
        loadEstablishments();
    }, []);
    // Search Data
    const [search, setSearch] = useState<string>('')
    // update establishment list
    const onSearchUpdate = (query: string) => {
        setSearch(query)
        setFilteredEstablishments(establishments.filter(el => el.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())))
    }
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
    /**
     * Filtered Establishments
     */
    const [filteredEstablishments, setFilteredEstablishments] = useState([] as Establishment[]);
    //#endregion

    //#region Get current location
    useEffect(() => {
        const setLocation = async () => {
            navigator.geolocation.getCurrentPosition((position) => {
                setMapPosition({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: defaultDelta,
                    longitudeDelta: defaultDelta,
                });
            });
        }
        setLocation();
    }, []);


    //#endregion

    return (
        <Surface style={styles.container}>
            <Searchbar theme={{colors:{text:'#111111'}}} placeholder="Rechercher par nom" value={search} onChangeText={onSearchUpdate} style={styles.search}/>
            <MapView style={styles.map} region={mapPosition || initialPosition}>
                {filteredEstablishments &&
                    filteredEstablishments.map((x) => getMarkerFromAddress(x))}
            </MapView>
        </Surface>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    search: {
        position: 'absolute',
        top: 50,
        left: 10,
        right: 10,
        zIndex: 10
    },
    map: {
        flex: 1,
    },
});

export default MapScreen;
