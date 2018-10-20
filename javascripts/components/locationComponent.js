import { printToDom } from "../helpers/util.js";


let location = [];
const setLocation = (newArray) => {
    location = newArray;
} 
const getLocation = () => {
    return location;
}
const movieLocation = (locationArray) => {
    let newString= "";
    locationArray.forEach(location => {
    newString += `<div class="card" style="width: 18rem;">`;
    newString += `<img  class="card-img-top" src=${location.image} width="200" height="200">`;
    newString += `<div class="card-body">`;
    newString += `<h5 class="card-title">${location.name}</h5>`;
    newString += `<p class="card-text">${location.address}<p>`;
    newString += `<p class="card-text">${location.time}<p>`;
    newString += `</div>`;
    newString += `</div>`
});
printToDom(newString,"location");
}
export {getLocation,setLocation,movieLocation}