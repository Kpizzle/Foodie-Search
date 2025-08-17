import * as Location from 'expo-location';
import geoCoding from '../api/geoCoding';

export async function getCurrentLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        setLocationErrorMessage('Permission to location was denied');
        return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    console.log(currentLocation);
    const response = await geoCoding.get('/reverse', {
        params: {
            lat: currentLocation.coords.latitude,
            lon: currentLocation.coords.longitude
        }
    });

    console.log(response.data)
}