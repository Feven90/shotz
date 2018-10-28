
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

const getLocationsFromMovies = (clickedBoardId) => {
    return new Promise ((resolve,reject) => {
        $.get('../db/movie.json')
        .done((data) => {
            // const arrarylocation = Object.keys(movies).map(e => {
            //     console.log(`key= ${e} value = ${movies[e]}`)
            
            // data.forEach((arrarylocation,i) => {
                
                // let movieIds = data.movies.map((movie, index, movies) => {
                    // return movie.id;
                    // movieIds.foreach((movieId,i) => {
                        let movieObject = data.movies;
                        for(let i=0; i < movieObject.length; i++){
                            if(movieObject[i].id == clickedBoardId){
                                console.log(movieObject[i]);
                                let displayLocations = movieObject[i].locations;
                                console.log(displayLocations);
                            resolve(displayLocations)
                        }
                        
                        }
                    // })
                })
    
        .fail((error) => {
            console.error(error);
            reject(error);
        })
    })
}
export {loadMovies,getLocationsFromMovies}

                // })
                // const movieIds = data.movies.map(movie => movie.id);
                // console.log(movieIds);
                // movieIds.foreach((movieId,i) => {
                //  console.log(movieId[i] == clickedBoardId)
                //  {
                //      let displayLocations = movieId[i].locations;
                        // resolve(displayLocations);
                //  }
                // })
            // const  locationArray = data.movies.map(movie => movie.locations == clickedBoardId);
            // resolve(locationArray);
            // console.log(locationArray);
            // const hello = locationArray[0];
            // console.log(hello);
//             for (let i=0; i<locationArray.length-1; i++){
// console.log(locationArray[0]);
//             }
            // })
        // })
            // console.log(data.movies);

