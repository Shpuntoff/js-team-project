import imgDefault from '../images/noposter.jpg';
import { spinnerStop } from './spinner.js'
import { requesterApiByID } from './requester-api.js';

const list = document.querySelector('.list');
const imgHolder = document.querySelector('.wrapper-holder');
let target;

export function renderHomeCards(array) {
    target = 0;
    document.querySelector('.list')
        .innerHTML = array.reduce((acc, { id, poster_path, title, release_date, genre_ids, vote_average }) => {
            poster_path = testPath(poster_path);
            title = testTile(title);
            const currentGenres = genresGen(genre_ids);
            return acc + `<li class="item" id="${id}">
                            <div class="photo__wrapper">
                                <a class="img__link" href="#">
                                    <img class="img" src="${poster_path}" alt="" width="395">
                                </a>
                            </div>
                            <div class="data__content">
                                <h2 class="title">${title}</h2>
                                <p class="text">${currentGenres.join(', ')} ${currentGenres[0] && release_date ? '|' : ''}
                                ${release_date ? `${release_date.slice(0, 4)}` : ''} <span class="card-raiting">${vote_average.toFixed(1)}</span></p>
                            </div>
                        </li>`;
    }, '');
};

export function renderWatchedOrQueue({ id, genres, poster_path, title, release_date, vote_average }) {
    poster_path = testPath(poster_path);
    title = testTile(title);
    const acc = [];
    genres.forEach(el => acc.push(el.id));
    const currentGenres = genresGen(acc);
    const data = `<li class="item" id="${id}">
                    <div class="photo__wrapper">
                        <a class="img__link" href="#">
                            <img class="img" src="${poster_path}" alt="" width="395">
                        </a>
                    </div>
                    <div class="data__content">
                        <h2 class="title">${title}</h2>
                        <p class="text">${currentGenres.join(', ')} ${currentGenres[0] && release_date ? '|' : ''}
                        ${release_date ? `${release_date.slice(0, 4)}` : ''} <span class="card-raiting">${vote_average.toFixed(1)}</span></p>
                    </div>
                </li>`;
    document.querySelector('.list').insertAdjacentHTML('beforeend', data);
};

export function rerender() {
    if (target === 1) {
        renderWatched();
    } else if (target === 2) {
        renderQueue();
    };
};

export function renderWatched() {
    list.innerHTML = '';
    const wMovies = JSON.parse(localStorage.getItem(`watchedMoviesIDs`));
    if (wMovies && wMovies[0]) {
        target = 1;
        wMovies.forEach(elem => {
            requesterApiByID(elem)
                .then(data => {
                    renderWatchedOrQueue(data);
                    spinnerStop();
                });
        });
    } else {
        imgHolder.classList.remove('is-hidden');
    };
};

export function renderQueue() {
    list.innerHTML = '';
    const qMoviesIDs = JSON.parse(localStorage.getItem(`queueMoviesIDs`));
    if (qMoviesIDs && qMoviesIDs[0]) {
        target = 2;
        qMoviesIDs.forEach(elem => {
            requesterApiByID(elem)
                .then(data => {
                    renderWatchedOrQueue(data);
                    spinnerStop();
                });
        });
    } else {
        imgHolder.classList.remove('is-hidden');
    };
};

function genresGen(genre_ids) {
    const currentGenres = [];
    JSON.parse(localStorage.getItem(`genresList`))
        .forEach(elem => {
            if (genre_ids.includes(elem.id) && currentGenres.length < 3) {
                if (currentGenres.length < 2) {
                    currentGenres.push(elem.name);
                } else {
                    currentGenres.push('Other');
                };
            };
        });
    return currentGenres;
};

function testTile(title) {
    if (title.length > 40) {
        title = title.split(' ');
        let acc = '';
        title.forEach(elem => {
            if ((acc + elem).length <= 40 && !acc.endsWith('...')) {
                acc = acc + ` ${elem}`;
            } else if (!acc.endsWith('...')) {
                acc = acc + '...';
            };
        });
        title = acc;
    };
    return title;
};

function testPath(poster_path) {
    if (!poster_path) {
        poster_path = imgDefault;
    } else {
        poster_path = `https://image.tmdb.org/t/p/w500${poster_path}`;
    };
    return poster_path;
};