const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.querySelector("main");
const searchEl = document.getElementById("search-content");


getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = "";

    movies.map((movie) => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add("movie");
        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <div class="${getClassByRate(vote_average)}">${vote_average}</div>
            </div>
            <section class="overview">
                <h3>Overview</h3>
                ${overview}
            </section>
        `
        main.appendChild(movieEl);
    })
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

window.addEventListener("submit", (event)=>{
    event.preventDefault()

    const searchContent = searchEl.value

    if(searchContent && searchContent !== '') {
        getMovies(SEARCH_API + searchContent)

        searchEl.value = ''
    } else {
        window.location.reload()
    }
})