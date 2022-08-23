import { watchedMovies, queueMovies } from './js/user-storage.js';
import { requesterApi, requesterApiByID, requesterApiGenres } from './js/requester-api.js';
import { renderHomeCards, renderLibraryCards, renderModal, renderWatchedOrQueue } from './js/render.js';

const btns = document.querySelectorAll('.btn')
btns.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        btns.forEach((elem) => {
            elem.classList.toggle('btn--active')
        })


        console.log(event.target.textContent);
    })
})

JSON.parse(localStorage.getItem(`watchedMoviesIDs`))
    .forEach(elem => {
        requesterApiByID(elem)
            .then(data => {
                renderWatchedOrQueue(data)
            })
    });

// requesterApiGenres()
// requesterApi()
//     .then(data => {
//         renderLibraryCards(data.results)
//     })


// requesterApiByID(361743)
//     .then(data => {
//         renderModal(data)
//     })

// watchedMovies('put', 755566)



// JSON.parse(localStorage.getItem(`queueMoviesIDs`))
//     .forEach(elem => {
//         requesterApiByID(elem)
//             .then(data => {
//                 renderWatchedOrQueue(data)
//             })
//     });