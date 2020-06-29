import Geocoder from 'react-native-geocoder';
import Geolocation from '@react-native-community/geolocation';


 export const getLocation = async () => {
     
    return new Promise((resolve, reject) => {
        const onReceiveLocation = (geolocation) => {
            resolve(geolocation);       
        };

        Geolocation.getCurrentPosition(onReceiveLocation, (error) => {
            
            reject(error);
        });
        
    });

};

export const filterByCountry = async (movies, geolocation) => {

    const location = await Geocoder.geocodePosition({
        lat: geolocation.coords.latitude,
        lng: geolocation.coords.longitude,
    })
    
  

//     const national = [];

//     movies.Maria.map((response,index) =>{
//         if (location[0].Country == response.Country){
//             national.push(response[index]);
//             console.log(location[0].country,response.Country);
//         }
//         //console.log(response.Country);
        
//     })
// //    console.log(location[0].country,response.Country);
//     console.log(national); 
    
    //console.log(location[0].country);
    const national = movies.Pedro.filter((item, index) => {
       
        return (isYourCountry = 
            item.Country.indexOf(location[0].country) !== -1 ||
            item.Country.indexOf(location[0].countryCode) !== -1);
     
    });

    return national;
    
};

