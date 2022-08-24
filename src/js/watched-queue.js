import {watchedMovies,queueMovies} from './user-storage'

export function watchedQueue() {
    const modal = document.querySelector('.modal');
    const elemID = modal.id;
    modal.addEventListener('click', (event) => {
        if (event.target.textContent === 'add to watched') {
            watchedMovies('put', Number(elemID));
        } else if (event.target.textContent === 'add to queue') {
            queueMovies('put', Number(elemID));
        };
    });
};