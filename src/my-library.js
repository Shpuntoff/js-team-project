import { watchedMovies, queueMovies } from './js/user-storage.js';
import { requesterApi, requesterApiByID, requesterApiGenres } from './js/requester-api.js';
import { renderHomeCards, renderLibraryCards, renderModal, renderWatchedOrQueue } from './js/render.js';

requesterApiGenres()
requesterApi()
    .then(data => {
        renderLibraryCards(data.results)
    })


// requesterApiByID(361743)
//     .then(data => {
//         renderModal(data)
//     })

// watchedMovies('put', 755566)

// JSON.parse(localStorage.getItem(`watchedMoviesIDs`))
//     .forEach(elem => {
//         requesterApiByID(elem)
//             .then(data => {
//                 renderWatchedOrQueue(data)
//             })
//     });

// JSON.parse(localStorage.getItem(`queueMoviesIDs`))
//     .forEach(elem => {
//         requesterApiByID(elem)
//             .then(data => {
//                 renderWatchedOrQueue(data)
//             })
//     });