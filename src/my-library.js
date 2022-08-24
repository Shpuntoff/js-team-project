import { watchedMovies, queueMovies } from './js/user-storage.js';
import { requesterApi, requesterApiByID, requesterApiGenres } from './js/requester-api.js';

import { renderHomeCards, renderLibraryCards, renderModal, renderWatchedOrQueue } from './js/render.js';

const btns = document.querySelectorAll('.header-library__btn')
const list = document.querySelector('.list')
const imgHolder = document.querySelector('.wrapper-holder')

import { btn } from './js/theme-lite-dark.js'


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
            if (wMovies) {
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
            imgHolder.classList.add('is-hidden');
            if (qMoviesIDs) {
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
imgHolder.classList.add('is-hidden');
if (wMovies) {
    wMovies.forEach(elem => {
        requesterApiByID(elem)
            .then(data => {
                renderWatchedOrQueue(data);
            });
    });
} else {
    imgHolder.classList.remove('is-hidden');
};

// requesterApi()
//     .then(data => {
//         renderLibraryCards(data.results)
//     })


// requesterApiByID(361743)
//     .then(data => {
//         renderModal(data)
//     })

// watchedMovies('put', 755566)

import './js/team-modal';