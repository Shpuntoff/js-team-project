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
                                ${release_date ? `${release_date.slice(0, 4)}` : ''} <span class="card-raiting">${vote_average.toFixed(1)}</span></p>
                            </div>
                        </li>`
    }, '');
};

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
                        ${release_date ? `${release_date.slice(0, 4)}` : ''} <span class="card-raiting">${vote_average.toFixed(1)}</span></p>
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