!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,i.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i),i("6Ymi3");var l=i("iETLi"),r=i("lF0Zg"),o=(i("iETLi"),i("lF0Zg"),i("j1lrD")),a=document.querySelector(".scroll__link"),s=document.querySelector(".scroll__wrapper"),c=document.querySelector("body");a.addEventListener("click",(function(e){e.preventDefault(),c.scrollIntoView({behavior:"smooth",block:"start"})})),window.onscroll=function(){window.scrollY>300?s.classList.remove("scroll__isHiden"):s.classList.add("scroll__isHiden")};o=i("j1lrD"),l=i("iETLi"),r=i("lF0Zg");var u,d=document.querySelector(".form"),p=document.querySelector(".input"),g=document.querySelector(".notif");document.querySelector(".list");d.addEventListener("submit",(function(e){e.preventDefault(),u=p.value,console.log(u),(0,l.requesterApi)(u,1).then((function(e){if(e.results.length>1)return m(e.page,e.total_pages),void(0,r.renderHomeCards)(e.results);g.classList.remove("visually-hidden")}))}));var _=1,f=document.querySelector(".pagination");function m(e,t){var n="",i=e+1,l=e+2,r=e-1;_=e,t,e>1&&(n+="<li class='arrow'><</li>"),e>1&&(n+="<li class='pagination__link pagination__link--first'>1</li>"),e>4&&(n+="<li class='pagination__link--point'>...</li>"),e>3&&(n+="<li class='pagination__link'>".concat(e-2,"</li>")),e>2&&(n+="<li class='pagination__link'>".concat(r,"</li>")),n+="<li class='pagination__link--active'>".concat(e,"</li>"),t-1>e&&(n+="<li class='pagination__link'>".concat(i,"</li>")),t-2>e&&(n+="<li class='pagination__link'>".concat(l,"</li>")),t-3>e&&(n+="<li class='pagination__link--point'>...</li>"),t>e&&(n+="<li class='pagination__link pagination__link--last'>".concat(t,"</li>"),n+="<li class='arrow'>><li>"),f.innerHTML=n}f.addEventListener("click",(function(e){if(console.log(e.target.textContent),"LI"!==e.target.nodeName)return;if("..."===e.target.textContent)return;"<"===e.target.textContent&&(_=_-=1,(0,l.requesterApi)(u,_).then((function(e){m(e.page,e.total_pages),(0,r.renderHomeCards)(e.results)})));">"===e.target.textContent&&(_=_+=1,(0,l.requesterApi)(u,_).then((function(e){(0,o.spinner)(),m(e.page,e.total_pages),(0,r.renderHomeCards)(e.results)})));">"!==e.target.textContent&&"<"!==e.target.textContent&&(_=e.target.textContent,(0,l.requesterApi)(u,_).then((function(e){m(e.page,e.total_pages),(0,r.renderHomeCards)(e.results)})))})),i("5y4IR"),i("j1lrD"),i("ghnK3"),i("98NyC"),(0,l.requesterApiGenres)(),(0,l.requesterApi)().then((function(e){(0,r.renderHomeCards)(e.results),m(e.page,e.total_pages)}))}();
//# sourceMappingURL=index.9b1c2922.js.map
