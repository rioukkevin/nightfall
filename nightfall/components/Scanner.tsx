import { BarCodeScanningResult, Camera, PermissionStatus } from "expo-camera";
import React, { FC, useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";

interface IBarcodeProps {
    flash: string;
    callback: Function;
}

const Barcode: FC<IBarcodeProps> = (props) => {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState(false);
    const cameraRef = React.createRef<Camera>();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === PermissionStatus.GRANTED);
        })();
    }, []);

    const handleBarCodeScanned = (scanningResult: BarCodeScanningResult) => {
        setScanned(true);
        props.callback(scanningResult);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <Camera
            ref={cameraRef}
            flashMode={props.flash}
            ratio="16:9"
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFill}
        />
    );
};

export default Barcode;
