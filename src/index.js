import { requesterApi, requesterApiGenres } from './js/requester-api.js';
import { renderHomeCards} from './js/render.js';
import {renderPagination} from './js/pagination.js';

requesterApiGenres();
requesterApi()
    .then(data => {
        renderHomeCards(data.results);
        renderPagination(data.page, data.total_pages);
    });

import './js/team-modal';
import './js/modal-movies';
import './js/pagination';
import './js/fetchTitle';