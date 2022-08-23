import {
  requesterApi,
  requesterApiByID,
  requesterApiGenres,
} from './requester-api.js';
import {renderHomeCards} from './render.js';

let globalCurrentpage
let globalAllPages

const pagination = document.querySelector('.pagination');
pagination.addEventListener('click', handlerPagination);

export function renderPagination(currentPage, allPages) {
  let markup = '';
  let nextPage = currentPage + 1;
  let nextPageTwo = currentPage + 2;
  let beforePage = currentPage - 1;
  let beforePageTwo = currentPage - 2;
  globalCurrentpage = currentPage;
  globalAllPages = allPages;

  if (currentPage > 1) {
    markup += `<li class='arrow'>&#129144;</li>`;
  }
  if (currentPage > 1) {
    markup += `<li class='pagination__link pagination__link--first'>1</li>`;
  }
  if (currentPage > 4) {
    markup += `<li class='pagination__link pagination__link--point'>...</li>`;
  }
  if (currentPage > 3) {
    markup += `<li class='pagination__link'>${beforePageTwo}</li>`;
  }
  if (currentPage > 2) {
    markup += `<li class='pagination__link'>${beforePage}</li>`;
  }

  markup += `<li class='pagination__link--active'>${currentPage}</li>`;

  if (allPages - 1 > currentPage) {
    markup += `<li class='pagination__link'>${nextPage}</li>`;
  }

  if (allPages - 2 > currentPage) {
    markup += `<li class='pagination__link'>${nextPageTwo}</li>`;
  }

  if (allPages - 3 > currentPage) {
    markup += `<li class='pagination__link pagination__link--point'>...</li>`;
  }

  if (allPages > currentPage) {
    markup += `<li class='pagination__link pagination__link--last'>${allPages}</li>`;
    markup += `<li class='arrow'>&#129146;<li>`;
  }

  pagination.innerHTML = markup;
}

function handlerPagination(e) {
  // let markup = '';
  if (e.target.nodeName !== 'LI') {
    return;
  }
  if (e.target.textContent === "...") {
    return
  }

//   globalCurrentpage = e.target.textContent
//   requesterApi(requst = '', globalCurrentpage)
//  .then(data => {
//    renderPagination(data.page, data.total_pages)
//    renderHomeCards(data.results);
//    console.log(globalCurrentpage);
//      return;
//  })


  if (e.target.textContent === '🡸') {
    requesterApi(requst = '', globalCurrentpage -= 1)
    .then(data => {
      renderPagination(data.page, data.total_pages)
      renderHomeCards(data.results);
   console.log(globalCurrentpage);

        return;
    })
  }

  if (e.target.textContent === '🡺') {
    requesterApi(requst = '', globalCurrentpage += 1)
    .then(data => {
      renderPagination(data.page, data.total_pages)
      renderHomeCards(data.results);
   console.log(globalCurrentpage);

        return;
    })
     }

    

  
}
