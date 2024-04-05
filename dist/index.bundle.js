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
    background-color: var(--nav-background-color);
    padding: 4rem 1rem;

    /* overflow: scroll; */
    position: sticky;
    top: 0;
    margin: 0;
    height: 100vh;

    border: 1px solid black;
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
    border: solid 1px red;

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
    border-radius: 0.5rem;
    background-color: var(--project-container-color);
    box-shadow: var(--box-shadow-values)
        rgba(var(--drop-shadow-color-color), 0.5);
}

.project-title-container {
    display: grid;
    grid-template-columns: 5fr 1fr;
    font-size: var(--project-info-font-size);
    border: solid black 1px;
}

.project-info-container {
    border: solid black 1px;
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

.list-container {
    display: grid;
    gap: 0.5rem;

    /* background-color: rgba(var(--secondary-color), 0.5); */
    padding: 1rem;
    box-shadow: var(--minor-box-shadow-values) var(--drop-shadow-color);
    border-radius: 0.5rem;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap\");\n\n:root {\n    --mute-color: rgb(255, 127, 80, 0.1);\n    --secondary-color: 253, 107, 62;\n    --highlight-color: 147, 252, 217;\n    --dark-shadow-color: 0, 0, 0;\n    --box-shadow-values: 0.5rem 0.8rem 0.05rem;\n    --minor-box-shadow-values: 0.3rem 0.3rem 0.05rem;\n    --general-font: \"Montserrat\", \"Roboto Condensed\", sans-serif;\n    --title-font: \"Roboto Slab\", serif;\n    --base-font-color: rgb(0, 0, 0, 0.8);\n    --base-font-size: 1vh;\n    --title-font-size: 4rem;\n    --header-font-size: 2rem;\n    --content-font-size: 1rem;\n    --base-line-height: 1.25;\n    --content-line-height: 2;\n\n    font-size: var(--base-font-size);\n\n    --item-title-font-size: 1.5rem;\n    --item-info-font-size: 1rem;\n    --list-title-font-size: 2rem;\n    --list-info-font-size: 1rem;\n    --project-title-font-size: 2rem;\n    --project-info-font-size: 1.5rem;\n    --nav-title-font-size: 1.5rem;\n    --nav-info-font-size: 1.25rem;\n\n    --nav-icon-dimension: 2rem;\n\n    --dark-green: rgba(4, 42, 43, 1);\n    --moonstone: rgba(94, 177, 191, 1);\n    --light-cyan: rgba(205, 237, 246, 1);\n    --orange-crayola: rgba(239, 123, 69, 1);\n    --chili-red: rgba(216, 71, 39, 1);\n\n    --lapis-lazuli: rgba(35, 87, 137, 1);\n    --imperial-red: rgba(251, 54, 64, 0.1);\n    --aquamarine: rgba(22, 244, 208, 1);\n    --school-bus-yellow: rgba(241, 211, 2, 1);\n    --black: rgba(2, 1, 0, 1);\n\n    --nav-background-color: var(--imperial-red);\n    --content-container-color: rgb(242, 242, 242);\n    --project-container-color: rgb(255, 255, 255);\n\n    --box-shadow-values: -0.5rem 0.8rem 0.5rem;\n    --minor-box-shadow-values: -0.3rem 0.3rem 0.3rem;\n    --drop-shadow-color: rgb(0, 0, 0, 0.4);\n}\n\nbody {\n    display: grid;\n    grid-template-columns: minmax(min(10rem, 100%), 2fr) minmax(\n            min(10rem, 100%),\n            5fr\n        );\n\n    font-family: var(--general-font);\n    font-size: var(--general-font-size);\n    margin: 0;\n\n    height: 100vh;\n}\n\n.nav-container {\n    grid-column: 1 / 2;\n\n    display: grid;\n    grid-template-rows: 3rem repeat(auto-fit, minmax(10px, 0.5fr));\n\n    gap: 2rem;\n    background-color: var(--nav-background-color);\n    padding: 4rem 1rem;\n\n    /* overflow: scroll; */\n    position: sticky;\n    top: 0;\n    margin: 0;\n    height: 100vh;\n\n    border: 1px solid black;\n}\n\n.nav-title-container {\n    /* grid-column: 1 / 3; */\n    grid-row: 1 / 2;\n\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n\n    font-size: var(--nav-title-font-size);\n}\n\n.nav-title {\n    /* grid-column: 1 / 2; */\n}\n\n.new-project-button {\n    /* grid-column: 3 / 4; */\n    background-image: url(./img/icons/plus.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.nav-content-container {\n    display: grid;\n    gap: 1rem;\n    font-size: var(--nav-info-font-size);\n\n    /* border: 1px solid black; */\n    /* height: 500px; */\n    overflow: scroll;\n}\n\n.nav-project-container {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n}\n\n.nav-project-title-container {\n    grid-column: 1 / 3;\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.nav-project-title-icon {\n    background-image: url(./img/icons/dots-horizontal-circle-outline.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.nav-project-title {\n    font-weight: 500;\n}\n\n.nav-project-content-container {\n    grid-column: 2 / 3;\n}\n\n.nav-list-title-container {\n    display: flex;\n    align-items: center;\n    gap: 0.2rem;\n}\n\n.nav-list-title-icon {\n    background-image: url(./img/icons/menu-right-outline.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.nav-list-title {\n}\n\n.content-container {\n    grid-column: 2 / 3;\n\n    display: grid;\n    gap: 1rem;\n    background-color: var(--content-container-color);\n    border: solid 1px red;\n\n    height: 100vh;\n    /* box-shadow: var(--box-shadow-values) var(--drop-shadow-color); */\n}\n\n.project-container {\n    display: grid;\n    grid-template-rows: 4rem repeat(auto-fill, 1fr);\n\n    /* background-color: rgba(var(--mute-color), 1); */\n    padding: 2rem;\n    margin: 1rem;\n    gap: 0.5rem;\n\n    overflow: scroll;\n    border-radius: 0.5rem;\n    background-color: var(--project-container-color);\n    box-shadow: var(--box-shadow-values)\n        rgba(var(--drop-shadow-color-color), 0.5);\n}\n\n.project-title-container {\n    display: grid;\n    grid-template-columns: 5fr 1fr;\n    font-size: var(--project-info-font-size);\n    border: solid black 1px;\n}\n\n.project-info-container {\n    border: solid black 1px;\n}\n\n.project-title {\n    font-size: var(--project-title-font-size);\n}\n\n.project-description {\n}\n\n.new-project-list-button {\n    background-image: url(./img/icons/plus.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.list-container {\n    display: grid;\n    gap: 0.5rem;\n\n    /* background-color: rgba(var(--secondary-color), 0.5); */\n    padding: 1rem;\n    box-shadow: var(--minor-box-shadow-values) var(--drop-shadow-color);\n    border-radius: 0.5rem;\n}\n\n.list-title-container {\n    display: grid;\n    grid-template-columns: 5fr 1fr;\n    font-size: var(--list-info-font-size);\n}\n\n.list-info-container {\n}\n\n.list-title {\n    font-size: var(--list-title-font-size);\n}\n\n.list-description {\n}\n\n.new-list-item-button {\n    background-image: url(./img/icons/plus.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.item-container {\n    display: grid;\n    grid-template-columns: 1fr 6fr 1fr;\n    /* background-color: rgba(var(--secondary-color), 0.5); */\n}\n\n.item-checkbox-container {\n    grid-column: 1 / 2;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.item-checkbox {\n}\n\n/* input[type=\"checkbox\"] {\n    appearance: none;\n    display: grid;\n    place-content: center;\n    border: solid 1px black;\n    height: 1em;\n    width: 1em;\n\n    background: #0a0a0a;\n    border-color: #fff;\n}\n\ninput[type=\"checkbox\"]::before {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    transform: scale(0);\n    transition: 120ms transform ease-in-out;\n    box-shadow: inset 1em 1em var(--form-control-color);\n} */\n\n.item-info-container {\n    grid-column: 2 / 3;\n    font-size: var(--item-info-font-size);\n}\n\n.item-title {\n    font-size: var(--item-title-font-size);\n}\n\n.item-description {\n}\n\n.item-due-date {\n}\n\n.item-remove-button {\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/Content.js":
/*!********************************!*\
  !*** ./src/modules/Content.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContentContainer: () => (/* binding */ createContentContainer)
/* harmony export */ });
/* harmony import */ var _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneratePageElement.js */ "./src/modules/GeneratePageElement.js");


function createContentContainer(user) {
    let navContainer;

    const contentContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
        "div",
        ["content-container"],
        document.querySelector("body")
    );

    function clearContentArea() {
        while (contentContainer.firstChild) {
            contentContainer.removeChild(contentContainer.lastChild);
        }
    }

    function changeProject(project) {
        contentContainer.appendChild(project.projectVisual);
    }

    function resetContentContainer() {
        clearContentArea();
        changeProject(user.projects[0]);
        //navContainer.resetNavVisual();
    }

    function updateNavContainer(newNavContainer) {
        navContainer = newNavContainer;
    }

    return {
        contentContainer,
        clearContentArea,
        changeProject,
        resetContentContainer,
        updateNavContainer,
    };
}


/***/ }),

/***/ "./src/modules/GenerateLists.js":
/*!**************************************!*\
  !*** ./src/modules/GenerateLists.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLists: () => (/* binding */ createLists)
/* harmony export */ });
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ "./src/modules/Task.js");
/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.js */ "./src/modules/List.js");
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project.js */ "./src/modules/Project.js");




function createLists() {
    let projects = [];

    for (let i = 1; i < 3; i++) {
        let lists = [];
        for (let j = 1; j < 4; j++) {
            let listItems = [];
            for (let k = 1; k < 7; k++) {
                let newItem = _Task_js__WEBPACK_IMPORTED_MODULE_0__.createNewTask(
                    `Item title ${i}-${j}-${k}`,
                    `Item description ${i}-${j}-${k}`,
                    `Item due date ${i}-${j}-${k}`
                );
                listItems.push(newItem);
            }

            let newList = _List_js__WEBPACK_IMPORTED_MODULE_1__.createList(
                `List title ${i}-${j}`,
                `List description ${i}-${j}`,
                listItems
            );
            lists.push(newList);
        }
        let newProject = _Project_js__WEBPACK_IMPORTED_MODULE_2__.createProject(
            `Project title ${i}`,
            `Project description ${i}`,
            lists
        );
        projects.push(newProject);
    }

    return projects;
}


