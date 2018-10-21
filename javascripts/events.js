
import { shotzLocation } from './components/locationComponent.js';
// const 
$("#input").keyup(function(e){
    // if ( e.which == 13 ) {
    //     event.preventDefault();
    //  }
    var userInput = $( this ).val();
    shotzLocation(userInput);
        
});