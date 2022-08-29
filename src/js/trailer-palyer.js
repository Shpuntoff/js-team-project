import { requesterTrailerByID } from './requester-api';
import './modal-movies';


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
}