/***/ }),

/***/ "./src/modules/GeneratePageElement.js":
/*!********************************************!*\
  !*** ./src/modules/GeneratePageElement.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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


/***/ }),

/***/ "./src/modules/List.js":
/*!*****************************!*\
  !*** ./src/modules/List.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendWholeItemList: () => (/* binding */ appendWholeItemList),
/* harmony export */   createList: () => (/* binding */ createList),
/* harmony export */   createListNavVisual: () => (/* binding */ createListNavVisual),
/* harmony export */   createListVisual: () => (/* binding */ createListVisual)
/* harmony export */ });
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ "./src/modules/Task.js");
/* harmony import */ var _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneratePageElement.js */ "./src/modules/GeneratePageElement.js");



function createList(title, description, listItems = []) {
    function addListItem() {
        const itemName = prompt("Item name?");
        const itemDescription = prompt("Item description?");
        const itemDueDate = prompt("Item due date?");
        const newItem = _Task_js__WEBPACK_IMPORTED_MODULE_0__.createNewTask(
            itemName,
            itemDescription,
            itemDueDate
        );
        listItems.push(newItem);
        return newItem;
    }

    const listVisual = createListVisual(
        title,
        description,
        listItems,
        addListItem
    );

    const listNavVisual = createListNavVisual(title);

    let contentContainer;
    let navContainer;

    function updateNavContainer(newNavContainer) {
        navContainer = newNavContainer;
        listItems.forEach((item) => {
            item.updateNavContainer(newNavContainer);
        });
    }

    function updateContentContainer(newContentContainer) {
        contentContainer = newContentContainer;
        listItems.forEach((item) => {
            item.updateContentContainer(newContentContainer);
        });
    }

    return {
        title,
        description,
        listItems,
        listVisual,
        listNavVisual,
        addListItem,
        updateNavContainer,
        updateContentContainer,
    };
}

function createListVisual(title, description, listItems, addListItem) {
    const listContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__.generatePageElement("div", [
        "list-container",
    ]);

    const listTitleContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__.generatePageElement(
        "div",
        ["list-title-container"],
        listContainer
    );

    const listInfoContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__.generatePageElement(
        "div",
        ["list-info-container"],
        listTitleContainer
    );

    const listTitle = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__.generatePageElement(
        "div",
        ["list-title"],
        listInfoContainer,
        title
    );

    const listDescription = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__.generatePageElement(
        "div",
        ["list-description"],
        listInfoContainer,
        description
    );

    const addNewItemButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__.generatePageElement(
        "div",
        ["new-list-item-button"],
        listTitleContainer
    );
    addNewItemButton.addEventListener("click", () => {
        const newItem = addListItem();
        listContainer.appendChild(newItem.itemVisual);
    });

    const removeListButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__.generatePageElement(
        "div",
        ["item-remove-button"],
        listContainer,
        "delete list"
    );
    removeListButton.addEventListener("click", () => {
        listContainer.remove();
        //TODO: link this to also remove the nav bar representation of this list
    });

    appendWholeItemList(listContainer, listItems);

    return listContainer;
}

function appendWholeItemList(listContainer, listItems) {
    listItems.forEach((item) => {
        listContainer.appendChild(item.itemVisual);
    });
}

function createListNavVisual(title) {
    const listTitleContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__.generatePageElement("div", [
        "nav-list-title-container",
    ]);

    const listTitleIcon = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__.generatePageElement(
        "div",
        ["nav-list-title-icon"],
        listTitleContainer
    );

    const listTitleDiv = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__.generatePageElement(
        "div",
        ["nav-list-title"],
        listTitleContainer,
        title
    );

    return listTitleContainer;
}


/***/ }),

/***/ "./src/modules/Navigation.js":
/*!***********************************!*\
  !*** ./src/modules/Navigation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNavigationContainer: () => (/* binding */ createNavigationContainer),
/* harmony export */   createNavigationVisual: () => (/* binding */ createNavigationVisual)
/* harmony export */ });
/* harmony import */ var _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneratePageElement.js */ "./src/modules/GeneratePageElement.js");


function createNavigationContainer(user) {
    let contentContainer;

    //Can this still be const if we're going to update it?
    let navVisual = createNavigationVisual(
        user,
        resetNavContainer,
        contentContainer
    );

    function resetNavContainer() {
        navVisual.remove();
        contentContainer.resetContentContainer();

        navVisual = NavigationVisual.create(
            user,
            resetNavContainer,
            contentContainer
        );
    }

    function updateContentContainer(newContentContainer) {
        contentContainer = newContentContainer;
    }

    return { navVisual, resetNavContainer, updateContentContainer };
}

function createNavigationVisual(
    user,
    resetNavContainer,
    contentContainer
) {
    const navContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
        "div",
        ["nav-container"],
        document.querySelector("body")
    );

    const navTitleContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
        "div",
        ["nav-title-container"],
        navContainer
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
    //TODO: This actually needs to add a new project to the nav and the workspace
    addNewProjectButton.addEventListener("click", () => {
        user.addProject();
        console.log(user.projects);
        resetNavContainer();
    });

    const navContentContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
        "div",
        ["nav-content-container"],
        navContainer
    );

    user.projects.forEach((project) => {
        /* const navProjectVisual = ProjectNavVisual.create(
            project.title,
            project.lists
        );
        navContentContainer.appendChild(navProjectVisual); */

        navContentContainer.appendChild(project.projectNavVisual);
    });

    navContainer.appendChild(navContentContainer);

    return navContainer;
}


/***/ }),

/***/ "./src/modules/Page.js":
/*!*****************************!*\
  !*** ./src/modules/Page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearPage: () => (/* binding */ clearPage),
/* harmony export */   generatePage: () => (/* binding */ generatePage),
/* harmony export */   resetPage: () => (/* binding */ resetPage)
/* harmony export */ });
/* harmony import */ var _GenerateLists_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenerateLists.js */ "./src/modules/GenerateLists.js");
/* harmony import */ var _Navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.js */ "./src/modules/Navigation.js");
/* harmony import */ var _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GeneratePageElement.js */ "./src/modules/GeneratePageElement.js");
/* harmony import */ var _User_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User.js */ "./src/modules/User.js");
/* harmony import */ var _Content_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Content.js */ "./src/modules/Content.js");






function generatePage() {
    const documentBody = document.querySelector("body");

    //Just reading from user storage.
    const projectList = _GenerateLists_js__WEBPACK_IMPORTED_MODULE_0__.createLists();

    const newUser = _User_js__WEBPACK_IMPORTED_MODULE_3__.createUser(projectList);

    //TODO: do I need to send content container object to nav so that nav can have a button to clear content area?
    //TODO: Do both the content container and the navigation need to be created as their own entities and then added to the main body here?
    //Does that allow for button functions to be added and not have to choose which element is generated first? Can feed one to the other without worrying about the order they'll be shown on the page.

    const newNavContainer = _Navigation_js__WEBPACK_IMPORTED_MODULE_1__.createNavigationContainer(newUser);
    /* documentBody.appendChild(newNavContainer.navVisual); */

    const newContentContainer =
        _Content_js__WEBPACK_IMPORTED_MODULE_4__.createContentContainer(newUser);

    newContentContainer.updateNavContainer(newNavContainer);
    newNavContainer.updateContentContainer(newContentContainer);

    newContentContainer.resetContentContainer();

    //Open either no project or generic project
    //newContentContainer.changeProject(newUser.projects[0]);
}

function clearPage() {
    const documentBody = document.querySelector("body");

    while (documentBody.firstChild) {
        documentBody.removeChild(documentBody.lastChild);
    }
}

function resetPage() {
    clearPage();
    generatePage();
}


/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createProjectNavVisual: () => (/* binding */ createProjectNavVisual),
/* harmony export */   createProjectVisual: () => (/* binding */ createProjectVisual)
/* harmony export */ });
/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.js */ "./src/modules/List.js");
/* harmony import */ var _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneratePageElement.js */ "./src/modules/GeneratePageElement.js");
/* export class Project {
    constructor(name) {
        this.name = name;
        this.projectTasks = [];
    }

    getName() {
        return this.name;
    }
}
 */



//TODO: Do i need a project container for holding and creating new projects?
//Probably... A User module? Probably...

function createProject(title, description, lists = []) {
    function addList() {
        const listName = prompt("Item name?");
        const listDescription = prompt("Item description?");
        const newList = _List_js__WEBPACK_IMPORTED_MODULE_0__.createList(listName, listDescription);
        lists.push(newList);
        return newList;
    }

    const projectVisual = createProjectVisual(
        title,
        description,
        lists,
        addList,
        reloadNavContainer,
        reloadContentContainer
    );

    const projectNavVisual = createProjectNavVisual(
        title,
        lists,
        reloadNavContainer,
        reloadContentContainer
    );

    let contentContainer;
    let navContainer;

    function updateNavContainer(newNavContainer) {
        navContainer = newNavContainer;
        lists.forEach((list) => {
            list.updateNavContainer(newNavContainer);
        });
    }

    function updateContentContainer(newContentContainer) {
        contentContainer = newContentContainer;
        lists.forEach((list) => {
            list.updateContentContainer(newContentContainer);
        });
    }

    function reloadContentContainer() {
        contentContainer.resetContentContainer();
    }

    function reloadNavContainer() {
        navContainer.resetNavContainer();
    }

    return {
        title,
        description,
        lists,
        projectVisual,
        projectNavVisual,
        updateNavContainer,
        updateContentContainer,
    };
}



