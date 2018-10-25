
import {loadMovies} from '../data/movieData.js';
const myMovie = (movieArray) => {
    let newString= "";
    movieArray.forEach(movie => {
    newString += `<div id="${movie.id}" class="black-panther movie card" style="width: 18rem;">`;
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
$('#movie').on('click', (e) => {
    const clickedBoardId = $(e.target).closest('.movie').attr('id');
  //   $('#boards-page').hide();
  //   $('#pins-page').show();
  console.log(clickedBoardId);
  //   initialPinView(clickedBoardId);
  })

const initalizeMovieView = () => {
    loadMovies().then((movies) => {
    return myMovie(movies);;
}).catch((error) => {
    console.error(error);
  })
}

export {myMovie,initalizeMovieView}