
import {loadMovies,getLocationsFromMovies,getClickedMovie} from '../data/movieData.js';
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
const clickedMovie = (click) => {
    let newString= "";
    
    newString += `<div id="${click.id}" class="movie card" style="width: 18rem;">`;
    newString += `<img  class="movie-image card-img-top" src=${click.image} width="200" height="200">`;
    newString += `</div>`;
    newString += `<div class="content">`
    newString += `<h3 class="card-title">${click.name}</h3>`;
    newString += `<p class="card-text">${click.genere}<p>`;
    newString += `<p class="card-text">${click.estimated}<p>`;
    newString += `<p class="card-text">${click.description}<p>`;
    newString += `</div>`
  
console.log(newString);
// print to DOM
$("#clicked-movie").append(newString);
}


const Event = () => {
$('#movie').on('click', (e) => {
    const clickedBoardId = $(e.target).closest('.movie').attr('id');
    // $('#location').hide();
    $('#location').hide();
    showClickedMovie(clickedBoardId);
 initalizeMovieLocations(clickedBoardId);

  //   initialPinView(clickedBoardId);
  })
}


const initalizeMovieView = () => {
    loadMovies().then((movies) => {
    myMovie(movies);
    Event();
})
.catch((error) => {
    console.error(error);
  })
}

const showClickedMovie = (clickedBoardId) => {
        getClickedMovie(clickedBoardId)
        .then((movieOb) => {
            console.log(movieOb);
            $('#movie').hide();
            clickedMovie(movieOb);
        
        }).catch((error) => {
        console.error(error);
    })
}
const initalizeMovieLocations = (clickedBoardId) => {
    getLocationsFromMovies(clickedBoardId)
    .then((matchedLocations) => {
        $('#hide-locations').hide();
     locationIdsForMovie(matchedLocations).then((locations) => {
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

export {myMovie,initalizeMovieView} 