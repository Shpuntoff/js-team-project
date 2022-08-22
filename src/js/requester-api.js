export function requesterApi(requst = '', numOfPage = 1) {
    let ref = `https://api.themoviedb.org/3/trending/all/week?api_key=1e7c9642f723687d0411097a32c8e17f&page=${numOfPage}&language=en-US`;
    if (requst) {
        ref = `https://api.themoviedb.org/3/search/movie?api_key=1e7c9642f723687d0411097a32c8e17f&query=${requst}&page=${numOfPage}&language=en-US`
    };
    return fetch(ref)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(response => {
                return response;
            })
            .catch(error => console.log(error));
};

export function requesterApiByID(id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1e7c9642f723687d0411097a32c8e17f&language=en-US`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(response => {
                return response;
            })
            .catch(error => console.log(error));
};

export function requesterApiGenres() {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=1e7c9642f723687d0411097a32c8e17f&language=en-US`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(response => {
            localStorage.setItem(`genresList`, JSON.stringify(response.genres));
        })
        .catch(error => console.log(error));
};