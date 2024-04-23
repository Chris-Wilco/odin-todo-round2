/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/plus.svg */ "./src/img/icons/plus.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/dots-horizontal-circle-outline.svg */ "./src/img/icons/dots-horizontal-circle-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/menu-right-outline.svg */ "./src/img/icons/menu-right-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/close-box-outline.svg */ "./src/img/icons/close-box-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --mute-color: rgb(255, 127, 80, 0.1);
    --secondary-color: 253, 107, 62;
    --highlight-color: 147, 252, 217;
    --dark-shadow-color: 0, 0, 0;
    --box-shadow-values: 0.5rem 0.8rem 0.05rem;
    --minor-box-shadow-values: 0.3rem 0.3rem 0.05rem;
    --general-font: "Montserrat", "Roboto Condensed", sans-serif;
    --title-font: "Roboto Slab", serif;
    --base-font-color: rgb(0, 0, 0, 0.8);
    --base-font-size: 1vh;
    --title-font-size: 4rem;
    --header-font-size: 2rem;
    --content-font-size: 1rem;
    --base-line-height: 1.25;
    --content-line-height: 2;

    font-size: var(--base-font-size);

    --item-title-font-size: 1.5rem;
    --item-info-font-size: 1rem;
    --list-title-font-size: 2rem;
    --list-info-font-size: 1rem;
    --project-title-font-size: 2rem;
    --project-info-font-size: 1.5rem;
    --nav-title-font-size: 1.5rem;
    --nav-info-font-size: 1.25rem;

    --nav-icon-dimension: 2rem;

    --dark-green: rgba(4, 42, 43, 1);
    --moonstone: rgba(94, 177, 191, 1);
    --light-cyan: rgba(205, 237, 246, 1);
    --orange-crayola: rgba(239, 123, 69, 1);
    --chili-red: rgba(216, 71, 39, 1);

    --lapis-lazuli: rgba(35, 87, 137, 1);
    --imperial-red: rgba(251, 54, 64, 0.1);
    --aquamarine: rgba(22, 244, 208, 1);
    --school-bus-yellow: rgba(241, 211, 2, 1);
    --black: rgba(2, 1, 0, 1);

    --nav-background-color: var(--imperial-red);
    --content-container-color: rgb(242, 242, 242);
    --project-container-color: rgb(255, 255, 255);

    --box-shadow-values: -0.5rem 0.8rem 0.5rem;
    --minor-box-shadow-values: -0.3rem 0.3rem 0.3rem;
    --drop-shadow-color: rgb(0, 0, 0, 0.4);
}

body {
    display: grid;
    grid-template-columns: minmax(min(10rem, 100%), 2fr) minmax(
            min(10rem, 100%),
            5fr
        );

    font-family: var(--general-font);
    font-size: var(--general-font-size);
    margin: 0;

    height: 100vh;
}

.nav-container {
    grid-column: 1 / 2;

    display: grid;
    grid-template-rows: 3rem repeat(auto-fit, minmax(10px, 0.5fr));

    gap: 2rem;
    background-color: var(--project-container-color);
    padding: 4rem 1rem;

    /* overflow: scroll; */
    position: sticky;
    top: 0;
    margin: 0;
    height: 100vh;

    /* border: 1px solid black; */
}

.nav-title-container {
    /* grid-column: 1 / 3; */
    grid-row: 1 / 2;

    display: flex;
    align-items: center;
    gap: 1rem;

    font-size: var(--nav-title-font-size);
}

.nav-title {
    /* grid-column: 1 / 2; */
}

.new-project-button {
    /* grid-column: 3 / 4; */
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    height: var(--nav-icon-dimension);
    aspect-ratio: 1 / 1;
}

.nav-content-container {
    display: grid;
    gap: 1rem;
    font-size: var(--nav-info-font-size);

    /* border: 1px solid black; */
    /* height: 500px; */
    overflow: scroll;
}

.nav-project-container {
    display: grid;
    grid-template-columns: 1fr 4fr;
}

.nav-project-title-container {
    grid-column: 1 / 3;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.nav-project-title-icon {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    height: var(--nav-icon-dimension);
    aspect-ratio: 1 / 1;
}

.nav-project-title {
    font-weight: 500;
}

.nav-project-content-container {
    grid-column: 2 / 3;
}

.nav-list-title-container {
    display: flex;
    align-items: center;
    gap: 0.2rem;
}

.nav-list-title-icon {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    height: var(--nav-icon-dimension);
    aspect-ratio: 1 / 1;
}

.nav-list-title {
}

.content-container {
    grid-column: 2 / 3;

    display: grid;
    gap: 1rem;
    background-color: var(--content-container-color);
    /* border: solid 1px red; */

    height: 100vh;
    /* box-shadow: var(--box-shadow-values) var(--drop-shadow-color); */
}

.project-container {
    display: grid;
    grid-template-rows: 4rem repeat(auto-fill, 1fr);

    /* background-color: rgba(var(--mute-color), 1); */
    padding: 2rem;
    margin: 1rem;
    gap: 0.5rem;

    overflow: scroll;
    /* border-radius: 0.5rem; */
    background-color: var(--project-container-color);
    box-shadow: var(--box-shadow-values)
        rgba(var(--drop-shadow-color-color), 0.5);
}

.project-title-container {
    display: grid;
    grid-template-columns: 5fr 1fr 1fr;
    font-size: var(--project-info-font-size);
    /* border: solid black 1px; */
}

.project-info-container {
    /* border: solid black 1px; */
}

.project-title {
    font-size: var(--project-title-font-size);
}

.project-description {
}

.new-project-list-button {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    height: var(--nav-icon-dimension);
    aspect-ratio: 1 / 1;
}

.close-project-button {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    height: var(--nav-icon-dimension);
    aspect-ratio: 1 / 1;
}

.list-container {
    display: grid;
    gap: 0.5rem;

    /* background-color: rgba(var(--secondary-color), 0.5); */
    padding: 1rem;
    box-shadow: var(--minor-box-shadow-values) var(--drop-shadow-color);
    /* border-radius: 0.5rem; */
}

.list-title-container {
    display: grid;
    grid-template-columns: 5fr 1fr;
    font-size: var(--list-info-font-size);
}

.list-info-container {
}

.list-title {
    font-size: var(--list-title-font-size);
}

.list-description {
}

.new-list-item-button {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    height: var(--nav-icon-dimension);
    aspect-ratio: 1 / 1;
}

.item-container {
    display: grid;
    grid-template-columns: 1fr 6fr 1fr;
    /* background-color: rgba(var(--secondary-color), 0.5); */
}

.item-checkbox-container {
    grid-column: 1 / 2;

    display: flex;
    justify-content: center;
    align-items: center;
}

.item-checkbox {
}

/* input[type="checkbox"] {
    appearance: none;
    display: grid;
    place-content: center;
    border: solid 1px black;
    height: 1em;
    width: 1em;

    background: #0a0a0a;
    border-color: #fff;
}

input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
} */

.item-info-container {
    grid-column: 2 / 3;
    font-size: var(--item-info-font-size);
}

.item-title {
    font-size: var(--item-title-font-size);
}

.item-description {
}

.item-due-date {
}

.item-remove-button {
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap\");\n\n:root {\n    --mute-color: rgb(255, 127, 80, 0.1);\n    --secondary-color: 253, 107, 62;\n    --highlight-color: 147, 252, 217;\n    --dark-shadow-color: 0, 0, 0;\n    --box-shadow-values: 0.5rem 0.8rem 0.05rem;\n    --minor-box-shadow-values: 0.3rem 0.3rem 0.05rem;\n    --general-font: \"Montserrat\", \"Roboto Condensed\", sans-serif;\n    --title-font: \"Roboto Slab\", serif;\n    --base-font-color: rgb(0, 0, 0, 0.8);\n    --base-font-size: 1vh;\n    --title-font-size: 4rem;\n    --header-font-size: 2rem;\n    --content-font-size: 1rem;\n    --base-line-height: 1.25;\n    --content-line-height: 2;\n\n    font-size: var(--base-font-size);\n\n    --item-title-font-size: 1.5rem;\n    --item-info-font-size: 1rem;\n    --list-title-font-size: 2rem;\n    --list-info-font-size: 1rem;\n    --project-title-font-size: 2rem;\n    --project-info-font-size: 1.5rem;\n    --nav-title-font-size: 1.5rem;\n    --nav-info-font-size: 1.25rem;\n\n    --nav-icon-dimension: 2rem;\n\n    --dark-green: rgba(4, 42, 43, 1);\n    --moonstone: rgba(94, 177, 191, 1);\n    --light-cyan: rgba(205, 237, 246, 1);\n    --orange-crayola: rgba(239, 123, 69, 1);\n    --chili-red: rgba(216, 71, 39, 1);\n\n    --lapis-lazuli: rgba(35, 87, 137, 1);\n    --imperial-red: rgba(251, 54, 64, 0.1);\n    --aquamarine: rgba(22, 244, 208, 1);\n    --school-bus-yellow: rgba(241, 211, 2, 1);\n    --black: rgba(2, 1, 0, 1);\n\n    --nav-background-color: var(--imperial-red);\n    --content-container-color: rgb(242, 242, 242);\n    --project-container-color: rgb(255, 255, 255);\n\n    --box-shadow-values: -0.5rem 0.8rem 0.5rem;\n    --minor-box-shadow-values: -0.3rem 0.3rem 0.3rem;\n    --drop-shadow-color: rgb(0, 0, 0, 0.4);\n}\n\nbody {\n    display: grid;\n    grid-template-columns: minmax(min(10rem, 100%), 2fr) minmax(\n            min(10rem, 100%),\n            5fr\n        );\n\n    font-family: var(--general-font);\n    font-size: var(--general-font-size);\n    margin: 0;\n\n    height: 100vh;\n}\n\n.nav-container {\n    grid-column: 1 / 2;\n\n    display: grid;\n    grid-template-rows: 3rem repeat(auto-fit, minmax(10px, 0.5fr));\n\n    gap: 2rem;\n    background-color: var(--project-container-color);\n    padding: 4rem 1rem;\n\n    /* overflow: scroll; */\n    position: sticky;\n    top: 0;\n    margin: 0;\n    height: 100vh;\n\n    /* border: 1px solid black; */\n}\n\n.nav-title-container {\n    /* grid-column: 1 / 3; */\n    grid-row: 1 / 2;\n\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n\n    font-size: var(--nav-title-font-size);\n}\n\n.nav-title {\n    /* grid-column: 1 / 2; */\n}\n\n.new-project-button {\n    /* grid-column: 3 / 4; */\n    background-image: url(./img/icons/plus.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.nav-content-container {\n    display: grid;\n    gap: 1rem;\n    font-size: var(--nav-info-font-size);\n\n    /* border: 1px solid black; */\n    /* height: 500px; */\n    overflow: scroll;\n}\n\n.nav-project-container {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n}\n\n.nav-project-title-container {\n    grid-column: 1 / 3;\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.nav-project-title-icon {\n    background-image: url(./img/icons/dots-horizontal-circle-outline.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.nav-project-title {\n    font-weight: 500;\n}\n\n.nav-project-content-container {\n    grid-column: 2 / 3;\n}\n\n.nav-list-title-container {\n    display: flex;\n    align-items: center;\n    gap: 0.2rem;\n}\n\n.nav-list-title-icon {\n    background-image: url(./img/icons/menu-right-outline.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.nav-list-title {\n}\n\n.content-container {\n    grid-column: 2 / 3;\n\n    display: grid;\n    gap: 1rem;\n    background-color: var(--content-container-color);\n    /* border: solid 1px red; */\n\n    height: 100vh;\n    /* box-shadow: var(--box-shadow-values) var(--drop-shadow-color); */\n}\n\n.project-container {\n    display: grid;\n    grid-template-rows: 4rem repeat(auto-fill, 1fr);\n\n    /* background-color: rgba(var(--mute-color), 1); */\n    padding: 2rem;\n    margin: 1rem;\n    gap: 0.5rem;\n\n    overflow: scroll;\n    /* border-radius: 0.5rem; */\n    background-color: var(--project-container-color);\n    box-shadow: var(--box-shadow-values)\n        rgba(var(--drop-shadow-color-color), 0.5);\n}\n\n.project-title-container {\n    display: grid;\n    grid-template-columns: 5fr 1fr 1fr;\n    font-size: var(--project-info-font-size);\n    /* border: solid black 1px; */\n}\n\n.project-info-container {\n    /* border: solid black 1px; */\n}\n\n.project-title {\n    font-size: var(--project-title-font-size);\n}\n\n.project-description {\n}\n\n.new-project-list-button {\n    background-image: url(./img/icons/plus.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.close-project-button {\n    background-image: url(./img/icons/close-box-outline.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.list-container {\n    display: grid;\n    gap: 0.5rem;\n\n    /* background-color: rgba(var(--secondary-color), 0.5); */\n    padding: 1rem;\n    box-shadow: var(--minor-box-shadow-values) var(--drop-shadow-color);\n    /* border-radius: 0.5rem; */\n}\n\n.list-title-container {\n    display: grid;\n    grid-template-columns: 5fr 1fr;\n    font-size: var(--list-info-font-size);\n}\n\n.list-info-container {\n}\n\n.list-title {\n    font-size: var(--list-title-font-size);\n}\n\n.list-description {\n}\n\n.new-list-item-button {\n    background-image: url(./img/icons/plus.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.item-container {\n    display: grid;\n    grid-template-columns: 1fr 6fr 1fr;\n    /* background-color: rgba(var(--secondary-color), 0.5); */\n}\n\n.item-checkbox-container {\n    grid-column: 1 / 2;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.item-checkbox {\n}\n\n/* input[type=\"checkbox\"] {\n    appearance: none;\n    display: grid;\n    place-content: center;\n    border: solid 1px black;\n    height: 1em;\n    width: 1em;\n\n    background: #0a0a0a;\n    border-color: #fff;\n}\n\ninput[type=\"checkbox\"]::before {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    transform: scale(0);\n    transition: 120ms transform ease-in-out;\n    box-shadow: inset 1em 1em var(--form-control-color);\n} */\n\n.item-info-container {\n    grid-column: 2 / 3;\n    font-size: var(--item-info-font-size);\n}\n\n.item-title {\n    font-size: var(--item-title-font-size);\n}\n\n.item-description {\n}\n\n.item-due-date {\n}\n\n.item-remove-button {\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/modules/GeneratePageElement.js":
/*!********************************************!*\
  !*** ./src/modules/GeneratePageElement.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearNodeContent: () => (/* binding */ clearNodeContent),
/* harmony export */   generatePageElement: () => (/* binding */ generatePageElement)
/* harmony export */ });
function generatePageElement(
    elementType,
    elementClasses = {},
    parentElement = null,
    elementText = null
) {
    if (elementType == null) {
        return;
    }
    const newElement = document.createElement(elementType);

    if (elementClasses.length > 0) {
        elementClasses.forEach((className) => {
            newElement.classList.add(className);
        });
    }

    if (elementText != null) {
        newElement.textContent = elementText;
    }

    if (parentElement != null) {
        parentElement.appendChild(newElement);
    }

    return newElement;
}

