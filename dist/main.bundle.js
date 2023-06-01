"use strict";
(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n  background-color: lightblue;\n  \n\n  font-family: montserrat, sans-serif;\n  font-size: 1.4em;\n  font-weight: 700;\n  color: white;\n  mix-blend-mode: luminosity;\n  \n \n}\n\n\n.loaderWrapper{\n  z-index: 1;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  background-color: black;\n  width: 100%;\n  height: 100%;\n\n}\n\n\n/* ----------https://github.com/vineethtrv --https://github.com/vineethtrv/css-loader ------------------------------------------- */\n.loader {\n  margin: auto;\n  width: 5em;\n  height: 5em;\n  border: 5px solid #FFF;\n  border-bottom-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  animation: rotation 1s linear infinite;\n  position: absolute;\n  top: 40%;\n  left: 45%;\n  }\n\n  @keyframes rotation {\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n  } \n/* ------------------------------------------------------- */\n\n.wrapper{\n  display: grid;\n  width: 100vw;\n  height: 100vh;\n  grid-template-columns: 50% 50%;\n  grid-template-rows: 50% 50%;\n\n  background: rgba(0, 0, 0, 0.5);\n}\n\nh1,\nh2 {\n  margin: 0px;\n}\n\n.search {\n  justify-self: center;\n  align-self: center;\n}\n#searchText{\n  border: white 2px solid;\n  border-radius: 5px;\n\n  \n}\n\n\n.weekDays {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n\n  grid-column: 1 /3;\n  margin: 0em 7em;\n\n\n}\n\n.HiLo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.tempContainer {\n  display: grid;\n  grid-template-columns: 3em 3em;\n  grid-template-rows: 3em 3em;\n  justify-items: center;\n}\n\n.topContainer {\n  display: grid;\n  grid-template-columns: repeat(2, 8em);\n  grid-template-rows: repeat(3, 3em);\n  color: white;\n\n  justify-self: center;\n  align-self: center;\n  text-align: center;\n}\n\n\n\n#location {\n  grid-column: 1 / 3;\n \n}\n\n.toggle {\n  \n  --width: 55px;\n  --height: 30px;\n\n  position: relative;\n  display: inline-block;\n  width: var(--width);\n  height: var(--height);\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);\n  border-radius: var(--height);\n  cursor: pointer;\n  left: 30%;\n\n  transform: translateY(50%);\n}\n\n.toggle input {\n  display: none;\n}\n\n.toggle .slider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--height);\n  background-color: #ccc;\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle .slider::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: calc(var(--height));\n  height: calc(var(--height));\n  border-radius: calc(var(--height) / 2);\n  background-color: #fff;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle input:checked + .slider {\n  background-color: black;\n}\n\n.toggle input:checked + .slider::before {\n  transform: translateX(calc(var(--width) - var(--height)));\n}\n\n.toggle .labels {\n  position: absolute;\n  top: 8px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  font-size: 12px;\n  font-family: sans-serif;\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle .labels::after {\n  content: attr(C°);\n  position: absolute;\n  right: 5px;\n  color: #4d4d4d;\n  opacity: 1;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle .labels::before {\n  content: attr(F°);\n  position: absolute;\n  left: 5px;\n  color: #ffffff;\n  opacity: 0;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4);\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle input:checked ~ .labels::after {\n  opacity: 0;\n}\n\n.toggle input:checked ~ .labels::before {\n  opacity: 1;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;EACE,2BAA2B;;;EAG3B,mCAAmC;EACnC,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,0BAA0B;;;AAG5B;;;AAGA;EACE,UAAU;EACV,eAAe;EACf,SAAS;EACT,QAAQ;EACR,uBAAuB;EACvB,WAAW;EACX,YAAY;;AAEd;;;AAGA,mIAAmI;AACnI;EACE,YAAY;EACZ,UAAU;EACV,WAAW;EACX,sBAAsB;EACtB,gCAAgC;EAChC,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,sCAAsC;EACtC,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT;;EAEA;EACA;MACI,uBAAuB;EAC3B;EACA;MACI,yBAAyB;EAC7B;EACA;AACF,4DAA4D;;AAE5D;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;;EAE3B,8BAA8B;AAChC;;AAEA;;EAEE,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;AACpB;AACA;EACE,uBAAuB;EACvB,kBAAkB;;;AAGpB;;;AAGA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;;EAE7B,iBAAiB;EACjB,eAAe;;;AAGjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;EAC3B,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,YAAY;;EAEZ,oBAAoB;EACpB,kBAAkB;EAClB,kBAAkB;AACpB;;;;AAIA;EACE,kBAAkB;;AAEpB;;AAEA;;EAEE,aAAa;EACb,cAAc;;EAEd,kBAAkB;EAClB,qBAAqB;EACrB,mBAAmB;EACnB,qBAAqB;EACrB,0CAA0C;EAC1C,4BAA4B;EAC5B,eAAe;EACf,SAAS;;EAET,0BAA0B;AAC5B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,4BAA4B;EAC5B,sBAAsB;EACtB,gCAAgC;AAClC;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,0BAA0B;EAC1B,2BAA2B;EAC3B,sCAAsC;EACtC,sBAAsB;EACtB,0CAA0C;EAC1C,gCAAgC;AAClC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yDAAyD;AAC3D;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,OAAO;EACP,WAAW;EACX,YAAY;EACZ,eAAe;EACf,uBAAuB;EACvB,gCAAgC;AAClC;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,UAAU;EACV,cAAc;EACd,UAAU;EACV,2CAA2C;EAC3C,gCAAgC;AAClC;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,SAAS;EACT,cAAc;EACd,UAAU;EACV,iDAAiD;EACjD,gCAAgC;AAClC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ","sourcesContent":["\nbody {\n  background-color: lightblue;\n  \n\n  font-family: montserrat, sans-serif;\n  font-size: 1.4em;\n  font-weight: 700;\n  color: white;\n  mix-blend-mode: luminosity;\n  \n \n}\n\n\n.loaderWrapper{\n  z-index: 1;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  background-color: black;\n  width: 100%;\n  height: 100%;\n\n}\n\n\n/* ----------https://github.com/vineethtrv --https://github.com/vineethtrv/css-loader ------------------------------------------- */\n.loader {\n  margin: auto;\n  width: 5em;\n  height: 5em;\n  border: 5px solid #FFF;\n  border-bottom-color: transparent;\n  border-radius: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  animation: rotation 1s linear infinite;\n  position: absolute;\n  top: 40%;\n  left: 45%;\n  }\n\n  @keyframes rotation {\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n  } \n/* ------------------------------------------------------- */\n\n.wrapper{\n  display: grid;\n  width: 100vw;\n  height: 100vh;\n  grid-template-columns: 50% 50%;\n  grid-template-rows: 50% 50%;\n\n  background: rgba(0, 0, 0, 0.5);\n}\n\nh1,\nh2 {\n  margin: 0px;\n}\n\n.search {\n  justify-self: center;\n  align-self: center;\n}\n#searchText{\n  border: white 2px solid;\n  border-radius: 5px;\n\n  \n}\n\n\n.weekDays {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n\n  grid-column: 1 /3;\n  margin: 0em 7em;\n\n\n}\n\n.HiLo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.tempContainer {\n  display: grid;\n  grid-template-columns: 3em 3em;\n  grid-template-rows: 3em 3em;\n  justify-items: center;\n}\n\n.topContainer {\n  display: grid;\n  grid-template-columns: repeat(2, 8em);\n  grid-template-rows: repeat(3, 3em);\n  color: white;\n\n  justify-self: center;\n  align-self: center;\n  text-align: center;\n}\n\n\n\n#location {\n  grid-column: 1 / 3;\n \n}\n\n.toggle {\n  \n  --width: 55px;\n  --height: 30px;\n\n  position: relative;\n  display: inline-block;\n  width: var(--width);\n  height: var(--height);\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);\n  border-radius: var(--height);\n  cursor: pointer;\n  left: 30%;\n\n  transform: translateY(50%);\n}\n\n.toggle input {\n  display: none;\n}\n\n.toggle .slider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: var(--height);\n  background-color: #ccc;\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle .slider::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: calc(var(--height));\n  height: calc(var(--height));\n  border-radius: calc(var(--height) / 2);\n  background-color: #fff;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle input:checked + .slider {\n  background-color: black;\n}\n\n.toggle input:checked + .slider::before {\n  transform: translateX(calc(var(--width) - var(--height)));\n}\n\n.toggle .labels {\n  position: absolute;\n  top: 8px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  font-size: 12px;\n  font-family: sans-serif;\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle .labels::after {\n  content: attr(C°);\n  position: absolute;\n  right: 5px;\n  color: #4d4d4d;\n  opacity: 1;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle .labels::before {\n  content: attr(F°);\n  position: absolute;\n  left: 5px;\n  color: #ffffff;\n  opacity: 0;\n  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4);\n  transition: all 0.4s ease-in-out;\n}\n\n.toggle input:checked ~ .labels::after {\n  opacity: 0;\n}\n\n.toggle input:checked ~ .labels::before {\n  opacity: 1;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styleReset.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styleReset.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/styleReset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styleReset.css":
/*!****************************!*\
  !*** ./src/styleReset.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styleReset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styleReset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styleReset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styleReset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styleReset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styleReset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styleReset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocation": () => (/* binding */ getLocation),
