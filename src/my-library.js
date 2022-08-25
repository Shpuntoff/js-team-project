import { requesterApiByID, requesterApiGenres } from './js/requester-api.js';
import { renderWatchedOrQueue } from './js/render.js';

const btns = document.querySelectorAll('.header-library__btn')
const list = document.querySelector('.list')
const imgHolder = document.querySelector('.wrapper-holder')

requesterApiGenres()

btns.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        if (!elem.classList.contains('header-library__btn--active')) {
            btns.forEach((elem) => {
                elem.classList.toggle('header-library__btn--active')
            });
        };
        imgHolder.classList.add('is-hidden');
        if (event.target.textContent === 'Watched') {
            list.innerHTML = '';
            const wMovies = JSON.parse(localStorage.getItem(`watchedMoviesIDs`));
            if (wMovies && wMovies[0]) {
                wMovies.forEach(elem => {
                    requesterApiByID(elem)
                        .then(data => {
                            renderWatchedOrQueue(data);
                        });
                });
            } else {
                imgHolder.classList.remove('is-hidden');
            };
        } else if (event.target.textContent === 'Queue') {
            list.innerHTML = '';
            const qMoviesIDs = JSON.parse(localStorage.getItem(`queueMoviesIDs`));
            if (qMoviesIDs && qMoviesIDs[0]) {
                qMoviesIDs.forEach(elem => {
                    requesterApiByID(elem)
                        .then(data => {
                            renderWatchedOrQueue(data);
                        });
                });
            } else {
                imgHolder.classList.remove('is-hidden');
            };
        };
    });
})

list.innerHTML = '';
const wMovies = JSON.parse(localStorage.getItem(`watchedMoviesIDs`));
if (wMovies && wMovies[0]) {
    wMovies.forEach(elem => {
        requesterApiByID(elem)
            .then(data => {
                renderWatchedOrQueue(data);
            });
    });
} else {
    imgHolder.classList.remove('is-hidden');
};

import './js/team-modal';
import './js/modal-movies';