function createProjectVisual(
    title,
    description,
    lists,
    addList,
    navContainer = null,
    contentContainer = null
) {
    const projectContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__.generatePageElement("div", [
        "project-container",
    ]);

    const projectTitleContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__.generatePageElement(
        "div",
        ["project-title-container"],
        projectContainer
    );

    const projectInfoContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__.generatePageElement(
        "div",
        ["project-info-container"],
        projectTitleContainer
    );

    const projectTitle = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__.generatePageElement(
        "div",
        ["project-title"],
        projectInfoContainer,
        title
    );
    const projectDescription = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__.generatePageElement(
        "div",
        ["project-description"],
        projectInfoContainer,
        description
    );

    const createNewListButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__.generatePageElement(
        "div",
        ["new-project-list-button"],
        projectTitleContainer
    );

    createNewListButton.addEventListener("click", () => {
        const newList = addList();
        contentContainer.resetContentContainer();
        //projectContainer.appendChild(newList.listVisual);

        /* GeneratePage.resetPage(); */

        //TODO: add event for creating a new list div and accompanying list
    });

    const removeProjectButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__.generatePageElement(
        "div",
        ["item-remove-button"],
        projectContainer,
        "delete project"
    );
    removeProjectButton.addEventListener("click", () => {
        projectContainer.remove();
        //TODO: link this to also remove the nav bar representation of this list
    });

    appendAllListsToProject(projectContainer, lists);

    return projectContainer;
}

function appendAllListsToProject(projectContainer, lists) {
    lists.forEach((list) => {
        projectContainer.appendChild(list.listVisual);
    });
}

function createProjectNavVisual(
    title,
    lists,
    navContainer,
    contentContainer
) {
    const projectContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__.generatePageElement("div", [
        "nav-project-container",
    ]);

    const projectTitleContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__.generatePageElement(
        "div",
        ["nav-project-title-container"],
        projectContainer
    );

    const projectTitleIcon = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__.generatePageElement(
        "div",
        ["nav-project-title-icon"],
        projectTitleContainer
    );

    const projectTitle = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__.generatePageElement(
        "div",
        ["nav-project-title"],
        projectTitleContainer,
        title
    );

    //TODO: Each project needs to be able to open itself in the main content space

    const projectContentContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_1__.generatePageElement(
        "div",
        ["nav-project-content-container"],
        projectContainer
    );

    lists.forEach((list) => {
        projectContentContainer.appendChild(list.listNavVisual);
    });

    return projectContainer;
}


/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewTask: () => (/* binding */ createNewTask),
/* harmony export */   createTaskVisual: () => (/* binding */ createTaskVisual)
/* harmony export */ });
/* harmony import */ var _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneratePageElement.js */ "./src/modules/GeneratePageElement.js");


function createNewTask(title, description, dueDate) {
    const itemVisual = createTaskVisual(title, description, dueDate);

    let contentContainer;
    let navContainer;

    function readTitle() {
        return title;
    }

    function updateTitle(newTitle) {
        if (newTitle) {
            this.title = newTitle;
        }
    }

    function updateNavContainer(newNavContainer) {
        navContainer = newNavContainer;
    }

    function updateContentContainer(newContentContainer) {
        contentContainer = newContentContainer;
    }

    return {
        /* title, */
        readTitle,
        updateTitle,
        description,
        dueDate,
        itemVisual,
        updateNavContainer,
        updateContentContainer,
    };
}

function createTaskVisual(title, description, dueDate) {
    const listItemContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement("div", [
        "item-container",
    ]);

    const checkboxContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
        "div",
        ["item-checkbox-container"],
        listItemContainer
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
        listItemContainer
    );

    const itemTitle = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
        "div",
        ["item-title"],
        infoContainer,
        title
    );

    const itemDescription = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
        "div",
        ["item-description"],
        infoContainer,
        description
    );

    const itemDueDate = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
        "div",
        ["item-due-date"],
        infoContainer,
        dueDate
    );

    const removeItemButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
        "div",
        ["item-remove-button"],
        listItemContainer,
        "remove item"
    );
    removeItemButton.addEventListener("click", () => {
        listItemContainer.remove();
    });

    return listItemContainer;
}


/***/ }),

/***/ "./src/modules/User.js":
/*!*****************************!*\
  !*** ./src/modules/User.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createUser: () => (/* binding */ createUser)
/* harmony export */ });
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.js */ "./src/modules/Project.js");


function createUser(projects = []) {
    function addProject() {
        const projectName = prompt("Project name?");
        const projectDescription = prompt("Project description?");
        const newProject = _Project_js__WEBPACK_IMPORTED_MODULE_0__.createProject(
            projectName,
            projectDescription
        );
        projects.push(newProject);
        return newProject;
    }

    let contentContainer;
    let navContainer;

    function updateNavContainer(newNavContainer) {
        navContainer = newNavContainer;
        projects.forEach((project) => {
            project.updateNavContainer(newNavContainer);
        });
    }

    function updateContentContainer(newContentContainer) {
        contentContainer = newContentContainer;
        projects.forEach((project) => {
            project.updateContentContainer(newContentContainer);
        });
    }

    return { projects, addProject, updateNavContainer, updateContentContainer };
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
/* harmony import */ var _modules_Page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Page.js */ "./src/modules/Page.js");



