!function(){var e="1e7c9642f723687d0411097a32c8e17f";var t=document.querySelector(".btn-theme"),n=document.querySelector("body"),a=document.querySelector(".theme-light"),o=document.querySelector(".theme-night");t.addEventListener("click",(function(e){e.preventDefault(),n.classList.contains("dark-theme")?(n.classList.remove("dark-theme"),o.style.display="none",n.classList.add("light-theme"),localStorage.setItem("theme","light-theme"),a.style.display="block"):(n.classList.remove("light-theme"),o.style.display="block",n.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme"),a.style.display="none")})),"dark-theme"===localStorage.getItem("theme")&&(n.classList.add("dark-theme"),o.style.display="block",a.style.display="none"),"light-theme"===localStorage.getItem("theme")&&(n.classList.add("light-theme"),o.style.display="none",a.style.display="block"),fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(e,"&language=en-US")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){localStorage.setItem("genresList",JSON.stringify(e.genres))})).catch((function(e){return console.log(e)})),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(e,"&page=").concat(n,"&language=en-US");return t&&(a="https://api.themoviedb.org/3/search/movie?api_key=".concat(e,"&query=").concat(t,"&page=").concat(n,"&language=en-US")),fetch(a).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))}().then((function(e){var t,n,a;t=e.results,n=document.querySelector(".list"),a=t.reduce((function(e,t){var n=t.id,a=t.poster_path,o=t.name,c=t.title,s=t.vote_average,i=t.release_date,l=t.genre_ids,r=[];return JSON.parse(localStorage.getItem("genresList")).forEach((function(e){l.includes(e.id)&&r.push(e.name)})),e+'<li class="item" id="'.concat(n,'">\n                        <div class="photo__wrapper">\n                            <a class="img__link" href="#">\n                                <img class="img" src="https://image.tmdb.org/t/p/w500/').concat(a,'" alt="" width="395"">\n                            </a>\n                        </div>\n                        <div class="data__content">\n                            <h2 class="title">').concat(o||c,'</h2>\n                            <p  class="text">').concat(r.join(", ")," | ").concat(i?i.slice(0,4):2022," ").concat(s.toFixed(1),"</p>\n                        </div>\n                    </li>")}),""),n.innerHTML=a}))}();
//# sourceMappingURL=my-library.13167bd0.js.map
