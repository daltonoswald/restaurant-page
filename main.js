(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(81),o=n.n(a),c=n(645),r=n.n(c)()(o());r.push([e.id,".title {\n    color: purple;\n}\n\n.pizzaImg {\n    height: 50px;\n}",""]);const i=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&r[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var c={},r=[],i=0;i<e.length;i++){var s=e[i],d=a.base?s[0]+a.base:s[0],l=c[d]||0,p="".concat(d," ").concat(l);c[d]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=o(m,a);a.byIndex=i,t.splice(i,0,{identifier:p,updater:h,references:1})}r.push(p)}return r}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var c=a(e=e||[],o=o||{});return function(e){e=e||[];for(var r=0;r<c.length;r++){var i=n(c[r]);t[i].references--}for(var s=a(e,o),d=0;d<c.length;d++){var l=n(c[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}c=s}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var c=t[a]={id:a,exports:{}};return e[a](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!e;)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{const e=n.p+"fd5c84472e11a48f01a9.png";function t(){const e=document.getElementById("content");e.textContent="";let n=document.createElement("div");n.classList.add("navBtnGroup"),e.appendChild(n);let a=document.createElement("button");a.classList.add("navBtn"),a.textContent="Home",a.onclick=c,n.appendChild(a);let r=document.createElement("button");r.classList.add("navBtn"),r.textContent="Menu",r.onclick=o,n.appendChild(r);let i=document.createElement("button");i.classList.add("navBtn"),i.textContent="Contact",i.onclick=t,n.appendChild(i);let s=document.createElement("h1");s.classList.add("title"),s.textContent="Contact",e.appendChild(s);let d=document.createElement("div");d.classList.add("duke"),d.textContent="Duke Sucellus",e.appendChild(d);let l=document.createElement("p");l.classList.add("phone"),l.textContent="555-555-5555",d.appendChild(l);let p=document.createElement("p");p.classList.add("email"),p.textContent="DukeSuce@pizzapalace.com",d.appendChild(p)}const a=n.p+"b77bd3fab27e9de0e721.png";function o(){const n=document.getElementById("content");n.textContent="";let r=document.createElement("div");r.classList.add("navBtnGroup"),n.appendChild(r);let i=document.createElement("button");i.classList.add("navBtn"),i.textContent="Home",i.onclick=c,r.appendChild(i);let s=document.createElement("button");s.classList.add("navBtn"),s.textContent="Menu",s.onclick=o,r.appendChild(s);let d=document.createElement("button");d.classList.add("navBtn"),d.textContent="Contact",d.onclick=t,r.appendChild(d);let l=document.createElement("h1");l.classList.add("title"),l.textContent="Menu",n.appendChild(l);let p=document.createElement("div");p.classList.add("menuItem"),p.textContent="Pineapple Pizza",n.appendChild(p);const u=new Image;u.src=e,u.classList.add("pizzaImg"),p.appendChild(u);let m=document.createElement("p");m.classList.add("menuDetails"),m.textContent="Our signature dish using the finest pineapples imported fresh from Brimhaven and fresh Culinaromancer cheese.",p.appendChild(m);let h=document.createElement("p");h.classList.add("price"),h.textContent="$22.65",p.appendChild(h);let f=document.createElement("div");f.classList.add("menuItem"),f.textContent="Anchovy Pizza",n.appendChild(f);const v=new Image;v.src=a,v.classList.add("pizzaImg"),f.appendChild(v);let C=document.createElement("p");C.classList.add("menuDetails"),C.textContent="A hometown favorite, topped with anchovies caught off the coast of the Barbarian Outpost and fresh Culinaromancer cheese.",f.appendChild(C);let g=document.createElement("p");g.classList.add("price"),g.textContent="$18.55",f.appendChild(g)}function c(){const n=document.getElementById("content");n.textContent="";let a=document.createElement("div");a.classList.add("navBtnGroup"),n.appendChild(a);let r=document.createElement("button");r.classList.add("navBtn"),r.textContent="Home",r.onclick=c,a.appendChild(r);let i=document.createElement("button");i.classList.add("navBtn"),i.textContent="Menu",i.onclick=o,a.appendChild(i);let s=document.createElement("button");s.classList.add("navBtn"),s.textContent="Contact",s.onclick=t,a.appendChild(s);let d=document.createElement("h1");d.classList.add("title"),d.textContent="Duke Sucellus Pizza Palace",n.appendChild(d);const l=new Image;l.src=e,l.classList.add("pizzaImg"),n.appendChild(l);let p=document.createElement("div");p.classList.add("blurbElement"),p.textContent="Duke Sucellus Pizza Palace is the newest and coolest pizzeria in all of Weiss!",n.appendChild(p)}var r=n(379),i=n.n(r),s=n(795),d=n.n(s),l=n(569),p=n.n(l),u=n(565),m=n.n(u),h=n(216),f=n.n(h),v=n(589),C=n.n(v),g=n(28),x={};x.styleTagTransform=C(),x.setAttributes=m(),x.insert=p().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=f(),i()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals,c()})()})();