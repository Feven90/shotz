import {myMovie, setMovie, getMovie} from '../components/movieComponent.js';

function executeOnError() {
    console.log("This shit doesn't work");
}

// Using console log below for now - will update with functionality // 

function executeOnLoad() {
    let data = JSON.parse(this.responseText);
    setMovie(data.movie);
    myMovie(getMovie())
}

// May need to change name of this later //

const loadMovie = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeOnLoad);
    myRequest.addEventListener("error", executeOnError);
    myRequest.open("get", "./db/movie.json");
    myRequest.send();
};

export {loadMovie};