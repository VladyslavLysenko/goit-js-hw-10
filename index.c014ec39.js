!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(n){return n&&n.__esModule?n.default:n}var e={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(n){return n&&n.constructor===Symbol?"symbol":typeof n};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),d=Object.prototype.toString,p=Math.max,v=Math.min,y=function(){return s.Date.now()};function g(n){var e=void 0===n?"undefined":t(o)(n);return!!n&&("object"==e||"function"==e)}function m(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":t(o)(n))||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==d.call(n)}(n))return NaN;if(g(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=g(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(i,"");var f=a.test(n);return f||u.test(n)?c(n.slice(2),f?2:8):r.test(n)?NaN:+n}e=function(n,t,e){var o,i,r,a,u,c,f=0,l=!1,s=!1,d=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function b(t){var e=o,r=i;return o=i=void 0,f=t,a=n.apply(r,e)}function h(n){return f=n,u=setTimeout(w,t),l?b(n):a}function j(n){var e=n-c;return void 0===c||e>=t||e<0||s&&n-f>=r}function w(){var n=y();if(j(n))return T(n);u=setTimeout(w,function(n){var e=t-(n-c);return s?v(e,r-(n-f)):e}(n))}function T(n){return u=void 0,d&&o?b(n):(o=i=void 0,a)}function O(){var n=y(),e=j(n);if(o=arguments,i=this,c=n,e){if(void 0===u)return h(c);if(s)return u=setTimeout(w,t),b(c)}return void 0===u&&(u=setTimeout(w,t)),a}return t=m(t)||0,g(e)&&(l=!!e.leading,r=(s="maxWait"in e)?p(m(e.maxWait)||0,t):r,d="trailing"in e?!!e.trailing:d),O.cancel=function(){void 0!==u&&clearTimeout(u),f=0,o=c=i=u=void 0},O.flush=function(){return void 0===u?a:T(y())},O};var b=document.querySelector("#search-box"),h=(document.querySelector(".country-list"),document.querySelector(".country-info"));b.addEventListener("input",e((function(n){var t=b.value.toLowerCase();fetch("https://restcountries.com/v2//name/".concat(t,"?fields=name,capital,population,flags,languages")).then((function(n){if(!n.ok)throw new Error;return n.json()})).then((function(n){var t=n.map((function(n){return'<li>\n    <img src="'.concat(n.flags.svg,'" alt="flag\'s ').concat(n.name,'">\n    <h2 class="Country">').concat(n.name,'</h2>\n    <span class="Capital">').concat(n.capital,'</span>\n    <span class="Population">').concat(n.population,'</span>\n    <span class="Languages">').concat(n.languages[0].nativeName,"</span>\n    </li>")})).join("");h.innerHTML=t,console.log(t)})).catch((function(n){return console.log(n)}))}),3e3,{leading:!1,trailing:!0}))}();
//# sourceMappingURL=index.c014ec39.js.map