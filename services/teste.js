import Geocoder from 'react-native-geocoder';

// Position Geocoding
var NY = {
    lat: 40.7809261,
    lng: -73.9637594
  };
  
  Geocoder.geocodePosition(NY).then(res => {
      // res is an Array of geocoding object (see below)
  })
  .catch(err => console.log(err))
  
  // Address Geocoding
  Geocoder.geocodeAddress('New York').then(res => {
      // res is an Array of geocoding object (see below)
  })
  .catch(err => console.log(err))