import * as basicLightbox from 'basiclightbox';
import { requesterApiByID } from './requester-api';
import { modalLibraryMarkup } from './modal-markup';
import { watchedQueue } from './watched-queue'
import { rerender } from './render';
import { spinnerStop } from './spinner.js'
import svg from '../images/symbol-defs.svg';


let movieId = 0;
const listRef = document.querySelector('.list',);

listRef.addEventListener('click', onFilmClick);

async function onFilmClick(e) {
    e.preventDefault();
    if (e.target.nodeName === 'UL') {
        return;
    }
    const movieCard = e.target.closest('li[id]');
    movieId = getId(movieCard);
    const movie = await getMovieById(movieId);
    openModal(movie);
    watchedQueue();    
}
function getId(movieCard) {
    return movieCard.id;
}

async function getMovieById(movieId) {
    try {
        const movie = await requesterApiByID(movieId);
        await spinnerStop();
        return movie;
    } catch (error) {
        console.log(error);
    }
    console.log(movieId);
}



function openModal(movie) {
        
    const moviesModalContent = modalLibraryMarkup(movie);
    const instance = basicLightbox.create(`
    <div class="modal" id ="${movie.id}">
    <button type="button" class="movies-modal__close-btn" data-modal-close>
    <svg class="movies-modal__close-icon" width="14" height="14">
    Xsdafsdf
        <use href="${svg}#icon-x"></use>
        </svg>
    </button>
  ${moviesModalContent}
</div>
`, {
    onShow: (instance) => {
        instance.element().querySelector('button[data-modal-close]').onclick = instance.close;
        window.addEventListener("keydown", onEsc);
        document.body.setAttribute('style', 'overflow: hidden');
    },
    onClose: () => {
        window.removeEventListener("keydown", onEsc);
        document.body.removeAttribute('style');
        rerender();
    }
})

function onEsc(event) {
    if (event.code === "Escape") {
        instance.close();
        };
    };
    instance.show();

    const watched = JSON.parse(localStorage.getItem(`watchedMoviesIDs`));
    const queue = JSON.parse(localStorage.getItem(`queueMoviesIDs`));
    if (watched && watched.includes(movie.id)) {
        document.querySelector('.js-addtowatched').textContent = 'remove from watched';
    };
    if (queue && queue.includes(movie.id)) {
        document.querySelector('.js-addtoqueue').textContent = 'remove from queue';
    };
};