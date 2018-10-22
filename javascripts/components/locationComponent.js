const movieLocation = (locationArray) => {
    let newString= "";
    locationArray.forEach(location => {
    newString += `<div class="card location card-deck" style="width: 18rem;">`;
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
// let allLocations= document.getElementsByClassName("location-name");
// console.log(allLocations);
const shotzLocation = (userInput) => {
    $(".location").each((i,location) => {
        const allLocations = $(location).find("h5").html();
        console.log(userInput);
        console.log(allLocations.toLowerCase().includes(userInput.toLowerCase()));
                if (allLocations.toLowerCase().includes(userInput.toLowerCase())) {
                // $(".location").addClass("show");
                $(location).find("div");
                // console.log($("#location .location").addClass("show"));
                    // $(location).remove(); 
                // $(".location").toggle();
    }
    else {
        // $("location").removeClass("show");
        $(location).remove(); 

    }
        console.log(allLocations);
});
}
const filter =() => {
$("#filter button").on("click", function(){
    console.log("you clicked a button");
    var filtertag = $(this).attr('class');
    // $('.time').hide().filter('.' + filtertag).show();
    $('location').show(); // Show all posts
console.log($('p.text():not(.' + filtertag + ')'));
$('p:not(.' + filtertag + ')').hide();
})
}
filter();
export {movieLocation,shotzLocation}