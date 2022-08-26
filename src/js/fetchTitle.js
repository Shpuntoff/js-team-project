import { spinnerStop } from './spinner.js';
import { requesterApi } from './requester-api';
import { renderHomeCards } from './render.js';
import { renderPagination } from './pagination';

const formEL = document.querySelector('.form');
const inputEL = document.querySelector('.input');
const notifFetch = document.querySelector('.notif');
const contentBoxEl = document.querySelector('.list');
const wrapperHome = document.querySelector('.backdrop-enter-field');
const paginationEL = document.querySelector('.pagination');
export let query;

const submitHandler = event => {
  event.preventDefault();
  query = inputEL.value;
  if (query.length < 1) {
    notifFetch.textContent = 'Enter field';
    notifFetch.classList.remove('visually-hidden');
    setInterval(() => {
      notifFetch.classList.add('visually-hidden');
    }, 5000);
  } else {
    requesterApi(query, 1).then(data => {
      if (data.results.length < 1) {
        wrapperHome.classList.remove('visually-hidden');
        notifFetch.textContent =
          'Search result not successful. Enter the correct movie name and';
        notifFetch.classList.remove('visually-hidden');
        setInterval(() => {
          notifFetch.classList.add('visually-hidden');
          wrapperHome.classList.add('visually-hidden');
        }, 3000);
        inputEL.value = '';
        query = '';
        requesterApi().then(data => {
          renderHomeCards(data.results);
          renderPagination(data.page, data.total_pages);
          spinnerStop();
        });
      } else {
        notifFetch.classList.add('visually-hidden');
        wrapperHome.classList.add('visually-hidden');
        renderPagination(data.page, data.total_pages);
        renderHomeCards(data.results);
        spinnerStop();
        return;
      }
    });
  }
};

formEL.addEventListener('submit', submitHandler);
