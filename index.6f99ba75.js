var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},e=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,f=u||c||Function("return this")(),l=Object.prototype.toString,s=Math.max,p=Math.min,d=function(){return f.Date.now()};function v(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function g(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==l.call(n)}(n))return NaN;if(v(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=v(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(e,"");var u=i.test(n);return u||r.test(n)?a(n.slice(2),u?2:8):o.test(n)?NaN:+n}t=function(n,t,e){var o,i,r,a,u,c,f=0,l=!1,y=!1,m=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function b(t){var e=o,r=i;return o=i=void 0,f=t,a=n.apply(r,e)}function h(n){return f=n,u=setTimeout($,t),l?b(n):a}function j(n){var e=n-c;return void 0===c||e>=t||e<0||y&&n-f>=r}function $(){var n=d();if(j(n))return w(n);u=setTimeout($,function(n){var e=t-(n-c);return y?p(e,r-(n-f)):e}(n))}function w(n){return u=void 0,m&&o?b(n):(o=i=void 0,a)}function T(){var n=d(),e=j(n);if(o=arguments,i=this,c=n,e){if(void 0===u)return h(c);if(y)return u=setTimeout($,t),b(c)}return void 0===u&&(u=setTimeout($,t)),a}return t=g(t)||0,v(e)&&(l=!!e.leading,r=(y="maxWait"in e)?s(g(e.maxWait)||0,t):r,m="trailing"in e?!!e.trailing:m),T.cancel=function(){void 0!==u&&clearTimeout(u),f=0,o=c=i=u=void 0},T.flush=function(){return void 0===u?a:w(d())},T};const y=document.querySelector("#search-box"),m=(document.querySelector(".country-list"),document.querySelector(".country-info"));y.addEventListener("input",t((function(n){let t=y.value.toLowerCase();fetch(`https://restcountries.com/v2//name/${t}?fields=name,capital,population,flags,languages`).then((n=>{if(!n.ok)throw new Error;return n.json()})).then((n=>{const t=n.map((n=>`<li>\n    <img src="${n.flags.svg}" alt="flag's ${n.name}">\n    <h2 class="Country">${n.name}</h2>\n    <span class="Capital">${n.capital}</span>\n    <span class="Population">${n.population}</span>\n    <span class="Languages">${n.languages[0].nativeName}</span>\n    </li>`)).join("");m.innerHTML=t,console.log(t)})).catch((n=>console.log(n)))}),3e3,{leading:!1,trailing:!0}));
//# sourceMappingURL=index.6f99ba75.js.map