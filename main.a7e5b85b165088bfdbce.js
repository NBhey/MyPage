(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>u});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),s=t(417),c=t.n(s),l=new URL(t(500),t.b),p=i()(o()),d=c()(l);p.push([n.id,`html {\n  scroll-behavior: smooth;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\na {\n  text-decoration: none;\n  color: aliceblue;\n}\n\nbody {\n  background-color: black;\n  font-family: monospace;\n}\n\n.background {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.header-container {\n  /* padding-bottom: 50px; */\n  right: 0;\n  left: 0;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.header__navigation {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.header__navigation_logo img {\n  width: 65%;\n}\n\n.header__navigation-items {\n  margin-right: 35px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 70px;\n  font-size: 22px;\n}\n\n.header__navigation-item {\n  display: inline-block;\n}\n\n.header__title {\n  /* margin: 0 auto; */\n  text-align: center;\n  justify-self: center;\n  align-self: center;\n  flex-grow: 1;\n  color: #fff;\n\n  overflow: hidden;\n  white-space: nowrap;\n  animation: typing 2.5s steps(55, end), blink-caret 0.5s step-end infinite;\n}\n\n\n.main-container {\n  color: #fff;\n  text-align: center;\n}\n\n.about {\n  margin: 0 auto;\n  padding: 100px 0;\n  background-image: url(${d});\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-color: #000;\n}\n\n.about__title {\n  text-transform: uppercase;\n  margin: 0 0 30px;\n  letter-spacing: 1px;\n}\n\n.about__title + img {\n  width: 170px;\n  border-radius: 50%;\n}\n\n.about__someword {\n  font-size: 22px;\n  max-width: 650px;\n  margin: 30px auto;\n  letter-spacing: 1px;\n}\n\n.skills {\n  margin: 0 auto;\n  max-width: 1900px;\n  padding: 100px 0 50px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 50px 1fr;\n  grid-template-areas: \n  "title title"\n  "dev test";\n  gap: 0;\n}\n\n.skills__title {\n  grid-area: title;\n}\n\n.skills__dev {\n  grid-area: dev;\n}\n\n.skills__test {\n  grid-area: test;\n}\n\n.skills-decor {\n  \n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n\n  list-style-type: none;\n  font-size: 24px;\n\n  text-align: center;\n  justify-self: center;\n\n  flex-grow: 1;\n  color: #fff;\n\n  overflow: hidden;\n  white-space: nowrap;\n  animation: typing 10.5s steps(55, end), blink-caret 0.5s step-end infinite;\n}\n\n@keyframes typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n@keyframes blink-caret {\n  from,\n  to {\n    border-color: transparent;\n  }\n}\n\n.skills-decor h3 {\n  margin-bottom: 15px;\n}\n\n.work {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  padding-bottom: 50px ;\n  background-color: rgba(2, 2, 2, 0.904);\n}\n\n\n.work__title {\n  grid-column: 1 / span 3;\n  grid-row: 1;\n}\n\n.work__example-block {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 50px;\n  grid-auto-rows: 1fr;\n  row-gap: 50px;\n}\n\n.work__front {\n  grid-column: 1 / span 3;\n}\n\n\n.work__test {\n  grid-column: 1 / span 3;\n  /* grid-row: 1; */\n}\n\n.work__example img{\n  padding-bottom: 15px;\n  width: 75%;\n  border-radius: 30px;\n  transition: all 0.8s ease;\n}\n\n.work__example img:hover{\n  transform: scale(1.1);\n}\n\n.work__example_testing {\n  grid-column: span 3;\n  display: flex;\n}\n\n.work__example_testing img {\n  width: 70%;\n}\n\n.certificate {\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n}\n\n.certificate__group {\n\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  gap: 15px;\n}\n\n.certificate__group img {\n  width: 30%;\n}`,""]);const u=p},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],p=a[l]||0,d="".concat(l," ").concat(p);a[l]=p+1;var u=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:g,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var p=t(a[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},500:(n,e,t)=>{n.exports=t.p+"assets/mount.2e643ec7e94860198e38.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),s=t(659),c=t.n(s),l=t(56),p=t.n(l),d=t(540),u=t.n(d),f=t(113),g=t.n(f),m=t(208),h={};h.styleTagTransform=g(),h.setAttributes=p(),h.insert=c().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=u(),o()(m.A,h),m.A&&m.A.locals&&m.A.locals})();