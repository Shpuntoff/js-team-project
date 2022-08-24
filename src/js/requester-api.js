import { spinner } from './spinner.js'

const API_KEY = '1e7c9642f723687d0411097a32c8e17f';

export function requesterApi(requst = '', numOfPage = 1) {
    spinner()
    let ref = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${numOfPage}&language=en-US`;
    if (requst) {
        ref = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${requst}&page=${numOfPage}&language=en-US`
    };
    return fetch(ref)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(response => {
                return response;
            })
            .catch(error => console.log(error));

};

export function requesterApiByID(id) {
    spinner()
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
        .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(response => {
                return response;
            })
            .catch(error => console.log(error));
};

export function requesterApiGenres() {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(response => {
            localStorage.setItem(`genresList`, JSON.stringify(response.genres));
        })
        .catch(error => console.log(error));
};
