var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,i.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i);var l=i("1x4B6"),r=i("1dkLo"),s=i("04jNI");i("1x4B6"),i("04jNI"),i("1dkLo");const o=document.querySelector(".scroll__link"),a=document.querySelector(".scroll__wrapper"),d=document.querySelector("body");function c(e){e.preventDefault(),d.scrollIntoView({behavior:"smooth",block:"start"})}o.addEventListener("click",c),window.onscroll=()=>{window.scrollY>300?a.classList.remove("scroll__isHiden"):a.classList.add("scroll__isHiden")};s=i("04jNI"),l=i("1x4B6"),r=i("1dkLo");const u=document.querySelector(".form"),p=document.querySelector(".input"),g=document.querySelector(".notif"),_=(document.querySelector(".list"),document.querySelector(".backdrop-enter-field"));document.querySelector(".pagination");let f;u.addEventListener("submit",(e=>{e.preventDefault(),f=p.value,f.length<1?(g.textContent="Enter field",g.classList.remove("visually-hidden"),timerId=setInterval((()=>{g.classList.add("visually-hidden")}),5e3)):(0,l.requesterApi)(f,1).then((e=>{if(!(e.results.length<1))return g.classList.add("visually-hidden"),_.classList.add("visually-hidden"),h(e.page,e.total_pages),(0,r.renderHomeCards)(e.results),void(0,s.spinnerStop)();_.classList.remove("visually-hidden"),g.textContent="Search result not successful. Enter the correct movie name and",g.classList.remove("visually-hidden"),timerId=setInterval((()=>{g.classList.add("visually-hidden"),_.classList.add("visually-hidden")}),3e3),(0,s.spinnerStop)()}))}));let v,m=1;const y=document.querySelector(".pagination");function h(e,t){let n="";m=e,v=t,e>1&&(n+="<li class='arrow'><</li>"),e>1&&(n+="<li class='pagination__link pagination__link--first'>1</li>"),e>4&&(n+="<li class='pagination__link--point'>...</li>"),e>3&&(n+=`<li class='pagination__link'>${e-2}</li>`),e>2&&(n+=`<li class='pagination__link'>${e-1}</li>`),n+=`<li class='pagination__link--active'>${e}</li>`,t-1>e&&(n+=`<li class='pagination__link'>${e+1}</li>`),t-2>e&&(n+=`<li class='pagination__link'>${e+2}</li>`),t-3>e&&(n+="<li class='pagination__link--point'>...</li>"),t>e&&(n+=`<li class='pagination__link pagination__link--last'>${t}</li>`,n+="<li class='arrow'>><li>"),y.innerHTML=n}y.addEventListener("click",(function(e){if(console.log(e.target.textContent),"LI"!==e.target.nodeName)return;if("..."===e.target.textContent)return;"<"===e.target.textContent&&(m=m-=1,(0,l.requesterApi)(f,m).then((t=>{h(t.page,t.total_pages),(0,r.renderHomeCards)(t.results),c(e),(0,s.spinnerStop)()})));">"===e.target.textContent&&(m=m+=1,(0,l.requesterApi)(f,m).then((t=>{h(t.page,t.total_pages),(0,r.renderHomeCards)(t.results),c(e),(0,s.spinnerStop)()})));">"!==e.target.textContent&&"<"!==e.target.textContent&&(m=e.target.textContent,(0,l.requesterApi)(f,m).then((t=>{h(t.page,t.total_pages),(0,r.renderHomeCards)(t.results),c(e),(0,s.spinnerStop)()})))})),i("rKdV3"),i("baGT8"),i("e14ir"),(0,l.requesterApiGenres)(),(0,l.requesterApi)().then((e=>{(0,r.renderHomeCards)(e.results),h(e.page,e.total_pages),(0,s.spinnerStop)()}));
//# sourceMappingURL=index.4304730a.js.map
