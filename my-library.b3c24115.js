(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="https://api.themoviedb.org/3/trending/all/week?api_key=1e7c9642f723687d0411097a32c8e17f&page=".concat(t,"&language=en-US");return e&&(n="https://api.themoviedb.org/3/search/movie?api_key=1e7c9642f723687d0411097a32c8e17f&query=".concat(e,"&page=").concat(t,"&language=en-US")),fetch(n).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))})().then((function(e){var t,n,a;console.log(e.results),t=e.results,n=document.querySelector(".list"),a=t.reduce((function(e,t){var n=t.poster_path,a=t.name,c=t.title,o=t.vote_average,r=t.release_date,i=t.genre_ids,s=[];return Array.from(JSON.parse(localStorage.getItem("genresList"))).forEach((function(e){i.includes(e.id)&&s.push(e.name)})),e+'<li class="item">\n                        <div class="photo__wrapper">\n                            <a class="img__link" href="#">\n                                <img class="img" src="https://image.tmdb.org/t/p/w500/'.concat(n,'" alt="" width="395"">\n                            </a>\n                        </div>\n                        <div class="data__content">\n                            <h2 class="title">').concat(a||c,'</h2>\n                            <p  class="text">').concat(s.join(", ")," | ").concat(r?r.slice(0,4):2022," ").concat(o,"</p>\n                        </div>\n                    </li>")}),""),n.innerHTML=a}));
//# sourceMappingURL=my-library.b3c24115.js.map
