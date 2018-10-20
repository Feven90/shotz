import {movieLocation, setLocation, getLocation} from '../components/locationComponent.js';


function executeOnError() {
    console.log("This shit doesn't work");
}

// Using console log below for now - will update with functionality // 

function executeOnLoad() {
    let data = JSON.parse(this.responseText);
    setLocation(data.location);
    movieLocation(getLocation())
}

// May need to change name of this later //

const loadLocation = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeOnLoad);
    myRequest.addEventListener("error", executeOnError);
    myRequest.open("get", "./db/location.json");
    myRequest.send();
};

export {loadLocation};