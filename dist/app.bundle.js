(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,'\nbody {\n  background-color: lightblue;\n  \n\n  font-family: montserrat, sans-serif;\n  font-size: 1.4em;\n  font-weight: 700;\n  color: white;\n  mix-blend-mode: luminosity;\n  \n \n}\n\n\n.loaderWrapper{\n  z-index: 1;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  background-color: black;\n  width: 100%;\n  height: 100%;\n\n}\n\n\n/* ----------https://github.com/vineethtrv --https://github.com/vineethtrv/css-loader ------------------------------------------- */\n.loader {\n  margin: auto;\n  width: 5em;\n  height: 5em;\n  border: 5px solid #FFF;\n  border-bottom-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  animation: rotation 1s linear infinite;\n  position: absolute;\n  top: 40%;\n  left: 45%;\n  }\n\n  @keyframes rotation {\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n  } \n/* ------------------------------------------------------- */\n\n.wrapper{\n  display: grid;\n  width: 100vw;\n  height: 100vh;\n  grid-template-columns: 50% 50%;\n  grid-template-rows: 50% 50%;\n\n  background: rgba(0, 0, 0, 0.5);\n}\n\nh1,\nh2 {\n  margin: 0px;\n}\n\n.search {\n  justify-self: center;\n  align-self: center;\n}\n#searchText{\n  border: white 2px solid;\n  border-radius: 5px;\n\n  \n}\n\n\n.weekDays {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n\n  grid-column: 1 /3;\n  margin: 0em 7em;\n\n\n}\n\n.HiLo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.tempContainer {\n  display: grid;\n  grid-template-columns: 3em 3em;\n  grid-template-rows: 3em 3em;\n  justify-items: center;\n}\n\n.topContainer {\n  display: grid;\n  grid-template-columns: repeat(2, 8em);\n  grid-template-rows: repeat(3, 3em);\n  color: white;\n\n  justify-self: center;\n  align-self: center;\n  text-align: center;\n}\n\n\n\n#location {\n  grid-column: 1 / 3;\n \n}\n\n.toggle {\n  \n  --width: 55px;\n  --height: 30px;\n\n  position: relative;\n  display: inline-block;\n  width: var(--width);\n  height: var(--height);\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);\n  border-radius: var(--height);\n  cursor: pointer;\n  left: 30%;\n\n  transform: translateY(50%);\n}\n\n.toggle input {\n  display: none;\n}\n\n.toggle .slider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--height);\n  background-color: #ccc;\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle .slider::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: calc(var(--height));\n  height: calc(var(--height));\n  border-radius: calc(var(--height) / 2);\n  background-color: #fff;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle input:checked + .slider {\n  background-color: black;\n}\n\n.toggle input:checked + .slider::before {\n  transform: translateX(calc(var(--width) - var(--height)));\n}\n\n.toggle .labels {\n  position: absolute;\n  top: 8px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  font-size: 12px;\n  font-family: sans-serif;\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle .labels::after {\n  content: attr(C°);\n  position: absolute;\n  right: 5px;\n  color: #4d4d4d;\n  opacity: 1;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle .labels::before {\n  content: attr(F°);\n  position: absolute;\n  left: 5px;\n  color: #ffffff;\n  opacity: 0;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4);\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle input:checked ~ .labels::after {\n  opacity: 0;\n}\n\n.toggle input:checked ~ .labels::before {\n  opacity: 1;\n}\n',""]);const c=i},704:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=r(f,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0;var o={};(()=>{t.d(o,{y:()=>R});var e=t(379),n=t.n(e),r=t(795),a=t.n(r),i=t(569),c=t.n(i),s=t(565),l=t.n(s),d=t(216),u=t.n(d),p=t(589),f=t.n(p),m=t(704),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var g=t(426),y={};y.styleTagTransform=f(),y.setAttributes=l(),y.insert=c().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=u(),n()(g.Z,y),g.Z&&g.Z.locals&&g.Z.locals;const b=document.querySelectorAll(".hiTempC"),v=document.querySelectorAll(".loTempC"),x=document.querySelectorAll(".hiTempF"),w=document.querySelectorAll(".loTempF"),k=document.getElementById("tempC"),T=document.getElementById("tempF"),j=document.querySelectorAll(".weatherEmblem"),S=document.getElementById("location"),C=document.getElementById("time"),E=document.getElementById("tempToggle"),I=document.querySelector(".labels"),q=document.getElementById("currentWeatherImg");E.addEventListener("change",(function(e){if(0==E.checked){I.dataset.choice="F",T.hidden=!1,k.hidden=!0;for(let e=0;e<3;e++)x[e].hidden=!1,w[e].hidden=!1,b[e].hidden=!0,v[e].hidden=!0}else{I.dataset.choice="C",T.hidden=!0,k.hidden=!1;for(let e=0;e<3;e++)x[e].hidden=!0,w[e].hidden=!0,b[e].hidden=!1,v[e].hidden=!1}}));let A=document.querySelectorAll(".date");const _=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];let z,M=new Date,$=document.getElementById("searchText");async function B(e){let n=e.coords.latitude+","+e.coords.longitude,t=await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${n}&key=AIzaSyC6PkkTeKAD1zWH5lpVHY47Ywrxhi9jKaY`,{mode:"cors"}),o=await t.json();z=o.results[0].address_components[3].long_name+","+o.results[0].address_components[5].short_name,$.value=z,R(),$.value=""}function F(){z="new york",$.value=z,R(),$.value=""}const P=t.p+"c970ce02ba4e4db9e70f.jpg",Z=t.p+"9aac4e8f269b9d7513d1.jpg",L=t.p+"ea3b51cf165d55be1f37.jpg",D=t.p+"5ee2c9f70792ee5bcb47.jpg",H=document.querySelector(".loaderWrapper");async function W(e){let n=e.location.name,t=e.location.region,o=e.location.lat,r=e.location.lon,a=e.current.condition.text,i=await async function(e,n,t,o,r){const a=await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8e3ea4a055365f6a76658fc96ea5115c&format=json&nojsoncallback=1&text=${e} ${n} skyline&lat=${t}&long=${o}&has_geo=1`,{mode:"cors"}),i=await a.json();let c;if(0==i.photos.pages)c=r;else{let e=(s=i.photos.photo.length,Math.floor(Math.random()*s));c=i.photos.photo[e].id}var s;return c}(n,t,o,r,a);let c;/^([^0-9]*)$/.test(i)?(c=["rain","drizzle"].some((e=>a.includes(e)))?L:["cloudy","overcast"].some((e=>a.includes(e)))?Z:a.includes("snow")?D:P,document.body.style.backgroundImage=`url(${c})`,document.body.style.backgroundSize="cover",document.body.style.backgroundPosition="center"):await async function(e){const n=await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=8e3ea4a055365f6a76658fc96ea5115c&format=json&nojsoncallback=1&photo_id=${e}`,{mode:"cors"});let t=(await n.json()).sizes.size,o=t[t.length-1].source;document.body.style.backgroundImage=`url(${o})`,document.body.style.backgroundSize="cover",document.body.style.backgroundPosition="center"}(i),H.style.display="none"}const N=document.getElementById("searchSubmit"),O=document.getElementById("searchText");let Y;const K=document.querySelector(".loaderWrapper");async function R(){if(1==O.checkValidity()){K.style.display="block";let e=document.getElementById("searchText").value;await async function(e){Y=await async function(e){let n=null;try{if(n=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f5992c820565482cb30225158231305&q=${e}&days=3`,{mode:"cors"}),400==n.status)throw new error}catch(e){return alert("Invalid search.Try again.")}return await n.json()}(e),null!=Y?(function(e){k.textContent=e.current.temp_c+"°",T.textContent=e.current.temp_f+"°",S.textContent=e.location.name+","+e.location.region;let n=new Date;C.textContent=n.getHours()+":"+n.getMinutes(),q.src=e.current.condition.icon}(Y),function(e){for(let n=0;n<3;n++)x[n].textContent=e.forecast.forecastday[n].day.maxtemp_f+"°",w[n].textContent=e.forecast.forecastday[n].day.mintemp_f+"°",j[n].src=e.forecast.forecastday[n].day.condition.icon,b[n].textContent=e.forecast.forecastday[n].day.maxtemp_c+"°",v[n].textContent=e.forecast.forecastday[n].day.mintemp_c+"°",j[n].src=e.forecast.forecastday[n].day.condition.icon}(Y),W(Y)):K.style.display="none"}(e),document.getElementById("searchText").value=""}}N.addEventListener("click",R),O.addEventListener("keypress",(function(e){"Enter"===e.key&&(e.preventDefault(),N.click())})),async function(){!function(){for(let e=0;e<3;e++){let n=new Date(M.getTime()+24*e*60*60*1e3);A[e].textContent=_[n.getDay()]}}(),await void(window.navigator.geolocation&&window.navigator.geolocation.getCurrentPosition(B,F))}()})()})();