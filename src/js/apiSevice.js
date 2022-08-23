import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '1e7c9642f723687d0411097a32c8e17f';

export default class NewApiService {
    #query = '';

    constructor() {
        this.page = 1;
        this.include_adult = false;
        this.primary_release_year = '';
    }

    get query() {
        return this.#query;
    }

    
    set query(newQuery) {
        this.page = 1;
        this.#query = newQuery;
    }

    async search() {
        return await this.#fetch('search/movie');
    }

    async trend() {
        return await this.#fetch('trending/movie/day');
    }

    async #fetch(typeQuery) {
        const response = await axios.get(`${typeQuery}?api_key=${API_KEY}`, {
            params: {
                query: this.#query,
                page: this.page,
                include_adult: this.include_adult,
                primary_release_year: this.primary_release_year,
            },
        });
        return response.data;
    }

    async fetchById(movieId) {
        const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
        return response.data;
    }

    async fetchTrailer(movieId) {
        const response = await axios.get(
            `movie/${movieId}/videos?api_key=${API_KEY}`
        );
        return response.data;
    }

}

