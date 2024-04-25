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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
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

    box-sizing: border-box;
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
    padding: 0;

    height: 100vh;
}

.nav-container {
    grid-column: 1 / 2;

    display: grid;
    /* grid-template-rows: 3rem repeat(auto-fit, minmax(10px, 0.5fr)); */
    grid-template-rows: 1fr 9fr;

    gap: 2rem;
    background-color: var(--project-container-color);
    padding: 4rem 1rem;

    position: sticky;
    top: 0;
    margin: 0;
    height: 100vh;

    border: 1px solid blue;
}

.nav-title-container {
    grid-row: 1 / 2;

    display: flex;
    align-items: center;
    gap: 1rem;

    font-size: var(--nav-title-font-size);
}

.nav-title {
}

.new-project-button {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    height: var(--nav-icon-dimension);
    aspect-ratio: 1 / 1;
}

.nav-content-container {
    grid-row: 2 / 3;

    /* display: grid;
    gap: 1rem;
    grid-template-rows: repeat(auto-fill, minmax(100px, auto));
    align-items: start; */

    display: flex;
    flex-direction: column;

    font-size: var(--nav-info-font-size);
    /* overflow: scroll; */

    border: solid red 1px;
}

.nav-project-container {
    display: grid;
    grid-template-columns: 1fr 4fr;

    /* height: minmax(50px, 100px); */

    border: solid pink 1px;
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
    /* height: 200px; */

    border: 1px solid yellow;
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

    /* height: 100vh; */
    height: 100%;
    /* box-shadow: var(--box-shadow-values) var(--drop-shadow-color); */
}

.project-container {
    display: grid;
    /* grid-template-rows: 4rem repeat(auto-fill, 1fr); */
    grid-template-rows: 6rem 1fr;

    /* background-color: rgba(var(--mute-color), 1); */
    padding: 2rem;
    margin: 1rem;
    gap: 0.5rem;

    height: 100%;

    /* overflow: scroll; */
    /* border-radius: 0.5rem; */
    background-color: var(--project-container-color);
    box-shadow: var(--box-shadow-values)
        rgba(var(--drop-shadow-color-color), 0.5);

    border: solid black 1px;
}

.project-title-container {
    grid-row: 1 / 2;

    display: grid;
    grid-template-columns: 5fr 1fr;
    font-size: var(--project-info-font-size);
    border: solid black 1px;
}

.project-info-container {
    border: solid red 1px;
}

.project-control-container {
    border: solid blue 1px;
}

.project-title {
    font-size: var(--project-title-font-size);
}

.project-description {
}

.new-project-list-button {
    /* background-image: url(./img/icons/plus.svg);
    height: var(--nav-icon-dimension);
    aspect-ratio: 1 / 1; */
}

.close-project-button {
    /* background-image: url(./img/icons/close-box-outline.svg);
    height: var(--nav-icon-dimension);
    aspect-ratio: 1 / 1; */
}

