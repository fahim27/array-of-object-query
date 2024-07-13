!function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["array-of-object-query"]=e():r["array-of-object-query"]=e()}(this,(()=>(()=>{"use strict";var r={d:(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(r,e)=>Object.prototype.hasOwnProperty.call(r,e),r:r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})}},e={};function t(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=Array(e);t<e;t++)n[t]=r[t];return n}r.r(e),r.d(e,{arrayQueries:()=>o});var n={where:function(r,e){if("string"!=typeof r)throw new TypeError("The key must be a string");if(void 0===e)throw new TypeError("The value must be defined");return this.filter((function(t){return t[r]===e}))},whereIn:function(r,e){if("string"!=typeof r)throw new TypeError("The key must be a string");if(!Array.isArray(e))throw new TypeError("The values must be an array");return this.filter((function(t){return e.includes(t[r])}))},select:function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return this.map((function(r){var t={};return e.forEach((function(e){e in r&&(t[e]=r[e])})),t}))},pluck:function(){for(var r=this,e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map((function(e){return r.map((function(r){return r[e]}))}))},orderBy:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";if("string"!=typeof r)throw new TypeError("The key must be a string");if(!["asc","desc"].includes(e))throw new TypeError('The order must be "asc" or "desc"');return this.slice().sort((function(t,n){return t[r]<n[r]?"asc"===e?-1:1:t[r]>n[r]?"asc"===e?1:-1:0}))},first:function(){return this.length>0?this[0]:void 0},last:function(){return this.length>0?this[this.length-1]:void 0},min:function(r){if("string"!=typeof r)throw new TypeError("The key must be a string");if(0!==this.length){for(var e=this[0][r],t=1;t<this.length;t++)this[t][r]<e&&(e=this[t][r]);return e}},max:function(r){if("string"!=typeof r)throw new TypeError("The key must be a string");if(0!==this.length){for(var e=this[0][r],t=1;t<this.length;t++)this[t][r]>e&&(e=this[t][r]);return e}},take:function(r){if("number"!=typeof r||r<0)throw new TypeError("Parameter n must be a non-negative number");return this.slice(0,r)},sum:function(r){if("string"!=typeof r)throw new TypeError("The key must be a string");return 0===this.length?0:this.reduce((function(e,t){if(!(r in t)||"number"!=typeof t[r])throw new TypeError("Object does not have numeric property '".concat(r,"'"));return e+Number(t[r])}),0)},groupBy:function(r){return this.reduce((function(e,t){var n=t[r];return e[n]||(e[n]=[]),e[n].push(t),e}),{})},average:function(r){if("string"!=typeof r)throw new TypeError("The key must be a string");return 0===this.length?NaN:this.reduce((function(e,t){if(!(r in t)||"number"!=typeof t[r])throw new TypeError("Object does not have numeric property '".concat(r,"'"));return e+t[r]}),0)/this.length},unique:function(r){var e=new Set;return this.filter((function(t){var n=t[r];return!e.has(n)&&(e.add(n),!0)}))},distinct:function(r){var e=new Set;return this.reduce((function(t,n){var o=n[r];return e.has(o)||(e.add(o),t.push(o)),t}),[])}};Object.entries(n).forEach((function(r){var e,n,o=(n=2,function(r){if(Array.isArray(r))return r}(e=r)||function(r,e){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var n,o,i,u,a=[],s=!0,f=!1;try{if(i=(t=t.call(r)).next,0===e){if(Object(t)!==t)return;s=!1}else for(;!(s=(n=i.call(t)).done)&&(a.push(n.value),a.length!==e);s=!0);}catch(r){f=!0,o=r}finally{try{if(!s&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw o}}return a}}(e,n)||function(r,e){if(r){if("string"==typeof r)return t(r,e);var n={}.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(r,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],u=o[1];Array.prototype[i]||(Array.prototype[i]=u)}));const o=n;return e})()));