/* harmony export */   "getRandomInt": () => (/* binding */ getRandomInt),
/* harmony export */   "initialLocation": () => (/* binding */ initialLocation),
/* harmony export */   "locationDenied": () => (/* binding */ locationDenied),
/* harmony export */   "locationGranted": () => (/* binding */ locationGranted),
/* harmony export */   "weekDay": () => (/* binding */ weekDay)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
let dayElements = document.querySelectorAll(".date");

const weekDays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let currentDate = new Date();

//default

function weekDay() {
  for (let i = 0; i < 3; i++) {
    let day = new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000);
    dayElements[i].textContent = weekDays[day.getDay()];
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let initialLocation;

function getLocation() {
  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(
      locationGranted,
      locationDenied
    );
  }
}

let searchBar = document.getElementById("searchText");

async function locationGranted(returnLocation) {
  let position =
    returnLocation.coords.latitude + "," + returnLocation.coords.longitude;
  let response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position}&key=AIzaSyC6PkkTeKAD1zWH5lpVHY47Ywrxhi9jKaY`,
    { mode: "cors" }
  );

  let data = await response.json();
  initialLocation =
    data.results[0].address_components[3].long_name +
    "," +
    data.results[0].address_components[5].short_name;

  searchBar.value =initialLocation;
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.search)();
  searchBar.value="";
}

function locationDenied() {
initialLocation="new york"
  searchBar.value =initialLocation;
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.search)();
  searchBar.value="";
}




/***/ }),

/***/ "./src/imageBackground.js":
/*!********************************!*\
  !*** ./src/imageBackground.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "display": () => (/* binding */ display)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _skyImages_clearSky_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skyImages/clearSky.jpg */ "./src/skyImages/clearSky.jpg");
/* harmony import */ var _skyImages_Cloudy_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skyImages/Cloudy.jpg */ "./src/skyImages/Cloudy.jpg");
/* harmony import */ var _skyImages_rainy_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skyImages/rainy.jpg */ "./src/skyImages/rainy.jpg");
/* harmony import */ var _skyImages_snow_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skyImages/snow.jpg */ "./src/skyImages/snow.jpg");







const loadingSymbol = document.querySelector(".loaderWrapper");


async function getPhotoOptions(city, region, lat, long, weatherStatus) {
  const response = await fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8e3ea4a055365f6a76658fc96ea5115c&format=json&nojsoncallback=1&text=${city} ${region} skyline&lat=${lat}&long=${long}&has_geo=1`
  );

  const data = await response.json();
 
  let photoId;
  if (data.photos.pages == 0) {
    photoId = weatherStatus;
  } else {
    let max = data.photos.photo.length;
    let rand = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(max);
    photoId = data.photos.photo[rand].id;
  }

  return photoId;
}

