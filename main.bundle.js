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
  if (data != null) {
    (0,_weather__WEBPACK_IMPORTED_MODULE_2__.fillCurrent)(data);
    (0,_weather__WEBPACK_IMPORTED_MODULE_2__.fillWeather)(data);
    (0,_imageBackground_js__WEBPACK_IMPORTED_MODULE_4__.display)(data);
  } else {
    loadingSymbol.style.display = "none";
  }

}

async function search() {

  if (searchText.checkValidity() == true) {
    loadingSymbol.style.display = "block";
    let city = document.getElementById("searchText").value;
    await weatherUpdates(city);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esa0RBQWtELGdDQUFnQyw4Q0FBOEMscUJBQXFCLHFCQUFxQixpQkFBaUIsK0JBQStCLFVBQVUscUJBQXFCLGVBQWUsb0JBQW9CLGNBQWMsYUFBYSw0QkFBNEIsZ0JBQWdCLGlCQUFpQixLQUFLLHFKQUFxSixpQkFBaUIsZUFBZSxnQkFBZ0IsMkJBQTJCLHFDQUFxQyx1QkFBdUIsMEJBQTBCLDJCQUEyQiwyQ0FBMkMsdUJBQXVCLGFBQWEsY0FBYyxLQUFLLDJCQUEyQixRQUFRLGdDQUFnQyxLQUFLLFVBQVUsa0NBQWtDLEtBQUssTUFBTSw0RUFBNEUsa0JBQWtCLGlCQUFpQixrQkFBa0IsbUNBQW1DLGdDQUFnQyxxQ0FBcUMsR0FBRyxhQUFhLGdCQUFnQixHQUFHLGFBQWEseUJBQXlCLHVCQUF1QixHQUFHLGNBQWMsNEJBQTRCLHVCQUF1QixTQUFTLGlCQUFpQixrQkFBa0Isd0JBQXdCLGtDQUFrQyx3QkFBd0Isb0JBQW9CLE9BQU8sV0FBVyxrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsR0FBRyxrQkFBa0Isa0JBQWtCLG1DQUFtQyxnQ0FBZ0MsMEJBQTBCLEdBQUcsbUJBQW1CLGtCQUFrQiwwQ0FBMEMsdUNBQXVDLGlCQUFpQiwyQkFBMkIsdUJBQXVCLHVCQUF1QixHQUFHLG1CQUFtQix1QkFBdUIsTUFBTSxhQUFhLHNCQUFzQixtQkFBbUIseUJBQXlCLDBCQUEwQix3QkFBd0IsMEJBQTBCLCtDQUErQyxpQ0FBaUMsb0JBQW9CLGNBQWMsaUNBQWlDLEdBQUcsbUJBQW1CLGtCQUFrQixHQUFHLHFCQUFxQix1QkFBdUIsV0FBVyxZQUFZLGdCQUFnQixpQkFBaUIsaUNBQWlDLDJCQUEyQixxQ0FBcUMsR0FBRyw2QkFBNkIsa0JBQWtCLHVCQUF1QixXQUFXLFlBQVksK0JBQStCLGdDQUFnQywyQ0FBMkMsMkJBQTJCLCtDQUErQyxxQ0FBcUMsR0FBRyxxQ0FBcUMsNEJBQTRCLEdBQUcsNkNBQTZDLDhEQUE4RCxHQUFHLHFCQUFxQix1QkFBdUIsYUFBYSxZQUFZLGdCQUFnQixpQkFBaUIsb0JBQW9CLDRCQUE0QixxQ0FBcUMsR0FBRyw0QkFBNEIsc0JBQXNCLHVCQUF1QixlQUFlLG1CQUFtQixlQUFlLGdEQUFnRCxxQ0FBcUMsR0FBRyw2QkFBNkIsc0JBQXNCLHVCQUF1QixjQUFjLG1CQUFtQixlQUFlLHNEQUFzRCxxQ0FBcUMsR0FBRyw0Q0FBNEMsZUFBZSxHQUFHLDZDQUE2QyxlQUFlLEdBQUcsU0FBUyw0RUFBNEUsS0FBSyxjQUFjLGFBQWEsYUFBYSxhQUFhLFdBQVcsY0FBYyxRQUFRLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxlQUFlLFFBQVEsS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFlBQVksWUFBWSxhQUFhLGFBQWEsU0FBUyxLQUFLLGFBQWEsT0FBTyxNQUFNLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsaUNBQWlDLGdDQUFnQyw4Q0FBOEMscUJBQXFCLHFCQUFxQixpQkFBaUIsK0JBQStCLFVBQVUscUJBQXFCLGVBQWUsb0JBQW9CLGNBQWMsYUFBYSw0QkFBNEIsZ0JBQWdCLGlCQUFpQixLQUFLLHFKQUFxSixpQkFBaUIsZUFBZSxnQkFBZ0IsMkJBQTJCLHFDQUFxQyx1QkFBdUIsMEJBQTBCLDJCQUEyQiwyQ0FBMkMsdUJBQXVCLGFBQWEsY0FBYyxLQUFLLDJCQUEyQixRQUFRLGdDQUFnQyxLQUFLLFVBQVUsa0NBQWtDLEtBQUssTUFBTSw0RUFBNEUsa0JBQWtCLGlCQUFpQixrQkFBa0IsbUNBQW1DLGdDQUFnQyxxQ0FBcUMsR0FBRyxhQUFhLGdCQUFnQixHQUFHLGFBQWEseUJBQXlCLHVCQUF1QixHQUFHLGNBQWMsNEJBQTRCLHVCQUF1QixTQUFTLGlCQUFpQixrQkFBa0Isd0JBQXdCLGtDQUFrQyx3QkFBd0Isb0JBQW9CLE9BQU8sV0FBVyxrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsR0FBRyxrQkFBa0Isa0JBQWtCLG1DQUFtQyxnQ0FBZ0MsMEJBQTBCLEdBQUcsbUJBQW1CLGtCQUFrQiwwQ0FBMEMsdUNBQXVDLGlCQUFpQiwyQkFBMkIsdUJBQXVCLHVCQUF1QixHQUFHLG1CQUFtQix1QkFBdUIsTUFBTSxhQUFhLHNCQUFzQixtQkFBbUIseUJBQXlCLDBCQUEwQix3QkFBd0IsMEJBQTBCLCtDQUErQyxpQ0FBaUMsb0JBQW9CLGNBQWMsaUNBQWlDLEdBQUcsbUJBQW1CLGtCQUFrQixHQUFHLHFCQUFxQix1QkFBdUIsV0FBVyxZQUFZLGdCQUFnQixpQkFBaUIsaUNBQWlDLDJCQUEyQixxQ0FBcUMsR0FBRyw2QkFBNkIsa0JBQWtCLHVCQUF1QixXQUFXLFlBQVksK0JBQStCLGdDQUFnQywyQ0FBMkMsMkJBQTJCLCtDQUErQyxxQ0FBcUMsR0FBRyxxQ0FBcUMsNEJBQTRCLEdBQUcsNkNBQTZDLDhEQUE4RCxHQUFHLHFCQUFxQix1QkFBdUIsYUFBYSxZQUFZLGdCQUFnQixpQkFBaUIsb0JBQW9CLDRCQUE0QixxQ0FBcUMsR0FBRyw0QkFBNEIsc0JBQXNCLHVCQUF1QixlQUFlLG1CQUFtQixlQUFlLGdEQUFnRCxxQ0FBcUMsR0FBRyw2QkFBNkIsc0JBQXNCLHVCQUF1QixjQUFjLG1CQUFtQixlQUFlLHNEQUFzRCxxQ0FBcUMsR0FBRyw0Q0FBNEMsZUFBZSxHQUFHLDZDQUE2QyxlQUFlLEdBQUcscUJBQXFCO0FBQ3hsUztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSwrb0JBQStvQixjQUFjLGVBQWUsY0FBYyxvQkFBb0Isa0JBQWtCLDZCQUE2QixHQUFHLGdKQUFnSixtQkFBbUIsR0FBRyxRQUFRLG1CQUFtQixHQUFHLFVBQVUscUJBQXFCLEdBQUcsaUJBQWlCLGlCQUFpQixHQUFHLDJEQUEyRCxnQkFBZ0Isa0JBQWtCLEdBQUcsU0FBUyw4QkFBOEIsc0JBQXNCLEdBQUcsU0FBUyx1RkFBdUYsTUFBTSxpQkFBaUIsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsK25CQUErbkIsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLGtCQUFrQiw2QkFBNkIsR0FBRyxnSkFBZ0osbUJBQW1CLEdBQUcsUUFBUSxtQkFBbUIsR0FBRyxVQUFVLHFCQUFxQixHQUFHLGlCQUFpQixpQkFBaUIsR0FBRywyREFBMkQsZ0JBQWdCLGtCQUFrQixHQUFHLFNBQVMsOEJBQThCLHNCQUFzQixHQUFHLHFCQUFxQjtBQUNwckY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywyRkFBTzs7OztBQUlrRDtBQUMxRSxPQUFPLGlFQUFlLDJGQUFPLElBQUksa0dBQWMsR0FBRyxrR0FBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29DO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLFNBQVM7QUFDekUsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLGlEQUFNO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlEQUFNO0FBQ1I7QUFDQTs7QUFTRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRXNDO0FBQ0k7QUFDRDtBQUNGO0FBQ0Y7OztBQUd2Qzs7O0FBR0E7QUFDQTtBQUNBLG9KQUFvSixNQUFNLEVBQUUsUUFBUSxjQUFjLElBQUksUUFBUSxLQUFLO0FBQ25NOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxlQUFlLHFEQUFZO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEpBQTBKLEdBQUc7QUFDN0osTUFBTTtBQUNOOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtDQUErQyxJQUFJO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLGlEQUFLO0FBQ3JCLEtBQUs7QUFDTCxrQkFBa0Isa0RBQU07QUFDeEIsS0FBSztBQUNMLGtCQUFrQixnREFBSTtBQUN0QixLQUFLO0FBQ0wsa0JBQWtCLG9EQUFLO0FBQ3ZCO0FBQ0EsaURBQWlELFlBQVk7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRk87QUFDTDtBQUM2QztBQUMvQjtBQUNZO0FBQ1I7O0FBRXZDO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxlQUFlLHFEQUFXO0FBQzFCO0FBQ0EsSUFBSSxxREFBVztBQUNmLElBQUkscURBQVc7QUFDZixJQUFJLDREQUFPO0FBQ1gsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxFQUFFLGdEQUFPO0FBQ1QsUUFBUSxvREFBVztBQUNuQjtBQUNBO0FBQ0E7O0FBRWtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRsQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRixTQUFTO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZVJlc2V0LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3N0eWxlUmVzZXQuY3NzP2E1ZTUiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ltYWdlQmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvd2VhdGhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgXFxuXFxuICBmb250LWZhbWlseTogbW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS40ZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWl4LWJsZW5kLW1vZGU6IGx1bWlub3NpdHk7XFxuICBcXG4gXFxufVxcblxcblxcbi5sb2FkZXJXcmFwcGVye1xcbiAgei1pbmRleDogMTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG59XFxuXFxuXFxuLyogLS0tLS0tLS0tLWh0dHBzOi8vZ2l0aHViLmNvbS92aW5lZXRodHJ2IC0taHR0cHM6Ly9naXRodWIuY29tL3ZpbmVldGh0cnYvY3NzLWxvYWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLmxvYWRlciB7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogNWVtO1xcbiAgaGVpZ2h0OiA1ZW07XFxuICBib3JkZXI6IDVweCBzb2xpZCAjRkZGO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYW5pbWF0aW9uOiByb3RhdGlvbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQwJTtcXG4gIGxlZnQ6IDQ1JTtcXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgcm90YXRpb24ge1xcbiAgMCUge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG4gIH0gXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi53cmFwcGVye1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSA1MCU7XFxuXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uc2VhcmNoIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4jc2VhcmNoVGV4dHtcXG4gIGJvcmRlcjogd2hpdGUgMnB4IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgXFxufVxcblxcblxcbi53ZWVrRGF5cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcbiAgZ3JpZC1jb2x1bW46IDEgLzM7XFxuICBtYXJnaW46IDBlbSA3ZW07XFxuXFxuXFxufVxcblxcbi5IaUxvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4udGVtcENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZW0gM2VtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZW0gM2VtO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9wQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA4ZW0pO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgM2VtKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG4jbG9jYXRpb24ge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiBcXG59XFxuXFxuLnRvZ2dsZSB7XFxuICBcXG4gIC0td2lkdGg6IDU1cHg7XFxuICAtLWhlaWdodDogMzBweDtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiB2YXIoLS13aWR0aCk7XFxuICBoZWlnaHQ6IHZhcigtLWhlaWdodCk7XFxuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZWlnaHQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGVmdDogMzAlO1xcblxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XFxufVxcblxcbi50b2dnbGUgaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZ2dsZSAuc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhlaWdodCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50b2dnbGUgLnNsaWRlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLWhlaWdodCkpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlaWdodCkpO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1oZWlnaHQpIC8gMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50b2dnbGUgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi50b2dnbGUgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYyh2YXIoLS13aWR0aCkgLSB2YXIoLS1oZWlnaHQpKSk7XFxufVxcblxcbi50b2dnbGUgLmxhYmVscyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDhweDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50b2dnbGUgLmxhYmVsczo6YWZ0ZXIge1xcbiAgY29udGVudDogYXR0cihDwrApO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDVweDtcXG4gIGNvbG9yOiAjNGQ0ZDRkO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRvZ2dsZSAubGFiZWxzOjpiZWZvcmUge1xcbiAgY29udGVudDogYXR0cihGwrApO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNXB4O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBvcGFjaXR5OiAwO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9nZ2xlIGlucHV0OmNoZWNrZWQgfiAubGFiZWxzOjphZnRlciB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4udG9nZ2xlIGlucHV0OmNoZWNrZWQgfiAubGFiZWxzOjpiZWZvcmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7RUFDRSwyQkFBMkI7OztFQUczQixtQ0FBbUM7RUFDbkMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osMEJBQTBCOzs7QUFHNUI7OztBQUdBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUTtFQUNSLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTs7QUFFZDs7O0FBR0EsbUlBQW1JO0FBQ25JO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Q7O0VBRUE7RUFDQTtNQUNJLHVCQUF1QjtFQUMzQjtFQUNBO01BQ0kseUJBQXlCO0VBQzdCO0VBQ0E7QUFDRiw0REFBNEQ7O0FBRTVEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjs7RUFFM0IsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7OztBQUdwQjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2Qjs7RUFFN0IsaUJBQWlCO0VBQ2pCLGVBQWU7OztBQUdqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQ0FBa0M7RUFDbEMsWUFBWTs7RUFFWixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7OztBQUlBO0VBQ0Usa0JBQWtCOztBQUVwQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsY0FBYzs7RUFFZCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsMENBQTBDO0VBQzFDLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsU0FBUzs7RUFFVCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0Isc0NBQXNDO0VBQ3RDLHNCQUFzQjtFQUN0QiwwQ0FBMEM7RUFDMUMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseURBQXlEO0FBQzNEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCxVQUFVO0VBQ1YsMkNBQTJDO0VBQzNDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGNBQWM7RUFDZCxVQUFVO0VBQ1YsaURBQWlEO0VBQ2pELGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIFxcblxcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuNGVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1peC1ibGVuZC1tb2RlOiBsdW1pbm9zaXR5O1xcbiAgXFxuIFxcbn1cXG5cXG5cXG4ubG9hZGVyV3JhcHBlcntcXG4gIHotaW5kZXg6IDE7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxufVxcblxcblxcbi8qIC0tLS0tLS0tLS1odHRwczovL2dpdGh1Yi5jb20vdmluZWV0aHRydiAtLWh0dHBzOi8vZ2l0aHViLmNvbS92aW5lZXRodHJ2L2Nzcy1sb2FkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi5sb2FkZXIge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDVlbTtcXG4gIGhlaWdodDogNWVtO1xcbiAgYm9yZGVyOiA1cHggc29saWQgI0ZGRjtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGFuaW1hdGlvbjogcm90YXRpb24gMXMgbGluZWFyIGluZmluaXRlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0MCU7XFxuICBsZWZ0OiA0NSU7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIHJvdGF0aW9uIHtcXG4gIDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxuICB9IFxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ud3JhcHBlcntcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgNTAlO1xcblxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLnNlYXJjaCB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuI3NlYXJjaFRleHR7XFxuICBib3JkZXI6IHdoaXRlIDJweCBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gIFxcbn1cXG5cXG5cXG4ud2Vla0RheXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXG4gIGdyaWQtY29sdW1uOiAxIC8zO1xcbiAgbWFyZ2luOiAwZW0gN2VtO1xcblxcblxcbn1cXG5cXG4uSGlMbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnRlbXBDb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2VtIDNlbTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2VtIDNlbTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvcENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgOGVtKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDNlbSk7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuI2xvY2F0aW9uIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gXFxufVxcblxcbi50b2dnbGUge1xcbiAgXFxuICAtLXdpZHRoOiA1NXB4O1xcbiAgLS1oZWlnaHQ6IDMwcHg7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogdmFyKC0td2lkdGgpO1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGVpZ2h0KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGxlZnQ6IDMwJTtcXG5cXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xcbn1cXG5cXG4udG9nZ2xlIGlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2dnbGUgLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9nZ2xlIC5zbGlkZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1oZWlnaHQpKTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1oZWlnaHQpKTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0taGVpZ2h0KSAvIDIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9nZ2xlIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udG9nZ2xlIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGModmFyKC0td2lkdGgpIC0gdmFyKC0taGVpZ2h0KSkpO1xcbn1cXG5cXG4udG9nZ2xlIC5sYWJlbHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA4cHg7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udG9nZ2xlIC5sYWJlbHM6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IGF0dHIoQ8KwKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1cHg7XFxuICBjb2xvcjogIzRkNGQ0ZDtcXG4gIG9wYWNpdHk6IDE7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50b2dnbGUgLmxhYmVsczo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IGF0dHIoRsKwKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDVweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gLmxhYmVsczo6YWZ0ZXIge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gLmxhYmVsczo6YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlUmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZVJlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVSZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImxldCBkYXlFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF0ZVwiKTtcblxuY29uc3Qgd2Vla0RheXMgPSBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVzXCIsIFwiV2VkXCIsIFwiVGh1cnNcIiwgXCJGcmlcIiwgXCJTYXRcIl07XG5sZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4vL2RlZmF1bHRcblxuZnVuY3Rpb24gd2Vla0RheSgpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBsZXQgZGF5ID0gbmV3IERhdGUoY3VycmVudERhdGUuZ2V0VGltZSgpICsgaSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgIGRheUVsZW1lbnRzW2ldLnRleHRDb250ZW50ID0gd2Vla0RheXNbZGF5LmdldERheSgpXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xufVxuXG5sZXQgaW5pdGlhbExvY2F0aW9uO1xuXG5mdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcbiAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICB3aW5kb3cubmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcbiAgICAgIGxvY2F0aW9uR3JhbnRlZCxcbiAgICAgIGxvY2F0aW9uRGVuaWVkXG4gICAgKTtcbiAgfVxufVxuaW1wb3J0IHsgc2VhcmNoIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmxldCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFRleHRcIik7XG5cbmFzeW5jIGZ1bmN0aW9uIGxvY2F0aW9uR3JhbnRlZChyZXR1cm5Mb2NhdGlvbikge1xuICBsZXQgcG9zaXRpb24gPVxuICAgIHJldHVybkxvY2F0aW9uLmNvb3Jkcy5sYXRpdHVkZSArIFwiLFwiICsgcmV0dXJuTG9jYXRpb24uY29vcmRzLmxvbmdpdHVkZTtcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/bGF0bG5nPSR7cG9zaXRpb259JmtleT1BSXphU3lDNlBra1RlS0FEMXpXSDVscFZIWTQ3WXdyeGhpOWpLYVlgLFxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICApO1xuXG4gIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBpbml0aWFsTG9jYXRpb24gPVxuICAgIGRhdGEucmVzdWx0c1swXS5hZGRyZXNzX2NvbXBvbmVudHNbM10ubG9uZ19uYW1lICtcbiAgICBcIixcIiArXG4gICAgZGF0YS5yZXN1bHRzWzBdLmFkZHJlc3NfY29tcG9uZW50c1s1XS5zaG9ydF9uYW1lO1xuXG4gIHNlYXJjaEJhci52YWx1ZSA9aW5pdGlhbExvY2F0aW9uO1xuICBzZWFyY2goKTtcbiAgc2VhcmNoQmFyLnZhbHVlPVwiXCI7XG59XG5cbmZ1bmN0aW9uIGxvY2F0aW9uRGVuaWVkKCkge1xuaW5pdGlhbExvY2F0aW9uPVwibmV3IHlvcmtcIlxuICBzZWFyY2hCYXIudmFsdWUgPWluaXRpYWxMb2NhdGlvbjtcbiAgc2VhcmNoKCk7XG4gIHNlYXJjaEJhci52YWx1ZT1cIlwiO1xufVxuXG5leHBvcnQge1xuICB3ZWVrRGF5LFxuICBnZXRSYW5kb21JbnQsXG4gIGdldExvY2F0aW9uLFxuICBpbml0aWFsTG9jYXRpb24sXG4gIGxvY2F0aW9uR3JhbnRlZCxcbiAgbG9jYXRpb25EZW5pZWQsXG59O1xuIiwiaW1wb3J0IHsgZ2V0UmFuZG9tSW50IH0gZnJvbSBcIi4vaGVscGVyXCI7XG5pbXBvcnQgY2xlYXIgZnJvbSBcIi4vc2t5SW1hZ2VzL2NsZWFyU2t5LmpwZ1wiXG5pbXBvcnQgY2xvdWRzIGZyb20gXCIuL3NreUltYWdlcy9DbG91ZHkuanBnXCJcbmltcG9ydCByYWlueSBmcm9tIFwiLi9za3lJbWFnZXMvcmFpbnkuanBnXCJcbmltcG9ydCBzbm93IGZyb20gXCIuL3NreUltYWdlcy9zbm93LmpwZ1wiXG5cblxuY29uc3QgbG9hZGluZ1N5bWJvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGVyV3JhcHBlclwiKTtcblxuXG5hc3luYyBmdW5jdGlvbiBnZXRQaG90b09wdGlvbnMoY2l0eSwgcmVnaW9uLCBsYXQsIGxvbmcsIHdlYXRoZXJTdGF0dXMpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkuZmxpY2tyLmNvbS9zZXJ2aWNlcy9yZXN0Lz9tZXRob2Q9ZmxpY2tyLnBob3Rvcy5zZWFyY2gmYXBpX2tleT04ZTNlYTRhMDU1MzY1ZjZhNzY2NThmYzk2ZWE1MTE1YyZmb3JtYXQ9anNvbiZub2pzb25jYWxsYmFjaz0xJnRleHQ9JHtjaXR5fSAke3JlZ2lvbn0gc2t5bGluZSZsYXQ9JHtsYXR9Jmxvbmc9JHtsb25nfSZoYXNfZ2VvPTFgXG4gICk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiBcbiAgbGV0IHBob3RvSWQ7XG4gIGlmIChkYXRhLnBob3Rvcy5wYWdlcyA9PSAwKSB7XG4gICAgcGhvdG9JZCA9IHdlYXRoZXJTdGF0dXM7XG4gIH0gZWxzZSB7XG4gICAgbGV0IG1heCA9IGRhdGEucGhvdG9zLnBob3RvLmxlbmd0aDtcbiAgICBsZXQgcmFuZCA9IGdldFJhbmRvbUludChtYXgpO1xuICAgIHBob3RvSWQgPSBkYXRhLnBob3Rvcy5waG90b1tyYW5kXS5pZDtcbiAgfVxuXG4gIHJldHVybiBwaG90b0lkO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRIaWdoUmVzKGlkKSB7XG4gIGNvbnN0IGF2YWlsYWJsZVNpemVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLmZsaWNrci5jb20vc2VydmljZXMvcmVzdC8/bWV0aG9kPWZsaWNrci5waG90b3MuZ2V0U2l6ZXMmYXBpX2tleT04ZTNlYTRhMDU1MzY1ZjZhNzY2NThmYzk2ZWE1MTE1YyZmb3JtYXQ9anNvbiZub2pzb25jYWxsYmFjaz0xJnBob3RvX2lkPSR7aWR9YCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcblxuICBjb25zdCBzaXplc0RhdGEgPSBhd2FpdCBhdmFpbGFibGVTaXplcy5qc29uKCk7XG5cbiAgLy9hcnJheSBvZiBzaXplc1xuICBsZXQgc2l6ZU9wdGlvbnMgPSBzaXplc0RhdGEuc2l6ZXMuc2l6ZTtcbiAgbGV0IHVybCA9IHNpemVPcHRpb25zW3NpemVPcHRpb25zLmxlbmd0aCAtIDFdLnNvdXJjZTtcbiBcblxuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt1cmx9KWA7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCI7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gXCJjZW50ZXJcIjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheShpbmZvKSB7XG4gIGxldCBjaXR5ID0gaW5mby5sb2NhdGlvbi5uYW1lO1xuICBsZXQgcmVnaW9uID0gaW5mby5sb2NhdGlvbi5yZWdpb247XG4gIGxldCBsYXQgPSBpbmZvLmxvY2F0aW9uLmxhdDtcbiAgbGV0IGxvbmcgPSBpbmZvLmxvY2F0aW9uLmxvbjtcbiAgbGV0IHdlYXRoZXJTdGF0dXMgPSBpbmZvLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG5cbiAgbGV0IGlkID0gYXdhaXQgZ2V0UGhvdG9PcHRpb25zKGNpdHksIHJlZ2lvbiwgbGF0LCBsb25nLCB3ZWF0aGVyU3RhdHVzKTtcblxuXG4gIGNvbnN0IHJhaW4gPSBbXCJyYWluXCIsXCJkcml6emxlXCIsXVxuICBjb25zdCBjbG91ZHkgPSBbXCJjbG91ZHlcIixcIm92ZXJjYXN0XCJdXG4gIGxldCBpbWFnZUNob2ljZTtcblxuICBpZiAoL14oW14wLTldKikkLy50ZXN0KGlkKSkge1xuICAgIGlmKHJhaW4uc29tZShlbD0+IHdlYXRoZXJTdGF0dXMuaW5jbHVkZXMoZWwpKSl7XG4gIGltYWdlQ2hvaWNlID0gcmFpbnk7XG4gICAgfWVsc2UgaWYoY2xvdWR5LnNvbWUoZWw9PiB3ZWF0aGVyU3RhdHVzLmluY2x1ZGVzKGVsKSkpe1xuICAgICAgaW1hZ2VDaG9pY2U9Y2xvdWRzO1xuICAgIH1lbHNlIGlmKHdlYXRoZXJTdGF0dXMuaW5jbHVkZXMoXCJzbm93XCIpKXtcbiAgICAgIGltYWdlQ2hvaWNlPXNub3c7XG4gICAgfWVsc2V7XG4gICAgICBpbWFnZUNob2ljZT1jbGVhcjtcbiAgICB9XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2VDaG9pY2V9KWA7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY292ZXJcIjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IFwiY2VudGVyXCI7XG4gIH1cbiAgZWxzZSB7XG4gICAgYXdhaXQgZ2V0SGlnaFJlcyhpZCk7XG4gIH1cbiAgbG9hZGluZ1N5bWJvbC5zdHlsZS5kaXNwbGF5PSdub25lJztcblxuICBcblxufVxuXG5leHBvcnQgeyBkaXNwbGF5IH07XG4iLCJpbXBvcnQgXCIuL3N0eWxlUmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgZmlsbFdlYXRoZXIsIGdldEZvcmVjYXN0LCBmaWxsQ3VycmVudCB9IGZyb20gXCIuL3dlYXRoZXJcIjtcbmltcG9ydCB7IHdlZWtEYXkgfSBmcm9tIFwiLi9oZWxwZXJcIjtcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tIFwiLi9pbWFnZUJhY2tncm91bmQuanNcIjtcbmltcG9ydCB7IGdldExvY2F0aW9uIH0gZnJvbSBcIi4vaGVscGVyXCI7XG5cbmNvbnN0IHN1Ym1pdFNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoU3VibWl0XCIpO1xuY29uc3Qgc2VhcmNoVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoVGV4dFwiKTtcblxubGV0IGRhdGE7XG5cbmNvbnN0IGxvYWRpbmdTeW1ib2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRlcldyYXBwZXJcIik7XG5cbmFzeW5jIGZ1bmN0aW9uIHdlYXRoZXJVcGRhdGVzKHNlYXJjaGVkQ2l0eSkge1xuICBkYXRhID0gYXdhaXQgZ2V0Rm9yZWNhc3Qoc2VhcmNoZWRDaXR5KTtcbiAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgIGZpbGxDdXJyZW50KGRhdGEpO1xuICAgIGZpbGxXZWF0aGVyKGRhdGEpO1xuICAgIGRpc3BsYXkoZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgbG9hZGluZ1N5bWJvbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxufVxuXG5hc3luYyBmdW5jdGlvbiBzZWFyY2goKSB7XG5cbiAgaWYgKHNlYXJjaFRleHQuY2hlY2tWYWxpZGl0eSgpID09IHRydWUpIHtcbiAgICBsb2FkaW5nU3ltYm9sLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgbGV0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFRleHRcIikudmFsdWU7XG4gICAgYXdhaXQgd2VhdGhlclVwZGF0ZXMoY2l0eSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hUZXh0XCIpLnZhbHVlID0gXCJcIjtcbiAgfVxufVxuXG5zdWJtaXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlYXJjaCk7XG5cbnNlYXJjaFRleHQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAvLyBJZiB0aGUgdXNlciBwcmVzc2VzIHRoZSBcIkVudGVyXCIga2V5IG9uIHRoZSBrZXlib2FyZFxuICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAvLyBDYW5jZWwgdGhlIGRlZmF1bHQgYWN0aW9uLCBpZiBuZWVkZWRcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIFRyaWdnZXIgdGhlIGJ1dHRvbiBlbGVtZW50IHdpdGggYSBjbGlja1xuICAgIHN1Ym1pdFNlYXJjaC5jbGljaygpO1xuICB9XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gb25sb2FkKCkge1xuICB3ZWVrRGF5KCk7XG4gIGF3YWl0IGdldExvY2F0aW9uKCk7XG4gIC8vIGRpc3BsYXkoZGF0YSk7XG59XG5vbmxvYWQoKTtcblxuZXhwb3J0IHsgd2VhdGhlclVwZGF0ZXMsIHNlYXJjaCB9O1xuIiwiXG5cbmNvbnN0IGhpZ2hUZW1wRWxlbWVudHNDID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oaVRlbXBDXCIpO1xuY29uc3QgbG93VGVtcEVsZW1lbnRzQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubG9UZW1wQ1wiKTtcblxuY29uc3QgaGlnaFRlbXBFbGVtZW50c0YgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhpVGVtcEZcIik7XG5jb25zdCBsb3dUZW1wRWxlbWVudHNGID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sb1RlbXBGXCIpO1xuXG5jb25zdCB0ZW1wQyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcENcIik7XG5jb25zdCB0ZW1wRiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcEZcIik7XG5cbmNvbnN0IHdlYXRoZXJFbWJsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53ZWF0aGVyRW1ibGVtXCIpO1xuXG4vL2N1cnJlbnRcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKTtcbmNvbnN0IHRpbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lXCIpO1xuXG5jb25zdCB0ZW1wVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wVG9nZ2xlXCIpO1xuY29uc3Qgd2VhdGhlckNob2ljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFiZWxzXCIpO1xuXG5jb25zdCBjdXJyZW50V2VhdGhlckltYWdlPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRXZWF0aGVySW1nXCIpO1xuXG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGxvY2F0aW9uKSB7XG4gIGxldCByZXNwb25zZSA9IG51bGw7XG4gIFxuICB0cnkge1xuICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZjU5OTJjODIwNTY1NDgyY2IzMDIyNTE1ODIzMTMwNSZxPSR7bG9jYXRpb259JmRheXM9M2AsXG4gICAgICB7XG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDQwMCkge1xuICAgICAgdGhyb3cgbmV3IGVycm9yO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgXG4gICAgcmV0dXJuICBhbGVydChcIkludmFsaWQgc2VhcmNoLlRyeSBhZ2Fpbi5cIik7XG4gIH1cblxuICBsZXQgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuXG5mdW5jdGlvbiBmaWxsV2VhdGhlcihmb3JlY2FzdERhdGEpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBoaWdoVGVtcEVsZW1lbnRzRltpXS50ZXh0Q29udGVudCA9XG4gICAgICBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHRlbXBfZiArIFwiwrBcIjtcbiAgICBsb3dUZW1wRWxlbWVudHNGW2ldLnRleHRDb250ZW50ID1cbiAgICAgIGZvcmVjYXN0RGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWludGVtcF9mICsgXCLCsFwiO1xuICAgIHdlYXRoZXJFbWJsZW1zW2ldLnNyYyA9XG4gICAgICBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi5pY29uO1xuXG4gICAgaGlnaFRlbXBFbGVtZW50c0NbaV0udGV4dENvbnRlbnQgPVxuICAgICAgZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh0ZW1wX2MgKyBcIsKwXCI7XG4gICAgbG93VGVtcEVsZW1lbnRzQ1tpXS50ZXh0Q29udGVudCA9XG4gICAgICBmb3JlY2FzdERhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1pbnRlbXBfYyArIFwiwrBcIjtcbiAgICB3ZWF0aGVyRW1ibGVtc1tpXS5zcmMgPVxuICAgICAgZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24uaWNvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaWxsQ3VycmVudChmb3JlY2FzdERhdGEpIHtcbiAgdGVtcEMudGV4dENvbnRlbnQgPSBmb3JlY2FzdERhdGEuY3VycmVudC50ZW1wX2MgKyBgwrBgO1xuICB0ZW1wRi50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF0YS5jdXJyZW50LnRlbXBfZiArIGDCsGA7XG5cbiAgbG9jYXRpb24udGV4dENvbnRlbnQgPVxuICAgIGZvcmVjYXN0RGF0YS5sb2NhdGlvbi5uYW1lICsgXCIsXCIgKyBmb3JlY2FzdERhdGEubG9jYXRpb24ucmVnaW9uO1xuXG4gIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgdGltZUVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRlLmdldEhvdXJzKCkgKyBcIjpcIiArIGRhdGUuZ2V0TWludXRlcygpO1xuICBjdXJyZW50V2VhdGhlckltYWdlLnNyYz1mb3JlY2FzdERhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbn1cblxudGVtcFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAodGVtcFRvZ2dsZS5jaGVja2VkID09IGZhbHNlKSB7XG4gICAgd2VhdGhlckNob2ljZS5kYXRhc2V0LmNob2ljZSA9IFwiRlwiO1xuICAgIHRlbXBGLmhpZGRlbiA9IGZhbHNlO1xuICAgIHRlbXBDLmhpZGRlbiA9IHRydWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIGhpZ2hUZW1wRWxlbWVudHNGW2ldLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgbG93VGVtcEVsZW1lbnRzRltpXS5oaWRkZW4gPSBmYWxzZTtcblxuICAgICAgaGlnaFRlbXBFbGVtZW50c0NbaV0uaGlkZGVuID0gdHJ1ZTtcbiAgICAgIGxvd1RlbXBFbGVtZW50c0NbaV0uaGlkZGVuID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgd2VhdGhlckNob2ljZS5kYXRhc2V0LmNob2ljZSA9IFwiQ1wiO1xuICAgIHRlbXBGLmhpZGRlbiA9IHRydWU7XG4gICAgdGVtcEMuaGlkZGVuID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgaGlnaFRlbXBFbGVtZW50c0ZbaV0uaGlkZGVuID0gdHJ1ZTtcbiAgICAgIGxvd1RlbXBFbGVtZW50c0ZbaV0uaGlkZGVuID0gdHJ1ZTtcblxuICAgICAgaGlnaFRlbXBFbGVtZW50c0NbaV0uaGlkZGVuID0gZmFsc2U7XG4gICAgICBsb3dUZW1wRWxlbWVudHNDW2ldLmhpZGRlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydCB7IGdldEZvcmVjYXN0LCBmaWxsV2VhdGhlciwgZmlsbEN1cnJlbnQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==