function clearNodeContent(thisNode) {
    while (thisNode.firstChild) {
        thisNode.removeChild(thisNode.lastChild);
    }
}


/***/ }),

/***/ "./src/modules/List.js":
/*!*****************************!*\
  !*** ./src/modules/List.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ List)
/* harmony export */ });
//import * as Task from "./Task.js";
//import * as GenerateElement from "./GeneratePageElement.js";

class List {
    constructor(
        name,
        description = "No description set",
        tasks = [],
        parentProject
    ) {
        this.name = name;
        this.description = description;
        this.tasks = tasks;
        this.parentProject = parentProject;
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }

    getDescription() {
        return this.description;
    }

    setDescription(newDescription) {
        this.description = newDescription;
    }

    getTasks() {
        return this.tasks;
    }

    setTasks(tasksList) {
        this.tasks = tasksList;
    }

    getTask(taskName) {
        return this.tasks.find((task) => task.getName() === taskName);
    }

    containsTask(taskName) {
        return this.tasks.some((task) => task.getName() == taskName);
    }

    addTask(newTask) {
        if (!this.containsTask(newTask.getName())) {
            this.tasks.push(newTask);
        }
    }

    removeTask(taskName) {
        this.tasks = this.tasks.filter((task) => task.getName() !== taskName);
    }

    setContainerNode(containerNode) {
        this.containerNode = containerNode;
    }

    getContainerNode() {
        if (this.containerNode) {
            return this.containerNode;
        }
        //TODO: Should there be a return value if there isn't a node assigned already?
        //Should this property just be initialized as a blank somehow when this object is created?
    }
}


/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
//import * as List from "./List.js";

class Project {
    //TODO: Should the project have a reference to the UI element containing it's information to make updating said UI element easier?
    constructor(
        name,
        description = "No description set",
        lists = [],
        parentUser
    ) {
        this.name = name;
        this.description = description;
        this.lists = lists;
        this.parentUser = parentUser;
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }

    getDescription() {
        return this.description;
    }

    setDescription(newDescription) {
        this.description = newDescription;
    }

    getTasks() {
        return this.lists;
    }

    setLists(lists) {
        this.lists = lists;
    }

    containsList(listName) {
        return this.lists.some((list) => list.getName() == listName);
    }

    addList(newList) {
        if (!this.containsList(newList.getName())) {
            this.lists.push(newList);
        }
    }

    removeList(listName) {
        this.lists = this.lists.filter((list) => list.getName() !== listName);
    }

    setContainerNode(containerNode) {
        this.containerNode = containerNode;
    }

    getContainerNode() {
        if (this.containerNode) {
            return this.containerNode;
        }
        //TODO: Should there be a return value if there isn't a node assigned already?
        //Should this property just be initialized as a blank somehow when this object is created?
    }
}


/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _userStorage_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userStorage.json */ "./src/modules/userStorage.json");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.js */ "./src/modules/Task.js");
/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List.js */ "./src/modules/List.js");
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Project.js */ "./src/modules/Project.js");
/* harmony import */ var _User_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User.js */ "./src/modules/User.js");
//import User from "./User.js";






class Storage {
    constructor() {
        const jsonText = JSON.parse(JSON.stringify(_userStorage_json__WEBPACK_IMPORTED_MODULE_0__));
        this.userList = this.parseUsers(jsonText);
    }

    getUsers() {
        return this.userList;
    }

    //TODO: Do we need a user container object to then be able to commit back into the json file?

    parseUsers(jsonText) {
        const users = [];

        jsonText.forEach((user) => {
            const userName = user.name;
            const newUser = new _User_js__WEBPACK_IMPORTED_MODULE_4__["default"](userName, [], jsonText);
            const userProjects = this.parseProjects(user.projects, newUser);
            newUser.setProjects(userProjects);
            users.push(newUser);
        });

        return users;
    }

    //Create parent user first and *then* generate the list of projects once the user object already exists?

    parseProjects(jsonProjects, parentUser) {
        const projects = [];
        jsonProjects.forEach((project) => {
            const projectName = project.name;
            const projectDescription = project.description;
            const newProject = new _Project_js__WEBPACK_IMPORTED_MODULE_3__["default"](
                projectName,
                projectDescription,
                [],
                parentUser
            );
            const projectLists = this.parseLists(project.lists, newProject);
            newProject.setLists(projectLists);
            projects.push(newProject);
        });
        return projects;
    }

    parseLists(jsonLists, parentProject) {
        const lists = [];
        jsonLists.forEach((list) => {
            const listName = list.name;
            const listDescription = list.description;
            const newList = new _List_js__WEBPACK_IMPORTED_MODULE_2__["default"](
                listName,
                listDescription,
                [],
                parentProject
            );
            const listTasks = this.parseTasks(list.tasks, newList);
            newList.setTasks(listTasks);
            lists.push(newList);
        });
        return lists;
    }

    parseTasks(jsonTasks, parentList) {
        const tasks = [];
        jsonTasks.forEach((task) => {
            const taskName = task.name;
            const taskDescription = task.description;
            const taskDueDate = task.dueDate;
            const newTask = new _Task_js__WEBPACK_IMPORTED_MODULE_1__["default"](
                taskName,
                taskDueDate,
                taskDescription,
                parentList
            );
            tasks.push(newTask);
        });
        return tasks;
    }
}


/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(
        name,
        dueDate = "No due date set.",
        description = "No description set yet.",
        parentList
    ) {
        this.name = name;
        this.dueDate = dueDate;
        this.description = description;
        this.parentList = parentList;
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }

    getDate() {
        return this.dueDate;
    }

    setDate(newDate) {
        this.dueDate = newDate;
    }

    getDescription() {
        return this.description;
    }

    setDescription(newDescription) {
        this.description = newDescription;
    }

    setContainerNode(containerNode) {
        this.containerNode = containerNode;
    }

    getContainerNode() {
        if (this.containerNode) {
            return this.containerNode;
        }
        //TODO: Should there be a return value if there isn't a node assigned already?
        //Should this property just be initialized as a blank somehow when this object is created?
    }
}


/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneratePageElement.js */ "./src/modules/GeneratePageElement.js");
/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage.js */ "./src/modules/Storage.js");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task.js */ "./src/modules/Task.js");
/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./List.js */ "./src/modules/List.js");
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Project.js */ "./src/modules/Project.js");
/* harmony import */ var _User_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User.js */ "./src/modules/User.js");







class UI {
    //Initialize page body, nav container, and content container page elements to be later populated
    constructor() {
        const newStorage = new _Storage_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
        const userList = newStorage.getUsers();

        this.user = userList[0];
        this.pageBody = document.querySelector("body");
        this.navContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["nav-container"],
            document.querySelector("body")
        );
        this.pageBody.appendChild(this.navContainer);

