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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/dots-horizontal-circle-outline.svg */ "./src/img/icons/dots-horizontal-circle-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/menu-right-outline.svg */ "./src/img/icons/menu-right-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
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
    --minor-drop-shadow-color: rgb(0, 0, 0, 0.1);
    --minor-box-shadow-reverse-values: 0.5rem 0.5rem 0.3rem;
    --box-shadow-values-1: 0.5rem 0.5rem 0.3rem;
    --box-shadow-values-2: -0.1rem -0.1rem 0.1rem;
    --box-shadow-values-3: 1rem 1rem 0.3rem;
    --box-shadow-values-4: -0.5rem -0.5rem 0.1rem;

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

.button {
    cursor: pointer;
}

.nav-container {
    grid-column: 1 / 2;

    display: grid;
    grid-template-rows: 1fr 2fr 10fr 1fr;
    grid-template-columns: 1fr 6fr 1fr;

    gap: 2rem;
    background-color: var(--project-container-color);
    /* padding: 4rem 1rem; */

    position: sticky;
    top: 0;
    margin: 0;
    height: 100vh;

    /* border: 1px solid blue; */

    box-shadow: var(--box-shadow-values-1) var(--drop-shadow-color),
        var(--box-shadow-values-2) var(--drop-shadow-color);
}

.nav-info-container {
    grid-row: 2 / 3;
    grid-column: 2 / 3;

    display: grid;
    /* grid-template-columns: 2fr 1fr; */
    grid-template-rows: 1fr 2fr;
    /* align-items: center; */
    justify-items: center;

    /* display: flex;
    align-items: center;
    gap: 1rem; */

    font-size: var(--nav-title-font-size);
    padding: 2rem;

    /* border: 1px solid blue; */
    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);
}

.nav-title-container {
    /* grid-column: 1 / 2; */
    grid-row: 1 / 2;

    /* border: solid red 1px; */
}

.nav-title {
    /* border: solid blue 1px; */
}

.nav-control-container {
    /* border: solid red 1px; */
}

.nav-new-project-button {
    /* background-image: url(./img/icons/plus.svg);
    height: var(--nav-icon-dimension);
    aspect-ratio: 1 / 1; */
}

.nav-content-container {
    grid-row: 3 / 4;
    grid-column: 2 / 3;

    /* display: grid;
    gap: 1rem;
    grid-template-rows: repeat(auto-fill, minmax(100px, auto));
    align-items: start; */

    /* display: flex;
    flex-direction: column; */

    /* display: grid;
    grid-template-columns: 1fr;
    align-items: start;
    gap: 1rem;
    grid-auto-flow: dense; */

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 2rem;

    font-size: var(--nav-info-font-size);
    /* overflow: scroll; */

    /* border: solid red 1px; */

    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);
}

.nav-project-container {
    grid-column: 1 / 2;

    display: grid;
    grid-template-columns: 1fr 4fr;

    /* height: minmax(50px, 100px); */

    /* border: solid pink 1px; */
}

.nav-project-title-container {
    grid-column: 1 / 3;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.nav-project-title-icon {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    height: var(--nav-icon-dimension);
    aspect-ratio: 1 / 1;
}

.nav-project-title {
    font-weight: 500;
}

.nav-project-content-container {
    grid-column: 2 / 3;
    /* height: 200px; */

    /* border: 1px solid yellow; */
}

.nav-list-title-container {
    display: flex;
    align-items: center;
    gap: 0.2rem;
}

.nav-list-title-icon {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
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
    grid-template-rows: 12rem 1fr;

    background-color: rgba(var(--mute-color), 1);
    padding: 2rem;
    margin: 1rem;
    gap: 1.5rem;

    height: 100%;

    /* overflow: scroll; */
    /* border-radius: 0.5rem; */
    background-color: var(--project-container-color);
    /* box-shadow: var(--box-shadow-values)
        rgba(var(--drop-shadow-color-color), 0.5); */
    box-shadow: var(--box-shadow-values-1) var(--drop-shadow-color),
        var(--box-shadow-values-2) var(--minor-drop-shadow-color);

    /* border: solid black 1px; */
}

.project-title-container {
    grid-row: 1 / 2;

    display: grid;
    grid-template-columns: 5fr 1fr;
    font-size: var(--project-info-font-size);
    /* border: solid black 1px; */

    padding: 0.5rem;

    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);
}

.project-info-container {
    /* border: solid red 1px; */
}

.project-control-container {
    /* border: solid blue 1px; */
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
    /* border: solid green 1px; */
    gap: 1.5rem;
    padding: 2rem;
}

.list-container {
    display: grid;
    gap: 0.5rem;

    /* background-color: rgba(var(--secondary-color), 0.5); */
    padding: 1rem;
    /* box-shadow: var(--minor-box-shadow-values) var(--drop-shadow-color); */
    /* box-shadow: var(--minor-box-shadow-reverse-values) var(--drop-shadow-color); */
    /* border-radius: 0.5rem; */

    /* box-shadow: var(--box-shadow-values-1) var(--drop-shadow-color),
        var(--box-shadow-values-2) var(--minor-drop-shadow-color); */
    /* border: solid 1px black; */

    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);
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
    /* background-image: url(./img/icons/plus.svg);
    height: var(--nav-icon-dimension);
    aspect-ratio: 1 / 1; */
}

.list-edit-button {
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

.login-page-body {
    grid-column: 1 / 3;

    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 2fr 1fr;

    background-color: rgb(0, 0, 0, 0.05);
    /* border: 1px solid red; */
}

.login-container {
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    background-color: white;
    /* border: 1px solid blue; */

    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */

    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 1fr 1fr 4fr 1fr;
    justify-items: center;
    gap: 1rem;

    /* box-shadow: var(--minor-box-shadow-reverse-values) var(--drop-shadow-color),
        var(--minor-box-shadow-values) var(--drop-shadow-color); */
    /* box-shadow: var(--box-shadow-values-1) var(--drop-shadow-color),
        var(--box-shadow-values-2) var(--drop-shadow-color); */
    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);
}

.login-control-container {
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    height: 100%;

    /* border: 1px solid green; */
    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);
}

.user-list-container {
    grid-column: 2 / 3;
    grid-row: 3 / 4;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    height: 100%;

    /* border: 1px solid red; */
    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);
}

.user-name-option {
    font-family: var(--general-font);
    font-size: var(--item-title-font-size);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,oCAAoC;IACpC,+BAA+B;IAC/B,gCAAgC;IAChC,4BAA4B;IAC5B,0CAA0C;IAC1C,gDAAgD;IAChD,4DAA4D;IAC5D,kCAAkC;IAClC,oCAAoC;IACpC,qBAAqB;IACrB,uBAAuB;IACvB,wBAAwB;IACxB,yBAAyB;IACzB,wBAAwB;IACxB,wBAAwB;;IAExB,gCAAgC;;IAEhC,8BAA8B;IAC9B,2BAA2B;IAC3B,4BAA4B;IAC5B,2BAA2B;IAC3B,+BAA+B;IAC/B,gCAAgC;IAChC,6BAA6B;IAC7B,6BAA6B;;IAE7B,0BAA0B;;IAE1B,gCAAgC;IAChC,kCAAkC;IAClC,oCAAoC;IACpC,uCAAuC;IACvC,iCAAiC;;IAEjC,oCAAoC;IACpC,sCAAsC;IACtC,mCAAmC;IACnC,yCAAyC;IACzC,yBAAyB;;IAEzB,2CAA2C;IAC3C,6CAA6C;IAC7C,6CAA6C;;IAE7C,0CAA0C;IAC1C,gDAAgD;IAChD,sCAAsC;IACtC,4CAA4C;IAC5C,uDAAuD;IACvD,2CAA2C;IAC3C,6CAA6C;IAC7C,uCAAuC;IACvC,6CAA6C;;IAE7C,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb;;;SAGK;;IAEL,gCAAgC;IAChC,mCAAmC;IACnC,SAAS;IACT,UAAU;;IAEV,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;;IAElB,aAAa;IACb,oCAAoC;IACpC,kCAAkC;;IAElC,SAAS;IACT,gDAAgD;IAChD,wBAAwB;;IAExB,gBAAgB;IAChB,MAAM;IACN,SAAS;IACT,aAAa;;IAEb,4BAA4B;;IAE5B;2DACuD;AAC3D;;AAEA;IACI,eAAe;IACf,kBAAkB;;IAElB,aAAa;IACb,oCAAoC;IACpC,2BAA2B;IAC3B,yBAAyB;IACzB,qBAAqB;;IAErB;;gBAEY;;IAEZ,qCAAqC;IACrC,aAAa;;IAEb,4BAA4B;IAC5B,+CAA+C;AACnD;;AAEA;IACI,wBAAwB;IACxB,eAAe;;IAEf,2BAA2B;AAC/B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI;;0BAEsB;AAC1B;;AAEA;IACI,eAAe;IACf,kBAAkB;;IAElB;;;yBAGqB;;IAErB;6BACyB;;IAEzB;;;;4BAIwB;;IAExB,aAAa;IACb,sBAAsB;IACtB,SAAS;;IAET,aAAa;;IAEb,oCAAoC;IACpC,sBAAsB;;IAEtB,2BAA2B;;IAE3B,+CAA+C;AACnD;;AAEA;IACI,kBAAkB;;IAElB,aAAa;IACb,8BAA8B;;IAE9B,iCAAiC;;IAEjC,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,yDAAqE;IACrE,iCAAiC;IACjC,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;;IAEnB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,yDAAyD;IACzD,iCAAiC;IACjC,mBAAmB;AACvB;;AAEA;AACA;;AAEA;IACI,kBAAkB;;IAElB,aAAa;IACb,SAAS;IACT,gDAAgD;IAChD,2BAA2B;;IAE3B,mBAAmB;IACnB,YAAY;IACZ,mEAAmE;AACvE;;AAEA;IACI,aAAa;IACb,6BAA6B;;IAE7B,4CAA4C;IAC5C,aAAa;IACb,YAAY;IACZ,WAAW;;IAEX,YAAY;;IAEZ,sBAAsB;IACtB,2BAA2B;IAC3B,gDAAgD;IAChD;oDACgD;IAChD;iEAC6D;;IAE7D,6BAA6B;AACjC;;AAEA;IACI,eAAe;;IAEf,aAAa;IACb,8BAA8B;IAC9B,wCAAwC;IACxC,6BAA6B;;IAE7B,eAAe;;IAEf,+CAA+C;AACnD;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;AACA;;AAEA;IACI;;0BAEsB;AAC1B;;AAEA;IACI;;0BAEsB;AAC1B;;AAEA;IACI,eAAe;;IAEf;2BACuB;;IAEvB,YAAY;;IAEZ,aAAa;IACb,sBAAsB;;IAEtB,gBAAgB;IAChB,6BAA6B;IAC7B,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,WAAW;;IAEX,yDAAyD;IACzD,aAAa;IACb,yEAAyE;IACzE,iFAAiF;IACjF,2BAA2B;;IAE3B;oEACgE;IAChE,6BAA6B;;IAE7B,+CAA+C;AACnD;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qCAAqC;AACzC;;AAEA;AACA;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;AACA;;AAEA;IACI;;0BAEsB;AAC1B;;AAEA;AACA;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,yDAAyD;AAC7D;;AAEA;IACI,kBAAkB;;IAElB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;AACA;;AAEA;;;;;;;;;;;;;;;;;;;GAmBG;;AAEH;IACI,kBAAkB;IAClB,qCAAqC;AACzC;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;AACA;;AAEA;AACA;;AAEA;AACA;;AAEA;IACI,kBAAkB;;IAElB,aAAa;IACb,kCAAkC;IAClC,+BAA+B;;IAE/B,oCAAoC;IACpC,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,eAAe;;IAEf,uBAAuB;IACvB,4BAA4B;;IAE5B;;;0BAGsB;;IAEtB,aAAa;IACb,kCAAkC;IAClC,mCAAmC;IACnC,qBAAqB;IACrB,SAAS;;IAET;kEAC8D;IAC9D;8DAC0D;IAC1D,+CAA+C;AACnD;;AAEA;IACI,kBAAkB;IAClB,eAAe;;IAEf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,WAAW;IACX,YAAY;;IAEZ,6BAA6B;IAC7B,+CAA+C;AACnD;;AAEA;IACI,kBAAkB;IAClB,eAAe;;IAEf,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,WAAW;IACX,YAAY;;IAEZ,2BAA2B;IAC3B,+CAA+C;AACnD;;AAEA;IACI,gCAAgC;IAChC,sCAAsC;AAC1C","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap\");\n\n:root {\n    --mute-color: rgb(255, 127, 80, 0.1);\n    --secondary-color: 253, 107, 62;\n    --highlight-color: 147, 252, 217;\n    --dark-shadow-color: 0, 0, 0;\n    --box-shadow-values: 0.5rem 0.8rem 0.05rem;\n    --minor-box-shadow-values: 0.3rem 0.3rem 0.05rem;\n    --general-font: \"Montserrat\", \"Roboto Condensed\", sans-serif;\n    --title-font: \"Roboto Slab\", serif;\n    --base-font-color: rgb(0, 0, 0, 0.8);\n    --base-font-size: 1vh;\n    --title-font-size: 4rem;\n    --header-font-size: 2rem;\n    --content-font-size: 1rem;\n    --base-line-height: 1.25;\n    --content-line-height: 2;\n\n    font-size: var(--base-font-size);\n\n    --item-title-font-size: 1.5rem;\n    --item-info-font-size: 1rem;\n    --list-title-font-size: 2rem;\n    --list-info-font-size: 1rem;\n    --project-title-font-size: 2rem;\n    --project-info-font-size: 1.5rem;\n    --nav-title-font-size: 1.5rem;\n    --nav-info-font-size: 1.25rem;\n\n    --nav-icon-dimension: 2rem;\n\n    --dark-green: rgba(4, 42, 43, 1);\n    --moonstone: rgba(94, 177, 191, 1);\n    --light-cyan: rgba(205, 237, 246, 1);\n    --orange-crayola: rgba(239, 123, 69, 1);\n    --chili-red: rgba(216, 71, 39, 1);\n\n    --lapis-lazuli: rgba(35, 87, 137, 1);\n    --imperial-red: rgba(251, 54, 64, 0.1);\n    --aquamarine: rgba(22, 244, 208, 1);\n    --school-bus-yellow: rgba(241, 211, 2, 1);\n    --black: rgba(2, 1, 0, 1);\n\n    --nav-background-color: var(--imperial-red);\n    --content-container-color: rgb(242, 242, 242);\n    --project-container-color: rgb(255, 255, 255);\n\n    --box-shadow-values: -0.5rem 0.8rem 0.5rem;\n    --minor-box-shadow-values: -0.3rem 0.3rem 0.3rem;\n    --drop-shadow-color: rgb(0, 0, 0, 0.4);\n    --minor-drop-shadow-color: rgb(0, 0, 0, 0.1);\n    --minor-box-shadow-reverse-values: 0.5rem 0.5rem 0.3rem;\n    --box-shadow-values-1: 0.5rem 0.5rem 0.3rem;\n    --box-shadow-values-2: -0.1rem -0.1rem 0.1rem;\n    --box-shadow-values-3: 1rem 1rem 0.3rem;\n    --box-shadow-values-4: -0.5rem -0.5rem 0.1rem;\n\n    box-sizing: border-box;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: minmax(min(10rem, 100%), 2fr) minmax(\n            min(10rem, 100%),\n            5fr\n        );\n\n    font-family: var(--general-font);\n    font-size: var(--general-font-size);\n    margin: 0;\n    padding: 0;\n\n    height: 100vh;\n}\n\n.button {\n    cursor: pointer;\n}\n\n.nav-container {\n    grid-column: 1 / 2;\n\n    display: grid;\n    grid-template-rows: 1fr 2fr 10fr 1fr;\n    grid-template-columns: 1fr 6fr 1fr;\n\n    gap: 2rem;\n    background-color: var(--project-container-color);\n    /* padding: 4rem 1rem; */\n\n    position: sticky;\n    top: 0;\n    margin: 0;\n    height: 100vh;\n\n    /* border: 1px solid blue; */\n\n    box-shadow: var(--box-shadow-values-1) var(--drop-shadow-color),\n        var(--box-shadow-values-2) var(--drop-shadow-color);\n}\n\n.nav-info-container {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n\n    display: grid;\n    /* grid-template-columns: 2fr 1fr; */\n    grid-template-rows: 1fr 2fr;\n    /* align-items: center; */\n    justify-items: center;\n\n    /* display: flex;\n    align-items: center;\n    gap: 1rem; */\n\n    font-size: var(--nav-title-font-size);\n    padding: 2rem;\n\n    /* border: 1px solid blue; */\n    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);\n}\n\n.nav-title-container {\n    /* grid-column: 1 / 2; */\n    grid-row: 1 / 2;\n\n    /* border: solid red 1px; */\n}\n\n.nav-title {\n    /* border: solid blue 1px; */\n}\n\n.nav-control-container {\n    /* border: solid red 1px; */\n}\n\n.nav-new-project-button {\n    /* background-image: url(./img/icons/plus.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1; */\n}\n\n.nav-content-container {\n    grid-row: 3 / 4;\n    grid-column: 2 / 3;\n\n    /* display: grid;\n    gap: 1rem;\n    grid-template-rows: repeat(auto-fill, minmax(100px, auto));\n    align-items: start; */\n\n    /* display: flex;\n    flex-direction: column; */\n\n    /* display: grid;\n    grid-template-columns: 1fr;\n    align-items: start;\n    gap: 1rem;\n    grid-auto-flow: dense; */\n\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n\n    padding: 2rem;\n\n    font-size: var(--nav-info-font-size);\n    /* overflow: scroll; */\n\n    /* border: solid red 1px; */\n\n    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);\n}\n\n.nav-project-container {\n    grid-column: 1 / 2;\n\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n\n    /* height: minmax(50px, 100px); */\n\n    /* border: solid pink 1px; */\n}\n\n.nav-project-title-container {\n    grid-column: 1 / 3;\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.nav-project-title-icon {\n    background-image: url(./img/icons/dots-horizontal-circle-outline.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.nav-project-title {\n    font-weight: 500;\n}\n\n.nav-project-content-container {\n    grid-column: 2 / 3;\n    /* height: 200px; */\n\n    /* border: 1px solid yellow; */\n}\n\n.nav-list-title-container {\n    display: flex;\n    align-items: center;\n    gap: 0.2rem;\n}\n\n.nav-list-title-icon {\n    background-image: url(./img/icons/menu-right-outline.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.nav-list-title {\n}\n\n.content-container {\n    grid-column: 2 / 3;\n\n    display: grid;\n    gap: 1rem;\n    background-color: var(--content-container-color);\n    /* border: solid 1px red; */\n\n    /* height: 100vh; */\n    height: 100%;\n    /* box-shadow: var(--box-shadow-values) var(--drop-shadow-color); */\n}\n\n.project-container {\n    display: grid;\n    grid-template-rows: 12rem 1fr;\n\n    background-color: rgba(var(--mute-color), 1);\n    padding: 2rem;\n    margin: 1rem;\n    gap: 1.5rem;\n\n    height: 100%;\n\n    /* overflow: scroll; */\n    /* border-radius: 0.5rem; */\n    background-color: var(--project-container-color);\n    /* box-shadow: var(--box-shadow-values)\n        rgba(var(--drop-shadow-color-color), 0.5); */\n    box-shadow: var(--box-shadow-values-1) var(--drop-shadow-color),\n        var(--box-shadow-values-2) var(--minor-drop-shadow-color);\n\n    /* border: solid black 1px; */\n}\n\n.project-title-container {\n    grid-row: 1 / 2;\n\n    display: grid;\n    grid-template-columns: 5fr 1fr;\n    font-size: var(--project-info-font-size);\n    /* border: solid black 1px; */\n\n    padding: 0.5rem;\n\n    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);\n}\n\n.project-info-container {\n    /* border: solid red 1px; */\n}\n\n.project-control-container {\n    /* border: solid blue 1px; */\n}\n\n.project-title {\n    font-size: var(--project-title-font-size);\n}\n\n.project-description {\n}\n\n.new-project-list-button {\n    /* background-image: url(./img/icons/plus.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1; */\n}\n\n.close-project-button {\n    /* background-image: url(./img/icons/close-box-outline.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1; */\n}\n\n.project-card-container {\n    grid-row: 2 / 3;\n\n    /* display: grid;\n    grid-auto-rows: auto; */\n\n    height: 100%;\n\n    display: flex;\n    flex-direction: column;\n\n    overflow: scroll;\n    /* border: solid green 1px; */\n    gap: 1.5rem;\n    padding: 2rem;\n}\n\n.list-container {\n    display: grid;\n    gap: 0.5rem;\n\n    /* background-color: rgba(var(--secondary-color), 0.5); */\n    padding: 1rem;\n    /* box-shadow: var(--minor-box-shadow-values) var(--drop-shadow-color); */\n    /* box-shadow: var(--minor-box-shadow-reverse-values) var(--drop-shadow-color); */\n    /* border-radius: 0.5rem; */\n\n    /* box-shadow: var(--box-shadow-values-1) var(--drop-shadow-color),\n        var(--box-shadow-values-2) var(--minor-drop-shadow-color); */\n    /* border: solid 1px black; */\n\n    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);\n}\n\n.list-title-container {\n    display: grid;\n    grid-template-columns: 5fr 1fr;\n    font-size: var(--list-info-font-size);\n}\n\n.list-info-container {\n}\n\n.list-title {\n    font-size: var(--list-title-font-size);\n}\n\n.list-description {\n}\n\n.new-list-item-button {\n    /* background-image: url(./img/icons/plus.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1; */\n}\n\n.list-edit-button {\n}\n\n.item-container {\n    display: grid;\n    grid-template-columns: 1fr 6fr 1fr;\n    /* background-color: rgba(var(--secondary-color), 0.5); */\n}\n\n.item-checkbox-container {\n    grid-column: 1 / 2;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.item-checkbox {\n}\n\n/* input[type=\"checkbox\"] {\n    appearance: none;\n    display: grid;\n    place-content: center;\n    border: solid 1px black;\n    height: 1em;\n    width: 1em;\n\n    background: #0a0a0a;\n    border-color: #fff;\n}\n\ninput[type=\"checkbox\"]::before {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    transform: scale(0);\n    transition: 120ms transform ease-in-out;\n    box-shadow: inset 1em 1em var(--form-control-color);\n} */\n\n.item-info-container {\n    grid-column: 2 / 3;\n    font-size: var(--item-info-font-size);\n}\n\n.item-title {\n    font-size: var(--item-title-font-size);\n}\n\n.item-description {\n}\n\n.item-due-date {\n}\n\n.item-remove-button {\n}\n\n.login-page-body {\n    grid-column: 1 / 3;\n\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    grid-template-rows: 1fr 2fr 1fr;\n\n    background-color: rgb(0, 0, 0, 0.05);\n    /* border: 1px solid red; */\n}\n\n.login-container {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n\n    background-color: white;\n    /* border: 1px solid blue; */\n\n    /* display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; */\n\n    display: grid;\n    grid-template-columns: 1fr 4fr 1fr;\n    grid-template-rows: 1fr 1fr 4fr 1fr;\n    justify-items: center;\n    gap: 1rem;\n\n    /* box-shadow: var(--minor-box-shadow-reverse-values) var(--drop-shadow-color),\n        var(--minor-box-shadow-values) var(--drop-shadow-color); */\n    /* box-shadow: var(--box-shadow-values-1) var(--drop-shadow-color),\n        var(--box-shadow-values-2) var(--drop-shadow-color); */\n    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);\n}\n\n.login-control-container {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n    width: 100%;\n    height: 100%;\n\n    /* border: 1px solid green; */\n    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);\n}\n\n.user-list-container {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n    width: 100%;\n    height: 100%;\n\n    /* border: 1px solid red; */\n    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);\n}\n\n.user-name-option {\n    font-family: var(--general-font);\n    font-size: var(--item-title-font-size);\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   createDropdown: () => (/* binding */ createDropdown),
/* harmony export */   generatePageElement: () => (/* binding */ generatePageElement),
/* harmony export */   menuShowHide: () => (/* binding */ menuShowHide)
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

function createDropdown(
    dropdownButtonText,
    dropdownItemsDiv,
    parentDiv = null
) {
    const dropDownContainerDiv = generatePageElement(
        "div",
        ["dropdown-container-div"],
        parentDiv
    );
    const dropdownButton = generatePageElement(
        "div",
        ["dropdown-button", "button"],
        dropDownContainerDiv,
        dropdownButtonText
    );
    dropDownContainerDiv.appendChild(dropdownItemsDiv);
    this.menuShowHide(dropdownItemsDiv);

    dropdownButton.addEventListener("click", () => {
        this.menuShowHide(dropdownItemsDiv);
    });

    return dropDownContainerDiv;
}

function menuShowHide(dropDownItemsDiv) {
    if (dropDownItemsDiv.style.display == "none") {
        dropDownItemsDiv.style.display = "block";
    } else {
        dropDownItemsDiv.style.display = "none";
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
}


/***/ }),

