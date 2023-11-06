/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  background-color: rgb(79, 111, 82);\n}\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n}\n\nheader {\n  background-color: #3a4d39;\n  color: white;\n  font-size: xx-large;\n  font-weight: bolder;\n  padding: 20px;\n}\n\n.container {\n  display: flex;\n  gap: 5em;\n  justify-content: center;\n}\n\n.board-container {\n  background-color: #739072;\n  display: grid;\n  grid-template-columns: repeat(10, auto);\n  grid-template-rows: repeat(10, auto);\n  width: 50%;\n  height: 50%;\n  max-height: 25em;\n  max-width: 25em;\n  border: 1px solid #ece3ce;\n  border-radius: 5px;\n  padding: 10px;\n}\n\n.game-square {\n  border: 1px solid black;\n  aspect-ratio: 1;\n}\n\n.game-square#ship {\n  background-color: #ece3ce;\n}\n\n#cpu .game-square:hover,\n.ship-menu > button:hover {\n  background-color: rgb(255, 229, 229);\n}\n\n#cpu .game-square:active {\n  background-color: rgb(255, 255, 255);\n}\n\n#winner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 50px;\n  background-color: red;\n  padding: 30px;\n}\n\n.hit-ship {\n  background-color: #630505;\n}\n\n.ship-menu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px;\n  background-color: #3a4d39;\n  border: 1px solid black;\n  border-radius: 5px;\n  gap: 5px;\n}\n\n.ship-menu > button {\n  border-radius: 5px;\n  border: 1px solid black;\n  width: 10rem;\n  height: 2rem;\n  background-color: rgb(184, 207, 255);\n  color: rgb(26, 26, 26);\n  font-size: large;\n  font-weight: bold;\n}\n\n.ship-menu > h5 {\n  color: white;\n  font-size: xx-large;\n  font-weight: bolder;\n}\n\n.ship-menu > #ship-menu-subhead {\n  color: white;\n  font-size: x-large;\n  font-weight: bolder;\n  border-bottom: solid black 1px;\n}\n\n.ship-menu > p {\n  color: white;\n}\n\n.ship-select-btn.disabled-btn,\n#temp-disable {\n  background-color: #3a4d39;\n}\n\n.ship-select-btn.disabled-btn:hover,\n#temp-disable:hover {\n  background-color: #3a4d39;\n}\n\n.selected {\n  border: 7px dotted #ece3ce;\n}\n\n.mouse-tracer {\n  /* width: 100px; */\n  /* height: 100px; */\n  background-color: rgb(52, 106, 255);\n  border: 1px solid rgb(230, 230, 230);\n  position: absolute;\n  visibility: hidden;\n  opacity: 80%;\n  /* point events for ignore the tracer div via listeners */\n  pointer-events: none;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   attackDisplay: () => (/* binding */ attackDisplay),\n/* harmony export */   gameBoardDisplay: () => (/* binding */ gameBoardDisplay),\n/* harmony export */   gameOverDisplay: () => (/* binding */ gameOverDisplay),\n/* harmony export */   placeShipOnBoard: () => (/* binding */ placeShipOnBoard)\n/* harmony export */ });\nconst container = document.querySelector(\".container\");\n\nfunction gameBoardDisplay(board, playerOrCpu) {\n  const boardContainer = document.createElement(\"div\");\n  boardContainer.classList.add(\"board-container\");\n  boardContainer.id = playerOrCpu;\n  board.getBoard().forEach((spot) => {\n    const boardSpot = document.createElement(\"div\");\n    boardSpot.classList.add(\"game-square\");\n    boardSpot.dataset.coord = spot.data;\n\n    if (spot.ship !== false && playerOrCpu === \"player\") {\n      boardSpot.id = \"ship\";\n    }\n    // numerical values on board display for debug\n    // boardSpot.textContent = spot.data;\n    boardContainer.append(boardSpot);\n  });\n  container.append(boardContainer);\n}\n\nfunction placeShipOnBoard(board) {\n  board.getBoard().forEach((spot) => {\n    if (spot.ship !== false) {\n      const shipCoordElement = document.querySelector(\n        `[data-coord='${spot.data[0]},${spot.data[1]}']`\n      );\n      shipCoordElement.id = \"ship\";\n    }\n  });\n}\n\nfunction gameOverDisplay(winner) {\n  const displayWinner = document.createElement(\"div\");\n  displayWinner.id = \"winner\";\n  displayWinner.textContent = `${winner} won! Game over.`;\n\n  // const newGameBtn = document.createElement(\"button\");\n  // newGameBtn.classList.add(\"new-game-btn\");\n  // newGameBtn.textContent = \"PLAY AGAIN\"\n\n  container.append(displayWinner);\n\n  setTimeout(() => {\n    location.reload();\n  }, 4000);\n}\n\nfunction attackDisplay(targetHtmlElement, attackBoolean) {\n  const boardSquareElement = targetHtmlElement;\n\n  if (attackBoolean) {\n    // square bg color on hit\n    boardSquareElement.style.backgroundColor = \"rgb(255, 0, 43)\";\n  } else {\n    // square bg color on miss\n    boardSquareElement.style.backgroundColor = \"rgb(146, 136, 136)\";\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameBoard: () => (/* binding */ gameBoard),\n/* harmony export */   generateMove: () => (/* binding */ generateMove),\n/* harmony export */   player: () => (/* binding */ player),\n/* harmony export */   ship: () => (/* binding */ ship)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _shipDomPlacement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipDomPlacement */ \"./src/shipDomPlacement.js\");\n\n\n\n\nfunction ship(x) {\n  const length = x;\n  let sunken = false;\n  let hits = 0;\n\n  const getShip = () => ({\n    length,\n    sunken,\n    hits,\n  });\n\n  const isSunk = () => {\n    if (hits >= length) sunken = true;\n  };\n\n  const hit = () => {\n    hits += 1;\n    isSunk();\n  };\n\n  return { hit, isSunk, getShip };\n}\n\nfunction gameBoard() {\n  const board = [];\n  const boardShips = [];\n  for (let i = 0; i < 10; i++) {\n    for (let j = 0; j < 10; j++) {\n      board.push({ data: [i, j], ship: false, marked: false });\n    }\n  }\n  const getBoard = () => board;\n  const searchBoard = (coord) => {\n    const target = board.find(\n      (position) =>\n        position.data[0] === coord[0] && position.data[1] === coord[1]\n    );\n    return target;\n  };\n\n  function placeShip(arrayOfCoords) {\n    const queue = [];\n    const originalCoordLength = arrayOfCoords.length;\n    while (arrayOfCoords.length > 0) {\n      const currentCoord = arrayOfCoords.shift();\n      const coordObj = searchBoard(currentCoord);\n      if (coordObj.ship === false) {\n        queue.push(coordObj);\n      } else {\n        return;\n      }\n    }\n    if (queue.length === originalCoordLength) {\n      const newShipObj = ship(originalCoordLength);\n      boardShips.push(newShipObj);\n\n      while (queue.length > 0) {\n        const linkingToShip = queue.shift();\n        linkingToShip.ship = newShipObj;\n      }\n    }\n    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.placeShipOnBoard)(player1Board);\n  }\n\n  function isBoardShipsSunk() {\n    return boardShips.every((boardShip) => boardShip.getShip().sunken === true);\n  }\n\n  function receiveAttack(target) {\n    const targetPosition = searchBoard(target);\n    if (!targetPosition.marked) targetPosition.marked = true;\n    if (targetPosition.ship !== false) {\n      targetPosition.ship.hit();\n      return true;\n    }\n    return false;\n  }\n\n  return {\n    placeShip,\n    getBoard,\n    searchBoard,\n    receiveAttack,\n    isBoardShipsSunk,\n  };\n}\n\nfunction player(name) {\n  const playerObj = {\n    name,\n    score: 0,\n    turn: false,\n  };\n\n  function attack(coord, enemyBoard) {\n    return enemyBoard.receiveAttack(coord);\n  }\n\n  const getPlayer = () => playerObj;\n\n  return { attack, getPlayer };\n}\nfunction generateMove(playerBoard) {\n  let moveArray = [];\n  while (moveArray.length < 2) {\n    const randomNumber = Math.floor(Math.random() * 10);\n    moveArray.push(randomNumber);\n    if (moveArray.length > 1 && playerBoard.searchBoard(moveArray).marked) {\n      console.log(\"HITHITHIT\");\n      moveArray = [];\n      // note: there is inf loop here.\n    }\n  }\n\n  return moveArray;\n}\n\nconst player1Board = gameBoard();\n\nfunction game() {\n  function checkEndGame(board, playerName) {\n    if (board.isBoardShipsSunk()) {\n      // game();\n      return (0,_dom__WEBPACK_IMPORTED_MODULE_1__.gameOverDisplay)(playerName);\n    }\n    return false;\n  }\n\n  const player1 = player(\"player\");\n\n  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.gameBoardDisplay)(player1Board, \"player\");\n  (0,_shipDomPlacement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(player1Board);\n\n  const cpu1 = player(\"cpu\");\n  const cpu1Board = gameBoard();\n\n  // WIP, pre made CPU ships for now\n  cpu1Board.placeShip([\n    [0, 0],\n    [1, 0],\n    [2, 0],\n    [3, 0],\n    [4, 0],\n  ]);\n  cpu1Board.placeShip([\n    [0, 8],\n    [0, 9],\n  ]);\n  cpu1Board.placeShip([\n    [4, 6],\n    [4, 7],\n    [4, 8],\n    [4, 9],\n  ]);\n  cpu1Board.placeShip([\n    [7, 1],\n    [7, 2],\n    [7, 3],\n  ]);\n  cpu1Board.placeShip([\n    [7, 9],\n    [8, 9],\n    [9, 9],\n  ]);\n  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.gameBoardDisplay)(cpu1Board, \"cpu\");\n\n  const enemyBoardContainer = document.getElementById(\"cpu\");\n  enemyBoardContainer.addEventListener(\"click\", (e) => {\n    const shipMenuGUI = document.querySelector(\".ship-menu\");\n    // make sure shipMenuGUI is gone before attacking can start.\n    if (shipMenuGUI !== null) return;\n\n    const clickedSpot = e.target.dataset.coord.split(\",\").map(Number);\n    if (cpu1Board.searchBoard(clickedSpot).marked) {\n      return;\n    }\n    const player1AttackBoolean = player1.attack(clickedSpot, cpu1Board);\n    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.attackDisplay)(e.target, player1AttackBoolean);\n    checkEndGame(cpu1Board, \"player1\"); // think this goes here?\n\n    const cpu1RandomMove = generateMove(player1Board);\n    const cpu1AttackBoolean = cpu1.attack(cpu1RandomMove, player1Board);\n    const playerBoardDom = document.getElementById(\"player\");\n    const cpu1AttackedSquareElement = playerBoardDom.querySelectorAll(\n      `:scope > [data-coord=\"${cpu1RandomMove[0]},${cpu1RandomMove[1]}\"]`\n    );\n    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.attackDisplay)(cpu1AttackedSquareElement[0], cpu1AttackBoolean);\n\n    checkEndGame(player1Board, \"cpu\");\n  });\n}\n\ngame();\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/shipDomPlacement.js":
/*!*********************************!*\
  !*** ./src/shipDomPlacement.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ shipDomPlacement)\n/* harmony export */ });\nconst container = document.querySelector(\".container\");\n\nconst gameShipDataArr = [\n  { name: \"Carrier\", length: 5 },\n  { name: \"Battleship\", length: 4 },\n  { name: \"Destroyer\", length: 3 },\n  { name: \"Submarine\", length: 3 },\n  { name: \"Patrol Boat\", length: 2 },\n];\n\nfunction shipDomPlacement(board) {\n  let shipLength = 0;\n  const playerBoard = document.getElementById(\"player\");\n\n  const shipMenuGUI = document.createElement(\"div\");\n  const shipMenuGUIHeader = document.createElement(\"h5\");\n  const shipMenuGUISubHeader = document.createElement(\"p\");\n  const shipMenuGUINote = document.createElement(\"p\");\n  shipMenuGUIHeader.textContent = \"BATTLESHIP\";\n  shipMenuGUISubHeader.textContent = \"PLACE SHIP\";\n  shipMenuGUISubHeader.setAttribute(\"id\", \"ship-menu-subhead\");\n  shipMenuGUINote.textContent = \"RIGHT CLICK FOR ROTATION\";\n  shipMenuGUI.classList.add(\"ship-menu\");\n  shipMenuGUI.append(shipMenuGUIHeader, shipMenuGUISubHeader);\n  playerBoard.classList.toggle(\"selected\");\n\n  // square tracer code\n  const square = document.createElement(\"div\");\n  square.classList.add(\"mouse-tracer\");\n  let gameBoardSquareHeight = playerBoard.firstChild.offsetHeight;\n  let gameBoardSquareWidth = playerBoard.firstChild.offsetWidth;\n  const gameBoardSquareHeightDefault = gameBoardSquareHeight;\n\n  // create ship selections buttons\n  for (let i = 0; i <= 4; i++) {\n    const shipBtn = document.createElement(\"button\");\n    shipBtn.classList.add(\"ship-select-btn\");\n    shipBtn.dataset.length = gameShipDataArr[i].length;\n    shipBtn.textContent = gameShipDataArr[i].name;\n\n    shipMenuGUI.append(shipBtn);\n  }\n  shipMenuGUI.appendChild(shipMenuGUINote);\n\n  container.append(shipMenuGUI);\n\n  // listener on menu for what ship is clicked\n  function shipMenuController(e) {\n    if (e.target.localName === \"button\") {\n      // disable button after clicked\n      e.target.disabled = true;\n      e.target.classList.add(\"disabled-btn\");\n\n      shipLength = e.target.dataset.length;\n      shipHoverMouse();\n      shipMenuBtnController().temporaryDisableBtns();\n\n      playerBoard.addEventListener(\"click\", pBoardListener);\n    }\n  }\n  shipMenuGUI.addEventListener(\"click\", shipMenuController);\n\n  function pBoardListener(e) {\n    const baseCoord = e.target.dataset.coord.split(\",\").map(Number);\n    let direction = \"\";\n    if (gameBoardSquareHeight > gameBoardSquareWidth) {\n      direction = \"vertical\";\n      console.log(shipLength);\n    } else {\n      direction = \"horizontal\";\n    }\n\n    calculateShipArr(direction, baseCoord);\n  }\n\n  function removePBoardListener() {\n    playerBoard.removeEventListener(\"click\", pBoardListener);\n  }\n\n  function calculateShipArr(direction, baseCoord) {\n    const arrHolder = [];\n    const coordLengthVal = Math.floor(shipLength / 2);\n\n    if (direction === \"vertical\") {\n      for (\n        let i = baseCoord[0] + coordLengthVal;\n        i >= baseCoord[0] - coordLengthVal;\n        i--\n      ) {\n        if (i < 0 || i > 9) return console.log(\"ERROR, out of bound\");\n        if (board.searchBoard([i, baseCoord[1]]).ship !== false) {\n          return console.log(\"ERROR, squares not available.\");\n        }\n        const tempCalculatedCoord = [i, baseCoord[1]];\n        arrHolder.push(tempCalculatedCoord);\n      }\n    } else if (direction === \"horizontal\") {\n      for (\n        let j = baseCoord[1] + coordLengthVal;\n        j >= baseCoord[1] - coordLengthVal;\n        j--\n      ) {\n        if (j < 0 || j > 9) return console.log(\"ERROR, out of bound\");\n        if (board.searchBoard([baseCoord[0], j]).ship !== false) {\n          return console.log(\"ERROR, squares not available.\");\n        }\n\n        const tempCalculatedCoord = [baseCoord[0], j];\n        // check if ship array contains this coord. if so, return ERROR, ship exists.\n\n        arrHolder.push(tempCalculatedCoord);\n      }\n    }\n    // remove event listeners working with ship placement gui\n\n    disableShipHoverDisplay();\n    resetGameBoardSquareHeightWidth();\n    enableRightClickShipHovDisplay();\n    removePBoardListener();\n\n    shipMenuBtnController().unlockAvailableBtns();\n    // check if all ship menu btns are disabled, remove menu if so.\n    if (shipMenuBtnController().isAllDisabled()) {\n      console.log(\"FIRE FIRE FIRE FIRE\");\n      shipMenuGUI.remove();\n      // can reset all buttons to enabled also.\n\n      playerBoard.classList.toggle(\"selected\");\n      console.log(\"tick tick\");\n    }\n    // on even shiplength, remove the extra coordinate.\n    if (shipLength % 2 === 0) {\n      arrHolder.pop();\n    }\n    board.placeShip(arrHolder);\n  }\n\n  function shipMenuBtnController() {\n    const shipMenuBtns = document.querySelectorAll(\"button\");\n    function isAllDisabled() {\n      for (let i = 0; i < shipMenuBtns.length; i++) {\n        if (!shipMenuBtns[i].disabled) {\n          return false;\n        }\n      }\n      return true;\n    }\n\n    function temporaryDisableBtns() {\n      for (let i = 0; i < shipMenuBtns.length; i++) {\n        if (!shipMenuBtns[i].disabled) {\n          shipMenuBtns[i].disabled = true;\n          shipMenuBtns[i].id = \"temp-disable\";\n        }\n      }\n    }\n\n    function unlockAvailableBtns() {\n      for (let i = 0; i < shipMenuBtns.length; i++) {\n        if (shipMenuBtns[i].id === \"temp-disable\") {\n          shipMenuBtns[i].disabled = false;\n          shipMenuBtns[i].removeAttribute(\"id\");\n        }\n      }\n    }\n\n    return { isAllDisabled, temporaryDisableBtns, unlockAvailableBtns };\n  }\n\n  function resetGameBoardSquareHeightWidth() {\n    gameBoardSquareHeight = gameBoardSquareHeightDefault;\n    gameBoardSquareWidth = gameBoardSquareHeightDefault;\n  }\n\n  function disableShipHoverDisplay() {\n    square.style.visibility = \"hidden\";\n    document.removeEventListener(\"mousemove\", shipHoverDisplay);\n  }\n\n  // e page value, subtracting the l or w of game cell / by 2,\n  // in order to place hover at center mouse\n  function shipHoverDisplay(e) {\n    square.style.left = `${e.pageX - gameBoardSquareWidth / 2}px`;\n    square.style.top = `${e.pageY - gameBoardSquareHeight / 2}px`;\n    square.style.visibility = \"visible\";\n  }\n\n  function enableRightClickShipHovDisplay() {\n    document.removeEventListener(\n      \"contextmenu\",\n      disableRightClickShipHovDisplay\n    );\n  }\n\n  // listen on document for right click, recalculate dimensions for rotation\n  // (document since square has point-events style turned off)\n  function disableRightClickShipHovDisplay(e) {\n    e.preventDefault();\n    if (gameBoardSquareHeight > gameBoardSquareWidth) {\n      gameBoardSquareHeight /= shipLength;\n      gameBoardSquareWidth *= shipLength;\n    } else {\n      gameBoardSquareHeight *= shipLength;\n      gameBoardSquareWidth /= shipLength;\n    }\n    square.style.height = `${gameBoardSquareHeight}px`;\n    square.style.width = `${gameBoardSquareWidth}px`;\n    square.style.left = `${e.pageX - gameBoardSquareWidth / 2}px`;\n    square.style.top = `${e.pageY - gameBoardSquareHeight / 2}px`;\n  }\n\n  function shipHoverMouse() {\n    gameBoardSquareHeight *= shipLength;\n    square.style.height = `${gameBoardSquareHeight}px`;\n    square.style.width = `${gameBoardSquareWidth}px`;\n\n    container.append(square);\n\n    // function enableContextMenu(e) {\n    //   e.preventDefault();\n    //   if (e.key === \"Escape\" || e.key === \"escape\") {\n    //     // enableRightClickShipHovDisplay();\n\n    //   }\n    // }\n\n    document.addEventListener(\"mousemove\", shipHoverDisplay);\n    document.addEventListener(\"contextmenu\", disableRightClickShipHovDisplay);\n    // document.addEventListener(\"keydown\", enableContextMenu);\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/shipDomPlacement.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;