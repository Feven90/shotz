
import {loadMovies,getLocationsFromMovies} from '../data/movieData.js';
import {movieLocation,filteredLocations} from './locationComponent.js';
import {locationIdsForMovie} from '../data/locationsData.js';


// import {locationIdsForMovie} from '../data/locationsData.js';

const myMovie = (movieArray) => {
    let newString= "";
    movieArray.forEach(movie => {
    newString += `<div id="${movie.id}" class="movie card" style="width: 18rem;">`;
    newString += `<img  class="movie-image card-img-top" src=${movie.image} width="200" height="200">`;
    newString += `</div>`;
    newString += `<div class="content">`
    newString += `<h3 class="card-title">${movie.name}</h3>`;
    newString += `<p class="card-text">${movie.genere}<p>`;
    newString += `<p class="card-text">${movie.estimated}<p>`;
    newString += `<p class="card-text">${movie.description}<p>`;
    newString += `</div>`
});
  
console.log(newString);
// print to DOM
$("#movie").append(newString);
}


const Event = () => {
$('#movie').on('click', (e) => {
    const clickedBoardId = $(e.target).closest('.movie').attr('id');
    if(clickedBoardId){
        $('#movie').show();
    }
    else {
        $('#movie').hide();

    }
    console.log(`${movie.id}`);
    console.log(clickedBoardId);
   
    // $('#location').hide();
 initalizeMovieLocations(clickedBoardId);

  //   initialPinView(clickedBoardId);
  })
}


const initalizeMovieView = () => {
    loadMovies().then((movies) => {
    myMovie(movies);
// }).then((clickedBoardId) => {
// return getLocationsFromMovies();
// })
// .then((locationId) => {
//     locationIdsForMovie(locationId);
    Event();
})
.catch((error) => {
    console.error(error);
  })
}

const initalizeMovieLocations = (clickedBoardId) => {
    getLocationsFromMovies(clickedBoardId)
    .then((matchedLocations) => {
     locationIdsForMovie(matchedLocations).then((locations) => {
        $('#location').hide();
        filteredLocations(locations)
     })
    }).catch((error) => {
        console.error(error);
    })
}

// const initalizeMovieLocations = (clickedBoardId) => {
//     $('#location').hide();
//     getLocationsFromMovies(clickedBoardId)
//     .then(displayLocations => {
// return movieLocation(displayLocations)
// }).then(printLocations => {
//     return locationIdsForMovie(printLocations)
//     }).catch((error) => {
//         console.error(error);
//     })
// }

export {myMovie,initalizeMovieView} //initalizeLocationView