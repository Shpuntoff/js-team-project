function e(e){const t=document.querySelector(".list"),n=e.reduce(((e,{poster_path:t,name:n,title:a,vote_average:s,release_date:r,genre_ids:i})=>{const o=[];return Array.from(JSON.parse(localStorage.getItem("genresList"))).forEach((e=>{i.includes(e.id)&&o.push(e.name)})),e+`<li class="item">\n                        <div class="photo__wrapper">\n                            <a class="img__link" href="#">\n                                <img class="img" src="https://image.tmdb.org/t/p/w500/${t}" alt="" width="395"">\n                            </a>\n                        </div>\n                        <div class="data__content">\n                            <h2 class="title">${n||a}</h2>\n                            <p  class="text">${o.join(", ")} | ${r?r.slice(0,4):2022} ${s}</p>\n                        </div>\n                    </li>`}),"");t.innerHTML=n}(function(e="",t=1){let n=`https://api.themoviedb.org/3/trending/all/week?api_key=1e7c9642f723687d0411097a32c8e17f&page=${t}&language=en-US`;return e&&(n=`https://api.themoviedb.org/3/search/movie?api_key=1e7c9642f723687d0411097a32c8e17f&query=${e}&page=${t}&language=en-US`),fetch(n).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>e)).catch((e=>console.log(e)))})().then((t=>{console.log(t.results),e(t.results)}));
//# sourceMappingURL=my-library.880d21b1.js.map
