import poster from '../images/noposter.jpg';
import svg from '../images/symbol-defs.svg';


export function modalLibraryMarkup({
    poster_path,
    title,
    original_title,
    genres,
    vote_average,
    vote_count,
    popularity,
    overview,
}) {
    let movieGenres = 'no information';
    const movieArr = genres.map(genre => genre.name);
    if (movieArr.length > 0) {
      movieGenres = movieArr.join(', ');
    }
    let posterUrl;
    if (!poster_path) {
        posterUrl = poster;
    } else {
        posterUrl = `https://image.tmdb.org/t/p/original/${poster_path}`;
    }
    let aboutText = "Sorry! We don't have a description for this movie yet.";
    if(overview.length > 0){
      aboutText = overview;
    }

    return `<div class="movie-modal__content">
      <img class="movie-modal__img" src="${posterUrl}" alt="${title}"></img>
  <div class="movie-modal__text">
    <h2 class="movie-modal__title">${title}</h2>
    <table>
  <tbody>
    <tr>
      <td class="movie-modal__properties space">Vote / Votes</td>
      <td class="movie-modal__values"><span class="movie-modal__vote-average">${vote_average.toFixed(
        1
    )}</span> / <span class="movie-modal__vote-count">${vote_count}</span></td>
    </tr>
    <tr>
      <td class="movie-modal__properties space">Popularity</td>
      <td class="movie-modal__values">${popularity.toFixed(1)}</td>
    </tr>
    <tr>
      <td class="movie-modal__properties space">Original Title</td>
      <td class="movie-modal__values">${original_title}</td>
    </tr>
    <tr>
    <td class="movie-modal__properties">Genre</td>
    <td class="movie-modal__values">${movieGenres}</td>
  </tr>
  </tbody>
</table>
      <p class="movie-modal__about--title">ABOUT</p>
      <button type="button" class="modal__watch-button js-playtrailer">
      <svg class="movies-modal__play-icon" width="14" height="14">
        <use href="${svg}#icon-play"></use>
      </svg><span>Watch trailer</span>
      </button>
      <p class="movie-modal__about--text">${aboutText}</p>
      <ul class="modal__btns">
        <li><button type="button" class="modal__btns__button js-addtowatched">add to watched</button></li>
        <li><button type="button" class="modal__btns__button js-addtoqueue">add to queue</button></li>
      </ul>
  </div>
</div>
    `;
}