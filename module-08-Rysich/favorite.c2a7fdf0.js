!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},o=t.parcelRequired7c6;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var a={id:t,exports:{}};return e[t]=a,o.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},t.parcelRequired7c6=o);var a,i=o("kiqhF"),r=o("d7EWo"),c=o("gLtFn"),l=document.querySelector(".js-list");l.addEventListener("click",(function(t){if(t.preventDefault(),(0,r.selectedProduct)(t),t.target.classList.contains("js-bascket")){var e=(0,c.findProduct)(t.target);if(d.some((function(t){return t.id===e.id})))return;d.push(e),localStorage.setItem(i.common.KEY_BASKET,JSON.stringify(d))}if(t.target.classList.contains("js-favorite-delete")){var n=Number(t.target.closest(".js-card").dataset.id),o=u.find((function(t){return t.id===n})),a=u.indexOf(o);u.splice(a,1);localStorage.removeItem(i.common.KEY_FAVORITE),localStorage.setItem(i.common.KEY_FAVORITE,JSON.stringify(u)),f(u)}}));var s,d=null!==(a=JSON.parse(localStorage.getItem(i.common.KEY_BASKET)))&&void 0!==a?a:[],u=null!==(s=JSON.parse(localStorage.getItem(i.common.KEY_FAVORITE)))&&void 0!==s?s:[];function f(t){var e;e=t.length?t.map((function(t){var e=t.id,n=t.img,o=t.name;return'\n  <li data-id="'.concat(e,'" class="js-card list__card">\n      <img src="').concat(n,'" alt="').concat(o,'" width=\'300\' loading="lazy"/>\n      <h2>').concat(o,'</h2>\n      <p >\n        <a class="js-info" href="#">Більше інформації</a>\n      </p>\n      <div class="list__button">\n        <button class="js-favorite-delete">"ЗРОБИТИ" - Видалити з улюбленного</button>\n        <button class="js-bascket">Додати до корзни</button>\n      </div>\n    </li>')})).join(""):"<p>Оберіть товар!</p>",l.innerHTML=e}f(u)}();
//# sourceMappingURL=favorite.c2a7fdf0.js.map