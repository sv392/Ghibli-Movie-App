const BASE_URL = 'http://localhost:3000'

window.addEventListener('DOMContentLoaded', () => {
    getMovies()
})

function getMovies() {
    const ul = document.getElementById("movie-list")
    fetch(BASE_URL + '/movies')
    .then(res => res.json())
    .then(data => {
        const movieList = data.map((movie) => ul.innerHTML += 
        `
        <li><a href="#" data-id="${movie.id}">${movie.title}</a></li>
        `
        );
        return movieList
    })
    attachClicksToLinks()
}

const attachClicksToLinks =  () => {
    const movies = document.querySelectorAll('a')
    movies.forEach((movie) => {
        movie.addEventListener('click', displayMovie)
    })
}

const displayMovie = (event) => {
    console.log(event.target.dataset.id)
    const info = document.getElementById('info')
    const ul = document.getElementById("movie-list")
    ul.innerHTML = ''
    fetch(BASE_URL + `/shows/${event.target.dataset.id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}