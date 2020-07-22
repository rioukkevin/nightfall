import * as Permissions from "expo-permissions";
import { useEffect, useState } from "react";

export interface IGrantPermissionResult {
    permissionStatus: Permissions.PermissionStatus;
    ongoing: boolean;
}

/**
 * Check if a permission is granted
 * @param permission Permission to get
 * @param askForPermission Ask for the permission if it is not already granted
 */
export default (
    permissionType: Permissions.PermissionType,
    askForPermission: boolean = true
): IGrantPermissionResult => {
    const [permissionStatus, setPermissionStatus] = useState(
        Permissions.PermissionStatus.UNDETERMINED
    );
    const [ongoing, setOngoing] = useState(false);

    //Launch
    useEffect(() => {
        const getPermission = async () => {
            setOngoing(true);
            //Get current permission
            let permissionResult: Permissions.PermissionResponse = await Permissions.getAsync(
                permissionType
            );

            //If permission is not granted and we can ask, we ask for the permission
            if (
                !permissionResult.granted &&
                permissionResult.canAskAgain &&
                askForPermission
            ) {
                //Ask for the permission
                permissionResult = await Permissions.askAsync(permissionType);
            }

            //Set the permission result and ongoing to false
            setPermissionStatus(permissionResult.status);
            setOngoing(false);
        };

        getPermission();
    });

    return {
        permissionStatus,
        ongoing,
    };
};
