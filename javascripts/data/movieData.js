
const loadMovies = () => {
    return new Promise ((resolve,reject) => {
        $.get('../db/movie.json')
        .done((data) => {
            resolve(data.movies);
            console.log(data.movies);
        })
        .fail((error) => {
            console.error(error);
            reject(error);
        })
    })
}

const getLocationsArrayFromMovies = () => {
    return new Promise ((resolve,reject) => {
        $.get('../db/movie.json')
        .done((data) => {
            // const arrarylocation = Object.keys(movies).map(e => {
            //     console.log(`key= ${e} value = ${movies[e]}`)
            
            // data.forEach((arrarylocation,i) => {
                
            const  locationArray = data.movies.map(movie => movie.locations);
            resolve(locationArray);
            // console.log(locationArray);
            const hello = locationArray[0];
            console.log(hello);
//             for (let i=0; i<locationArray.length-1; i++){
// console.log(locationArray[0]);
//             }
            })
        // })
            // console.log(data.movies);
    
        .fail((error) => {
            console.error(error);
            reject(error);
        })
    })
}
export {loadMovies,getLocationsArrayFromMovies}


