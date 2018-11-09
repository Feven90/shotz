import {loadLocationsForMovie,locationIdsForMovie} from '../data/locationsData.js';
// import {initalizeLocationView} from './movieComponent.js';

const movieLocation = (locationArray) => {
    let newString= "";
    locationArray.forEach(location => {
    newString += `<div class="card location ${location.time}" style="width: 18rem;">`;
    newString += `<img  class="card-img-top" src=${location.image} width="200" height="200">`;
    newString += `<div class="card-body">`;
    newString += `<h5 class="card-title location-name">${location.name}</h5>`;
    newString += `<h6 class="card-text">${location.address}<6>`;
    newString += `<p class="card-text time">${location.time}<p>`;
    newString += `</div>`;
    newString += `</div>`
    console.log(newString);

});
// print to DOM 
$("#location").append(newString);
}
const filteredLocations = (locations) => {
    let newString= "";
    locations.forEach(location => {
    newString += `<div class="card location ${location.time}" style="width: 18rem;">`;
    newString += `<img  class="card-img-top" src=${location.image} width="200" height="200">`;
    newString += `<div class="card-body">`;
    newString += `<h5 class="card-title location-name">${location.name}</h5>`;
    newString += `<h6 class="card-text">${location.address}<6>`;
    newString += `<p class="card-text time">${location.time}<p>`;
    newString += `</div>`;
    newString += `</div>`
    
});
// print to DOM 
$("#filtered-locations").append(newString);
}


const shotzLocation = (userInput) => {
    $(".location").each((i,location) => {
        const allLocations = $(location).find("h5").html();
        console.log(userInput);
        console.log(allLocations.toLowerCase().includes(userInput.toLowerCase()));
                if (allLocations.toLowerCase().includes(userInput.toLowerCase())) {
                    $(location).show();
    }
    else {
        $(location).remove(); 

    }
        console.log(allLocations);
});
}
$(".Morning").click(() => {
$("location").show();
$(".location").not(".Morning").hide();
});

$(".Evening").click(() => {
$("location").show();
$(".location").not(".Evening").hide();
});

$(".Afternoon").click(() => {
$("location").show();
$(".location").not(".Afternoon").hide();
});

$(".Dark").click(() => {
    console.log("click");
$("location").show();
$(".location").not(".Dark").hide();
});

const initalizeLocationView = () => {
    loadLocationsForMovie().then((location) => {
    return movieLocation(location);
}).catch((error) => {
    console.error(error);
  })
}



export {movieLocation,shotzLocation,initalizeLocationView,filteredLocations}