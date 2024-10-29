import { useEffect, useState } from "react";
import { Platform } from "react-native";
import { check, PERMISSIONS } from "react-native-permissions";



const RNpermissions = () => {
    const [cameraPermission, setCameraPermission] = useState<string>('');
    const [locationPermission, setLocationPermission] = useState<string>('');

    useEffect(() => {
        checkPermisions();
    }, []);
    const checkPermisions = async () => {
        const cameraPermission = Platform.select({
            android: PERMISSIONS.ANDROID.CAMERA,
            ios: PERMISSIONS.IOS.CAMERA,
        });
        const locationPermission = Platform.select({
            android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
            ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        });
        if (cameraPermission){
            const cameraStatus = await check(cameraPermission);
            setCameraPermission(cameraStatus);
        }
        if (locationPermission){
            const locationStatus = await check(locationPermission);
            setLocationPermission(locationStatus);
        }
    };
    console.log({cameraPermission}, {locationPermission});
};
