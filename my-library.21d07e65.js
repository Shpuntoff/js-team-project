!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return r[e]=i,n.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){t[e]=r},e.parcelRequired7c6=n);var i=n("iETLi"),o=n("lF0Zg");n("ghnK3"),n("98NyC");var a=document.querySelectorAll(".header-library__btn"),s=document.querySelector(".list"),c=document.querySelector(".wrapper-holder");(0,i.requesterApiGenres)(),a.forEach((function(e){e.addEventListener("click",(function(r){if(e.classList.contains("header-library__btn--active")||a.forEach((function(e){e.classList.toggle("header-library__btn--active")})),c.classList.add("is-hidden"),"Watched"===r.target.textContent){s.innerHTML="";var t=JSON.parse(localStorage.getItem("watchedMoviesIDs"));t&&t[0]?t.forEach((function(e){(0,i.requesterApiByID)(e).then((function(e){(0,o.renderWatchedOrQueue)(e)}))})):c.classList.remove("is-hidden")}else if("Queue"===r.target.textContent){s.innerHTML="";var n=JSON.parse(localStorage.getItem("queueMoviesIDs"));n&&n[0]?n.forEach((function(e){(0,i.requesterApiByID)(e).then((function(e){(0,o.renderWatchedOrQueue)(e)}))})):c.classList.remove("is-hidden")}}))})),s.innerHTML="";var d=JSON.parse(localStorage.getItem("watchedMoviesIDs"));d&&d[0]?d.forEach((function(e){(0,i.requesterApiByID)(e).then((function(e){(0,o.renderWatchedOrQueue)(e)}))})):c.classList.remove("is-hidden")}();
//# sourceMappingURL=my-library.21d07e65.js.map
