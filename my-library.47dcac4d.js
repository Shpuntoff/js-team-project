var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return r[e]=i,n.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){t[e]=r},e.parcelRequired7c6=n);var i=n("1x4B6"),o=n("1dkLo");n("baGT8"),n("e14ir");const a=document.querySelectorAll(".header-library__btn"),s=document.querySelector(".list"),d=document.querySelector(".wrapper-holder");(0,i.requesterApiGenres)(),a.forEach((e=>{e.addEventListener("click",(r=>{if(e.classList.contains("header-library__btn--active")||a.forEach((e=>{e.classList.toggle("header-library__btn--active")})),d.classList.add("is-hidden"),"Watched"===r.target.textContent){s.innerHTML="";const e=JSON.parse(localStorage.getItem("watchedMoviesIDs"));e&&e[0]?e.forEach((e=>{(0,i.requesterApiByID)(e).then((e=>{(0,o.renderWatchedOrQueue)(e)}))})):d.classList.remove("is-hidden")}else if("Queue"===r.target.textContent){s.innerHTML="";const e=JSON.parse(localStorage.getItem("queueMoviesIDs"));e&&e[0]?e.forEach((e=>{(0,i.requesterApiByID)(e).then((e=>{(0,o.renderWatchedOrQueue)(e)}))})):d.classList.remove("is-hidden")}}))})),s.innerHTML="";const c=JSON.parse(localStorage.getItem("watchedMoviesIDs"));c&&c[0]?c.forEach((e=>{(0,i.requesterApiByID)(e).then((e=>{(0,o.renderWatchedOrQueue)(e)}))})):d.classList.remove("is-hidden");
//# sourceMappingURL=my-library.47dcac4d.js.map
