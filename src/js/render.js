import imgHolder from '../images/noposter.jpg'

export function renderHomeCards(array) {
    document.querySelector('.list')
        .innerHTML = array.reduce((acc, { id, poster_path, title, release_date, genre_ids, vote_average }) => {
            poster_path = testPath(poster_path);
            title = testTile(title);
            const currentGenres = genresGen(genre_ids);
            return acc + `<li class="item" id="${id}">
                            <div class="photo__wrapper">
                                <a class="img__link" href="#">
                                    <img class="img" src="${poster_path}" alt="" width="395">
                                </a>
                            </div>
                            <div class="data__content">
                                <h2 class="title">${title}</h2>
                                <p class="text">${currentGenres.join(', ')} ${currentGenres[0] && release_date ? '|' : ''} 
                                ${release_date ? `${release_date.slice(0, 4)}` : ''} ${vote_average.toFixed(1)}</p>
                            </div>
                        </li>`
    }, '');
};

// export function renderLibraryCards(array) {
//     document.querySelector('.list')
//         .innerHTML = array.reduce((acc, { id, poster_path, name, title, vote_average, release_date, genre_ids }) => {
//             poster_path = testPath(poster_path);
//             title = testTile(title);
//             const currentGenres = genresGen(genre_ids);
//             return acc + `<li class="item" id="${id}">
//                             <div class="photo__wrapper">
//                                 <a class="img__link" href="#">
//                                     <img class="img" src="${poster_path}" alt="" width="395">
//                                 </a>
//                             </div>
//                             <div class="data__content">
//                                 <h2 class="title">${name ? name : title}</h2>
//                                 <p class="text">${currentGenres.join(', ')} ${currentGenres[0] && release_date ? '|' : ''} 
//                                 ${release_date ? `${release_date.slice(0, 4)}` : ''} ${vote_average.toFixed(1)}</p>
//                             </div>
//                         </li>`
//     }, '');
// };

// export function renderModal({ id, genres, poster_path, title, original_title, vote_average, vote_count, popularity, overview}) {
//     const currentGenres = [];
//     genres.forEach(elem => currentGenres.push(elem.name));
//     document.querySelector('.list')
//         .innerHTML = `<div id="${id}">
//                         <img class="card-img" src="https://image.tmdb.org/t/p/w500/${poster_path}">
//                         <h2 class="card-header">${title}</h2>
//                         <div class="card-stats">
//                             <p>Vote / Votes</p>
//                             <p>Popularyty</p>
//                             <p>Original Title</p>
//                             <p>Genre</p>
//                         </div>
//                         <div class="card-stats-values">
//                             <p><span>${vote_average.toFixed(1)}</span> / ${vote_count}</p>
//                             <p>${popularity.toFixed(1)}</p>
//                             <p>${original_title}</p>
//                             <p>${currentGenres.join(', ')}</p>
//                         </div>
//                         <p class="card-about">About</p>
//                         <p class="card-description">${overview}</p>
//                         <button class="card-watched-btn">add to watched</button>
//                         <button class="card-ueue-btn">add to queue</button>
//                     </div>`;
// };

export function renderWatchedOrQueue({ id, genres, poster_path, title, release_date, vote_average }) {
    poster_path = testPath(poster_path);
    title = testTile(title);
    const acc = [];
    genres.forEach(el => acc.push(el.id));
    const currentGenres = genresGen(acc);
    const data = `<li class="item" id="${id}">
                    <div class="photo__wrapper">
                        <a class="img__link" href="#">
                            <img class="img" src="${poster_path}" alt="" width="395">
                        </a>
                    </div>
                    <div class="data__content">
                        <h2 class="title">${title}</h2>
                        <p class="text">${currentGenres.join(', ')} ${currentGenres[0] && release_date ? '|' : ''} 
                        ${release_date ? `${release_date.slice(0, 4)}` : ''} ${vote_average.toFixed(1)}</p>
                    </div>
                </li>`;
    document.querySelector('.list').insertAdjacentHTML('beforeend', data);
};

function genresGen(genre_ids) {
    const currentGenres = [];
    JSON.parse(localStorage.getItem(`genresList`))
        .forEach(elem => {
            if (genre_ids.includes(elem.id) && currentGenres.length < 3) {
                if (currentGenres.length < 2) {
                    currentGenres.push(elem.name);
                } else {
                    currentGenres.push('Other');
                };
            };
        });
    return currentGenres;
};

function testTile(title) {
    if (title.length > 40) {
        title = title.split(' ')
        let acc = '';
        title.forEach(elem => {
            if ((acc + elem).length <= 40 && !acc.endsWith('...')) {
                acc = acc + ` ${elem}`;
            } else if (!acc.endsWith('...')) {
                acc = acc + '...'
            };
        });
        title = acc;
    };
    return title;
};

function testPath(poster_path) {
    if (!poster_path) {
        poster_path = imgHolder;
    } else {
        poster_path = `https://image.tmdb.org/t/p/w500${poster_path}`;
    };
    return poster_path;
};