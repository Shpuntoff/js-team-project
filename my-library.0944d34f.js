!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequired7c6=i),i.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),i("iE7OH").register(JSON.parse('{"1B9dp":"my-library.0944d34f.js","iXtly":"noposter.9c466f47.jpg"}'));document.querySelector(".overlay");var c="1e7c9642f723687d0411097a32c8e17f";function a(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(c,"&language=en-US")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))}var s;function l(e){var t=e.id,n=e.genres,r=e.poster_path,o=e.title,i=e.release_date,c=e.vote_average;r=h(r),o=u(o);var a=[];n.forEach((function(e){return a.push(e.id)}));var s=d(a),l='<li class="item" id="'.concat(t,'">\n                    <div class="photo__wrapper">\n                        <a class="img__link" href="#">\n                            <img class="img" src="').concat(r,'" alt="" width="395">\n                        </a>\n                    </div>\n                    <div class="data__content">\n                        <h2 class="title">').concat(o,'</h2>\n                        <p class="text">').concat(s.join(", ")," ").concat(s[0]&&i?"|":""," \n                        ").concat(i?"".concat(i.slice(0,4)):""," ").concat(c.toFixed(1),"</p>\n                    </div>\n                </li>");document.querySelector(".list").insertAdjacentHTML("beforeend",l)}function d(e){var t=[];return JSON.parse(localStorage.getItem("genresList")).forEach((function(n){e.includes(n.id)&&t.length<3&&(t.length<2?t.push(n.name):t.push("Other"))})),t}function u(e){if(e.length>40){e=e.split(" ");var t="";e.forEach((function(e){(t+e).length<=40&&!t.endsWith("...")?t+=" ".concat(e):t.endsWith("...")||(t+="...")})),e=t}return e}function h(e){return e=e?"https://image.tmdb.org/t/p/w500".concat(e):t(s)}s=i("aNJCr").getBundleURL("1B9dp")+i("iE7OH").resolve("iXtly");var f=document.querySelector(".btn-theme"),m=document.querySelector("body");document.querySelector(".theme-light"),document.querySelector(".theme-night");f.addEventListener("click",(function(e){e.preventDefault(),m.classList.contains("dark-theme")?(m.classList.remove("dark-theme"),m.classList.add("light-theme"),localStorage.setItem("theme","light-theme")):(m.classList.remove("light-theme"),m.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme"))})),"dark-theme"===localStorage.getItem("theme")&&m.classList.add("dark-theme"),"light-theme"===localStorage.getItem("theme")&&m.classList.add("light-theme"),function(){var e=document.querySelector("[data-modal-open]"),t=document.querySelector(".team-modal__button"),n=document.querySelector(".modal-overlay"),r=document.querySelector("body");function o(){r.classList.remove("scroll-hidden"),t.removeEventListener("click",o),n.classList.add("is-hidden"),n.removeEventListener("click",o),window.removeEventListener("keydown",i)}function i(e){"Escape"===e.code&&o()}function c(e){e.currentTarget===e.target&&o()}e.addEventListener("click",(function(){n.classList.remove("is-hidden"),window.addEventListener("keydown",i),t.addEventListener("click",o),n.addEventListener("click",c),r.classList.add("scroll-hidden")}))}();var g=document.querySelectorAll(".header-library__btn"),v=document.querySelector(".list"),p=document.querySelector(".wrapper-holder");fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(c,"&language=en-US")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){localStorage.setItem("genresList",JSON.stringify(e.genres))})).catch((function(e){return console.log(e)})),g.forEach((function(e){e.addEventListener("click",(function(t){if(e.classList.contains("header-library__btn--active")||g.forEach((function(e){e.classList.toggle("header-library__btn--active")})),p.classList.add("is-hidden"),"Watched"===t.target.textContent){v.innerHTML="";var n=JSON.parse(localStorage.getItem("watchedMoviesIDs"));n?n.forEach((function(e){a(e).then((function(e){l(e)}))})):p.classList.remove("is-hidden")}else if("Queue"===t.target.textContent){v.innerHTML="";var r=JSON.parse(localStorage.getItem("queueMoviesIDs"));r?r.forEach((function(e){a(e).then((function(e){l(e)}))})):p.classList.remove("is-hidden")}}))})),v.innerHTML="";var y=JSON.parse(localStorage.getItem("watchedMoviesIDs"));p.classList.add("is-hidden"),y?y.forEach((function(e){a(e).then((function(e){l(e)}))})):p.classList.remove("is-hidden")}();
//# sourceMappingURL=my-library.0944d34f.js.map
