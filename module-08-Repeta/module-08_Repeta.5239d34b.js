function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var o,r,i,a,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,f=setTimeout(x,t),l?y(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function x(){var e=g();if(S(e))return T(e);f=setTimeout(x,function(e){var n=t-(e-u);return s?m(n,i-(e-c)):n}(e))}function T(e){return f=void 0,v&&o?y(e):(o=r=void 0,a)}function h(){var e=g(),n=S(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return j(u);if(s)return f=setTimeout(x,t),y(u)}return void 0===f&&(f=setTimeout(x,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},h.flush=function(){return void 0===f?a:T(g())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})},console.log("8 модуль, Репета");const y={form:document.querySelector(".js-feedback-form"),textarea:document.querySelector(".js-feedback-form textarea")};y.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-msg"),localStorage.removeItem("data-form")})),y.textarea.addEventListener("input",e(t)((function(e){const t=e.target.value;localStorage.setItem("feedback-msg",t)}),200));const j={};y.form.addEventListener("input",(e=>{j[e.target.name]=e.target.value,console.log(j),localStorage.setItem("data-form",JSON.stringify(j))})),function(){const e=localStorage.getItem("feedback-msg");JSON.parse(localStorage.getItem("data-form"));e&&(y.textarea.value=e)}();
//# sourceMappingURL=module-08_Repeta.5239d34b.js.map