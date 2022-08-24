export function renderHomeCards(array) {
    document.querySelector('.list')
        .innerHTML = array.reduce((acc, { id, poster_path, name, title, release_date, genre_ids }) => {
        const currentGenres = [];
        JSON.parse(localStorage.getItem(`genresList`))
            .forEach(elem => {
                if (genre_ids.includes(elem.id)) {
                    currentGenres.push(elem.name);
                };
            });
        return acc + `<li class="item" id="${id}">
                        <div class="photo__wrapper">
                            <a class="img__link" href="#">
                                <img class="img" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="" width="395"">
                            </a>
                        </div>
                        <div class="data__content">
                            <h2 class="title">${name ? name : title}</h2>
                            <p  class="text">${currentGenres.join(', ')} | ${release_date ? release_date.slice(0, 4) : 2022}</p>
                        </div>
                    </li>`
    }, '');
};

export function renderLibraryCards(array) {
    document.querySelector('.list')
        .innerHTML = array.reduce((acc, { id, poster_path, name, title, vote_average, release_date, genre_ids }) => {
        const currentGenres = [];
        JSON.parse(localStorage.getItem(`genresList`))
            .forEach(elem => {
                if (genre_ids.includes(elem.id)) {
                    currentGenres.push(elem.name);
                };
            });
        return acc + `<li class="item" id="${id}">
                        <div class="photo__wrapper">
                            <a class="img__link" href="#">
                                <img class="img" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="" width="395"">
                            </a>
                        </div>
                        <div class="data__content">
                            <h2 class="title">${name ? name : title}</h2>
                            <p  class="text">${currentGenres.join(', ')} | ${release_date ? release_date.slice(0, 4) : 2022} ${vote_average.toFixed(1)}</p>
                        </div>
                    </li>`
    }, '');
};

export function renderModal({ id, genres, poster_path, title, original_title, vote_average, vote_count, popularity, overview}) {
    const currentGenres = [];
    genres.forEach(elem => currentGenres.push(elem.name));
    document.querySelector('.list')
        .innerHTML = `<div id="${id}">
                        <img class="card-img" src="https://image.tmdb.org/t/p/w500/${poster_path}">
                        <h2 class="card-header">${title}</h2>
                        <div class="card-stats">
                            <p>Vote / Votes</p>
                            <p>Popularyty</p>
                            <p>Original Title</p>
                            <p>Genre</p>
                        </div>
                        <div class="card-stats-values">
                            <p><span>${vote_average.toFixed(1)}</span> / ${vote_count}</p>
                            <p>${popularity.toFixed(1)}</p>
                            <p>${original_title}</p>
                            <p>${currentGenres.join(', ')}</p>
                        </div>
                        <p class="card-about">About</p>
                        <p class="card-description">${overview}</p>
                        <button class="card-watched-btn">add to watched</button>
                        <button class="card-ueue-btn">add to queue</button>
                    </div>`;
};

export function renderWatchedOrQueue({ id, genres, poster_path, title, release_date, vote_average}) {
    const currentGenres = [];
    JSON.parse(localStorage.getItem(`genresList`))
        .forEach(ganre => {
            genres.forEach(elem => {
                if (ganre.id === elem.id) {
                    currentGenres.push(elem.name);
                };
            });
        });
    const data = `<li class="item" id="${id}">
                    <div class="photo__wrapper">
                        <a class="img__link" href="#">
                            <img class="img" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="" width="395"">
                        </a>
                    </div>
                    <div class="data__content">
                        <h2 class="title">${title}</h2>
                        <p  class="text">${currentGenres.join(', ')} | ${release_date ? release_date.slice(0, 4) : 2022} ${vote_average.toFixed(1)}</p>
                    </div>
                </li>`;
    document.querySelector('.movies-modal').insertAdjacentHTML('beforeend', data);
};