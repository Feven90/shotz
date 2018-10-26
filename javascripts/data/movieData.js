
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

const getLocationsArrayFromMovies = (movies) => {
    return new Promise ((resolve,reject) => {
        $.get('../db/movie.json')
        .done((data) => {
            // const arrarylocation = Object.keys(movies).map(e => {
            //     console.log(`key= ${e} value = ${movies[e]}`)
            const arraylocation = data.movies.map(movie => movie.locations);
            resolve(arraylocation);
            console.log(arraylocation);
            })
            // console.log(data.movies);
    
        .fail((error) => {
            console.error(error);
            reject(error);
        })
    })
}
export {loadMovies,getLocationsArrayFromMovies}