const newPage = _modules_Page_js__WEBPACK_IMPORTED_MODULE_1__.generatePage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxhQUFhLFlBQVksVUFBVSxPQUFPLEtBQUssYUFBYSxXQUFXLGFBQWEsV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLFdBQVcsVUFBVSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxNQUFNLEtBQUssYUFBYSxXQUFXLFVBQVUsWUFBWSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsV0FBVyxVQUFVLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFL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RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNxQjs7QUFFMUMsZ0JBQWdCLDBEQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL0dlbmVyYXRlTGlzdHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL0dlbmVyYXRlUGFnZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL0xpc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9pY29ucy9wbHVzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL2ljb25zL2RvdHMtaG9yaXpvbnRhbC1jaXJjbGUtb3V0bGluZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9pY29ucy9tZW51LXJpZ2h0LW91dGxpbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0K0FsdGVybmF0ZXM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZmFtaWx5PVJvYm90bytNb25vOml0YWwsd2dodEAwLDEwMC4uNzAwOzEsMTAwLi43MDAmZmFtaWx5PVJvYm90bytTbGFiOndnaHRAMTAwLi45MDAmZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZmFtaWx5PVVidW50dTppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1tdXRlLWNvbG9yOiByZ2IoMjU1LCAxMjcsIDgwLCAwLjEpO1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAyNTMsIDEwNywgNjI7XG4gICAgLS1oaWdobGlnaHQtY29sb3I6IDE0NywgMjUyLCAyMTc7XG4gICAgLS1kYXJrLXNoYWRvdy1jb2xvcjogMCwgMCwgMDtcbiAgICAtLWJveC1zaGFkb3ctdmFsdWVzOiAwLjVyZW0gMC44cmVtIDAuMDVyZW07XG4gICAgLS1taW5vci1ib3gtc2hhZG93LXZhbHVlczogMC4zcmVtIDAuM3JlbSAwLjA1cmVtO1xuICAgIC0tZ2VuZXJhbC1mb250OiBcIk1vbnRzZXJyYXRcIiwgXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gICAgLS10aXRsZS1mb250OiBcIlJvYm90byBTbGFiXCIsIHNlcmlmO1xuICAgIC0tYmFzZS1mb250LWNvbG9yOiByZ2IoMCwgMCwgMCwgMC44KTtcbiAgICAtLWJhc2UtZm9udC1zaXplOiAxdmg7XG4gICAgLS10aXRsZS1mb250LXNpemU6IDRyZW07XG4gICAgLS1oZWFkZXItZm9udC1zaXplOiAycmVtO1xuICAgIC0tY29udGVudC1mb250LXNpemU6IDFyZW07XG4gICAgLS1iYXNlLWxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgIC0tY29udGVudC1saW5lLWhlaWdodDogMjtcblxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYmFzZS1mb250LXNpemUpO1xuXG4gICAgLS1pdGVtLXRpdGxlLWZvbnQtc2l6ZTogMS41cmVtO1xuICAgIC0taXRlbS1pbmZvLWZvbnQtc2l6ZTogMXJlbTtcbiAgICAtLWxpc3QtdGl0bGUtZm9udC1zaXplOiAycmVtO1xuICAgIC0tbGlzdC1pbmZvLWZvbnQtc2l6ZTogMXJlbTtcbiAgICAtLXByb2plY3QtdGl0bGUtZm9udC1zaXplOiAycmVtO1xuICAgIC0tcHJvamVjdC1pbmZvLWZvbnQtc2l6ZTogMS41cmVtO1xuICAgIC0tbmF2LXRpdGxlLWZvbnQtc2l6ZTogMS41cmVtO1xuICAgIC0tbmF2LWluZm8tZm9udC1zaXplOiAxLjI1cmVtO1xuXG4gICAgLS1uYXYtaWNvbi1kaW1lbnNpb246IDJyZW07XG5cbiAgICAtLWRhcmstZ3JlZW46IHJnYmEoNCwgNDIsIDQzLCAxKTtcbiAgICAtLW1vb25zdG9uZTogcmdiYSg5NCwgMTc3LCAxOTEsIDEpO1xuICAgIC0tbGlnaHQtY3lhbjogcmdiYSgyMDUsIDIzNywgMjQ2LCAxKTtcbiAgICAtLW9yYW5nZS1jcmF5b2xhOiByZ2JhKDIzOSwgMTIzLCA2OSwgMSk7XG4gICAgLS1jaGlsaS1yZWQ6IHJnYmEoMjE2LCA3MSwgMzksIDEpO1xuXG4gICAgLS1sYXBpcy1sYXp1bGk6IHJnYmEoMzUsIDg3LCAxMzcsIDEpO1xuICAgIC0taW1wZXJpYWwtcmVkOiByZ2JhKDI1MSwgNTQsIDY0LCAwLjEpO1xuICAgIC0tYXF1YW1hcmluZTogcmdiYSgyMiwgMjQ0LCAyMDgsIDEpO1xuICAgIC0tc2Nob29sLWJ1cy15ZWxsb3c6IHJnYmEoMjQxLCAyMTEsIDIsIDEpO1xuICAgIC0tYmxhY2s6IHJnYmEoMiwgMSwgMCwgMSk7XG5cbiAgICAtLW5hdi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbXBlcmlhbC1yZWQpO1xuICAgIC0tY29udGVudC1jb250YWluZXItY29sb3I6IHJnYigyNDIsIDI0MiwgMjQyKTtcbiAgICAtLXByb2plY3QtY29udGFpbmVyLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cbiAgICAtLWJveC1zaGFkb3ctdmFsdWVzOiAtMC41cmVtIDAuOHJlbSAwLjVyZW07XG4gICAgLS1taW5vci1ib3gtc2hhZG93LXZhbHVlczogLTAuM3JlbSAwLjNyZW0gMC4zcmVtO1xuICAgIC0tZHJvcC1zaGFkb3ctY29sb3I6IHJnYigwLCAwLCAwLCAwLjQpO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KG1pbigxMHJlbSwgMTAwJSksIDJmcikgbWlubWF4KFxuICAgICAgICAgICAgbWluKDEwcmVtLCAxMDAlKSxcbiAgICAgICAgICAgIDVmclxuICAgICAgICApO1xuXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWdlbmVyYWwtZm9udCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1nZW5lcmFsLWZvbnQtc2l6ZSk7XG4gICAgbWFyZ2luOiAwO1xuXG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLm5hdi1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwcHgsIDAuNWZyKSk7XG5cbiAgICBnYXA6IDJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJhY2tncm91bmQtY29sb3IpO1xuICAgIHBhZGRpbmc6IDRyZW0gMXJlbTtcblxuICAgIC8qIG92ZXJmbG93OiBzY3JvbGw7ICovXG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLm5hdi10aXRsZS1jb250YWluZXIge1xuICAgIC8qIGdyaWQtY29sdW1uOiAxIC8gMzsgKi9cbiAgICBncmlkLXJvdzogMSAvIDI7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuXG4gICAgZm9udC1zaXplOiB2YXIoLS1uYXYtdGl0bGUtZm9udC1zaXplKTtcbn1cblxuLm5hdi10aXRsZSB7XG4gICAgLyogZ3JpZC1jb2x1bW46IDEgLyAyOyAqL1xufVxuXG4ubmV3LXByb2plY3QtYnV0dG9uIHtcbiAgICAvKiBncmlkLWNvbHVtbjogMyAvIDQ7ICovXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xufVxuXG4ubmF2LWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMXJlbTtcbiAgICBmb250LXNpemU6IHZhcigtLW5hdi1pbmZvLWZvbnQtc2l6ZSk7XG5cbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbiAgICAvKiBoZWlnaHQ6IDUwMHB4OyAqL1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5uYXYtcHJvamVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xufVxuXG4ubmF2LXByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xufVxuXG4ubmF2LXByb2plY3QtdGl0bGUtaWNvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xufVxuXG4ubmF2LXByb2plY3QtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5uYXYtcHJvamVjdC1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xufVxuXG4ubmF2LWxpc3QtdGl0bGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjJyZW07XG59XG5cbi5uYXYtbGlzdC10aXRsZS1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaWNvbi1kaW1lbnNpb24pO1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG59XG5cbi5uYXYtbGlzdC10aXRsZSB7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1jb250YWluZXItY29sb3IpO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHJlZDtcblxuICAgIGhlaWdodDogMTAwdmg7XG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKTsgKi9cbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSByZXBlYXQoYXV0by1maWxsLCAxZnIpO1xuXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1tdXRlLWNvbG9yKSwgMSk7ICovXG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgZ2FwOiAwLjVyZW07XG5cbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0LWNvbnRhaW5lci1jb2xvcik7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMpXG4gICAgICAgIHJnYmEodmFyKC0tZHJvcC1zaGFkb3ctY29sb3ItY29sb3IpLCAwLjUpO1xufVxuXG4ucHJvamVjdC10aXRsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tcHJvamVjdC1pbmZvLWZvbnQtc2l6ZSk7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG59XG5cbi5wcm9qZWN0LWluZm8tY29udGFpbmVyIHtcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcbn1cblxuLnByb2plY3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tcHJvamVjdC10aXRsZS1mb250LXNpemUpO1xufVxuXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XG59XG5cbi5uZXctcHJvamVjdC1saXN0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xufVxuXG4ubGlzdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAwLjVyZW07XG5cbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNlY29uZGFyeS1jb2xvciksIDAuNSk7ICovXG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1taW5vci1ib3gtc2hhZG93LXZhbHVlcykgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLmxpc3QtdGl0bGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmcjtcbiAgICBmb250LXNpemU6IHZhcigtLWxpc3QtaW5mby1mb250LXNpemUpO1xufVxuXG4ubGlzdC1pbmZvLWNvbnRhaW5lciB7XG59XG5cbi5saXN0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IHZhcigtLWxpc3QtdGl0bGUtZm9udC1zaXplKTtcbn1cblxuLmxpc3QtZGVzY3JpcHRpb24ge1xufVxuXG4ubmV3LWxpc3QtaXRlbS1idXR0b24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbn1cblxuLml0ZW0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciAxZnI7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zZWNvbmRhcnktY29sb3IpLCAwLjUpOyAqL1xufVxuXG4uaXRlbS1jaGVja2JveC1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLml0ZW0tY2hlY2tib3gge1xufVxuXG4vKiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgd2lkdGg6IDFlbTtcblxuICAgIGJhY2tncm91bmQ6ICMwYTBhMGE7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMC42NWVtO1xuICAgIGhlaWdodDogMC42NWVtO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tZm9ybS1jb250cm9sLWNvbG9yKTtcbn0gKi9cblxuLml0ZW0taW5mby1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBmb250LXNpemU6IHZhcigtLWl0ZW0taW5mby1mb250LXNpemUpO1xufVxuXG4uaXRlbS10aXRsZSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pdGVtLXRpdGxlLWZvbnQtc2l6ZSk7XG59XG5cbi5pdGVtLWRlc2NyaXB0aW9uIHtcbn1cblxuLml0ZW0tZHVlLWRhdGUge1xufVxuXG4uaXRlbS1yZW1vdmUtYnV0dG9uIHtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLG9DQUFvQztJQUNwQywrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtJQUM1QiwwQ0FBMEM7SUFDMUMsZ0RBQWdEO0lBQ2hELDREQUE0RDtJQUM1RCxrQ0FBa0M7SUFDbEMsb0NBQW9DO0lBQ3BDLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFD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Q3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyx5REFBeUQ7QUFDN0Q7O0FBRUE7SUFDSSxrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7O0FBRUg7SUFDSSxrQkFBa0I7SUFDbEIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQrQWx0ZXJuYXRlczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZmFtaWx5PU1vbnRzZXJyYXQ6aXRhbCx3Z2h0QDAsMTAwLi45MDA7MSwxMDAuLjkwMCZmYW1pbHk9Um9ib3RvK01vbm86aXRhbCx3Z2h0QDAsMTAwLi43MDA7MSwxMDAuLjcwMCZmYW1pbHk9Um9ib3RvK1NsYWI6d2dodEAxMDAuLjkwMCZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZmYW1pbHk9VWJ1bnR1Oml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tbXV0ZS1jb2xvcjogcmdiKDI1NSwgMTI3LCA4MCwgMC4xKTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6IDI1MywgMTA3LCA2MjtcXG4gICAgLS1oaWdobGlnaHQtY29sb3I6IDE0NywgMjUyLCAyMTc7XFxuICAgIC0tZGFyay1zaGFkb3ctY29sb3I6IDAsIDAsIDA7XFxuICAgIC0tYm94LXNoYWRvdy12YWx1ZXM6IDAuNXJlbSAwLjhyZW0gMC4wNXJlbTtcXG4gICAgLS1taW5vci1ib3gtc2hhZG93LXZhbHVlczogMC4zcmVtIDAuM3JlbSAwLjA1cmVtO1xcbiAgICAtLWdlbmVyYWwtZm9udDogXFxcIk1vbnRzZXJyYXRcXFwiLCBcXFwiUm9ib3RvIENvbmRlbnNlZFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIC0tdGl0bGUtZm9udDogXFxcIlJvYm90byBTbGFiXFxcIiwgc2VyaWY7XFxuICAgIC0tYmFzZS1mb250LWNvbG9yOiByZ2IoMCwgMCwgMCwgMC44KTtcXG4gICAgLS1iYXNlLWZvbnQtc2l6ZTogMXZoO1xcbiAgICAtLXRpdGxlLWZvbnQtc2l6ZTogNHJlbTtcXG4gICAgLS1oZWFkZXItZm9udC1zaXplOiAycmVtO1xcbiAgICAtLWNvbnRlbnQtZm9udC1zaXplOiAxcmVtO1xcbiAgICAtLWJhc2UtbGluZS1oZWlnaHQ6IDEuMjU7XFxuICAgIC0tY29udGVudC1saW5lLWhlaWdodDogMjtcXG5cXG4gICAgZm9udC1zaXplOiB2YXIoLS1iYXNlLWZvbnQtc2l6ZSk7XFxuXFxuICAgIC0taXRlbS10aXRsZS1mb250LXNpemU6IDEuNXJlbTtcXG4gICAgLS1pdGVtLWluZm8tZm9udC1zaXplOiAxcmVtO1xcbiAgICAtLWxpc3QtdGl0bGUtZm9udC1zaXplOiAycmVtO1xcbiAgICAtLWxpc3QtaW5mby1mb250LXNpemU6IDFyZW07XFxuICAgIC0tcHJvamVjdC10aXRsZS1mb250LXNpemU6IDJyZW07XFxuICAgIC0tcHJvamVjdC1pbmZvLWZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAtLW5hdi10aXRsZS1mb250LXNpemU6IDEuNXJlbTtcXG4gICAgLS1uYXYtaW5mby1mb250LXNpemU6IDEuMjVyZW07XFxuXFxuICAgIC0tbmF2LWljb24tZGltZW5zaW9uOiAycmVtO1xcblxcbiAgICAtLWRhcmstZ3JlZW46IHJnYmEoNCwgNDIsIDQzLCAxKTtcXG4gICAgLS1tb29uc3RvbmU6IHJnYmEoOTQsIDE3NywgMTkxLCAxKTtcXG4gICAgLS1saWdodC1jeWFuOiByZ2JhKDIwNSwgMjM3LCAyNDYsIDEpO1xcbiAgICAtLW9yYW5nZS1jcmF5b2xhOiByZ2JhKDIzOSwgMTIzLCA2OSwgMSk7XFxuICAgIC0tY2hpbGktcmVkOiByZ2JhKDIxNiwgNzEsIDM5LCAxKTtcXG5cXG4gICAgLS1sYXBpcy1sYXp1bGk6IHJnYmEoMzUsIDg3LCAxMzcsIDEpO1xcbiAgICAtLWltcGVyaWFsLXJlZDogcmdiYSgyNTEsIDU0LCA2NCwgMC4xKTtcXG4gICAgLS1hcXVhbWFyaW5lOiByZ2JhKDIyLCAyNDQsIDIwOCwgMSk7XFxuICAgIC0tc2Nob29sLWJ1cy15ZWxsb3c6IHJnYmEoMjQxLCAyMTEsIDIsIDEpO1xcbiAgICAtLWJsYWNrOiByZ2JhKDIsIDEsIDAsIDEpO1xcblxcbiAgICAtLW5hdi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbXBlcmlhbC1yZWQpO1xcbiAgICAtLWNvbnRlbnQtY29udGFpbmVyLWNvbG9yOiByZ2IoMjQyLCAyNDIsIDI0Mik7XFxuICAgIC0tcHJvamVjdC1jb250YWluZXItY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG5cXG4gICAgLS1ib3gtc2hhZG93LXZhbHVlczogLTAuNXJlbSAwLjhyZW0gMC41cmVtO1xcbiAgICAtLW1pbm9yLWJveC1zaGFkb3ctdmFsdWVzOiAtMC4zcmVtIDAuM3JlbSAwLjNyZW07XFxuICAgIC0tZHJvcC1zaGFkb3ctY29sb3I6IHJnYigwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgobWluKDEwcmVtLCAxMDAlKSwgMmZyKSBtaW5tYXgoXFxuICAgICAgICAgICAgbWluKDEwcmVtLCAxMDAlKSxcXG4gICAgICAgICAgICA1ZnJcXG4gICAgICAgICk7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1nZW5lcmFsLWZvbnQpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWdlbmVyYWwtZm9udC1zaXplKTtcXG4gICAgbWFyZ2luOiAwO1xcblxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubmF2LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwcHgsIDAuNWZyKSk7XFxuXFxuICAgIGdhcDogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiA0cmVtIDFyZW07XFxuXFxuICAgIC8qIG92ZXJmbG93OiBzY3JvbGw7ICovXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm5hdi10aXRsZS1jb250YWluZXIge1xcbiAgICAvKiBncmlkLWNvbHVtbjogMSAvIDM7ICovXFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcblxcbiAgICBmb250LXNpemU6IHZhcigtLW5hdi10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4ubmF2LXRpdGxlIHtcXG4gICAgLyogZ3JpZC1jb2x1bW46IDEgLyAyOyAqL1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9uIHtcXG4gICAgLyogZ3JpZC1jb2x1bW46IDMgLyA0OyAqL1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvcGx1cy5zdmcpO1xcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbi5uYXYtY29udGVudC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tbmF2LWluZm8tZm9udC1zaXplKTtcXG5cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxuICAgIC8qIGhlaWdodDogNTAwcHg7ICovXFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5uYXYtcHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxufVxcblxcbi5uYXYtcHJvamVjdC10aXRsZS1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ubmF2LXByb2plY3QtdGl0bGUtaWNvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9pY29ucy9kb3RzLWhvcml6b250YWwtY2lyY2xlLW91dGxpbmUuc3ZnKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaWNvbi1kaW1lbnNpb24pO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4ubmF2LXByb2plY3QtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubmF2LXByb2plY3QtY29udGVudC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxufVxcblxcbi5uYXYtbGlzdC10aXRsZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuMnJlbTtcXG59XFxuXFxuLm5hdi1saXN0LXRpdGxlLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvbWVudS1yaWdodC1vdXRsaW5lLnN2Zyk7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLm5hdi1saXN0LXRpdGxlIHtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtY29udGFpbmVyLWNvbG9yKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmVkO1xcblxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAvKiBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LXZhbHVlcykgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpOyAqL1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gcmVwZWF0KGF1dG8tZmlsbCwgMWZyKTtcXG5cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1tdXRlLWNvbG9yKSwgMSk7ICovXFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgZ2FwOiAwLjVyZW07XFxuXFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdC1jb250YWluZXItY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LXZhbHVlcylcXG4gICAgICAgIHJnYmEodmFyKC0tZHJvcC1zaGFkb3ctY29sb3ItY29sb3IpLCAwLjUpO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnI7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcHJvamVjdC1pbmZvLWZvbnQtc2l6ZSk7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcHJvamVjdC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxufVxcblxcbi5uZXctcHJvamVjdC1saXN0LWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9pY29ucy9wbHVzLnN2Zyk7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSwgMC41KTsgKi9cXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tbWlub3ItYm94LXNoYWRvdy12YWx1ZXMpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4ubGlzdC10aXRsZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnI7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tbGlzdC1pbmZvLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5saXN0LWluZm8tY29udGFpbmVyIHtcXG59XFxuXFxuLmxpc3QtdGl0bGUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWxpc3QtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLmxpc3QtZGVzY3JpcHRpb24ge1xcbn1cXG5cXG4ubmV3LWxpc3QtaXRlbS1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvcGx1cy5zdmcpO1xcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbi5pdGVtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciAxZnI7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSwgMC41KTsgKi9cXG59XFxuXFxuLml0ZW0tY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLml0ZW0tY2hlY2tib3gge1xcbn1cXG5cXG4vKiBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gICAgaGVpZ2h0OiAxZW07XFxuICAgIHdpZHRoOiAxZW07XFxuXFxuICAgIGJhY2tncm91bmQ6ICMwYTBhMGE7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAwLjY1ZW07XFxuICAgIGhlaWdodDogMC42NWVtO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tZm9ybS1jb250cm9sLWNvbG9yKTtcXG59ICovXFxuXFxuLml0ZW0taW5mby1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taXRlbS1pbmZvLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5pdGVtLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1pdGVtLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5pdGVtLWRlc2NyaXB0aW9uIHtcXG59XFxuXFxuLml0ZW0tZHVlLWRhdGUge1xcbn1cXG5cXG4uaXRlbS1yZW1vdmUtYnV0dG9uIHtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgKiBhcyBHZW5lcmF0ZUVsZW1lbnQgZnJvbSBcIi4vR2VuZXJhdGVQYWdlRWxlbWVudC5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGVudENvbnRhaW5lcih1c2VyKSB7XG4gICAgbGV0IG5hdkNvbnRhaW5lcjtcblxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgW1wiY29udGVudC1jb250YWluZXJcIl0sXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIGNsZWFyQ29udGVudEFyZWEoKSB7XG4gICAgICAgIHdoaWxlIChjb250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGVudENvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdC5wcm9qZWN0VmlzdWFsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldENvbnRlbnRDb250YWluZXIoKSB7XG4gICAgICAgIGNsZWFyQ29udGVudEFyZWEoKTtcbiAgICAgICAgY2hhbmdlUHJvamVjdCh1c2VyLnByb2plY3RzWzBdKTtcbiAgICAgICAgLy9uYXZDb250YWluZXIucmVzZXROYXZWaXN1YWwoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVOYXZDb250YWluZXIobmV3TmF2Q29udGFpbmVyKSB7XG4gICAgICAgIG5hdkNvbnRhaW5lciA9IG5ld05hdkNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLFxuICAgICAgICBjbGVhckNvbnRlbnRBcmVhLFxuICAgICAgICBjaGFuZ2VQcm9qZWN0LFxuICAgICAgICByZXNldENvbnRlbnRDb250YWluZXIsXG4gICAgICAgIHVwZGF0ZU5hdkNvbnRhaW5lcixcbiAgICB9O1xufVxuIiwiaW1wb3J0ICogYXMgVGFzayBmcm9tIFwiLi9UYXNrLmpzXCI7XG5pbXBvcnQgKiBhcyBMaXN0IGZyb20gXCIuL0xpc3QuanNcIjtcbmltcG9ydCAqIGFzIFByb2plY3QgZnJvbSBcIi4vUHJvamVjdC5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlzdHMoKSB7XG4gICAgbGV0IHByb2plY3RzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDM7IGkrKykge1xuICAgICAgICBsZXQgbGlzdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCA0OyBqKyspIHtcbiAgICAgICAgICAgIGxldCBsaXN0SXRlbXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAxOyBrIDwgNzsgaysrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0l0ZW0gPSBUYXNrLmNyZWF0ZU5ld1Rhc2soXG4gICAgICAgICAgICAgICAgICAgIGBJdGVtIHRpdGxlICR7aX0tJHtqfS0ke2t9YCxcbiAgICAgICAgICAgICAgICAgICAgYEl0ZW0gZGVzY3JpcHRpb24gJHtpfS0ke2p9LSR7a31gLFxuICAgICAgICAgICAgICAgICAgICBgSXRlbSBkdWUgZGF0ZSAke2l9LSR7an0tJHtrfWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGxpc3RJdGVtcy5wdXNoKG5ld0l0ZW0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbmV3TGlzdCA9IExpc3QuY3JlYXRlTGlzdChcbiAgICAgICAgICAgICAgICBgTGlzdCB0aXRsZSAke2l9LSR7an1gLFxuICAgICAgICAgICAgICAgIGBMaXN0IGRlc2NyaXB0aW9uICR7aX0tJHtqfWAsXG4gICAgICAgICAgICAgICAgbGlzdEl0ZW1zXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGlzdHMucHVzaChuZXdMaXN0KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IFByb2plY3QuY3JlYXRlUHJvamVjdChcbiAgICAgICAgICAgIGBQcm9qZWN0IHRpdGxlICR7aX1gLFxuICAgICAgICAgICAgYFByb2plY3QgZGVzY3JpcHRpb24gJHtpfWAsXG4gICAgICAgICAgICBsaXN0c1xuICAgICAgICApO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9qZWN0cztcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgIGVsZW1lbnRUeXBlLFxuICAgIGVsZW1lbnRDbGFzc2VzID0ge30sXG4gICAgcGFyZW50RWxlbWVudCA9IG51bGwsXG4gICAgZWxlbWVudFRleHQgPSBudWxsXG4pIHtcbiAgICBpZiAoZWxlbWVudFR5cGUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcblxuICAgIGlmIChlbGVtZW50Q2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGVsZW1lbnRDbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICAgICAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50VGV4dCAhPSBudWxsKSB7XG4gICAgICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50VGV4dDtcbiAgICB9XG5cbiAgICBpZiAocGFyZW50RWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4iLCJpbXBvcnQgKiBhcyBUYXNrIGZyb20gXCIuL1Rhc2suanNcIjtcbmltcG9ydCAqIGFzIEdlbmVyYXRlRWxlbWVudCBmcm9tIFwiLi9HZW5lcmF0ZVBhZ2VFbGVtZW50LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgbGlzdEl0ZW1zID0gW10pIHtcbiAgICBmdW5jdGlvbiBhZGRMaXN0SXRlbSgpIHtcbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBwcm9tcHQoXCJJdGVtIG5hbWU/XCIpO1xuICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBwcm9tcHQoXCJJdGVtIGRlc2NyaXB0aW9uP1wiKTtcbiAgICAgICAgY29uc3QgaXRlbUR1ZURhdGUgPSBwcm9tcHQoXCJJdGVtIGR1ZSBkYXRlP1wiKTtcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IFRhc2suY3JlYXRlTmV3VGFzayhcbiAgICAgICAgICAgIGl0ZW1OYW1lLFxuICAgICAgICAgICAgaXRlbURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaXRlbUR1ZURhdGVcbiAgICAgICAgKTtcbiAgICAgICAgbGlzdEl0ZW1zLnB1c2gobmV3SXRlbSk7XG4gICAgICAgIHJldHVybiBuZXdJdGVtO1xuICAgIH1cblxuICAgIGNvbnN0IGxpc3RWaXN1YWwgPSBjcmVhdGVMaXN0VmlzdWFsKFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGxpc3RJdGVtcyxcbiAgICAgICAgYWRkTGlzdEl0ZW1cbiAgICApO1xuXG4gICAgY29uc3QgbGlzdE5hdlZpc3VhbCA9IGNyZWF0ZUxpc3ROYXZWaXN1YWwodGl0bGUpO1xuXG4gICAgbGV0IGNvbnRlbnRDb250YWluZXI7XG4gICAgbGV0IG5hdkNvbnRhaW5lcjtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU5hdkNvbnRhaW5lcihuZXdOYXZDb250YWluZXIpIHtcbiAgICAgICAgbmF2Q29udGFpbmVyID0gbmV3TmF2Q29udGFpbmVyO1xuICAgICAgICBsaXN0SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS51cGRhdGVOYXZDb250YWluZXIobmV3TmF2Q29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29udGVudENvbnRhaW5lcihuZXdDb250ZW50Q29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIgPSBuZXdDb250ZW50Q29udGFpbmVyO1xuICAgICAgICBsaXN0SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS51cGRhdGVDb250ZW50Q29udGFpbmVyKG5ld0NvbnRlbnRDb250YWluZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGxpc3RJdGVtcyxcbiAgICAgICAgbGlzdFZpc3VhbCxcbiAgICAgICAgbGlzdE5hdlZpc3VhbCxcbiAgICAgICAgYWRkTGlzdEl0ZW0sXG4gICAgICAgIHVwZGF0ZU5hdkNvbnRhaW5lcixcbiAgICAgICAgdXBkYXRlQ29udGVudENvbnRhaW5lcixcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlzdFZpc3VhbCh0aXRsZSwgZGVzY3JpcHRpb24sIGxpc3RJdGVtcywgYWRkTGlzdEl0ZW0pIHtcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXCJkaXZcIiwgW1xuICAgICAgICBcImxpc3QtY29udGFpbmVyXCIsXG4gICAgXSk7XG5cbiAgICBjb25zdCBsaXN0VGl0bGVDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgW1wibGlzdC10aXRsZS1jb250YWluZXJcIl0sXG4gICAgICAgIGxpc3RDb250YWluZXJcbiAgICApO1xuXG4gICAgY29uc3QgbGlzdEluZm9Db250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgW1wibGlzdC1pbmZvLWNvbnRhaW5lclwiXSxcbiAgICAgICAgbGlzdFRpdGxlQ29udGFpbmVyXG4gICAgKTtcblxuICAgIGNvbnN0IGxpc3RUaXRsZSA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBbXCJsaXN0LXRpdGxlXCJdLFxuICAgICAgICBsaXN0SW5mb0NvbnRhaW5lcixcbiAgICAgICAgdGl0bGVcbiAgICApO1xuXG4gICAgY29uc3QgbGlzdERlc2NyaXB0aW9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFtcImxpc3QtZGVzY3JpcHRpb25cIl0sXG4gICAgICAgIGxpc3RJbmZvQ29udGFpbmVyLFxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICk7XG5cbiAgICBjb25zdCBhZGROZXdJdGVtQnV0dG9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFtcIm5ldy1saXN0LWl0ZW0tYnV0dG9uXCJdLFxuICAgICAgICBsaXN0VGl0bGVDb250YWluZXJcbiAgICApO1xuICAgIGFkZE5ld0l0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IGFkZExpc3RJdGVtKCk7XG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3SXRlbS5pdGVtVmlzdWFsKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbW92ZUxpc3RCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgW1wiaXRlbS1yZW1vdmUtYnV0dG9uXCJdLFxuICAgICAgICBsaXN0Q29udGFpbmVyLFxuICAgICAgICBcImRlbGV0ZSBsaXN0XCJcbiAgICApO1xuICAgIHJlbW92ZUxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGlzdENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgLy9UT0RPOiBsaW5rIHRoaXMgdG8gYWxzbyByZW1vdmUgdGhlIG5hdiBiYXIgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBsaXN0XG4gICAgfSk7XG5cbiAgICBhcHBlbmRXaG9sZUl0ZW1MaXN0KGxpc3RDb250YWluZXIsIGxpc3RJdGVtcyk7XG5cbiAgICByZXR1cm4gbGlzdENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFdob2xlSXRlbUxpc3QobGlzdENvbnRhaW5lciwgbGlzdEl0ZW1zKSB7XG4gICAgbGlzdEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtLml0ZW1WaXN1YWwpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlzdE5hdlZpc3VhbCh0aXRsZSkge1xuICAgIGNvbnN0IGxpc3RUaXRsZUNvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFwiZGl2XCIsIFtcbiAgICAgICAgXCJuYXYtbGlzdC10aXRsZS1jb250YWluZXJcIixcbiAgICBdKTtcblxuICAgIGNvbnN0IGxpc3RUaXRsZUljb24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgW1wibmF2LWxpc3QtdGl0bGUtaWNvblwiXSxcbiAgICAgICAgbGlzdFRpdGxlQ29udGFpbmVyXG4gICAgKTtcblxuICAgIGNvbnN0IGxpc3RUaXRsZURpdiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBbXCJuYXYtbGlzdC10aXRsZVwiXSxcbiAgICAgICAgbGlzdFRpdGxlQ29udGFpbmVyLFxuICAgICAgICB0aXRsZVxuICAgICk7XG5cbiAgICByZXR1cm4gbGlzdFRpdGxlQ29udGFpbmVyO1xufVxuIiwiaW1wb3J0ICogYXMgR2VuZXJhdGVFbGVtZW50IGZyb20gXCIuL0dlbmVyYXRlUGFnZUVsZW1lbnQuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5hdmlnYXRpb25Db250YWluZXIodXNlcikge1xuICAgIGxldCBjb250ZW50Q29udGFpbmVyO1xuXG4gICAgLy9DYW4gdGhpcyBzdGlsbCBiZSBjb25zdCBpZiB3ZSdyZSBnb2luZyB0byB1cGRhdGUgaXQ/XG4gICAgbGV0IG5hdlZpc3VhbCA9IGNyZWF0ZU5hdmlnYXRpb25WaXN1YWwoXG4gICAgICAgIHVzZXIsXG4gICAgICAgIHJlc2V0TmF2Q29udGFpbmVyLFxuICAgICAgICBjb250ZW50Q29udGFpbmVyXG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIHJlc2V0TmF2Q29udGFpbmVyKCkge1xuICAgICAgICBuYXZWaXN1YWwucmVtb3ZlKCk7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIucmVzZXRDb250ZW50Q29udGFpbmVyKCk7XG5cbiAgICAgICAgbmF2VmlzdWFsID0gTmF2aWdhdGlvblZpc3VhbC5jcmVhdGUoXG4gICAgICAgICAgICB1c2VyLFxuICAgICAgICAgICAgcmVzZXROYXZDb250YWluZXIsXG4gICAgICAgICAgICBjb250ZW50Q29udGFpbmVyXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29udGVudENvbnRhaW5lcihuZXdDb250ZW50Q29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIgPSBuZXdDb250ZW50Q29udGFpbmVyO1xuICAgIH1cblxuICAgIHJldHVybiB7IG5hdlZpc3VhbCwgcmVzZXROYXZDb250YWluZXIsIHVwZGF0ZUNvbnRlbnRDb250YWluZXIgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5hdmlnYXRpb25WaXN1YWwoXG4gICAgdXNlcixcbiAgICByZXNldE5hdkNvbnRhaW5lcixcbiAgICBjb250ZW50Q29udGFpbmVyXG4pIHtcbiAgICBjb25zdCBuYXZDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgW1wibmF2LWNvbnRhaW5lclwiXSxcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbiAgICApO1xuXG4gICAgY29uc3QgbmF2VGl0bGVDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgW1wibmF2LXRpdGxlLWNvbnRhaW5lclwiXSxcbiAgICAgICAgbmF2Q29udGFpbmVyXG4gICAgKTtcblxuICAgIGNvbnN0IG5hdlRpdGxlID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFtcIm5hdi10aXRsZVwiXSxcbiAgICAgICAgbmF2VGl0bGVDb250YWluZXIsXG4gICAgICAgIFwiTXkgUHJvamVjdHNcIlxuICAgICk7XG5cbiAgICBjb25zdCBhZGROZXdQcm9qZWN0QnV0dG9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFtcIm5ldy1wcm9qZWN0LWJ1dHRvblwiXSxcbiAgICAgICAgbmF2VGl0bGVDb250YWluZXJcbiAgICApO1xuICAgIC8vVE9ETzogVGhpcyBhY3R1YWxseSBuZWVkcyB0byBhZGQgYSBuZXcgcHJvamVjdCB0byB0aGUgbmF2IGFuZCB0aGUgd29ya3NwYWNlXG4gICAgYWRkTmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB1c2VyLmFkZFByb2plY3QoKTtcbiAgICAgICAgY29uc29sZS5sb2codXNlci5wcm9qZWN0cyk7XG4gICAgICAgIHJlc2V0TmF2Q29udGFpbmVyKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBuYXZDb250ZW50Q29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFtcIm5hdi1jb250ZW50LWNvbnRhaW5lclwiXSxcbiAgICAgICAgbmF2Q29udGFpbmVyXG4gICAgKTtcblxuICAgIHVzZXIucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAvKiBjb25zdCBuYXZQcm9qZWN0VmlzdWFsID0gUHJvamVjdE5hdlZpc3VhbC5jcmVhdGUoXG4gICAgICAgICAgICBwcm9qZWN0LnRpdGxlLFxuICAgICAgICAgICAgcHJvamVjdC5saXN0c1xuICAgICAgICApO1xuICAgICAgICBuYXZDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdlByb2plY3RWaXN1YWwpOyAqL1xuXG4gICAgICAgIG5hdkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdC5wcm9qZWN0TmF2VmlzdWFsKTtcbiAgICB9KTtcblxuICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZDb250ZW50Q29udGFpbmVyKTtcblxuICAgIHJldHVybiBuYXZDb250YWluZXI7XG59XG4iLCJpbXBvcnQgKiBhcyBHZW5lcmF0ZUxpc3RzIGZyb20gXCIuL0dlbmVyYXRlTGlzdHMuanNcIjtcbmltcG9ydCAqIGFzIE5hdmlnYXRpb24gZnJvbSBcIi4vTmF2aWdhdGlvbi5qc1wiO1xuaW1wb3J0ICogYXMgR2VuZXJhdGVFbGVtZW50IGZyb20gXCIuL0dlbmVyYXRlUGFnZUVsZW1lbnQuanNcIjtcbmltcG9ydCAqIGFzIFVzZXIgZnJvbSBcIi4vVXNlci5qc1wiO1xuaW1wb3J0ICogYXMgQ29udGVudENvbnRhaW5lciBmcm9tIFwiLi9Db250ZW50LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVBhZ2UoKSB7XG4gICAgY29uc3QgZG9jdW1lbnRCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgICAvL0p1c3QgcmVhZGluZyBmcm9tIHVzZXIgc3RvcmFnZS5cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IEdlbmVyYXRlTGlzdHMuY3JlYXRlTGlzdHMoKTtcblxuICAgIGNvbnN0IG5ld1VzZXIgPSBVc2VyLmNyZWF0ZVVzZXIocHJvamVjdExpc3QpO1xuXG4gICAgLy9UT0RPOiBkbyBJIG5lZWQgdG8gc2VuZCBjb250ZW50IGNvbnRhaW5lciBvYmplY3QgdG8gbmF2IHNvIHRoYXQgbmF2IGNhbiBoYXZlIGEgYnV0dG9uIHRvIGNsZWFyIGNvbnRlbnQgYXJlYT9cbiAgICAvL1RPRE86IERvIGJvdGggdGhlIGNvbnRlbnQgY29udGFpbmVyIGFuZCB0aGUgbmF2aWdhdGlvbiBuZWVkIHRvIGJlIGNyZWF0ZWQgYXMgdGhlaXIgb3duIGVudGl0aWVzIGFuZCB0aGVuIGFkZGVkIHRvIHRoZSBtYWluIGJvZHkgaGVyZT9cbiAgICAvL0RvZXMgdGhhdCBhbGxvdyBmb3IgYnV0dG9uIGZ1bmN0aW9ucyB0byBiZSBhZGRlZCBhbmQgbm90IGhhdmUgdG8gY2hvb3NlIHdoaWNoIGVsZW1lbnQgaXMgZ2VuZXJhdGVkIGZpcnN0PyBDYW4gZmVlZCBvbmUgdG8gdGhlIG90aGVyIHdpdGhvdXQgd29ycnlpbmcgYWJvdXQgdGhlIG9yZGVyIHRoZXknbGwgYmUgc2hvd24gb24gdGhlIHBhZ2UuXG5cbiAgICBjb25zdCBuZXdOYXZDb250YWluZXIgPSBOYXZpZ2F0aW9uLmNyZWF0ZU5hdmlnYXRpb25Db250YWluZXIobmV3VXNlcik7XG4gICAgLyogZG9jdW1lbnRCb2R5LmFwcGVuZENoaWxkKG5ld05hdkNvbnRhaW5lci5uYXZWaXN1YWwpOyAqL1xuXG4gICAgY29uc3QgbmV3Q29udGVudENvbnRhaW5lciA9XG4gICAgICAgIENvbnRlbnRDb250YWluZXIuY3JlYXRlQ29udGVudENvbnRhaW5lcihuZXdVc2VyKTtcblxuICAgIG5ld0NvbnRlbnRDb250YWluZXIudXBkYXRlTmF2Q29udGFpbmVyKG5ld05hdkNvbnRhaW5lcik7XG4gICAgbmV3TmF2Q29udGFpbmVyLnVwZGF0ZUNvbnRlbnRDb250YWluZXIobmV3Q29udGVudENvbnRhaW5lcik7XG5cbiAgICBuZXdDb250ZW50Q29udGFpbmVyLnJlc2V0Q29udGVudENvbnRhaW5lcigpO1xuXG4gICAgLy9PcGVuIGVpdGhlciBubyBwcm9qZWN0IG9yIGdlbmVyaWMgcHJvamVjdFxuICAgIC8vbmV3Q29udGVudENvbnRhaW5lci5jaGFuZ2VQcm9qZWN0KG5ld1VzZXIucHJvamVjdHNbMF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJQYWdlKCkge1xuICAgIGNvbnN0IGRvY3VtZW50Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gICAgd2hpbGUgKGRvY3VtZW50Qm9keS5maXJzdENoaWxkKSB7XG4gICAgICAgIGRvY3VtZW50Qm9keS5yZW1vdmVDaGlsZChkb2N1bWVudEJvZHkubGFzdENoaWxkKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFBhZ2UoKSB7XG4gICAgY2xlYXJQYWdlKCk7XG4gICAgZ2VuZXJhdGVQYWdlKCk7XG59XG4iLCIvKiBleHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnByb2plY3RUYXNrcyA9IFtdO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxufVxuICovXG5cbmltcG9ydCAqIGFzIExpc3QgZnJvbSBcIi4vTGlzdC5qc1wiO1xuXG4vL1RPRE86IERvIGkgbmVlZCBhIHByb2plY3QgY29udGFpbmVyIGZvciBob2xkaW5nIGFuZCBjcmVhdGluZyBuZXcgcHJvamVjdHM/XG4vL1Byb2JhYmx5Li4uIEEgVXNlciBtb2R1bGU/IFByb2JhYmx5Li4uXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgbGlzdHMgPSBbXSkge1xuICAgIGZ1bmN0aW9uIGFkZExpc3QoKSB7XG4gICAgICAgIGNvbnN0IGxpc3ROYW1lID0gcHJvbXB0KFwiSXRlbSBuYW1lP1wiKTtcbiAgICAgICAgY29uc3QgbGlzdERlc2NyaXB0aW9uID0gcHJvbXB0KFwiSXRlbSBkZXNjcmlwdGlvbj9cIik7XG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBMaXN0LmNyZWF0ZUxpc3QobGlzdE5hbWUsIGxpc3REZXNjcmlwdGlvbik7XG4gICAgICAgIGxpc3RzLnB1c2gobmV3TGlzdCk7XG4gICAgICAgIHJldHVybiBuZXdMaXN0O1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RWaXN1YWwgPSBjcmVhdGVQcm9qZWN0VmlzdWFsKFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGxpc3RzLFxuICAgICAgICBhZGRMaXN0LFxuICAgICAgICByZWxvYWROYXZDb250YWluZXIsXG4gICAgICAgIHJlbG9hZENvbnRlbnRDb250YWluZXJcbiAgICApO1xuXG4gICAgY29uc3QgcHJvamVjdE5hdlZpc3VhbCA9IGNyZWF0ZVByb2plY3ROYXZWaXN1YWwoXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBsaXN0cyxcbiAgICAgICAgcmVsb2FkTmF2Q29udGFpbmVyLFxuICAgICAgICByZWxvYWRDb250ZW50Q29udGFpbmVyXG4gICAgKTtcblxuICAgIGxldCBjb250ZW50Q29udGFpbmVyO1xuICAgIGxldCBuYXZDb250YWluZXI7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVOYXZDb250YWluZXIobmV3TmF2Q29udGFpbmVyKSB7XG4gICAgICAgIG5hdkNvbnRhaW5lciA9IG5ld05hdkNvbnRhaW5lcjtcbiAgICAgICAgbGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICAgICAgbGlzdC51cGRhdGVOYXZDb250YWluZXIobmV3TmF2Q29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29udGVudENvbnRhaW5lcihuZXdDb250ZW50Q29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIgPSBuZXdDb250ZW50Q29udGFpbmVyO1xuICAgICAgICBsaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgICAgICBsaXN0LnVwZGF0ZUNvbnRlbnRDb250YWluZXIobmV3Q29udGVudENvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbG9hZENvbnRlbnRDb250YWluZXIoKSB7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIucmVzZXRDb250ZW50Q29udGFpbmVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVsb2FkTmF2Q29udGFpbmVyKCkge1xuICAgICAgICBuYXZDb250YWluZXIucmVzZXROYXZDb250YWluZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGxpc3RzLFxuICAgICAgICBwcm9qZWN0VmlzdWFsLFxuICAgICAgICBwcm9qZWN0TmF2VmlzdWFsLFxuICAgICAgICB1cGRhdGVOYXZDb250YWluZXIsXG4gICAgICAgIHVwZGF0ZUNvbnRlbnRDb250YWluZXIsXG4gICAgfTtcbn1cblxuaW1wb3J0ICogYXMgR2VuZXJhdGVFbGVtZW50IGZyb20gXCIuL0dlbmVyYXRlUGFnZUVsZW1lbnQuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RWaXN1YWwoXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgbGlzdHMsXG4gICAgYWRkTGlzdCxcbiAgICBuYXZDb250YWluZXIgPSBudWxsLFxuICAgIGNvbnRlbnRDb250YWluZXIgPSBudWxsXG4pIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXCJkaXZcIiwgW1xuICAgICAgICBcInByb2plY3QtY29udGFpbmVyXCIsXG4gICAgXSk7XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGVDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgW1wicHJvamVjdC10aXRsZS1jb250YWluZXJcIl0sXG4gICAgICAgIHByb2plY3RDb250YWluZXJcbiAgICApO1xuXG4gICAgY29uc3QgcHJvamVjdEluZm9Db250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgW1wicHJvamVjdC1pbmZvLWNvbnRhaW5lclwiXSxcbiAgICAgICAgcHJvamVjdFRpdGxlQ29udGFpbmVyXG4gICAgKTtcblxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBbXCJwcm9qZWN0LXRpdGxlXCJdLFxuICAgICAgICBwcm9qZWN0SW5mb0NvbnRhaW5lcixcbiAgICAgICAgdGl0bGVcbiAgICApO1xuICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBbXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCJdLFxuICAgICAgICBwcm9qZWN0SW5mb0NvbnRhaW5lcixcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICApO1xuXG4gICAgY29uc3QgY3JlYXRlTmV3TGlzdEJ1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBbXCJuZXctcHJvamVjdC1saXN0LWJ1dHRvblwiXSxcbiAgICAgICAgcHJvamVjdFRpdGxlQ29udGFpbmVyXG4gICAgKTtcblxuICAgIGNyZWF0ZU5ld0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IGFkZExpc3QoKTtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5yZXNldENvbnRlbnRDb250YWluZXIoKTtcbiAgICAgICAgLy9wcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0xpc3QubGlzdFZpc3VhbCk7XG5cbiAgICAgICAgLyogR2VuZXJhdGVQYWdlLnJlc2V0UGFnZSgpOyAqL1xuXG4gICAgICAgIC8vVE9ETzogYWRkIGV2ZW50IGZvciBjcmVhdGluZyBhIG5ldyBsaXN0IGRpdiBhbmQgYWNjb21wYW55aW5nIGxpc3RcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3RCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgW1wiaXRlbS1yZW1vdmUtYnV0dG9uXCJdLFxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLFxuICAgICAgICBcImRlbGV0ZSBwcm9qZWN0XCJcbiAgICApO1xuICAgIHJlbW92ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgLy9UT0RPOiBsaW5rIHRoaXMgdG8gYWxzbyByZW1vdmUgdGhlIG5hdiBiYXIgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBsaXN0XG4gICAgfSk7XG5cbiAgICBhcHBlbmRBbGxMaXN0c1RvUHJvamVjdChwcm9qZWN0Q29udGFpbmVyLCBsaXN0cyk7XG5cbiAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gYXBwZW5kQWxsTGlzdHNUb1Byb2plY3QocHJvamVjdENvbnRhaW5lciwgbGlzdHMpIHtcbiAgICBsaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdC5saXN0VmlzdWFsKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3ROYXZWaXN1YWwoXG4gICAgdGl0bGUsXG4gICAgbGlzdHMsXG4gICAgbmF2Q29udGFpbmVyLFxuICAgIGNvbnRlbnRDb250YWluZXJcbikge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcImRpdlwiLCBbXG4gICAgICAgIFwibmF2LXByb2plY3QtY29udGFpbmVyXCIsXG4gICAgXSk7XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGVDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgW1wibmF2LXByb2plY3QtdGl0bGUtY29udGFpbmVyXCJdLFxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyXG4gICAgKTtcblxuICAgIGNvbnN0IHByb2plY3RUaXRsZUljb24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgW1wibmF2LXByb2plY3QtdGl0bGUtaWNvblwiXSxcbiAgICAgICAgcHJvamVjdFRpdGxlQ29udGFpbmVyXG4gICAgKTtcblxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBbXCJuYXYtcHJvamVjdC10aXRsZVwiXSxcbiAgICAgICAgcHJvamVjdFRpdGxlQ29udGFpbmVyLFxuICAgICAgICB0aXRsZVxuICAgICk7XG5cbiAgICAvL1RPRE86IEVhY2ggcHJvamVjdCBuZWVkcyB0byBiZSBhYmxlIHRvIG9wZW4gaXRzZWxmIGluIHRoZSBtYWluIGNvbnRlbnQgc3BhY2VcblxuICAgIGNvbnN0IHByb2plY3RDb250ZW50Q29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFtcIm5hdi1wcm9qZWN0LWNvbnRlbnQtY29udGFpbmVyXCJdLFxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyXG4gICAgKTtcblxuICAgIGxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgcHJvamVjdENvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdC5saXN0TmF2VmlzdWFsKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xufVxuIiwiaW1wb3J0ICogYXMgR2VuZXJhdGVFbGVtZW50IGZyb20gXCIuL0dlbmVyYXRlUGFnZUVsZW1lbnQuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSB7XG4gICAgY29uc3QgaXRlbVZpc3VhbCA9IGNyZWF0ZVRhc2tWaXN1YWwodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKTtcblxuICAgIGxldCBjb250ZW50Q29udGFpbmVyO1xuICAgIGxldCBuYXZDb250YWluZXI7XG5cbiAgICBmdW5jdGlvbiByZWFkVGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUaXRsZShuZXdUaXRsZSkge1xuICAgICAgICBpZiAobmV3VGl0bGUpIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU5hdkNvbnRhaW5lcihuZXdOYXZDb250YWluZXIpIHtcbiAgICAgICAgbmF2Q29udGFpbmVyID0gbmV3TmF2Q29udGFpbmVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbnRlbnRDb250YWluZXIobmV3Q29udGVudENvbnRhaW5lcikge1xuICAgICAgICBjb250ZW50Q29udGFpbmVyID0gbmV3Q29udGVudENvbnRhaW5lcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvKiB0aXRsZSwgKi9cbiAgICAgICAgcmVhZFRpdGxlLFxuICAgICAgICB1cGRhdGVUaXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIGl0ZW1WaXN1YWwsXG4gICAgICAgIHVwZGF0ZU5hdkNvbnRhaW5lcixcbiAgICAgICAgdXBkYXRlQ29udGVudENvbnRhaW5lcixcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFza1Zpc3VhbCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpIHtcbiAgICBjb25zdCBsaXN0SXRlbUNvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFwiZGl2XCIsIFtcbiAgICAgICAgXCJpdGVtLWNvbnRhaW5lclwiLFxuICAgIF0pO1xuXG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgW1wiaXRlbS1jaGVja2JveC1jb250YWluZXJcIl0sXG4gICAgICAgIGxpc3RJdGVtQ29udGFpbmVyXG4gICAgKTtcbiAgICBjb25zdCBjaGVja2JveCA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICBcImlucHV0XCIsXG4gICAgICAgIFtcIml0ZW0tY2hlY2tib3hcIl0sXG4gICAgICAgIGNoZWNrYm94Q29udGFpbmVyXG4gICAgKTtcbiAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuXG4gICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBbXCJpdGVtLWluZm8tY29udGFpbmVyXCJdLFxuICAgICAgICBsaXN0SXRlbUNvbnRhaW5lclxuICAgICk7XG5cbiAgICBjb25zdCBpdGVtVGl0bGUgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgW1wiaXRlbS10aXRsZVwiXSxcbiAgICAgICAgaW5mb0NvbnRhaW5lcixcbiAgICAgICAgdGl0bGVcbiAgICApO1xuXG4gICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFtcIml0ZW0tZGVzY3JpcHRpb25cIl0sXG4gICAgICAgIGluZm9Db250YWluZXIsXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgKTtcblxuICAgIGNvbnN0IGl0ZW1EdWVEYXRlID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFtcIml0ZW0tZHVlLWRhdGVcIl0sXG4gICAgICAgIGluZm9Db250YWluZXIsXG4gICAgICAgIGR1ZURhdGVcbiAgICApO1xuXG4gICAgY29uc3QgcmVtb3ZlSXRlbUJ1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBbXCJpdGVtLXJlbW92ZS1idXR0b25cIl0sXG4gICAgICAgIGxpc3RJdGVtQ29udGFpbmVyLFxuICAgICAgICBcInJlbW92ZSBpdGVtXCJcbiAgICApO1xuICAgIHJlbW92ZUl0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGlzdEl0ZW1Db250YWluZXIucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGlzdEl0ZW1Db250YWluZXI7XG59XG4iLCJpbXBvcnQgKiBhcyBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3QuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVzZXIocHJvamVjdHMgPSBbXSkge1xuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvbXB0KFwiUHJvamVjdCBuYW1lP1wiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gcHJvbXB0KFwiUHJvamVjdCBkZXNjcmlwdGlvbj9cIik7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0LmNyZWF0ZVByb2plY3QoXG4gICAgICAgICAgICBwcm9qZWN0TmFtZSxcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvblxuICAgICAgICApO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICByZXR1cm4gbmV3UHJvamVjdDtcbiAgICB9XG5cbiAgICBsZXQgY29udGVudENvbnRhaW5lcjtcbiAgICBsZXQgbmF2Q29udGFpbmVyO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlTmF2Q29udGFpbmVyKG5ld05hdkNvbnRhaW5lcikge1xuICAgICAgICBuYXZDb250YWluZXIgPSBuZXdOYXZDb250YWluZXI7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIHByb2plY3QudXBkYXRlTmF2Q29udGFpbmVyKG5ld05hdkNvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbnRlbnRDb250YWluZXIobmV3Q29udGVudENvbnRhaW5lcikge1xuICAgICAgICBjb250ZW50Q29udGFpbmVyID0gbmV3Q29udGVudENvbnRhaW5lcjtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC51cGRhdGVDb250ZW50Q29udGFpbmVyKG5ld0NvbnRlbnRDb250YWluZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwcm9qZWN0cywgYWRkUHJvamVjdCwgdXBkYXRlTmF2Q29udGFpbmVyLCB1cGRhdGVDb250ZW50Q29udGFpbmVyIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgKiBhcyBQYWdlIGZyb20gXCIuL21vZHVsZXMvUGFnZS5qc1wiO1xuXG5jb25zdCBuZXdQYWdlID0gUGFnZS5nZW5lcmF0ZVBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==