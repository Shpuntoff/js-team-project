import { watchedMovies, queueMovies } from './js/user-storage.js';
import { requesterApi, requesterApiByID, requesterApiGenres } from './js/requester-api.js';
import { renderHomeCards, renderLibraryCards, renderModal } from './js/render.js';
import {renderPagination} from './js/pagination.js';
import { btn } from './js/theme-lite-dark.js'
import {scrollBtn} from './js/scroll.js'

requesterApiGenres()
requesterApi()
    .then(data => {
        renderHomeCards(data.results)
        renderPagination(data.page, data.total_pages)
    })



    import './js/team-modal';