async function getHighRes(id) {
  const availableSizes = await fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=8e3ea4a055365f6a76658fc96ea5115c&format=json&nojsoncallback=1&photo_id=${id}`,
    { mode: "cors" }
  );

  const sizesData = await availableSizes.json();

  //array of sizes
  let sizeOptions = sizesData.sizes.size;
  let url = sizeOptions[sizeOptions.length - 1].source;
 

  document.body.style.backgroundImage = `url(${url})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
}

async function display(info) {
  let city = info.location.name;
  let region = info.location.region;
  let lat = info.location.lat;
  let long = info.location.lon;
  let weatherStatus = info.current.condition.text;

  let id = await getPhotoOptions(city, region, lat, long, weatherStatus);


  const rain = ["rain","drizzle",]
  const cloudy = ["cloudy","overcast"]
  let imageChoice;

  if (/^([^0-9]*)$/.test(id)) {
    if(rain.some(el=> weatherStatus.includes(el))){
  imageChoice = _skyImages_rainy_jpg__WEBPACK_IMPORTED_MODULE_3__;
    }else if(cloudy.some(el=> weatherStatus.includes(el))){
      imageChoice=_skyImages_Cloudy_jpg__WEBPACK_IMPORTED_MODULE_2__;
    }else if(weatherStatus.includes("snow")){
      imageChoice=_skyImages_snow_jpg__WEBPACK_IMPORTED_MODULE_4__;
    }else{
      imageChoice=_skyImages_clearSky_jpg__WEBPACK_IMPORTED_MODULE_1__;
    }
    document.body.style.backgroundImage = `url(${imageChoice})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }
  else {
    await getHighRes(id);
  }
  loadingSymbol.style.display='none';

  

}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "search": () => (/* binding */ search),
/* harmony export */   "weatherUpdates": () => (/* binding */ weatherUpdates)
/* harmony export */ });
/* harmony import */ var _styleReset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleReset.css */ "./src/styleReset.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _imageBackground_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imageBackground.js */ "./src/imageBackground.js");







const submitSearch = document.getElementById("searchSubmit");
const searchText = document.getElementById("searchText");

let data;

const loadingSymbol = document.querySelector(".loaderWrapper");

async function weatherUpdates(searchedCity) {
  data = await (0,_weather__WEBPACK_IMPORTED_MODULE_2__.getForecast)(searchedCity);
  (0,_weather__WEBPACK_IMPORTED_MODULE_2__.fillCurrent)(data);
  (0,_weather__WEBPACK_IMPORTED_MODULE_2__.fillWeather)(data);
}

async function search() {

  if (searchText.checkValidity() == true) {
    loadingSymbol.style.display = "block";
    let city = document.getElementById("searchText").value;
    await weatherUpdates(city);
    (0,_imageBackground_js__WEBPACK_IMPORTED_MODULE_4__.display)(data);
    document.getElementById("searchText").value = "";
  }
}

submitSearch.addEventListener("click", search);

searchText.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    submitSearch.click();
  }
});

async function onload() {
  (0,_helper__WEBPACK_IMPORTED_MODULE_3__.weekDay)();
  await (0,_helper__WEBPACK_IMPORTED_MODULE_3__.getLocation)();
  // display(data);
}
onload();




/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fillCurrent": () => (/* binding */ fillCurrent),
/* harmony export */   "fillWeather": () => (/* binding */ fillWeather),
/* harmony export */   "getForecast": () => (/* binding */ getForecast)
/* harmony export */ });


const highTempElementsC = document.querySelectorAll(".hiTempC");
const lowTempElementsC = document.querySelectorAll(".loTempC");

const highTempElementsF = document.querySelectorAll(".hiTempF");
const lowTempElementsF = document.querySelectorAll(".loTempF");

const tempC = document.getElementById("tempC");
const tempF = document.getElementById("tempF");

const weatherEmblems = document.querySelectorAll(".weatherEmblem");

//current
const location = document.getElementById("location");
const timeElement = document.getElementById("time");

const tempToggle = document.getElementById("tempToggle");
const weatherChoice = document.querySelector(".labels");

const currentWeatherImage= document.getElementById("currentWeatherImg");


async function getForecast(location) {
  let response = null;
  
  try {
    response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=f5992c820565482cb30225158231305&q=${location}&days=3`,
      {
        mode: "cors",
      }
    );

    if (response.status == 400) {
      throw new error;
    }
  } catch (error) {
  
    return  alert("Invalid search.Try again.");
  }

  let weatherData = await response.json();

  return weatherData;
}

function fillWeather(forecastData) {
  for (let i = 0; i < 3; i++) {
    highTempElementsF[i].textContent =
      forecastData.forecast.forecastday[i].day.maxtemp_f + "°";
    lowTempElementsF[i].textContent =
      forecastData.forecast.forecastday[i].day.mintemp_f + "°";
    weatherEmblems[i].src =
      forecastData.forecast.forecastday[i].day.condition.icon;

    highTempElementsC[i].textContent =
      forecastData.forecast.forecastday[i].day.maxtemp_c + "°";
    lowTempElementsC[i].textContent =
      forecastData.forecast.forecastday[i].day.mintemp_c + "°";
    weatherEmblems[i].src =
      forecastData.forecast.forecastday[i].day.condition.icon;
  }
}

