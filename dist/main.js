(()=>{"use strict";var e,n,r,t,o,a,i,c,s,d,u,l,p,f,h={426:(e,n,r)=>{r.d(n,{Z:()=>c});var t=r(81),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([e.id,"body{\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0;\r\n    margin: 0;\r\n    height: 100vh;\r\n}\r\n\r\nheader{\r\n    width: 100%;\r\n    height: 150px;\r\n    background: rgb(87, 80, 80);\r\n}\r\n\r\n.container{\r\n    height: 100%;\r\n    display: flex;\r\n}\r\n\r\nfooter{\r\n    width: 100%;\r\n    height: 150px;\r\n    background: rgb(87, 80, 80);\r\n}\r\n\r\naside{\r\n    height: 100%;\r\n    width: 200px;\r\n    background: rgb(129, 119, 119);\r\n}\r\n\r\nsection{\r\n    height: 100%;\r\n    width: 100%;\r\n    background: rgb(170, 48, 48);\r\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=t.base?s[0]+t.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=r(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);n[c].references--}for(var s=t(e,o),d=0;d<a.length;d++){var u=r(a[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},v={};function m(e){var n=v[e];if(void 0!==n)return n.exports;var r=v[e]={id:e,exports:{}};return h[e](r,r.exports,m),r.exports}m.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return m.d(n,{a:n}),n},m.d=(e,n)=>{for(var r in n)m.o(n,r)&&!m.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},m.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e=m(379),n=m.n(e),r=m(795),t=m.n(r),o=m(569),a=m.n(o),i=m(565),c=m.n(i),s=m(216),d=m.n(s),u=m(589),l=m.n(u),p=m(426),(f={}).styleTagTransform=l(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=d(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,function(){const e=document.querySelector("body"),n=document.createElement("header"),r=document.createElement("footer"),t=document.createElement("aside"),o=document.createElement("section"),a=document.createElement("div");a.classList.add("container"),e.appendChild(n),a.appendChild(t),a.appendChild(o),e.appendChild(a),e.appendChild(r)}()})();