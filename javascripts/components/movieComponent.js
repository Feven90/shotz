
import {loadMovies,getLocationsArrayFromMovies} from '../data/movieData.js';
import {locationIdsForMovie} from '../data/locationsData.js';
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
  

// print to DOM
$("#movie").append(newString);
}

// const Event = () => {
$('#movie').on('click', (e) => {
    const clickedBoardId = $(e.target).closest('.movie').attr('id');
    $('#movie').hide();
    $('#location').show();
  console.log(clickedBoardId);
  //   initialPinView(clickedBoardId);
  })
// }


const initalizeMovieView = () => {
    loadMovies().then((movies) => {
    return myMovie(movies);
}).then((LocationsArray) => {
return getLocationsArrayFromMovies();
}).then((locationId) => {
    return locationIdsForMovie(locationId);
    // Event();
})
.catch((error) => {
    console.error(error);
  })
}

export {myMovie,initalizeMovieView}