var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("6ItpW"),a=o("deyUt");function s(e,t){let n;n=e.length?e.map((({id:e,img:t,name:n})=>`\n  <li data-id="${e}" class="js-card list__card">\n      <img src="${t}" alt="${n}" width='300' loading="lazy"/>\n      <h2>${n}</h2>\n      <p >\n        <a class="js-info" href="#">Більше інформації</a>\n      </p>\n      <div class="list__button">\n         <button class="js-favorite">Додати до улюбленного</button>\n        <button class="js-bascket">Додати до корзни</button>\n      </div>\n    </li>`)).join(""):"<p>Оберіть товар!</p>",t.innerHTML=n}var r=o("5GPHz"),l=o("gDU5N");console.log("8 модуль, Рисіч");const c=document.querySelector(".js-search"),d=document.querySelector(".js-list");c.addEventListener("input",(function(e){console.log("input:",e.target.value);s(i.default.filter((({name:t})=>t.toLowerCase().includes(e.target.value))),d)})),d.addEventListener("click",(function(e){if(e.preventDefault(),(0,l.selectedProduct)(e),e.target.classList.contains("js-favorite")){const t=(0,r.findProduct)(e.target);if(u.some((({id:e})=>e===t.id)))return;u.push(t),localStorage.setItem(a.common.KEY_FAVORITE,JSON.stringify(u))}if(e.target.classList.contains("js-bascket")){const t=(0,r.findProduct)(e.target);if(f.some((({id:e})=>e===t.id)))return;f.push(t),localStorage.setItem(a.common.KEY_BASKET,JSON.stringify(f))}}));const u=JSON.parse(localStorage.getItem(a.common.KEY_FAVORITE))??[],f=JSON.parse(localStorage.getItem(a.common.KEY_BASKET))??[];s(i.default,d);
//# sourceMappingURL=module-08_Rysich.0ae2b9fd.js.map
