import {myMovie} from '../components/movieComponent.js';

$.get('../db/movie.json')
    .done((data) => {
        console.log(data);
        myMovie(data.movie);
    })
    .fail((error) => {
        console.error(error);
    })


