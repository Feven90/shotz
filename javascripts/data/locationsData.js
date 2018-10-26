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
const FilterLocationsForMovie = () => {
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
