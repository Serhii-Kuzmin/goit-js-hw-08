function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("cJAFW",(function(t,r){var n=o("8zd4h");const i=document.querySelector(".feedback-form"),a=i.querySelector('input[name="email"]'),u=i.querySelector('textarea[name="message"]'),c="feedback-form-state",f=localStorage.getItem(c);if(f)try{const{email:e,message:t}=JSON.parse(f);a.value=e,u.value=t}catch(e){console.error("Error parsing stored data:",e)}i.addEventListener("input",e(n)((()=>{const e={email:a.value,message:u.value};localStorage.setItem(c,JSON.stringify(e))}),500)),i.addEventListener("submit",(()=>{localStorage.removeItem(c);const e={email:a.value,message:u.value};console.log("Form data submitted:",e)}))})),o.register("8zd4h",(function(e,t){var r=o("hp3zx"),n=o("jDBle");e.exports=function(e,t,o){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return n(o)&&(i="leading"in o?!!o.leading:i,a="trailing"in o?!!o.trailing:a),r(e,t,{leading:i,maxWait:t,trailing:a})}})),o.register("hp3zx",(function(e,t){var r=o("jDBle"),n=o("iwgW6"),i=o("cLvIx"),a=Math.max,u=Math.min;e.exports=function(e,t,o){var c,f,s,l,v,d,p=0,g=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function x(t){var r=c,n=f;return c=f=void 0,p=t,l=e.apply(n,r)}function y(e){return p=e,v=setTimeout(j,t),g?x(e):l}function h(e){var r=e-d;return void 0===d||r>=t||r<0||m&&e-p>=s}function j(){var e=n();if(h(e))return w(e);v=setTimeout(j,function(e){var r=t-(e-d);return m?u(r,s-(e-p)):r}(e))}function w(e){return v=void 0,b&&c?x(e):(c=f=void 0,l)}function O(){var e=n(),r=h(e);if(c=arguments,f=this,d=e,r){if(void 0===v)return y(d);if(m)return clearTimeout(v),v=setTimeout(j,t),x(d)}return void 0===v&&(v=setTimeout(j,t)),l}return t=i(t)||0,r(o)&&(g=!!o.leading,s=(m="maxWait"in o)?a(i(o.maxWait)||0,t):s,b="trailing"in o?!!o.trailing:b),O.cancel=function(){void 0!==v&&clearTimeout(v),p=0,c=d=f=v=void 0},O.flush=function(){return void 0===v?l:w(n())},O}})),o.register("jDBle",(function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}})),o.register("iwgW6",(function(e,t){var r=o("dnnhb");e.exports=function(){return r.Date.now()}})),o.register("dnnhb",(function(e,t){var r=o("8vz42"),n="object"==typeof self&&self&&self.Object===Object&&self,i=r||n||Function("return this")();e.exports=i})),o.register("8vz42",(function(e,r){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n})),o.register("cLvIx",(function(e,t){var r=o("h2wuc"),n=o("jDBle"),i=o("5Kbc5"),a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var o=u.test(e);return o||c.test(e)?f(e.slice(2),o?2:8):a.test(e)?NaN:+e}})),o.register("h2wuc",(function(e,t){var r=o("207jj"),n=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(n,""):e}})),o.register("207jj",(function(e,t){var r=/\s/;e.exports=function(e){for(var t=e.length;t--&&r.test(e.charAt(t)););return t}})),o.register("5Kbc5",(function(e,t){var r=o("4VDrK"),n=o("6oZwd");e.exports=function(e){return"symbol"==typeof e||n(e)&&"[object Symbol]"==r(e)}})),o.register("4VDrK",(function(e,t){var r=o("339hG"),n=o("aZswa"),i=o("bD5ZI"),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?n(e):i(e)}})),o.register("339hG",(function(e,t){var r=o("dnnhb").Symbol;e.exports=r})),o.register("aZswa",(function(e,t){var r=o("339hG"),n=Object.prototype,i=n.hasOwnProperty,a=n.toString,u=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,u),r=e[u];try{e[u]=void 0;var n=!0}catch(e){}var o=a.call(e);return n&&(t?e[u]=r:delete e[u]),o}})),o.register("bD5ZI",(function(e,t){var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}})),o.register("6oZwd",(function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}})),o("cJAFW");
//# sourceMappingURL=03-feedback.90a0471a.js.map