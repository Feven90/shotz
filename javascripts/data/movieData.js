
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
export {loadMovies}


