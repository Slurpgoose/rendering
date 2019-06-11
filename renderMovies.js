
function renderMovies(movies) {
    var result = movies.map(element => {
        return createMovie(element)
    }).join("")
    return `
        <div class="text-center mt-5">
            ${result}

        </div>
    `
}

function createMovie(movie){
    movie_poster = createPoster(movie)
    //alert(movie_poster);
    movie_content = createContent(movie)
    return `<div class="movie-container">${movie_poster} ${movie_content}</div>`
}

function createPoster(movie) {
    return `<div class="movie-poster"><img src="${movie.poster}"></img></div>`
}

function createContent(movie) {
    return `
        <div class="movie-content" id="${movie.imdbID}">
            <h1>${movie.title}</h1>
            <p>${movie.year}</h1>

            <h2>IMDB:</h2>
            <h3>${movie.imdbRating}</h3>

            <h2>Rotten Tomattos:</h2>
            <h3>${movie.rottenTomatoesRating}</h3>
        </div>
    `
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}