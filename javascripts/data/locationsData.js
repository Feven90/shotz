import { movieLocation } from '../components/locationComponent.js';

const loadLocationsForMovie = () => {
    return new Promise ((resolve,reject) => {

        $.get('../db/location.json')
        .done((data) => {
            console.log(data);
            resolve(data.location);
        })
        .fail((error) => {
            reject(error);
        })
    })
    
}
const locationIdsForMovie = (movies) => {
    return new Promise ((resolve,reject) => {

        $.get('../db/location.json')
        .done((data) => {
            // const hello = data.location;
            // console.log(hello);
            // movies.forEach(locations => {
            const locationId = data.location.map(locations => locations.id);
            
            // })
            console.log(locationId);
            console.log(locationId.length);
            // for (let i=0; i<locationId.length; i++){
            //     console.log(locationId[i]);
            // }
            resolve(locationId);
        })
        .fail((error) => {
            reject(error);
        })
    })
    
}

export{loadLocationsForMovie,locationIdsForMovie}
