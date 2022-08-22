export function watchedMovies(ection, data) {
    if (ection === 'put') {
        if (localStorage.getItem(`watchedMoviesIDs`)) {
            const watched = Array.from(JSON.parse(localStorage.getItem(`watchedMoviesIDs`)));
            if (!watched.includes(data)) {
                watched.push(data);
                localStorage.setItem(`watchedMoviesIDs`, JSON.stringify(watched));
            };
        } else {
            localStorage.setItem(`watchedMoviesIDs`, JSON.stringify([data]));
        }; 
    } else if (ection === 'get' && localStorage.getItem(`watchedMoviesIDs`)) {
        return Array.from(JSON.parse(localStorage.getItem(`watchedMoviesIDs`)));
    } else if (ection === 'remove' && localStorage.getItem(`watchedMoviesIDs`)) {
        const watched = Array.from(JSON.parse(localStorage.getItem(`watchedMoviesIDs`)));
        if (watched.includes(data)) {
            watched.splice(watched.indexOf(data), 1);
            localStorage.setItem(`watchedMoviesIDs`, JSON.stringify(watched));
        };
    };
};

export function queueMovies(ection, data) {
    if (ection === 'put') {
        if (localStorage.getItem(`queueMoviesIDs`)) {
            const watched = Array.from(JSON.parse(localStorage.getItem(`queueMoviesIDs`)));
            if (!watched.includes(data)) {
                watched.push(data);
                localStorage.setItem(`queueMoviesIDss`, JSON.stringify(watched));
            };
        } else {
            localStorage.setItem(`queueMoviesIDs`, JSON.stringify([data]));
        }; 
    } else if (ection === 'get' && localStorage.getItem(`queueMoviesIDs`)) {
        return Array.from(JSON.parse(localStorage.getItem(`queueMoviesIDs`)));
    } else if (ection === 'remove' && localStorage.getItem(`queueMoviesIDs`)) {
        const watched = Array.from(JSON.parse(localStorage.getItem(`queueMoviesIDs`)));
        if (watched.includes(data)) {
            watched.splice(watched.indexOf(data), 1);
            localStorage.setItem(`queueMoviesIDs`, JSON.stringify(watched));
        };
    };
};