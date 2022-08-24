import * as basicLightbox from 'basiclightbox';
import {requesterApiByID} from './requester-api';
import { modalLibraryMarkup } from './modal-markup';


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
    console.log(movie);
    openModal(movie);

    console.log(movieId);
    
}
function getId(movieCard) {
    return movieCard.id;
}

async function getMovieById(movieId) {
    try {
        const movie = await requesterApiByID(movieId);
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
    </button>
  ${moviesModalContent}
</div>
`, {
    onShow: (instance) => {
        instance.element().querySelector('button[data-modal-close]').onclick = instance.close;
        window.addEventListener("keydown", onEsc);
    },
    onClose: () => {
        window.removeEventListener("keydown", onEsc);
    }
})

function onEsc(event) {
    if (event.code === "Escape") {
        instance.close();
      }
  }
instance.show();
}



