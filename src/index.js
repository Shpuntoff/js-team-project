import { requesterApi, requesterApiGenres } from './js/requester-api.js';
import { renderHomeCards } from './js/render.js';
import { spinnerStop } from './js/spinner.js'
import { renderPagination } from './js/pagination.js';
import { btn } from './js/theme-lite-dark.js';
import { scrollBtn } from './js/scroll.js';

requesterApiGenres();
requesterApi()
    .then(data => {
        renderHomeCards(data.results);
        renderPagination(data.page, data.total_pages);
        spinnerStop();
    });

import './js/team-modal';
import './js/modal-movies';
import './js/pagination';
import './js/fetchTitle';
