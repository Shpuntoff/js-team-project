function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},n.parcelRequired7c6=r),r.register("kyEFX",(function(t,n){var o,i;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var r={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},i=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"5ZPII":"index.b7417d2a.js","iHCDC":"noposter.9c466f47.jpg"}'));function l(e="",t=1){let n=`https://api.themoviedb.org/3/trending/movie/week?api_key=1e7c9642f723687d0411097a32c8e17f&page=${t}&language=en-US`;return e&&(n=`https://api.themoviedb.org/3/search/movie?api_key=1e7c9642f723687d0411097a32c8e17f&query=${e}&page=${t}&language=en-US`),fetch(n).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>e)).catch((e=>console.log(e)))}function a(e){return fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=1e7c9642f723687d0411097a32c8e17f&language=en-US`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>e)).catch((e=>console.log(e)))}function s(e){document.querySelector(".list").innerHTML=e.reduce(((e,{id:t,poster_path:n,name:o,title:i,release_date:r,genre_ids:l})=>{const a=[];return JSON.parse(localStorage.getItem("genresList")).forEach((e=>{l.includes(e.id)&&a.push(e.name)})),e+`<li class="item" id="${t}">\n                        <div class="photo__wrapper">\n                            <a class="img__link" href="#">\n                                <img class="img" src="https://image.tmdb.org/t/p/w500/${n}" alt="" width="395"">\n                            </a>\n                        </div>\n                        <div class="data__content">\n                            <h2 class="title">${o||i}</h2>\n                            <p  class="text">${a.join(", ")} | ${r?r.slice(0,4):2022}</p>\n                        </div>\n                    </li>`}),"")}let c,d=1;const u=document.querySelector(".pagination");function m(e,t){let n="";d=e,c=t,e>1&&(n+="<li class='arrow'>&#129144;</li>"),e>1&&(n+="<li class='pagination__link pagination__link--first'>1</li>"),e>4&&(n+="<li class='pagination__link--point'>...</li>"),e>3&&(n+=`<li class='pagination__link'>${e-2}</li>`),e>2&&(n+=`<li class='pagination__link'>${e-1}</li>`),n+=`<li class='pagination__link--active'>${e}</li>`,t-1>e&&(n+=`<li class='pagination__link'>${e+1}</li>`),t-2>e&&(n+=`<li class='pagination__link'>${e+2}</li>`),t-3>e&&(n+="<li class='pagination__link--point'>...</li>"),t>e&&(n+=`<li class='pagination__link pagination__link--last'>${t}</li>`,n+="<li class='arrow'>&#129146;<li>"),u.innerHTML=n}u.addEventListener("click",(function(e){if("LI"!==e.target.nodeName)return;if("..."===e.target.textContent)return;"🡸"===e.target.textContent&&(d=d-=1,l("",d).then((e=>{m(e.page,e.total_pages),s(e.results)})));"🡺"===e.target.textContent&&(d=d+=1,l("",d).then((e=>{m(e.page,e.total_pages),s(e.results)})));"🡺"!==e.target.textContent&&"🡸"!==e.target.textContent&&(d=e.target.textContent,l("",d).then((e=>{m(e.page,e.total_pages),s(e.results)})))}));const f=document.querySelector(".btn-theme"),g=document.querySelector("body");document.querySelector(".theme-light"),document.querySelector(".theme-night");f.addEventListener("click",(function(e){e.preventDefault(),g.classList.contains("dark-theme")?(g.classList.remove("dark-theme"),g.classList.add("light-theme"),localStorage.setItem("theme","light-theme")):(g.classList.remove("light-theme"),g.classList.add("dark-theme"),localStorage.setItem("theme","dark-theme"))})),"dark-theme"===localStorage.getItem("theme")&&g.classList.add("dark-theme"),"light-theme"===localStorage.getItem("theme")&&g.classList.add("light-theme");const h=document.querySelector(".scroll__link"),v=document.querySelector(".scroll__wrapper"),p=document.querySelector("body");h.addEventListener("click",(function(e){e.preventDefault(),p.scrollIntoView({behavior:"smooth",block:"start"})})),window.onscroll=()=>{window.scrollY>300?v.classList.remove("scroll__isHiden"):v.classList.add("scroll__isHiden")};let _=document.querySelector(".overlay");window.addEventListener("load",(()=>{_.classList.add("is-open"),setTimeout((()=>{_.remove()}),600)})),(()=>{const e=document.querySelector("[data-modal-open]"),t=document.querySelector(".team-modal__button"),n=document.querySelector(".modal-overlay"),o=document.querySelector("body");function i(){o.classList.remove("scroll-hidden"),t.removeEventListener("click",i),n.classList.add("is-hidden"),n.removeEventListener("click",i),window.removeEventListener("keydown",r)}function r(e){"Escape"===e.code&&i()}function l(e){e.currentTarget===e.target&&i()}e.addEventListener("click",(function(){n.classList.remove("is-hidden"),window.addEventListener("keydown",r),t.addEventListener("click",i),n.addEventListener("click",l),o.classList.add("scroll-hidden")}))})();var b={};b=function e(t,n,o){function i(l,a){if(!n[l]){if(!t[l]){var s=void 0;if(!a&&s)return s(l,!0);if(r)return r(l,!0);var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}var d=n[l]={exports:{}};t[l][0].call(d.exports,(function(e){return i(t[l][1][e]||e)}),d,d.exports,e,t,n,o)}return n[l].exports}for(var r=void 0,l=0;l<o.length;l++)i(o[l]);return i}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},i=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},r=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=r,n.create=function(e,t){var n=function(e,t){var n=o('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return r.appendChild(e)}));var l=i(r,"IMG"),a=i(r,"VIDEO"),s=i(r,"IFRAME");return!0===l&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===s&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),l=function(e){return!1!==t.onClose(a)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(a)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&l()}));var a={element:function(){return n},visible:function(){return r(n)},show:function(e){return!1!==t.onShow(a)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(a)}))},close:l};return a}},{}]},{},[1])(1);var w;function y({poster_path:e,title:n,original_title:o,genres:i,vote_average:r,vote_count:l,popularity:a,overview:s}){let c,d=i.map((e=>e.name));return d.length>2&&(d=`${d[0]}, ${d[1]}, Other`),c=e?`https://image.tmdb.org/t/p/original/${e}`:t(w),`<div class="movie-modal__content">\n      <img class="movie-modal__img" src="${c}" alt="${n}"></img>\n  <div class="movie-modal__text">\n    <h2 class="movie-modal__title">${n}</h2>\n      <div class="movie-modal__figures">\n      <ul class="movie-modal__properties list">\n        <li>Vote / Votes</li>\n        <li>Popularity</li>\n        <li>Original Title</li>\n        <li>Genre</li>\n      </ul>\n      <ul class="movie-modal__values list">\n        <li><span class="movie-modal__vote-average">${r.toFixed(1)}</span> / <span class="movie-modal__vote-count">${l}</span></li>\n        <li>${a.toFixed(1)}</li>\n        <li class="movie-modal__title-original">${o}</li>\n        <li>${d}</li>\n      </ul></div>\n      \n      <h3 class="movie-modal__about--title">ABOUT</h3>\n      <p class="movie-modal__about--text">${s}</p>\n      \n      <div class="modal__btns">\n        <button type="button" class="modal__btns__button js-addtowatched">add to watched</button>\n        <button type="button" class="modal__btns__button js-addtoqueue">add to queue</button>\n      </div>\n  </div>\n</div>\n    `}w=new URL(r("kyEFX").resolve("iHCDC"),import.meta.url).toString();let L=0;document.querySelector(".list").addEventListener("click",(async function(e){if(e.preventDefault(),"UL"===e.target.nodeName)return;const t=e.target.closest("li[id]");L=function(e){return e.id}(t);const n=await async function(e){try{return await a(e)}catch(e){console.log(e)}console.log(e)}(L);console.log(n),function(e){const t=y(e),n=b.create(`\n    <div class="modal">\n    <button type="button" class="movies-modal__close-btn" data-modal-close>\n    </button>\n  ${t}\n</div>\n`,{onShow:e=>{e.element().querySelector("button[data-modal-close]").onclick=e.close,window.addEventListener("keydown",o)},onClose:()=>{window.removeEventListener("keydown",o)}});function o(e){"Escape"===e.code&&n.close()}n.show()}(n),console.log(L)})),fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=1e7c9642f723687d0411097a32c8e17f&language=en-US").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{localStorage.setItem("genresList",JSON.stringify(e.genres))})).catch((e=>console.log(e))),l().then((e=>{s(e.results),m(e.page,e.total_pages)}));
//# sourceMappingURL=index.b7417d2a.js.map
