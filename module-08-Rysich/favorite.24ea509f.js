var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var i=o("deyUt"),s=o("gDU5N"),a=o("5GPHz");const r=document.querySelector(".js-list"),l=document.querySelector(".js-search");r.addEventListener("click",(function(e){if(e.preventDefault(),(0,s.selectedProduct)(e),e.target.classList.contains("js-bascket")){const t=(0,a.findProduct)(e.target);if(c.some((({id:e})=>e===t.id)))return;c.push(t),localStorage.setItem(i.common.KEY_BASKET,JSON.stringify(c))}if(e.target.classList.contains("js-favorite-delete")){const t=Number(e.target.closest(".js-card").dataset.id),n=d.find((({id:e})=>e===t)),o=d.indexOf(n);d.splice(o,1);localStorage.removeItem(i.common.KEY_FAVORITE),localStorage.setItem(i.common.KEY_FAVORITE,JSON.stringify(d)),u(d)}})),l.addEventListener("input",(function(e){u(d.filter((({name:t})=>t.toLowerCase().includes(e.target.value))))}));const c=JSON.parse(localStorage.getItem(i.common.KEY_BASKET))??[],d=JSON.parse(localStorage.getItem(i.common.KEY_FAVORITE))??[];function u(e){let t;t=e.length?e.map((({id:e,img:t,name:n})=>`\n  <li data-id="${e}" class="js-card list__card">\n      <img src="${t}" alt="${n}" width='300' loading="lazy"/>\n      <h2>${n}</h2>\n      <p >\n        <a class="js-info" href="#">Більше інформації</a>\n      </p>\n      <div class="list__button">\n        <button class="js-favorite-delete">Видалити з улюбленного</button>\n        <button class="js-bascket">Додати до корзни</button>\n      </div>\n    </li>`)).join(""):"<p>Оберіть товар!</p>",r.innerHTML=t}u(d);
//# sourceMappingURL=favorite.24ea509f.js.map