/***/ "./src/modules/LoginUI.js":
/*!********************************!*\
  !*** ./src/modules/LoginUI.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginUI)
/* harmony export */ });
/* harmony import */ var _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneratePageElement.js */ "./src/modules/GeneratePageElement.js");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI.js */ "./src/modules/UI.js");
/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage.js */ "./src/modules/Storage.js");
/* harmony import */ var _User_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User.js */ "./src/modules/User.js");





class LoginUI {
    constructor() {
        this.newStorage = new _Storage_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.userList = this.newStorage.getUsers();
        this.pageBody = document.querySelector("body");
        this.generateLoginPage();
    }

    generateLoginPage() {
        this.loginPageBody = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["login-page-body"],
            this.pageBody
        );

        this.loginContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["login-container"],
            this.loginPageBody
        );

        this.loginControlContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["login-control-container"],
            this.loginContainer
        );

        this.generateLoginControls(this.loginControlContainer);

        this.userListContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["user-list-container"],
            this.loginContainer
        );

        this.createUserListDiv();
    }

    generateLoginControls(loginControlContainer) {
        this.newUserButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["new-user-button", "button"],
            loginControlContainer,
            "new user"
        );
        this.newUserButton.addEventListener("click", () => {
            this.createNewUser();
        });

        this.saveUsersButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["new-user-button", "button"],
            loginControlContainer,
            "save users"
        );
        this.saveUsersButton.addEventListener("click", () => {
            this.newStorage.storeUserArray();
        });

        this.clearUsersButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["new-user-button", "button"],
            loginControlContainer,
            "clear users"
        );
        this.clearUsersButton.addEventListener("click", () => {
            this.newStorage.deleteUserArray();
            this.newStorage.refreshUserArray();
            this.userList = this.newStorage.userList;
            this.refreshLoginPage();
        });
    }

    createUserListDiv() {
        this.userList.forEach((user) => {
            this.userListContainer.appendChild(this.createNewUserDiv(user));
        });
    }

    clearUserListDiv() {
        this.userListContainer.replaceChildren();
    }

    reloadUserList() {
        this.clearUserListDiv();
        this.createUserListDiv();
    }

    createNewUserDiv(user) {
        const userDiv = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["user-name-option", "button"],
            null,
            user.name
        );
        userDiv.addEventListener("click", () => {
            this.createNewUI(user);
        });
        return userDiv;
    }

    createNewUI(user) {
        this.clearPageBody();
        const newPage = new _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"](user, this.newStorage, this);
    }

    clearPageBody() {
        this.pageBody.replaceChildren();
    }

    createNewUser() {
        const newUserName = prompt("New User name?");
        const newUser = new _User_js__WEBPACK_IMPORTED_MODULE_3__["default"](newUserName, [], this.userList);

        if (!this.newStorage.doesUserAlreadyExist(newUser)) {
            this.userList.push(newUser);
            this.newStorage.storeUserArray();

            console.log(`Original (stored) user list:`);
            console.log(this.newStorage.storedUserList);
            console.log(`Current user list:`);
            console.log(this.newStorage.userList);
        }
        this.reloadUserList();
    }

    refreshLoginPage() {
        this.clearPageBody();
        this.generateLoginPage();
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
        this.refreshUserArray();
        console.log(this.userList);
    }

    getUsers() {
        return this.userList;
    }

    refreshUserArray() {
        const jsonTextOfStoredUserArray = this.getFromLocalStorage();

        this.storedUserList = this.parseUsers(jsonTextOfStoredUserArray);
        this.userList = this.parseUsers(jsonTextOfStoredUserArray);
    }

    parseUsers(jsonTextOfStoredUserArray) {
        const users = [];

        jsonTextOfStoredUserArray.forEach((user) => {
            const userName = user.name;
            const newUser = new _User_js__WEBPACK_IMPORTED_MODULE_4__["default"](userName, [], jsonTextOfStoredUserArray);
            const userProjects = this.parseProjects(user.projects, newUser);
            newUser.setProjects(userProjects);
            users.push(newUser);
        });

        return users;
    }

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

    //Returns an array of user objects either from base file or from the stored file of users
    getFromLocalStorage() {
        const storedUsers = localStorage.getItem("userStorage");

        if (!localStorage.getItem("userStorage")) {
            console.log("No users stored in localStorage.");
            console.log("Retrieving user list from userStorage.json.");
            return _userStorage_json__WEBPACK_IMPORTED_MODULE_0__;
        }
        return JSON.parse(storedUsers);
    }

    //Checks to see if a user with the same name as the provided user object already exists. If it does, the existing user is overwritten with provided user object, otherwise the provided user is just appended to the existing array of users. The array of users is then saved in localStorage.
    overwriteSavedUser(userToStore) {
        if (this.doesUserAlreadyExist(userToStore)) {
            const target = this.userList.find(
                (user) => user.name === userToStore.name
            );
            Object.assign(target, userToStore);
        } else {
            this.userList.push(userToStore);
        }
        this.storeUserArray();
    }

    doesUserAlreadyExist(userToCheck) {
        const containsUser = this.userList.some(
            (user) => user.name === userToCheck.name
        );
        console.log(`Contains User ${userToCheck}? : ${containsUser}`);
        return containsUser;
    }

    storeUserArray() {
        const toSendToStorage = JSON.stringify(
            this.userList,
            function replacer(key, value) {
                return key === "parentObject" ? undefined : value;
            }
        );

        localStorage.setItem("userStorage", toSendToStorage);
    }

    deleteUserArray() {
        localStorage.removeItem("userStorage");
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
/* harmony import */ var _LoginUI_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoginUI.js */ "./src/modules/LoginUI.js");








class UI {
    //Initialize page body, nav container, and content container page elements to be later populated
    constructor(thisUser, thisStorage, thisLoginUI) {
        this.newStorage = thisStorage;
        this.user = thisUser;
        this.loginUI = thisLoginUI;

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

        if (this.user.projects.length !== 0) {
            this.loadPageContent(this.user.projects[0].name);
        } else {
            this.loadPageContent();
        }
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
        const navInfoContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["nav-info-container"],
            this.navContainer
        );

