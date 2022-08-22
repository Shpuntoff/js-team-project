export function renderHomeCards(array) {
    const targetForAdd = document.querySelector('.content');
    const gen = array.reduce((acc, { poster_path, name, title, release_date, genre_ids }) => {
        const currentGenres = [];
        const genres = Array.from(JSON.parse(localStorage.getItem(`genresList`)));
        genres.forEach(elem => {
            if (genre_ids.includes(elem.id)) {
                currentGenres.push(elem.name);
            };
        });
        return acc + `<div>
                        <img class="card-img" src="https://image.tmdb.org/t/p/w500/${poster_path}">
                        <h2 class="card-header">${name ? name : title}</h2>
                        <p>${currentGenres.join(', ')}</p>
                        <p>${release_date ? release_date.slice(0, 4) : 2022}</p>
                    </div>`
    }, '');
    targetForAdd.innerHTML = gen;
};

export function renderLibraryCards(array) {
    const targetForAdd = document.querySelector('.content');
    const gen = array.reduce((acc, { poster_path, name, title, vote_average, release_date, genre_ids }) => {
        const currentGenres = [];
        const genres = Array.from(JSON.parse(localStorage.getItem(`genresList`)));
        genres.forEach(elem => {
            if (genre_ids.includes(elem.id)) {
                currentGenres.push(elem.name);
            };
        });
        return acc + `<div>
                        <img class="card-img" src="https://image.tmdb.org/t/p/w500/${poster_path}">
                        <h2 class="card-header">${name ? name : title}</h2>
                        <p>${currentGenres.join(', ')}</p>
                        <p>${release_date ? release_date.slice(0, 4) : 2022}</p>
                        <p>${vote_average}</p>
                    </div>`
    }, '');
    targetForAdd.innerHTML = gen;
};

export function renderModal({ genres, poster_path, title, original_title, vote_average, vote_count, popularity, overview}) {
    const targetForAdd = document.querySelector('.content');
    const currentGenres = [];
    genres.forEach(elem => currentGenres.push(elem.name));
    targetForAdd.innerHTML = `<div>
                        <img class="card-img" src="https://image.tmdb.org/t/p/w500/${poster_path}">
                        <h2 class="card-header">${title}</h2>
                        <div class="card-stats">
                            <p>Vote / Votes</p>
                            <p>Popularyty</p>
                            <p>Original Title</p>
                            <p>Genre</p>
                        </div>
                        <div class="card-stats-values">
                            <p><span>${vote_average}</span> / ${vote_count}</p>
                            <p>${popularity}</p>
                            <p>${original_title}</p>
                            <p>${currentGenres.join(', ')}</p>
                        </div>
                        <p class="card-about">About</p>
                        <p class="card-description">${overview}</p>
                        <button class="card-watched-btn">add to watched</button>
                        <button class="card-ueue-btn">add to queue</button>
                    </div>`;
};