        this.contentContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["content-container"],
            document.querySelector("body")
        );
        this.pageBody.appendChild(this.contentContainer);

        this.loadPageContent(this.user.projects[0].name);
    }

    //Clears and populates nav and display panes
    loadPageContent(nameOfProjectToLoad = "") {
        this.reloadNavContent();

        this.clearDisplayContent();
        //In case there isn't a project to load....
        if (nameOfProjectToLoad != "") {
            this.fillDisplayPaneContent(nameOfProjectToLoad);
        }
    }

    clearNavContent() {
        this.navContainer.replaceChildren();
    }

    reloadNavContent() {
        this.clearNavContent();
        this.fillNavContent();
    }

    clearDisplayContent() {
        this.contentContainer.replaceChildren();
    }

    fillNavContent() {
        const navTitleContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["nav-title-container"],
            this.navContainer
        );

        const navTitle = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["nav-title"],
            navTitleContainer,
            "My Projects"
        );

        const addNewProjectButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["new-project-button"],
            navTitleContainer
        );
        addNewProjectButton.addEventListener("click", () => {
            this.createNewProject();
            this.reloadNavContent();
        });

        const navContentContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["nav-content-container"],
            this.navContainer
        );

        this.populateNavContent(navContentContainer, this.user.projects);

        this.navContainer.appendChild(navContentContainer);
    }

    populateNavContent(navContentContainer, projects) {
        projects.forEach((project) => {
            navContentContainer.appendChild(
                this.createProjectNavVisual(project)
            );
        });
    }

    createProjectNavVisual(project) {
        const projectContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement("div", [
            "nav-project-container",
        ]);

        const projectTitleContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["nav-project-title-container"],
            projectContainer
        );

        const projectTitleIcon = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["nav-project-title-icon"],
            projectTitleContainer
        );

        const projectTitle = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["nav-project-title"],
            projectTitleContainer,
            project.name
        );
        projectTitle.addEventListener("click", () => {
            this.clearDisplayContent();
            this.fillDisplayPaneContent(`${project.name}`);
        });

        const projectContentContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["nav-project-content-container"],
            projectContainer
        );

        project.lists.forEach((list) => {
            projectContentContainer.appendChild(this.createListNavVisual(list));
        });

        /* project.setContainerNode(projectContainer); */

        return projectContainer;
    }

    createListNavVisual(list) {
        const listTitleContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement("div", [
            "nav-list-title-container",
        ]);

        const listTitleIcon = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["nav-list-title-icon"],
            listTitleContainer
        );

        const listTitleDiv = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["nav-list-title"],
            listTitleContainer,
            list.name
        );

        return listTitleContainer;
    }

    //Checks that a project by that name exists and then sends that project name on to be added to the workspace
    fillDisplayPaneContent(projectName = "default") {
        if (!this.user.containsProject(projectName)) {
            return;
        }
        const projectContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement("div", [
            "project-container",
        ]);

        this.createProjectVisual(
            this.user.getProject(projectName),
            projectContainer
        );
        this.contentContainer.appendChild(projectContainer);
    }

    createProjectVisual(project, projectContainer) {
        const projectTitleContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["project-title-container"],
            projectContainer
        );

        const projectInfoContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["project-info-container"],
            projectTitleContainer
        );

        const projectName = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["project-title"],
            projectInfoContainer,
            project.name
        );
        const projectDescription = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["project-description"],
            projectInfoContainer,
            project.description
        );

        const createNewListButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["new-project-list-button"],
            projectTitleContainer
        );
        createNewListButton.addEventListener("click", () => {
            const newList = this.createList(project);
            this.updateProjectVisual(project);
            this.reloadNavContent();
        });

        const closeProjectButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["close-project-button"],
            projectTitleContainer
        );
        closeProjectButton.addEventListener("click", () => {
            this.clearDisplayContent();
        });

        const deleteProjectButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["item-remove-button"],
            projectContainer,
            "delete project"
        );
        deleteProjectButton.addEventListener("click", () => {
            project.parentUser.removeProject(project.name);
            this.loadPageContent();
            //TODO: this also needs to update the json file of record to save page state on reload
        });

        this.appendAllListsToProject(projectContainer, project.lists);

        project.setContainerNode(projectContainer);

        /* this.contentContainer.appendChild(projectContainer); */
    }

    appendAllListsToProject(projectContainer, lists) {
        lists.forEach((list) => {
            this.appendList(list, projectContainer);
        });
    }

    appendList(list, projectContainer) {
        const listContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement("div", [
            "list-container",
        ]);
        this.createListVisual(list, listContainer);
        projectContainer.appendChild(listContainer);
    }

    createListVisual(list, listContainer) {
        const listTitleContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["list-title-container"],
            listContainer
        );

        const listInfoContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["list-info-container"],
            listTitleContainer
        );

        const listName = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["list-title"],
            listInfoContainer,
            list.name
        );

        const listDescription = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["list-description"],
            listInfoContainer,
            list.description
        );

        const addNewTaskButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["new-list-item-button"],
            listTitleContainer
        );
        addNewTaskButton.addEventListener("click", () => {
            const newTask = this.createTask(list);
            this.updateListVisual(list);
        });

        const removeListButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["item-remove-button"],
            listContainer,
            "delete list"
        );
        removeListButton.addEventListener("click", () => {
            list.parentProject.removeList(list.name);
            this.updateProjectVisual(list.parentProject);
            this.reloadNavContent();

            //TODO: this also needs to update the json file of record to save page state on reload
        });

        this.appendTaskList(listContainer, list);
        list.setContainerNode(listContainer);
        //Does this (need to return?) list container
        return listContainer;
    }

    appendTaskList(listContainer, list) {
        list.tasks.forEach((task) => {
            this.appendTask(task, listContainer);
        });
    }

    appendTask(task, listContainer) {
        const taskContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement("div", [
            "item-container",
        ]);
        this.createTaskVisual(task, taskContainer);
        listContainer.appendChild(taskContainer);
    }

    createTaskVisual(task, taskContainer) {
        const checkboxContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["item-checkbox-container"],
            taskContainer
        );
        const checkbox = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "input",
            ["item-checkbox"],
            checkboxContainer
        );
        checkbox.type = "checkbox";

        const infoContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["item-info-container"],
            taskContainer
        );

        const itemTitle = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["item-title"],
            infoContainer,
            task.name
        );

        const itemDescription = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["item-description"],
            infoContainer,
            task.description
        );

        const itemDueDate = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["item-due-date"],
            infoContainer,
            task.dueDate
        );

        const removeTaskButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["item-remove-button"],
            taskContainer,
            "remove item"
        );
        removeTaskButton.addEventListener("click", () => {
            task.parentList.removeTask(task.name);
            this.updateListVisual(task.parentList);
            //TODO: this also needs to update the json file of record to save page state on reload
        });

        const editTaskButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["item-edit-button"],
            taskContainer,
            "edit item"
        );
        editTaskButton.addEventListener("click", () => {
            this.editTask(task);
            this.updateTaskVisual(task);
        });

        task.setContainerNode(taskContainer);
        return taskContainer;
    }

    createTask(parentList) {
        const taskName = prompt("Item name?");
        const taskDescription = prompt("Item description?");
        const taskDueDate = prompt("Item due date?");

        const newTask = new _Task_js__WEBPACK_IMPORTED_MODULE_2__["default"](
            taskName,
            taskDescription,
            taskDueDate,
            parentList
        );

        parentList.addTask(newTask);
    }

    editTask(task) {
        const taskName = prompt("New task name?", `${task.name}`);
        const taskDescription = prompt(
            "New task description?",
            `${task.description}`
        );
        const taskDueDate = prompt("New task due date?", `${task.dueDate}`);

        task.setName(taskName);
        task.setDate(taskDueDate);
        task.setDescription(taskDescription);
    }

    updateTaskVisual(task) {
        this.clearTaskVisual(task.containerNode);
        this.createTaskVisual(task, task.containerNode);
    }

    clearTaskVisual(taskVisual) {
        taskVisual.replaceChildren();
    }

    createList(parentProject) {
        const listName = prompt("List name?");
        const listDescription = prompt("List description?");
        const newList = new _List_js__WEBPACK_IMPORTED_MODULE_3__["default"](listName, listDescription, [], parentProject);

        parentProject.addList(newList);
    }

    editList(list) {
        const listName = prompt("List name?");
        const listDescription = prompt("List description?");

        list.setName = listName;
        list.setDescription = listDescription;
    }

    updateListVisual(list) {
        this.clearListVisual(list.containerNode);
        this.createListVisual(list, list.containerNode);
    }

    clearListVisual(listVisual) {
        listVisual.replaceChildren();
    }

    editProject(project) {
        const projectName = prompt("Project name?");
        const projectDescription = prompt("Project description?");

        project.name = projectName;
        project.description = projectDescription;
    }

    updateProjectVisual(project) {
        this.clearProjectVisual(project.containerNode);
        this.createProjectVisual(project, project.containerNode);
    }

    clearProjectVisual(projectVisual) {
        projectVisual.replaceChildren();
    }

    createNewProject() {
        const newProjectName = prompt("Project name?");
        const newProjectDescription = prompt("Project description?");
        const newProjectLists = [];

        const newProject = new _Project_js__WEBPACK_IMPORTED_MODULE_4__["default"](
            newProjectName,
            newProjectDescription,
            newProjectLists,
            this.user
        );

        this.user.addProject(newProject);
    }
}


/***/ }),

/***/ "./src/modules/User.js":
/*!*****************************!*\
  !*** ./src/modules/User.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ User)
/* harmony export */ });
class User {
    constructor(name, projects = [], parentContainer) {
        this.name = name;
        this.projects = projects;
        this.parentContainer = parentContainer;
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }

    getProjects() {
        return this.projects;
    }

    setProjects(projects) {
        this.projects = projects;
    }

    containsProject(projectName) {
        return this.projects.some(
            (project) => project.getName() === projectName
        );
    }

    addProject(newProject) {
        if (!this.containsProject(newProject.getName())) {
            this.projects.push(newProject);
        }
    }

    removeProject(projectName) {
        this.projects = this.projects.filter(
            (project) => project.getName() !== projectName
        );
    }

    getProject(projectName) {
        return this.projects.find(
            (project) => project.getName() === projectName
        );
    }
}


/***/ }),

/***/ "./src/img/icons/close-box-outline.svg":
/*!*********************************************!*\
  !*** ./src/img/icons/close-box-outline.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d179acdee772aa5ecda.svg";

/***/ }),

/***/ "./src/img/icons/dots-horizontal-circle-outline.svg":
/*!**********************************************************!*\
  !*** ./src/img/icons/dots-horizontal-circle-outline.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3bdc987deea3153187ab.svg";

/***/ }),

/***/ "./src/img/icons/menu-right-outline.svg":
/*!**********************************************!*\
  !*** ./src/img/icons/menu-right-outline.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a32fd0b2597cc9137d27.svg";

/***/ }),

/***/ "./src/img/icons/plus.svg":
/*!********************************!*\
  !*** ./src/img/icons/plus.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cffe9a515498593b872.svg";

/***/ }),

/***/ "./src/modules/userStorage.json":
/*!**************************************!*\
  !*** ./src/modules/userStorage.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"name":"user 1","projects":[{"name":"project 1","lists":[{"name":"list 1-1","tasks":[{"name":"task 1-1-1","dueDate":"due date 1-1-1","description":"description 1-1-1"},{"name":"task 1-1-2","dueDate":"due date 1-1-2","description":"description 1-1-2"},{"name":"task 1-1-3","dueDate":"due date 1-1-3","description":"description 1-1-3"}]},{"name":"list 1-2","tasks":[{"name":"task 1-2-1","dueDate":"due date 1-2-1","description":"description 1-2-1"},{"name":"task 1-2-2","dueDate":"due date 1-2-2","description":"description 1-2-2"},{"name":"task 1-2-3","dueDate":"due date 1-2-3","description":"description 1-2-3"}]},{"name":"list 1-3","tasks":[{"name":"task 1-3-1","dueDate":"due date 1-3-1","description":"description 1-3-1"},{"name":"task 1-3-2","dueDate":"due date 1-3-2","description":"description 1-3-2"},{"name":"task 1-3-3","dueDate":"due date 1-3-3","description":"description 1-3-3"}]}]},{"name":"project 2","lists":[{"name":"list 2-1","tasks":[{"name":"task 2-1-1","dueDate":"due date 2-1-1","description":"description 2-1-1"},{"name":"task 2-1-2","dueDate":"due date 2-1-2","description":"description 2-1-2"},{"name":"task 2-1-3","dueDate":"due date 2-1-3","description":"description 2-1-3"}]},{"name":"list 2-2","tasks":[{"name":"task 2-2-1","dueDate":"due date 2-2-1","description":"description 2-2-1"},{"name":"task 2-2-2","dueDate":"due date 2-2-2","description":"description 2-2-2"},{"name":"task 2-2-3","dueDate":"due date 2-2-3","description":"description 2-2-3"}]},{"name":"list 2-3","tasks":[{"name":"task 2-3-1","dueDate":"due date 2-3-1","description":"description 2-3-1"},{"name":"task 2-3-2","dueDate":"due date 2-3-2","description":"description 2-3-2"},{"name":"task 2-3-3","dueDate":"due date 2-3-3","description":"description 2-3-3"}]}]},{"name":"project 3","lists":[{"name":"list 3-1","tasks":[{"name":"task 3-1-1","dueDate":"due date 3-1-1","description":"description 3-1-1"},{"name":"task 3-1-2","dueDate":"due date 3-1-2","description":"description 3-1-2"},{"name":"task 3-1-3","dueDate":"due date 3-1-3","description":"description 3-1-3"}]},{"name":"list 3-2","tasks":[{"name":"task 3-2-1","dueDate":"due date 3-2-1","description":"description 3-2-1"},{"name":"task 3-2-2","dueDate":"due date 3-2-2","description":"description 3-2-2"},{"name":"task 3-2-3","dueDate":"due date 3-2-3","description":"description 3-2-3"}]},{"name":"list 3-3","tasks":[{"name":"task 3-3-1","dueDate":"due date 3-3-1","description":"description 3-3-1"},{"name":"task 3-3-2","dueDate":"due date 3-3-2","description":"description 3-3-2"},{"name":"task 3-3-3","dueDate":"due date 3-3-3","description":"description 3-3-3"}]}]}]}]');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI.js */ "./src/modules/UI.js");



