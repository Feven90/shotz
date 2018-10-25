// import {loadMovie} from './data/movieData.js';
import { initalizeMovieView } from './components/movieComponent.js';
import { initalizeLocationView } from './components/locationComponent.js';

const initializeApp = () => {
    initalizeMovieView();
    initalizeLocationView();
}
initializeApp();