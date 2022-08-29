import * as basicLightbox from 'basiclightbox';
import { requesterApiByID } from './requester-api';
import { requesterTrailerByID } from './requester-api';
import { modalLibraryMarkup } from './modal-markup';
import { watchedQueue } from './watched-queue'
import { rerender } from './render';
import { spinnerStop } from './spinner.js';
import svg from '../images/symbol-defs.svg';


let movieId = 0;
let modalRef = {};
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
    addTrailerPlayButton();   
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
    // console.log(movieId);
}



function openModal(movie) {
        
    const moviesModalContent = modalLibraryMarkup(movie);
    const instance = basicLightbox.create(`
    <div class="modal" id ="${movie.id}">
    <button type="button" class="movies-modal__close-btn" data-modal-close>
    <svg class="movies-modal__close-icon" width="14" height="14">
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
    instance.show();

    const watched = JSON.parse(localStorage.getItem(`watchedMoviesIDs`));
    const queue = JSON.parse(localStorage.getItem(`queueMoviesIDs`));
    if (watched && watched.includes(movie.id)) {
        document.querySelector('.js-addtowatched').textContent = 'remove from watched';
    };
    if (queue && queue.includes(movie.id)) {
        document.querySelector('.js-addtoqueue').textContent = 'remove from queue';
    };
    return (modalRef = instance);
}


function onEsc(event) {
    if (event.code === "Escape") {
        modalRef.close();
        };
    };

// Trailer -----------------------------------------------------------------------

function addTrailerPlayButton() {
    const btnPlayRef = document.querySelector('.js-playtrailer');
    btnPlayRef.addEventListener('click', onTrailerPlay);
}
async function onTrailerPlay(event) {
    event.preventDefault();
    const movieVideos = await getTrailerById(movieId);
    const movieVideosall = movieVideos.results;
    const movieTrailer = movieVideosall.find(
        video => video.type === 'Trailer' && video.site === 'YouTube'
    );
    if (movieTrailer) {
        openTrailerModal(movieTrailer);
    } else {
        Notify.failure('Sorry, we can`t find any trailer of this movie.');
    }
}


async function getTrailerById(movieId) {
    try {
        const videos = await requesterTrailerByID(movieId);
        return videos;
    } catch (error) {
        console.log('ERROR = ', error);
    }
}

function openTrailerModal(movieTrailer) {
    
    const instance = basicLightbox.create(
        `
  <iframe width="806" height="558" 
  src="https://www.youtube.com/embed/${movieTrailer.key}" 
  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen></iframe>
`,
        {
            onShow: instance => {
                instance.element();
                window.addEventListener("keydown", onEscTrailer);
                window.removeEventListener("keydown", onEsc);
                document.body.setAttribute('style', 'overflow: hidden');
            },
            onClose: () => {
                window.removeEventListener("keydown", onEscTrailer);
                window.addEventListener("keydown", onEsc);
                document.body.removeAttribute('style');
            },
        }
    );
    function onEscTrailer(event) {
        if (event.code === "Escape") {
            instance.close();
            };
        };
    
        instance.show();
        TrailerCloser(instance)
       
    }
    function TrailerCloser(instance) {
        const modalBox = document.querySelector('.basicLightbox--iframe');
        modalBox.insertAdjacentHTML(
          'afterbegin',
          `<button
            type="button"
            class="player__cls-btn"
            data-action="close-lightbox"
            >
            <svg class="movies-modal__close-icon" width="14" height="14">
            <use href="${svg}#icon-x"></use>
            </svg>
            </button>
        `,
        );
        const modalCloseBtn = document.querySelector(
          '[data-action="close-lightbox"]',
        );
        modalCloseBtn.addEventListener('click', () => instance.close());
      }
    
   

      