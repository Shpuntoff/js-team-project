function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequired7c6=i),i.register("kyEFX",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("1x4B6",(function(t,n){e(t.exports,"requesterApi",(function(){return r})),e(t.exports,"requesterApiByID",(function(){return s})),e(t.exports,"requesterApiGenres",(function(){return a})),e(t.exports,"requesterTrailerByID",(function(){return c}));var o=i("04jNI");function r(e="",t=1){(0,o.spinnerStart)();let n=`https://api.themoviedb.org/3/trending/movie/week?api_key=1e7c9642f723687d0411097a32c8e17f&page=${t}&language=en-US`;return e&&(n=`https://api.themoviedb.org/3/search/movie?api_key=1e7c9642f723687d0411097a32c8e17f&query=${e}&page=${t}&language=en-US`),fetch(n).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>e)).catch((e=>console.log(e)))}function s(e){return(0,o.spinnerStart)(),fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=1e7c9642f723687d0411097a32c8e17f&language=en-US`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>e)).catch((e=>console.log(e)))}function a(){fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=1e7c9642f723687d0411097a32c8e17f&language=en-US").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{localStorage.setItem("genresList",JSON.stringify(e.genres))})).catch((e=>console.log(e)))}function c(e){return fetch(`https://api.themoviedb.org/3/movie/${e}/videos?api_key=1e7c9642f723687d0411097a32c8e17f`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>e)).catch((e=>console.log(e)))}})),i.register("04jNI",(function(t,n){e(t.exports,"spinnerStart",(function(){return r})),e(t.exports,"spinnerStop",(function(){return i}));let o=document.querySelector(".overlay");function r(){o.classList.add("is-open")}function i(){o.classList.remove("is-open")}})),i.register("1dkLo",(function(n,o){e(n.exports,"renderHomeCards",(function(){return d})),e(n.exports,"rerender",(function(){return f})),e(n.exports,"renderWatched",(function(){return v})),e(n.exports,"renderQueue",(function(){return h}));var r=i("a79Io"),s=i("04jNI"),a=i("1x4B6");const c=document.querySelector(".list"),l=document.querySelector(".wrapper-holder");let u;function d(e){u=0,document.querySelector(".list").innerHTML=e.reduce(((e,{id:t,poster_path:n,title:o,release_date:r,genre_ids:i,vote_average:s})=>{n=y(n),o=g(o);const a=p(i);return e+`<li class="item" id="${t}">\n                            <div class="photo__wrapper">\n                                <a class="img__link" href="#">\n                                    <img class="img" src="${n}" alt="" width="395">\n                                </a>\n                            </div>\n                            <div class="data__content">\n                                <h2 class="title">${o}</h2>\n                                <p class="text">${a.join(", ")} ${a[0]&&r?"|":""}\n                                ${r?`${r.slice(0,4)}`:""} <span class="card-raiting">${s.toFixed(1)}</span></p>\n                            </div>\n                        </li>`}),"")}function m({id:e,genres:t,poster_path:n,title:o,release_date:r,vote_average:i}){n=y(n),o=g(o);const s=[];t.forEach((e=>s.push(e.id)));const a=p(s),c=`<li class="item" id="${e}">\n                    <div class="photo__wrapper">\n                        <a class="img__link" href="#">\n                            <img class="img" src="${n}" alt="" width="395">\n                        </a>\n                    </div>\n                    <div class="data__content">\n                        <h2 class="title">${o}</h2>\n                        <p class="text">${a.join(", ")} ${a[0]&&r?"|":""}\n                        ${r?`${r.slice(0,4)}`:""} <span class="card-raiting">${i.toFixed(1)}</span></p>\n                    </div>\n                </li>`;document.querySelector(".list").insertAdjacentHTML("beforeend",c)}function f(){1===u?v():2===u&&h()}function v(){c.innerHTML="";const e=JSON.parse(localStorage.getItem("watchedMoviesIDs"));e&&e[0]?(u=1,e.forEach((e=>{(0,a.requesterApiByID)(e).then((e=>{m(e),(0,s.spinnerStop)()}))}))):l.classList.remove("is-hidden")}function h(){c.innerHTML="";const e=JSON.parse(localStorage.getItem("queueMoviesIDs"));e&&e[0]?(u=2,e.forEach((e=>{(0,a.requesterApiByID)(e).then((e=>{m(e),(0,s.spinnerStop)()}))}))):l.classList.remove("is-hidden")}function p(e){const t=[];return JSON.parse(localStorage.getItem("genresList")).forEach((n=>{e.includes(n.id)&&t.length<3&&(t.length<2?t.push(n.name):t.push("Other"))})),t}function g(e){if(e.length>40){e=e.split(" ");let t="";e.forEach((e=>{(t+e).length<=40&&!t.endsWith("...")?t+=` ${e}`:t.endsWith("...")||(t+="...")})),e=t}return e}function y(e){return e=e?`https://image.tmdb.org/t/p/w500${e}`:t(r)}})),i.register("a79Io",(function(e,t){e.exports=new URL(i("kyEFX").resolve("iHCDC"),import.meta.url).toString()})),i.register("rKdV3",(function(e,t){const n=document.querySelector(".btn-theme"),o=document.querySelector("body");document.querySelector(".theme-light"),document.querySelector(".theme-night");n.addEventListener("click",(function(e){e.preventDefault(),o.classList.contains("dark-theme")?(o.classList.remove("dark-theme"),o.classList.add("light-theme"),localStorage.setItem("theme","light-theme")):(o.classList.remove("light-theme"),o.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme"))})),"dark-theme"===localStorage.getItem("theme")&&o.classList.add("dark-theme"),"light-theme"===localStorage.getItem("theme")&&o.classList.add("light-theme")})),i.register("baGT8",(function(e,t){(()=>{const e=document.querySelector("[data-modal-open]"),t=document.querySelector(".team-modal__button"),n=document.querySelector(".modal-overlay"),o=document.querySelector("body");function r(){o.classList.remove("scroll-hidden"),t.removeEventListener("click",r),n.classList.add("is-hidden"),n.removeEventListener("click",r),window.removeEventListener("keydown",i),document.body.style.overflow="visible"}function i(e){"Escape"===e.code&&r()}function s(e){e.currentTarget===e.target&&r()}e.addEventListener("click",(function(){n.classList.remove("is-hidden"),window.addEventListener("keydown",i),t.addEventListener("click",r),n.addEventListener("click",s),o.classList.add("scroll-hidden"),document.body.style.overflow="hidden"}))})()})),i.register("e14ir",(function(e,n){var o=i("9B8F0"),r=i("1x4B6"),s=(r=i("1x4B6"),i("8VUlu")),a=i("jew7v"),c=i("1dkLo"),l=i("04jNI");i("aRI86");var u=i("1rJhf");let d=0,m={};function f(e){"Escape"===e.code&&m.close()}async function v(e){e.preventDefault();const t=(await async function(e){try{return await(0,r.requesterTrailerByID)(e)}catch(e){console.log("ERROR = ",e)}}(d)).results.find((e=>"Trailer"===e.type&&"YouTube"===e.site));t?function(e){const t=o.create(`\n  <iframe width="806" height="558" \n  src="https://www.youtube.com/embed/${e.key}" \n  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" \n  allowfullscreen></iframe>\n`,{onShow:e=>{e.element(),window.addEventListener("keydown",n),window.removeEventListener("keydown",f),document.body.setAttribute("style","overflow: hidden")},onClose:()=>{window.removeEventListener("keydown",n),window.addEventListener("keydown",f),document.body.removeAttribute("style")}});function n(e){"Escape"===e.code&&t.close()}t.show()}(t):Notify.failure("Sorry, we can`t find any trailer of this movie.")}document.querySelector(".list").addEventListener("click",(async function(e){if(e.preventDefault(),"UL"===e.target.nodeName)return;const n=e.target.closest("li[id]");d=function(e){return e.id}(n);(function(e){const n=(0,s.modalLibraryMarkup)(e),r=o.create(`\n    <div class="modal" id ="${e.id}">\n    <button type="button" class="movies-modal__close-btn" data-modal-close>\n    <svg class="movies-modal__close-icon" width="14" height="14">\n    Xsdafsdf\n        <use href="${t(u)}#icon-x"></use>\n        </svg>\n    </button>\n  ${n}\n</div>\n`,{onShow:e=>{e.element().querySelector("button[data-modal-close]").onclick=e.close,window.addEventListener("keydown",f),document.body.setAttribute("style","overflow: hidden")},onClose:()=>{window.removeEventListener("keydown",f),document.body.removeAttribute("style"),(0,c.rerender)()}});r.show();const i=JSON.parse(localStorage.getItem("watchedMoviesIDs")),a=JSON.parse(localStorage.getItem("queueMoviesIDs"));i&&i.includes(e.id)&&(document.querySelector(".js-addtowatched").textContent="remove from watched");a&&a.includes(e.id)&&(document.querySelector(".js-addtoqueue").textContent="remove from queue");m=r})(await async function(e){try{const t=await(0,r.requesterApiByID)(e);return await(0,l.spinnerStop)(),t}catch(e){console.log(e)}}(d)),(0,a.watchedQueue)(),document.querySelector(".js-playtrailer").addEventListener("click",v)}))})),i.register("9B8F0",(function(e,t){e.exports=function e(t,n,o){function r(s,a){if(!n[s]){if(!t[s]){var c=void 0;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[s]={exports:{}};t[s][0].call(u.exports,(function(e){return r(t[s][1][e]||e)}),u,u.exports,e,t,n,o)}return n[s].exports}for(var i=void 0,s=0;s<o.length;s++)r(o[s]);return r}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},r=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=i,n.create=function(e,t){var n=function(e,t){var n=o('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return i.appendChild(e)}));var s=r(i,"IMG"),a=r(i,"VIDEO"),c=r(i,"IFRAME");return!0===s&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===c&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),s=function(e){return!1!==t.onClose(a)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(a)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&s()}));var a={element:function(){return n},visible:function(){return i(n)},show:function(e){return!1!==t.onShow(a)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(a)}))},close:s};return a}},{}]},{},[1])(1)})),i.register("8VUlu",(function(n,o){e(n.exports,"modalLibraryMarkup",(function(){return a}));var r=i("a79Io"),s=i("1rJhf");function a({poster_path:e,title:n,original_title:o,genres:i,vote_average:a,vote_count:c,popularity:l,overview:u}){let d="no information";const m=i.map((e=>e.name));let f;m.length>0&&(d=m.join(", ")),f=e?`https://image.tmdb.org/t/p/original/${e}`:t(r);let v="Sorry! We don't have a description for this movie yet.";return u.length>0&&(v=u),`<div class="movie-modal__content">\n      <img class="movie-modal__img" src="${f}" alt="${n}"></img>\n  <div class="movie-modal__text">\n    <h2 class="movie-modal__title">${n}</h2>\n    <table>\n  <tbody>\n    <tr>\n      <td class="movie-modal__properties space">Vote / Votes</td>\n      <td class="movie-modal__values"><span class="movie-modal__vote-average">${a.toFixed(1)}</span> / <span class="movie-modal__vote-count">${c}</span></td>\n    </tr>\n    <tr>\n      <td class="movie-modal__properties space">Popularity</td>\n      <td class="movie-modal__values">${l.toFixed(1)}</td>\n    </tr>\n    <tr>\n      <td class="movie-modal__properties space">Original Title</td>\n      <td class="movie-modal__values">${o}</td>\n    </tr>\n    <tr>\n    <td class="movie-modal__properties">Genre</td>\n    <td class="movie-modal__values">${d}</td>\n  </tr>\n  </tbody>\n</table>\n      <p class="movie-modal__about--title">ABOUT</p>\n      <button type="button" class="modal__watch-button js-playtrailer">\n      <svg class="movies-modal__play-icon" width="14" height="14">\n        <use href="${t(s)}#icon-play"></use>\n      </svg><span>Watch trailer</span>\n      </button>\n      <p class="movie-modal__about--text">${v}</p>\n      <ul class="modal__btns">\n        <li><button type="button" class="modal__btns__button js-addtowatched">add to watched</button></li>\n        <li><button type="button" class="modal__btns__button js-addtoqueue">add to queue</button></li>\n      </ul>\n  </div>\n</div>\n    `}})),i.register("1rJhf",(function(e,t){e.exports=new URL(i("kyEFX").resolve("9v6fF"),import.meta.url).toString()})),i.register("jew7v",(function(t,n){e(t.exports,"watchedQueue",(function(){return r}));var o=i("3dDql");function r(){const e=document.querySelector(".modal"),t=e.id;e.addEventListener("click",(e=>{"add to watched"===e.target.textContent?((0,o.watchedMovies)("put",Number(t)),e.target.textContent="remove from watched"):"add to queue"===e.target.textContent?((0,o.queueMovies)("put",Number(t)),e.target.textContent="remove from queue"):"remove from watched"===e.target.textContent?((0,o.watchedMovies)("remove",Number(t)),e.target.textContent="add to watched"):"remove from queue"===e.target.textContent&&((0,o.queueMovies)("remove",Number(t)),e.target.textContent="add to queue")}))}})),i.register("3dDql",(function(t,n){function o(e,t){if("put"===e)if(localStorage.getItem("watchedMoviesIDs")){const e=JSON.parse(localStorage.getItem("watchedMoviesIDs"));e.includes(t)||(e.push(t),localStorage.setItem("watchedMoviesIDs",JSON.stringify(e)))}else localStorage.setItem("watchedMoviesIDs",JSON.stringify([t]));else{if("get"===e&&localStorage.getItem("watchedMoviesIDs"))return JSON.parse(localStorage.getItem("watchedMoviesIDs"));if("remove"===e&&localStorage.getItem("watchedMoviesIDs")){const e=JSON.parse(localStorage.getItem("watchedMoviesIDs"));e.includes(t)&&(e.splice(e.indexOf(t),1),localStorage.setItem("watchedMoviesIDs",JSON.stringify(e)))}}}function r(e,t){if("put"===e)if(localStorage.getItem("queueMoviesIDs")){const e=JSON.parse(localStorage.getItem("queueMoviesIDs"));e.includes(t)||(e.push(t),localStorage.setItem("queueMoviesIDs",JSON.stringify(e)))}else localStorage.setItem("queueMoviesIDs",JSON.stringify([t]));else{if("get"===e&&localStorage.getItem("queueMoviesIDs"))return JSON.parse(localStorage.getItem("queueMoviesIDs"));if("remove"===e&&localStorage.getItem("queueMoviesIDs")){const e=JSON.parse(localStorage.getItem("queueMoviesIDs"));e.includes(t)&&(e.splice(e.indexOf(t),1),localStorage.setItem("queueMoviesIDs",JSON.stringify(e)))}}}e(t.exports,"watchedMovies",(function(){return o})),e(t.exports,"queueMovies",(function(){return r}))})),i.register("aRI86",(function(e,t){i("1x4B6");i("e14ir")})),i("kyEFX").register(JSON.parse('{"4627Z":"my-library.4239f0cf.js","iHCDC":"noposter.9c466f47.jpg","9v6fF":"symbol-defs.42cbda85.svg"}'));
//# sourceMappingURL=my-library.4239f0cf.js.map
