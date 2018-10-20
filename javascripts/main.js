import {loadMovie} from './data/movieData.js';
import { loadLocation } from './data/locationsData.js';
const initializeApp = () => {
    loadMovie();
    loadLocation();
};
initializeApp();