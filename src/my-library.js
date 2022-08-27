import { requesterApiGenres } from './js/requester-api.js';
import { renderWatched, renderQueue } from './js/render.js';
import { btn } from './js/theme-lite-dark.js';

const btns = document.querySelectorAll('.header-library__btn');
const imgHolder = document.querySelector('.wrapper-holder');

requesterApiGenres();
renderWatched();

btns.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        if (!elem.classList.contains('header-library__btn--active')) {
            btns.forEach((elem) => {
                elem.classList.toggle('header-library__btn--active');
            });
        };
        imgHolder.classList.add('is-hidden');
        if (event.target.textContent === 'Watched') {
            renderWatched();
        } else if (event.target.textContent === 'Queue') {
            renderQueue();
        };
    });
});

import './js/team-modal';
import './js/modal-movies';
