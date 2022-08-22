export function requesterApi(requst = '', numOfPage = 1) {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=1e7c9642f723687d0411097a32c8e17f&page=${numOfPage}&query=${requst}&language=en-US`)
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
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1e7c9642f723687d0411097a32c8e17f&language=en-US`)
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