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
        <li>${movie.title}</li>
        `
        );
        return movieList
    })
}