import { watchedMovies, queueMovies } from './user-storage';
import { onFilmClick } from './modal-movies';

export function watchedQueue() {
    const modal = document.querySelector('.modal');
    const elemID = modal.id;
    modal.addEventListener('click', (event) => {
        if (event.target.textContent === 'add to watched') {
            watchedMovies('put', Number(elemID));
            event.target.textContent = 'remove from watched';
        } else if (event.target.textContent === 'add to queue') {
            queueMovies('put', Number(elemID));
            event.target.textContent = 'remove from queue';
        } else if (event.target.textContent === 'remove from watched') {
            watchedMovies('remove', Number(elemID));
            event.target.textContent = 'add to watched';
        } else if (event.target.textContent === 'remove from queue') {
            queueMovies('remove', Number(elemID));
            event.target.textContent = 'add to queue';
        };
    });
};
