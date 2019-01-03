
import {loadMovies,getLocationsFromMovies,getClickedMovie} from '../data/movieData.js';
import {movieLocation,filteredLocations} from './locationComponent.js';
import {locationIdsForMovie} from '../data/locationsData.js';


// import {locationIdsForMovie} from '../data/locationsData.js';

const myMovie = (movieArray) => {
    let newString= "";
    movieArray.forEach(movie => {
    newString += `<div id="${movie.id}" class="movie card" style="width: 18rem;">`;
    // newString += `<img  class="movie-image card-img-top" src=${movie.image} width="200" height="200">`;
    newString += `<h3 class="card-header">${movie.name}</h3>`;
    newString += `<p class="card-text">${movie.genere}<p>`;
    newString += `<p class="card-text">${movie.estimated}<p>`;
    newString += `<p class="card-text">${movie.description}<p>`;
    newString += `</div>`
});
  
console.log(newString);
// print to DOM
$("#movie").html(newString);
}
const clickedMovie = (click) => {
    let newString= "";
    newString += `<div class="card-deck">    `
    newString += `<div id="${click.id}" class="movie card" style="width: 18rem;">`;
    // newString += `<img  class="movie-image card-img-top" src=${movie.image} width="200" height="200">`;
newString += `<h3 class="card-header">${click.name}</h3>`;
    newString += `<p class="card-text">${click.genere}<p>`;
    newString += `<p class="card-text">${click.estimated}<p>`;
    newString += `<p class="card-text">${click.description}<p>`;
    newString += `</div>`;
    newString += `</div>`;
// print to DOM
$("#clicked-movie").html(newString);
}

const backButton = () => {
$('#back').click(() => {
    initalizeMovieView();
})
}

const Event = () => {
$('#movie').on('click', (e) => {
    const clickedBoardId = $(e.target).closest('.movie').attr('id');
    // $('#location').hide();
    $('#location').hide();
    document.getElementById("back").style.display = "block";

    showClickedMovie(clickedBoardId);
 initalizeMovieLocations(clickedBoardId);

  //   initialPinView(clickedBoardId);
  })
}


const initalizeMovieView = () => {
    loadMovies().then((movies) => {
    myMovie(movies);
    Event();
    backButton();
})
.catch((error) => {
    console.error(error);
  })
}

const showClickedMovie = (clickedBoardId) => {
        getClickedMovie(clickedBoardId)
        .then((movieOb) => {
            $('#movie').remove();
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

export {myMovie,initalizeMovieView, backButton} 