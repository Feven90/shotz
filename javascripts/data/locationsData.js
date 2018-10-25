import { movieLocation } from '../components/locationComponent.js';

const loadLocationsForMovie = (Id) => {
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
export{loadLocationsForMovie}