        const navTitleContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["nav-title-container"],
            navInfoContainer
        );

        const navControlContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["nav-control-container"],
            null
        );

        const projectDropdownContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.createDropdown(
            "options",
            navControlContainer,
            navInfoContainer
        );

        const navTitle = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["nav-title"],
            navTitleContainer,
            "My Projects"
        );

        const addNewProjectButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["nav-new-project-button", "button"],
            navControlContainer,
            "add project"
        );
        addNewProjectButton.addEventListener("click", () => {
            this.createNewProject();
            this.reloadNavContent();
        });

        const saveButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["nav-save-users-button", "button"],
            navControlContainer,
            "save"
        );
        saveButton.addEventListener("click", () => {
            this.newStorage.overwriteSavedUser(this.user);
        });

        const exitToLoginButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["nav-exit-button", "button"],
            navControlContainer,
            "exit"
        );
        exitToLoginButton.addEventListener("click", () => {
            this.loginUI.refreshLoginPage();
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
            ["nav-project-title", "button"],
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
            null
        );

        const projectDropdownContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.createDropdown(
            "options",
            projectControlContainer,
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
            ["new-project-list-button", "button"],
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
            ["close-project-button", "button"],
            projectControlContainer,
            "close project"
        );
        closeProjectButton.addEventListener("click", () => {
            this.clearDisplayContent();
        });

        const deleteProjectButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["item-remove-button", "button"],
            projectControlContainer,
            "delete project"
        );
        deleteProjectButton.addEventListener("click", () => {
            project.parentObject.removeProject(project.name);
            this.loadPageContent();
        });

        const editProjectButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["project-edit-button", "button"],
            projectControlContainer,
            "edit project"
        );
        editProjectButton.addEventListener("click", () => {
            this.editProject(project);
            this.updateProjectVisual(project);
        });

        this.appendAllListsToProject(projectCardContainer, project.lists);

        project.setContainerNode(projectContainer);
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

        const listControlContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["list-control-container"],
            null
        );

        const projectDropdownContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.createDropdown(
            "options",
            listControlContainer,
            listTitleContainer
        );

        const listCardContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["list-card-container"],
            listContainer
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
            ["new-list-item-button", "button"],
            listControlContainer,
            "new task"
        );
        addNewTaskButton.addEventListener("click", () => {
            const newTask = this.createTask(list);
            this.updateListVisual(list);
        });

        const removeListButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["item-remove-button", "button"],
            listControlContainer,
            "delete list"
        );
        removeListButton.addEventListener("click", () => {
            list.parentObject.removeList(list.name);
            this.updateProjectVisual(list.parentObject);
            this.reloadNavContent();
        });

        const editListButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["list-edit-button", "button"],
            listControlContainer,
            "edit list"
        );
        editListButton.addEventListener("click", () => {
            this.editList(list);
            this.updateListVisual(list);
        });

        this.appendTaskList(listContainer, list);
        list.setContainerNode(listContainer);
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
            ["item-remove-button", "button"],
            taskControlsContainer,
            "remove item"
        );
        removeTaskButton.addEventListener("click", () => {
            task.parentObject.removeTask(task.name);
            this.updateListVisual(task.parentObject);
        });

        const editTaskButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["item-edit-button", "button"],
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
        const listName = prompt("List name?", list.name);
        const listDescription = prompt("List description?", list.description);

        list.name = listName;
        list.description = listDescription;
    }

    updateListVisual(list) {
        this.clearListVisual(list.containerNode);
        this.createListVisual(list, list.containerNode);
    }

    clearListVisual(listVisual) {
        listVisual.replaceChildren();
    }

    editProject(project) {
        const projectName = prompt("Project name?", project.name);
        const projectDescription = prompt(
            "Project description?",
            project.description
        );

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
    constructor(name, projects = [], parentContainer = null) {
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

/***/ "./src/modules/userStorage.json":
/*!**************************************!*\
  !*** ./src/modules/userStorage.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"name":"user 1","projects":[{"name":"project 1","lists":[{"name":"list 1-1","tasks":[{"name":"task 1-1-1","dueDate":"due date 1-1-1","description":"description 1-1-1"},{"name":"task 1-1-2","dueDate":"due date 1-1-2","description":"description 1-1-2"},{"name":"task 1-1-3","dueDate":"due date 1-1-3","description":"description 1-1-3"}]},{"name":"list 1-2","tasks":[{"name":"task 1-2-1","dueDate":"due date 1-2-1","description":"description 1-2-1"},{"name":"task 1-2-2","dueDate":"due date 1-2-2","description":"description 1-2-2"},{"name":"task 1-2-3","dueDate":"due date 1-2-3","description":"description 1-2-3"}]},{"name":"list 1-3","tasks":[{"name":"task 1-3-1","dueDate":"due date 1-3-1","description":"description 1-3-1"},{"name":"task 1-3-2","dueDate":"due date 1-3-2","description":"description 1-3-2"},{"name":"task 1-3-3","dueDate":"due date 1-3-3","description":"description 1-3-3"}]}]},{"name":"project 2","lists":[{"name":"list 2-1","tasks":[{"name":"task 2-1-1","dueDate":"due date 2-1-1","description":"description 2-1-1"},{"name":"task 2-1-2","dueDate":"due date 2-1-2","description":"description 2-1-2"},{"name":"task 2-1-3","dueDate":"due date 2-1-3","description":"description 2-1-3"}]},{"name":"list 2-2","tasks":[{"name":"task 2-2-1","dueDate":"due date 2-2-1","description":"description 2-2-1"},{"name":"task 2-2-2","dueDate":"due date 2-2-2","description":"description 2-2-2"},{"name":"task 2-2-3","dueDate":"due date 2-2-3","description":"description 2-2-3"}]},{"name":"list 2-3","tasks":[{"name":"task 2-3-1","dueDate":"due date 2-3-1","description":"description 2-3-1"},{"name":"task 2-3-2","dueDate":"due date 2-3-2","description":"description 2-3-2"},{"name":"task 2-3-3","dueDate":"due date 2-3-3","description":"description 2-3-3"}]}]},{"name":"project 3","lists":[{"name":"list 3-1","tasks":[{"name":"task 3-1-1","dueDate":"due date 3-1-1","description":"description 3-1-1"},{"name":"task 3-1-2","dueDate":"due date 3-1-2","description":"description 3-1-2"},{"name":"task 3-1-3","dueDate":"due date 3-1-3","description":"description 3-1-3"}]},{"name":"list 3-2","tasks":[{"name":"task 3-2-1","dueDate":"due date 3-2-1","description":"description 3-2-1"},{"name":"task 3-2-2","dueDate":"due date 3-2-2","description":"description 3-2-2"},{"name":"task 3-2-3","dueDate":"due date 3-2-3","description":"description 3-2-3"}]},{"name":"list 3-3","tasks":[{"name":"task 3-3-1","dueDate":"due date 3-3-1","description":"description 3-3-1"},{"name":"task 3-3-2","dueDate":"due date 3-3-2","description":"description 3-3-2"},{"name":"task 3-3-3","dueDate":"due date 3-3-3","description":"description 3-3-3"}]}]}]},{"name":"user 2","projects":[{"name":"project 1","lists":[{"name":"list 1-1","tasks":[{"name":"task 1-1-1","dueDate":"due date 1-1-1","description":"description 1-1-1"},{"name":"task 1-1-2","dueDate":"due date 1-1-2","description":"description 1-1-2"},{"name":"task 1-1-3","dueDate":"due date 1-1-3","description":"description 1-1-3"}]},{"name":"list 1-2","tasks":[{"name":"task 1-2-1","dueDate":"due date 1-2-1","description":"description 1-2-1"},{"name":"task 1-2-2","dueDate":"due date 1-2-2","description":"description 1-2-2"},{"name":"task 1-2-3","dueDate":"due date 1-2-3","description":"description 1-2-3"}]},{"name":"list 1-3","tasks":[{"name":"task 1-3-1","dueDate":"due date 1-3-1","description":"description 1-3-1"},{"name":"task 1-3-2","dueDate":"due date 1-3-2","description":"description 1-3-2"},{"name":"task 1-3-3","dueDate":"due date 1-3-3","description":"description 1-3-3"}]}]},{"name":"project 2","lists":[{"name":"list 2-1","tasks":[{"name":"task 2-1-1","dueDate":"due date 2-1-1","description":"description 2-1-1"},{"name":"task 2-1-2","dueDate":"due date 2-1-2","description":"description 2-1-2"},{"name":"task 2-1-3","dueDate":"due date 2-1-3","description":"description 2-1-3"}]},{"name":"list 2-2","tasks":[{"name":"task 2-2-1","dueDate":"due date 2-2-1","description":"description 2-2-1"},{"name":"task 2-2-2","dueDate":"due date 2-2-2","description":"description 2-2-2"},{"name":"task 2-2-3","dueDate":"due date 2-2-3","description":"description 2-2-3"}]},{"name":"list 2-3","tasks":[{"name":"task 2-3-1","dueDate":"due date 2-3-1","description":"description 2-3-1"},{"name":"task 2-3-2","dueDate":"due date 2-3-2","description":"description 2-3-2"},{"name":"task 2-3-3","dueDate":"due date 2-3-3","description":"description 2-3-3"}]}]},{"name":"project 3","lists":[{"name":"list 3-1","tasks":[{"name":"task 3-1-1","dueDate":"due date 3-1-1","description":"description 3-1-1"},{"name":"task 3-1-2","dueDate":"due date 3-1-2","description":"description 3-1-2"},{"name":"task 3-1-3","dueDate":"due date 3-1-3","description":"description 3-1-3"}]},{"name":"list 3-2","tasks":[{"name":"task 3-2-1","dueDate":"due date 3-2-1","description":"description 3-2-1"},{"name":"task 3-2-2","dueDate":"due date 3-2-2","description":"description 3-2-2"},{"name":"task 3-2-3","dueDate":"due date 3-2-3","description":"description 3-2-3"}]},{"name":"list 3-3","tasks":[{"name":"task 3-3-1","dueDate":"due date 3-3-1","description":"description 3-3-1"},{"name":"task 3-3-2","dueDate":"due date 3-3-2","description":"description 3-3-2"},{"name":"task 3-3-3","dueDate":"due date 3-3-3","description":"description 3-3-3"}]}]}]}]');

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
/* harmony import */ var _modules_LoginUI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/LoginUI.js */ "./src/modules/LoginUI.js");




/* const newPage = new UI(); */

const newLogin = new _modules_LoginUI_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLGFBQWEsV0FBVyxVQUFVLFlBQVksY0FBYyxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxRQUFRLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxNQUFNLE9BQU8sT0FBTyxLQUFLLE1BQU0sT0FBTyxPQUFPLEtBQUssV0FBVyxLQUFLLFFBQVEsWUFBWSxVQUFVLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxNQUFNLE9BQU8sY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxNQUFNLE9BQU8sT0FBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSx1QkFBdUIsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssYUFBYSxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxZQUFZLGNBQWMsUUFBUSxRQUFRLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxLQUFLLE9BQU8sTUFBTSxPQUFPLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxXQUFXLFlBQVksYUFBYSxPQUFP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QUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDWTtBQUNVOztBQUUzQyw2QkFBNkI7O0FBRTdCLHFCQUFxQiwyREFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL0dlbmVyYXRlUGFnZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL0xpc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL0xvZ2luVUkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9zcmMvbW9kdWxlcy9Vc2VyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvaWNvbnMvZG90cy1ob3Jpem9udGFsLWNpcmNsZS1vdXRsaW5lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL2ljb25zL21lbnUtcmlnaHQtb3V0bGluZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQrQWx0ZXJuYXRlczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZmFtaWx5PU1vbnRzZXJyYXQ6aXRhbCx3Z2h0QDAsMTAwLi45MDA7MSwxMDAuLjkwMCZmYW1pbHk9Um9ib3RvK01vbm86aXRhbCx3Z2h0QDAsMTAwLi43MDA7MSwxMDAuLjcwMCZmYW1pbHk9Um9ib3RvK1NsYWI6d2dodEAxMDAuLjkwMCZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZmYW1pbHk9VWJ1bnR1Oml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tbXV0ZS1jb2xvcjogcmdiKDI1NSwgMTI3LCA4MCwgMC4xKTtcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogMjUzLCAxMDcsIDYyO1xuICAgIC0taGlnaGxpZ2h0LWNvbG9yOiAxNDcsIDI1MiwgMjE3O1xuICAgIC0tZGFyay1zaGFkb3ctY29sb3I6IDAsIDAsIDA7XG4gICAgLS1ib3gtc2hhZG93LXZhbHVlczogMC41cmVtIDAuOHJlbSAwLjA1cmVtO1xuICAgIC0tbWlub3ItYm94LXNoYWRvdy12YWx1ZXM6IDAuM3JlbSAwLjNyZW0gMC4wNXJlbTtcbiAgICAtLWdlbmVyYWwtZm9udDogXCJNb250c2VycmF0XCIsIFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xuICAgIC0tdGl0bGUtZm9udDogXCJSb2JvdG8gU2xhYlwiLCBzZXJpZjtcbiAgICAtLWJhc2UtZm9udC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuOCk7XG4gICAgLS1iYXNlLWZvbnQtc2l6ZTogMXZoO1xuICAgIC0tdGl0bGUtZm9udC1zaXplOiA0cmVtO1xuICAgIC0taGVhZGVyLWZvbnQtc2l6ZTogMnJlbTtcbiAgICAtLWNvbnRlbnQtZm9udC1zaXplOiAxcmVtO1xuICAgIC0tYmFzZS1saW5lLWhlaWdodDogMS4yNTtcbiAgICAtLWNvbnRlbnQtbGluZS1oZWlnaHQ6IDI7XG5cbiAgICBmb250LXNpemU6IHZhcigtLWJhc2UtZm9udC1zaXplKTtcblxuICAgIC0taXRlbS10aXRsZS1mb250LXNpemU6IDEuNXJlbTtcbiAgICAtLWl0ZW0taW5mby1mb250LXNpemU6IDFyZW07XG4gICAgLS1saXN0LXRpdGxlLWZvbnQtc2l6ZTogMnJlbTtcbiAgICAtLWxpc3QtaW5mby1mb250LXNpemU6IDFyZW07XG4gICAgLS1wcm9qZWN0LXRpdGxlLWZvbnQtc2l6ZTogMnJlbTtcbiAgICAtLXByb2plY3QtaW5mby1mb250LXNpemU6IDEuNXJlbTtcbiAgICAtLW5hdi10aXRsZS1mb250LXNpemU6IDEuNXJlbTtcbiAgICAtLW5hdi1pbmZvLWZvbnQtc2l6ZTogMS4yNXJlbTtcblxuICAgIC0tbmF2LWljb24tZGltZW5zaW9uOiAycmVtO1xuXG4gICAgLS1kYXJrLWdyZWVuOiByZ2JhKDQsIDQyLCA0MywgMSk7XG4gICAgLS1tb29uc3RvbmU6IHJnYmEoOTQsIDE3NywgMTkxLCAxKTtcbiAgICAtLWxpZ2h0LWN5YW46IHJnYmEoMjA1LCAyMzcsIDI0NiwgMSk7XG4gICAgLS1vcmFuZ2UtY3JheW9sYTogcmdiYSgyMzksIDEyMywgNjksIDEpO1xuICAgIC0tY2hpbGktcmVkOiByZ2JhKDIxNiwgNzEsIDM5LCAxKTtcblxuICAgIC0tbGFwaXMtbGF6dWxpOiByZ2JhKDM1LCA4NywgMTM3LCAxKTtcbiAgICAtLWltcGVyaWFsLXJlZDogcmdiYSgyNTEsIDU0LCA2NCwgMC4xKTtcbiAgICAtLWFxdWFtYXJpbmU6IHJnYmEoMjIsIDI0NCwgMjA4LCAxKTtcbiAgICAtLXNjaG9vbC1idXMteWVsbG93OiByZ2JhKDI0MSwgMjExLCAyLCAxKTtcbiAgICAtLWJsYWNrOiByZ2JhKDIsIDEsIDAsIDEpO1xuXG4gICAgLS1uYXYtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW1wZXJpYWwtcmVkKTtcbiAgICAtLWNvbnRlbnQtY29udGFpbmVyLWNvbG9yOiByZ2IoMjQyLCAyNDIsIDI0Mik7XG4gICAgLS1wcm9qZWN0LWNvbnRhaW5lci1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG4gICAgLS1ib3gtc2hhZG93LXZhbHVlczogLTAuNXJlbSAwLjhyZW0gMC41cmVtO1xuICAgIC0tbWlub3ItYm94LXNoYWRvdy12YWx1ZXM6IC0wLjNyZW0gMC4zcmVtIDAuM3JlbTtcbiAgICAtLWRyb3Atc2hhZG93LWNvbG9yOiByZ2IoMCwgMCwgMCwgMC40KTtcbiAgICAtLW1pbm9yLWRyb3Atc2hhZG93LWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4xKTtcbiAgICAtLW1pbm9yLWJveC1zaGFkb3ctcmV2ZXJzZS12YWx1ZXM6IDAuNXJlbSAwLjVyZW0gMC4zcmVtO1xuICAgIC0tYm94LXNoYWRvdy12YWx1ZXMtMTogMC41cmVtIDAuNXJlbSAwLjNyZW07XG4gICAgLS1ib3gtc2hhZG93LXZhbHVlcy0yOiAtMC4xcmVtIC0wLjFyZW0gMC4xcmVtO1xuICAgIC0tYm94LXNoYWRvdy12YWx1ZXMtMzogMXJlbSAxcmVtIDAuM3JlbTtcbiAgICAtLWJveC1zaGFkb3ctdmFsdWVzLTQ6IC0wLjVyZW0gLTAuNXJlbSAwLjFyZW07XG5cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KG1pbigxMHJlbSwgMTAwJSksIDJmcikgbWlubWF4KFxuICAgICAgICAgICAgbWluKDEwcmVtLCAxMDAlKSxcbiAgICAgICAgICAgIDVmclxuICAgICAgICApO1xuXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWdlbmVyYWwtZm9udCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1nZW5lcmFsLWZvbnQtc2l6ZSk7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXYtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxMGZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgMWZyO1xuXG4gICAgZ2FwOiAycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3QtY29udGFpbmVyLWNvbG9yKTtcbiAgICAvKiBwYWRkaW5nOiA0cmVtIDFyZW07ICovXG5cbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXG5cbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LXZhbHVlcy0xKSB2YXIoLS1kcm9wLXNoYWRvdy1jb2xvciksXG4gICAgICAgIHZhcigtLWJveC1zaGFkb3ctdmFsdWVzLTIpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKTtcbn1cblxuLm5hdi1pbmZvLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyOyAqL1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07ICovXG5cbiAgICBmb250LXNpemU6IHZhcigtLW5hdi10aXRsZS1mb250LXNpemUpO1xuICAgIHBhZGRpbmc6IDJyZW07XG5cbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVyZW0gMC41cmVtIHJnYigwLCAwLCAwLCAwLjEpO1xufVxuXG4ubmF2LXRpdGxlLWNvbnRhaW5lciB7XG4gICAgLyogZ3JpZC1jb2x1bW46IDEgLyAyOyAqL1xuICAgIGdyaWQtcm93OiAxIC8gMjtcblxuICAgIC8qIGJvcmRlcjogc29saWQgcmVkIDFweDsgKi9cbn1cblxuLm5hdi10aXRsZSB7XG4gICAgLyogYm9yZGVyOiBzb2xpZCBibHVlIDFweDsgKi9cbn1cblxuLm5hdi1jb250cm9sLWNvbnRhaW5lciB7XG4gICAgLyogYm9yZGVyOiBzb2xpZCByZWQgMXB4OyAqL1xufVxuXG4ubmF2LW5ldy1wcm9qZWN0LWJ1dHRvbiB7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2ljb25zL3BsdXMuc3ZnKTtcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTsgKi9cbn1cblxuLm5hdi1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcblxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEwMHB4LCBhdXRvKSk7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0OyAqL1xuXG4gICAgLyogZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xuXG4gICAgLyogZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGdyaWQtYXV0by1mbG93OiBkZW5zZTsgKi9cblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG5cbiAgICBwYWRkaW5nOiAycmVtO1xuXG4gICAgZm9udC1zaXplOiB2YXIoLS1uYXYtaW5mby1mb250LXNpemUpO1xuICAgIC8qIG92ZXJmbG93OiBzY3JvbGw7ICovXG5cbiAgICAvKiBib3JkZXI6IHNvbGlkIHJlZCAxcHg7ICovXG5cbiAgICBib3gtc2hhZG93OiAwIDAgMC41cmVtIDAuNXJlbSByZ2IoMCwgMCwgMCwgMC4xKTtcbn1cblxuLm5hdi1wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG5cbiAgICAvKiBoZWlnaHQ6IG1pbm1heCg1MHB4LCAxMDBweCk7ICovXG5cbiAgICAvKiBib3JkZXI6IHNvbGlkIHBpbmsgMXB4OyAqL1xufVxuXG4ubmF2LXByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xufVxuXG4ubmF2LXByb2plY3QtdGl0bGUtaWNvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xufVxuXG4ubmF2LXByb2plY3QtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5uYXYtcHJvamVjdC1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIC8qIGhlaWdodDogMjAwcHg7ICovXG5cbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7ICovXG59XG5cbi5uYXYtbGlzdC10aXRsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuMnJlbTtcbn1cblxuLm5hdi1saXN0LXRpdGxlLWljb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbn1cblxuLm5hdi1saXN0LXRpdGxlIHtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNvbnRhaW5lci1jb2xvcik7XG4gICAgLyogYm9yZGVyOiBzb2xpZCAxcHggcmVkOyAqL1xuXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKTsgKi9cbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTJyZW0gMWZyO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1tdXRlLWNvbG9yKSwgMSk7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgZ2FwOiAxLjVyZW07XG5cbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAvKiBvdmVyZmxvdzogc2Nyb2xsOyAqL1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0LWNvbnRhaW5lci1jb2xvcik7XG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMpXG4gICAgICAgIHJnYmEodmFyKC0tZHJvcC1zaGFkb3ctY29sb3ItY29sb3IpLCAwLjUpOyAqL1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdmFsdWVzLTEpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKSxcbiAgICAgICAgdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMtMikgdmFyKC0tbWlub3ItZHJvcC1zaGFkb3ctY29sb3IpO1xuXG4gICAgLyogYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7ICovXG59XG5cbi5wcm9qZWN0LXRpdGxlLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnI7XG4gICAgZm9udC1zaXplOiB2YXIoLS1wcm9qZWN0LWluZm8tZm9udC1zaXplKTtcbiAgICAvKiBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDsgKi9cblxuICAgIHBhZGRpbmc6IDAuNXJlbTtcblxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVyZW0gMC41cmVtIHJnYigwLCAwLCAwLCAwLjEpO1xufVxuXG4ucHJvamVjdC1pbmZvLWNvbnRhaW5lciB7XG4gICAgLyogYm9yZGVyOiBzb2xpZCByZWQgMXB4OyAqL1xufVxuXG4ucHJvamVjdC1jb250cm9sLWNvbnRhaW5lciB7XG4gICAgLyogYm9yZGVyOiBzb2xpZCBibHVlIDFweDsgKi9cbn1cblxuLnByb2plY3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tcHJvamVjdC10aXRsZS1mb250LXNpemUpO1xufVxuXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XG59XG5cbi5uZXctcHJvamVjdC1saXN0LWJ1dHRvbiB7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2ljb25zL3BsdXMuc3ZnKTtcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTsgKi9cbn1cblxuLmNsb3NlLXByb2plY3QtYnV0dG9uIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvY2xvc2UtYm94LW91dGxpbmUuc3ZnKTtcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTsgKi9cbn1cblxuLnByb2plY3QtY2FyZC1jb250YWluZXIge1xuICAgIGdyaWQtcm93OiAyIC8gMztcblxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87ICovXG5cbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIC8qIGJvcmRlcjogc29saWQgZ3JlZW4gMXB4OyAqL1xuICAgIGdhcDogMS41cmVtO1xuICAgIHBhZGRpbmc6IDJyZW07XG59XG5cbi5saXN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDAuNXJlbTtcblxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSwgMC41KTsgKi9cbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIC8qIGJveC1zaGFkb3c6IHZhcigtLW1pbm9yLWJveC1zaGFkb3ctdmFsdWVzKSB2YXIoLS1kcm9wLXNoYWRvdy1jb2xvcik7ICovXG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tbWlub3ItYm94LXNoYWRvdy1yZXZlcnNlLXZhbHVlcykgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpOyAqL1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgKi9cblxuICAgIC8qIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdmFsdWVzLTEpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKSxcbiAgICAgICAgdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMtMikgdmFyKC0tbWlub3ItZHJvcC1zaGFkb3ctY29sb3IpOyAqL1xuICAgIC8qIGJvcmRlcjogc29saWQgMXB4IGJsYWNrOyAqL1xuXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNXJlbSAwLjVyZW0gcmdiKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5saXN0LXRpdGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnI7XG4gICAgZm9udC1zaXplOiB2YXIoLS1saXN0LWluZm8tZm9udC1zaXplKTtcbn1cblxuLmxpc3QtaW5mby1jb250YWluZXIge1xufVxuXG4ubGlzdC10aXRsZSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1saXN0LXRpdGxlLWZvbnQtc2l6ZSk7XG59XG5cbi5saXN0LWRlc2NyaXB0aW9uIHtcbn1cblxuLm5ldy1saXN0LWl0ZW0tYnV0dG9uIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvcGx1cy5zdmcpO1xuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxOyAqL1xufVxuXG4ubGlzdC1lZGl0LWJ1dHRvbiB7XG59XG5cbi5pdGVtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgMWZyO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSwgMC41KTsgKi9cbn1cblxuLml0ZW0tY2hlY2tib3gtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pdGVtLWNoZWNrYm94IHtcbn1cblxuLyogaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xuICAgIGhlaWdodDogMWVtO1xuICAgIHdpZHRoOiAxZW07XG5cbiAgICBiYWNrZ3JvdW5kOiAjMGEwYTBhO1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDAuNjVlbTtcbiAgICBoZWlnaHQ6IDAuNjVlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtIHZhcigtLWZvcm0tY29udHJvbC1jb2xvcik7XG59ICovXG5cbi5pdGVtLWluZm8tY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pdGVtLWluZm8tZm9udC1zaXplKTtcbn1cblxuLml0ZW0tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taXRlbS10aXRsZS1mb250LXNpemUpO1xufVxuXG4uaXRlbS1kZXNjcmlwdGlvbiB7XG59XG5cbi5pdGVtLWR1ZS1kYXRlIHtcbn1cblxuLml0ZW0tcmVtb3ZlLWJ1dHRvbiB7XG59XG5cbi5sb2dpbi1wYWdlLWJvZHkge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMDUpO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGdyaWQtcm93OiAyIC8gMztcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXG5cbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgNGZyIDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuXG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tbWlub3ItYm94LXNoYWRvdy1yZXZlcnNlLXZhbHVlcykgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpLFxuICAgICAgICB2YXIoLS1taW5vci1ib3gtc2hhZG93LXZhbHVlcykgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpOyAqL1xuICAgIC8qIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdmFsdWVzLTEpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKSxcbiAgICAgICAgdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMtMikgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpOyAqL1xuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVyZW0gMC41cmVtIHJnYigwLCAwLCAwLCAwLjEpO1xufVxuXG4ubG9naW4tY29udHJvbC1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBncmlkLXJvdzogMiAvIDM7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNXJlbSAwLjVyZW0gcmdiKDAsIDAsIDAsIDAuMSk7XG59XG5cbi51c2VyLWxpc3QtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgICBib3gtc2hhZG93OiAwIDAgMC41cmVtIDAuNXJlbSByZ2IoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnVzZXItbmFtZS1vcHRpb24ge1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1nZW5lcmFsLWZvbnQpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taXRlbS10aXRsZS1mb250LXNpemUpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsNEJBQTRCO0lBQzVCLDBDQUEwQztJQUMxQyxnREFBZ0Q7SUFDaEQsNERBQTREO0lBQzVELGtDQUFrQztJQUNsQyxvQ0FBb0M7SUFDcEMscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4Qix3QkFBd0I7O0lBRXhCLGdDQUFnQzs7SUFFaEMsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLDZCQUE2Qjs7SUFFN0IsMEJBQTBCOztJQUUxQixnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDLG9DQUFvQztJQUNwQyx1Q0FBdUM7SUFDdkMsaUNBQWlDOztJQUVqQyxvQ0FBb0M7SUFDcEMsc0NBQXNDO0lBQ3RDLG1DQUFtQztJQUNuQyx5Q0FBeUM7SUFDekMseUJBQXlCOztJQUV6QiwyQ0FBMkM7SUFDM0MsNkNBQTZDO0lBQzdDLDZDQUE2Qzs7SUFFN0MsMENBQTBDO0lBQzFDLGdEQUFnRDtJQUNoRCxzQ0FBc0M7SUFDdEMsNENBQTRDO0lBQzVDLHVEQUF1RDtJQUN2RCwyQ0FBMkM7SUFDM0MsNkNBQTZDO0lBQzdDLHVDQUF1QztJQUN2Qyw2Q0FBNkM7O0lBRTdDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYjs7O1NBR0s7O0lBRUwsZ0NBQWdDO0lBQ2hDLG1DQUFtQztJQUNuQyxTQUFTO0lBQ1QsVUFBVTs7SUFFVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjs7SUFFbEIsYUFBYTtJQUNiLG9D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bXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQrQWx0ZXJuYXRlczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZmFtaWx5PU1vbnRzZXJyYXQ6aXRhbCx3Z2h0QDAsMTAwLi45MDA7MSwxMDAuLjkwMCZmYW1pbHk9Um9ib3RvK01vbm86aXRhbCx3Z2h0QDAsMTAwLi43MDA7MSwxMDAuLjcwMCZmYW1pbHk9Um9ib3RvK1NsYWI6d2dodEAxMDAuLjkwMCZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZmYW1pbHk9VWJ1bnR1Oml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tbXV0ZS1jb2xvcjogcmdiKDI1NSwgMTI3LCA4MCwgMC4xKTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6IDI1MywgMTA3LCA2MjtcXG4gICAgLS1oaWdobGlnaHQtY29sb3I6IDE0NywgMjUyLCAyMTc7XFxuICAgIC0tZGFyay1zaGFkb3ctY29sb3I6IDAsIDAsIDA7XFxuICAgIC0tYm94LXNoYWRvdy12YWx1ZXM6IDAuNXJlbSAwLjhyZW0gMC4wNXJlbTtcXG4gICAgLS1taW5vci1ib3gtc2hhZG93LXZhbHVlczogMC4zcmVtIDAuM3JlbSAwLjA1cmVtO1xcbiAgICAtLWdlbmVyYWwtZm9udDogXFxcIk1vbnRzZXJyYXRcXFwiLCBcXFwiUm9ib3RvIENvbmRlbnNlZFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIC0tdGl0bGUtZm9udDogXFxcIlJvYm90byBTbGFiXFxcIiwgc2VyaWY7XFxuICAgIC0tYmFzZS1mb250LWNvbG9yOiByZ2IoMCwgMCwgMCwgMC44KTtcXG4gICAgLS1iYXNlLWZvbnQtc2l6ZTogMXZoO1xcbiAgICAtLXRpdGxlLWZvbnQtc2l6ZTogNHJlbTtcXG4gICAgLS1oZWFkZXItZm9udC1zaXplOiAycmVtO1xcbiAgICAtLWNvbnRlbnQtZm9udC1zaXplOiAxcmVtO1xcbiAgICAtLWJhc2UtbGluZS1oZWlnaHQ6IDEuMjU7XFxuICAgIC0tY29udGVudC1saW5lLWhlaWdodDogMjtcXG5cXG4gICAgZm9udC1zaXplOiB2YXIoLS1iYXNlLWZvbnQtc2l6ZSk7XFxuXFxuICAgIC0taXRlbS10aXRsZS1mb250LXNpemU6IDEuNXJlbTtcXG4gICAgLS1pdGVtLWluZm8tZm9udC1zaXplOiAxcmVtO1xcbiAgICAtLWxpc3QtdGl0bGUtZm9udC1zaXplOiAycmVtO1xcbiAgICAtLWxpc3QtaW5mby1mb250LXNpemU6IDFyZW07XFxuICAgIC0tcHJvamVjdC10aXRsZS1mb250LXNpemU6IDJyZW07XFxuICAgIC0tcHJvamVjdC1pbmZvLWZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAtLW5hdi10aXRsZS1mb250LXNpemU6IDEuNXJlbTtcXG4gICAgLS1uYXYtaW5mby1mb250LXNpemU6IDEuMjVyZW07XFxuXFxuICAgIC0tbmF2LWljb24tZGltZW5zaW9uOiAycmVtO1xcblxcbiAgICAtLWRhcmstZ3JlZW46IHJnYmEoNCwgNDIsIDQzLCAxKTtcXG4gICAgLS1tb29uc3RvbmU6IHJnYmEoOTQsIDE3NywgMTkxLCAxKTtcXG4gICAgLS1saWdodC1jeWFuOiByZ2JhKDIwNSwgMjM3LCAyNDYsIDEpO1xcbiAgICAtLW9yYW5nZS1jcmF5b2xhOiByZ2JhKDIzOSwgMTIzLCA2OSwgMSk7XFxuICAgIC0tY2hpbGktcmVkOiByZ2JhKDIxNiwgNzEsIDM5LCAxKTtcXG5cXG4gICAgLS1sYXBpcy1sYXp1bGk6IHJnYmEoMzUsIDg3LCAxMzcsIDEpO1xcbiAgICAtLWltcGVyaWFsLXJlZDogcmdiYSgyNTEsIDU0LCA2NCwgMC4xKTtcXG4gICAgLS1hcXVhbWFyaW5lOiByZ2JhKDIyLCAyNDQsIDIwOCwgMSk7XFxuICAgIC0tc2Nob29sLWJ1cy15ZWxsb3c6IHJnYmEoMjQxLCAyMTEsIDIsIDEpO1xcbiAgICAtLWJsYWNrOiByZ2JhKDIsIDEsIDAsIDEpO1xcblxcbiAgICAtLW5hdi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbXBlcmlhbC1yZWQpO1xcbiAgICAtLWNvbnRlbnQtY29udGFpbmVyLWNvbG9yOiByZ2IoMjQyLCAyNDIsIDI0Mik7XFxuICAgIC0tcHJvamVjdC1jb250YWluZXItY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG5cXG4gICAgLS1ib3gtc2hhZG93LXZhbHVlczogLTAuNXJlbSAwLjhyZW0gMC41cmVtO1xcbiAgICAtLW1pbm9yLWJveC1zaGFkb3ctdmFsdWVzOiAtMC4zcmVtIDAuM3JlbSAwLjNyZW07XFxuICAgIC0tZHJvcC1zaGFkb3ctY29sb3I6IHJnYigwLCAwLCAwLCAwLjQpO1xcbiAgICAtLW1pbm9yLWRyb3Atc2hhZG93LWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4xKTtcXG4gICAgLS1taW5vci1ib3gtc2hhZG93LXJldmVyc2UtdmFsdWVzOiAwLjVyZW0gMC41cmVtIDAuM3JlbTtcXG4gICAgLS1ib3gtc2hhZG93LXZhbHVlcy0xOiAwLjVyZW0gMC41cmVtIDAuM3JlbTtcXG4gICAgLS1ib3gtc2hhZG93LXZhbHVlcy0yOiAtMC4xcmVtIC0wLjFyZW0gMC4xcmVtO1xcbiAgICAtLWJveC1zaGFkb3ctdmFsdWVzLTM6IDFyZW0gMXJlbSAwLjNyZW07XFxuICAgIC0tYm94LXNoYWRvdy12YWx1ZXMtNDogLTAuNXJlbSAtMC41cmVtIDAuMXJlbTtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KG1pbigxMHJlbSwgMTAwJSksIDJmcikgbWlubWF4KFxcbiAgICAgICAgICAgIG1pbigxMHJlbSwgMTAwJSksXFxuICAgICAgICAgICAgNWZyXFxuICAgICAgICApO1xcblxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZ2VuZXJhbC1mb250KTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1nZW5lcmFsLWZvbnQtc2l6ZSk7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG5cXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdi1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxMGZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyIDFmcjtcXG5cXG4gICAgZ2FwOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0LWNvbnRhaW5lci1jb2xvcik7XFxuICAgIC8qIHBhZGRpbmc6IDRyZW0gMXJlbTsgKi9cXG5cXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxuXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdmFsdWVzLTEpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKSxcXG4gICAgICAgIHZhcigtLWJveC1zaGFkb3ctdmFsdWVzLTIpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKTtcXG59XFxuXFxuLm5hdi1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7ICovXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07ICovXFxuXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tbmF2LXRpdGxlLWZvbnQtc2l6ZSk7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVyZW0gMC41cmVtIHJnYigwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4ubmF2LXRpdGxlLWNvbnRhaW5lciB7XFxuICAgIC8qIGdyaWQtY29sdW1uOiAxIC8gMjsgKi9cXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcblxcbiAgICAvKiBib3JkZXI6IHNvbGlkIHJlZCAxcHg7ICovXFxufVxcblxcbi5uYXYtdGl0bGUge1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIGJsdWUgMXB4OyAqL1xcbn1cXG5cXG4ubmF2LWNvbnRyb2wtY29udGFpbmVyIHtcXG4gICAgLyogYm9yZGVyOiBzb2xpZCByZWQgMXB4OyAqL1xcbn1cXG5cXG4ubmF2LW5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9pY29ucy9wbHVzLnN2Zyk7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTsgKi9cXG59XFxuXFxuLm5hdi1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcblxcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEwMHB4LCBhdXRvKSk7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDsgKi9cXG5cXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG5cXG4gICAgLyogZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBncmlkLWF1dG8tZmxvdzogZGVuc2U7ICovXFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG5cXG4gICAgcGFkZGluZzogMnJlbTtcXG5cXG4gICAgZm9udC1zaXplOiB2YXIoLS1uYXYtaW5mby1mb250LXNpemUpO1xcbiAgICAvKiBvdmVyZmxvdzogc2Nyb2xsOyAqL1xcblxcbiAgICAvKiBib3JkZXI6IHNvbGlkIHJlZCAxcHg7ICovXFxuXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVyZW0gMC41cmVtIHJnYigwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4ubmF2LXByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuXFxuICAgIC8qIGhlaWdodDogbWlubWF4KDUwcHgsIDEwMHB4KTsgKi9cXG5cXG4gICAgLyogYm9yZGVyOiBzb2xpZCBwaW5rIDFweDsgKi9cXG59XFxuXFxuLm5hdi1wcm9qZWN0LXRpdGxlLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5uYXYtcHJvamVjdC10aXRsZS1pY29uIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2ljb25zL2RvdHMtaG9yaXpvbnRhbC1jaXJjbGUtb3V0bGluZS5zdmcpO1xcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbi5uYXYtcHJvamVjdC10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5uYXYtcHJvamVjdC1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgLyogaGVpZ2h0OiAyMDBweDsgKi9cXG5cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgeWVsbG93OyAqL1xcbn1cXG5cXG4ubmF2LWxpc3QtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjJyZW07XFxufVxcblxcbi5uYXYtbGlzdC10aXRsZS1pY29uIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2ljb25zL21lbnUtcmlnaHQtb3V0bGluZS5zdmcpO1xcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbi5uYXYtbGlzdC10aXRsZSB7XFxufVxcblxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNvbnRhaW5lci1jb2xvcik7XFxuICAgIC8qIGJvcmRlcjogc29saWQgMXB4IHJlZDsgKi9cXG5cXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LXZhbHVlcykgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpOyAqL1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEycmVtIDFmcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1tdXRlLWNvbG9yKSwgMSk7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgZ2FwOiAxLjVyZW07XFxuXFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgLyogb3ZlcmZsb3c6IHNjcm9sbDsgKi9cXG4gICAgLyogYm9yZGVyLXJhZGl1czogMC41cmVtOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0LWNvbnRhaW5lci1jb2xvcik7XFxuICAgIC8qIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdmFsdWVzKVxcbiAgICAgICAgcmdiYSh2YXIoLS1kcm9wLXNoYWRvdy1jb2xvci1jb2xvciksIDAuNSk7ICovXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdmFsdWVzLTEpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKSxcXG4gICAgICAgIHZhcigtLWJveC1zaGFkb3ctdmFsdWVzLTIpIHZhcigtLW1pbm9yLWRyb3Atc2hhZG93LWNvbG9yKTtcXG5cXG4gICAgLyogYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7ICovXFxufVxcblxcbi5wcm9qZWN0LXRpdGxlLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyO1xcbiAgICBmb250LXNpemU6IHZhcigtLXByb2plY3QtaW5mby1mb250LXNpemUpO1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDsgKi9cXG5cXG4gICAgcGFkZGluZzogMC41cmVtO1xcblxcbiAgICBib3gtc2hhZG93OiAwIDAgMC41cmVtIDAuNXJlbSByZ2IoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLnByb2plY3QtaW5mby1jb250YWluZXIge1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIHJlZCAxcHg7ICovXFxufVxcblxcbi5wcm9qZWN0LWNvbnRyb2wtY29udGFpbmVyIHtcXG4gICAgLyogYm9yZGVyOiBzb2xpZCBibHVlIDFweDsgKi9cXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgICBmb250LXNpemU6IHZhcigtLXByb2plY3QtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xcbn1cXG5cXG4ubmV3LXByb2plY3QtbGlzdC1idXR0b24ge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvcGx1cy5zdmcpO1xcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7ICovXFxufVxcblxcbi5jbG9zZS1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9pY29ucy9jbG9zZS1ib3gtb3V0bGluZS5zdmcpO1xcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7ICovXFxufVxcblxcbi5wcm9qZWN0LWNhcmQtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcblxcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tcm93czogYXV0bzsgKi9cXG5cXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIGdyZWVuIDFweDsgKi9cXG4gICAgZ2FwOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMC41cmVtO1xcblxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXNlY29uZGFyeS1jb2xvciksIDAuNSk7ICovXFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIC8qIGJveC1zaGFkb3c6IHZhcigtLW1pbm9yLWJveC1zaGFkb3ctdmFsdWVzKSB2YXIoLS1kcm9wLXNoYWRvdy1jb2xvcik7ICovXFxuICAgIC8qIGJveC1zaGFkb3c6IHZhcigtLW1pbm9yLWJveC1zaGFkb3ctcmV2ZXJzZS12YWx1ZXMpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKTsgKi9cXG4gICAgLyogYm9yZGVyLXJhZGl1czogMC41cmVtOyAqL1xcblxcbiAgICAvKiBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LXZhbHVlcy0xKSB2YXIoLS1kcm9wLXNoYWRvdy1jb2xvciksXFxuICAgICAgICB2YXIoLS1ib3gtc2hhZG93LXZhbHVlcy0yKSB2YXIoLS1taW5vci1kcm9wLXNoYWRvdy1jb2xvcik7ICovXFxuICAgIC8qIGJvcmRlcjogc29saWQgMXB4IGJsYWNrOyAqL1xcblxcbiAgICBib3gtc2hhZG93OiAwIDAgMC41cmVtIDAuNXJlbSByZ2IoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmxpc3QtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyO1xcbiAgICBmb250LXNpemU6IHZhcigtLWxpc3QtaW5mby1mb250LXNpemUpO1xcbn1cXG5cXG4ubGlzdC1pbmZvLWNvbnRhaW5lciB7XFxufVxcblxcbi5saXN0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1saXN0LXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5saXN0LWRlc2NyaXB0aW9uIHtcXG59XFxuXFxuLm5ldy1saXN0LWl0ZW0tYnV0dG9uIHtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2ljb25zL3BsdXMuc3ZnKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaWNvbi1kaW1lbnNpb24pO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxOyAqL1xcbn1cXG5cXG4ubGlzdC1lZGl0LWJ1dHRvbiB7XFxufVxcblxcbi5pdGVtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciAxZnI7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSwgMC41KTsgKi9cXG59XFxuXFxuLml0ZW0tY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLml0ZW0tY2hlY2tib3gge1xcbn1cXG5cXG4vKiBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gICAgaGVpZ2h0OiAxZW07XFxuICAgIHdpZHRoOiAxZW07XFxuXFxuICAgIGJhY2tncm91bmQ6ICMwYTBhMGE7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAwLjY1ZW07XFxuICAgIGhlaWdodDogMC42NWVtO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tZm9ybS1jb250cm9sLWNvbG9yKTtcXG59ICovXFxuXFxuLml0ZW0taW5mby1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taXRlbS1pbmZvLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5pdGVtLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1pdGVtLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5pdGVtLWRlc2NyaXB0aW9uIHtcXG59XFxuXFxuLml0ZW0tZHVlLWRhdGUge1xcbn1cXG5cXG4uaXRlbS1yZW1vdmUtYnV0dG9uIHtcXG59XFxuXFxuLmxvZ2luLXBhZ2UtYm9keSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMDUpO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbi5sb2dpbi1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxuXFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgNGZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuXFxuICAgIC8qIGJveC1zaGFkb3c6IHZhcigtLW1pbm9yLWJveC1zaGFkb3ctcmV2ZXJzZS12YWx1ZXMpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKSxcXG4gICAgICAgIHZhcigtLW1pbm9yLWJveC1zaGFkb3ctdmFsdWVzKSB2YXIoLS1kcm9wLXNoYWRvdy1jb2xvcik7ICovXFxuICAgIC8qIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdmFsdWVzLTEpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKSxcXG4gICAgICAgIHZhcigtLWJveC1zaGFkb3ctdmFsdWVzLTIpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKTsgKi9cXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNXJlbSAwLjVyZW0gcmdiKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5sb2dpbi1jb250cm9sLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgKi9cXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNXJlbSAwLjVyZW0gcmdiKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi51c2VyLWxpc3QtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNXJlbSAwLjVyZW0gcmdiKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi51c2VyLW5hbWUtb3B0aW9uIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWdlbmVyYWwtZm9udCk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taXRlbS10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgIGVsZW1lbnRUeXBlLFxuICAgIGVsZW1lbnRDbGFzc2VzID0ge30sXG4gICAgcGFyZW50RWxlbWVudCA9IG51bGwsXG4gICAgZWxlbWVudFRleHQgPSBudWxsXG4pIHtcbiAgICBpZiAoZWxlbWVudFR5cGUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcblxuICAgIGlmIChlbGVtZW50Q2xhc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGVsZW1lbnRDbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICAgICAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50VGV4dCAhPSBudWxsKSB7XG4gICAgICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50VGV4dDtcbiAgICB9XG5cbiAgICBpZiAocGFyZW50RWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhck5vZGVDb250ZW50KHRoaXNOb2RlKSB7XG4gICAgd2hpbGUgKHRoaXNOb2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGhpc05vZGUucmVtb3ZlQ2hpbGQodGhpc05vZGUubGFzdENoaWxkKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEcm9wZG93bihcbiAgICBkcm9wZG93bkJ1dHRvblRleHQsXG4gICAgZHJvcGRvd25JdGVtc0RpdixcbiAgICBwYXJlbnREaXYgPSBudWxsXG4pIHtcbiAgICBjb25zdCBkcm9wRG93bkNvbnRhaW5lckRpdiA9IGdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFtcImRyb3Bkb3duLWNvbnRhaW5lci1kaXZcIl0sXG4gICAgICAgIHBhcmVudERpdlxuICAgICk7XG4gICAgY29uc3QgZHJvcGRvd25CdXR0b24gPSBnZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBbXCJkcm9wZG93bi1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgIGRyb3BEb3duQ29udGFpbmVyRGl2LFxuICAgICAgICBkcm9wZG93bkJ1dHRvblRleHRcbiAgICApO1xuICAgIGRyb3BEb3duQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGRyb3Bkb3duSXRlbXNEaXYpO1xuICAgIHRoaXMubWVudVNob3dIaWRlKGRyb3Bkb3duSXRlbXNEaXYpO1xuXG4gICAgZHJvcGRvd25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5tZW51U2hvd0hpZGUoZHJvcGRvd25JdGVtc0Rpdik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZHJvcERvd25Db250YWluZXJEaXY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZW51U2hvd0hpZGUoZHJvcERvd25JdGVtc0Rpdikge1xuICAgIGlmIChkcm9wRG93bkl0ZW1zRGl2LnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIpIHtcbiAgICAgICAgZHJvcERvd25JdGVtc0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRyb3BEb3duSXRlbXNEaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn1cbiIsIi8vaW1wb3J0ICogYXMgVGFzayBmcm9tIFwiLi9UYXNrLmpzXCI7XG4vL2ltcG9ydCAqIGFzIEdlbmVyYXRlRWxlbWVudCBmcm9tIFwiLi9HZW5lcmF0ZVBhZ2VFbGVtZW50LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3Qge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbiA9IFwiTm8gZGVzY3JpcHRpb24gc2V0XCIsXG4gICAgICAgIHRhc2tzID0gW10sXG4gICAgICAgIHBhcmVudFByb2plY3RcbiAgICApIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0ID0gcGFyZW50UHJvamVjdDtcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHNldE5hbWUobmV3TmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0VGFza3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICAgIH1cblxuICAgIHNldFRhc2tzKHRhc2tzTGlzdCkge1xuICAgICAgICB0aGlzLnRhc2tzID0gdGFza3NMaXN0O1xuICAgIH1cblxuICAgIGdldFRhc2sodGFza05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IHRhc2tOYW1lKTtcbiAgICB9XG5cbiAgICBjb250YWluc1Rhc2sodGFza05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3Muc29tZSgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT0gdGFza05hbWUpO1xuICAgIH1cblxuICAgIGFkZFRhc2sobmV3VGFzaykge1xuICAgICAgICBpZiAoIXRoaXMuY29udGFpbnNUYXNrKG5ld1Rhc2suZ2V0TmFtZSgpKSkge1xuICAgICAgICAgICAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlVGFzayh0YXNrTmFtZSkge1xuICAgICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpICE9PSB0YXNrTmFtZSk7XG4gICAgfVxuXG4gICAgc2V0Q29udGFpbmVyTm9kZShjb250YWluZXJOb2RlKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyTm9kZSA9IGNvbnRhaW5lck5vZGU7XG4gICAgfVxuXG4gICAgZ2V0Q29udGFpbmVyTm9kZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyTm9kZTtcbiAgICAgICAgfVxuICAgICAgICAvL1RPRE86IFNob3VsZCB0aGVyZSBiZSBhIHJldHVybiB2YWx1ZSBpZiB0aGVyZSBpc24ndCBhIG5vZGUgYXNzaWduZWQgYWxyZWFkeT9cbiAgICAgICAgLy9TaG91bGQgdGhpcyBwcm9wZXJ0eSBqdXN0IGJlIGluaXRpYWxpemVkIGFzIGEgYmxhbmsgc29tZWhvdyB3aGVuIHRoaXMgb2JqZWN0IGlzIGNyZWF0ZWQ/XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgR2VuZXJhdGVFbGVtZW50IGZyb20gXCIuL0dlbmVyYXRlUGFnZUVsZW1lbnQuanNcIjtcbmltcG9ydCBVSSBmcm9tIFwiLi9VSS5qc1wiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vU3RvcmFnZS5qc1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpblVJIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5uZXdTdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcbiAgICAgICAgdGhpcy51c2VyTGlzdCA9IHRoaXMubmV3U3RvcmFnZS5nZXRVc2VycygpO1xuICAgICAgICB0aGlzLnBhZ2VCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVMb2dpblBhZ2UoKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUxvZ2luUGFnZSgpIHtcbiAgICAgICAgdGhpcy5sb2dpblBhZ2VCb2R5ID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibG9naW4tcGFnZS1ib2R5XCJdLFxuICAgICAgICAgICAgdGhpcy5wYWdlQm9keVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMubG9naW5Db250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJsb2dpbi1jb250YWluZXJcIl0sXG4gICAgICAgICAgICB0aGlzLmxvZ2luUGFnZUJvZHlcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmxvZ2luQ29udHJvbENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcImxvZ2luLWNvbnRyb2wtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgdGhpcy5sb2dpbkNvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVMb2dpbkNvbnRyb2xzKHRoaXMubG9naW5Db250cm9sQ29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLnVzZXJMaXN0Q29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1widXNlci1saXN0LWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHRoaXMubG9naW5Db250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmNyZWF0ZVVzZXJMaXN0RGl2KCk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVMb2dpbkNvbnRyb2xzKGxvZ2luQ29udHJvbENvbnRhaW5lcikge1xuICAgICAgICB0aGlzLm5ld1VzZXJCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuZXctdXNlci1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBsb2dpbkNvbnRyb2xDb250YWluZXIsXG4gICAgICAgICAgICBcIm5ldyB1c2VyXCJcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5uZXdVc2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU5ld1VzZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zYXZlVXNlcnNCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuZXctdXNlci1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBsb2dpbkNvbnRyb2xDb250YWluZXIsXG4gICAgICAgICAgICBcInNhdmUgdXNlcnNcIlxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNhdmVVc2Vyc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZXdTdG9yYWdlLnN0b3JlVXNlckFycmF5KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2xlYXJVc2Vyc0J1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5ldy11c2VyLWJ1dHRvblwiLCBcImJ1dHRvblwiXSxcbiAgICAgICAgICAgIGxvZ2luQ29udHJvbENvbnRhaW5lcixcbiAgICAgICAgICAgIFwiY2xlYXIgdXNlcnNcIlxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNsZWFyVXNlcnNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmV3U3RvcmFnZS5kZWxldGVVc2VyQXJyYXkoKTtcbiAgICAgICAgICAgIHRoaXMubmV3U3RvcmFnZS5yZWZyZXNoVXNlckFycmF5KCk7XG4gICAgICAgICAgICB0aGlzLnVzZXJMaXN0ID0gdGhpcy5uZXdTdG9yYWdlLnVzZXJMaXN0O1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoTG9naW5QYWdlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZVVzZXJMaXN0RGl2KCkge1xuICAgICAgICB0aGlzLnVzZXJMaXN0LmZvckVhY2goKHVzZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlckxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVOZXdVc2VyRGl2KHVzZXIpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJVc2VyTGlzdERpdigpIHtcbiAgICAgICAgdGhpcy51c2VyTGlzdENvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICByZWxvYWRVc2VyTGlzdCgpIHtcbiAgICAgICAgdGhpcy5jbGVhclVzZXJMaXN0RGl2KCk7XG4gICAgICAgIHRoaXMuY3JlYXRlVXNlckxpc3REaXYoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdVc2VyRGl2KHVzZXIpIHtcbiAgICAgICAgY29uc3QgdXNlckRpdiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcInVzZXItbmFtZS1vcHRpb25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgdXNlci5uYW1lXG4gICAgICAgICk7XG4gICAgICAgIHVzZXJEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTmV3VUkodXNlcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXNlckRpdjtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdVSSh1c2VyKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQYWdlQm9keSgpO1xuICAgICAgICBjb25zdCBuZXdQYWdlID0gbmV3IFVJKHVzZXIsIHRoaXMubmV3U3RvcmFnZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgY2xlYXJQYWdlQm9keSgpIHtcbiAgICAgICAgdGhpcy5wYWdlQm9keS5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdVc2VyKCkge1xuICAgICAgICBjb25zdCBuZXdVc2VyTmFtZSA9IHByb21wdChcIk5ldyBVc2VyIG5hbWU/XCIpO1xuICAgICAgICBjb25zdCBuZXdVc2VyID0gbmV3IFVzZXIobmV3VXNlck5hbWUsIFtdLCB0aGlzLnVzZXJMaXN0KTtcblxuICAgICAgICBpZiAoIXRoaXMubmV3U3RvcmFnZS5kb2VzVXNlckFscmVhZHlFeGlzdChuZXdVc2VyKSkge1xuICAgICAgICAgICAgdGhpcy51c2VyTGlzdC5wdXNoKG5ld1VzZXIpO1xuICAgICAgICAgICAgdGhpcy5uZXdTdG9yYWdlLnN0b3JlVXNlckFycmF5KCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBPcmlnaW5hbCAoc3RvcmVkKSB1c2VyIGxpc3Q6YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5ld1N0b3JhZ2Uuc3RvcmVkVXNlckxpc3QpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEN1cnJlbnQgdXNlciBsaXN0OmApO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5uZXdTdG9yYWdlLnVzZXJMaXN0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbG9hZFVzZXJMaXN0KCk7XG4gICAgfVxuXG4gICAgcmVmcmVzaExvZ2luUGFnZSgpIHtcbiAgICAgICAgdGhpcy5jbGVhclBhZ2VCb2R5KCk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVMb2dpblBhZ2UoKTtcbiAgICB9XG59XG4iLCIvL2ltcG9ydCAqIGFzIExpc3QgZnJvbSBcIi4vTGlzdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICAvL1RPRE86IFNob3VsZCB0aGUgcHJvamVjdCBoYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBVSSBlbGVtZW50IGNvbnRhaW5pbmcgaXQncyBpbmZvcm1hdGlvbiB0byBtYWtlIHVwZGF0aW5nIHNhaWQgVUkgZWxlbWVudCBlYXNpZXI/XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gXCJObyBkZXNjcmlwdGlvbiBzZXRcIixcbiAgICAgICAgbGlzdHMgPSBbXSxcbiAgICAgICAgcGFyZW50VXNlclxuICAgICkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMubGlzdHMgPSBsaXN0cztcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QgPSBwYXJlbnRVc2VyO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXRUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdHM7XG4gICAgfVxuXG4gICAgc2V0TGlzdHMobGlzdHMpIHtcbiAgICAgICAgdGhpcy5saXN0cyA9IGxpc3RzO1xuICAgIH1cblxuICAgIGNvbnRhaW5zTGlzdChsaXN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0cy5zb21lKChsaXN0KSA9PiBsaXN0LmdldE5hbWUoKSA9PSBsaXN0TmFtZSk7XG4gICAgfVxuXG4gICAgYWRkTGlzdChuZXdMaXN0KSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluc0xpc3QobmV3TGlzdC5nZXROYW1lKCkpKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RzLnB1c2gobmV3TGlzdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVMaXN0KGxpc3ROYW1lKSB7XG4gICAgICAgIHRoaXMubGlzdHMgPSB0aGlzLmxpc3RzLmZpbHRlcigobGlzdCkgPT4gbGlzdC5nZXROYW1lKCkgIT09IGxpc3ROYW1lKTtcbiAgICB9XG5cbiAgICBzZXRDb250YWluZXJOb2RlKGNvbnRhaW5lck5vZGUpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJOb2RlID0gY29udGFpbmVyTm9kZTtcbiAgICB9XG5cbiAgICBnZXRDb250YWluZXJOb2RlKCkge1xuICAgICAgICBpZiAodGhpcy5jb250YWluZXJOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXJOb2RlO1xuICAgICAgICB9XG4gICAgICAgIC8vVE9ETzogU2hvdWxkIHRoZXJlIGJlIGEgcmV0dXJuIHZhbHVlIGlmIHRoZXJlIGlzbid0IGEgbm9kZSBhc3NpZ25lZCBhbHJlYWR5P1xuICAgICAgICAvL1Nob3VsZCB0aGlzIHByb3BlcnR5IGp1c3QgYmUgaW5pdGlhbGl6ZWQgYXMgYSBibGFuayBzb21laG93IHdoZW4gdGhpcyBvYmplY3QgaXMgY3JlYXRlZD9cbiAgICB9XG59XG4iLCIvL2ltcG9ydCBVc2VyIGZyb20gXCIuL1VzZXIuanNcIjtcbmltcG9ydCBzdG9yYWdlRmlsZSBmcm9tIFwiLi91c2VyU3RvcmFnZS5qc29uXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrLmpzXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0LmpzXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0LmpzXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlZnJlc2hVc2VyQXJyYXkoKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyTGlzdCk7XG4gICAgfVxuXG4gICAgZ2V0VXNlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJMaXN0O1xuICAgIH1cblxuICAgIHJlZnJlc2hVc2VyQXJyYXkoKSB7XG4gICAgICAgIGNvbnN0IGpzb25UZXh0T2ZTdG9yZWRVc2VyQXJyYXkgPSB0aGlzLmdldEZyb21Mb2NhbFN0b3JhZ2UoKTtcblxuICAgICAgICB0aGlzLnN0b3JlZFVzZXJMaXN0ID0gdGhpcy5wYXJzZVVzZXJzKGpzb25UZXh0T2ZTdG9yZWRVc2VyQXJyYXkpO1xuICAgICAgICB0aGlzLnVzZXJMaXN0ID0gdGhpcy5wYXJzZVVzZXJzKGpzb25UZXh0T2ZTdG9yZWRVc2VyQXJyYXkpO1xuICAgIH1cblxuICAgIHBhcnNlVXNlcnMoanNvblRleHRPZlN0b3JlZFVzZXJBcnJheSkge1xuICAgICAgICBjb25zdCB1c2VycyA9IFtdO1xuXG4gICAgICAgIGpzb25UZXh0T2ZTdG9yZWRVc2VyQXJyYXkuZm9yRWFjaCgodXNlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNlck5hbWUgPSB1c2VyLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyID0gbmV3IFVzZXIodXNlck5hbWUsIFtdLCBqc29uVGV4dE9mU3RvcmVkVXNlckFycmF5KTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJQcm9qZWN0cyA9IHRoaXMucGFyc2VQcm9qZWN0cyh1c2VyLnByb2plY3RzLCBuZXdVc2VyKTtcbiAgICAgICAgICAgIG5ld1VzZXIuc2V0UHJvamVjdHModXNlclByb2plY3RzKTtcbiAgICAgICAgICAgIHVzZXJzLnB1c2gobmV3VXNlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB1c2VycztcbiAgICB9XG5cbiAgICBwYXJzZVByb2plY3RzKGpzb25Qcm9qZWN0cywgcGFyZW50VXNlcikge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuICAgICAgICBqc29uUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KFxuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICBwYXJlbnRVc2VyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3RzID0gdGhpcy5wYXJzZUxpc3RzKHByb2plY3QubGlzdHMsIG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgbmV3UHJvamVjdC5zZXRMaXN0cyhwcm9qZWN0TGlzdHMpO1xuICAgICAgICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICB9XG5cbiAgICBwYXJzZUxpc3RzKGpzb25MaXN0cywgcGFyZW50UHJvamVjdCkge1xuICAgICAgICBjb25zdCBsaXN0cyA9IFtdO1xuICAgICAgICBqc29uTGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdE5hbWUgPSBsaXN0Lm5hbWU7XG4gICAgICAgICAgICBjb25zdCBsaXN0RGVzY3JpcHRpb24gPSBsaXN0LmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IG5ldyBMaXN0KFxuICAgICAgICAgICAgICAgIGxpc3ROYW1lLFxuICAgICAgICAgICAgICAgIGxpc3REZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICBwYXJlbnRQcm9qZWN0XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgbGlzdFRhc2tzID0gdGhpcy5wYXJzZVRhc2tzKGxpc3QudGFza3MsIG5ld0xpc3QpO1xuICAgICAgICAgICAgbmV3TGlzdC5zZXRUYXNrcyhsaXN0VGFza3MpO1xuICAgICAgICAgICAgbGlzdHMucHVzaChuZXdMaXN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBsaXN0cztcbiAgICB9XG5cbiAgICBwYXJzZVRhc2tzKGpzb25UYXNrcywgcGFyZW50TGlzdCkge1xuICAgICAgICBjb25zdCB0YXNrcyA9IFtdO1xuICAgICAgICBqc29uVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSB0YXNrLm5hbWU7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgICAgICBjb25zdCB0YXNrQ2hlY2tlZCA9IHRhc2suY2hlY2tlZDtcblxuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFxuICAgICAgICAgICAgICAgIHRhc2tOYW1lLFxuICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlLFxuICAgICAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBwYXJlbnRMaXN0LFxuICAgICAgICAgICAgICAgIHRhc2tDaGVja2VkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGFza3MucHVzaChuZXdUYXNrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0YXNrcztcbiAgICB9XG5cbiAgICAvL1JldHVybnMgYW4gYXJyYXkgb2YgdXNlciBvYmplY3RzIGVpdGhlciBmcm9tIGJhc2UgZmlsZSBvciBmcm9tIHRoZSBzdG9yZWQgZmlsZSBvZiB1c2Vyc1xuICAgIGdldEZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlZFVzZXJzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyU3RvcmFnZVwiKTtcblxuICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclN0b3JhZ2VcIikpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gdXNlcnMgc3RvcmVkIGluIGxvY2FsU3RvcmFnZS5cIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJldHJpZXZpbmcgdXNlciBsaXN0IGZyb20gdXNlclN0b3JhZ2UuanNvbi5cIik7XG4gICAgICAgICAgICByZXR1cm4gc3RvcmFnZUZpbGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RvcmVkVXNlcnMpO1xuICAgIH1cblxuICAgIC8vQ2hlY2tzIHRvIHNlZSBpZiBhIHVzZXIgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIHRoZSBwcm92aWRlZCB1c2VyIG9iamVjdCBhbHJlYWR5IGV4aXN0cy4gSWYgaXQgZG9lcywgdGhlIGV4aXN0aW5nIHVzZXIgaXMgb3ZlcndyaXR0ZW4gd2l0aCBwcm92aWRlZCB1c2VyIG9iamVjdCwgb3RoZXJ3aXNlIHRoZSBwcm92aWRlZCB1c2VyIGlzIGp1c3QgYXBwZW5kZWQgdG8gdGhlIGV4aXN0aW5nIGFycmF5IG9mIHVzZXJzLiBUaGUgYXJyYXkgb2YgdXNlcnMgaXMgdGhlbiBzYXZlZCBpbiBsb2NhbFN0b3JhZ2UuXG4gICAgb3ZlcndyaXRlU2F2ZWRVc2VyKHVzZXJUb1N0b3JlKSB7XG4gICAgICAgIGlmICh0aGlzLmRvZXNVc2VyQWxyZWFkeUV4aXN0KHVzZXJUb1N0b3JlKSkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy51c2VyTGlzdC5maW5kKFxuICAgICAgICAgICAgICAgICh1c2VyKSA9PiB1c2VyLm5hbWUgPT09IHVzZXJUb1N0b3JlLm5hbWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgdXNlclRvU3RvcmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51c2VyTGlzdC5wdXNoKHVzZXJUb1N0b3JlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0b3JlVXNlckFycmF5KCk7XG4gICAgfVxuXG4gICAgZG9lc1VzZXJBbHJlYWR5RXhpc3QodXNlclRvQ2hlY2spIHtcbiAgICAgICAgY29uc3QgY29udGFpbnNVc2VyID0gdGhpcy51c2VyTGlzdC5zb21lKFxuICAgICAgICAgICAgKHVzZXIpID0+IHVzZXIubmFtZSA9PT0gdXNlclRvQ2hlY2submFtZVxuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmxvZyhgQ29udGFpbnMgVXNlciAke3VzZXJUb0NoZWNrfT8gOiAke2NvbnRhaW5zVXNlcn1gKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5zVXNlcjtcbiAgICB9XG5cbiAgICBzdG9yZVVzZXJBcnJheSgpIHtcbiAgICAgICAgY29uc3QgdG9TZW5kVG9TdG9yYWdlID0gSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICB0aGlzLnVzZXJMaXN0LFxuICAgICAgICAgICAgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXkgPT09IFwicGFyZW50T2JqZWN0XCIgPyB1bmRlZmluZWQgOiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJTdG9yYWdlXCIsIHRvU2VuZFRvU3RvcmFnZSk7XG4gICAgfVxuXG4gICAgZGVsZXRlVXNlckFycmF5KCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJTdG9yYWdlXCIpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBuYW1lLFxuICAgICAgICBkdWVEYXRlID0gXCJObyBkdWUgZGF0ZSBzZXQuXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gXCJObyBkZXNjcmlwdGlvbiBzZXQgeWV0LlwiLFxuICAgICAgICBwYXJlbnRMaXN0LFxuICAgICAgICBjaGVja2VkID0gZmFsc2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnBhcmVudE9iamVjdCA9IHBhcmVudExpc3Q7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBzZXROYW1lKG5ld05hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICB9XG5cbiAgICBnZXREYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICAgIH1cblxuICAgIHNldERhdGUobmV3RGF0ZSkge1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBuZXdEYXRlO1xuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0Q29udGFpbmVyTm9kZShjb250YWluZXJOb2RlKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyTm9kZSA9IGNvbnRhaW5lck5vZGU7XG4gICAgfVxuXG4gICAgZ2V0Q29udGFpbmVyTm9kZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyTm9kZTtcbiAgICAgICAgfVxuICAgICAgICAvL1RPRE86IFNob3VsZCB0aGVyZSBiZSBhIHJldHVybiB2YWx1ZSBpZiB0aGVyZSBpc24ndCBhIG5vZGUgYXNzaWduZWQgYWxyZWFkeT9cbiAgICAgICAgLy9TaG91bGQgdGhpcyBwcm9wZXJ0eSBqdXN0IGJlIGluaXRpYWxpemVkIGFzIGEgYmxhbmsgc29tZWhvdyB3aGVuIHRoaXMgb2JqZWN0IGlzIGNyZWF0ZWQ/XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgR2VuZXJhdGVFbGVtZW50IGZyb20gXCIuL0dlbmVyYXRlUGFnZUVsZW1lbnQuanNcIjtcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL1N0b3JhZ2UuanNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2suanNcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3QuanNcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3QuanNcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuL1VzZXIuanNcIjtcbmltcG9ydCBMb2dpblVJIGZyb20gXCIuL0xvZ2luVUkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICAgIC8vSW5pdGlhbGl6ZSBwYWdlIGJvZHksIG5hdiBjb250YWluZXIsIGFuZCBjb250ZW50IGNvbnRhaW5lciBwYWdlIGVsZW1lbnRzIHRvIGJlIGxhdGVyIHBvcHVsYXRlZFxuICAgIGNvbnN0cnVjdG9yKHRoaXNVc2VyLCB0aGlzU3RvcmFnZSwgdGhpc0xvZ2luVUkpIHtcbiAgICAgICAgdGhpcy5uZXdTdG9yYWdlID0gdGhpc1N0b3JhZ2U7XG4gICAgICAgIHRoaXMudXNlciA9IHRoaXNVc2VyO1xuICAgICAgICB0aGlzLmxvZ2luVUkgPSB0aGlzTG9naW5VSTtcblxuICAgICAgICB0aGlzLnBhZ2VCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICAgIHRoaXMubmF2Q29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibmF2LWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucGFnZUJvZHkuYXBwZW5kQ2hpbGQodGhpcy5uYXZDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMuY29udGVudENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcImNvbnRlbnQtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wYWdlQm9keS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnRDb250YWluZXIpO1xuXG4gICAgICAgIGlmICh0aGlzLnVzZXIucHJvamVjdHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRQYWdlQ29udGVudCh0aGlzLnVzZXIucHJvamVjdHNbMF0ubmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRQYWdlQ29udGVudCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9DbGVhcnMgYW5kIHBvcHVsYXRlcyBuYXYgYW5kIGRpc3BsYXkgcGFuZXNcbiAgICBsb2FkUGFnZUNvbnRlbnQobmFtZU9mUHJvamVjdFRvTG9hZCA9IFwiXCIpIHtcbiAgICAgICAgdGhpcy5yZWxvYWROYXZDb250ZW50KCk7XG5cbiAgICAgICAgdGhpcy5jbGVhckRpc3BsYXlDb250ZW50KCk7XG4gICAgICAgIC8vSW4gY2FzZSB0aGVyZSBpc24ndCBhIHByb2plY3QgdG8gbG9hZC4uLi5cbiAgICAgICAgaWYgKG5hbWVPZlByb2plY3RUb0xvYWQgIT0gXCJcIikge1xuICAgICAgICAgICAgdGhpcy5maWxsRGlzcGxheVBhbmVDb250ZW50KG5hbWVPZlByb2plY3RUb0xvYWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJOYXZDb250ZW50KCkge1xuICAgICAgICB0aGlzLm5hdkNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICByZWxvYWROYXZDb250ZW50KCkge1xuICAgICAgICB0aGlzLmNsZWFyTmF2Q29udGVudCgpO1xuICAgICAgICB0aGlzLmZpbGxOYXZDb250ZW50KCk7XG4gICAgfVxuXG4gICAgY2xlYXJEaXNwbGF5Q29udGVudCgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIH1cblxuICAgIGZpbGxOYXZDb250ZW50KCkge1xuICAgICAgICBjb25zdCBuYXZJbmZvQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibmF2LWluZm8tY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgdGhpcy5uYXZDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBuYXZUaXRsZUNvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi10aXRsZS1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBuYXZJbmZvQ29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgbmF2Q29udHJvbENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1jb250cm9sLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0RHJvcGRvd25Db250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuY3JlYXRlRHJvcGRvd24oXG4gICAgICAgICAgICBcIm9wdGlvbnNcIixcbiAgICAgICAgICAgIG5hdkNvbnRyb2xDb250YWluZXIsXG4gICAgICAgICAgICBuYXZJbmZvQ29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgbmF2VGl0bGUgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtdGl0bGVcIl0sXG4gICAgICAgICAgICBuYXZUaXRsZUNvbnRhaW5lcixcbiAgICAgICAgICAgIFwiTXkgUHJvamVjdHNcIlxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGFkZE5ld1Byb2plY3RCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtbmV3LXByb2plY3QtYnV0dG9uXCIsIFwiYnV0dG9uXCJdLFxuICAgICAgICAgICAgbmF2Q29udHJvbENvbnRhaW5lcixcbiAgICAgICAgICAgIFwiYWRkIHByb2plY3RcIlxuICAgICAgICApO1xuICAgICAgICBhZGROZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU5ld1Byb2plY3QoKTtcbiAgICAgICAgICAgIHRoaXMucmVsb2FkTmF2Q29udGVudCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzYXZlQnV0dG9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibmF2LXNhdmUtdXNlcnMtYnV0dG9uXCIsIFwiYnV0dG9uXCJdLFxuICAgICAgICAgICAgbmF2Q29udHJvbENvbnRhaW5lcixcbiAgICAgICAgICAgIFwic2F2ZVwiXG4gICAgICAgICk7XG4gICAgICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmV3U3RvcmFnZS5vdmVyd3JpdGVTYXZlZFVzZXIodGhpcy51c2VyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZXhpdFRvTG9naW5CdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtZXhpdC1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBuYXZDb250cm9sQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJleGl0XCJcbiAgICAgICAgKTtcbiAgICAgICAgZXhpdFRvTG9naW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9naW5VSS5yZWZyZXNoTG9naW5QYWdlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG5hdkNvbnRlbnRDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtY29udGVudC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICB0aGlzLm5hdkNvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMucG9wdWxhdGVOYXZDb250ZW50KG5hdkNvbnRlbnRDb250YWluZXIsIHRoaXMudXNlci5wcm9qZWN0cyk7XG5cbiAgICAgICAgdGhpcy5uYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2Q29udGVudENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcG9wdWxhdGVOYXZDb250ZW50KG5hdkNvbnRlbnRDb250YWluZXIsIHByb2plY3RzKSB7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIG5hdkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQcm9qZWN0TmF2VmlzdWFsKHByb2plY3QpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVQcm9qZWN0TmF2VmlzdWFsKHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFwiZGl2XCIsIFtcbiAgICAgICAgICAgIFwibmF2LXByb2plY3QtY29udGFpbmVyXCIsXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUNvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1wcm9qZWN0LXRpdGxlLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVJY29uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibmF2LXByb2plY3QtdGl0bGUtaWNvblwiXSxcbiAgICAgICAgICAgIHByb2plY3RUaXRsZUNvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1wcm9qZWN0LXRpdGxlXCIsIFwiYnV0dG9uXCJdLFxuICAgICAgICAgICAgcHJvamVjdFRpdGxlQ29udGFpbmVyLFxuICAgICAgICAgICAgcHJvamVjdC5uYW1lXG4gICAgICAgICk7XG4gICAgICAgIHByb2plY3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGVhckRpc3BsYXlDb250ZW50KCk7XG4gICAgICAgICAgICB0aGlzLmZpbGxEaXNwbGF5UGFuZUNvbnRlbnQoYCR7cHJvamVjdC5uYW1lfWApO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGVudENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1wcm9qZWN0LWNvbnRlbnQtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIHByb2plY3QubGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdENvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVMaXN0TmF2VmlzdWFsKGxpc3QpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3RDb250YWluZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlTGlzdE5hdlZpc3VhbChsaXN0KSB7XG4gICAgICAgIGNvbnN0IGxpc3RUaXRsZUNvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFwiZGl2XCIsIFtcbiAgICAgICAgICAgIFwibmF2LWxpc3QtdGl0bGUtY29udGFpbmVyXCIsXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGNvbnN0IGxpc3RUaXRsZUljb24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtbGlzdC10aXRsZS1pY29uXCJdLFxuICAgICAgICAgICAgbGlzdFRpdGxlQ29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgbGlzdFRpdGxlRGl2ID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibmF2LWxpc3QtdGl0bGVcIl0sXG4gICAgICAgICAgICBsaXN0VGl0bGVDb250YWluZXIsXG4gICAgICAgICAgICBsaXN0Lm5hbWVcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gbGlzdFRpdGxlQ29udGFpbmVyO1xuICAgIH1cblxuICAgIC8vQ2hlY2tzIHRoYXQgYSBwcm9qZWN0IGJ5IHRoYXQgbmFtZSBleGlzdHMgYW5kIHRoZW4gc2VuZHMgdGhhdCBwcm9qZWN0IG5hbWUgb24gdG8gYmUgYWRkZWQgdG8gdGhlIHdvcmtzcGFjZVxuICAgIGZpbGxEaXNwbGF5UGFuZUNvbnRlbnQocHJvamVjdE5hbWUgPSBcImRlZmF1bHRcIikge1xuICAgICAgICBpZiAoIXRoaXMudXNlci5jb250YWluc1Byb2plY3QocHJvamVjdE5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFwiZGl2XCIsIFtcbiAgICAgICAgICAgIFwicHJvamVjdC1jb250YWluZXJcIixcbiAgICAgICAgXSk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVQcm9qZWN0VmlzdWFsKFxuICAgICAgICAgICAgdGhpcy51c2VyLmdldFByb2plY3QocHJvamVjdE5hbWUpLFxuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lclxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgY3JlYXRlUHJvamVjdFZpc3VhbChwcm9qZWN0LCBwcm9qZWN0Q29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUNvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcInByb2plY3QtdGl0bGUtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RJbmZvQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wicHJvamVjdC1pbmZvLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHByb2plY3RUaXRsZUNvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250cm9sQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wicHJvamVjdC1jb250cm9sLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0RHJvcGRvd25Db250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuY3JlYXRlRHJvcGRvd24oXG4gICAgICAgICAgICBcIm9wdGlvbnNcIixcbiAgICAgICAgICAgIHByb2plY3RDb250cm9sQ29udGFpbmVyLFxuICAgICAgICAgICAgcHJvamVjdFRpdGxlQ29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdENhcmRDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJwcm9qZWN0LWNhcmQtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wicHJvamVjdC10aXRsZVwiXSxcbiAgICAgICAgICAgIHByb2plY3RJbmZvQ29udGFpbmVyLFxuICAgICAgICAgICAgcHJvamVjdC5uYW1lXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wicHJvamVjdC1kZXNjcmlwdGlvblwiXSxcbiAgICAgICAgICAgIHByb2plY3RJbmZvQ29udGFpbmVyLFxuICAgICAgICAgICAgcHJvamVjdC5kZXNjcmlwdGlvblxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZU5ld0xpc3RCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuZXctcHJvamVjdC1saXN0LWJ1dHRvblwiLCBcImJ1dHRvblwiXSxcbiAgICAgICAgICAgIHByb2plY3RDb250cm9sQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJuZXcgbGlzdFwiXG4gICAgICAgICk7XG4gICAgICAgIGNyZWF0ZU5ld0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0xpc3QgPSB0aGlzLmNyZWF0ZUxpc3QocHJvamVjdCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2plY3RWaXN1YWwocHJvamVjdCk7XG4gICAgICAgICAgICB0aGlzLnJlbG9hZE5hdkNvbnRlbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY2xvc2VQcm9qZWN0QnV0dG9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiY2xvc2UtcHJvamVjdC1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBwcm9qZWN0Q29udHJvbENvbnRhaW5lcixcbiAgICAgICAgICAgIFwiY2xvc2UgcHJvamVjdFwiXG4gICAgICAgICk7XG4gICAgICAgIGNsb3NlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGVhckRpc3BsYXlDb250ZW50KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJpdGVtLXJlbW92ZS1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBwcm9qZWN0Q29udHJvbENvbnRhaW5lcixcbiAgICAgICAgICAgIFwiZGVsZXRlIHByb2plY3RcIlxuICAgICAgICApO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0LnBhcmVudE9iamVjdC5yZW1vdmVQcm9qZWN0KHByb2plY3QubmFtZSk7XG4gICAgICAgICAgICB0aGlzLmxvYWRQYWdlQ29udGVudCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBlZGl0UHJvamVjdEJ1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcInByb2plY3QtZWRpdC1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBwcm9qZWN0Q29udHJvbENvbnRhaW5lcixcbiAgICAgICAgICAgIFwiZWRpdCBwcm9qZWN0XCJcbiAgICAgICAgKTtcbiAgICAgICAgZWRpdFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWRpdFByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2plY3RWaXN1YWwocHJvamVjdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYXBwZW5kQWxsTGlzdHNUb1Byb2plY3QocHJvamVjdENhcmRDb250YWluZXIsIHByb2plY3QubGlzdHMpO1xuXG4gICAgICAgIHByb2plY3Quc2V0Q29udGFpbmVyTm9kZShwcm9qZWN0Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBhcHBlbmRBbGxMaXN0c1RvUHJvamVjdChwcm9qZWN0Q29udGFpbmVyLCBsaXN0cykge1xuICAgICAgICBsaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZExpc3QobGlzdCwgcHJvamVjdENvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFwcGVuZExpc3QobGlzdCwgcHJvamVjdENvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXCJkaXZcIiwgW1xuICAgICAgICAgICAgXCJsaXN0LWNvbnRhaW5lclwiLFxuICAgICAgICBdKTtcbiAgICAgICAgdGhpcy5jcmVhdGVMaXN0VmlzdWFsKGxpc3QsIGxpc3RDb250YWluZXIpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xuICAgIH1cblxuICAgIGNyZWF0ZUxpc3RWaXN1YWwobGlzdCwgbGlzdENvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBsaXN0VGl0bGVDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJsaXN0LXRpdGxlLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIGxpc3RDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBsaXN0SW5mb0NvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcImxpc3QtaW5mby1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBsaXN0VGl0bGVDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBsaXN0Q29udHJvbENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcImxpc3QtY29udHJvbC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBudWxsXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdERyb3Bkb3duQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmNyZWF0ZURyb3Bkb3duKFxuICAgICAgICAgICAgXCJvcHRpb25zXCIsXG4gICAgICAgICAgICBsaXN0Q29udHJvbENvbnRhaW5lcixcbiAgICAgICAgICAgIGxpc3RUaXRsZUNvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGxpc3RDYXJkQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibGlzdC1jYXJkLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIGxpc3RDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcImxpc3QtdGl0bGVcIl0sXG4gICAgICAgICAgICBsaXN0SW5mb0NvbnRhaW5lcixcbiAgICAgICAgICAgIGxpc3QubmFtZVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGxpc3REZXNjcmlwdGlvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcImxpc3QtZGVzY3JpcHRpb25cIl0sXG4gICAgICAgICAgICBsaXN0SW5mb0NvbnRhaW5lcixcbiAgICAgICAgICAgIGxpc3QuZGVzY3JpcHRpb25cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBhZGROZXdUYXNrQnV0dG9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibmV3LWxpc3QtaXRlbS1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBsaXN0Q29udHJvbENvbnRhaW5lcixcbiAgICAgICAgICAgIFwibmV3IHRhc2tcIlxuICAgICAgICApO1xuICAgICAgICBhZGROZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gdGhpcy5jcmVhdGVUYXNrKGxpc3QpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMaXN0VmlzdWFsKGxpc3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZW1vdmVMaXN0QnV0dG9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiaXRlbS1yZW1vdmUtYnV0dG9uXCIsIFwiYnV0dG9uXCJdLFxuICAgICAgICAgICAgbGlzdENvbnRyb2xDb250YWluZXIsXG4gICAgICAgICAgICBcImRlbGV0ZSBsaXN0XCJcbiAgICAgICAgKTtcbiAgICAgICAgcmVtb3ZlTGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGlzdC5wYXJlbnRPYmplY3QucmVtb3ZlTGlzdChsaXN0Lm5hbWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9qZWN0VmlzdWFsKGxpc3QucGFyZW50T2JqZWN0KTtcbiAgICAgICAgICAgIHRoaXMucmVsb2FkTmF2Q29udGVudCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBlZGl0TGlzdEJ1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcImxpc3QtZWRpdC1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBsaXN0Q29udHJvbENvbnRhaW5lcixcbiAgICAgICAgICAgIFwiZWRpdCBsaXN0XCJcbiAgICAgICAgKTtcbiAgICAgICAgZWRpdExpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWRpdExpc3QobGlzdCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3RWaXN1YWwobGlzdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYXBwZW5kVGFza0xpc3QobGlzdENvbnRhaW5lciwgbGlzdCk7XG4gICAgICAgIGxpc3Quc2V0Q29udGFpbmVyTm9kZShsaXN0Q29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIGxpc3RDb250YWluZXI7XG4gICAgfVxuXG4gICAgYXBwZW5kVGFza0xpc3QobGlzdENvbnRhaW5lciwgbGlzdCkge1xuICAgICAgICBsaXN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kVGFzayh0YXNrLCBsaXN0Q29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXBwZW5kVGFzayh0YXNrLCBsaXN0Q29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcImRpdlwiLCBbXG4gICAgICAgICAgICBcIml0ZW0tY29udGFpbmVyXCIsXG4gICAgICAgIF0pO1xuICAgICAgICB0aGlzLmNyZWF0ZVRhc2tWaXN1YWwodGFzaywgdGFza0NvbnRhaW5lcik7XG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgY3JlYXRlVGFza1Zpc3VhbCh0YXNrLCB0YXNrQ29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiaXRlbS1jaGVja2JveC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImlucHV0XCIsXG4gICAgICAgICAgICBbXCJpdGVtLWNoZWNrYm94XCJdLFxuICAgICAgICAgICAgY2hlY2tib3hDb250YWluZXJcbiAgICAgICAgKTtcbiAgICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgaWYgKHRhc2suY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2suY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHRhc2suY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXNrLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiaXRlbS1pbmZvLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHRhc2tDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJpdGVtLXRpdGxlXCJdLFxuICAgICAgICAgICAgaW5mb0NvbnRhaW5lcixcbiAgICAgICAgICAgIHRhc2submFtZVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIml0ZW0tZGVzY3JpcHRpb25cIl0sXG4gICAgICAgICAgICBpbmZvQ29udGFpbmVyLFxuICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvblxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EdWVEYXRlID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiaXRlbS1kdWUtZGF0ZVwiXSxcbiAgICAgICAgICAgIGluZm9Db250YWluZXIsXG4gICAgICAgICAgICB0YXNrLmR1ZURhdGVcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCB0YXNrQ29udHJvbHNDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJ0YXNrLWNvbnRyb2xzLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHRhc2tDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCByZW1vdmVUYXNrQnV0dG9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiaXRlbS1yZW1vdmUtYnV0dG9uXCIsIFwiYnV0dG9uXCJdLFxuICAgICAgICAgICAgdGFza0NvbnRyb2xzQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJyZW1vdmUgaXRlbVwiXG4gICAgICAgICk7XG4gICAgICAgIHJlbW92ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRhc2sucGFyZW50T2JqZWN0LnJlbW92ZVRhc2sodGFzay5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGlzdFZpc3VhbCh0YXNrLnBhcmVudE9iamVjdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGVkaXRUYXNrQnV0dG9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiaXRlbS1lZGl0LWJ1dHRvblwiLCBcImJ1dHRvblwiXSxcbiAgICAgICAgICAgIHRhc2tDb250cm9sc0NvbnRhaW5lcixcbiAgICAgICAgICAgIFwiZWRpdCBpdGVtXCJcbiAgICAgICAgKTtcbiAgICAgICAgZWRpdFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWRpdFRhc2sodGFzayk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRhc2tWaXN1YWwodGFzayk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRhc2suc2V0Q29udGFpbmVyTm9kZSh0YXNrQ29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIHRhc2tDb250YWluZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlVGFzayhwYXJlbnRMaXN0KSB7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gcHJvbXB0KFwiSXRlbSBuYW1lP1wiKTtcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gcHJvbXB0KFwiSXRlbSBkZXNjcmlwdGlvbj9cIik7XG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gcHJvbXB0KFwiSXRlbSBkdWUgZGF0ZT9cIik7XG5cbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFxuICAgICAgICAgICAgdGFza05hbWUsXG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0YXNrRHVlRGF0ZSxcbiAgICAgICAgICAgIHBhcmVudExpc3RcbiAgICAgICAgKTtcbiAgICAgICAgcGFyZW50TGlzdC5hZGRUYXNrKG5ld1Rhc2spO1xuICAgIH1cblxuICAgIGVkaXRUYXNrKHRhc2spIHtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBwcm9tcHQoXCJOZXcgdGFzayBuYW1lP1wiLCBgJHt0YXNrLm5hbWV9YCk7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHByb21wdChcbiAgICAgICAgICAgIFwiTmV3IHRhc2sgZGVzY3JpcHRpb24/XCIsXG4gICAgICAgICAgICBgJHt0YXNrLmRlc2NyaXB0aW9ufWBcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBwcm9tcHQoXCJOZXcgdGFzayBkdWUgZGF0ZT9cIiwgYCR7dGFzay5kdWVEYXRlfWApO1xuXG4gICAgICAgIHRhc2suc2V0TmFtZSh0YXNrTmFtZSk7XG4gICAgICAgIHRhc2suc2V0RGF0ZSh0YXNrRHVlRGF0ZSk7XG4gICAgICAgIHRhc2suc2V0RGVzY3JpcHRpb24odGFza0Rlc2NyaXB0aW9uKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUYXNrVmlzdWFsKHRhc2spIHtcbiAgICAgICAgdGhpcy5jbGVhclRhc2tWaXN1YWwodGFzay5jb250YWluZXJOb2RlKTtcbiAgICAgICAgdGhpcy5jcmVhdGVUYXNrVmlzdWFsKHRhc2ssIHRhc2suY29udGFpbmVyTm9kZSk7XG4gICAgfVxuXG4gICAgY2xlYXJUYXNrVmlzdWFsKHRhc2tWaXN1YWwpIHtcbiAgICAgICAgdGFza1Zpc3VhbC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0KHBhcmVudFByb2plY3QpIHtcbiAgICAgICAgY29uc3QgbGlzdE5hbWUgPSBwcm9tcHQoXCJMaXN0IG5hbWU/XCIpO1xuICAgICAgICBjb25zdCBsaXN0RGVzY3JpcHRpb24gPSBwcm9tcHQoXCJMaXN0IGRlc2NyaXB0aW9uP1wiKTtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IG5ldyBMaXN0KGxpc3ROYW1lLCBsaXN0RGVzY3JpcHRpb24sIFtdLCBwYXJlbnRQcm9qZWN0KTtcblxuICAgICAgICBwYXJlbnRQcm9qZWN0LmFkZExpc3QobmV3TGlzdCk7XG4gICAgfVxuXG4gICAgZWRpdExpc3QobGlzdCkge1xuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IHByb21wdChcIkxpc3QgbmFtZT9cIiwgbGlzdC5uYW1lKTtcbiAgICAgICAgY29uc3QgbGlzdERlc2NyaXB0aW9uID0gcHJvbXB0KFwiTGlzdCBkZXNjcmlwdGlvbj9cIiwgbGlzdC5kZXNjcmlwdGlvbik7XG5cbiAgICAgICAgbGlzdC5uYW1lID0gbGlzdE5hbWU7XG4gICAgICAgIGxpc3QuZGVzY3JpcHRpb24gPSBsaXN0RGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgdXBkYXRlTGlzdFZpc3VhbChsaXN0KSB7XG4gICAgICAgIHRoaXMuY2xlYXJMaXN0VmlzdWFsKGxpc3QuY29udGFpbmVyTm9kZSk7XG4gICAgICAgIHRoaXMuY3JlYXRlTGlzdFZpc3VhbChsaXN0LCBsaXN0LmNvbnRhaW5lck5vZGUpO1xuICAgIH1cblxuICAgIGNsZWFyTGlzdFZpc3VhbChsaXN0VmlzdWFsKSB7XG4gICAgICAgIGxpc3RWaXN1YWwucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgfVxuXG4gICAgZWRpdFByb2plY3QocHJvamVjdCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb21wdChcIlByb2plY3QgbmFtZT9cIiwgcHJvamVjdC5uYW1lKTtcbiAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gcHJvbXB0KFxuICAgICAgICAgICAgXCJQcm9qZWN0IGRlc2NyaXB0aW9uP1wiLFxuICAgICAgICAgICAgcHJvamVjdC5kZXNjcmlwdGlvblxuICAgICAgICApO1xuXG4gICAgICAgIHByb2plY3QubmFtZSA9IHByb2plY3ROYW1lO1xuICAgICAgICBwcm9qZWN0LmRlc2NyaXB0aW9uID0gcHJvamVjdERlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHVwZGF0ZVByb2plY3RWaXN1YWwocHJvamVjdCkge1xuICAgICAgICB0aGlzLmNsZWFyUHJvamVjdFZpc3VhbChwcm9qZWN0LmNvbnRhaW5lck5vZGUpO1xuICAgICAgICB0aGlzLmNyZWF0ZVByb2plY3RWaXN1YWwocHJvamVjdCwgcHJvamVjdC5jb250YWluZXJOb2RlKTtcbiAgICB9XG5cbiAgICBjbGVhclByb2plY3RWaXN1YWwocHJvamVjdFZpc3VhbCkge1xuICAgICAgICBwcm9qZWN0VmlzdWFsLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ld1Byb2plY3QoKSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gcHJvbXB0KFwiUHJvamVjdCBuYW1lP1wiKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdERlc2NyaXB0aW9uID0gcHJvbXB0KFwiUHJvamVjdCBkZXNjcmlwdGlvbj9cIik7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RMaXN0cyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcbiAgICAgICAgICAgIG5ld1Byb2plY3ROYW1lLFxuICAgICAgICAgICAgbmV3UHJvamVjdERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgbmV3UHJvamVjdExpc3RzLFxuICAgICAgICAgICAgdGhpcy51c2VyXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy51c2VyLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgcHJvamVjdHMgPSBbXSwgcGFyZW50Q29udGFpbmVyID0gbnVsbCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0ID0gcGFyZW50Q29udGFpbmVyO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICAgIH1cblxuICAgIHNldFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgICB9XG5cbiAgICBjb250YWluc1Byb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuc29tZShcbiAgICAgICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zUHJvamVjdChuZXdQcm9qZWN0LmdldE5hbWUoKSkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKFxuICAgICAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpICE9PSBwcm9qZWN0TmFtZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZChcbiAgICAgICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWVcbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgVUkgZnJvbSBcIi4vbW9kdWxlcy9VSS5qc1wiO1xuaW1wb3J0IExvZ2luVUkgZnJvbSBcIi4vbW9kdWxlcy9Mb2dpblVJLmpzXCI7XG5cbi8qIGNvbnN0IG5ld1BhZ2UgPSBuZXcgVUkoKTsgKi9cblxuY29uc3QgbmV3TG9naW4gPSBuZXcgTG9naW5VSSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9