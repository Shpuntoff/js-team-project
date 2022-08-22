export function requesterAPI(requst = 0, numOfPage = 1) {
    if (requst) {
        ref = ``
    }


    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=1e7c9642f723687d0411097a32c8e17f&page=${numOfPage}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(response => {

            console.log(response.results[0])
        })
        .catch(error => console.log(error));
};