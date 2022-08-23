import { watchedMovies, queueMovies } from './js/user-storage.js';
import { requesterApi, requesterApiByID, requesterApiGenres } from './js/requester-api.js';
import { renderHomeCards, renderLibraryCards, renderModal } from './js/render.js';
import { btn } from './js/theme-lite-dark.js'

requesterApiGenres()
requesterApi()
    .then(data => {
        renderHomeCards(data.results)
    })



    import './js/team-modal';

