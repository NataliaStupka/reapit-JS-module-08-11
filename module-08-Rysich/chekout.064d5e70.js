function t(t,n,e,o){Object.defineProperty(t,n,{get:e,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},o={},r=n.parcelRequired7c6;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in o){var n=o[t];delete o[t];var r={id:t,exports:{}};return e[t]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,n){o[t]=n},n.parcelRequired7c6=r),r.register("deyUt",(function(n,e){t(n.exports,"common",(function(){return o}));const o={KEY_FAVORITE:"favorite",KEY_BASKET:"basket"}})),r.register("gDU5N",(function(n,e){t(n.exports,"selectedProduct",(function(){return c}));var o=r("5GPHz"),i=r("8JGMo");function c(t){if(t.target.classList.contains("js-info")){const n=(0,o.findProduct)(t.target);(0,i.createModal)(n)}}})),r.register("5GPHz",(function(n,e){t(n.exports,"findProduct",(function(){return i}));var o=r("6ItpW");function i(t){const n=Number(t.closest(".js-card").dataset.id);return o.default.find((({id:t})=>t===n))}})),r.register("6ItpW",(function(n,e){t(n.exports,"default",(function(){return o}));var o=[{id:1,img:"https://static.dnipro-m.ua/cache/products/4878/catalog_origin_325618.jpg",name:"Шуруповерт",price:1500,description:"Мережевий дриль-шуруповерт TD-30 — надійний помічник для робіт по дому та в невеликій майстерні, якщо необхідно виконувати роботу переважно з закручування кріпильних елементів. Муфта регулювання крутного моменту робить інструмент універсальним вибором як для свердління, так і для роботи з кріпленнями."},{id:2,img:"https://static.dnipro-m.ua/cache/products/5097/catalog_origin_321403.jpg",name:"Перфоратор",price:3948,description:"Перфоратор бочковий Dnipro-M ВН-20 використовується для виконання широкого спектру будівельних і ремонтних робіт: буріння та свердління отворів, розмішування будівельних сумішей, демонтажу і т.д."},{id:3,img:"https://static.dnipro-m.ua/cache/products/1335/catalog_origin_325102.jpg",name:"Шліфмашина",price:1299,description:"Кутова шліфувальна машина Dnipro-M GS-98 – модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування."},{id:4,img:"https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі."},{id:5,img:"https://static.dnipro-m.ua/cache/products/2020/catalog_origin_323411.jpg",name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації."},{id:6,img:"https://static.dnipro-m.ua/cache/products/5408/catalog_origin_322440.jpg",name:"Тример",price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу густої трави, а також кущів з діаметром стовбура до 10 мм."},{id:7,img:"https://static.dnipro-m.ua/cache/products/6483/catalog_origin_325859.jpg",name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бур'янів, газонів, а також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2."},{id:8,img:"https://static.dnipro-m.ua/cache/products/2741/catalog_origin_318327.jpg",name:"Генератор",price:10890,description:"Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос."}]})),r.register("8JGMo",(function(n,e){t(n.exports,"createModal",(function(){return c}));var o=r("9B8F0"),i=r("ah4Az");function c(t){o.create(`\n\t <div class="modal">\n      <img src="${t.img}" alt="${t.name}" width="200"/>\n      <h2>${t.name}</h2>\n      <h3>${t.price} грн</h3>\n      <p>${t.description}</p>\n        <div>\n        <button class="js-favorite">Add to favorite</button>\n        <button class="js-bascket">Add to basket</button>\n      </div>\n    </div>\n`,{handler:null,onShow(t){this.handler=i.closeModal.bind(t),document.addEventListener("keydown",this.handler)},onClose(){document.removeEventListener("keydown",this.handler)}}).show()}})),r.register("9B8F0",(function(t,n){t.exports=function t(n,e,o){function r(c,a){if(!e[c]){if(!n[c]){var s=void 0;if(!a&&s)return s(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var d=e[c]={exports:{}};n[c][0].call(d.exports,(function(t){return r(n[c][1][t]||t)}),d,d.exports,t,n,e,o)}return e[c].exports}for(var i=void 0,c=0;c<o.length;c++)r(o[c]);return r}({1:[function(t,n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.create=e.visible=void 0;var o=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=document.createElement("div");return e.innerHTML=t.trim(),!0===n?e.children:e.firstChild},r=function(t,n){var e=t.children;return 1===e.length&&e[0].tagName===n},i=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};e.visible=i,e.create=function(t,n){var e=function(t,n){var e=o('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=e.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return i.appendChild(t)}));var c=r(i,"IMG"),a=r(i,"VIDEO"),s=r(i,"IFRAME");return!0===c&&e.classList.add("basicLightbox--img"),!0===a&&e.classList.add("basicLightbox--video"),!0===s&&e.classList.add("basicLightbox--iframe"),e}(t=function(t){var n="string"==typeof t,e=t instanceof HTMLElement==1;if(!1===n&&!1===e)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(o(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(n)),c=function(t){return!1!==n.onClose(a)&&function(t,n){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(t)||t.parentElement.removeChild(t),n()}),410),!0}(e,(function(){if("function"==typeof t)return t(a)}))};!0===n.closable&&e.addEventListener("click",(function(t){t.target===e&&c()}));var a={element:function(){return e},visible:function(){return i(e)},show:function(t){return!1!==n.onShow(a)&&function(t,n){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),n()}))}),10),!0}(e,(function(){if("function"==typeof t)return t(a)}))},close:c};return a}},{}]},{},[1])(1)})),r.register("ah4Az",(function(n,e){function o(t){"Escape"===t.code&&this.close()}t(n.exports,"closeModal",(function(){return o}))}));
//# sourceMappingURL=chekout.064d5e70.js.map