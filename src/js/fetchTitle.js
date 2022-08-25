import {requesterApi} from './requester-api';
import {renderHomeCards} from './render.js';
import {renderPagination} from './pagination';


const formEL = document.querySelector('.form');
const inputEL = document.querySelector('.input');
const notifFetch = document.querySelector('.notif');
const contentBoxEl = document.querySelector('.list');
const wrapperHome = document.querySelector('.wrapper-holder-home')
const paginationEL = document.querySelector('.pagination')
export let query;

const submitHandler = (event) =>{
    event.preventDefault();
    query =inputEL.value;
    console.log(query.length);
    if (query.length < 1) {
        notifFetch.textContent ="Enter field"
        notifFetch.classList.remove('visually-hidden')
    }
    else{
        requesterApi(query, 1)
        .then(data => {
            if (data.results.length < 1) {
                notifFetch.textContent ="Search result not successful. Enter the correct movie name and"
                wrapperHome.classList.remove('visually-hidden')
                contentBoxEl.innerHTML ="";
                paginationEL.innerHTML = "";
            } else{
                notifFetch.classList.add('visually-hidden')
                wrapperHome.classList.add('visually-hidden')
                renderPagination(data.page, data.total_pages);
                renderHomeCards(data.results);
                return;
            }
            })
    }


  }

formEL.addEventListener('submit', submitHandler);
