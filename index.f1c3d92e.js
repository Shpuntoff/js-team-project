function e(e){const t=document.querySelector(".list"),n=e.reduce(((e,{id:t,poster_path:n,name:s,title:a,release_date:o,genre_ids:i})=>{const l=[];return JSON.parse(localStorage.getItem("genresList")).forEach((e=>{i.includes(e.id)&&l.push(e.name)})),e+`<li class="item" id="${t}">\n                        <div class="photo__wrapper">\n                            <a class="img__link" href="#">\n                                <img class="img" src="https://image.tmdb.org/t/p/w500/${n}" alt="" width="395"">\n                            </a>\n                        </div>\n                        <div class="data__content">\n                            <h2 class="title">${s||a}</h2>\n                            <p  class="text">${l.join(", ")} | ${o?o.slice(0,4):2022}</p>\n                        </div>\n                    </li>`}),"");t.innerHTML=n}const t=document.querySelector(".btn-theme"),n=document.querySelector("body"),s=document.querySelector(".theme-light"),a=document.querySelector(".theme-night");t.addEventListener("click",(function(e){e.preventDefault(),n.classList.contains("dark-theme")?(n.classList.remove("dark-theme"),a.style.display="none",n.classList.add("light-theme"),localStorage.setItem("theme","light-theme"),s.style.display="block"):(n.classList.remove("light-theme"),a.style.display="block",n.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme"),s.style.display="none")})),"dark-theme"===localStorage.getItem("theme")&&(n.classList.add("dark-theme"),a.style.display="block",s.style.display="none"),"light-theme"===localStorage.getItem("theme")&&(n.classList.add("light-theme"),a.style.display="none",s.style.display="block"),(()=>{const e=document.querySelector("[data-modal-open]"),t=document.querySelector(".team-modal__button"),n=document.querySelector(".modal-overlay"),s=document.querySelector("body");function a(){s.classList.remove("scroll-hidden"),t.removeEventListener("click",a),n.classList.add("is-hidden"),n.removeEventListener("click",a),window.removeEventListener("keydown",o)}function o(e){"Escape"===e.code&&a()}function i(e){e.currentTarget===e.target&&a()}e.addEventListener("click",(function(){n.classList.remove("is-hidden"),window.addEventListener("keydown",o),t.addEventListener("click",a),n.addEventListener("click",i),s.classList.add("scroll-hidden")}))})(),fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=1e7c9642f723687d0411097a32c8e17f&language=en-US").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{localStorage.setItem("genresList",JSON.stringify(e.genres))})).catch((e=>console.log(e))),function(e="",t=1){let n=`https://api.themoviedb.org/3/trending/movie/week?api_key=1e7c9642f723687d0411097a32c8e17f&page=${t}&language=en-US`;return e&&(n=`https://api.themoviedb.org/3/search/movie?api_key=1e7c9642f723687d0411097a32c8e17f&query=${e}&page=${t}&language=en-US`),fetch(n).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>e)).catch((e=>console.log(e)))}().then((t=>{e(t.results)}));
//# sourceMappingURL=index.f1c3d92e.js.map
