import NewApiService from './apiSevice';

const apiService = new NewApiService();

const listRef = document.querySelector('.list');
const listFilms = apiService.trend();


async function renderPopularFilms() {
  const listFilms = await apiService.trend();

  console.log(listFilms.results);

  const markup = listFilms.results.reduce((acc, {title, poster_path}) => {
    acc +
      ` <li class="item">
  <div class="photo__wrapper">
    <a class="img__link" href="#"
      ><img class="img" src="#" alt="" width="395"
    /></a>
  </div>
  <div class="data__content">
    <h3 class="title">MOON</h3>
    <p class="text">Sci-Fi, Action, Thriller | 2010</p>
  </div>
</li>`;
  }, '');
}

renderPopularFilms()
