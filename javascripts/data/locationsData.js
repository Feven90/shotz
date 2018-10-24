import { movieLocation } from '../components/locationComponent.js';

$.get('../db/location.json')
    .done((data) => {
        console.log(data);
        movieLocation(data.location);
    })
    .fail((error) => {
        console.error(error);
    })
