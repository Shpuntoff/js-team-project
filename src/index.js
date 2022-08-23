import './js/populatioin'
import NewApiService from './js/apiSevice';
import { watchedMovies, queueMovies } from './js/user-storage.js';
import { requesterApi, requesterApiByID, requesterApiGenres } from './js/requester-api.js';
import { renderHomeCards, renderLibraryCards, renderModal } from './js/render.js';

requesterApi()
    .then(data => {
        console.log(data.results);
        renderHomeCards(data.results)
    })





