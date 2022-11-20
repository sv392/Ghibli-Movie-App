const BASE_URL = 'http://localhost:3000'

window.addEventListener('DOMContentLoaded', () => {
    getMovies()
    document.getElementById("movies").addEventListener('click', getMovies)
})

function getMovies() {
    const ul = document.getElementById("movie-list")
    const info = document.getElementById('info')
    info.innerHTML = ""
    ul.innerHTML = ""
    fetch(BASE_URL + `/movies`)
    .then(res => res.json())
    .then(data => {
        const movieList = data.map((movie) => ul.innerHTML += 
        `
        <li><a href="#" data-id="${movie.id}">${movie.title}</a></li>
        `
        );
        attachClicksToLinks()
        return movieList  
    })
    
}

const attachClicksToLinks =  () => {
    const movies = document.querySelectorAll('a')
    movies.forEach((movie) => {
        movie.addEventListener('click', displayMovie)
    })
}

const displayMovie = (event) => {
    const info = document.getElementById('info')
    const ul = document.getElementById('movie-list')
    ul.innerHTML = ''
    fetch(BASE_URL + `/movies/${event.target.dataset.id}`)
    .then(res => res.json())
    .then(data => {
        info.innerHTML = `
        <h1>${data.title}</h1><br/>
        <h3>Release Year:</h3>
        <p>${data.year}</p>
        <h3>Premise:</h3>
        <p>${data.premise}</p>
        <h3>Genres</h3>
        <p>${data.genres.join(", ")}</p>
        <h3>Director:</h3>
        <p>${data.director}</p>
        `
    })
}