.project-card-container {
    grid-row: 2 / 3;

    /* display: grid;
    grid-auto-rows: auto; */

    height: 100%;

    display: flex;
    flex-direction: column;

    overflow: scroll;
    border: solid green 1px;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap\");\n\n:root {\n    --mute-color: rgb(255, 127, 80, 0.1);\n    --secondary-color: 253, 107, 62;\n    --highlight-color: 147, 252, 217;\n    --dark-shadow-color: 0, 0, 0;\n    --box-shadow-values: 0.5rem 0.8rem 0.05rem;\n    --minor-box-shadow-values: 0.3rem 0.3rem 0.05rem;\n    --general-font: \"Montserrat\", \"Roboto Condensed\", sans-serif;\n    --title-font: \"Roboto Slab\", serif;\n    --base-font-color: rgb(0, 0, 0, 0.8);\n    --base-font-size: 1vh;\n    --title-font-size: 4rem;\n    --header-font-size: 2rem;\n    --content-font-size: 1rem;\n    --base-line-height: 1.25;\n    --content-line-height: 2;\n\n    font-size: var(--base-font-size);\n\n    --item-title-font-size: 1.5rem;\n    --item-info-font-size: 1rem;\n    --list-title-font-size: 2rem;\n    --list-info-font-size: 1rem;\n    --project-title-font-size: 2rem;\n    --project-info-font-size: 1.5rem;\n    --nav-title-font-size: 1.5rem;\n    --nav-info-font-size: 1.25rem;\n\n    --nav-icon-dimension: 2rem;\n\n    --dark-green: rgba(4, 42, 43, 1);\n    --moonstone: rgba(94, 177, 191, 1);\n    --light-cyan: rgba(205, 237, 246, 1);\n    --orange-crayola: rgba(239, 123, 69, 1);\n    --chili-red: rgba(216, 71, 39, 1);\n\n    --lapis-lazuli: rgba(35, 87, 137, 1);\n    --imperial-red: rgba(251, 54, 64, 0.1);\n    --aquamarine: rgba(22, 244, 208, 1);\n    --school-bus-yellow: rgba(241, 211, 2, 1);\n    --black: rgba(2, 1, 0, 1);\n\n    --nav-background-color: var(--imperial-red);\n    --content-container-color: rgb(242, 242, 242);\n    --project-container-color: rgb(255, 255, 255);\n\n    --box-shadow-values: -0.5rem 0.8rem 0.5rem;\n    --minor-box-shadow-values: -0.3rem 0.3rem 0.3rem;\n    --drop-shadow-color: rgb(0, 0, 0, 0.4);\n\n    box-sizing: border-box;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: minmax(min(10rem, 100%), 2fr) minmax(\n            min(10rem, 100%),\n            5fr\n        );\n\n    font-family: var(--general-font);\n    font-size: var(--general-font-size);\n    margin: 0;\n    padding: 0;\n\n    height: 100vh;\n}\n\n.nav-container {\n    grid-column: 1 / 2;\n\n    display: grid;\n    /* grid-template-rows: 3rem repeat(auto-fit, minmax(10px, 0.5fr)); */\n    grid-template-rows: 1fr 9fr;\n\n    gap: 2rem;\n    background-color: var(--project-container-color);\n    padding: 4rem 1rem;\n\n    position: sticky;\n    top: 0;\n    margin: 0;\n    height: 100vh;\n\n    border: 1px solid blue;\n}\n\n.nav-title-container {\n    grid-row: 1 / 2;\n\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n\n    font-size: var(--nav-title-font-size);\n}\n\n.nav-title {\n}\n\n.new-project-button {\n    background-image: url(./img/icons/plus.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.nav-content-container {\n    grid-row: 2 / 3;\n\n    /* display: grid;\n    gap: 1rem;\n    grid-template-rows: repeat(auto-fill, minmax(100px, auto));\n    align-items: start; */\n\n    display: flex;\n    flex-direction: column;\n\n    font-size: var(--nav-info-font-size);\n    /* overflow: scroll; */\n\n    border: solid red 1px;\n}\n\n.nav-project-container {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n\n    /* height: minmax(50px, 100px); */\n\n    border: solid pink 1px;\n}\n\n.nav-project-title-container {\n    grid-column: 1 / 3;\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.nav-project-title-icon {\n    background-image: url(./img/icons/dots-horizontal-circle-outline.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.nav-project-title {\n    font-weight: 500;\n}\n\n.nav-project-content-container {\n    grid-column: 2 / 3;\n    /* height: 200px; */\n\n    border: 1px solid yellow;\n}\n\n.nav-list-title-container {\n    display: flex;\n    align-items: center;\n    gap: 0.2rem;\n}\n\n.nav-list-title-icon {\n    background-image: url(./img/icons/menu-right-outline.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.nav-list-title {\n}\n\n.content-container {\n    grid-column: 2 / 3;\n\n    display: grid;\n    gap: 1rem;\n    background-color: var(--content-container-color);\n    /* border: solid 1px red; */\n\n    /* height: 100vh; */\n    height: 100%;\n    /* box-shadow: var(--box-shadow-values) var(--drop-shadow-color); */\n}\n\n.project-container {\n    display: grid;\n    /* grid-template-rows: 4rem repeat(auto-fill, 1fr); */\n    grid-template-rows: 6rem 1fr;\n\n    /* background-color: rgba(var(--mute-color), 1); */\n    padding: 2rem;\n    margin: 1rem;\n    gap: 0.5rem;\n\n    height: 100%;\n\n    /* overflow: scroll; */\n    /* border-radius: 0.5rem; */\n    background-color: var(--project-container-color);\n    box-shadow: var(--box-shadow-values)\n        rgba(var(--drop-shadow-color-color), 0.5);\n\n    border: solid black 1px;\n}\n\n.project-title-container {\n    grid-row: 1 / 2;\n\n    display: grid;\n    grid-template-columns: 5fr 1fr;\n    font-size: var(--project-info-font-size);\n    border: solid black 1px;\n}\n\n.project-info-container {\n    border: solid red 1px;\n}\n\n.project-control-container {\n    border: solid blue 1px;\n}\n\n.project-title {\n    font-size: var(--project-title-font-size);\n}\n\n.project-description {\n}\n\n.new-project-list-button {\n    /* background-image: url(./img/icons/plus.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1; */\n}\n\n.close-project-button {\n    /* background-image: url(./img/icons/close-box-outline.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1; */\n}\n\n.project-card-container {\n    grid-row: 2 / 3;\n\n    /* display: grid;\n    grid-auto-rows: auto; */\n\n    height: 100%;\n\n    display: flex;\n    flex-direction: column;\n\n    overflow: scroll;\n    border: solid green 1px;\n}\n\n.list-container {\n    display: grid;\n    gap: 0.5rem;\n\n    /* background-color: rgba(var(--secondary-color), 0.5); */\n    padding: 1rem;\n    box-shadow: var(--minor-box-shadow-values) var(--drop-shadow-color);\n    /* border-radius: 0.5rem; */\n}\n\n.list-title-container {\n    display: grid;\n    grid-template-columns: 5fr 1fr;\n    font-size: var(--list-info-font-size);\n}\n\n.list-info-container {\n}\n\n.list-title {\n    font-size: var(--list-title-font-size);\n}\n\n.list-description {\n}\n\n.new-list-item-button {\n    background-image: url(./img/icons/plus.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.item-container {\n    display: grid;\n    grid-template-columns: 1fr 6fr 1fr;\n    /* background-color: rgba(var(--secondary-color), 0.5); */\n}\n\n.item-checkbox-container {\n    grid-column: 1 / 2;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.item-checkbox {\n}\n\n/* input[type=\"checkbox\"] {\n    appearance: none;\n    display: grid;\n    place-content: center;\n    border: solid 1px black;\n    height: 1em;\n    width: 1em;\n\n    background: #0a0a0a;\n    border-color: #fff;\n}\n\ninput[type=\"checkbox\"]::before {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    transform: scale(0);\n    transition: 120ms transform ease-in-out;\n    box-shadow: inset 1em 1em var(--form-control-color);\n} */\n\n.item-info-container {\n    grid-column: 2 / 3;\n    font-size: var(--item-info-font-size);\n}\n\n.item-title {\n    font-size: var(--item-title-font-size);\n}\n\n.item-description {\n}\n\n.item-due-date {\n}\n\n.item-remove-button {\n}\n"],"sourceRoot":""}]);
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
        this.parentObject = parentProject;
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

    /* parseToJSON() {
        //Take task list and turn it into an array of tasks in JSON format
        const JSONTaskArray = [];
        this.tasks.forEach((task) => {
            JSONTaskArray.push(task.parseToJSON());
        });

        const listJSON = `{"name": "${this.name}", "tasks": ${JSONTaskArray}}`;
        return listJSON;

        //Eventually return this list object as a JSON object
    } */
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
        this.parentObject = parentUser;
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

    /* parseToJSON() {
        const JSONListArray = [];
        this.lists.forEach((list) => {
            JSONListArray.push(list.parseToJSON());
        });

        const projectJSON = `{"name": "${this.name}", "lists": ${JSONListArray}}`;
        return projectJSON;
    } */
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
    //TODO: rewire the constructor to take a localstorage object
    //If localStorage is blank, load from userStorage file?
    constructor() {
        /* const jsonText = JSON.parse(JSON.stringify(storageFile)); */
        const jsonText = JSON.parse(this.getFromLocalStorage());
        console.log(jsonText);
        console.log(typeof jsonText);
        //console.log("blingoooo!");
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
            const taskChecked = task.checked;

            const newTask = new _Task_js__WEBPACK_IMPORTED_MODULE_1__["default"](
                taskName,
                taskDueDate,
                taskDescription,
                parentList,
                taskChecked
            );
            tasks.push(newTask);
        });
        return tasks;
    }

    //TODO: method to store js user object as a json object via stringify (?)
    /* sendToLocalStorage(userToStore) {
        const allOfTheJSON = this.parseAllToJSON(userToStore);

        localStorage.setItem("userStorage", allOfTheJSON);
    } */

    //Should return JSON object retrieved from localStorage?
    getFromLocalStorage() {
        const storedUsers = localStorage.getItem("userStorage");
        /* if (storedUsers !== null) {
            return storageFile;
        } */
        if (!localStorage.getItem("userStorage")) {
            console.log("blipo!");
            return _userStorage_json__WEBPACK_IMPORTED_MODULE_0__;
        }
        /* return JSON.parse(storedUsers); */
        return storedUsers;
    }

    /* parseAllToJSON(userToStore) {
        const JSONUserArray = [];
        JSONUserArray.push(userToStore.parseToJSON());
        console.log(JSONUserArray);
        return JSONUserArray;
    } */

    simpleSendToStorage(userToStore) {
        const thatsNotAnArrayThisIsAnArray = [];
        thatsNotAnArrayThisIsAnArray.push(userToStore);
        const toSendToStorage = JSON.stringify(
            thatsNotAnArrayThisIsAnArray,
            function replacer(key, value) {
                return key === "parentObject" ? undefined : value;
            }
        );
        /* const arrayToStorage = [];
        arrayToStorage.push(toSendToStorage); */

        console.log(toSendToStorage);
        console.log(JSON.parse(toSendToStorage));
        localStorage.setItem("userStorage", toSendToStorage);
        /* localStorage.setItem("userStorage", arrayToStorage); */
    }

    //TODO: Should there be a method to nuke localstorage of all saved data?
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
        parentList,
        checked = false
    ) {
        this.name = name;
        this.dueDate = dueDate;
        this.description = description;
        this.parentObject = parentList;
        this.checked = checked;
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

    /* parseToJSON() {
        const taskJSON = `{"name": "${this.name}", "dueDate": "${this.dueDate}",
"description": "${this.description}"}`;
        return taskJSON;
    } */
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
        /* const newStorage = new Storage(); */
        this.newStorage = new _Storage_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.userList = this.newStorage.getUsers();

        this.user = this.userList[0];
        //console.log(this.user);
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

        const saveButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["nav-save-users-button"],
            navTitleContainer,
            "save all"
        );
        saveButton.addEventListener("click", () => {
            console.log("blamo!");
            this.newStorage.simpleSendToStorage(this.user);
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

        const projectControlContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["project-control-container"],
            projectTitleContainer
        );

        const projectCardContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["project-card-container"],
            projectContainer
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
            projectControlContainer,
            "new list"
        );
        createNewListButton.addEventListener("click", () => {
            const newList = this.createList(project);
            this.updateProjectVisual(project);
            this.reloadNavContent();
        });

        const closeProjectButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["close-project-button"],
            projectControlContainer,
            "close project"
        );
        closeProjectButton.addEventListener("click", () => {
            this.clearDisplayContent();
        });

        const deleteProjectButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["item-remove-button"],
            projectControlContainer,
            "delete project"
        );
        deleteProjectButton.addEventListener("click", () => {
            project.parentObject.removeProject(project.name);
            this.loadPageContent();
            //TODO: this also needs to update the json file of record to save page state on reload
        });

        this.appendAllListsToProject(projectCardContainer, project.lists);

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
            list.parentObject.removeList(list.name);
            this.updateProjectVisual(list.parentObject);
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

    //Checkbox needs to save state between loads
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
        console.log(`Task name? ${task.name} Task checked? ${task.checked}`);
        if (task.checked == true) {
            checkbox.checked = true;
        }
        checkbox.addEventListener("click", () => {
            if (task.checked) {
                task.checked = false;
            } else {
                task.checked = true;
            }
        });

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

        const taskControlsContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["task-controls-container"],
            taskContainer
        );

        const removeTaskButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["item-remove-button"],
            taskControlsContainer,
            "remove item"
        );
        removeTaskButton.addEventListener("click", () => {
            task.parentObject.removeTask(task.name);
            this.updateListVisual(task.parentObject);
            //TODO: this also needs to update the json file of record to save page state on reload
        });

        const editTaskButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["item-edit-button"],
            taskControlsContainer,
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
        this.parentObject = parentContainer;
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

    /* parseToJSON() {
        const JSONProjectArray = [];
        this.projects.forEach((project) => {
            JSONProjectArray.push(project.parseToJSON());
        });

        const userJSON = `{"name": "${this.name}", "projects": ${JSONProjectArray}}`;
        let tempString = "" + userJSON;

        return tempString;
    } */
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxXQUFXLFVBQVUsT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGNBQWMsV0FBVyxZQUFZLGNBQWMsYUFBYSxXQUFXLFVBQVUsV0FBVyxZQUFZLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssV0FBVyxPQUFPLFFBQVEsV0FBVyxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FB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QUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDWTs7QUFFakMsb0JBQW9CLHNEQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vc3JjL21vZHVsZXMvR2VuZXJhdGVQYWdlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vc3JjL21vZHVsZXMvTGlzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vc3JjL21vZHVsZXMvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vc3JjL21vZHVsZXMvVGFzay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9pY29ucy9wbHVzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL2ljb25zL2RvdHMtaG9yaXpvbnRhbC1jaXJjbGUtb3V0bGluZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9pY29ucy9tZW51LXJpZ2h0LW91dGxpbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0K0FsdGVybmF0ZXM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZmFtaWx5PVJvYm90bytNb25vOml0YWwsd2dodEAwLDEwMC4uNzAwOzEsMTAwLi43MDAmZmFtaWx5PVJvYm90bytTbGFiOndnaHRAMTAwLi45MDAmZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZmFtaWx5PVVidW50dTppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1tdXRlLWNvbG9yOiByZ2IoMjU1LCAxMjcsIDgwLCAwLjEpO1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAyNTMsIDEwNywgNjI7XG4gICAgLS1oaWdobGlnaHQtY29sb3I6IDE0NywgMjUyLCAyMTc7XG4gICAgLS1kYXJrLXNoYWRvdy1jb2xvcjogMCwgMCwgMDtcbiAgICAtLWJveC1zaGFkb3ctdmFsdWVzOiAwLjVyZW0gMC44cmVtIDAuMDVyZW07XG4gICAgLS1taW5vci1ib3gtc2hhZG93LXZhbHVlczogMC4zcmVtIDAuM3JlbSAwLjA1cmVtO1xuICAgIC0tZ2VuZXJhbC1mb250OiBcIk1vbnRzZXJyYXRcIiwgXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gICAgLS10aXRsZS1mb250OiBcIlJvYm90byBTbGFiXCIsIHNlcmlmO1xuICAgIC0tYmFzZS1mb250LWNvbG9yOiByZ2IoMCwgMCwgMCwgMC44KTtcbiAgICAtLWJhc2UtZm9udC1zaXplOiAxdmg7XG4gICAgLS10aXRsZS1mb250LXNpemU6IDRyZW07XG4gICAgLS1oZWFkZXItZm9udC1zaXplOiAycmVtO1xuICAgIC0tY29udGVudC1mb250LXNpemU6IDFyZW07XG4gICAgLS1iYXNlLWxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgIC0tY29udGVudC1saW5lLWhlaWdodDogMjtcblxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYmFzZS1mb250LXNpemUpO1xuXG4gICAgLS1pdGVtLXRpdGxlLWZvbnQtc2l6ZTogMS41cmVtO1xuICAgIC0taXRlbS1pbmZvLWZvbnQtc2l6ZTogMXJlbTtcbiAgICAtLWxpc3QtdGl0bGUtZm9udC1zaXplOiAycmVtO1xuICAgIC0tbGlzdC1pbmZvLWZvbnQtc2l6ZTogMXJlbTtcbiAgICAtLXByb2plY3QtdGl0bGUtZm9udC1zaXplOiAycmVtO1xuICAgIC0tcHJvamVjdC1pbmZvLWZvbnQtc2l6ZTogMS41cmVtO1xuICAgIC0tbmF2LXRpdGxlLWZvbnQtc2l6ZTogMS41cmVtO1xuICAgIC0tbmF2LWluZm8tZm9udC1zaXplOiAxLjI1cmVtO1xuXG4gICAgLS1uYXYtaWNvbi1kaW1lbnNpb246IDJyZW07XG5cbiAgICAtLWRhcmstZ3JlZW46IHJnYmEoNCwgNDIsIDQzLCAxKTtcbiAgICAtLW1vb25zdG9uZTogcmdiYSg5NCwgMTc3LCAxOTEsIDEpO1xuICAgIC0tbGlnaHQtY3lhbjogcmdiYSgyMDUsIDIzNywgMjQ2LCAxKTtcbiAgICAtLW9yYW5nZS1jcmF5b2xhOiByZ2JhKDIzOSwgMTIzLCA2OSwgMSk7XG4gICAgLS1jaGlsaS1yZWQ6IHJnYmEoMjE2LCA3MSwgMzksIDEpO1xuXG4gICAgLS1sYXBpcy1sYXp1bGk6IHJnYmEoMzUsIDg3LCAxMzcsIDEpO1xuICAgIC0taW1wZXJpYWwtcmVkOiByZ2JhKDI1MSwgNTQsIDY0LCAwLjEpO1xuICAgIC0tYXF1YW1hcmluZTogcmdiYSgyMiwgMjQ0LCAyMDgsIDEpO1xuICAgIC0tc2Nob29sLWJ1cy15ZWxsb3c6IHJnYmEoMjQxLCAyMTEsIDIsIDEpO1xuICAgIC0tYmxhY2s6IHJnYmEoMiwgMSwgMCwgMSk7XG5cbiAgICAtLW5hdi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbXBlcmlhbC1yZWQpO1xuICAgIC0tY29udGVudC1jb250YWluZXItY29sb3I6IHJnYigyNDIsIDI0MiwgMjQyKTtcbiAgICAtLXByb2plY3QtY29udGFpbmVyLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cbiAgICAtLWJveC1zaGFkb3ctdmFsdWVzOiAtMC41cmVtIDAuOHJlbSAwLjVyZW07XG4gICAgLS1taW5vci1ib3gtc2hhZG93LXZhbHVlczogLTAuM3JlbSAwLjNyZW0gMC4zcmVtO1xuICAgIC0tZHJvcC1zaGFkb3ctY29sb3I6IHJnYigwLCAwLCAwLCAwLjQpO1xuXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChtaW4oMTByZW0sIDEwMCUpLCAyZnIpIG1pbm1heChcbiAgICAgICAgICAgIG1pbigxMHJlbSwgMTAwJSksXG4gICAgICAgICAgICA1ZnJcbiAgICAgICAgKTtcblxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1nZW5lcmFsLWZvbnQpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZ2VuZXJhbC1mb250LXNpemUpO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLm5hdi1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwcHgsIDAuNWZyKSk7ICovXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyO1xuXG4gICAgZ2FwOiAycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3QtY29udGFpbmVyLWNvbG9yKTtcbiAgICBwYWRkaW5nOiA0cmVtIDFyZW07XG5cbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG59XG5cbi5uYXYtdGl0bGUtY29udGFpbmVyIHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuXG4gICAgZm9udC1zaXplOiB2YXIoLS1uYXYtdGl0bGUtZm9udC1zaXplKTtcbn1cblxuLm5hdi10aXRsZSB7XG59XG5cbi5uZXctcHJvamVjdC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbn1cblxuLm5hdi1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuXG4gICAgLyogZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDFyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTAwcHgsIGF1dG8pKTtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7ICovXG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBmb250LXNpemU6IHZhcigtLW5hdi1pbmZvLWZvbnQtc2l6ZSk7XG4gICAgLyogb3ZlcmZsb3c6IHNjcm9sbDsgKi9cblxuICAgIGJvcmRlcjogc29saWQgcmVkIDFweDtcbn1cblxuLm5hdi1wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG5cbiAgICAvKiBoZWlnaHQ6IG1pbm1heCg1MHB4LCAxMDBweCk7ICovXG5cbiAgICBib3JkZXI6IHNvbGlkIHBpbmsgMXB4O1xufVxuXG4ubmF2LXByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xufVxuXG4ubmF2LXByb2plY3QtdGl0bGUtaWNvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xufVxuXG4ubmF2LXByb2plY3QtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5uYXYtcHJvamVjdC1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIC8qIGhlaWdodDogMjAwcHg7ICovXG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7XG59XG5cbi5uYXYtbGlzdC10aXRsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuMnJlbTtcbn1cblxuLm5hdi1saXN0LXRpdGxlLWljb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbn1cblxuLm5hdi1saXN0LXRpdGxlIHtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNvbnRhaW5lci1jb2xvcik7XG4gICAgLyogYm9yZGVyOiBzb2xpZCAxcHggcmVkOyAqL1xuXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKTsgKi9cbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSByZXBlYXQoYXV0by1maWxsLCAxZnIpOyAqL1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNnJlbSAxZnI7XG5cbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW11dGUtY29sb3IpLCAxKTsgKi9cbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBnYXA6IDAuNXJlbTtcblxuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC8qIG92ZXJmbG93OiBzY3JvbGw7ICovXG4gICAgLyogYm9yZGVyLXJhZGl1czogMC41cmVtOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3QtY29udGFpbmVyLWNvbG9yKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LXZhbHVlcylcbiAgICAgICAgcmdiYSh2YXIoLS1kcm9wLXNoYWRvdy1jb2xvci1jb2xvciksIDAuNSk7XG5cbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcbn1cblxuLnByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmcjtcbiAgICBmb250LXNpemU6IHZhcigtLXByb2plY3QtaW5mby1mb250LXNpemUpO1xuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xufVxuXG4ucHJvamVjdC1pbmZvLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBzb2xpZCByZWQgMXB4O1xufVxuXG4ucHJvamVjdC1jb250cm9sLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBzb2xpZCBibHVlIDFweDtcbn1cblxuLnByb2plY3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tcHJvamVjdC10aXRsZS1mb250LXNpemUpO1xufVxuXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XG59XG5cbi5uZXctcHJvamVjdC1saXN0LWJ1dHRvbiB7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2ljb25zL3BsdXMuc3ZnKTtcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTsgKi9cbn1cblxuLmNsb3NlLXByb2plY3QtYnV0dG9uIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvY2xvc2UtYm94LW91dGxpbmUuc3ZnKTtcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTsgKi9cbn1cblxuLnByb2plY3QtY2FyZC1jb250YWluZXIge1xuICAgIGdyaWQtcm93OiAyIC8gMztcblxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87ICovXG5cbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGJvcmRlcjogc29saWQgZ3JlZW4gMXB4O1xufVxuXG4ubGlzdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAwLjVyZW07XG5cbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNlY29uZGFyeS1jb2xvciksIDAuNSk7ICovXG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1taW5vci1ib3gtc2hhZG93LXZhbHVlcykgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpO1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgKi9cbn1cblxuLmxpc3QtdGl0bGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmcjtcbiAgICBmb250LXNpemU6IHZhcigtLWxpc3QtaW5mby1mb250LXNpemUpO1xufVxuXG4ubGlzdC1pbmZvLWNvbnRhaW5lciB7XG59XG5cbi5saXN0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IHZhcigtLWxpc3QtdGl0bGUtZm9udC1zaXplKTtcbn1cblxuLmxpc3QtZGVzY3JpcHRpb24ge1xufVxuXG4ubmV3LWxpc3QtaXRlbS1idXR0b24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbn1cblxuLml0ZW0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciAxZnI7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zZWNvbmRhcnktY29sb3IpLCAwLjUpOyAqL1xufVxuXG4uaXRlbS1jaGVja2JveC1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLml0ZW0tY2hlY2tib3gge1xufVxuXG4vKiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgd2lkdGg6IDFlbTtcblxuICAgIGJhY2tncm91bmQ6ICMwYTBhMGE7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMC42NWVtO1xuICAgIGhlaWdodDogMC42NWVtO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tZm9ybS1jb250cm9sLWNvbG9yKTtcbn0gKi9cblxuLml0ZW0taW5mby1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBmb250LXNpemU6IHZhcigtLWl0ZW0taW5mby1mb250LXNpemUpO1xufVxuXG4uaXRlbS10aXRsZSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pdGVtLXRpdGxlLWZvbnQtc2l6ZSk7XG59XG5cbi5pdGVtLWRlc2NyaXB0aW9uIHtcbn1cblxuLml0ZW0tZHVlLWRhdGUge1xufVxuXG4uaXRlbS1yZW1vdmUtYnV0dG9uIHtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLG9DQUFvQztJQUNwQywrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtJQUM1QiwwQ0FBMEM7SUFDMUMsZ0RBQWdEO0lBQ2hELDREQUE0RDtJQUM1RCxrQ0FBa0M7SUFDbEMsb0NBQW9DO0lBQ3BDLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsd0JBQXdCOztJQUV4QixnQ0FBZ0M7O0lBRWhDLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qiw2QkFBNkI7O0lBRTdCLDBCQUEwQjs7SUFFMUIsZ0NBQWdDO0lBQ2hDLGtDQUFrQztJQUNsQyxvQ0FBb0M7SUFDcEMsdUNBQXVDO0lBQ3ZDLGlDQUFpQzs7SUFFakMsb0NBQW9DO0lBQ3BDLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMseUNBQXlDO0lBQ3pDLHlCQUF5Qjs7SUFFekIsMkNBQTJDO0lBQzNDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7O0lBRTdDLDBDQUEwQztJQUMxQyxnREFBZ0Q7SUFDaEQsc0NBQXNDOztJQUV0QyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7OztTQUdLOztJQUVMLGdDQUFnQztJQUNoQyxtQ0FBbUM7SUFDbkMsU0FBUztJQUNULFVBQVU7O0lBRVYsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjs7SUFFbEIsYUFBYTtJQUNiLG9FQUFvRTtJQUNwRSwyQkFBMkI7O0lBRTNCLFNBQVM7SUFDVCxnREFBZ0Q7SUFDaEQsa0JBQWtCOztJQUVsQixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxhQUFhOztJQUViLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7O0lBRWYsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTOztJQUVULHFDQUFxQztBQUN6Qzs7QUFFQTtBQUNBOztBQUVBO0lBQ0kseURBQTJDO0lBQzNDLGlDQUFpQztJQUNqQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlOztJQUVmOzs7eUJBR3FCOztJQUVyQixhQUFhO0lBQ2Isc0JBQXNCOztJQUV0QixvQ0FBb0M7SUFDcEMsc0JBQXNCOztJQUV0QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCOztJQUU5QixpQ0FBaUM7O0lBRWpDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlEQUFxRTtJQUNyRSxpQ0FBaUM7SUFDakMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjs7SUFFbkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5REFBeUQ7SUFDekQsaUNBQWlDO0lBQ2pDLG1CQUFtQjtBQUN2Qjs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksa0JBQWtCOztJQUVsQixhQUFhO0lBQ2IsU0FBUztJQUNULGdEQUFnRDtJQUNoRCwyQkFBMkI7O0lBRTNCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUVBQW1FO0FBQ3ZFOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFEQUFxRDtJQUNyRCw0QkFBNEI7O0lBRTVCLGtEQUFrRDtJQUNsRCxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7O0lBRVgsWUFBWTs7SUFFWixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGdEQUFnRDtJQUNoRDtpREFDNkM7O0lBRTdDLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7O0lBRWYsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix3Q0FBd0M7SUFDeEMsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0FBQ0E7O0FBRUE7SUFDSTs7MEJBRXNCO0FBQzFCOztBQUVBO0lBQ0k7OzBCQUVzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7O0lBRWY7MkJBQ3VCOztJQUV2QixZQUFZOztJQUVaLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVzs7SUFFWCx5REFBeUQ7SUFDekQsYUFBYTtJQUNiLG1FQUFtRTtJQUNuRSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHFDQUFxQztBQUN6Qzs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0FBQ0E7O0FBRUE7SUFDSSx5REFBMkM7SUFDM0MsaUNBQWlDO0lBQ2pDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMseURBQXlEO0FBQzdEOztBQUVBO0lBQ0ksa0JBQWtCOztJQUVsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHOztBQUVIO0lBQ0ksa0JBQWtCO0lBQ2xCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0K0FsdGVybmF0ZXM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZmFtaWx5PVJvYm90bytNb25vOml0YWwsd2dodEAwLDEwMC4uNzAwOzEsMTAwLi43MDAmZmFtaWx5PVJvYm90bytTbGFiOndnaHRAMTAwLi45MDAmZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZmFtaWx5PVVidW50dTppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgICAtLW11dGUtY29sb3I6IHJnYigyNTUsIDEyNywgODAsIDAuMSk7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAyNTMsIDEwNywgNjI7XFxuICAgIC0taGlnaGxpZ2h0LWNvbG9yOiAxNDcsIDI1MiwgMjE3O1xcbiAgICAtLWRhcmstc2hhZG93LWNvbG9yOiAwLCAwLCAwO1xcbiAgICAtLWJveC1zaGFkb3ctdmFsdWVzOiAwLjVyZW0gMC44cmVtIDAuMDVyZW07XFxuICAgIC0tbWlub3ItYm94LXNoYWRvdy12YWx1ZXM6IDAuM3JlbSAwLjNyZW0gMC4wNXJlbTtcXG4gICAgLS1nZW5lcmFsLWZvbnQ6IFxcXCJNb250c2VycmF0XFxcIiwgXFxcIlJvYm90byBDb25kZW5zZWRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAtLXRpdGxlLWZvbnQ6IFxcXCJSb2JvdG8gU2xhYlxcXCIsIHNlcmlmO1xcbiAgICAtLWJhc2UtZm9udC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuOCk7XFxuICAgIC0tYmFzZS1mb250LXNpemU6IDF2aDtcXG4gICAgLS10aXRsZS1mb250LXNpemU6IDRyZW07XFxuICAgIC0taGVhZGVyLWZvbnQtc2l6ZTogMnJlbTtcXG4gICAgLS1jb250ZW50LWZvbnQtc2l6ZTogMXJlbTtcXG4gICAgLS1iYXNlLWxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgICAtLWNvbnRlbnQtbGluZS1oZWlnaHQ6IDI7XFxuXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYmFzZS1mb250LXNpemUpO1xcblxcbiAgICAtLWl0ZW0tdGl0bGUtZm9udC1zaXplOiAxLjVyZW07XFxuICAgIC0taXRlbS1pbmZvLWZvbnQtc2l6ZTogMXJlbTtcXG4gICAgLS1saXN0LXRpdGxlLWZvbnQtc2l6ZTogMnJlbTtcXG4gICAgLS1saXN0LWluZm8tZm9udC1zaXplOiAxcmVtO1xcbiAgICAtLXByb2plY3QtdGl0bGUtZm9udC1zaXplOiAycmVtO1xcbiAgICAtLXByb2plY3QtaW5mby1mb250LXNpemU6IDEuNXJlbTtcXG4gICAgLS1uYXYtdGl0bGUtZm9udC1zaXplOiAxLjVyZW07XFxuICAgIC0tbmF2LWluZm8tZm9udC1zaXplOiAxLjI1cmVtO1xcblxcbiAgICAtLW5hdi1pY29uLWRpbWVuc2lvbjogMnJlbTtcXG5cXG4gICAgLS1kYXJrLWdyZWVuOiByZ2JhKDQsIDQyLCA0MywgMSk7XFxuICAgIC0tbW9vbnN0b25lOiByZ2JhKDk0LCAxNzcsIDE5MSwgMSk7XFxuICAgIC0tbGlnaHQtY3lhbjogcmdiYSgyMDUsIDIzNywgMjQ2LCAxKTtcXG4gICAgLS1vcmFuZ2UtY3JheW9sYTogcmdiYSgyMzksIDEyMywgNjksIDEpO1xcbiAgICAtLWNoaWxpLXJlZDogcmdiYSgyMTYsIDcxLCAzOSwgMSk7XFxuXFxuICAgIC0tbGFwaXMtbGF6dWxpOiByZ2JhKDM1LCA4NywgMTM3LCAxKTtcXG4gICAgLS1pbXBlcmlhbC1yZWQ6IHJnYmEoMjUxLCA1NCwgNjQsIDAuMSk7XFxuICAgIC0tYXF1YW1hcmluZTogcmdiYSgyMiwgMjQ0LCAyMDgsIDEpO1xcbiAgICAtLXNjaG9vbC1idXMteWVsbG93OiByZ2JhKDI0MSwgMjExLCAyLCAxKTtcXG4gICAgLS1ibGFjazogcmdiYSgyLCAxLCAwLCAxKTtcXG5cXG4gICAgLS1uYXYtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW1wZXJpYWwtcmVkKTtcXG4gICAgLS1jb250ZW50LWNvbnRhaW5lci1jb2xvcjogcmdiKDI0MiwgMjQyLCAyNDIpO1xcbiAgICAtLXByb2plY3QtY29udGFpbmVyLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuXFxuICAgIC0tYm94LXNoYWRvdy12YWx1ZXM6IC0wLjVyZW0gMC44cmVtIDAuNXJlbTtcXG4gICAgLS1taW5vci1ib3gtc2hhZG93LXZhbHVlczogLTAuM3JlbSAwLjNyZW0gMC4zcmVtO1xcbiAgICAtLWRyb3Atc2hhZG93LWNvbG9yOiByZ2IoMCwgMCwgMCwgMC40KTtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KG1pbigxMHJlbSwgMTAwJSksIDJmcikgbWlubWF4KFxcbiAgICAgICAgICAgIG1pbigxMHJlbSwgMTAwJSksXFxuICAgICAgICAgICAgNWZyXFxuICAgICAgICApO1xcblxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZ2VuZXJhbC1mb250KTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1nZW5lcmFsLWZvbnQtc2l6ZSk7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG5cXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLm5hdi1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMHB4LCAwLjVmcikpOyAqL1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnI7XFxuXFxuICAgIGdhcDogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdC1jb250YWluZXItY29sb3IpO1xcbiAgICBwYWRkaW5nOiA0cmVtIDFyZW07XFxuXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbn1cXG5cXG4ubmF2LXRpdGxlLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcblxcbiAgICBmb250LXNpemU6IHZhcigtLW5hdi10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4ubmF2LXRpdGxlIHtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9pY29ucy9wbHVzLnN2Zyk7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLm5hdi1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG5cXG4gICAgLyogZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxMDBweCwgYXV0bykpO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7ICovXFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tbmF2LWluZm8tZm9udC1zaXplKTtcXG4gICAgLyogb3ZlcmZsb3c6IHNjcm9sbDsgKi9cXG5cXG4gICAgYm9yZGVyOiBzb2xpZCByZWQgMXB4O1xcbn1cXG5cXG4ubmF2LXByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcblxcbiAgICAvKiBoZWlnaHQ6IG1pbm1heCg1MHB4LCAxMDBweCk7ICovXFxuXFxuICAgIGJvcmRlcjogc29saWQgcGluayAxcHg7XFxufVxcblxcbi5uYXYtcHJvamVjdC10aXRsZS1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ubmF2LXByb2plY3QtdGl0bGUtaWNvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9pY29ucy9kb3RzLWhvcml6b250YWwtY2lyY2xlLW91dGxpbmUuc3ZnKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaWNvbi1kaW1lbnNpb24pO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4ubmF2LXByb2plY3QtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubmF2LXByb2plY3QtY29udGVudC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIC8qIGhlaWdodDogMjAwcHg7ICovXFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvdztcXG59XFxuXFxuLm5hdi1saXN0LXRpdGxlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC4ycmVtO1xcbn1cXG5cXG4ubmF2LWxpc3QtdGl0bGUtaWNvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9pY29ucy9tZW51LXJpZ2h0LW91dGxpbmUuc3ZnKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaWNvbi1kaW1lbnNpb24pO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4ubmF2LWxpc3QtdGl0bGUge1xcbn1cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1jb250YWluZXItY29sb3IpO1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDFweCByZWQ7ICovXFxuXFxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKTsgKi9cXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIHJlcGVhdChhdXRvLWZpbGwsIDFmcik7ICovXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNnJlbSAxZnI7XFxuXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tbXV0ZS1jb2xvciksIDEpOyAqL1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGdhcDogMC41cmVtO1xcblxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIC8qIG92ZXJmbG93OiBzY3JvbGw7ICovXFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdC1jb250YWluZXItY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LXZhbHVlcylcXG4gICAgICAgIHJnYmEodmFyKC0tZHJvcC1zaGFkb3ctY29sb3ItY29sb3IpLCAwLjUpO1xcblxcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnI7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcHJvamVjdC1pbmZvLWZvbnQtc2l6ZSk7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogc29saWQgcmVkIDFweDtcXG59XFxuXFxuLnByb2plY3QtY29udHJvbC1jb250YWluZXIge1xcbiAgICBib3JkZXI6IHNvbGlkIGJsdWUgMXB4O1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcHJvamVjdC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxufVxcblxcbi5uZXctcHJvamVjdC1saXN0LWJ1dHRvbiB7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9pY29ucy9wbHVzLnN2Zyk7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTsgKi9cXG59XFxuXFxuLmNsb3NlLXByb2plY3QtYnV0dG9uIHtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2ljb25zL2Nsb3NlLWJveC1vdXRsaW5lLnN2Zyk7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTsgKi9cXG59XFxuXFxuLnByb2plY3QtY2FyZC1jb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuXFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvOyAqL1xcblxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIGJvcmRlcjogc29saWQgZ3JlZW4gMXB4O1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDAuNXJlbTtcXG5cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zZWNvbmRhcnktY29sb3IpLCAwLjUpOyAqL1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1taW5vci1ib3gtc2hhZG93LXZhbHVlcykgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpO1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiAwLjVyZW07ICovXFxufVxcblxcbi5saXN0LXRpdGxlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmcjtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1saXN0LWluZm8tZm9udC1zaXplKTtcXG59XFxuXFxuLmxpc3QtaW5mby1jb250YWluZXIge1xcbn1cXG5cXG4ubGlzdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tbGlzdC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4ubGlzdC1kZXNjcmlwdGlvbiB7XFxufVxcblxcbi5uZXctbGlzdC1pdGVtLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9pY29ucy9wbHVzLnN2Zyk7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLml0ZW0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyIDFmcjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zZWNvbmRhcnktY29sb3IpLCAwLjUpOyAqL1xcbn1cXG5cXG4uaXRlbS1jaGVja2JveC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaXRlbS1jaGVja2JveCB7XFxufVxcblxcbi8qIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gICAgd2lkdGg6IDFlbTtcXG5cXG4gICAgYmFja2dyb3VuZDogIzBhMGEwYTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDAuNjVlbTtcXG4gICAgaGVpZ2h0OiAwLjY1ZW07XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1mb3JtLWNvbnRyb2wtY29sb3IpO1xcbn0gKi9cXG5cXG4uaXRlbS1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZm9udC1zaXplOiB2YXIoLS1pdGVtLWluZm8tZm9udC1zaXplKTtcXG59XFxuXFxuLml0ZW0tdGl0bGUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWl0ZW0tdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLml0ZW0tZGVzY3JpcHRpb24ge1xcbn1cXG5cXG4uaXRlbS1kdWUtZGF0ZSB7XFxufVxcblxcbi5pdGVtLXJlbW92ZS1idXR0b24ge1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgIGVsZW1lbnRUeXBlLFxuICAgIGVsZW1lbnRDbGFzc2VzID0ge30sXG4gICAgcGFyZW50RWxlbWVudCA9IG51bGwsXG4gICAgZWxlbWVudFRleHQgPSBudWxsXG4pIHtcbiAgICBpZiAoZWxlbWVudFR5cGUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcblxuICAgIGlmIChlbGVtZW50Q2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGVsZW1lbnRDbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICAgICAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50VGV4dCAhPSBudWxsKSB7XG4gICAgICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50VGV4dDtcbiAgICB9XG5cbiAgICBpZiAocGFyZW50RWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhck5vZGVDb250ZW50KHRoaXNOb2RlKSB7XG4gICAgd2hpbGUgKHRoaXNOb2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGhpc05vZGUucmVtb3ZlQ2hpbGQodGhpc05vZGUubGFzdENoaWxkKTtcbiAgICB9XG59XG4iLCIvL2ltcG9ydCAqIGFzIFRhc2sgZnJvbSBcIi4vVGFzay5qc1wiO1xuLy9pbXBvcnQgKiBhcyBHZW5lcmF0ZUVsZW1lbnQgZnJvbSBcIi4vR2VuZXJhdGVQYWdlRWxlbWVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24gPSBcIk5vIGRlc2NyaXB0aW9uIHNldFwiLFxuICAgICAgICB0YXNrcyA9IFtdLFxuICAgICAgICBwYXJlbnRQcm9qZWN0XG4gICAgKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICAgICAgICB0aGlzLnBhcmVudE9iamVjdCA9IHBhcmVudFByb2plY3Q7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBzZXROYW1lKG5ld05hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICB9XG5cbiAgICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGdldFRhc2tzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgICB9XG5cbiAgICBzZXRUYXNrcyh0YXNrc0xpc3QpIHtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRhc2tzTGlzdDtcbiAgICB9XG5cbiAgICBnZXRUYXNrKHRhc2tOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSB0YXNrTmFtZSk7XG4gICAgfVxuXG4gICAgY29udGFpbnNUYXNrKHRhc2tOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLnNvbWUoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09IHRhc2tOYW1lKTtcbiAgICB9XG5cbiAgICBhZGRUYXNrKG5ld1Rhc2spIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zVGFzayhuZXdUYXNrLmdldE5hbWUoKSkpIHtcbiAgICAgICAgICAgIHRoaXMudGFza3MucHVzaChuZXdUYXNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZVRhc2sodGFza05hbWUpIHtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSAhPT0gdGFza05hbWUpO1xuICAgIH1cblxuICAgIHNldENvbnRhaW5lck5vZGUoY29udGFpbmVyTm9kZSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lck5vZGUgPSBjb250YWluZXJOb2RlO1xuICAgIH1cblxuICAgIGdldENvbnRhaW5lck5vZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lck5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lck5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgLy9UT0RPOiBTaG91bGQgdGhlcmUgYmUgYSByZXR1cm4gdmFsdWUgaWYgdGhlcmUgaXNuJ3QgYSBub2RlIGFzc2lnbmVkIGFscmVhZHk/XG4gICAgICAgIC8vU2hvdWxkIHRoaXMgcHJvcGVydHkganVzdCBiZSBpbml0aWFsaXplZCBhcyBhIGJsYW5rIHNvbWVob3cgd2hlbiB0aGlzIG9iamVjdCBpcyBjcmVhdGVkP1xuICAgIH1cblxuICAgIC8qIHBhcnNlVG9KU09OKCkge1xuICAgICAgICAvL1Rha2UgdGFzayBsaXN0IGFuZCB0dXJuIGl0IGludG8gYW4gYXJyYXkgb2YgdGFza3MgaW4gSlNPTiBmb3JtYXRcbiAgICAgICAgY29uc3QgSlNPTlRhc2tBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIEpTT05UYXNrQXJyYXkucHVzaCh0YXNrLnBhcnNlVG9KU09OKCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBsaXN0SlNPTiA9IGB7XCJuYW1lXCI6IFwiJHt0aGlzLm5hbWV9XCIsIFwidGFza3NcIjogJHtKU09OVGFza0FycmF5fX1gO1xuICAgICAgICByZXR1cm4gbGlzdEpTT047XG5cbiAgICAgICAgLy9FdmVudHVhbGx5IHJldHVybiB0aGlzIGxpc3Qgb2JqZWN0IGFzIGEgSlNPTiBvYmplY3RcbiAgICB9ICovXG59XG4iLCIvL2ltcG9ydCAqIGFzIExpc3QgZnJvbSBcIi4vTGlzdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICAvL1RPRE86IFNob3VsZCB0aGUgcHJvamVjdCBoYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBVSSBlbGVtZW50IGNvbnRhaW5pbmcgaXQncyBpbmZvcm1hdGlvbiB0byBtYWtlIHVwZGF0aW5nIHNhaWQgVUkgZWxlbWVudCBlYXNpZXI/XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gXCJObyBkZXNjcmlwdGlvbiBzZXRcIixcbiAgICAgICAgbGlzdHMgPSBbXSxcbiAgICAgICAgcGFyZW50VXNlclxuICAgICkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMubGlzdHMgPSBsaXN0cztcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QgPSBwYXJlbnRVc2VyO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXRUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdHM7XG4gICAgfVxuXG4gICAgc2V0TGlzdHMobGlzdHMpIHtcbiAgICAgICAgdGhpcy5saXN0cyA9IGxpc3RzO1xuICAgIH1cblxuICAgIGNvbnRhaW5zTGlzdChsaXN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0cy5zb21lKChsaXN0KSA9PiBsaXN0LmdldE5hbWUoKSA9PSBsaXN0TmFtZSk7XG4gICAgfVxuXG4gICAgYWRkTGlzdChuZXdMaXN0KSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluc0xpc3QobmV3TGlzdC5nZXROYW1lKCkpKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RzLnB1c2gobmV3TGlzdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVMaXN0KGxpc3ROYW1lKSB7XG4gICAgICAgIHRoaXMubGlzdHMgPSB0aGlzLmxpc3RzLmZpbHRlcigobGlzdCkgPT4gbGlzdC5nZXROYW1lKCkgIT09IGxpc3ROYW1lKTtcbiAgICB9XG5cbiAgICBzZXRDb250YWluZXJOb2RlKGNvbnRhaW5lck5vZGUpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJOb2RlID0gY29udGFpbmVyTm9kZTtcbiAgICB9XG5cbiAgICBnZXRDb250YWluZXJOb2RlKCkge1xuICAgICAgICBpZiAodGhpcy5jb250YWluZXJOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXJOb2RlO1xuICAgICAgICB9XG4gICAgICAgIC8vVE9ETzogU2hvdWxkIHRoZXJlIGJlIGEgcmV0dXJuIHZhbHVlIGlmIHRoZXJlIGlzbid0IGEgbm9kZSBhc3NpZ25lZCBhbHJlYWR5P1xuICAgICAgICAvL1Nob3VsZCB0aGlzIHByb3BlcnR5IGp1c3QgYmUgaW5pdGlhbGl6ZWQgYXMgYSBibGFuayBzb21laG93IHdoZW4gdGhpcyBvYmplY3QgaXMgY3JlYXRlZD9cbiAgICB9XG5cbiAgICAvKiBwYXJzZVRvSlNPTigpIHtcbiAgICAgICAgY29uc3QgSlNPTkxpc3RBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLmxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgICAgIEpTT05MaXN0QXJyYXkucHVzaChsaXN0LnBhcnNlVG9KU09OKCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0SlNPTiA9IGB7XCJuYW1lXCI6IFwiJHt0aGlzLm5hbWV9XCIsIFwibGlzdHNcIjogJHtKU09OTGlzdEFycmF5fX1gO1xuICAgICAgICByZXR1cm4gcHJvamVjdEpTT047XG4gICAgfSAqL1xufVxuIiwiLy9pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyLmpzXCI7XG5pbXBvcnQgc3RvcmFnZUZpbGUgZnJvbSBcIi4vdXNlclN0b3JhZ2UuanNvblwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFzay5qc1wiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdC5qc1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdC5qc1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgICAvL1RPRE86IHJld2lyZSB0aGUgY29uc3RydWN0b3IgdG8gdGFrZSBhIGxvY2Fsc3RvcmFnZSBvYmplY3RcbiAgICAvL0lmIGxvY2FsU3RvcmFnZSBpcyBibGFuaywgbG9hZCBmcm9tIHVzZXJTdG9yYWdlIGZpbGU/XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8qIGNvbnN0IGpzb25UZXh0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdG9yYWdlRmlsZSkpOyAqL1xuICAgICAgICBjb25zdCBqc29uVGV4dCA9IEpTT04ucGFyc2UodGhpcy5nZXRGcm9tTG9jYWxTdG9yYWdlKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uVGV4dCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBqc29uVGV4dCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJibGluZ29vb28hXCIpO1xuICAgICAgICB0aGlzLnVzZXJMaXN0ID0gdGhpcy5wYXJzZVVzZXJzKGpzb25UZXh0KTtcbiAgICB9XG5cbiAgICBnZXRVc2VycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckxpc3Q7XG4gICAgfVxuXG4gICAgLy9UT0RPOiBEbyB3ZSBuZWVkIGEgdXNlciBjb250YWluZXIgb2JqZWN0IHRvIHRoZW4gYmUgYWJsZSB0byBjb21taXQgYmFjayBpbnRvIHRoZSBqc29uIGZpbGU/XG5cbiAgICBwYXJzZVVzZXJzKGpzb25UZXh0KSB7XG4gICAgICAgIGNvbnN0IHVzZXJzID0gW107XG5cbiAgICAgICAganNvblRleHQuZm9yRWFjaCgodXNlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNlck5hbWUgPSB1c2VyLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyID0gbmV3IFVzZXIodXNlck5hbWUsIFtdLCBqc29uVGV4dCk7XG4gICAgICAgICAgICBjb25zdCB1c2VyUHJvamVjdHMgPSB0aGlzLnBhcnNlUHJvamVjdHModXNlci5wcm9qZWN0cywgbmV3VXNlcik7XG4gICAgICAgICAgICBuZXdVc2VyLnNldFByb2plY3RzKHVzZXJQcm9qZWN0cyk7XG4gICAgICAgICAgICB1c2Vycy5wdXNoKG5ld1VzZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXNlcnM7XG4gICAgfVxuXG4gICAgLy9DcmVhdGUgcGFyZW50IHVzZXIgZmlyc3QgYW5kICp0aGVuKiBnZW5lcmF0ZSB0aGUgbGlzdCBvZiBwcm9qZWN0cyBvbmNlIHRoZSB1c2VyIG9iamVjdCBhbHJlYWR5IGV4aXN0cz9cblxuICAgIHBhcnNlUHJvamVjdHMoanNvblByb2plY3RzLCBwYXJlbnRVc2VyKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gW107XG4gICAgICAgIGpzb25Qcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3QubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IHByb2plY3QuZGVzY3JpcHRpb247XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgICAgIHBhcmVudFVzZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdHMgPSB0aGlzLnBhcnNlTGlzdHMocHJvamVjdC5saXN0cywgbmV3UHJvamVjdCk7XG4gICAgICAgICAgICBuZXdQcm9qZWN0LnNldExpc3RzKHByb2plY3RMaXN0cyk7XG4gICAgICAgICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzO1xuICAgIH1cblxuICAgIHBhcnNlTGlzdHMoanNvbkxpc3RzLCBwYXJlbnRQcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IGxpc3RzID0gW107XG4gICAgICAgIGpzb25MaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0TmFtZSA9IGxpc3QubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3REZXNjcmlwdGlvbiA9IGxpc3QuZGVzY3JpcHRpb247XG4gICAgICAgICAgICBjb25zdCBuZXdMaXN0ID0gbmV3IExpc3QoXG4gICAgICAgICAgICAgICAgbGlzdE5hbWUsXG4gICAgICAgICAgICAgICAgbGlzdERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgICAgIHBhcmVudFByb2plY3RcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBsaXN0VGFza3MgPSB0aGlzLnBhcnNlVGFza3MobGlzdC50YXNrcywgbmV3TGlzdCk7XG4gICAgICAgICAgICBuZXdMaXN0LnNldFRhc2tzKGxpc3RUYXNrcyk7XG4gICAgICAgICAgICBsaXN0cy5wdXNoKG5ld0xpc3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGxpc3RzO1xuICAgIH1cblxuICAgIHBhcnNlVGFza3MoanNvblRhc2tzLCBwYXJlbnRMaXN0KSB7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gW107XG4gICAgICAgIGpzb25UYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IHRhc2submFtZTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDaGVja2VkID0gdGFzay5jaGVja2VkO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soXG4gICAgICAgICAgICAgICAgdGFza05hbWUsXG4gICAgICAgICAgICAgICAgdGFza0R1ZURhdGUsXG4gICAgICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIHBhcmVudExpc3QsXG4gICAgICAgICAgICAgICAgdGFza0NoZWNrZWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRhc2tzO1xuICAgIH1cblxuICAgIC8vVE9ETzogbWV0aG9kIHRvIHN0b3JlIGpzIHVzZXIgb2JqZWN0IGFzIGEganNvbiBvYmplY3QgdmlhIHN0cmluZ2lmeSAoPylcbiAgICAvKiBzZW5kVG9Mb2NhbFN0b3JhZ2UodXNlclRvU3RvcmUpIHtcbiAgICAgICAgY29uc3QgYWxsT2ZUaGVKU09OID0gdGhpcy5wYXJzZUFsbFRvSlNPTih1c2VyVG9TdG9yZSk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyU3RvcmFnZVwiLCBhbGxPZlRoZUpTT04pO1xuICAgIH0gKi9cblxuICAgIC8vU2hvdWxkIHJldHVybiBKU09OIG9iamVjdCByZXRyaWV2ZWQgZnJvbSBsb2NhbFN0b3JhZ2U/XG4gICAgZ2V0RnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgY29uc3Qgc3RvcmVkVXNlcnMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJTdG9yYWdlXCIpO1xuICAgICAgICAvKiBpZiAoc3RvcmVkVXNlcnMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBzdG9yYWdlRmlsZTtcbiAgICAgICAgfSAqL1xuICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclN0b3JhZ2VcIikpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmxpcG8hXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2VGaWxlO1xuICAgICAgICB9XG4gICAgICAgIC8qIHJldHVybiBKU09OLnBhcnNlKHN0b3JlZFVzZXJzKTsgKi9cbiAgICAgICAgcmV0dXJuIHN0b3JlZFVzZXJzO1xuICAgIH1cblxuICAgIC8qIHBhcnNlQWxsVG9KU09OKHVzZXJUb1N0b3JlKSB7XG4gICAgICAgIGNvbnN0IEpTT05Vc2VyQXJyYXkgPSBbXTtcbiAgICAgICAgSlNPTlVzZXJBcnJheS5wdXNoKHVzZXJUb1N0b3JlLnBhcnNlVG9KU09OKCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OVXNlckFycmF5KTtcbiAgICAgICAgcmV0dXJuIEpTT05Vc2VyQXJyYXk7XG4gICAgfSAqL1xuXG4gICAgc2ltcGxlU2VuZFRvU3RvcmFnZSh1c2VyVG9TdG9yZSkge1xuICAgICAgICBjb25zdCB0aGF0c05vdEFuQXJyYXlUaGlzSXNBbkFycmF5ID0gW107XG4gICAgICAgIHRoYXRzTm90QW5BcnJheVRoaXNJc0FuQXJyYXkucHVzaCh1c2VyVG9TdG9yZSk7XG4gICAgICAgIGNvbnN0IHRvU2VuZFRvU3RvcmFnZSA9IEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAgdGhhdHNOb3RBbkFycmF5VGhpc0lzQW5BcnJheSxcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5ID09PSBcInBhcmVudE9iamVjdFwiID8gdW5kZWZpbmVkIDogdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIC8qIGNvbnN0IGFycmF5VG9TdG9yYWdlID0gW107XG4gICAgICAgIGFycmF5VG9TdG9yYWdlLnB1c2godG9TZW5kVG9TdG9yYWdlKTsgKi9cblxuICAgICAgICBjb25zb2xlLmxvZyh0b1NlbmRUb1N0b3JhZ2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHRvU2VuZFRvU3RvcmFnZSkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJTdG9yYWdlXCIsIHRvU2VuZFRvU3RvcmFnZSk7XG4gICAgICAgIC8qIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclN0b3JhZ2VcIiwgYXJyYXlUb1N0b3JhZ2UpOyAqL1xuICAgIH1cblxuICAgIC8vVE9ETzogU2hvdWxkIHRoZXJlIGJlIGEgbWV0aG9kIHRvIG51a2UgbG9jYWxzdG9yYWdlIG9mIGFsbCBzYXZlZCBkYXRhP1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGR1ZURhdGUgPSBcIk5vIGR1ZSBkYXRlIHNldC5cIixcbiAgICAgICAgZGVzY3JpcHRpb24gPSBcIk5vIGRlc2NyaXB0aW9uIHNldCB5ZXQuXCIsXG4gICAgICAgIHBhcmVudExpc3QsXG4gICAgICAgIGNoZWNrZWQgPSBmYWxzZVxuICAgICkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0ID0gcGFyZW50TGlzdDtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gY2hlY2tlZDtcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHNldE5hbWUobmV3TmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgIH1cblxuICAgIGdldERhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gICAgfVxuXG4gICAgc2V0RGF0ZShuZXdEYXRlKSB7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0RhdGU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXRDb250YWluZXJOb2RlKGNvbnRhaW5lck5vZGUpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJOb2RlID0gY29udGFpbmVyTm9kZTtcbiAgICB9XG5cbiAgICBnZXRDb250YWluZXJOb2RlKCkge1xuICAgICAgICBpZiAodGhpcy5jb250YWluZXJOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXJOb2RlO1xuICAgICAgICB9XG4gICAgICAgIC8vVE9ETzogU2hvdWxkIHRoZXJlIGJlIGEgcmV0dXJuIHZhbHVlIGlmIHRoZXJlIGlzbid0IGEgbm9kZSBhc3NpZ25lZCBhbHJlYWR5P1xuICAgICAgICAvL1Nob3VsZCB0aGlzIHByb3BlcnR5IGp1c3QgYmUgaW5pdGlhbGl6ZWQgYXMgYSBibGFuayBzb21laG93IHdoZW4gdGhpcyBvYmplY3QgaXMgY3JlYXRlZD9cbiAgICB9XG5cbiAgICAvKiBwYXJzZVRvSlNPTigpIHtcbiAgICAgICAgY29uc3QgdGFza0pTT04gPSBge1wibmFtZVwiOiBcIiR7dGhpcy5uYW1lfVwiLCBcImR1ZURhdGVcIjogXCIke3RoaXMuZHVlRGF0ZX1cIixcblwiZGVzY3JpcHRpb25cIjogXCIke3RoaXMuZGVzY3JpcHRpb259XCJ9YDtcbiAgICAgICAgcmV0dXJuIHRhc2tKU09OO1xuICAgIH0gKi9cbn1cbiIsImltcG9ydCAqIGFzIEdlbmVyYXRlRWxlbWVudCBmcm9tIFwiLi9HZW5lcmF0ZVBhZ2VFbGVtZW50LmpzXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9TdG9yYWdlLmpzXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrLmpzXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0LmpzXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0LmpzXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgICAvL0luaXRpYWxpemUgcGFnZSBib2R5LCBuYXYgY29udGFpbmVyLCBhbmQgY29udGVudCBjb250YWluZXIgcGFnZSBlbGVtZW50cyB0byBiZSBsYXRlciBwb3B1bGF0ZWRcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLyogY29uc3QgbmV3U3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7ICovXG4gICAgICAgIHRoaXMubmV3U3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XG4gICAgICAgIHRoaXMudXNlckxpc3QgPSB0aGlzLm5ld1N0b3JhZ2UuZ2V0VXNlcnMoKTtcblxuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLnVzZXJMaXN0WzBdO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMudXNlcik7XG4gICAgICAgIHRoaXMucGFnZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgdGhpcy5uYXZDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wYWdlQm9keS5hcHBlbmRDaGlsZCh0aGlzLm5hdkNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiY29udGVudC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnBhZ2VCb2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGVudENvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5sb2FkUGFnZUNvbnRlbnQodGhpcy51c2VyLnByb2plY3RzWzBdLm5hbWUpO1xuICAgIH1cblxuICAgIC8vQ2xlYXJzIGFuZCBwb3B1bGF0ZXMgbmF2IGFuZCBkaXNwbGF5IHBhbmVzXG4gICAgbG9hZFBhZ2VDb250ZW50KG5hbWVPZlByb2plY3RUb0xvYWQgPSBcIlwiKSB7XG4gICAgICAgIHRoaXMucmVsb2FkTmF2Q29udGVudCgpO1xuXG4gICAgICAgIHRoaXMuY2xlYXJEaXNwbGF5Q29udGVudCgpO1xuICAgICAgICAvL0luIGNhc2UgdGhlcmUgaXNuJ3QgYSBwcm9qZWN0IHRvIGxvYWQuLi4uXG4gICAgICAgIGlmIChuYW1lT2ZQcm9qZWN0VG9Mb2FkICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsbERpc3BsYXlQYW5lQ29udGVudChuYW1lT2ZQcm9qZWN0VG9Mb2FkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyTmF2Q29udGVudCgpIHtcbiAgICAgICAgdGhpcy5uYXZDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgfVxuXG4gICAgcmVsb2FkTmF2Q29udGVudCgpIHtcbiAgICAgICAgdGhpcy5jbGVhck5hdkNvbnRlbnQoKTtcbiAgICAgICAgdGhpcy5maWxsTmF2Q29udGVudCgpO1xuICAgIH1cblxuICAgIGNsZWFyRGlzcGxheUNvbnRlbnQoKSB7XG4gICAgICAgIHRoaXMuY29udGVudENvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICBmaWxsTmF2Q29udGVudCgpIHtcbiAgICAgICAgY29uc3QgbmF2VGl0bGVDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtdGl0bGUtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgdGhpcy5uYXZDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBuYXZUaXRsZSA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi10aXRsZVwiXSxcbiAgICAgICAgICAgIG5hdlRpdGxlQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJNeSBQcm9qZWN0c1wiXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgYWRkTmV3UHJvamVjdEJ1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5ldy1wcm9qZWN0LWJ1dHRvblwiXSxcbiAgICAgICAgICAgIG5hdlRpdGxlQ29udGFpbmVyXG4gICAgICAgICk7XG4gICAgICAgIGFkZE5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTmV3UHJvamVjdCgpO1xuICAgICAgICAgICAgdGhpcy5yZWxvYWROYXZDb250ZW50KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNhdmVCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtc2F2ZS11c2Vycy1idXR0b25cIl0sXG4gICAgICAgICAgICBuYXZUaXRsZUNvbnRhaW5lcixcbiAgICAgICAgICAgIFwic2F2ZSBhbGxcIlxuICAgICAgICApO1xuICAgICAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJsYW1vIVwiKTtcbiAgICAgICAgICAgIHRoaXMubmV3U3RvcmFnZS5zaW1wbGVTZW5kVG9TdG9yYWdlKHRoaXMudXNlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG5hdkNvbnRlbnRDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtY29udGVudC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICB0aGlzLm5hdkNvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMucG9wdWxhdGVOYXZDb250ZW50KG5hdkNvbnRlbnRDb250YWluZXIsIHRoaXMudXNlci5wcm9qZWN0cyk7XG5cbiAgICAgICAgdGhpcy5uYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2Q29udGVudENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcG9wdWxhdGVOYXZDb250ZW50KG5hdkNvbnRlbnRDb250YWluZXIsIHByb2plY3RzKSB7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIG5hdkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQcm9qZWN0TmF2VmlzdWFsKHByb2plY3QpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVQcm9qZWN0TmF2VmlzdWFsKHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFwiZGl2XCIsIFtcbiAgICAgICAgICAgIFwibmF2LXByb2plY3QtY29udGFpbmVyXCIsXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUNvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1wcm9qZWN0LXRpdGxlLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVJY29uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibmF2LXByb2plY3QtdGl0bGUtaWNvblwiXSxcbiAgICAgICAgICAgIHByb2plY3RUaXRsZUNvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1wcm9qZWN0LXRpdGxlXCJdLFxuICAgICAgICAgICAgcHJvamVjdFRpdGxlQ29udGFpbmVyLFxuICAgICAgICAgICAgcHJvamVjdC5uYW1lXG4gICAgICAgICk7XG4gICAgICAgIHByb2plY3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGVhckRpc3BsYXlDb250ZW50KCk7XG4gICAgICAgICAgICB0aGlzLmZpbGxEaXNwbGF5UGFuZUNvbnRlbnQoYCR7cHJvamVjdC5uYW1lfWApO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGVudENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1wcm9qZWN0LWNvbnRlbnQtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIHByb2plY3QubGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdENvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVMaXN0TmF2VmlzdWFsKGxpc3QpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyogcHJvamVjdC5zZXRDb250YWluZXJOb2RlKHByb2plY3RDb250YWluZXIpOyAqL1xuXG4gICAgICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xuICAgIH1cblxuICAgIGNyZWF0ZUxpc3ROYXZWaXN1YWwobGlzdCkge1xuICAgICAgICBjb25zdCBsaXN0VGl0bGVDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcImRpdlwiLCBbXG4gICAgICAgICAgICBcIm5hdi1saXN0LXRpdGxlLWNvbnRhaW5lclwiLFxuICAgICAgICBdKTtcblxuICAgICAgICBjb25zdCBsaXN0VGl0bGVJY29uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibmF2LWxpc3QtdGl0bGUtaWNvblwiXSxcbiAgICAgICAgICAgIGxpc3RUaXRsZUNvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGxpc3RUaXRsZURpdiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1saXN0LXRpdGxlXCJdLFxuICAgICAgICAgICAgbGlzdFRpdGxlQ29udGFpbmVyLFxuICAgICAgICAgICAgbGlzdC5uYW1lXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIGxpc3RUaXRsZUNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvL0NoZWNrcyB0aGF0IGEgcHJvamVjdCBieSB0aGF0IG5hbWUgZXhpc3RzIGFuZCB0aGVuIHNlbmRzIHRoYXQgcHJvamVjdCBuYW1lIG9uIHRvIGJlIGFkZGVkIHRvIHRoZSB3b3Jrc3BhY2VcbiAgICBmaWxsRGlzcGxheVBhbmVDb250ZW50KHByb2plY3ROYW1lID0gXCJkZWZhdWx0XCIpIHtcbiAgICAgICAgaWYgKCF0aGlzLnVzZXIuY29udGFpbnNQcm9qZWN0KHByb2plY3ROYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcImRpdlwiLCBbXG4gICAgICAgICAgICBcInByb2plY3QtY29udGFpbmVyXCIsXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlUHJvamVjdFZpc3VhbChcbiAgICAgICAgICAgIHRoaXMudXNlci5nZXRQcm9qZWN0KHByb2plY3ROYW1lKSxcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXJcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuICAgIH1cblxuICAgIGNyZWF0ZVByb2plY3RWaXN1YWwocHJvamVjdCwgcHJvamVjdENvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJwcm9qZWN0LXRpdGxlLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0SW5mb0NvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcInByb2plY3QtaW5mby1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGVDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udHJvbENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcInByb2plY3QtY29udHJvbC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGVDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcInByb2plY3QtY2FyZC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJwcm9qZWN0LXRpdGxlXCJdLFxuICAgICAgICAgICAgcHJvamVjdEluZm9Db250YWluZXIsXG4gICAgICAgICAgICBwcm9qZWN0Lm5hbWVcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCJdLFxuICAgICAgICAgICAgcHJvamVjdEluZm9Db250YWluZXIsXG4gICAgICAgICAgICBwcm9qZWN0LmRlc2NyaXB0aW9uXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlTmV3TGlzdEJ1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5ldy1wcm9qZWN0LWxpc3QtYnV0dG9uXCJdLFxuICAgICAgICAgICAgcHJvamVjdENvbnRyb2xDb250YWluZXIsXG4gICAgICAgICAgICBcIm5ldyBsaXN0XCJcbiAgICAgICAgKTtcbiAgICAgICAgY3JlYXRlTmV3TGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IHRoaXMuY3JlYXRlTGlzdChwcm9qZWN0KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvamVjdFZpc3VhbChwcm9qZWN0KTtcbiAgICAgICAgICAgIHRoaXMucmVsb2FkTmF2Q29udGVudCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjbG9zZVByb2plY3RCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJjbG9zZS1wcm9qZWN0LWJ1dHRvblwiXSxcbiAgICAgICAgICAgIHByb2plY3RDb250cm9sQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJjbG9zZSBwcm9qZWN0XCJcbiAgICAgICAgKTtcbiAgICAgICAgY2xvc2VQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyRGlzcGxheUNvbnRlbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIml0ZW0tcmVtb3ZlLWJ1dHRvblwiXSxcbiAgICAgICAgICAgIHByb2plY3RDb250cm9sQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJkZWxldGUgcHJvamVjdFwiXG4gICAgICAgICk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3QucGFyZW50T2JqZWN0LnJlbW92ZVByb2plY3QocHJvamVjdC5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMubG9hZFBhZ2VDb250ZW50KCk7XG4gICAgICAgICAgICAvL1RPRE86IHRoaXMgYWxzbyBuZWVkcyB0byB1cGRhdGUgdGhlIGpzb24gZmlsZSBvZiByZWNvcmQgdG8gc2F2ZSBwYWdlIHN0YXRlIG9uIHJlbG9hZFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFwcGVuZEFsbExpc3RzVG9Qcm9qZWN0KHByb2plY3RDYXJkQ29udGFpbmVyLCBwcm9qZWN0Lmxpc3RzKTtcblxuICAgICAgICBwcm9qZWN0LnNldENvbnRhaW5lck5vZGUocHJvamVjdENvbnRhaW5lcik7XG5cbiAgICAgICAgLyogdGhpcy5jb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpOyAqL1xuICAgIH1cblxuICAgIGFwcGVuZEFsbExpc3RzVG9Qcm9qZWN0KHByb2plY3RDb250YWluZXIsIGxpc3RzKSB7XG4gICAgICAgIGxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kTGlzdChsaXN0LCBwcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXBwZW5kTGlzdChsaXN0LCBwcm9qZWN0Q29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcImRpdlwiLCBbXG4gICAgICAgICAgICBcImxpc3QtY29udGFpbmVyXCIsXG4gICAgICAgIF0pO1xuICAgICAgICB0aGlzLmNyZWF0ZUxpc3RWaXN1YWwobGlzdCwgbGlzdENvbnRhaW5lcik7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgY3JlYXRlTGlzdFZpc3VhbChsaXN0LCBsaXN0Q29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IGxpc3RUaXRsZUNvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcImxpc3QtdGl0bGUtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgbGlzdENvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGxpc3RJbmZvQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibGlzdC1pbmZvLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIGxpc3RUaXRsZUNvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGxpc3ROYW1lID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibGlzdC10aXRsZVwiXSxcbiAgICAgICAgICAgIGxpc3RJbmZvQ29udGFpbmVyLFxuICAgICAgICAgICAgbGlzdC5uYW1lXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgbGlzdERlc2NyaXB0aW9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibGlzdC1kZXNjcmlwdGlvblwiXSxcbiAgICAgICAgICAgIGxpc3RJbmZvQ29udGFpbmVyLFxuICAgICAgICAgICAgbGlzdC5kZXNjcmlwdGlvblxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGFkZE5ld1Rhc2tCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuZXctbGlzdC1pdGVtLWJ1dHRvblwiXSxcbiAgICAgICAgICAgIGxpc3RUaXRsZUNvbnRhaW5lclxuICAgICAgICApO1xuICAgICAgICBhZGROZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gdGhpcy5jcmVhdGVUYXNrKGxpc3QpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMaXN0VmlzdWFsKGxpc3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZW1vdmVMaXN0QnV0dG9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiaXRlbS1yZW1vdmUtYnV0dG9uXCJdLFxuICAgICAgICAgICAgbGlzdENvbnRhaW5lcixcbiAgICAgICAgICAgIFwiZGVsZXRlIGxpc3RcIlxuICAgICAgICApO1xuICAgICAgICByZW1vdmVMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBsaXN0LnBhcmVudE9iamVjdC5yZW1vdmVMaXN0KGxpc3QubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2plY3RWaXN1YWwobGlzdC5wYXJlbnRPYmplY3QpO1xuICAgICAgICAgICAgdGhpcy5yZWxvYWROYXZDb250ZW50KCk7XG5cbiAgICAgICAgICAgIC8vVE9ETzogdGhpcyBhbHNvIG5lZWRzIHRvIHVwZGF0ZSB0aGUganNvbiBmaWxlIG9mIHJlY29yZCB0byBzYXZlIHBhZ2Ugc3RhdGUgb24gcmVsb2FkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYXBwZW5kVGFza0xpc3QobGlzdENvbnRhaW5lciwgbGlzdCk7XG4gICAgICAgIGxpc3Quc2V0Q29udGFpbmVyTm9kZShsaXN0Q29udGFpbmVyKTtcbiAgICAgICAgLy9Eb2VzIHRoaXMgKG5lZWQgdG8gcmV0dXJuPykgbGlzdCBjb250YWluZXJcbiAgICAgICAgcmV0dXJuIGxpc3RDb250YWluZXI7XG4gICAgfVxuXG4gICAgYXBwZW5kVGFza0xpc3QobGlzdENvbnRhaW5lciwgbGlzdCkge1xuICAgICAgICBsaXN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kVGFzayh0YXNrLCBsaXN0Q29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXBwZW5kVGFzayh0YXNrLCBsaXN0Q29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcImRpdlwiLCBbXG4gICAgICAgICAgICBcIml0ZW0tY29udGFpbmVyXCIsXG4gICAgICAgIF0pO1xuICAgICAgICB0aGlzLmNyZWF0ZVRhc2tWaXN1YWwodGFzaywgdGFza0NvbnRhaW5lcik7XG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLy9DaGVja2JveCBuZWVkcyB0byBzYXZlIHN0YXRlIGJldHdlZW4gbG9hZHNcbiAgICBjcmVhdGVUYXNrVmlzdWFsKHRhc2ssIHRhc2tDb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJpdGVtLWNoZWNrYm94LWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHRhc2tDb250YWluZXJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgICAgIFtcIml0ZW0tY2hlY2tib3hcIl0sXG4gICAgICAgICAgICBjaGVja2JveENvbnRhaW5lclxuICAgICAgICApO1xuICAgICAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICBjb25zb2xlLmxvZyhgVGFzayBuYW1lPyAke3Rhc2submFtZX0gVGFzayBjaGVja2VkPyAke3Rhc2suY2hlY2tlZH1gKTtcbiAgICAgICAgaWYgKHRhc2suY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2suY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHRhc2suY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXNrLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiaXRlbS1pbmZvLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHRhc2tDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJpdGVtLXRpdGxlXCJdLFxuICAgICAgICAgICAgaW5mb0NvbnRhaW5lcixcbiAgICAgICAgICAgIHRhc2submFtZVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIml0ZW0tZGVzY3JpcHRpb25cIl0sXG4gICAgICAgICAgICBpbmZvQ29udGFpbmVyLFxuICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvblxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EdWVEYXRlID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiaXRlbS1kdWUtZGF0ZVwiXSxcbiAgICAgICAgICAgIGluZm9Db250YWluZXIsXG4gICAgICAgICAgICB0YXNrLmR1ZURhdGVcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCB0YXNrQ29udHJvbHNDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJ0YXNrLWNvbnRyb2xzLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHRhc2tDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCByZW1vdmVUYXNrQnV0dG9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiaXRlbS1yZW1vdmUtYnV0dG9uXCJdLFxuICAgICAgICAgICAgdGFza0NvbnRyb2xzQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJyZW1vdmUgaXRlbVwiXG4gICAgICAgICk7XG4gICAgICAgIHJlbW92ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRhc2sucGFyZW50T2JqZWN0LnJlbW92ZVRhc2sodGFzay5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGlzdFZpc3VhbCh0YXNrLnBhcmVudE9iamVjdCk7XG4gICAgICAgICAgICAvL1RPRE86IHRoaXMgYWxzbyBuZWVkcyB0byB1cGRhdGUgdGhlIGpzb24gZmlsZSBvZiByZWNvcmQgdG8gc2F2ZSBwYWdlIHN0YXRlIG9uIHJlbG9hZFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBlZGl0VGFza0J1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIml0ZW0tZWRpdC1idXR0b25cIl0sXG4gICAgICAgICAgICB0YXNrQ29udHJvbHNDb250YWluZXIsXG4gICAgICAgICAgICBcImVkaXQgaXRlbVwiXG4gICAgICAgICk7XG4gICAgICAgIGVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVkaXRUYXNrKHRhc2spO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUYXNrVmlzdWFsKHRhc2spO1xuICAgICAgICB9KTtcblxuICAgICAgICB0YXNrLnNldENvbnRhaW5lck5vZGUodGFza0NvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xuICAgIH1cblxuICAgIGNyZWF0ZVRhc2socGFyZW50TGlzdCkge1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IHByb21wdChcIkl0ZW0gbmFtZT9cIik7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHByb21wdChcIkl0ZW0gZGVzY3JpcHRpb24/XCIpO1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHByb21wdChcIkl0ZW0gZHVlIGRhdGU/XCIpO1xuXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhcbiAgICAgICAgICAgIHRhc2tOYW1lLFxuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGFza0R1ZURhdGUsXG4gICAgICAgICAgICBwYXJlbnRMaXN0XG4gICAgICAgICk7XG5cbiAgICAgICAgcGFyZW50TGlzdC5hZGRUYXNrKG5ld1Rhc2spO1xuICAgIH1cblxuICAgIGVkaXRUYXNrKHRhc2spIHtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBwcm9tcHQoXCJOZXcgdGFzayBuYW1lP1wiLCBgJHt0YXNrLm5hbWV9YCk7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHByb21wdChcbiAgICAgICAgICAgIFwiTmV3IHRhc2sgZGVzY3JpcHRpb24/XCIsXG4gICAgICAgICAgICBgJHt0YXNrLmRlc2NyaXB0aW9ufWBcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBwcm9tcHQoXCJOZXcgdGFzayBkdWUgZGF0ZT9cIiwgYCR7dGFzay5kdWVEYXRlfWApO1xuXG4gICAgICAgIHRhc2suc2V0TmFtZSh0YXNrTmFtZSk7XG4gICAgICAgIHRhc2suc2V0RGF0ZSh0YXNrRHVlRGF0ZSk7XG4gICAgICAgIHRhc2suc2V0RGVzY3JpcHRpb24odGFza0Rlc2NyaXB0aW9uKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUYXNrVmlzdWFsKHRhc2spIHtcbiAgICAgICAgdGhpcy5jbGVhclRhc2tWaXN1YWwodGFzay5jb250YWluZXJOb2RlKTtcbiAgICAgICAgdGhpcy5jcmVhdGVUYXNrVmlzdWFsKHRhc2ssIHRhc2suY29udGFpbmVyTm9kZSk7XG4gICAgfVxuXG4gICAgY2xlYXJUYXNrVmlzdWFsKHRhc2tWaXN1YWwpIHtcbiAgICAgICAgdGFza1Zpc3VhbC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0KHBhcmVudFByb2plY3QpIHtcbiAgICAgICAgY29uc3QgbGlzdE5hbWUgPSBwcm9tcHQoXCJMaXN0IG5hbWU/XCIpO1xuICAgICAgICBjb25zdCBsaXN0RGVzY3JpcHRpb24gPSBwcm9tcHQoXCJMaXN0IGRlc2NyaXB0aW9uP1wiKTtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IG5ldyBMaXN0KGxpc3ROYW1lLCBsaXN0RGVzY3JpcHRpb24sIFtdLCBwYXJlbnRQcm9qZWN0KTtcblxuICAgICAgICBwYXJlbnRQcm9qZWN0LmFkZExpc3QobmV3TGlzdCk7XG4gICAgfVxuXG4gICAgZWRpdExpc3QobGlzdCkge1xuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IHByb21wdChcIkxpc3QgbmFtZT9cIik7XG4gICAgICAgIGNvbnN0IGxpc3REZXNjcmlwdGlvbiA9IHByb21wdChcIkxpc3QgZGVzY3JpcHRpb24/XCIpO1xuXG4gICAgICAgIGxpc3Quc2V0TmFtZSA9IGxpc3ROYW1lO1xuICAgICAgICBsaXN0LnNldERlc2NyaXB0aW9uID0gbGlzdERlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHVwZGF0ZUxpc3RWaXN1YWwobGlzdCkge1xuICAgICAgICB0aGlzLmNsZWFyTGlzdFZpc3VhbChsaXN0LmNvbnRhaW5lck5vZGUpO1xuICAgICAgICB0aGlzLmNyZWF0ZUxpc3RWaXN1YWwobGlzdCwgbGlzdC5jb250YWluZXJOb2RlKTtcbiAgICB9XG5cbiAgICBjbGVhckxpc3RWaXN1YWwobGlzdFZpc3VhbCkge1xuICAgICAgICBsaXN0VmlzdWFsLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIH1cblxuICAgIGVkaXRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9tcHQoXCJQcm9qZWN0IG5hbWU/XCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBwcm9tcHQoXCJQcm9qZWN0IGRlc2NyaXB0aW9uP1wiKTtcblxuICAgICAgICBwcm9qZWN0Lm5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgcHJvamVjdC5kZXNjcmlwdGlvbiA9IHByb2plY3REZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICB1cGRhdGVQcm9qZWN0VmlzdWFsKHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5jbGVhclByb2plY3RWaXN1YWwocHJvamVjdC5jb250YWluZXJOb2RlKTtcbiAgICAgICAgdGhpcy5jcmVhdGVQcm9qZWN0VmlzdWFsKHByb2plY3QsIHByb2plY3QuY29udGFpbmVyTm9kZSk7XG4gICAgfVxuXG4gICAgY2xlYXJQcm9qZWN0VmlzdWFsKHByb2plY3RWaXN1YWwpIHtcbiAgICAgICAgcHJvamVjdFZpc3VhbC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IHByb21wdChcIlByb2plY3QgbmFtZT9cIik7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3REZXNjcmlwdGlvbiA9IHByb21wdChcIlByb2plY3QgZGVzY3JpcHRpb24/XCIpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0TGlzdHMgPSBbXTtcblxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgICAgICAgICBuZXdQcm9qZWN0TmFtZSxcbiAgICAgICAgICAgIG5ld1Byb2plY3REZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG5ld1Byb2plY3RMaXN0cyxcbiAgICAgICAgICAgIHRoaXMudXNlclxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMudXNlci5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByb2plY3RzID0gW10sIHBhcmVudENvbnRhaW5lcikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0ID0gcGFyZW50Q29udGFpbmVyO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICAgIH1cblxuICAgIHNldFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgICB9XG5cbiAgICBjb250YWluc1Byb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuc29tZShcbiAgICAgICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zUHJvamVjdChuZXdQcm9qZWN0LmdldE5hbWUoKSkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKFxuICAgICAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpICE9PSBwcm9qZWN0TmFtZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZChcbiAgICAgICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKiBwYXJzZVRvSlNPTigpIHtcbiAgICAgICAgY29uc3QgSlNPTlByb2plY3RBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIEpTT05Qcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0LnBhcnNlVG9KU09OKCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB1c2VySlNPTiA9IGB7XCJuYW1lXCI6IFwiJHt0aGlzLm5hbWV9XCIsIFwicHJvamVjdHNcIjogJHtKU09OUHJvamVjdEFycmF5fX1gO1xuICAgICAgICBsZXQgdGVtcFN0cmluZyA9IFwiXCIgKyB1c2VySlNPTjtcblxuICAgICAgICByZXR1cm4gdGVtcFN0cmluZztcbiAgICB9ICovXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgVUkgZnJvbSBcIi4vbW9kdWxlcy9VSS5qc1wiO1xuXG5jb25zdCBuZXdQYWdlID0gbmV3IFVJKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=