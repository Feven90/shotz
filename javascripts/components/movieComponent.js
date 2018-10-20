import { printToDom } from "../helpers/util.js";


let movie = [];
const setMovie = (newArray) => {
    movie = newArray;
} 
const getMovie = () => {
    return movie;
}
const myMovie = (movieArray) => {
    let newString= "";
    movieArray.forEach(movie => {
    newString += `<div class="black-panther card" style="width: 18rem;">`;
    newString += `<img  class="movie-image card-img-top" src=${movie.image} width="200" height="200">`;
    newString += `</div>`;
    newString += `<div class="content">`
    newString += `<h3 class="card-title">${movie.name}</h3>`;
    newString += `<p class="card-text">${movie.genere}<p>`;
    newString += `<p class="card-text">${movie.estimated}<p>`;
    newString += `<p class="card-text">${movie.description}<p>`;
    newString += `</div>`
});
printToDom(newString,"movie");
}
export {getMovie,setMovie,myMovie}