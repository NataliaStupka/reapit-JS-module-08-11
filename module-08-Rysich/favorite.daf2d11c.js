!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r,a=o("kiqhF"),i=o("d7EWo"),c=o("gLtFn"),s=document.querySelector(".js-list"),l=document.querySelector(".js-search");s.addEventListener("click",(function(e){if(e.preventDefault(),(0,i.selectedProduct)(e),e.target.classList.contains("js-bascket")){var t=(0,c.findProduct)(e.target);if(u.some((function(e){return e.id===t.id})))return;u.push(t),localStorage.setItem(a.common.KEY_BASKET,JSON.stringify(u))}if(e.target.classList.contains("js-favorite-delete")){var n=Number(e.target.closest(".js-card").dataset.id),o=f.find((function(e){return e.id===n})),r=f.indexOf(o);f.splice(r,1);localStorage.removeItem(a.common.KEY_FAVORITE),localStorage.setItem(a.common.KEY_FAVORITE,JSON.stringify(f)),m(f)}})),l.addEventListener("input",(function(e){m(f.filter((function(t){return t.name.toLowerCase().includes(e.target.value)})))}));var d,u=null!==(r=JSON.parse(localStorage.getItem(a.common.KEY_BASKET)))&&void 0!==r?r:[],f=null!==(d=JSON.parse(localStorage.getItem(a.common.KEY_FAVORITE)))&&void 0!==d?d:[];function m(e){var t;t=e.length?e.map((function(e){var t=e.id,n=e.img,o=e.name;return'\n  <li data-id="'.concat(t,'" class="js-card list__card">\n      <img src="').concat(n,'" alt="').concat(o,'" width=\'300\' loading="lazy"/>\n      <h2>').concat(o,'</h2>\n      <p >\n        <a class="js-info" href="#">Більше інформації</a>\n      </p>\n      <div class="list__button">\n        <button class="js-favorite-delete">Видалити з улюбленного</button>\n        <button class="js-bascket">Додати до корзни</button>\n      </div>\n    </li>')})).join(""):"<p>Оберіть товар!</p>",s.innerHTML=t}m(f)}();
//# sourceMappingURL=favorite.daf2d11c.js.map