var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,i.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){t[e]=n},e.parcelRequired7c6=i);var o=i("deyUt"),l=i("gDU5N");const r=document.querySelector(".js-list");r.addEventListener("click",(function(e){e.preventDefault(),(0,l.selectedProduct)(e)}));!function(e){let n;n=e.length?e.map((({id:e,img:n,name:t})=>`\n  <li data-id="${e}" class="js-card list__card">\n      <img src="${n}" alt="${t}" width='300' loading="lazy"/>\n      <h2>${t}</h2>\n      <p >\n        <a class="js-info" href="#">More information</a>\n      </p>\n      <div class="list__button">\n        \n        <button class="js-bascket">"ЗРОБИТИ" - Видалити з корзини</button>\n      </div>\n    </li>`)).join(""):"<p>Оберіть товар!</p>";r.innerHTML=n}(JSON.parse(localStorage.getItem(o.common.KEY_BASKET))??[]);
//# sourceMappingURL=chekout.266c01d3.js.map