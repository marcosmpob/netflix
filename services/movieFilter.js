import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder';

 export const GetLocation = () => {
    Geolocation.getCurrentPosition(
        (info) => {
            const position = {lat: info.coords.latitude,lng: info.coords.longitude};
            Geocoder.geocodePosition(position).then((res) => {
                console.log(res);
            })
        },
        (error) => console.log(error),
        );
};

