import {requesterApi} from './requester-api';
import {renderHomeCards} from './render.js';
import {renderPagination} from './pagination';


const formEL = document.querySelector('.form');
const inputEL = document.querySelector('.input');
const notifFetch = document.querySelector('.notif');
const contentBoxEl = document.querySelector('.list')
export let query;

const submitHandler = (event) =>{
    event.preventDefault();
    query =inputEL.value;
    console.log(query);
    // notifFetch.classList.remove('visually-hidden');
    // if (!query)
    // return;


     requesterApi(query, 1)
    .then(data => {
        console.log(data);
                renderPagination(data.page, data.total_pages);
                renderHomeCards(data.results);
                return;
              })
    .catch(() => notifFetch.classList.remove('visually-hidden'))




}

formEL.addEventListener('submit', submitHandler);
