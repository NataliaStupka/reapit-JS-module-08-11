!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){return a.default(e)||l.default(e)||i.default(e)||c.default()};var a=d(o("kMC0W")),l=d(o("7AJDX")),c=d(o("8CtQK")),i=d(o("auk6i"));function d(e){return e&&e.__esModule?e:{default:e}}console.log("Module-09-Rysich");var s=document.querySelector(".date-day"),f=document.querySelector(".date"),y=document.querySelector(".date-month"),p=document.querySelector(".date-year"),m=document.querySelector(".digital-clock"),g=document.querySelector(".clock-seconds__arrow"),v=document.querySelector(".clock-minutes__arrow"),_=document.querySelector(".clock-hours__arrow"),S=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],x=["Неділя","Понеділок","Вівторок","Середа","Четвер","П`ятниця","Субота"];setInterval((function(){var e=new Date,t=x[e.getDay()],r=e.getDate(),n=S[e.getMonth()],o=e.getFullYear(),u=e.getHours(),a=e.getMinutes(),l=e.getSeconds(),c=6*l,i=6*a,d=30*u+.5*a,h="".concat(u.toString().padStart(2,"0")," : ").concat(a.toString().padStart(2,"0")," : ").concat(l.toString().padStart(2,"0"));s.textContent=t,f.textContent=r,y.textContent=n,p.textContent=o,m.textContent="Поточний час: ".concat(h),g.style.transform="rotate(".concat(c,"deg)"),v.style.transform="rotate(".concat(i,"deg)"),_.style.transform="rotate(".concat(d,"deg)")}),1e3);var h=document.querySelector(".js-box"),b=document.querySelector(".js-timer"),M=4;setTimeout((function(){h.style.display="block";var e=setInterval((function(){M-=1,b.textContent=M+"s",M||(clearInterval(e),h.style.display="none")}),1e3)}),2e3);var q=document.querySelector(".js-start"),w=document.querySelector(".js-container");q.addEventListener("click",(function(){var t=0;e(u)(w.children).forEach((function(e){return e.textContent=""}));var r=e(u)(w.children).map((function(e,t){return new Promise((function(e,t){Math.random()>.5?e("🤑"):t("😈")}))}));Promise.allSettled(r).then((function(e){e.forEach((function(e,r){setTimeout((function(){"fulfilled"===e.status&&(t+=1),w.children[r].textContent=e.value||e.reason,w.children.length-1===r&&setTimeout((function(){t!==w.children.length&&t?alert("Lost money"):alert("Winner")}),500)}),1e3*r)}))}))}))}();
//# sourceMappingURL=module-09-Rysich.4936cfec.js.map
