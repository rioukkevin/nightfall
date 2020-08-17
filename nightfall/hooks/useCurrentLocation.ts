import { LatLng } from "react-native-maps";
import { useState, useEffect } from "react";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import useGetPermission from "./useGetPermission";

export interface ICurrentLocationResult {
    location?: LatLng;
    loading: boolean;
    error: any;
}

/**
 * Get the current location of the user
 */
export default (): ICurrentLocationResult => {
    const [location, setLocation] = useState<LatLng | undefined>();
    const { permissionStatus, ongoing } = useGetPermission(
        Permissions.LOCATION
    );
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    //Launch
    useEffect(() => {
        const getCurrentLocation = async () => {
            setLoading(true);
            if (permissionStatus === Permissions.PermissionStatus.GRANTED) {
                //Get current position
                try {
                    let location = await Location.getCurrentPositionAsync();
                    if (location != null) {
                        setLocation({
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        });
                    }
                } catch (error) {
                    setError(error);
                }
            }

            setLoading(false);
        };
        getCurrentLocation();
    }, [permissionStatus]);

    return {
        loading: ongoing || loading,
        location,
        error,
    };
};
