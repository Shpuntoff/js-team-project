!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,i.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i),i("6Ymi3");var l=i("iETLi"),r=i("lF0Zg"),o=(i("iETLi"),i("lF0Zg"),i("j1lrD")),a=document.querySelector(".scroll__link"),s=document.querySelector(".scroll__wrapper"),c=document.querySelector("body");function u(e){e.preventDefault(),c.scrollIntoView({behavior:"smooth",block:"start"})}a.addEventListener("click",u),window.onscroll=function(){window.scrollY>300?s.classList.remove("scroll__isHiden"):s.classList.add("scroll__isHiden")};o=i("j1lrD"),l=i("iETLi"),r=i("lF0Zg");var d,p=document.querySelector(".form"),g=document.querySelector(".input"),_=document.querySelector(".notif");document.querySelector(".list");p.addEventListener("submit",(function(e){e.preventDefault(),d=g.value,console.log(d),(0,l.requesterApi)(d,1).then((function(e){if(e.results.length>1)return v(e.page,e.total_pages),void(0,r.renderHomeCards)(e.results);_.classList.remove("visually-hidden")}))}));var f=1,m=document.querySelector(".pagination");function v(e,t){var n="",i=e+1,l=e+2,r=e-1;f=e,t,e>1&&(n+="<li class='arrow'><</li>"),e>1&&(n+="<li class='pagination__link pagination__link--first'>1</li>"),e>4&&(n+="<li class='pagination__link--point'>...</li>"),e>3&&(n+="<li class='pagination__link'>".concat(e-2,"</li>")),e>2&&(n+="<li class='pagination__link'>".concat(r,"</li>")),n+="<li class='pagination__link--active'>".concat(e,"</li>"),t-1>e&&(n+="<li class='pagination__link'>".concat(i,"</li>")),t-2>e&&(n+="<li class='pagination__link'>".concat(l,"</li>")),t-3>e&&(n+="<li class='pagination__link--point'>...</li>"),t>e&&(n+="<li class='pagination__link pagination__link--last'>".concat(t,"</li>"),n+="<li class='arrow'>><li>"),m.innerHTML=n}m.addEventListener("click",(function(e){if(console.log(e.target.textContent),"LI"!==e.target.nodeName)return;if("..."===e.target.textContent)return;"<"===e.target.textContent&&(f=f-=1,(0,l.requesterApi)(d,f).then((function(t){v(t.page,t.total_pages),(0,r.renderHomeCards)(t.results),u(e)})));">"===e.target.textContent&&(f=f+=1,(0,l.requesterApi)(d,f).then((function(t){(0,o.spinner)(),v(t.page,t.total_pages),(0,r.renderHomeCards)(t.results),u(e)})));">"!==e.target.textContent&&"<"!==e.target.textContent&&(f=e.target.textContent,(0,l.requesterApi)(d,f).then((function(t){v(t.page,t.total_pages),(0,r.renderHomeCards)(t.results),u(e)})))})),i("5y4IR"),i("j1lrD"),i("ghnK3"),i("98NyC"),(0,l.requesterApiGenres)(),(0,l.requesterApi)().then((function(e){(0,r.renderHomeCards)(e.results),v(e.page,e.total_pages)}))}();
//# sourceMappingURL=index.82809b02.js.map
