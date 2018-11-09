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
const locationIdsForMovie = (displayLocations) => {
    return new Promise ((resolve,reject) => {

        $.get('../db/location.json')
        .done((data) => {
            // const hello = data.location;
            // console.log(hello);
            // movies.forEach(locations => {
            // const locationId = data.location.map(locations => locations.id);
            let printLocations = [];
                for(let j=0; j < displayLocations.length; j++){
                    console.log(displayLocations);
                     let printLocationz = data.location.find(locationz => locationz.id === displayLocations[j]) //dat.pins gives arrary of objects
                   printLocations.push(printLocationz);
                    // movieLocation(printLocations);
                    // return printLocations;

                    resolve(printLocations);

                }
            console.log(printLocations);
            
            // })
            // console.log(locationId);
            // console.log(locationId.length);
            // for (let i=0; i<locationId.length; i++){
            //     console.log(locationId[i]);
            // }
        })
        .fail((error) => {
            reject(error);
        })
    })
    
}

export{loadLocationsForMovie,locationIdsForMovie}
