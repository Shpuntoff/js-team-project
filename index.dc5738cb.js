var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,i.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i),i("3dDql");var l=i("1x4B6"),r=i("1dkLo"),a=(l=i("1x4B6"),r=i("1dkLo"),i("04jNI"));const o=document.querySelector(".scroll__link"),s=document.querySelector(".scroll__wrapper"),c=document.querySelector("body");o.addEventListener("click",(function(e){e.preventDefault(),c.scrollIntoView({behavior:"smooth",block:"start"})})),window.onscroll=()=>{window.scrollY>300?s.classList.remove("scroll__isHiden"):s.classList.add("scroll__isHiden")};let d,p=1;const _=document.querySelector(".pagination");function u(e,t){let n="";p=e,d=t,e>1&&(n+="<li class='arrow'><</li>"),e>1&&(n+="<li class='pagination__link pagination__link--first'>1</li>"),e>4&&(n+="<li class='pagination__link--point'>...</li>"),e>3&&(n+=`<li class='pagination__link'>${e-2}</li>`),e>2&&(n+=`<li class='pagination__link'>${e-1}</li>`),n+=`<li class='pagination__link--active'>${e}</li>`,t-1>e&&(n+=`<li class='pagination__link'>${e+1}</li>`),t-2>e&&(n+=`<li class='pagination__link'>${e+2}</li>`),t-3>e&&(n+="<li class='pagination__link--point'>...</li>"),t>e&&(n+=`<li class='pagination__link pagination__link--last'>${t}</li>`,n+="<li class='arrow'>><li>"),_.innerHTML=n}_.addEventListener("click",(function(e){if("LI"!==e.target.nodeName)return;if("..."===e.target.textContent)return;"<"===e.target.textContent&&(p=p-=1,(0,l.requesterApi)("",p).then((e=>{u(e.page,e.total_pages),(0,r.renderHomeCards)(e.results)})));">"===e.target.textContent&&(p=p+=1,(0,l.requesterApi)("",p).then((e=>{(0,a.spinner)(),u(e.page,e.total_pages),(0,r.renderHomeCards)(e.results)})));">"!==e.target.textContent&&"<"!==e.target.textContent&&(p=e.target.textContent,(0,l.requesterApi)("",p).then((e=>{u(e.page,e.total_pages),(0,r.renderHomeCards)(e.results)})))})),i("rKdV3"),i("04jNI"),i("baGT8"),i("e14ir"),(0,l.requesterApiGenres)(),(0,l.requesterApi)().then((e=>{(0,r.renderHomeCards)(e.results),u(e.page,e.total_pages)}));
//# sourceMappingURL=index.dc5738cb.js.map
