!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),o("iE7OH").register(JSON.parse('{"1B9dp":"my-library.b8c5c864.js","iXtly":"noposter.9c466f47.jpg"}'));var i="1e7c9642f723687d0411097a32c8e17f";function a(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i,"&language=en-US")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))}function c(e){var t=e.id,n=e.genres,r=e.poster_path,o=e.title,i=e.release_date,a=e.vote_average,c=[];JSON.parse(localStorage.getItem("genresList")).forEach((function(e){n.forEach((function(t){e.id===t.id&&c.push(t.name)}))}));var s='<li class="item" id="'.concat(t,'">\n                    <div class="photo__wrapper">\n                        <a class="img__link" href="#">\n                            <img class="img" src="https://image.tmdb.org/t/p/w500/').concat(r,'" alt="" width="395">\n                        </a>\n                    </div>\n                    <div class="data__content">\n                        <h2 class="title">').concat(o,'</h2>\n                        <p class="text">').concat(c.join(", ")," | ").concat(i?i.slice(0,4):2022," ").concat(a.toFixed(1),"</p>\n                    </div>\n                </li>");document.querySelector(".movies-modal").insertAdjacentHTML("beforeend",s)}o("aNJCr").getBundleURL("1B9dp"),o("iE7OH").resolve("iXtly");var s=document.querySelector(".btn-theme"),l=document.querySelector("body");document.querySelector(".theme-light"),document.querySelector(".theme-night");s.addEventListener("click",(function(e){e.preventDefault(),l.classList.contains("dark-theme")?(l.classList.remove("dark-theme"),l.classList.add("light-theme"),localStorage.setItem("theme","light-theme")):(l.classList.remove("light-theme"),l.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme"))})),"dark-theme"===localStorage.getItem("theme")&&l.classList.add("dark-theme"),"light-theme"===localStorage.getItem("theme")&&l.classList.add("light-theme");var d=document.querySelectorAll(".header-library__btn"),u=document.querySelector(".list"),h=document.querySelector(".wrapper-holder");fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(i,"&language=en-US")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){localStorage.setItem("genresList",JSON.stringify(e.genres))})).catch((function(e){return console.log(e)})),d.forEach((function(e){e.addEventListener("click",(function(t){if(e.classList.contains("header-library__btn--active")||d.forEach((function(e){e.classList.toggle("header-library__btn--active")})),h.classList.add("is-hidden"),"Watched"===t.target.textContent){u.innerHTML="";var n=JSON.parse(localStorage.getItem("watchedMoviesIDs"));n?n.forEach((function(e){a(e).then((function(e){c(e)}))})):h.classList.remove("is-hidden")}else if("Queue"===t.target.textContent){u.innerHTML="";var r=JSON.parse(localStorage.getItem("queueMoviesIDs"));h.classList.add("is-hidden"),r?r.forEach((function(e){a(e).then((function(e){c(e)}))})):h.classList.remove("is-hidden")}}))})),u.innerHTML="";var f=JSON.parse(localStorage.getItem("watchedMoviesIDs"));h.classList.add("is-hidden"),f?f.forEach((function(e){a(e).then((function(e){c(e)}))})):h.classList.remove("is-hidden")}();
//# sourceMappingURL=my-library.b8c5c864.js.map
