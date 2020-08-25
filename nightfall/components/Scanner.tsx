import { BarCodeScanningResult, Camera, PermissionStatus } from "expo-camera";
import React, { FC, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
// import { withNavigationFocus } from '@react-navigation/compat';
import { Text } from "react-native-paper";

interface IBarcodeProps {
    flash: string;
    callback: Function ;
}

const Barcode: FC<IBarcodeProps> = (props) => {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const cameraRef = React.createRef<Camera>();

    const navigator = useNavigation();
    navigator.addListener("blur", () => {
        setLoaded(false)
        setScanned(false) 
    })
    navigator.addListener("focus", () => {
        setLoaded(true)
        // if(cameraRef.current){
        //     cameraRef.current.resumePreview()
        // }
    })

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === PermissionStatus.GRANTED);
        })();
    }, []);

    const handleBarCodeScanned = (scanningResult: BarCodeScanningResult) => {
        setScanned(true);
        props.callback(scanningResult)
        setTimeout(() => {
            setScanned(false) 
        }, 1000);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        loaded && <Camera
            ref={cameraRef}
            flashMode={props.flash}
            ratio="16:9"
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFill}
        />
    );
};

export default Barcode;
