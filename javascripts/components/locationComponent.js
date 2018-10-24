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
    
});
// print to DOM 
$("#location").append(newString);
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
$(".After Dark").click(() => {
$("location").show();
$(".location").not(".After Dark").hide();
});

export {movieLocation,shotzLocation}