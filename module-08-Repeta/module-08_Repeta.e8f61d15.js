!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var r,i,a,u,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function S(e){return l=e,f=setTimeout(O,t),d?b(e):u}function x(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function O(){var e=p();if(x(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-c);return s?g(n,a-(e-l)):n}(e))}function T(e){return f=void 0,v&&r?b(e):(r=i=void 0,u)}function h(){var e=p(),n=x(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return S(c);if(s)return f=setTimeout(O,t),b(c)}return void 0===f&&(f=setTimeout(O,t)),u}return t=j(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},h.flush=function(){return void 0===f?u:T(p())},h}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})},console.log("8 модуль, Репета");var S="feedback-msg",x="data-form",O={form:document.querySelector(".js-feedback-form"),textarea:document.querySelector(".js-feedback-form textarea")};O.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(S),localStorage.removeItem(x)})),O.textarea.addEventListener("input",e(t)((function(e){var t=e.target.value;localStorage.setItem(S,t)}),200));var T={};O.form.addEventListener("input",(function(e){T[e.target.name]=e.target.value,console.log(T),localStorage.setItem(x,JSON.stringify(T))})),function(){var e=localStorage.getItem(S);JSON.parse(localStorage.getItem(x));e&&(O.textarea.value=e)}()}();
//# sourceMappingURL=module-08_Repeta.e8f61d15.js.map