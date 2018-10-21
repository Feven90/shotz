
const movieLocation = (locationArray) => {
    let newString= "";
    locationArray.forEach((location,i) => {
    newString += `<div id="locations" class="card location" style="width: 18rem;">`;
    newString += `<img  class="card-img-top" src=${location.image} width="200" height="200">`;
    newString += `<div class="card-body">`;
    newString += `<h5 class="card-title location-name">${location.name}</h5>`;
    newString += `<p class="card-text">${location.address}<p>`;
    newString += `<p class="card-text">${location.time}<p>`;
    newString += `</div>`;
    newString += `</div>`
    
});
// print to DOM 
$("#location").append(newString);
}


// let Locations= document.getElementsByClassName("card location");
// console.log(Locations);
// console.log(Locations.length);
// // $("h5").each(function( index ) {
// //     console.log( $( this ).text() );
// //   });
const shotzLocation = (userInput) => {
    $(".location-name").text((i, text) => {
        console.log(text);
        console.log(userInput);
        if (text === userInput) {
            $(".location").addClass("show");
            $(".location").not(".show").hide(); 
            return false;       
        }
        // else {
        //     return "Show Sale Fish";
        // }
        // return (text === "Show Sale Fish") ? 'Show All' : 'Show Sale Fish'
    });
//     $(".location").each((i,location) => {
//         const allLocations = $(location).find("h5").html();
//         console.log(userInput);
//         console.log(allLocations.toLowerCase().includes(userInput.toLowerCase()));
//     //             if (allLocations.toLowerCase().includes(userInput.toLowerCase())) {
//     //             $(".location").addClass("show");
//     //                 $(".location").not(".show").hide(); 
//     //                 return false;
//     // }
//     if ( $( this ).is(".card location" ) ) {
//         $(".location").addClass("show");
//                     $(".location").not(".show").hide(); 
//                     return false;
//     }
//         console.log(allLocations);
// });
}
export {movieLocation,shotzLocation}