const newPage = new _modules_UI_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxhQUFhLFlBQVksVUFBVSxPQUFPLEtBQUssYUFBYSxXQUFXLGFBQWEsV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLFdBQVcsVUFBVSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxNQUFNLEtBQUssYUFBYSxXQUFXLFVBQVUsWUFBWSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsV0FBVyxVQUFVLFdBQVcs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiTztBQUNQO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JFQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBQzZDO0FBQ2hCO0FBQ0E7QUFDTTtBQUNOOztBQUVkO0FBQ2Y7QUFDQSxtREFBbUQsOENBQVc7QUFDOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLGdEQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG1EQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdEQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0RBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEQ0RDtBQUN6QjtBQUNOO0FBQ0E7QUFDTTtBQUNOOztBQUVkO0FBQ2Y7QUFDQTtBQUNBLCtCQUErQixtREFBTztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLHdFQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyx3RUFBbUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyx3RUFBbUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLHdFQUFtQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyx3RUFBbUM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULG9DQUFvQyx3RUFBbUM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsaUNBQWlDLHdFQUFtQztBQUNwRTtBQUNBOztBQUVBLHNDQUFzQyx3RUFBbUM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLHdFQUFtQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkIsd0VBQW1DO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGFBQWE7QUFDeEQsU0FBUzs7QUFFVCx3Q0FBd0Msd0VBQW1DO0FBQzNFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVULHVEQUF1RDs7QUFFdkQ7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyx3RUFBbUM7QUFDdEU7QUFDQTs7QUFFQSw4QkFBOEIsd0VBQW1DO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2Qix3RUFBbUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsd0VBQW1DO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLHdFQUFtQztBQUN6RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsd0VBQW1DO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0Qix3RUFBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx3RUFBbUM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0Msd0VBQW1DO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULG1DQUFtQyx3RUFBbUM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxvQ0FBb0Msd0VBQW1DO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUEsZ0VBQWdFO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLDhCQUE4Qix3RUFBbUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyx3RUFBbUM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDLHdFQUFtQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsd0VBQW1DO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLHdFQUFtQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyx3RUFBbUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULGlDQUFpQyx3RUFBbUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLDhCQUE4Qix3RUFBbUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyx3RUFBbUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0VBQW1DO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLHdFQUFtQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsd0VBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLHdFQUFtQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0Qix3RUFBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsd0VBQW1DO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQsK0JBQStCLHdFQUFtQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLGdEQUFJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRCxVQUFVO0FBQy9EO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBLDREQUE0RCxhQUFhOztBQUV6RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdEQUFJOztBQUVoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQixtREFBTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDemVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNZOztBQUVqQyxvQkFBb0Isc0RBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9zcmMvbW9kdWxlcy9HZW5lcmF0ZVBhZ2VFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9zcmMvbW9kdWxlcy9MaXN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9zcmMvbW9kdWxlcy9TdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9zcmMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vc3JjL21vZHVsZXMvVXNlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2ljb25zL3BsdXMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvaWNvbnMvZG90cy1ob3Jpem9udGFsLWNpcmNsZS1vdXRsaW5lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1nL2ljb25zL21lbnUtcmlnaHQtb3V0bGluZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltZy9pY29ucy9jbG9zZS1ib3gtb3V0bGluZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQrQWx0ZXJuYXRlczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZmFtaWx5PU1vbnRzZXJyYXQ6aXRhbCx3Z2h0QDAsMTAwLi45MDA7MSwxMDAuLjkwMCZmYW1pbHk9Um9ib3RvK01vbm86aXRhbCx3Z2h0QDAsMTAwLi43MDA7MSwxMDAuLjcwMCZmYW1pbHk9Um9ib3RvK1NsYWI6d2dodEAxMDAuLjkwMCZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZmYW1pbHk9VWJ1bnR1Oml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1tdXRlLWNvbG9yOiByZ2IoMjU1LCAxMjcsIDgwLCAwLjEpO1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAyNTMsIDEwNywgNjI7XG4gICAgLS1oaWdobGlnaHQtY29sb3I6IDE0NywgMjUyLCAyMTc7XG4gICAgLS1kYXJrLXNoYWRvdy1jb2xvcjogMCwgMCwgMDtcbiAgICAtLWJveC1zaGFkb3ctdmFsdWVzOiAwLjVyZW0gMC44cmVtIDAuMDVyZW07XG4gICAgLS1taW5vci1ib3gtc2hhZG93LXZhbHVlczogMC4zcmVtIDAuM3JlbSAwLjA1cmVtO1xuICAgIC0tZ2VuZXJhbC1mb250OiBcIk1vbnRzZXJyYXRcIiwgXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gICAgLS10aXRsZS1mb250OiBcIlJvYm90byBTbGFiXCIsIHNlcmlmO1xuICAgIC0tYmFzZS1mb250LWNvbG9yOiByZ2IoMCwgMCwgMCwgMC44KTtcbiAgICAtLWJhc2UtZm9udC1zaXplOiAxdmg7XG4gICAgLS10aXRsZS1mb250LXNpemU6IDRyZW07XG4gICAgLS1oZWFkZXItZm9udC1zaXplOiAycmVtO1xuICAgIC0tY29udGVudC1mb250LXNpemU6IDFyZW07XG4gICAgLS1iYXNlLWxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgIC0tY29udGVudC1saW5lLWhlaWdodDogMjtcblxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYmFzZS1mb250LXNpemUpO1xuXG4gICAgLS1pdGVtLXRpdGxlLWZvbnQtc2l6ZTogMS41cmVtO1xuICAgIC0taXRlbS1pbmZvLWZvbnQtc2l6ZTogMXJlbTtcbiAgICAtLWxpc3QtdGl0bGUtZm9udC1zaXplOiAycmVtO1xuICAgIC0tbGlzdC1pbmZvLWZvbnQtc2l6ZTogMXJlbTtcbiAgICAtLXByb2plY3QtdGl0bGUtZm9udC1zaXplOiAycmVtO1xuICAgIC0tcHJvamVjdC1pbmZvLWZvbnQtc2l6ZTogMS41cmVtO1xuICAgIC0tbmF2LXRpdGxlLWZvbnQtc2l6ZTogMS41cmVtO1xuICAgIC0tbmF2LWluZm8tZm9udC1zaXplOiAxLjI1cmVtO1xuXG4gICAgLS1uYXYtaWNvbi1kaW1lbnNpb246IDJyZW07XG5cbiAgICAtLWRhcmstZ3JlZW46IHJnYmEoNCwgNDIsIDQzLCAxKTtcbiAgICAtLW1vb25zdG9uZTogcmdiYSg5NCwgMTc3LCAxOTEsIDEpO1xuICAgIC0tbGlnaHQtY3lhbjogcmdiYSgyMDUsIDIzNywgMjQ2LCAxKTtcbiAgICAtLW9yYW5nZS1jcmF5b2xhOiByZ2JhKDIzOSwgMTIzLCA2OSwgMSk7XG4gICAgLS1jaGlsaS1yZWQ6IHJnYmEoMjE2LCA3MSwgMzksIDEpO1xuXG4gICAgLS1sYXBpcy1sYXp1bGk6IHJnYmEoMzUsIDg3LCAxMzcsIDEpO1xuICAgIC0taW1wZXJpYWwtcmVkOiByZ2JhKDI1MSwgNTQsIDY0LCAwLjEpO1xuICAgIC0tYXF1YW1hcmluZTogcmdiYSgyMiwgMjQ0LCAyMDgsIDEpO1xuICAgIC0tc2Nob29sLWJ1cy15ZWxsb3c6IHJnYmEoMjQxLCAyMTEsIDIsIDEpO1xuICAgIC0tYmxhY2s6IHJnYmEoMiwgMSwgMCwgMSk7XG5cbiAgICAtLW5hdi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbXBlcmlhbC1yZWQpO1xuICAgIC0tY29udGVudC1jb250YWluZXItY29sb3I6IHJnYigyNDIsIDI0MiwgMjQyKTtcbiAgICAtLXByb2plY3QtY29udGFpbmVyLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cbiAgICAtLWJveC1zaGFkb3ctdmFsdWVzOiAtMC41cmVtIDAuOHJlbSAwLjVyZW07XG4gICAgLS1taW5vci1ib3gtc2hhZG93LXZhbHVlczogLTAuM3JlbSAwLjNyZW0gMC4zcmVtO1xuICAgIC0tZHJvcC1zaGFkb3ctY29sb3I6IHJnYigwLCAwLCAwLCAwLjQpO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KG1pbigxMHJlbSwgMTAwJSksIDJmcikgbWlubWF4KFxuICAgICAgICAgICAgbWluKDEwcmVtLCAxMDAlKSxcbiAgICAgICAgICAgIDVmclxuICAgICAgICApO1xuXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWdlbmVyYWwtZm9udCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1nZW5lcmFsLWZvbnQtc2l6ZSk7XG4gICAgbWFyZ2luOiAwO1xuXG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLm5hdi1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwcHgsIDAuNWZyKSk7XG5cbiAgICBnYXA6IDJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdC1jb250YWluZXItY29sb3IpO1xuICAgIHBhZGRpbmc6IDRyZW0gMXJlbTtcblxuICAgIC8qIG92ZXJmbG93OiBzY3JvbGw7ICovXG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbn1cblxuLm5hdi10aXRsZS1jb250YWluZXIge1xuICAgIC8qIGdyaWQtY29sdW1uOiAxIC8gMzsgKi9cbiAgICBncmlkLXJvdzogMSAvIDI7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuXG4gICAgZm9udC1zaXplOiB2YXIoLS1uYXYtdGl0bGUtZm9udC1zaXplKTtcbn1cblxuLm5hdi10aXRsZSB7XG4gICAgLyogZ3JpZC1jb2x1bW46IDEgLyAyOyAqL1xufVxuXG4ubmV3LXByb2plY3QtYnV0dG9uIHtcbiAgICAvKiBncmlkLWNvbHVtbjogMyAvIDQ7ICovXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xufVxuXG4ubmF2LWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMXJlbTtcbiAgICBmb250LXNpemU6IHZhcigtLW5hdi1pbmZvLWZvbnQtc2l6ZSk7XG5cbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbiAgICAvKiBoZWlnaHQ6IDUwMHB4OyAqL1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5uYXYtcHJvamVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xufVxuXG4ubmF2LXByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xufVxuXG4ubmF2LXByb2plY3QtdGl0bGUtaWNvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xufVxuXG4ubmF2LXByb2plY3QtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5uYXYtcHJvamVjdC1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xufVxuXG4ubmF2LWxpc3QtdGl0bGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjJyZW07XG59XG5cbi5uYXYtbGlzdC10aXRsZS1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaWNvbi1kaW1lbnNpb24pO1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG59XG5cbi5uYXYtbGlzdC10aXRsZSB7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1jb250YWluZXItY29sb3IpO1xuICAgIC8qIGJvcmRlcjogc29saWQgMXB4IHJlZDsgKi9cblxuICAgIGhlaWdodDogMTAwdmg7XG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKTsgKi9cbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSByZXBlYXQoYXV0by1maWxsLCAxZnIpO1xuXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1tdXRlLWNvbG9yKSwgMSk7ICovXG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgZ2FwOiAwLjVyZW07XG5cbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0LWNvbnRhaW5lci1jb2xvcik7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMpXG4gICAgICAgIHJnYmEodmFyKC0tZHJvcC1zaGFkb3ctY29sb3ItY29sb3IpLCAwLjUpO1xufVxuXG4ucHJvamVjdC10aXRsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyIDFmcjtcbiAgICBmb250LXNpemU6IHZhcigtLXByb2plY3QtaW5mby1mb250LXNpemUpO1xuICAgIC8qIGJvcmRlcjogc29saWQgYmxhY2sgMXB4OyAqL1xufVxuXG4ucHJvamVjdC1pbmZvLWNvbnRhaW5lciB7XG4gICAgLyogYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7ICovXG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IHZhcigtLXByb2plY3QtdGl0bGUtZm9udC1zaXplKTtcbn1cblxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xufVxuXG4ubmV3LXByb2plY3QtbGlzdC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbn1cblxuLmNsb3NlLXByb2plY3QtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaWNvbi1kaW1lbnNpb24pO1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG59XG5cbi5saXN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDAuNXJlbTtcblxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSwgMC41KTsgKi9cbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLW1pbm9yLWJveC1zaGFkb3ctdmFsdWVzKSB2YXIoLS1kcm9wLXNoYWRvdy1jb2xvcik7XG4gICAgLyogYm9yZGVyLXJhZGl1czogMC41cmVtOyAqL1xufVxuXG4ubGlzdC10aXRsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tbGlzdC1pbmZvLWZvbnQtc2l6ZSk7XG59XG5cbi5saXN0LWluZm8tY29udGFpbmVyIHtcbn1cblxuLmxpc3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tbGlzdC10aXRsZS1mb250LXNpemUpO1xufVxuXG4ubGlzdC1kZXNjcmlwdGlvbiB7XG59XG5cbi5uZXctbGlzdC1pdGVtLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xufVxuXG4uaXRlbS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyIDFmcjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNlY29uZGFyeS1jb2xvciksIDAuNSk7ICovXG59XG5cbi5pdGVtLWNoZWNrYm94LWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaXRlbS1jaGVja2JveCB7XG59XG5cbi8qIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICB3aWR0aDogMWVtO1xuXG4gICAgYmFja2dyb3VuZDogIzBhMGEwYTtcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAwLjY1ZW07XG4gICAgaGVpZ2h0OiAwLjY1ZW07XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1mb3JtLWNvbnRyb2wtY29sb3IpO1xufSAqL1xuXG4uaXRlbS1pbmZvLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taXRlbS1pbmZvLWZvbnQtc2l6ZSk7XG59XG5cbi5pdGVtLXRpdGxlIHtcbiAgICBmb250LXNpemU6IHZhcigtLWl0ZW0tdGl0bGUtZm9udC1zaXplKTtcbn1cblxuLml0ZW0tZGVzY3JpcHRpb24ge1xufVxuXG4uaXRlbS1kdWUtZGF0ZSB7XG59XG5cbi5pdGVtLXJlbW92ZS1idXR0b24ge1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsNEJBQTRCO0lBQzVCLDBDQUEwQztJQUMxQyxnREFBZ0Q7SUFDaEQsNERBQTREO0lBQzVELGtDQUFrQztJQUNsQyxvQ0FBb0M7SUFDcEMscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4Qix3QkFBd0I7O0lBRXhCLGdDQUFnQzs7SUFFaEMsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLDZCQUE2Qjs7SUFFN0IsMEJBQTBCOztJQUUxQixnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDLG9DQUFvQztJQUNwQyx1Q0FBdUM7SUFDdkMsaUNBQWlDOztJQUVqQyxvQ0FBb0M7SUFDcEMsc0NBQXNDO0lBQ3RDLG1DQUFtQztJQUNuQyx5Q0FBeUM7SUFDekMseUJBQXlCOztJQUV6QiwyQ0FBMkM7SUFDM0MsNkNBQTZDO0lBQzdDLDZDQUE2Qzs7SUFFN0MsMENBQTBDO0lBQzFDLGdEQUFnRDtJQUNoRCxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7OztTQUdLOztJQUVMLGdDQUFnQztJQUNoQyxtQ0FBbUM7SUFDbkMsU0FBUzs7SUFFVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCOztJQUVsQixhQUFhO0lBQ2IsOERBQThEOztJQUU5RCxTQUFTO0lBQ1QsZ0RBQWdEO0lBQ2hELGtCQUFrQjs7SUFFbEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sU0FBUztJQUNULGFBQWE7O0lBRWIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7O0lBRWYsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTOztJQUVULHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix5REFBMkM7SUFDM0MsaUNBQWlDO0lBQ2pDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1Qsb0NBQW9DOztJQUVwQyw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5REFBcUU7SUFDckUsaUNBQWlDO0lBQ2pDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0kseURBQXlEO0lBQ3pELGlDQUFpQztJQUNqQyxtQkFBbUI7QUFDdkI7O0FBRUE7QUFDQTs7QUFFQTtJQUNJLGtCQUFrQjs7SUFFbEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxnREFBZ0Q7SUFDaEQsMkJBQTJCOztJQUUzQixhQUFhO0lBQ2IsbUVBQW1FO0FBQ3ZFOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtDQUErQzs7SUFFL0Msa0RBQWtEO0lBQ2xELGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVzs7SUFFWCxnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGdEQUFnRDtJQUNoRDtpREFDNkM7QUFDakQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHdDQUF3QztJQUN4Qyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7QUFDQTs7QUFFQTtJQUNJLHlEQUEyQztJQUMzQyxpQ0FBaUM7SUFDakMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseURBQXdEO0lBQ3hELGlDQUFpQztJQUNqQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVzs7SUFFWCx5REFBeUQ7SUFDekQsYUFBYTtJQUNiLG1FQUFtRTtJQUNuRSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHFDQUFxQztBQUN6Qzs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0FBQ0E7O0FBRUE7SUFDSSx5REFBMkM7SUFDM0MsaUNBQWlDO0lBQ2pDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMseURBQXlEO0FBQzdEOztBQUVBO0lBQ0ksa0JBQWtCOztJQUVsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHOztBQUVIO0lBQ0ksa0JBQWtCO0lBQ2xCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0K0FsdGVybmF0ZXM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZmFtaWx5PVJvYm90bytNb25vOml0YWwsd2dodEAwLDEwMC4uNzAwOzEsMTAwLi43MDAmZmFtaWx5PVJvYm90bytTbGFiOndnaHRAMTAwLi45MDAmZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZmFtaWx5PVVidW50dTppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgICAtLW11dGUtY29sb3I6IHJnYigyNTUsIDEyNywgODAsIDAuMSk7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAyNTMsIDEwNywgNjI7XFxuICAgIC0taGlnaGxpZ2h0LWNvbG9yOiAxNDcsIDI1MiwgMjE3O1xcbiAgICAtLWRhcmstc2hhZG93LWNvbG9yOiAwLCAwLCAwO1xcbiAgICAtLWJveC1zaGFkb3ctdmFsdWVzOiAwLjVyZW0gMC44cmVtIDAuMDVyZW07XFxuICAgIC0tbWlub3ItYm94LXNoYWRvdy12YWx1ZXM6IDAuM3JlbSAwLjNyZW0gMC4wNXJlbTtcXG4gICAgLS1nZW5lcmFsLWZvbnQ6IFxcXCJNb250c2VycmF0XFxcIiwgXFxcIlJvYm90byBDb25kZW5zZWRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAtLXRpdGxlLWZvbnQ6IFxcXCJSb2JvdG8gU2xhYlxcXCIsIHNlcmlmO1xcbiAgICAtLWJhc2UtZm9udC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuOCk7XFxuICAgIC0tYmFzZS1mb250LXNpemU6IDF2aDtcXG4gICAgLS10aXRsZS1mb250LXNpemU6IDRyZW07XFxuICAgIC0taGVhZGVyLWZvbnQtc2l6ZTogMnJlbTtcXG4gICAgLS1jb250ZW50LWZvbnQtc2l6ZTogMXJlbTtcXG4gICAgLS1iYXNlLWxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgICAtLWNvbnRlbnQtbGluZS1oZWlnaHQ6IDI7XFxuXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYmFzZS1mb250LXNpemUpO1xcblxcbiAgICAtLWl0ZW0tdGl0bGUtZm9udC1zaXplOiAxLjVyZW07XFxuICAgIC0taXRlbS1pbmZvLWZvbnQtc2l6ZTogMXJlbTtcXG4gICAgLS1saXN0LXRpdGxlLWZvbnQtc2l6ZTogMnJlbTtcXG4gICAgLS1saXN0LWluZm8tZm9udC1zaXplOiAxcmVtO1xcbiAgICAtLXByb2plY3QtdGl0bGUtZm9udC1zaXplOiAycmVtO1xcbiAgICAtLXByb2plY3QtaW5mby1mb250LXNpemU6IDEuNXJlbTtcXG4gICAgLS1uYXYtdGl0bGUtZm9udC1zaXplOiAxLjVyZW07XFxuICAgIC0tbmF2LWluZm8tZm9udC1zaXplOiAxLjI1cmVtO1xcblxcbiAgICAtLW5hdi1pY29uLWRpbWVuc2lvbjogMnJlbTtcXG5cXG4gICAgLS1kYXJrLWdyZWVuOiByZ2JhKDQsIDQyLCA0MywgMSk7XFxuICAgIC0tbW9vbnN0b25lOiByZ2JhKDk0LCAxNzcsIDE5MSwgMSk7XFxuICAgIC0tbGlnaHQtY3lhbjogcmdiYSgyMDUsIDIzNywgMjQ2LCAxKTtcXG4gICAgLS1vcmFuZ2UtY3JheW9sYTogcmdiYSgyMzksIDEyMywgNjksIDEpO1xcbiAgICAtLWNoaWxpLXJlZDogcmdiYSgyMTYsIDcxLCAzOSwgMSk7XFxuXFxuICAgIC0tbGFwaXMtbGF6dWxpOiByZ2JhKDM1LCA4NywgMTM3LCAxKTtcXG4gICAgLS1pbXBlcmlhbC1yZWQ6IHJnYmEoMjUxLCA1NCwgNjQsIDAuMSk7XFxuICAgIC0tYXF1YW1hcmluZTogcmdiYSgyMiwgMjQ0LCAyMDgsIDEpO1xcbiAgICAtLXNjaG9vbC1idXMteWVsbG93OiByZ2JhKDI0MSwgMjExLCAyLCAxKTtcXG4gICAgLS1ibGFjazogcmdiYSgyLCAxLCAwLCAxKTtcXG5cXG4gICAgLS1uYXYtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW1wZXJpYWwtcmVkKTtcXG4gICAgLS1jb250ZW50LWNvbnRhaW5lci1jb2xvcjogcmdiKDI0MiwgMjQyLCAyNDIpO1xcbiAgICAtLXByb2plY3QtY29udGFpbmVyLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuXFxuICAgIC0tYm94LXNoYWRvdy12YWx1ZXM6IC0wLjVyZW0gMC44cmVtIDAuNXJlbTtcXG4gICAgLS1taW5vci1ib3gtc2hhZG93LXZhbHVlczogLTAuM3JlbSAwLjNyZW0gMC4zcmVtO1xcbiAgICAtLWRyb3Atc2hhZG93LWNvbG9yOiByZ2IoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KG1pbigxMHJlbSwgMTAwJSksIDJmcikgbWlubWF4KFxcbiAgICAgICAgICAgIG1pbigxMHJlbSwgMTAwJSksXFxuICAgICAgICAgICAgNWZyXFxuICAgICAgICApO1xcblxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZ2VuZXJhbC1mb250KTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1nZW5lcmFsLWZvbnQtc2l6ZSk7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLm5hdi1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMHB4LCAwLjVmcikpO1xcblxcbiAgICBnYXA6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3QtY29udGFpbmVyLWNvbG9yKTtcXG4gICAgcGFkZGluZzogNHJlbSAxcmVtO1xcblxcbiAgICAvKiBvdmVyZmxvdzogc2Nyb2xsOyAqL1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxufVxcblxcbi5uYXYtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgLyogZ3JpZC1jb2x1bW46IDEgLyAzOyAqL1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG5cXG4gICAgZm9udC1zaXplOiB2YXIoLS1uYXYtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLm5hdi10aXRsZSB7XFxuICAgIC8qIGdyaWQtY29sdW1uOiAxIC8gMjsgKi9cXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIC8qIGdyaWQtY29sdW1uOiAzIC8gNDsgKi9cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2ljb25zL3BsdXMuc3ZnKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaWNvbi1kaW1lbnNpb24pO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4ubmF2LWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBmb250LXNpemU6IHZhcigtLW5hdi1pbmZvLWZvbnQtc2l6ZSk7XFxuXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICAvKiBoZWlnaHQ6IDUwMHB4OyAqL1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4ubmF2LXByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbn1cXG5cXG4ubmF2LXByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLm5hdi1wcm9qZWN0LXRpdGxlLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvZG90cy1ob3Jpem9udGFsLWNpcmNsZS1vdXRsaW5lLnN2Zyk7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLm5hdi1wcm9qZWN0LXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLm5hdi1wcm9qZWN0LWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4ubmF2LWxpc3QtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjJyZW07XFxufVxcblxcbi5uYXYtbGlzdC10aXRsZS1pY29uIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2ljb25zL21lbnUtcmlnaHQtb3V0bGluZS5zdmcpO1xcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbi5uYXYtbGlzdC10aXRsZSB7XFxufVxcblxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNvbnRhaW5lci1jb2xvcik7XFxuICAgIC8qIGJvcmRlcjogc29saWQgMXB4IHJlZDsgKi9cXG5cXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKTsgKi9cXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIHJlcGVhdChhdXRvLWZpbGwsIDFmcik7XFxuXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbXV0ZS1jb2xvciksIDEpOyAqL1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGdhcDogMC41cmVtO1xcblxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiAwLjVyZW07ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3QtY29udGFpbmVyLWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMpXFxuICAgICAgICByZ2JhKHZhcigtLWRyb3Atc2hhZG93LWNvbG9yLWNvbG9yKSwgMC41KTtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyIDFmcjtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1wcm9qZWN0LWluZm8tZm9udC1zaXplKTtcXG4gICAgLyogYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7ICovXFxufVxcblxcbi5wcm9qZWN0LWluZm8tY29udGFpbmVyIHtcXG4gICAgLyogYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7ICovXFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1wcm9qZWN0LXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWxpc3QtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2ljb25zL3BsdXMuc3ZnKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaWNvbi1kaW1lbnNpb24pO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4uY2xvc2UtcHJvamVjdC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvY2xvc2UtYm94LW91dGxpbmUuc3ZnKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaWNvbi1kaW1lbnNpb24pO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDAuNXJlbTtcXG5cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zZWNvbmRhcnktY29sb3IpLCAwLjUpOyAqL1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1taW5vci1ib3gtc2hhZG93LXZhbHVlcykgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpO1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiAwLjVyZW07ICovXFxufVxcblxcbi5saXN0LXRpdGxlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmcjtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1saXN0LWluZm8tZm9udC1zaXplKTtcXG59XFxuXFxuLmxpc3QtaW5mby1jb250YWluZXIge1xcbn1cXG5cXG4ubGlzdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tbGlzdC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4ubGlzdC1kZXNjcmlwdGlvbiB7XFxufVxcblxcbi5uZXctbGlzdC1pdGVtLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9pY29ucy9wbHVzLnN2Zyk7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLml0ZW0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyIDFmcjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zZWNvbmRhcnktY29sb3IpLCAwLjUpOyAqL1xcbn1cXG5cXG4uaXRlbS1jaGVja2JveC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaXRlbS1jaGVja2JveCB7XFxufVxcblxcbi8qIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gICAgd2lkdGg6IDFlbTtcXG5cXG4gICAgYmFja2dyb3VuZDogIzBhMGEwYTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDAuNjVlbTtcXG4gICAgaGVpZ2h0OiAwLjY1ZW07XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1mb3JtLWNvbnRyb2wtY29sb3IpO1xcbn0gKi9cXG5cXG4uaXRlbS1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZm9udC1zaXplOiB2YXIoLS1pdGVtLWluZm8tZm9udC1zaXplKTtcXG59XFxuXFxuLml0ZW0tdGl0bGUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWl0ZW0tdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLml0ZW0tZGVzY3JpcHRpb24ge1xcbn1cXG5cXG4uaXRlbS1kdWUtZGF0ZSB7XFxufVxcblxcbi5pdGVtLXJlbW92ZS1idXR0b24ge1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgIGVsZW1lbnRUeXBlLFxuICAgIGVsZW1lbnRDbGFzc2VzID0ge30sXG4gICAgcGFyZW50RWxlbWVudCA9IG51bGwsXG4gICAgZWxlbWVudFRleHQgPSBudWxsXG4pIHtcbiAgICBpZiAoZWxlbWVudFR5cGUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcblxuICAgIGlmIChlbGVtZW50Q2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGVsZW1lbnRDbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICAgICAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50VGV4dCAhPSBudWxsKSB7XG4gICAgICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50VGV4dDtcbiAgICB9XG5cbiAgICBpZiAocGFyZW50RWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhck5vZGVDb250ZW50KHRoaXNOb2RlKSB7XG4gICAgd2hpbGUgKHRoaXNOb2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGhpc05vZGUucmVtb3ZlQ2hpbGQodGhpc05vZGUubGFzdENoaWxkKTtcbiAgICB9XG59XG4iLCIvL2ltcG9ydCAqIGFzIFRhc2sgZnJvbSBcIi4vVGFzay5qc1wiO1xuLy9pbXBvcnQgKiBhcyBHZW5lcmF0ZUVsZW1lbnQgZnJvbSBcIi4vR2VuZXJhdGVQYWdlRWxlbWVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24gPSBcIk5vIGRlc2NyaXB0aW9uIHNldFwiLFxuICAgICAgICB0YXNrcyA9IFtdLFxuICAgICAgICBwYXJlbnRQcm9qZWN0XG4gICAgKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICAgICAgICB0aGlzLnBhcmVudFByb2plY3QgPSBwYXJlbnRQcm9qZWN0O1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXRUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3M7XG4gICAgfVxuXG4gICAgc2V0VGFza3ModGFza3NMaXN0KSB7XG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrc0xpc3Q7XG4gICAgfVxuXG4gICAgZ2V0VGFzayh0YXNrTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gdGFza05hbWUpO1xuICAgIH1cblxuICAgIGNvbnRhaW5zVGFzayh0YXNrTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PSB0YXNrTmFtZSk7XG4gICAgfVxuXG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluc1Rhc2sobmV3VGFzay5nZXROYW1lKCkpKSB7XG4gICAgICAgICAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVUYXNrKHRhc2tOYW1lKSB7XG4gICAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5nZXROYW1lKCkgIT09IHRhc2tOYW1lKTtcbiAgICB9XG5cbiAgICBzZXRDb250YWluZXJOb2RlKGNvbnRhaW5lck5vZGUpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJOb2RlID0gY29udGFpbmVyTm9kZTtcbiAgICB9XG5cbiAgICBnZXRDb250YWluZXJOb2RlKCkge1xuICAgICAgICBpZiAodGhpcy5jb250YWluZXJOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXJOb2RlO1xuICAgICAgICB9XG4gICAgICAgIC8vVE9ETzogU2hvdWxkIHRoZXJlIGJlIGEgcmV0dXJuIHZhbHVlIGlmIHRoZXJlIGlzbid0IGEgbm9kZSBhc3NpZ25lZCBhbHJlYWR5P1xuICAgICAgICAvL1Nob3VsZCB0aGlzIHByb3BlcnR5IGp1c3QgYmUgaW5pdGlhbGl6ZWQgYXMgYSBibGFuayBzb21laG93IHdoZW4gdGhpcyBvYmplY3QgaXMgY3JlYXRlZD9cbiAgICB9XG59XG4iLCIvL2ltcG9ydCAqIGFzIExpc3QgZnJvbSBcIi4vTGlzdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICAvL1RPRE86IFNob3VsZCB0aGUgcHJvamVjdCBoYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBVSSBlbGVtZW50IGNvbnRhaW5pbmcgaXQncyBpbmZvcm1hdGlvbiB0byBtYWtlIHVwZGF0aW5nIHNhaWQgVUkgZWxlbWVudCBlYXNpZXI/XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gXCJObyBkZXNjcmlwdGlvbiBzZXRcIixcbiAgICAgICAgbGlzdHMgPSBbXSxcbiAgICAgICAgcGFyZW50VXNlclxuICAgICkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMubGlzdHMgPSBsaXN0cztcbiAgICAgICAgdGhpcy5wYXJlbnRVc2VyID0gcGFyZW50VXNlcjtcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHNldE5hbWUobmV3TmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0VGFza3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3RzO1xuICAgIH1cblxuICAgIHNldExpc3RzKGxpc3RzKSB7XG4gICAgICAgIHRoaXMubGlzdHMgPSBsaXN0cztcbiAgICB9XG5cbiAgICBjb250YWluc0xpc3QobGlzdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdHMuc29tZSgobGlzdCkgPT4gbGlzdC5nZXROYW1lKCkgPT0gbGlzdE5hbWUpO1xuICAgIH1cblxuICAgIGFkZExpc3QobmV3TGlzdCkge1xuICAgICAgICBpZiAoIXRoaXMuY29udGFpbnNMaXN0KG5ld0xpc3QuZ2V0TmFtZSgpKSkge1xuICAgICAgICAgICAgdGhpcy5saXN0cy5wdXNoKG5ld0xpc3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlTGlzdChsaXN0TmFtZSkge1xuICAgICAgICB0aGlzLmxpc3RzID0gdGhpcy5saXN0cy5maWx0ZXIoKGxpc3QpID0+IGxpc3QuZ2V0TmFtZSgpICE9PSBsaXN0TmFtZSk7XG4gICAgfVxuXG4gICAgc2V0Q29udGFpbmVyTm9kZShjb250YWluZXJOb2RlKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyTm9kZSA9IGNvbnRhaW5lck5vZGU7XG4gICAgfVxuXG4gICAgZ2V0Q29udGFpbmVyTm9kZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyTm9kZTtcbiAgICAgICAgfVxuICAgICAgICAvL1RPRE86IFNob3VsZCB0aGVyZSBiZSBhIHJldHVybiB2YWx1ZSBpZiB0aGVyZSBpc24ndCBhIG5vZGUgYXNzaWduZWQgYWxyZWFkeT9cbiAgICAgICAgLy9TaG91bGQgdGhpcyBwcm9wZXJ0eSBqdXN0IGJlIGluaXRpYWxpemVkIGFzIGEgYmxhbmsgc29tZWhvdyB3aGVuIHRoaXMgb2JqZWN0IGlzIGNyZWF0ZWQ/XG4gICAgfVxufVxuIiwiLy9pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyLmpzXCI7XG5pbXBvcnQgc3RvcmFnZUZpbGUgZnJvbSBcIi4vdXNlclN0b3JhZ2UuanNvblwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFzay5qc1wiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdC5qc1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdC5qc1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QganNvblRleHQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VGaWxlKSk7XG4gICAgICAgIHRoaXMudXNlckxpc3QgPSB0aGlzLnBhcnNlVXNlcnMoanNvblRleHQpO1xuICAgIH1cblxuICAgIGdldFVzZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyTGlzdDtcbiAgICB9XG5cbiAgICAvL1RPRE86IERvIHdlIG5lZWQgYSB1c2VyIGNvbnRhaW5lciBvYmplY3QgdG8gdGhlbiBiZSBhYmxlIHRvIGNvbW1pdCBiYWNrIGludG8gdGhlIGpzb24gZmlsZT9cblxuICAgIHBhcnNlVXNlcnMoanNvblRleHQpIHtcbiAgICAgICAgY29uc3QgdXNlcnMgPSBbXTtcblxuICAgICAgICBqc29uVGV4dC5mb3JFYWNoKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VyTmFtZSA9IHVzZXIubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1VzZXIgPSBuZXcgVXNlcih1c2VyTmFtZSwgW10sIGpzb25UZXh0KTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJQcm9qZWN0cyA9IHRoaXMucGFyc2VQcm9qZWN0cyh1c2VyLnByb2plY3RzLCBuZXdVc2VyKTtcbiAgICAgICAgICAgIG5ld1VzZXIuc2V0UHJvamVjdHModXNlclByb2plY3RzKTtcbiAgICAgICAgICAgIHVzZXJzLnB1c2gobmV3VXNlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB1c2VycztcbiAgICB9XG5cbiAgICAvL0NyZWF0ZSBwYXJlbnQgdXNlciBmaXJzdCBhbmQgKnRoZW4qIGdlbmVyYXRlIHRoZSBsaXN0IG9mIHByb2plY3RzIG9uY2UgdGhlIHVzZXIgb2JqZWN0IGFscmVhZHkgZXhpc3RzP1xuXG4gICAgcGFyc2VQcm9qZWN0cyhqc29uUHJvamVjdHMsIHBhcmVudFVzZXIpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBbXTtcbiAgICAgICAganNvblByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcbiAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgcGFyZW50VXNlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0cyA9IHRoaXMucGFyc2VMaXN0cyhwcm9qZWN0Lmxpc3RzLCBuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIG5ld1Byb2plY3Quc2V0TGlzdHMocHJvamVjdExpc3RzKTtcbiAgICAgICAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvamVjdHM7XG4gICAgfVxuXG4gICAgcGFyc2VMaXN0cyhqc29uTGlzdHMsIHBhcmVudFByb2plY3QpIHtcbiAgICAgICAgY29uc3QgbGlzdHMgPSBbXTtcbiAgICAgICAganNvbkxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3ROYW1lID0gbGlzdC5uYW1lO1xuICAgICAgICAgICAgY29uc3QgbGlzdERlc2NyaXB0aW9uID0gbGlzdC5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IG5ld0xpc3QgPSBuZXcgTGlzdChcbiAgICAgICAgICAgICAgICBsaXN0TmFtZSxcbiAgICAgICAgICAgICAgICBsaXN0RGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgcGFyZW50UHJvamVjdFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RUYXNrcyA9IHRoaXMucGFyc2VUYXNrcyhsaXN0LnRhc2tzLCBuZXdMaXN0KTtcbiAgICAgICAgICAgIG5ld0xpc3Quc2V0VGFza3MobGlzdFRhc2tzKTtcbiAgICAgICAgICAgIGxpc3RzLnB1c2gobmV3TGlzdCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbGlzdHM7XG4gICAgfVxuXG4gICAgcGFyc2VUYXNrcyhqc29uVGFza3MsIHBhcmVudExpc3QpIHtcbiAgICAgICAgY29uc3QgdGFza3MgPSBbXTtcbiAgICAgICAganNvblRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gdGFzay5uYW1lO1xuICAgICAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gdGFzay5kdWVEYXRlO1xuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFxuICAgICAgICAgICAgICAgIHRhc2tOYW1lLFxuICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlLFxuICAgICAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBwYXJlbnRMaXN0XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGFza3MucHVzaChuZXdUYXNrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0YXNrcztcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZHVlRGF0ZSA9IFwiTm8gZHVlIGRhdGUgc2V0LlwiLFxuICAgICAgICBkZXNjcmlwdGlvbiA9IFwiTm8gZGVzY3JpcHRpb24gc2V0IHlldC5cIixcbiAgICAgICAgcGFyZW50TGlzdFxuICAgICkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucGFyZW50TGlzdCA9IHBhcmVudExpc3Q7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBzZXROYW1lKG5ld05hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICB9XG5cbiAgICBnZXREYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICAgIH1cblxuICAgIHNldERhdGUobmV3RGF0ZSkge1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBuZXdEYXRlO1xuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0Q29udGFpbmVyTm9kZShjb250YWluZXJOb2RlKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyTm9kZSA9IGNvbnRhaW5lck5vZGU7XG4gICAgfVxuXG4gICAgZ2V0Q29udGFpbmVyTm9kZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyTm9kZTtcbiAgICAgICAgfVxuICAgICAgICAvL1RPRE86IFNob3VsZCB0aGVyZSBiZSBhIHJldHVybiB2YWx1ZSBpZiB0aGVyZSBpc24ndCBhIG5vZGUgYXNzaWduZWQgYWxyZWFkeT9cbiAgICAgICAgLy9TaG91bGQgdGhpcyBwcm9wZXJ0eSBqdXN0IGJlIGluaXRpYWxpemVkIGFzIGEgYmxhbmsgc29tZWhvdyB3aGVuIHRoaXMgb2JqZWN0IGlzIGNyZWF0ZWQ/XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgR2VuZXJhdGVFbGVtZW50IGZyb20gXCIuL0dlbmVyYXRlUGFnZUVsZW1lbnQuanNcIjtcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL1N0b3JhZ2UuanNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2suanNcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3QuanNcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3QuanNcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuL1VzZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICAgIC8vSW5pdGlhbGl6ZSBwYWdlIGJvZHksIG5hdiBjb250YWluZXIsIGFuZCBjb250ZW50IGNvbnRhaW5lciBwYWdlIGVsZW1lbnRzIHRvIGJlIGxhdGVyIHBvcHVsYXRlZFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBuZXdTdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcbiAgICAgICAgY29uc3QgdXNlckxpc3QgPSBuZXdTdG9yYWdlLmdldFVzZXJzKCk7XG5cbiAgICAgICAgdGhpcy51c2VyID0gdXNlckxpc3RbMF07XG4gICAgICAgIHRoaXMucGFnZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgdGhpcy5uYXZDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wYWdlQm9keS5hcHBlbmRDaGlsZCh0aGlzLm5hdkNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiY29udGVudC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnBhZ2VCb2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGVudENvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5sb2FkUGFnZUNvbnRlbnQodGhpcy51c2VyLnByb2plY3RzWzBdLm5hbWUpO1xuICAgIH1cblxuICAgIC8vQ2xlYXJzIGFuZCBwb3B1bGF0ZXMgbmF2IGFuZCBkaXNwbGF5IHBhbmVzXG4gICAgbG9hZFBhZ2VDb250ZW50KG5hbWVPZlByb2plY3RUb0xvYWQgPSBcIlwiKSB7XG4gICAgICAgIHRoaXMucmVsb2FkTmF2Q29udGVudCgpO1xuXG4gICAgICAgIHRoaXMuY2xlYXJEaXNwbGF5Q29udGVudCgpO1xuICAgICAgICAvL0luIGNhc2UgdGhlcmUgaXNuJ3QgYSBwcm9qZWN0IHRvIGxvYWQuLi4uXG4gICAgICAgIGlmIChuYW1lT2ZQcm9qZWN0VG9Mb2FkICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsbERpc3BsYXlQYW5lQ29udGVudChuYW1lT2ZQcm9qZWN0VG9Mb2FkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyTmF2Q29udGVudCgpIHtcbiAgICAgICAgdGhpcy5uYXZDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgfVxuXG4gICAgcmVsb2FkTmF2Q29udGVudCgpIHtcbiAgICAgICAgdGhpcy5jbGVhck5hdkNvbnRlbnQoKTtcbiAgICAgICAgdGhpcy5maWxsTmF2Q29udGVudCgpO1xuICAgIH1cblxuICAgIGNsZWFyRGlzcGxheUNvbnRlbnQoKSB7XG4gICAgICAgIHRoaXMuY29udGVudENvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICBmaWxsTmF2Q29udGVudCgpIHtcbiAgICAgICAgY29uc3QgbmF2VGl0bGVDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtdGl0bGUtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgdGhpcy5uYXZDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBuYXZUaXRsZSA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi10aXRsZVwiXSxcbiAgICAgICAgICAgIG5hdlRpdGxlQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJNeSBQcm9qZWN0c1wiXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgYWRkTmV3UHJvamVjdEJ1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5ldy1wcm9qZWN0LWJ1dHRvblwiXSxcbiAgICAgICAgICAgIG5hdlRpdGxlQ29udGFpbmVyXG4gICAgICAgICk7XG4gICAgICAgIGFkZE5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTmV3UHJvamVjdCgpO1xuICAgICAgICAgICAgdGhpcy5yZWxvYWROYXZDb250ZW50KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG5hdkNvbnRlbnRDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtY29udGVudC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICB0aGlzLm5hdkNvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMucG9wdWxhdGVOYXZDb250ZW50KG5hdkNvbnRlbnRDb250YWluZXIsIHRoaXMudXNlci5wcm9qZWN0cyk7XG5cbiAgICAgICAgdGhpcy5uYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2Q29udGVudENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcG9wdWxhdGVOYXZDb250ZW50KG5hdkNvbnRlbnRDb250YWluZXIsIHByb2plY3RzKSB7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIG5hdkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQcm9qZWN0TmF2VmlzdWFsKHByb2plY3QpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVQcm9qZWN0TmF2VmlzdWFsKHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFwiZGl2XCIsIFtcbiAgICAgICAgICAgIFwibmF2LXByb2plY3QtY29udGFpbmVyXCIsXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUNvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1wcm9qZWN0LXRpdGxlLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVJY29uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibmF2LXByb2plY3QtdGl0bGUtaWNvblwiXSxcbiAgICAgICAgICAgIHByb2plY3RUaXRsZUNvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1wcm9qZWN0LXRpdGxlXCJdLFxuICAgICAgICAgICAgcHJvamVjdFRpdGxlQ29udGFpbmVyLFxuICAgICAgICAgICAgcHJvamVjdC5uYW1lXG4gICAgICAgICk7XG4gICAgICAgIHByb2plY3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGVhckRpc3BsYXlDb250ZW50KCk7XG4gICAgICAgICAgICB0aGlzLmZpbGxEaXNwbGF5UGFuZUNvbnRlbnQoYCR7cHJvamVjdC5uYW1lfWApO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGVudENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1wcm9qZWN0LWNvbnRlbnQtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIHByb2plY3QubGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdENvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVMaXN0TmF2VmlzdWFsKGxpc3QpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyogcHJvamVjdC5zZXRDb250YWluZXJOb2RlKHByb2plY3RDb250YWluZXIpOyAqL1xuXG4gICAgICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xuICAgIH1cblxuICAgIGNyZWF0ZUxpc3ROYXZWaXN1YWwobGlzdCkge1xuICAgICAgICBjb25zdCBsaXN0VGl0bGVDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcImRpdlwiLCBbXG4gICAgICAgICAgICBcIm5hdi1saXN0LXRpdGxlLWNvbnRhaW5lclwiLFxuICAgICAgICBdKTtcblxuICAgICAgICBjb25zdCBsaXN0VGl0bGVJY29uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibmF2LWxpc3QtdGl0bGUtaWNvblwiXSxcbiAgICAgICAgICAgIGxpc3RUaXRsZUNvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGxpc3RUaXRsZURpdiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1saXN0LXRpdGxlXCJdLFxuICAgICAgICAgICAgbGlzdFRpdGxlQ29udGFpbmVyLFxuICAgICAgICAgICAgbGlzdC5uYW1lXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIGxpc3RUaXRsZUNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvL0NoZWNrcyB0aGF0IGEgcHJvamVjdCBieSB0aGF0IG5hbWUgZXhpc3RzIGFuZCB0aGVuIHNlbmRzIHRoYXQgcHJvamVjdCBuYW1lIG9uIHRvIGJlIGFkZGVkIHRvIHRoZSB3b3Jrc3BhY2VcbiAgICBmaWxsRGlzcGxheVBhbmVDb250ZW50KHByb2plY3ROYW1lID0gXCJkZWZhdWx0XCIpIHtcbiAgICAgICAgaWYgKCF0aGlzLnVzZXIuY29udGFpbnNQcm9qZWN0KHByb2plY3ROYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcImRpdlwiLCBbXG4gICAgICAgICAgICBcInByb2plY3QtY29udGFpbmVyXCIsXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlUHJvamVjdFZpc3VhbChcbiAgICAgICAgICAgIHRoaXMudXNlci5nZXRQcm9qZWN0KHByb2plY3ROYW1lKSxcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXJcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuICAgIH1cblxuICAgIGNyZWF0ZVByb2plY3RWaXN1YWwocHJvamVjdCwgcHJvamVjdENvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJwcm9qZWN0LXRpdGxlLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0SW5mb0NvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcInByb2plY3QtaW5mby1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGVDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcInByb2plY3QtdGl0bGVcIl0sXG4gICAgICAgICAgICBwcm9qZWN0SW5mb0NvbnRhaW5lcixcbiAgICAgICAgICAgIHByb2plY3QubmFtZVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCJdLFxuICAgICAgICAgICAgcHJvamVjdEluZm9Db250YWluZXIsXG4gICAgICAgICAgICBwcm9qZWN0LmRlc2NyaXB0aW9uXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlTmV3TGlzdEJ1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5ldy1wcm9qZWN0LWxpc3QtYnV0dG9uXCJdLFxuICAgICAgICAgICAgcHJvamVjdFRpdGxlQ29udGFpbmVyXG4gICAgICAgICk7XG4gICAgICAgIGNyZWF0ZU5ld0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0xpc3QgPSB0aGlzLmNyZWF0ZUxpc3QocHJvamVjdCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2plY3RWaXN1YWwocHJvamVjdCk7XG4gICAgICAgICAgICB0aGlzLnJlbG9hZE5hdkNvbnRlbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY2xvc2VQcm9qZWN0QnV0dG9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiY2xvc2UtcHJvamVjdC1idXR0b25cIl0sXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGVDb250YWluZXJcbiAgICAgICAgKTtcbiAgICAgICAgY2xvc2VQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyRGlzcGxheUNvbnRlbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIml0ZW0tcmVtb3ZlLWJ1dHRvblwiXSxcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIsXG4gICAgICAgICAgICBcImRlbGV0ZSBwcm9qZWN0XCJcbiAgICAgICAgKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5wYXJlbnRVc2VyLnJlbW92ZVByb2plY3QocHJvamVjdC5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMubG9hZFBhZ2VDb250ZW50KCk7XG4gICAgICAgICAgICAvL1RPRE86IHRoaXMgYWxzbyBuZWVkcyB0byB1cGRhdGUgdGhlIGpzb24gZmlsZSBvZiByZWNvcmQgdG8gc2F2ZSBwYWdlIHN0YXRlIG9uIHJlbG9hZFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFwcGVuZEFsbExpc3RzVG9Qcm9qZWN0KHByb2plY3RDb250YWluZXIsIHByb2plY3QubGlzdHMpO1xuXG4gICAgICAgIHByb2plY3Quc2V0Q29udGFpbmVyTm9kZShwcm9qZWN0Q29udGFpbmVyKTtcblxuICAgICAgICAvKiB0aGlzLmNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7ICovXG4gICAgfVxuXG4gICAgYXBwZW5kQWxsTGlzdHNUb1Byb2plY3QocHJvamVjdENvbnRhaW5lciwgbGlzdHMpIHtcbiAgICAgICAgbGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcHBlbmRMaXN0KGxpc3QsIHByb2plY3RDb250YWluZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhcHBlbmRMaXN0KGxpc3QsIHByb2plY3RDb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgbGlzdENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFwiZGl2XCIsIFtcbiAgICAgICAgICAgIFwibGlzdC1jb250YWluZXJcIixcbiAgICAgICAgXSk7XG4gICAgICAgIHRoaXMuY3JlYXRlTGlzdFZpc3VhbChsaXN0LCBsaXN0Q29udGFpbmVyKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0VmlzdWFsKGxpc3QsIGxpc3RDb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgbGlzdFRpdGxlQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibGlzdC10aXRsZS1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBsaXN0Q29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgbGlzdEluZm9Db250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJsaXN0LWluZm8tY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgbGlzdFRpdGxlQ29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgbGlzdE5hbWUgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJsaXN0LXRpdGxlXCJdLFxuICAgICAgICAgICAgbGlzdEluZm9Db250YWluZXIsXG4gICAgICAgICAgICBsaXN0Lm5hbWVcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBsaXN0RGVzY3JpcHRpb24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJsaXN0LWRlc2NyaXB0aW9uXCJdLFxuICAgICAgICAgICAgbGlzdEluZm9Db250YWluZXIsXG4gICAgICAgICAgICBsaXN0LmRlc2NyaXB0aW9uXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgYWRkTmV3VGFza0J1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5ldy1saXN0LWl0ZW0tYnV0dG9uXCJdLFxuICAgICAgICAgICAgbGlzdFRpdGxlQ29udGFpbmVyXG4gICAgICAgICk7XG4gICAgICAgIGFkZE5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB0aGlzLmNyZWF0ZVRhc2sobGlzdCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3RWaXN1YWwobGlzdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlbW92ZUxpc3RCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJpdGVtLXJlbW92ZS1idXR0b25cIl0sXG4gICAgICAgICAgICBsaXN0Q29udGFpbmVyLFxuICAgICAgICAgICAgXCJkZWxldGUgbGlzdFwiXG4gICAgICAgICk7XG4gICAgICAgIHJlbW92ZUxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGxpc3QucGFyZW50UHJvamVjdC5yZW1vdmVMaXN0KGxpc3QubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2plY3RWaXN1YWwobGlzdC5wYXJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgIHRoaXMucmVsb2FkTmF2Q29udGVudCgpO1xuXG4gICAgICAgICAgICAvL1RPRE86IHRoaXMgYWxzbyBuZWVkcyB0byB1cGRhdGUgdGhlIGpzb24gZmlsZSBvZiByZWNvcmQgdG8gc2F2ZSBwYWdlIHN0YXRlIG9uIHJlbG9hZFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFwcGVuZFRhc2tMaXN0KGxpc3RDb250YWluZXIsIGxpc3QpO1xuICAgICAgICBsaXN0LnNldENvbnRhaW5lck5vZGUobGlzdENvbnRhaW5lcik7XG4gICAgICAgIC8vRG9lcyB0aGlzIChuZWVkIHRvIHJldHVybj8pIGxpc3QgY29udGFpbmVyXG4gICAgICAgIHJldHVybiBsaXN0Q29udGFpbmVyO1xuICAgIH1cblxuICAgIGFwcGVuZFRhc2tMaXN0KGxpc3RDb250YWluZXIsIGxpc3QpIHtcbiAgICAgICAgbGlzdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZFRhc2sodGFzaywgbGlzdENvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFwcGVuZFRhc2sodGFzaywgbGlzdENvbnRhaW5lcikge1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXCJkaXZcIiwgW1xuICAgICAgICAgICAgXCJpdGVtLWNvbnRhaW5lclwiLFxuICAgICAgICBdKTtcbiAgICAgICAgdGhpcy5jcmVhdGVUYXNrVmlzdWFsKHRhc2ssIHRhc2tDb250YWluZXIpO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIH1cblxuICAgIGNyZWF0ZVRhc2tWaXN1YWwodGFzaywgdGFza0NvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIml0ZW0tY2hlY2tib3gtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgdGFza0NvbnRhaW5lclxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgICAgW1wiaXRlbS1jaGVja2JveFwiXSxcbiAgICAgICAgICAgIGNoZWNrYm94Q29udGFpbmVyXG4gICAgICAgICk7XG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG5cbiAgICAgICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIml0ZW0taW5mby1jb250YWluZXJcIl0sXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiaXRlbS10aXRsZVwiXSxcbiAgICAgICAgICAgIGluZm9Db250YWluZXIsXG4gICAgICAgICAgICB0YXNrLm5hbWVcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJpdGVtLWRlc2NyaXB0aW9uXCJdLFxuICAgICAgICAgICAgaW5mb0NvbnRhaW5lcixcbiAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb25cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBpdGVtRHVlRGF0ZSA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIml0ZW0tZHVlLWRhdGVcIl0sXG4gICAgICAgICAgICBpbmZvQ29udGFpbmVyLFxuICAgICAgICAgICAgdGFzay5kdWVEYXRlXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlVGFza0J1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIml0ZW0tcmVtb3ZlLWJ1dHRvblwiXSxcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIsXG4gICAgICAgICAgICBcInJlbW92ZSBpdGVtXCJcbiAgICAgICAgKTtcbiAgICAgICAgcmVtb3ZlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGFzay5wYXJlbnRMaXN0LnJlbW92ZVRhc2sodGFzay5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGlzdFZpc3VhbCh0YXNrLnBhcmVudExpc3QpO1xuICAgICAgICAgICAgLy9UT0RPOiB0aGlzIGFsc28gbmVlZHMgdG8gdXBkYXRlIHRoZSBqc29uIGZpbGUgb2YgcmVjb3JkIHRvIHNhdmUgcGFnZSBzdGF0ZSBvbiByZWxvYWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZWRpdFRhc2tCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJpdGVtLWVkaXQtYnV0dG9uXCJdLFxuICAgICAgICAgICAgdGFza0NvbnRhaW5lcixcbiAgICAgICAgICAgIFwiZWRpdCBpdGVtXCJcbiAgICAgICAgKTtcbiAgICAgICAgZWRpdFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWRpdFRhc2sodGFzayk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRhc2tWaXN1YWwodGFzayk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRhc2suc2V0Q29udGFpbmVyTm9kZSh0YXNrQ29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIHRhc2tDb250YWluZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlVGFzayhwYXJlbnRMaXN0KSB7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gcHJvbXB0KFwiSXRlbSBuYW1lP1wiKTtcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gcHJvbXB0KFwiSXRlbSBkZXNjcmlwdGlvbj9cIik7XG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gcHJvbXB0KFwiSXRlbSBkdWUgZGF0ZT9cIik7XG5cbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFxuICAgICAgICAgICAgdGFza05hbWUsXG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0YXNrRHVlRGF0ZSxcbiAgICAgICAgICAgIHBhcmVudExpc3RcbiAgICAgICAgKTtcblxuICAgICAgICBwYXJlbnRMaXN0LmFkZFRhc2sobmV3VGFzayk7XG4gICAgfVxuXG4gICAgZWRpdFRhc2sodGFzaykge1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IHByb21wdChcIk5ldyB0YXNrIG5hbWU/XCIsIGAke3Rhc2submFtZX1gKTtcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gcHJvbXB0KFxuICAgICAgICAgICAgXCJOZXcgdGFzayBkZXNjcmlwdGlvbj9cIixcbiAgICAgICAgICAgIGAke3Rhc2suZGVzY3JpcHRpb259YFxuICAgICAgICApO1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHByb21wdChcIk5ldyB0YXNrIGR1ZSBkYXRlP1wiLCBgJHt0YXNrLmR1ZURhdGV9YCk7XG5cbiAgICAgICAgdGFzay5zZXROYW1lKHRhc2tOYW1lKTtcbiAgICAgICAgdGFzay5zZXREYXRlKHRhc2tEdWVEYXRlKTtcbiAgICAgICAgdGFzay5zZXREZXNjcmlwdGlvbih0YXNrRGVzY3JpcHRpb24pO1xuICAgIH1cblxuICAgIHVwZGF0ZVRhc2tWaXN1YWwodGFzaykge1xuICAgICAgICB0aGlzLmNsZWFyVGFza1Zpc3VhbCh0YXNrLmNvbnRhaW5lck5vZGUpO1xuICAgICAgICB0aGlzLmNyZWF0ZVRhc2tWaXN1YWwodGFzaywgdGFzay5jb250YWluZXJOb2RlKTtcbiAgICB9XG5cbiAgICBjbGVhclRhc2tWaXN1YWwodGFza1Zpc3VhbCkge1xuICAgICAgICB0YXNrVmlzdWFsLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIH1cblxuICAgIGNyZWF0ZUxpc3QocGFyZW50UHJvamVjdCkge1xuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IHByb21wdChcIkxpc3QgbmFtZT9cIik7XG4gICAgICAgIGNvbnN0IGxpc3REZXNjcmlwdGlvbiA9IHByb21wdChcIkxpc3QgZGVzY3JpcHRpb24/XCIpO1xuICAgICAgICBjb25zdCBuZXdMaXN0ID0gbmV3IExpc3QobGlzdE5hbWUsIGxpc3REZXNjcmlwdGlvbiwgW10sIHBhcmVudFByb2plY3QpO1xuXG4gICAgICAgIHBhcmVudFByb2plY3QuYWRkTGlzdChuZXdMaXN0KTtcbiAgICB9XG5cbiAgICBlZGl0TGlzdChsaXN0KSB7XG4gICAgICAgIGNvbnN0IGxpc3ROYW1lID0gcHJvbXB0KFwiTGlzdCBuYW1lP1wiKTtcbiAgICAgICAgY29uc3QgbGlzdERlc2NyaXB0aW9uID0gcHJvbXB0KFwiTGlzdCBkZXNjcmlwdGlvbj9cIik7XG5cbiAgICAgICAgbGlzdC5zZXROYW1lID0gbGlzdE5hbWU7XG4gICAgICAgIGxpc3Quc2V0RGVzY3JpcHRpb24gPSBsaXN0RGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgdXBkYXRlTGlzdFZpc3VhbChsaXN0KSB7XG4gICAgICAgIHRoaXMuY2xlYXJMaXN0VmlzdWFsKGxpc3QuY29udGFpbmVyTm9kZSk7XG4gICAgICAgIHRoaXMuY3JlYXRlTGlzdFZpc3VhbChsaXN0LCBsaXN0LmNvbnRhaW5lck5vZGUpO1xuICAgIH1cblxuICAgIGNsZWFyTGlzdFZpc3VhbChsaXN0VmlzdWFsKSB7XG4gICAgICAgIGxpc3RWaXN1YWwucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgfVxuXG4gICAgZWRpdFByb2plY3QocHJvamVjdCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb21wdChcIlByb2plY3QgbmFtZT9cIik7XG4gICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IHByb21wdChcIlByb2plY3QgZGVzY3JpcHRpb24/XCIpO1xuXG4gICAgICAgIHByb2plY3QubmFtZSA9IHByb2plY3ROYW1lO1xuICAgICAgICBwcm9qZWN0LmRlc2NyaXB0aW9uID0gcHJvamVjdERlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHVwZGF0ZVByb2plY3RWaXN1YWwocHJvamVjdCkge1xuICAgICAgICB0aGlzLmNsZWFyUHJvamVjdFZpc3VhbChwcm9qZWN0LmNvbnRhaW5lck5vZGUpO1xuICAgICAgICB0aGlzLmNyZWF0ZVByb2plY3RWaXN1YWwocHJvamVjdCwgcHJvamVjdC5jb250YWluZXJOb2RlKTtcbiAgICB9XG5cbiAgICBjbGVhclByb2plY3RWaXN1YWwocHJvamVjdFZpc3VhbCkge1xuICAgICAgICBwcm9qZWN0VmlzdWFsLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ld1Byb2plY3QoKSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gcHJvbXB0KFwiUHJvamVjdCBuYW1lP1wiKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdERlc2NyaXB0aW9uID0gcHJvbXB0KFwiUHJvamVjdCBkZXNjcmlwdGlvbj9cIik7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RMaXN0cyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcbiAgICAgICAgICAgIG5ld1Byb2plY3ROYW1lLFxuICAgICAgICAgICAgbmV3UHJvamVjdERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgbmV3UHJvamVjdExpc3RzLFxuICAgICAgICAgICAgdGhpcy51c2VyXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy51c2VyLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgcHJvamVjdHMgPSBbXSwgcGFyZW50Q29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgICAgICAgdGhpcy5wYXJlbnRDb250YWluZXIgPSBwYXJlbnRDb250YWluZXI7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBzZXROYW1lKG5ld05hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gICAgfVxuXG4gICAgc2V0UHJvamVjdHMocHJvamVjdHMpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuICAgIH1cblxuICAgIGNvbnRhaW5zUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5zb21lKFxuICAgICAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFkZFByb2plY3QobmV3UHJvamVjdCkge1xuICAgICAgICBpZiAoIXRoaXMuY29udGFpbnNQcm9qZWN0KG5ld1Byb2plY3QuZ2V0TmFtZSgpKSkge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoXG4gICAgICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgIT09IHByb2plY3ROYW1lXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKFxuICAgICAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZVxuICAgICAgICApO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBVSSBmcm9tIFwiLi9tb2R1bGVzL1VJLmpzXCI7XG5cbmNvbnN0IG5ld1BhZ2UgPSBuZXcgVUkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==