function fillCurrent(forecastData) {
  tempC.textContent = forecastData.current.temp_c + `°`;
  tempF.textContent = forecastData.current.temp_f + `°`;

  location.textContent =
    forecastData.location.name + "," + forecastData.location.region;

  let date = new Date();
  timeElement.textContent = date.getHours() + ":" + date.getMinutes();
  currentWeatherImage.src=forecastData.current.condition.icon;
}

tempToggle.addEventListener("change", function (event) {
  if (tempToggle.checked == false) {
    weatherChoice.dataset.choice = "F";
    tempF.hidden = false;
    tempC.hidden = true;
    for (let i = 0; i < 3; i++) {
      highTempElementsF[i].hidden = false;
      lowTempElementsF[i].hidden = false;

      highTempElementsC[i].hidden = true;
      lowTempElementsC[i].hidden = true;
    }
  } else {
    weatherChoice.dataset.choice = "C";
    tempF.hidden = true;
    tempC.hidden = false;

    for (let i = 0; i < 3; i++) {
      highTempElementsF[i].hidden = true;
      lowTempElementsF[i].hidden = true;

      highTempElementsC[i].hidden = false;
      lowTempElementsC[i].hidden = false;
    }
  }
});




/***/ }),

/***/ "./src/skyImages/Cloudy.jpg":
/*!**********************************!*\
  !*** ./src/skyImages/Cloudy.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9aac4e8f269b9d7513d1.jpg";

/***/ }),

/***/ "./src/skyImages/clearSky.jpg":
/*!************************************!*\
  !*** ./src/skyImages/clearSky.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c970ce02ba4e4db9e70f.jpg";

/***/ }),

/***/ "./src/skyImages/rainy.jpg":
/*!*********************************!*\
  !*** ./src/skyImages/rainy.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea3b51cf165d55be1f37.jpg";

/***/ }),

/***/ "./src/skyImages/snow.jpg":
/*!********************************!*\
  !*** ./src/skyImages/snow.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ee2c9f70792ee5bcb47.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGVSZXNldC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZVJlc2V0LmNzcz9hNWU1Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbWFnZUJhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3dlYXRoZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIFxcblxcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuNGVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1peC1ibGVuZC1tb2RlOiBsdW1pbm9zaXR5O1xcbiAgXFxuIFxcbn1cXG5cXG5cXG4ubG9hZGVyV3JhcHBlcntcXG4gIHotaW5kZXg6IDE7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxufVxcblxcblxcbi8qIC0tLS0tLS0tLS1odHRwczovL2dpdGh1Yi5jb20vdmluZWV0aHRydiAtLWh0dHBzOi8vZ2l0aHViLmNvbS92aW5lZXRodHJ2L2Nzcy1sb2FkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi5sb2FkZXIge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDVlbTtcXG4gIGhlaWdodDogNWVtO1xcbiAgYm9yZGVyOiA1cHggc29saWQgI0ZGRjtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGFuaW1hdGlvbjogcm90YXRpb24gMXMgbGluZWFyIGluZmluaXRlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0MCU7XFxuICBsZWZ0OiA0NSU7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIHJvdGF0aW9uIHtcXG4gIDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxuICB9IFxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ud3JhcHBlcntcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgNTAlO1xcblxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLnNlYXJjaCB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuI3NlYXJjaFRleHR7XFxuICBib3JkZXI6IHdoaXRlIDJweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gIFxcbn1cXG5cXG5cXG4ud2Vla0RheXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXG4gIGdyaWQtY29sdW1uOiAxIC8zO1xcbiAgbWFyZ2luOiAwZW0gN2VtO1xcblxcblxcbn1cXG5cXG4uSGlMbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnRlbXBDb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2VtIDNlbTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2VtIDNlbTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvcENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgOGVtKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDNlbSk7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuI2xvY2F0aW9uIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gXFxufVxcblxcbi50b2dnbGUge1xcbiAgXFxuICAtLXdpZHRoOiA1NXB4O1xcbiAgLS1oZWlnaHQ6IDMwcHg7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogdmFyKC0td2lkdGgpO1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGVpZ2h0KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGxlZnQ6IDMwJTtcXG5cXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xcbn1cXG5cXG4udG9nZ2xlIGlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2dnbGUgLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9nZ2xlIC5zbGlkZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1oZWlnaHQpKTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1oZWlnaHQpKTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0taGVpZ2h0KSAvIDIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9nZ2xlIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udG9nZ2xlIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGModmFyKC0td2lkdGgpIC0gdmFyKC0taGVpZ2h0KSkpO1xcbn1cXG5cXG4udG9nZ2xlIC5sYWJlbHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA4cHg7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9nZ2xlIC5sYWJlbHM6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IGF0dHIoQ8KwKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1cHg7XFxuICBjb2xvcjogIzRkNGQ0ZDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50b2dnbGUgLmxhYmVsczo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IGF0dHIoRsKwKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDVweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gLmxhYmVsczo6YWZ0ZXIge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gLmxhYmVsczo6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0VBQ0UsMkJBQTJCOzs7RUFHM0IsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDBCQUEwQjs7O0FBRzVCOzs7QUFHQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7O0FBRWQ7OztBQUdBLG1JQUFtSTtBQUNuSTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNUOztFQUVBO0VBQ0E7TUFDSSx1QkFBdUI7RUFDM0I7RUFDQTtNQUNJLHlCQUF5QjtFQUM3QjtFQUNBO0FBQ0YsNERBQTREOztBQUU1RDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwyQkFBMkI7O0VBRTNCLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCOzs7QUFHcEI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7O0VBRTdCLGlCQUFpQjtFQUNqQixlQUFlOzs7QUFHakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsa0NBQWtDO0VBQ2xDLFlBQVk7O0VBRVosb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7Ozs7QUFJQTtFQUNFLGtCQUFrQjs7QUFFcEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLGNBQWM7O0VBRWQsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLDBDQUEwQztFQUMxQyw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLFNBQVM7O0VBRVQsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLHNDQUFzQztFQUN0QyxzQkFBc0I7RUFDdEIsMENBQTBDO0VBQzFDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0VBQ2QsVUFBVTtFQUNWLDJDQUEyQztFQUMzQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxjQUFjO0VBQ2QsVUFBVTtFQUNWLGlEQUFpRDtFQUNqRCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICBcXG5cXG4gIGZvbnQtZmFtaWx5OiBtb250c2VycmF0LCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjRlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtaXgtYmxlbmQtbW9kZTogbHVtaW5vc2l0eTtcXG4gIFxcbiBcXG59XFxuXFxuXFxuLmxvYWRlcldyYXBwZXJ7XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbn1cXG5cXG5cXG4vKiAtLS0tLS0tLS0taHR0cHM6Ly9naXRodWIuY29tL3ZpbmVldGh0cnYgLS1odHRwczovL2dpdGh1Yi5jb20vdmluZWV0aHRydi9jc3MtbG9hZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4ubG9hZGVyIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA1ZW07XFxuICBoZWlnaHQ6IDVlbTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICNGRkY7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBhbmltYXRpb246IHJvdGF0aW9uIDFzIGxpbmVhciBpbmZpbml0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDAlO1xcbiAgbGVmdDogNDUlO1xcbiAgfVxcblxcbiAgQGtleWZyYW1lcyByb3RhdGlvbiB7XFxuICAwJSB7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbiAgfSBcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLndyYXBwZXJ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcXG5cXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuaDEsXFxuaDIge1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5zZWFyY2gge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbiNzZWFyY2hUZXh0e1xcbiAgYm9yZGVyOiB3aGl0ZSAycHggc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICBcXG59XFxuXFxuXFxuLndlZWtEYXlzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFxuICBncmlkLWNvbHVtbjogMSAvMztcXG4gIG1hcmdpbjogMGVtIDdlbTtcXG5cXG5cXG59XFxuXFxuLkhpTG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi50ZW1wQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNlbSAzZW07XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNlbSAzZW07XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b3BDb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDhlbSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAzZW0pO1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcblxcbiNsb2NhdGlvbiB7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuIFxcbn1cXG5cXG4udG9nZ2xlIHtcXG4gIFxcbiAgLS13aWR0aDogNTVweDtcXG4gIC0taGVpZ2h0OiAzMHB4O1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IHZhcigtLXdpZHRoKTtcXG4gIGhlaWdodDogdmFyKC0taGVpZ2h0KTtcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhlaWdodCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBsZWZ0OiAzMCU7XFxuXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcXG59XFxuXFxuLnRvZ2dsZSBpbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9nZ2xlIC5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGVpZ2h0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRvZ2dsZSAuc2xpZGVyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IGNhbGModmFyKC0taGVpZ2h0KSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0taGVpZ2h0KSk7XFxuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWhlaWdodCkgLyAyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRvZ2dsZSBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRvZ2dsZSBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKHZhcigtLXdpZHRoKSAtIHZhcigtLWhlaWdodCkpKTtcXG59XFxuXFxuLnRvZ2dsZSAubGFiZWxzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogOHB4O1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRvZ2dsZSAubGFiZWxzOjphZnRlciB7XFxuICBjb250ZW50OiBhdHRyKEPCsCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXB4O1xcbiAgY29sb3I6ICM0ZDRkNGQ7XFxuICBvcGFjaXR5OiAxO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9nZ2xlIC5sYWJlbHM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBhdHRyKEbCsCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1cHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50b2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IC5sYWJlbHM6OmFmdGVyIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi50b2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IC5sYWJlbHM6OmJlZm9yZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZVJlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVSZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlUmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgZGF5RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhdGVcIik7XG5cbmNvbnN0IHdlZWtEYXlzID0gW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlc1wiLCBcIldlZFwiLCBcIlRodXJzXCIsIFwiRnJpXCIsIFwiU2F0XCJdO1xubGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblxuLy9kZWZhdWx0XG5cbmZ1bmN0aW9uIHdlZWtEYXkoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgbGV0IGRheSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlLmdldFRpbWUoKSArIGkgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICBkYXlFbGVtZW50c1tpXS50ZXh0Q29udGVudCA9IHdlZWtEYXlzW2RheS5nZXREYXkoKV07XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbn1cblxubGV0IGluaXRpYWxMb2NhdGlvbjtcblxuZnVuY3Rpb24gZ2V0TG9jYXRpb24oKSB7XG4gIGlmICh3aW5kb3cubmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgd2luZG93Lm5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICBsb2NhdGlvbkdyYW50ZWQsXG4gICAgICBsb2NhdGlvbkRlbmllZFxuICAgICk7XG4gIH1cbn1cbmltcG9ydCB7IHNlYXJjaCB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5sZXQgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hUZXh0XCIpO1xuXG5hc3luYyBmdW5jdGlvbiBsb2NhdGlvbkdyYW50ZWQocmV0dXJuTG9jYXRpb24pIHtcbiAgbGV0IHBvc2l0aW9uID1cbiAgICByZXR1cm5Mb2NhdGlvbi5jb29yZHMubGF0aXR1ZGUgKyBcIixcIiArIHJldHVybkxvY2F0aW9uLmNvb3Jkcy5sb25naXR1ZGU7XG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2xhdGxuZz0ke3Bvc2l0aW9ufSZrZXk9QUl6YVN5QzZQa2tUZUtBRDF6V0g1bHBWSFk0N1l3cnhoaTlqS2FZYCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcblxuICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgaW5pdGlhbExvY2F0aW9uID1cbiAgICBkYXRhLnJlc3VsdHNbMF0uYWRkcmVzc19jb21wb25lbnRzWzNdLmxvbmdfbmFtZSArXG4gICAgXCIsXCIgK1xuICAgIGRhdGEucmVzdWx0c1swXS5hZGRyZXNzX2NvbXBvbmVudHNbNV0uc2hvcnRfbmFtZTtcblxuICBzZWFyY2hCYXIudmFsdWUgPWluaXRpYWxMb2NhdGlvbjtcbiAgc2VhcmNoKCk7XG4gIHNlYXJjaEJhci52YWx1ZT1cIlwiO1xufVxuXG5mdW5jdGlvbiBsb2NhdGlvbkRlbmllZCgpIHtcbmluaXRpYWxMb2NhdGlvbj1cIm5ldyB5b3JrXCJcbiAgc2VhcmNoQmFyLnZhbHVlID1pbml0aWFsTG9jYXRpb247XG4gIHNlYXJjaCgpO1xuICBzZWFyY2hCYXIudmFsdWU9XCJcIjtcbn1cblxuZXhwb3J0IHtcbiAgd2Vla0RheSxcbiAgZ2V0UmFuZG9tSW50LFxuICBnZXRMb2NhdGlvbixcbiAgaW5pdGlhbExvY2F0aW9uLFxuICBsb2NhdGlvbkdyYW50ZWQsXG4gIGxvY2F0aW9uRGVuaWVkLFxufTtcbiIsImltcG9ydCB7IGdldFJhbmRvbUludCB9IGZyb20gXCIuL2hlbHBlclwiO1xuaW1wb3J0IGNsZWFyIGZyb20gXCIuL3NreUltYWdlcy9jbGVhclNreS5qcGdcIlxuaW1wb3J0IGNsb3VkcyBmcm9tIFwiLi9za3lJbWFnZXMvQ2xvdWR5LmpwZ1wiXG5pbXBvcnQgcmFpbnkgZnJvbSBcIi4vc2t5SW1hZ2VzL3JhaW55LmpwZ1wiXG5pbXBvcnQgc25vdyBmcm9tIFwiLi9za3lJbWFnZXMvc25vdy5qcGdcIlxuXG5cbmNvbnN0IGxvYWRpbmdTeW1ib2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRlcldyYXBwZXJcIik7XG5cblxuYXN5bmMgZnVuY3Rpb24gZ2V0UGhvdG9PcHRpb25zKGNpdHksIHJlZ2lvbiwgbGF0LCBsb25nLCB3ZWF0aGVyU3RhdHVzKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLmZsaWNrci5jb20vc2VydmljZXMvcmVzdC8/bWV0aG9kPWZsaWNrci5waG90b3Muc2VhcmNoJmFwaV9rZXk9OGUzZWE0YTA1NTM2NWY2YTc2NjU4ZmM5NmVhNTExNWMmZm9ybWF0PWpzb24mbm9qc29uY2FsbGJhY2s9MSZ0ZXh0PSR7Y2l0eX0gJHtyZWdpb259IHNreWxpbmUmbGF0PSR7bGF0fSZsb25nPSR7bG9uZ30maGFzX2dlbz0xYFxuICApO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gXG4gIGxldCBwaG90b0lkO1xuICBpZiAoZGF0YS5waG90b3MucGFnZXMgPT0gMCkge1xuICAgIHBob3RvSWQgPSB3ZWF0aGVyU3RhdHVzO1xuICB9IGVsc2Uge1xuICAgIGxldCBtYXggPSBkYXRhLnBob3Rvcy5waG90by5sZW5ndGg7XG4gICAgbGV0IHJhbmQgPSBnZXRSYW5kb21JbnQobWF4KTtcbiAgICBwaG90b0lkID0gZGF0YS5waG90b3MucGhvdG9bcmFuZF0uaWQ7XG4gIH1cblxuICByZXR1cm4gcGhvdG9JZDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0SGlnaFJlcyhpZCkge1xuICBjb25zdCBhdmFpbGFibGVTaXplcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS5mbGlja3IuY29tL3NlcnZpY2VzL3Jlc3QvP21ldGhvZD1mbGlja3IucGhvdG9zLmdldFNpemVzJmFwaV9rZXk9OGUzZWE0YTA1NTM2NWY2YTc2NjU4ZmM5NmVhNTExNWMmZm9ybWF0PWpzb24mbm9qc29uY2FsbGJhY2s9MSZwaG90b19pZD0ke2lkfWAsXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICk7XG5cbiAgY29uc3Qgc2l6ZXNEYXRhID0gYXdhaXQgYXZhaWxhYmxlU2l6ZXMuanNvbigpO1xuXG4gIC8vYXJyYXkgb2Ygc2l6ZXNcbiAgbGV0IHNpemVPcHRpb25zID0gc2l6ZXNEYXRhLnNpemVzLnNpemU7XG4gIGxldCB1cmwgPSBzaXplT3B0aW9uc1tzaXplT3B0aW9ucy5sZW5ndGggLSAxXS5zb3VyY2U7XG4gXG5cbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dXJsfSlgO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IFwiY2VudGVyXCI7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXkoaW5mbykge1xuICBsZXQgY2l0eSA9IGluZm8ubG9jYXRpb24ubmFtZTtcbiAgbGV0IHJlZ2lvbiA9IGluZm8ubG9jYXRpb24ucmVnaW9uO1xuICBsZXQgbGF0ID0gaW5mby5sb2NhdGlvbi5sYXQ7XG4gIGxldCBsb25nID0gaW5mby5sb2NhdGlvbi5sb247XG4gIGxldCB3ZWF0aGVyU3RhdHVzID0gaW5mby5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuXG4gIGxldCBpZCA9IGF3YWl0IGdldFBob3RvT3B0aW9ucyhjaXR5LCByZWdpb24sIGxhdCwgbG9uZywgd2VhdGhlclN0YXR1cyk7XG5cblxuICBjb25zdCByYWluID0gW1wicmFpblwiLFwiZHJpenpsZVwiLF1cbiAgY29uc3QgY2xvdWR5ID0gW1wiY2xvdWR5XCIsXCJvdmVyY2FzdFwiXVxuICBsZXQgaW1hZ2VDaG9pY2U7XG5cbiAgaWYgKC9eKFteMC05XSopJC8udGVzdChpZCkpIHtcbiAgICBpZihyYWluLnNvbWUoZWw9PiB3ZWF0aGVyU3RhdHVzLmluY2x1ZGVzKGVsKSkpe1xuICBpbWFnZUNob2ljZSA9IHJhaW55O1xuICAgIH1lbHNlIGlmKGNsb3VkeS5zb21lKGVsPT4gd2VhdGhlclN0YXR1cy5pbmNsdWRlcyhlbCkpKXtcbiAgICAgIGltYWdlQ2hvaWNlPWNsb3VkcztcbiAgICB9ZWxzZSBpZih3ZWF0aGVyU3RhdHVzLmluY2x1ZGVzKFwic25vd1wiKSl7XG4gICAgICBpbWFnZUNob2ljZT1zbm93O1xuICAgIH1lbHNle1xuICAgICAgaW1hZ2VDaG9pY2U9Y2xlYXI7XG4gICAgfVxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlQ2hvaWNlfSlgO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCI7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBcImNlbnRlclwiO1xuICB9XG4gIGVsc2Uge1xuICAgIGF3YWl0IGdldEhpZ2hSZXMoaWQpO1xuICB9XG4gIGxvYWRpbmdTeW1ib2wuc3R5bGUuZGlzcGxheT0nbm9uZSc7XG5cbiAgXG5cbn1cblxuZXhwb3J0IHsgZGlzcGxheSB9O1xuIiwiaW1wb3J0IFwiLi9zdHlsZVJlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGZpbGxXZWF0aGVyLCBnZXRGb3JlY2FzdCwgZmlsbEN1cnJlbnQgfSBmcm9tIFwiLi93ZWF0aGVyXCI7XG5pbXBvcnQgeyB3ZWVrRGF5IH0gZnJvbSBcIi4vaGVscGVyXCI7XG5pbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSBcIi4vaW1hZ2VCYWNrZ3JvdW5kLmpzXCI7XG5pbXBvcnQgeyBnZXRMb2NhdGlvbiB9IGZyb20gXCIuL2hlbHBlclwiO1xuXG5jb25zdCBzdWJtaXRTZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFN1Ym1pdFwiKTtcbmNvbnN0IHNlYXJjaFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFRleHRcIik7XG5cbmxldCBkYXRhO1xuXG5jb25zdCBsb2FkaW5nU3ltYm9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkZXJXcmFwcGVyXCIpO1xuXG5hc3luYyBmdW5jdGlvbiB3ZWF0aGVyVXBkYXRlcyhzZWFyY2hlZENpdHkpIHtcbiAgZGF0YSA9IGF3YWl0IGdldEZvcmVjYXN0KHNlYXJjaGVkQ2l0eSk7XG4gIGZpbGxDdXJyZW50KGRhdGEpO1xuICBmaWxsV2VhdGhlcihkYXRhKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2VhcmNoKCkge1xuXG4gIGlmIChzZWFyY2hUZXh0LmNoZWNrVmFsaWRpdHkoKSA9PSB0cnVlKSB7XG4gICAgbG9hZGluZ1N5bWJvbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGxldCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hUZXh0XCIpLnZhbHVlO1xuICAgIGF3YWl0IHdlYXRoZXJVcGRhdGVzKGNpdHkpO1xuICAgIGRpc3BsYXkoZGF0YSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hUZXh0XCIpLnZhbHVlID0gXCJcIjtcbiAgfVxufVxuXG5zdWJtaXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlYXJjaCk7XG5cbnNlYXJjaFRleHQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAvLyBJZiB0aGUgdXNlciBwcmVzc2VzIHRoZSBcIkVudGVyXCIga2V5IG9uIHRoZSBrZXlib2FyZFxuICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAvLyBDYW5jZWwgdGhlIGRlZmF1bHQgYWN0aW9uLCBpZiBuZWVkZWRcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIFRyaWdnZXIgdGhlIGJ1dHRvbiBlbGVtZW50IHdpdGggYSBjbGlja1xuICAgIHN1Ym1pdFNlYXJjaC5jbGljaygpO1xuICB9XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gb25sb2FkKCkge1xuICB3ZWVrRGF5KCk7XG4gIGF3YWl0IGdldExvY2F0aW9uKCk7XG4gIC8vIGRpc3BsYXkoZGF0YSk7XG59XG5vbmxvYWQoKTtcblxuZXhwb3J0IHsgd2VhdGhlclVwZGF0ZXMsIHNlYXJjaCB9O1xuIiwiXG5cbmNvbnN0IGhpZ2hUZW1wRWxlbWVudHNDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oaVRlbXBDXCIpO1xuY29uc3QgbG93VGVtcEVsZW1lbnRzQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubG9UZW1wQ1wiKTtcblxuY29uc3QgaGlnaFRlbXBFbGVtZW50c0YgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhpVGVtcEZcIik7XG5jb25zdCBsb3dUZW1wRWxlbWVudHNGID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sb1RlbXBGXCIpO1xuXG5jb25zdCB0ZW1wQyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcENcIik7XG5jb25zdCB0ZW1wRiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcEZcIik7XG5cbmNvbnN0IHdlYXRoZXJFbWJsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53ZWF0aGVyRW1ibGVtXCIpO1xuXG4vL2N1cnJlbnRcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKTtcbmNvbnN0IHRpbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lXCIpO1xuXG5jb25zdCB0ZW1wVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wVG9nZ2xlXCIpO1xuY29uc3Qgd2VhdGhlckNob2ljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFiZWxzXCIpO1xuXG5jb25zdCBjdXJyZW50V2VhdGhlckltYWdlPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRXZWF0aGVySW1nXCIpO1xuXG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGxvY2F0aW9uKSB7XG4gIGxldCByZXNwb25zZSA9IG51bGw7XG4gIFxuICB0cnkge1xuICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZjU5OTJjODIwNTY1NDgyY2IzMDIyNTE1ODIzMTMwNSZxPSR7bG9jYXRpb259JmRheXM9M2AsXG4gICAgICB7XG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDQwMCkge1xuICAgICAgdGhyb3cgbmV3IGVycm9yO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgXG4gICAgcmV0dXJuICBhbGVydChcImVycm9yXCIpO1xuICB9XG5cbiAgbGV0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiB3ZWF0aGVyRGF0YTtcbn1cblxuZnVuY3Rpb24gZmlsbFdlYXRoZXIoZm9yZWNhc3REYXRhKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgaGlnaFRlbXBFbGVtZW50c0ZbaV0udGV4dENvbnRlbnQgPVxuICAgICAgZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh0ZW1wX2YgKyBcIsKwXCI7XG4gICAgbG93VGVtcEVsZW1lbnRzRltpXS50ZXh0Q29udGVudCA9XG4gICAgICBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1pbnRlbXBfZiArIFwiwrBcIjtcbiAgICB3ZWF0aGVyRW1ibGVtc1tpXS5zcmMgPVxuICAgICAgZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24uaWNvbjtcblxuICAgIGhpZ2hUZW1wRWxlbWVudHNDW2ldLnRleHRDb250ZW50ID1cbiAgICAgIGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9jICsgXCLCsFwiO1xuICAgIGxvd1RlbXBFbGVtZW50c0NbaV0udGV4dENvbnRlbnQgPVxuICAgICAgZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5taW50ZW1wX2MgKyBcIsKwXCI7XG4gICAgd2VhdGhlckVtYmxlbXNbaV0uc3JjID1cbiAgICAgIGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLmljb247XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsbEN1cnJlbnQoZm9yZWNhc3REYXRhKSB7XG4gIHRlbXBDLnRleHRDb250ZW50ID0gZm9yZWNhc3REYXRhLmN1cnJlbnQudGVtcF9jICsgYMKwYDtcbiAgdGVtcEYudGV4dENvbnRlbnQgPSBmb3JlY2FzdERhdGEuY3VycmVudC50ZW1wX2YgKyBgwrBgO1xuXG4gIGxvY2F0aW9uLnRleHRDb250ZW50ID1cbiAgICBmb3JlY2FzdERhdGEubG9jYXRpb24ubmFtZSArIFwiLFwiICsgZm9yZWNhc3REYXRhLmxvY2F0aW9uLnJlZ2lvbjtcblxuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHRpbWVFbGVtZW50LnRleHRDb250ZW50ID0gZGF0ZS5nZXRIb3VycygpICsgXCI6XCIgKyBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgY3VycmVudFdlYXRoZXJJbWFnZS5zcmM9Zm9yZWNhc3REYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG59XG5cbnRlbXBUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKHRlbXBUb2dnbGUuY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgIHdlYXRoZXJDaG9pY2UuZGF0YXNldC5jaG9pY2UgPSBcIkZcIjtcbiAgICB0ZW1wRi5oaWRkZW4gPSBmYWxzZTtcbiAgICB0ZW1wQy5oaWRkZW4gPSB0cnVlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBoaWdoVGVtcEVsZW1lbnRzRltpXS5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIGxvd1RlbXBFbGVtZW50c0ZbaV0uaGlkZGVuID0gZmFsc2U7XG5cbiAgICAgIGhpZ2hUZW1wRWxlbWVudHNDW2ldLmhpZGRlbiA9IHRydWU7XG4gICAgICBsb3dUZW1wRWxlbWVudHNDW2ldLmhpZGRlbiA9IHRydWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHdlYXRoZXJDaG9pY2UuZGF0YXNldC5jaG9pY2UgPSBcIkNcIjtcbiAgICB0ZW1wRi5oaWRkZW4gPSB0cnVlO1xuICAgIHRlbXBDLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIGhpZ2hUZW1wRWxlbWVudHNGW2ldLmhpZGRlbiA9IHRydWU7XG4gICAgICBsb3dUZW1wRWxlbWVudHNGW2ldLmhpZGRlbiA9IHRydWU7XG5cbiAgICAgIGhpZ2hUZW1wRWxlbWVudHNDW2ldLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgbG93VGVtcEVsZW1lbnRzQ1tpXS5oaWRkZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnQgeyBnZXRGb3JlY2FzdCwgZmlsbFdlYXRoZXIsIGZpbGxDdXJyZW50IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=