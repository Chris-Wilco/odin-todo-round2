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
    grid-template-rows: 1fr 1fr 9fr 1fr;
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
    grid-template-columns: 2fr 1fr;

    /* display: flex;
    align-items: center;
    gap: 1rem; */

    font-size: var(--nav-title-font-size);
    padding: 2rem;

    /* border: 1px solid blue; */
    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);
}

.nav-title-container {
    grid-column: 1 / 2;
}

.nav-title {
}

.nav-control-container {
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap\");\n\n:root {\n    --mute-color: rgb(255, 127, 80, 0.1);\n    --secondary-color: 253, 107, 62;\n    --highlight-color: 147, 252, 217;\n    --dark-shadow-color: 0, 0, 0;\n    --box-shadow-values: 0.5rem 0.8rem 0.05rem;\n    --minor-box-shadow-values: 0.3rem 0.3rem 0.05rem;\n    --general-font: \"Montserrat\", \"Roboto Condensed\", sans-serif;\n    --title-font: \"Roboto Slab\", serif;\n    --base-font-color: rgb(0, 0, 0, 0.8);\n    --base-font-size: 1vh;\n    --title-font-size: 4rem;\n    --header-font-size: 2rem;\n    --content-font-size: 1rem;\n    --base-line-height: 1.25;\n    --content-line-height: 2;\n\n    font-size: var(--base-font-size);\n\n    --item-title-font-size: 1.5rem;\n    --item-info-font-size: 1rem;\n    --list-title-font-size: 2rem;\n    --list-info-font-size: 1rem;\n    --project-title-font-size: 2rem;\n    --project-info-font-size: 1.5rem;\n    --nav-title-font-size: 1.5rem;\n    --nav-info-font-size: 1.25rem;\n\n    --nav-icon-dimension: 2rem;\n\n    --dark-green: rgba(4, 42, 43, 1);\n    --moonstone: rgba(94, 177, 191, 1);\n    --light-cyan: rgba(205, 237, 246, 1);\n    --orange-crayola: rgba(239, 123, 69, 1);\n    --chili-red: rgba(216, 71, 39, 1);\n\n    --lapis-lazuli: rgba(35, 87, 137, 1);\n    --imperial-red: rgba(251, 54, 64, 0.1);\n    --aquamarine: rgba(22, 244, 208, 1);\n    --school-bus-yellow: rgba(241, 211, 2, 1);\n    --black: rgba(2, 1, 0, 1);\n\n    --nav-background-color: var(--imperial-red);\n    --content-container-color: rgb(242, 242, 242);\n    --project-container-color: rgb(255, 255, 255);\n\n    --box-shadow-values: -0.5rem 0.8rem 0.5rem;\n    --minor-box-shadow-values: -0.3rem 0.3rem 0.3rem;\n    --drop-shadow-color: rgb(0, 0, 0, 0.4);\n    --minor-drop-shadow-color: rgb(0, 0, 0, 0.1);\n    --minor-box-shadow-reverse-values: 0.5rem 0.5rem 0.3rem;\n    --box-shadow-values-1: 0.5rem 0.5rem 0.3rem;\n    --box-shadow-values-2: -0.1rem -0.1rem 0.1rem;\n    --box-shadow-values-3: 1rem 1rem 0.3rem;\n    --box-shadow-values-4: -0.5rem -0.5rem 0.1rem;\n\n    box-sizing: border-box;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: minmax(min(10rem, 100%), 2fr) minmax(\n            min(10rem, 100%),\n            5fr\n        );\n\n    font-family: var(--general-font);\n    font-size: var(--general-font-size);\n    margin: 0;\n    padding: 0;\n\n    height: 100vh;\n}\n\n.button {\n    cursor: pointer;\n}\n\n.nav-container {\n    grid-column: 1 / 2;\n\n    display: grid;\n    grid-template-rows: 1fr 1fr 9fr 1fr;\n    grid-template-columns: 1fr 6fr 1fr;\n\n    gap: 2rem;\n    background-color: var(--project-container-color);\n    /* padding: 4rem 1rem; */\n\n    position: sticky;\n    top: 0;\n    margin: 0;\n    height: 100vh;\n\n    /* border: 1px solid blue; */\n\n    box-shadow: var(--box-shadow-values-1) var(--drop-shadow-color),\n        var(--box-shadow-values-2) var(--drop-shadow-color);\n}\n\n.nav-info-container {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n\n    /* display: flex;\n    align-items: center;\n    gap: 1rem; */\n\n    font-size: var(--nav-title-font-size);\n    padding: 2rem;\n\n    /* border: 1px solid blue; */\n    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);\n}\n\n.nav-title-container {\n    grid-column: 1 / 2;\n}\n\n.nav-title {\n}\n\n.nav-control-container {\n}\n\n.nav-new-project-button {\n    /* background-image: url(./img/icons/plus.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1; */\n}\n\n.nav-content-container {\n    grid-row: 3 / 4;\n    grid-column: 2 / 3;\n\n    /* display: grid;\n    gap: 1rem;\n    grid-template-rows: repeat(auto-fill, minmax(100px, auto));\n    align-items: start; */\n\n    /* display: flex;\n    flex-direction: column; */\n\n    /* display: grid;\n    grid-template-columns: 1fr;\n    align-items: start;\n    gap: 1rem;\n    grid-auto-flow: dense; */\n\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n\n    padding: 2rem;\n\n    font-size: var(--nav-info-font-size);\n    /* overflow: scroll; */\n\n    /* border: solid red 1px; */\n\n    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);\n}\n\n.nav-project-container {\n    grid-column: 1 / 2;\n\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n\n    /* height: minmax(50px, 100px); */\n\n    /* border: solid pink 1px; */\n}\n\n.nav-project-title-container {\n    grid-column: 1 / 3;\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.nav-project-title-icon {\n    background-image: url(./img/icons/dots-horizontal-circle-outline.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.nav-project-title {\n    font-weight: 500;\n}\n\n.nav-project-content-container {\n    grid-column: 2 / 3;\n    /* height: 200px; */\n\n    /* border: 1px solid yellow; */\n}\n\n.nav-list-title-container {\n    display: flex;\n    align-items: center;\n    gap: 0.2rem;\n}\n\n.nav-list-title-icon {\n    background-image: url(./img/icons/menu-right-outline.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.nav-list-title {\n}\n\n.content-container {\n    grid-column: 2 / 3;\n\n    display: grid;\n    gap: 1rem;\n    background-color: var(--content-container-color);\n    /* border: solid 1px red; */\n\n    /* height: 100vh; */\n    height: 100%;\n    /* box-shadow: var(--box-shadow-values) var(--drop-shadow-color); */\n}\n\n.project-container {\n    display: grid;\n    grid-template-rows: 12rem 1fr;\n\n    background-color: rgba(var(--mute-color), 1);\n    padding: 2rem;\n    margin: 1rem;\n    gap: 1.5rem;\n\n    height: 100%;\n\n    /* overflow: scroll; */\n    /* border-radius: 0.5rem; */\n    background-color: var(--project-container-color);\n    /* box-shadow: var(--box-shadow-values)\n        rgba(var(--drop-shadow-color-color), 0.5); */\n    box-shadow: var(--box-shadow-values-1) var(--drop-shadow-color),\n        var(--box-shadow-values-2) var(--minor-drop-shadow-color);\n\n    /* border: solid black 1px; */\n}\n\n.project-title-container {\n    grid-row: 1 / 2;\n\n    display: grid;\n    grid-template-columns: 5fr 1fr;\n    font-size: var(--project-info-font-size);\n    /* border: solid black 1px; */\n\n    padding: 0.5rem;\n\n    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);\n}\n\n.project-info-container {\n    /* border: solid red 1px; */\n}\n\n.project-control-container {\n    /* border: solid blue 1px; */\n}\n\n.project-title {\n    font-size: var(--project-title-font-size);\n}\n\n.project-description {\n}\n\n.new-project-list-button {\n    /* background-image: url(./img/icons/plus.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1; */\n}\n\n.close-project-button {\n    /* background-image: url(./img/icons/close-box-outline.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1; */\n}\n\n.project-card-container {\n    grid-row: 2 / 3;\n\n    /* display: grid;\n    grid-auto-rows: auto; */\n\n    height: 100%;\n\n    display: flex;\n    flex-direction: column;\n\n    overflow: scroll;\n    /* border: solid green 1px; */\n    gap: 1.5rem;\n    padding: 2rem;\n}\n\n.list-container {\n    display: grid;\n    gap: 0.5rem;\n\n    /* background-color: rgba(var(--secondary-color), 0.5); */\n    padding: 1rem;\n    /* box-shadow: var(--minor-box-shadow-values) var(--drop-shadow-color); */\n    /* box-shadow: var(--minor-box-shadow-reverse-values) var(--drop-shadow-color); */\n    /* border-radius: 0.5rem; */\n\n    /* box-shadow: var(--box-shadow-values-1) var(--drop-shadow-color),\n        var(--box-shadow-values-2) var(--minor-drop-shadow-color); */\n    /* border: solid 1px black; */\n\n    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);\n}\n\n.list-title-container {\n    display: grid;\n    grid-template-columns: 5fr 1fr;\n    font-size: var(--list-info-font-size);\n}\n\n.list-info-container {\n}\n\n.list-title {\n    font-size: var(--list-title-font-size);\n}\n\n.list-description {\n}\n\n.new-list-item-button {\n    /* background-image: url(./img/icons/plus.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1; */\n}\n\n.list-edit-button {\n}\n\n.item-container {\n    display: grid;\n    grid-template-columns: 1fr 6fr 1fr;\n    /* background-color: rgba(var(--secondary-color), 0.5); */\n}\n\n.item-checkbox-container {\n    grid-column: 1 / 2;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.item-checkbox {\n}\n\n/* input[type=\"checkbox\"] {\n    appearance: none;\n    display: grid;\n    place-content: center;\n    border: solid 1px black;\n    height: 1em;\n    width: 1em;\n\n    background: #0a0a0a;\n    border-color: #fff;\n}\n\ninput[type=\"checkbox\"]::before {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    transform: scale(0);\n    transition: 120ms transform ease-in-out;\n    box-shadow: inset 1em 1em var(--form-control-color);\n} */\n\n.item-info-container {\n    grid-column: 2 / 3;\n    font-size: var(--item-info-font-size);\n}\n\n.item-title {\n    font-size: var(--item-title-font-size);\n}\n\n.item-description {\n}\n\n.item-due-date {\n}\n\n.item-remove-button {\n}\n\n.login-page-body {\n    grid-column: 1 / 3;\n\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    grid-template-rows: 1fr 2fr 1fr;\n\n    background-color: rgb(0, 0, 0, 0.05);\n    /* border: 1px solid red; */\n}\n\n.login-container {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n\n    background-color: white;\n    /* border: 1px solid blue; */\n\n    /* display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; */\n\n    display: grid;\n    grid-template-columns: 1fr 4fr 1fr;\n    grid-template-rows: 1fr 1fr 4fr 1fr;\n    justify-items: center;\n    gap: 1rem;\n\n    /* box-shadow: var(--minor-box-shadow-reverse-values) var(--drop-shadow-color),\n        var(--minor-box-shadow-values) var(--drop-shadow-color); */\n    /* box-shadow: var(--box-shadow-values-1) var(--drop-shadow-color),\n        var(--box-shadow-values-2) var(--drop-shadow-color); */\n    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);\n}\n\n.login-control-container {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n    width: 100%;\n    height: 100%;\n\n    /* border: 1px solid green; */\n    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);\n}\n\n.user-list-container {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n    width: 100%;\n    height: 100%;\n\n    /* border: 1px solid red; */\n    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);\n}\n\n.user-name-option {\n    font-family: var(--general-font);\n    font-size: var(--item-title-font-size);\n}\n"],"sourceRoot":""}]);
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

    //TODO: Get and return array of users from localStorage
    /* openUsers() {} */

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
        const newPage = new _UI_js__WEBPACK_IMPORTED_MODULE_1__["default"](user, this.newStorage);
    }

    clearPageBody() {
        this.pageBody.replaceChildren();
    }

    createNewUser() {
        //Prompt for user info
        const newUserName = prompt("New User name?");

        //create new user
        const newUser = new _User_js__WEBPACK_IMPORTED_MODULE_3__["default"](newUserName, [], this.userList);

        //Add it as an actual child of the Storage user array
        this.newStorage.simpleSendToStorage(newUser);
        console.log(`${this.newStorage.getUsers()}`);

        this.reloadUserList();

        //Save the Storage array of users to localStorage to maintain state on page reload

        //make sure user parent container is object
        //Do I need to save this new object immediately?
        //Do i need to alter the save function to include all objects

        //Should this also open the main UI with new user and no projects, etc?
    }

    generateLoginControls(loginControlContainer) {
        this.newUserButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["new-user-button", "button"],
            loginControlContainer,
            "new user"
        );
        this.newUserButton.addEventListener("click", () => {
            //just gonna add it to the list of potential users for now
            this.createNewUser();
        });

        this.saveUsersButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["new-user-button", "button"],
            loginControlContainer,
            "save users"
        );

        this.clearUsersButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["new-user-button", "button"],
            loginControlContainer,
            "clear users"
        );
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

    refreshLoginPage() {
        this.clearPageBody();

        //Now regenerate page body elements separately from the constructor....
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
        const jsonTextOfStoredUserArray = this.getFromLocalStorage();
        /* console.log(`jsonTextOfStoredUserArray: ${jsonTextOfStoredUserArray}`);
        console.log(typeof jsonTextOfStoredUserArray);
        console.log(jsonTextOfStoredUserArray); */
        /* console.log(jsonText);
        console.log(typeof jsonText); */
        this.userList = this.parseUsers(jsonTextOfStoredUserArray);
        console.log(this.userList);
    }

    getUsers() {
        return this.userList;
    }

    //TODO: Do we need a user container object to then be able to commit back into the json file?

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

    //Returns an array of user objects either from base file or from the stored file of users
    getFromLocalStorage() {
        const storedUsers = localStorage.getItem("userStorage");

        if (!localStorage.getItem("userStorage")) {
            console.log("blipo!");
            return _userStorage_json__WEBPACK_IMPORTED_MODULE_0__;
        }
        return JSON.parse(storedUsers);
    }

    simpleSendToStorage(userToStore) {
        if (this.doesUserAlreadyExist(userToStore)) {
            const target = this.userList.find(
                (user) => user.name === userToStore.name
            );
            Object.assign(target, userToStore);
            console.log("boink!");
        } else {
            this.userList.push(userToStore);
            console.log("baaaaank!");
        }

        console.log(`this is a list of users before storing:`);
        console.log(this.userList);

        this.storeUserArray();
    }

    doesUserAlreadyExist(userToCheck) {
        const containsUser = this.userList.some(
            (user) => user.name === userToCheck.name
        );
        console.log(`Contains User? : ${containsUser}`);
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

    //TODO: Should there be a method to nuke localstorage of all saved data?
    //Probably...
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
    constructor(thisUser, thisStorage) {
        /* const newStorage = new Storage(); */
        /* this.newStorage = new Storage();
        this.userList = this.newStorage.getUsers(); */

        //Refactor this to take in a single user and generate UI
        this.newStorage = thisStorage;
        this.user = thisUser;

        /* this.user = this.userList[0]; */
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

        if (this.user.projects.length !== 0) {
            this.loadPageContent(this.user.projects[0].name);
        } else {
            this.loadPageContent();
        }
        /* this.loadPageContent(this.user.name); */
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
            "save all"
        );
        saveButton.addEventListener("click", () => {
            console.log("blamo!");
            this.newStorage.simpleSendToStorage(this.user);
        });

        const exitToLoginButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["nav-exit-button", "button"],
            navControlContainer,
            "exit"
        );
        exitToLoginButton.addEventListener("click", () => {
            _LoginUI_js__WEBPACK_IMPORTED_MODULE_6__["default"].refreshLoginPage();
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
            //TODO: this also needs to update the json file of record to save page state on reload
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

        const listControlContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["list-control-container"],
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

            //TODO: this also needs to update the json file of record to save page state on reload
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
        /* console.log(`Task name? ${task.name} Task checked? ${task.checked}`); */
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
            //TODO: this also needs to update the json file of record to save page state on reload
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
/* harmony import */ var _modules_LoginUI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/LoginUI.js */ "./src/modules/LoginUI.js");




/* const newPage = new UI(); */

const newLogin = new _modules_LoginUI_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQSw4QkFBOEI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGNBQWMsV0FBVyxZQUFZLGNBQWMsYUFBYSxXQUFXLFVBQVUsV0FBVyxhQUFhLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxhQUFhLFdBQVcsYUFBYSxPQUFPLE9BQU8sWUFBWSxZQUFZLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLE9BQU8sT0FBTyxLQUFLLFVBQVUsYUFBYSxRQUFRLFFBQVEsTUFBTSxRQUFRLFNBQVMsUUFBUSxXQUFXLFlBQVksWUFBWSxXQUFXLFlBQVksY0FBYyxjQUFjLGFBQWEsT0FBTyxLQUFLLGFBQWEsV0FBVyxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLE1BQU0sS0FBSyxhQUFhLFdBQVcsVUFBVSxZQUFZLGNBQWMsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sUUFBUSxhQUFhLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxhQUFhLGNBQWMsWUFBWSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxNQUFNLEtBQUssTUFBTSxPQUFPLE9BQU8sS0FBSyxNQUFNLE9BQU8sT0FBTyxLQUFLLFdBQVcsS0FBSyxRQUFRLFlBQVksVUFBVSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsTUFBTSxPQUFPLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxNQUFNLEtBQUssTUFBTSxPQUFPLE9BQU8sS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sdUJBQXVCLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxLQUFLLGFBQWEsV0FBVyxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFlBQVksWUFBWSxjQUFjLFFBQVEsUUFBUSxXQUFXLFlBQVksYUFBYSxhQUFhLFlBQVksS0FBSyxPQUFPLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLFlBQVksVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLHVIQUF1SCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLDZDQUE2QyxtREFBbUQsMEVBQTBFLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0NBQW9DLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLHNCQUFzQixXQUFXLDJDQUEyQyxzQ0FBc0MsdUNBQXVDLG1DQUFtQyxpREFBaUQsdURBQXVELHVFQUF1RSwyQ0FBMkMsMkNBQTJDLDRCQUE0Qiw4QkFBOEIsK0JBQStCLGdDQUFnQywrQkFBK0IsK0JBQStCLHlDQUF5Qyx1Q0FBdUMsa0NBQWtDLG1DQUFtQyxrQ0FBa0Msc0NBQXNDLHVDQUF1QyxvQ0FBb0Msb0NBQW9DLG1DQUFtQyx5Q0FBeUMseUNBQXlDLDJDQUEyQyw4Q0FBOEMsd0NBQXdDLDZDQUE2Qyw2Q0FBNkMsMENBQTBDLGdEQUFnRCxnQ0FBZ0Msb0RBQW9ELG9EQUFvRCxvREFBb0QsbURBQW1ELHVEQUF1RCw2Q0FBNkMsbURBQW1ELDhEQUE4RCxrREFBa0Qsb0RBQW9ELDhDQUE4QyxvREFBb0QsK0JBQStCLEdBQUcsVUFBVSxvQkFBb0IsOEhBQThILHlDQUF5QywwQ0FBMEMsZ0JBQWdCLGlCQUFpQixzQkFBc0IsR0FBRyxhQUFhLHNCQUFzQixHQUFHLG9CQUFvQix5QkFBeUIsc0JBQXNCLDBDQUEwQyx5Q0FBeUMsa0JBQWtCLHVEQUF1RCw2QkFBNkIsMkJBQTJCLGFBQWEsZ0JBQWdCLG9CQUFvQixtQ0FBbUMsd0lBQXdJLEdBQUcseUJBQXlCLHNCQUFzQix5QkFBeUIsc0JBQXNCLHFDQUFxQyx5QkFBeUIsMEJBQTBCLGlCQUFpQixnREFBZ0Qsb0JBQW9CLG1DQUFtQyx3REFBd0QsR0FBRywwQkFBMEIseUJBQXlCLEdBQUcsZ0JBQWdCLEdBQUcsNEJBQTRCLEdBQUcsNkJBQTZCLHFEQUFxRCx3Q0FBd0MsMkJBQTJCLEtBQUssNEJBQTRCLHNCQUFzQix5QkFBeUIseUJBQXlCLGdCQUFnQixpRUFBaUUsMEJBQTBCLDJCQUEyQiw4QkFBOEIsMkJBQTJCLGlDQUFpQyx5QkFBeUIsZ0JBQWdCLDZCQUE2Qix3QkFBd0IsNkJBQTZCLGdCQUFnQixzQkFBc0IsNkNBQTZDLDJCQUEyQixvQ0FBb0MsMERBQTBELEdBQUcsNEJBQTRCLHlCQUF5QixzQkFBc0IscUNBQXFDLHdDQUF3QyxxQ0FBcUMsS0FBSyxrQ0FBa0MseUJBQXlCLG9CQUFvQiwwQkFBMEIsa0JBQWtCLEdBQUcsNkJBQTZCLDRFQUE0RSx3Q0FBd0MsMEJBQTBCLEdBQUcsd0JBQXdCLHVCQUF1QixHQUFHLG9DQUFvQyx5QkFBeUIsd0JBQXdCLHVDQUF1QyxLQUFLLCtCQUErQixvQkFBb0IsMEJBQTBCLGtCQUFrQixHQUFHLDBCQUEwQixnRUFBZ0Usd0NBQXdDLDBCQUEwQixHQUFHLHFCQUFxQixHQUFHLHdCQUF3Qix5QkFBeUIsc0JBQXNCLGdCQUFnQix1REFBdUQsZ0NBQWdDLDRCQUE0QixxQkFBcUIsd0VBQXdFLEtBQUssd0JBQXdCLG9CQUFvQixvQ0FBb0MscURBQXFELG9CQUFvQixtQkFBbUIsa0JBQWtCLHFCQUFxQiw2QkFBNkIsa0NBQWtDLHlEQUF5RCxrR0FBa0csNElBQTRJLG9DQUFvQyxLQUFLLDhCQUE4QixzQkFBc0Isc0JBQXNCLHFDQUFxQywrQ0FBK0Msa0NBQWtDLDBCQUEwQix3REFBd0QsR0FBRyw2QkFBNkIsZ0NBQWdDLEtBQUssZ0NBQWdDLGlDQUFpQyxLQUFLLG9CQUFvQixnREFBZ0QsR0FBRywwQkFBMEIsR0FBRyw4QkFBOEIscURBQXFELHdDQUF3QywyQkFBMkIsS0FBSywyQkFBMkIsa0VBQWtFLHdDQUF3QywyQkFBMkIsS0FBSyw2QkFBNkIsc0JBQXNCLHlCQUF5Qiw0QkFBNEIsdUJBQXVCLHNCQUFzQiw2QkFBNkIseUJBQXlCLGtDQUFrQyxvQkFBb0Isb0JBQW9CLEdBQUcscUJBQXFCLG9CQUFvQixrQkFBa0IsZ0VBQWdFLHNCQUFzQiw4RUFBOEUsd0ZBQXdGLGtDQUFrQyxrSkFBa0osb0NBQW9DLDBEQUEwRCxHQUFHLDJCQUEyQixvQkFBb0IscUNBQXFDLDRDQUE0QyxHQUFHLDBCQUEwQixHQUFHLGlCQUFpQiw2Q0FBNkMsR0FBRyx1QkFBdUIsR0FBRywyQkFBMkIscURBQXFELHdDQUF3QywyQkFBMkIsS0FBSyx1QkFBdUIsR0FBRyxxQkFBcUIsb0JBQW9CLHlDQUF5Qyw4REFBOEQsS0FBSyw4QkFBOEIseUJBQXlCLHNCQUFzQiw4QkFBOEIsMEJBQTBCLEdBQUcsb0JBQW9CLEdBQUcsaUNBQWlDLHVCQUF1QixvQkFBb0IsNEJBQTRCLDhCQUE4QixrQkFBa0IsaUJBQWlCLDRCQUE0Qix5QkFBeUIsR0FBRyxzQ0FBc0Msb0JBQW9CLG9CQUFvQixxQkFBcUIsMEJBQTBCLDhDQUE4QywwREFBMEQsSUFBSSw0QkFBNEIseUJBQXlCLDRDQUE0QyxHQUFHLGlCQUFpQiw2Q0FBNkMsR0FBRyx1QkFBdUIsR0FBRyxvQkFBb0IsR0FBRyx5QkFBeUIsR0FBRyxzQkFBc0IseUJBQXlCLHNCQUFzQix5Q0FBeUMsc0NBQXNDLDZDQUE2QyxnQ0FBZ0MsS0FBSyxzQkFBc0IseUJBQXlCLHNCQUFzQixnQ0FBZ0MsaUNBQWlDLDJCQUEyQiw2QkFBNkIsOEJBQThCLDJCQUEyQix3QkFBd0IseUNBQXlDLDBDQUEwQyw0QkFBNEIsZ0JBQWdCLDBKQUEwSiwwSUFBMEksd0RBQXdELEdBQUcsOEJBQThCLHlCQUF5QixzQkFBc0Isc0JBQXNCLDBCQUEwQiw4QkFBOEIsMEJBQTBCLGdCQUFnQixrQkFBa0IsbUJBQW1CLG9DQUFvQyx3REFBd0QsR0FBRywwQkFBMEIseUJBQXlCLHNCQUFzQixzQkFBc0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsZ0JBQWdCLGtCQUFrQixtQkFBbUIsa0NBQWtDLHdEQUF3RCxHQUFHLHVCQUF1Qix1Q0FBdUMsNkNBQTZDLEdBQUcscUJBQXFCO0FBQzVrZDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzNlMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYk87QUFDUDtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckU0RDtBQUNuQztBQUNVO0FBQ047O0FBRWQ7QUFDZjtBQUNBLDhCQUE4QixtREFBTztBQUNyQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHdFQUFtQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLDhDQUFFO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsZ0RBQUk7O0FBRWhDO0FBQ0E7QUFDQSx1QkFBdUIsMkJBQTJCOztBQUVsRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZCQUE2Qix3RUFBbUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQsK0JBQStCLHdFQUFtQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyx3RUFBbUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLHdFQUFtQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsd0VBQW1DO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyx3RUFBbUM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUNBQWlDLHdFQUFtQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdJQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBQzZDO0FBQ2hCO0FBQ0E7QUFDTTtBQUNOOztBQUVkO0FBQ2Y7QUFDQTtBQUNBLHFEQUFxRCwwQkFBMEI7QUFDL0U7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0RBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbURBQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0RBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxnREFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLDhDQUFXO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGFBQWE7QUFDckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkplO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRDREO0FBQ3pCO0FBQ047QUFDQTtBQUNNO0FBQ047QUFDTTs7QUFFcEI7QUFDZjtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0Esb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQSw0QkFBNEIsd0VBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLHdFQUFtQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsd0VBQW1DO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQyx3RUFBbUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLHdFQUFtQztBQUN2RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsd0VBQW1DO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLHdFQUFtQztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCwyQkFBMkIsd0VBQW1DO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULGtDQUFrQyx3RUFBbUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBTztBQUNuQixTQUFTOztBQUVULG9DQUFvQyx3RUFBbUM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsaUNBQWlDLHdFQUFtQztBQUNwRTtBQUNBOztBQUVBLHNDQUFzQyx3RUFBbUM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLHdFQUFtQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkIsd0VBQW1DO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGFBQWE7QUFDeEQsU0FBUzs7QUFFVCx3Q0FBd0Msd0VBQW1DO0FBQzNFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVULHVEQUF1RDs7QUFFdkQ7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyx3RUFBbUM7QUFDdEU7QUFDQTs7QUFFQSw4QkFBOEIsd0VBQW1DO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2Qix3RUFBbUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsd0VBQW1DO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLHdFQUFtQztBQUN6RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsd0VBQW1DO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3Qyx3RUFBbUM7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLHdFQUFtQztBQUN4RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsd0VBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLHdFQUFtQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyx3RUFBbUM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxtQ0FBbUMsd0VBQW1DO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxvQ0FBb0Msd0VBQW1DO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQsa0NBQWtDLHdFQUFtQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQSxnRUFBZ0U7QUFDaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsOEJBQThCLHdFQUFtQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLHdFQUFtQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0Msd0VBQW1DO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyx3RUFBbUM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDLHdFQUFtQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsd0VBQW1DO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLHdFQUFtQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyx3RUFBbUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQsaUNBQWlDLHdFQUFtQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVULCtCQUErQix3RUFBbUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSw4QkFBOEIsd0VBQW1DO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyx3RUFBbUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0VBQW1DO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsV0FBVyxnQkFBZ0IsYUFBYSxJQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsU0FBUzs7QUFFVCw4QkFBOEIsd0VBQW1DO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQix3RUFBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0Msd0VBQW1DO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLHdFQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQyx3RUFBbUM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLHdFQUFtQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULCtCQUErQix3RUFBbUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixnREFBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQsVUFBVTtBQUMvRDtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQSw0REFBNEQsYUFBYTs7QUFFekU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnREFBSTs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0IsbURBQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlsQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDWTtBQUNVOztBQUUzQyw2QkFBNkI7O0FBRTdCLHFCQUFxQiwyREFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL0dlbmVyYXRlUGFnZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL0xpc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL0xvZ2luVUkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9zcmMvbW9kdWxlcy9Vc2VyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvaWNvbnMvZG90cy1ob3Jpem9udGFsLWNpcmNsZS1vdXRsaW5lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL2ljb25zL21lbnUtcmlnaHQtb3V0bGluZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQrQWx0ZXJuYXRlczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZmFtaWx5PU1vbnRzZXJyYXQ6aXRhbCx3Z2h0QDAsMTAwLi45MDA7MSwxMDAuLjkwMCZmYW1pbHk9Um9ib3RvK01vbm86aXRhbCx3Z2h0QDAsMTAwLi43MDA7MSwxMDAuLjcwMCZmYW1pbHk9Um9ib3RvK1NsYWI6d2dodEAxMDAuLjkwMCZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZmYW1pbHk9VWJ1bnR1Oml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tbXV0ZS1jb2xvcjogcmdiKDI1NSwgMTI3LCA4MCwgMC4xKTtcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogMjUzLCAxMDcsIDYyO1xuICAgIC0taGlnaGxpZ2h0LWNvbG9yOiAxNDcsIDI1MiwgMjE3O1xuICAgIC0tZGFyay1zaGFkb3ctY29sb3I6IDAsIDAsIDA7XG4gICAgLS1ib3gtc2hhZG93LXZhbHVlczogMC41cmVtIDAuOHJlbSAwLjA1cmVtO1xuICAgIC0tbWlub3ItYm94LXNoYWRvdy12YWx1ZXM6IDAuM3JlbSAwLjNyZW0gMC4wNXJlbTtcbiAgICAtLWdlbmVyYWwtZm9udDogXCJNb250c2VycmF0XCIsIFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xuICAgIC0tdGl0bGUtZm9udDogXCJSb2JvdG8gU2xhYlwiLCBzZXJpZjtcbiAgICAtLWJhc2UtZm9udC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuOCk7XG4gICAgLS1iYXNlLWZvbnQtc2l6ZTogMXZoO1xuICAgIC0tdGl0bGUtZm9udC1zaXplOiA0cmVtO1xuICAgIC0taGVhZGVyLWZvbnQtc2l6ZTogMnJlbTtcbiAgICAtLWNvbnRlbnQtZm9udC1zaXplOiAxcmVtO1xuICAgIC0tYmFzZS1saW5lLWhlaWdodDogMS4yNTtcbiAgICAtLWNvbnRlbnQtbGluZS1oZWlnaHQ6IDI7XG5cbiAgICBmb250LXNpemU6IHZhcigtLWJhc2UtZm9udC1zaXplKTtcblxuICAgIC0taXRlbS10aXRsZS1mb250LXNpemU6IDEuNXJlbTtcbiAgICAtLWl0ZW0taW5mby1mb250LXNpemU6IDFyZW07XG4gICAgLS1saXN0LXRpdGxlLWZvbnQtc2l6ZTogMnJlbTtcbiAgICAtLWxpc3QtaW5mby1mb250LXNpemU6IDFyZW07XG4gICAgLS1wcm9qZWN0LXRpdGxlLWZvbnQtc2l6ZTogMnJlbTtcbiAgICAtLXByb2plY3QtaW5mby1mb250LXNpemU6IDEuNXJlbTtcbiAgICAtLW5hdi10aXRsZS1mb250LXNpemU6IDEuNXJlbTtcbiAgICAtLW5hdi1pbmZvLWZvbnQtc2l6ZTogMS4yNXJlbTtcblxuICAgIC0tbmF2LWljb24tZGltZW5zaW9uOiAycmVtO1xuXG4gICAgLS1kYXJrLWdyZWVuOiByZ2JhKDQsIDQyLCA0MywgMSk7XG4gICAgLS1tb29uc3RvbmU6IHJnYmEoOTQsIDE3NywgMTkxLCAxKTtcbiAgICAtLWxpZ2h0LWN5YW46IHJnYmEoMjA1LCAyMzcsIDI0NiwgMSk7XG4gICAgLS1vcmFuZ2UtY3JheW9sYTogcmdiYSgyMzksIDEyMywgNjksIDEpO1xuICAgIC0tY2hpbGktcmVkOiByZ2JhKDIxNiwgNzEsIDM5LCAxKTtcblxuICAgIC0tbGFwaXMtbGF6dWxpOiByZ2JhKDM1LCA4NywgMTM3LCAxKTtcbiAgICAtLWltcGVyaWFsLXJlZDogcmdiYSgyNTEsIDU0LCA2NCwgMC4xKTtcbiAgICAtLWFxdWFtYXJpbmU6IHJnYmEoMjIsIDI0NCwgMjA4LCAxKTtcbiAgICAtLXNjaG9vbC1idXMteWVsbG93OiByZ2JhKDI0MSwgMjExLCAyLCAxKTtcbiAgICAtLWJsYWNrOiByZ2JhKDIsIDEsIDAsIDEpO1xuXG4gICAgLS1uYXYtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW1wZXJpYWwtcmVkKTtcbiAgICAtLWNvbnRlbnQtY29udGFpbmVyLWNvbG9yOiByZ2IoMjQyLCAyNDIsIDI0Mik7XG4gICAgLS1wcm9qZWN0LWNvbnRhaW5lci1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG4gICAgLS1ib3gtc2hhZG93LXZhbHVlczogLTAuNXJlbSAwLjhyZW0gMC41cmVtO1xuICAgIC0tbWlub3ItYm94LXNoYWRvdy12YWx1ZXM6IC0wLjNyZW0gMC4zcmVtIDAuM3JlbTtcbiAgICAtLWRyb3Atc2hhZG93LWNvbG9yOiByZ2IoMCwgMCwgMCwgMC40KTtcbiAgICAtLW1pbm9yLWRyb3Atc2hhZG93LWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4xKTtcbiAgICAtLW1pbm9yLWJveC1zaGFkb3ctcmV2ZXJzZS12YWx1ZXM6IDAuNXJlbSAwLjVyZW0gMC4zcmVtO1xuICAgIC0tYm94LXNoYWRvdy12YWx1ZXMtMTogMC41cmVtIDAuNXJlbSAwLjNyZW07XG4gICAgLS1ib3gtc2hhZG93LXZhbHVlcy0yOiAtMC4xcmVtIC0wLjFyZW0gMC4xcmVtO1xuICAgIC0tYm94LXNoYWRvdy12YWx1ZXMtMzogMXJlbSAxcmVtIDAuM3JlbTtcbiAgICAtLWJveC1zaGFkb3ctdmFsdWVzLTQ6IC0wLjVyZW0gLTAuNXJlbSAwLjFyZW07XG5cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KG1pbigxMHJlbSwgMTAwJSksIDJmcikgbWlubWF4KFxuICAgICAgICAgICAgbWluKDEwcmVtLCAxMDAlKSxcbiAgICAgICAgICAgIDVmclxuICAgICAgICApO1xuXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWdlbmVyYWwtZm9udCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1nZW5lcmFsLWZvbnQtc2l6ZSk7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXYtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciA5ZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciAxZnI7XG5cbiAgICBnYXA6IDJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdC1jb250YWluZXItY29sb3IpO1xuICAgIC8qIHBhZGRpbmc6IDRyZW0gMXJlbTsgKi9cblxuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cblxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdmFsdWVzLTEpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKSxcbiAgICAgICAgdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMtMikgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpO1xufVxuXG4ubmF2LWluZm8tY29udGFpbmVyIHtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG5cbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtOyAqL1xuXG4gICAgZm9udC1zaXplOiB2YXIoLS1uYXYtdGl0bGUtZm9udC1zaXplKTtcbiAgICBwYWRkaW5nOiAycmVtO1xuXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cbiAgICBib3gtc2hhZG93OiAwIDAgMC41cmVtIDAuNXJlbSByZ2IoMCwgMCwgMCwgMC4xKTtcbn1cblxuLm5hdi10aXRsZS1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbn1cblxuLm5hdi10aXRsZSB7XG59XG5cbi5uYXYtY29udHJvbC1jb250YWluZXIge1xufVxuXG4ubmF2LW5ldy1wcm9qZWN0LWJ1dHRvbiB7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2ljb25zL3BsdXMuc3ZnKTtcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTsgKi9cbn1cblxuLm5hdi1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcblxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEwMHB4LCBhdXRvKSk7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0OyAqL1xuXG4gICAgLyogZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xuXG4gICAgLyogZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGdyaWQtYXV0by1mbG93OiBkZW5zZTsgKi9cblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG5cbiAgICBwYWRkaW5nOiAycmVtO1xuXG4gICAgZm9udC1zaXplOiB2YXIoLS1uYXYtaW5mby1mb250LXNpemUpO1xuICAgIC8qIG92ZXJmbG93OiBzY3JvbGw7ICovXG5cbiAgICAvKiBib3JkZXI6IHNvbGlkIHJlZCAxcHg7ICovXG5cbiAgICBib3gtc2hhZG93OiAwIDAgMC41cmVtIDAuNXJlbSByZ2IoMCwgMCwgMCwgMC4xKTtcbn1cblxuLm5hdi1wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG5cbiAgICAvKiBoZWlnaHQ6IG1pbm1heCg1MHB4LCAxMDBweCk7ICovXG5cbiAgICAvKiBib3JkZXI6IHNvbGlkIHBpbmsgMXB4OyAqL1xufVxuXG4ubmF2LXByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xufVxuXG4ubmF2LXByb2plY3QtdGl0bGUtaWNvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xufVxuXG4ubmF2LXByb2plY3QtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5uYXYtcHJvamVjdC1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIC8qIGhlaWdodDogMjAwcHg7ICovXG5cbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7ICovXG59XG5cbi5uYXYtbGlzdC10aXRsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuMnJlbTtcbn1cblxuLm5hdi1saXN0LXRpdGxlLWljb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbn1cblxuLm5hdi1saXN0LXRpdGxlIHtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNvbnRhaW5lci1jb2xvcik7XG4gICAgLyogYm9yZGVyOiBzb2xpZCAxcHggcmVkOyAqL1xuXG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKTsgKi9cbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTJyZW0gMWZyO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1tdXRlLWNvbG9yKSwgMSk7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgZ2FwOiAxLjVyZW07XG5cbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAvKiBvdmVyZmxvdzogc2Nyb2xsOyAqL1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0LWNvbnRhaW5lci1jb2xvcik7XG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMpXG4gICAgICAgIHJnYmEodmFyKC0tZHJvcC1zaGFkb3ctY29sb3ItY29sb3IpLCAwLjUpOyAqL1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdmFsdWVzLTEpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKSxcbiAgICAgICAgdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMtMikgdmFyKC0tbWlub3ItZHJvcC1zaGFkb3ctY29sb3IpO1xuXG4gICAgLyogYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7ICovXG59XG5cbi5wcm9qZWN0LXRpdGxlLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnI7XG4gICAgZm9udC1zaXplOiB2YXIoLS1wcm9qZWN0LWluZm8tZm9udC1zaXplKTtcbiAgICAvKiBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDsgKi9cblxuICAgIHBhZGRpbmc6IDAuNXJlbTtcblxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVyZW0gMC41cmVtIHJnYigwLCAwLCAwLCAwLjEpO1xufVxuXG4ucHJvamVjdC1pbmZvLWNvbnRhaW5lciB7XG4gICAgLyogYm9yZGVyOiBzb2xpZCByZWQgMXB4OyAqL1xufVxuXG4ucHJvamVjdC1jb250cm9sLWNvbnRhaW5lciB7XG4gICAgLyogYm9yZGVyOiBzb2xpZCBibHVlIDFweDsgKi9cbn1cblxuLnByb2plY3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tcHJvamVjdC10aXRsZS1mb250LXNpemUpO1xufVxuXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XG59XG5cbi5uZXctcHJvamVjdC1saXN0LWJ1dHRvbiB7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2ljb25zL3BsdXMuc3ZnKTtcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTsgKi9cbn1cblxuLmNsb3NlLXByb2plY3QtYnV0dG9uIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvY2xvc2UtYm94LW91dGxpbmUuc3ZnKTtcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTsgKi9cbn1cblxuLnByb2plY3QtY2FyZC1jb250YWluZXIge1xuICAgIGdyaWQtcm93OiAyIC8gMztcblxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87ICovXG5cbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIC8qIGJvcmRlcjogc29saWQgZ3JlZW4gMXB4OyAqL1xuICAgIGdhcDogMS41cmVtO1xuICAgIHBhZGRpbmc6IDJyZW07XG59XG5cbi5saXN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDAuNXJlbTtcblxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSwgMC41KTsgKi9cbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIC8qIGJveC1zaGFkb3c6IHZhcigtLW1pbm9yLWJveC1zaGFkb3ctdmFsdWVzKSB2YXIoLS1kcm9wLXNoYWRvdy1jb2xvcik7ICovXG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tbWlub3ItYm94LXNoYWRvdy1yZXZlcnNlLXZhbHVlcykgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpOyAqL1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgKi9cblxuICAgIC8qIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdmFsdWVzLTEpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKSxcbiAgICAgICAgdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMtMikgdmFyKC0tbWlub3ItZHJvcC1zaGFkb3ctY29sb3IpOyAqL1xuICAgIC8qIGJvcmRlcjogc29saWQgMXB4IGJsYWNrOyAqL1xuXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNXJlbSAwLjVyZW0gcmdiKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5saXN0LXRpdGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnI7XG4gICAgZm9udC1zaXplOiB2YXIoLS1saXN0LWluZm8tZm9udC1zaXplKTtcbn1cblxuLmxpc3QtaW5mby1jb250YWluZXIge1xufVxuXG4ubGlzdC10aXRsZSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1saXN0LXRpdGxlLWZvbnQtc2l6ZSk7XG59XG5cbi5saXN0LWRlc2NyaXB0aW9uIHtcbn1cblxuLm5ldy1saXN0LWl0ZW0tYnV0dG9uIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvcGx1cy5zdmcpO1xuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxOyAqL1xufVxuXG4ubGlzdC1lZGl0LWJ1dHRvbiB7XG59XG5cbi5pdGVtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgMWZyO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSwgMC41KTsgKi9cbn1cblxuLml0ZW0tY2hlY2tib3gtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pdGVtLWNoZWNrYm94IHtcbn1cblxuLyogaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xuICAgIGhlaWdodDogMWVtO1xuICAgIHdpZHRoOiAxZW07XG5cbiAgICBiYWNrZ3JvdW5kOiAjMGEwYTBhO1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDAuNjVlbTtcbiAgICBoZWlnaHQ6IDAuNjVlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtIHZhcigtLWZvcm0tY29udHJvbC1jb2xvcik7XG59ICovXG5cbi5pdGVtLWluZm8tY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pdGVtLWluZm8tZm9udC1zaXplKTtcbn1cblxuLml0ZW0tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taXRlbS10aXRsZS1mb250LXNpemUpO1xufVxuXG4uaXRlbS1kZXNjcmlwdGlvbiB7XG59XG5cbi5pdGVtLWR1ZS1kYXRlIHtcbn1cblxuLml0ZW0tcmVtb3ZlLWJ1dHRvbiB7XG59XG5cbi5sb2dpbi1wYWdlLWJvZHkge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMDUpO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGdyaWQtcm93OiAyIC8gMztcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXG5cbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgNGZyIDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuXG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tbWlub3ItYm94LXNoYWRvdy1yZXZlcnNlLXZhbHVlcykgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpLFxuICAgICAgICB2YXIoLS1taW5vci1ib3gtc2hhZG93LXZhbHVlcykgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpOyAqL1xuICAgIC8qIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdmFsdWVzLTEpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKSxcbiAgICAgICAgdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMtMikgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpOyAqL1xuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVyZW0gMC41cmVtIHJnYigwLCAwLCAwLCAwLjEpO1xufVxuXG4ubG9naW4tY29udHJvbC1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBncmlkLXJvdzogMiAvIDM7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNXJlbSAwLjVyZW0gcmdiKDAsIDAsIDAsIDAuMSk7XG59XG5cbi51c2VyLWxpc3QtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgICBib3gtc2hhZG93OiAwIDAgMC41cmVtIDAuNXJlbSByZ2IoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnVzZXItbmFtZS1vcHRpb24ge1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1nZW5lcmFsLWZvbnQpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taXRlbS10aXRsZS1mb250LXNpemUpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsNEJBQTRCO0lBQzVCLDBDQUEwQztJQUMxQyxnREFBZ0Q7SUFDaEQsNERBQTREO0lBQzVELGtDQUFrQztJQUNsQyxvQ0FBb0M7SUFDcEMscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4Qix3QkFBd0I7O0lBRXhCLGdDQUFnQzs7SUFFaEMsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLDZCQUE2Qjs7SUFFN0IsMEJBQTBCOztJQUUxQixnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xD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O0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7O0lBRWYsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTs7SUFFWiw2QkFBNkI7SUFDN0IsK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7O0lBRWYsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTs7SUFFWiwyQkFBMkI7SUFDM0IsK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHNDQUFzQztBQUMxQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0K0FsdGVybmF0ZXM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMC4uOTAwOzEsMTAwLi45MDAmZmFtaWx5PVJvYm90bytNb25vOml0YWwsd2dodEAwLDEwMC4uNzAwOzEsMTAwLi43MDAmZmFtaWx5PVJvYm90bytTbGFiOndnaHRAMTAwLi45MDAmZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZmFtaWx5PVVidW50dTppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgICAtLW11dGUtY29sb3I6IHJnYigyNTUsIDEyNywgODAsIDAuMSk7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAyNTMsIDEwNywgNjI7XFxuICAgIC0taGlnaGxpZ2h0LWNvbG9yOiAxNDcsIDI1MiwgMjE3O1xcbiAgICAtLWRhcmstc2hhZG93LWNvbG9yOiAwLCAwLCAwO1xcbiAgICAtLWJveC1zaGFkb3ctdmFsdWVzOiAwLjVyZW0gMC44cmVtIDAuMDVyZW07XFxuICAgIC0tbWlub3ItYm94LXNoYWRvdy12YWx1ZXM6IDAuM3JlbSAwLjNyZW0gMC4wNXJlbTtcXG4gICAgLS1nZW5lcmFsLWZvbnQ6IFxcXCJNb250c2VycmF0XFxcIiwgXFxcIlJvYm90byBDb25kZW5zZWRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAtLXRpdGxlLWZvbnQ6IFxcXCJSb2JvdG8gU2xhYlxcXCIsIHNlcmlmO1xcbiAgICAtLWJhc2UtZm9udC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuOCk7XFxuICAgIC0tYmFzZS1mb250LXNpemU6IDF2aDtcXG4gICAgLS10aXRsZS1mb250LXNpemU6IDRyZW07XFxuICAgIC0taGVhZGVyLWZvbnQtc2l6ZTogMnJlbTtcXG4gICAgLS1jb250ZW50LWZvbnQtc2l6ZTogMXJlbTtcXG4gICAgLS1iYXNlLWxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgICAtLWNvbnRlbnQtbGluZS1oZWlnaHQ6IDI7XFxuXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYmFzZS1mb250LXNpemUpO1xcblxcbiAgICAtLWl0ZW0tdGl0bGUtZm9udC1zaXplOiAxLjVyZW07XFxuICAgIC0taXRlbS1pbmZvLWZvbnQtc2l6ZTogMXJlbTtcXG4gICAgLS1saXN0LXRpdGxlLWZvbnQtc2l6ZTogMnJlbTtcXG4gICAgLS1saXN0LWluZm8tZm9udC1zaXplOiAxcmVtO1xcbiAgICAtLXByb2plY3QtdGl0bGUtZm9udC1zaXplOiAycmVtO1xcbiAgICAtLXByb2plY3QtaW5mby1mb250LXNpemU6IDEuNXJlbTtcXG4gICAgLS1uYXYtdGl0bGUtZm9udC1zaXplOiAxLjVyZW07XFxuICAgIC0tbmF2LWluZm8tZm9udC1zaXplOiAxLjI1cmVtO1xcblxcbiAgICAtLW5hdi1pY29uLWRpbWVuc2lvbjogMnJlbTtcXG5cXG4gICAgLS1kYXJrLWdyZWVuOiByZ2JhKDQsIDQyLCA0MywgMSk7XFxuICAgIC0tbW9vbnN0b25lOiByZ2JhKDk0LCAxNzcsIDE5MSwgMSk7XFxuICAgIC0tbGlnaHQtY3lhbjogcmdiYSgyMDUsIDIzNywgMjQ2LCAxKTtcXG4gICAgLS1vcmFuZ2UtY3JheW9sYTogcmdiYSgyMzksIDEyMywgNjksIDEpO1xcbiAgICAtLWNoaWxpLXJlZDogcmdiYSgyMTYsIDcxLCAzOSwgMSk7XFxuXFxuICAgIC0tbGFwaXMtbGF6dWxpOiByZ2JhKDM1LCA4NywgMTM3LCAxKTtcXG4gICAgLS1pbXBlcmlhbC1yZWQ6IHJnYmEoMjUxLCA1NCwgNjQsIDAuMSk7XFxuICAgIC0tYXF1YW1hcmluZTogcmdiYSgyMiwgMjQ0LCAyMDgsIDEpO1xcbiAgICAtLXNjaG9vbC1idXMteWVsbG93OiByZ2JhKDI0MSwgMjExLCAyLCAxKTtcXG4gICAgLS1ibGFjazogcmdiYSgyLCAxLCAwLCAxKTtcXG5cXG4gICAgLS1uYXYtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW1wZXJpYWwtcmVkKTtcXG4gICAgLS1jb250ZW50LWNvbnRhaW5lci1jb2xvcjogcmdiKDI0MiwgMjQyLCAyNDIpO1xcbiAgICAtLXByb2plY3QtY29udGFpbmVyLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuXFxuICAgIC0tYm94LXNoYWRvdy12YWx1ZXM6IC0wLjVyZW0gMC44cmVtIDAuNXJlbTtcXG4gICAgLS1taW5vci1ib3gtc2hhZG93LXZhbHVlczogLTAuM3JlbSAwLjNyZW0gMC4zcmVtO1xcbiAgICAtLWRyb3Atc2hhZG93LWNvbG9yOiByZ2IoMCwgMCwgMCwgMC40KTtcXG4gICAgLS1taW5vci1kcm9wLXNoYWRvdy1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMSk7XFxuICAgIC0tbWlub3ItYm94LXNoYWRvdy1yZXZlcnNlLXZhbHVlczogMC41cmVtIDAuNXJlbSAwLjNyZW07XFxuICAgIC0tYm94LXNoYWRvdy12YWx1ZXMtMTogMC41cmVtIDAuNXJlbSAwLjNyZW07XFxuICAgIC0tYm94LXNoYWRvdy12YWx1ZXMtMjogLTAuMXJlbSAtMC4xcmVtIDAuMXJlbTtcXG4gICAgLS1ib3gtc2hhZG93LXZhbHVlcy0zOiAxcmVtIDFyZW0gMC4zcmVtO1xcbiAgICAtLWJveC1zaGFkb3ctdmFsdWVzLTQ6IC0wLjVyZW0gLTAuNXJlbSAwLjFyZW07XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChtaW4oMTByZW0sIDEwMCUpLCAyZnIpIG1pbm1heChcXG4gICAgICAgICAgICBtaW4oMTByZW0sIDEwMCUpLFxcbiAgICAgICAgICAgIDVmclxcbiAgICAgICAgKTtcXG5cXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWdlbmVyYWwtZm9udCk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZ2VuZXJhbC1mb250LXNpemUpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYXYtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgOWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyIDFmcjtcXG5cXG4gICAgZ2FwOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0LWNvbnRhaW5lci1jb2xvcik7XFxuICAgIC8qIHBhZGRpbmc6IDRyZW0gMXJlbTsgKi9cXG5cXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxuXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdmFsdWVzLTEpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKSxcXG4gICAgICAgIHZhcigtLWJveC1zaGFkb3ctdmFsdWVzLTIpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKTtcXG59XFxuXFxuLm5hdi1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XFxuXFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTsgKi9cXG5cXG4gICAgZm9udC1zaXplOiB2YXIoLS1uYXYtdGl0bGUtZm9udC1zaXplKTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG5cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNXJlbSAwLjVyZW0gcmdiKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5uYXYtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG4ubmF2LXRpdGxlIHtcXG59XFxuXFxuLm5hdi1jb250cm9sLWNvbnRhaW5lciB7XFxufVxcblxcbi5uYXYtbmV3LXByb2plY3QtYnV0dG9uIHtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2ljb25zL3BsdXMuc3ZnKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaWNvbi1kaW1lbnNpb24pO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxOyAqL1xcbn1cXG5cXG4ubmF2LWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuXFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTAwcHgsIGF1dG8pKTtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0OyAqL1xcblxcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcblxcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGdyaWQtYXV0by1mbG93OiBkZW5zZTsgKi9cXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcblxcbiAgICBwYWRkaW5nOiAycmVtO1xcblxcbiAgICBmb250LXNpemU6IHZhcigtLW5hdi1pbmZvLWZvbnQtc2l6ZSk7XFxuICAgIC8qIG92ZXJmbG93OiBzY3JvbGw7ICovXFxuXFxuICAgIC8qIGJvcmRlcjogc29saWQgcmVkIDFweDsgKi9cXG5cXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNXJlbSAwLjVyZW0gcmdiKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5uYXYtcHJvamVjdC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG5cXG4gICAgLyogaGVpZ2h0OiBtaW5tYXgoNTBweCwgMTAwcHgpOyAqL1xcblxcbiAgICAvKiBib3JkZXI6IHNvbGlkIHBpbmsgMXB4OyAqL1xcbn1cXG5cXG4ubmF2LXByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLm5hdi1wcm9qZWN0LXRpdGxlLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvZG90cy1ob3Jpem9udGFsLWNpcmNsZS1vdXRsaW5lLnN2Zyk7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLm5hdi1wcm9qZWN0LXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLm5hdi1wcm9qZWN0LWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICAvKiBoZWlnaHQ6IDIwMHB4OyAqL1xcblxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7ICovXFxufVxcblxcbi5uYXYtbGlzdC10aXRsZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuMnJlbTtcXG59XFxuXFxuLm5hdi1saXN0LXRpdGxlLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvbWVudS1yaWdodC1vdXRsaW5lLnN2Zyk7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLm5hdi1saXN0LXRpdGxlIHtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtY29udGFpbmVyLWNvbG9yKTtcXG4gICAgLyogYm9yZGVyOiBzb2xpZCAxcHggcmVkOyAqL1xcblxcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdmFsdWVzKSB2YXIoLS1kcm9wLXNoYWRvdy1jb2xvcik7ICovXFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTJyZW0gMWZyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW11dGUtY29sb3IpLCAxKTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBnYXA6IDEuNXJlbTtcXG5cXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICAvKiBvdmVyZmxvdzogc2Nyb2xsOyAqL1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiAwLjVyZW07ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3QtY29udGFpbmVyLWNvbG9yKTtcXG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMpXFxuICAgICAgICByZ2JhKHZhcigtLWRyb3Atc2hhZG93LWNvbG9yLWNvbG9yKSwgMC41KTsgKi9cXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMtMSkgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpLFxcbiAgICAgICAgdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMtMikgdmFyKC0tbWlub3ItZHJvcC1zaGFkb3ctY29sb3IpO1xcblxcbiAgICAvKiBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDsgKi9cXG59XFxuXFxuLnByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnI7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcHJvamVjdC1pbmZvLWZvbnQtc2l6ZSk7XFxuICAgIC8qIGJvcmRlcjogc29saWQgYmxhY2sgMXB4OyAqL1xcblxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVyZW0gMC41cmVtIHJnYigwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvLWNvbnRhaW5lciB7XFxuICAgIC8qIGJvcmRlcjogc29saWQgcmVkIDFweDsgKi9cXG59XFxuXFxuLnByb2plY3QtY29udHJvbC1jb250YWluZXIge1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIGJsdWUgMXB4OyAqL1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcHJvamVjdC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxufVxcblxcbi5uZXctcHJvamVjdC1saXN0LWJ1dHRvbiB7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9pY29ucy9wbHVzLnN2Zyk7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTsgKi9cXG59XFxuXFxuLmNsb3NlLXByb2plY3QtYnV0dG9uIHtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2ljb25zL2Nsb3NlLWJveC1vdXRsaW5lLnN2Zyk7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTsgKi9cXG59XFxuXFxuLnByb2plY3QtY2FyZC1jb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuXFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvOyAqL1xcblxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIC8qIGJvcmRlcjogc29saWQgZ3JlZW4gMXB4OyAqL1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSwgMC41KTsgKi9cXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tbWlub3ItYm94LXNoYWRvdy12YWx1ZXMpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKTsgKi9cXG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tbWlub3ItYm94LXNoYWRvdy1yZXZlcnNlLXZhbHVlcykgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpOyAqL1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiAwLjVyZW07ICovXFxuXFxuICAgIC8qIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdmFsdWVzLTEpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKSxcXG4gICAgICAgIHZhcigtLWJveC1zaGFkb3ctdmFsdWVzLTIpIHZhcigtLW1pbm9yLWRyb3Atc2hhZG93LWNvbG9yKTsgKi9cXG4gICAgLyogYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7ICovXFxuXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVyZW0gMC41cmVtIHJnYigwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4ubGlzdC10aXRsZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnI7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tbGlzdC1pbmZvLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5saXN0LWluZm8tY29udGFpbmVyIHtcXG59XFxuXFxuLmxpc3QtdGl0bGUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWxpc3QtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLmxpc3QtZGVzY3JpcHRpb24ge1xcbn1cXG5cXG4ubmV3LWxpc3QtaXRlbS1idXR0b24ge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvcGx1cy5zdmcpO1xcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7ICovXFxufVxcblxcbi5saXN0LWVkaXQtYnV0dG9uIHtcXG59XFxuXFxuLml0ZW0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyIDFmcjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zZWNvbmRhcnktY29sb3IpLCAwLjUpOyAqL1xcbn1cXG5cXG4uaXRlbS1jaGVja2JveC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaXRlbS1jaGVja2JveCB7XFxufVxcblxcbi8qIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gICAgd2lkdGg6IDFlbTtcXG5cXG4gICAgYmFja2dyb3VuZDogIzBhMGEwYTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDAuNjVlbTtcXG4gICAgaGVpZ2h0OiAwLjY1ZW07XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1mb3JtLWNvbnRyb2wtY29sb3IpO1xcbn0gKi9cXG5cXG4uaXRlbS1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZm9udC1zaXplOiB2YXIoLS1pdGVtLWluZm8tZm9udC1zaXplKTtcXG59XFxuXFxuLml0ZW0tdGl0bGUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWl0ZW0tdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLml0ZW0tZGVzY3JpcHRpb24ge1xcbn1cXG5cXG4uaXRlbS1kdWUtZGF0ZSB7XFxufVxcblxcbi5pdGVtLXJlbW92ZS1idXR0b24ge1xcbn1cXG5cXG4ubG9naW4tcGFnZS1ib2R5IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4wNSk7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuLmxvZ2luLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXG5cXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciA0ZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG5cXG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tbWlub3ItYm94LXNoYWRvdy1yZXZlcnNlLXZhbHVlcykgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpLFxcbiAgICAgICAgdmFyKC0tbWlub3ItYm94LXNoYWRvdy12YWx1ZXMpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKTsgKi9cXG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMtMSkgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpLFxcbiAgICAgICAgdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMtMikgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpOyAqL1xcbiAgICBib3gtc2hhZG93OiAwIDAgMC41cmVtIDAuNXJlbSByZ2IoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmxvZ2luLWNvbnRyb2wtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xcbiAgICBib3gtc2hhZG93OiAwIDAgMC41cmVtIDAuNXJlbSByZ2IoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLnVzZXItbGlzdC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbiAgICBib3gtc2hhZG93OiAwIDAgMC41cmVtIDAuNXJlbSByZ2IoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLnVzZXItbmFtZS1vcHRpb24ge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZ2VuZXJhbC1mb250KTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1pdGVtLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgZWxlbWVudFR5cGUsXG4gICAgZWxlbWVudENsYXNzZXMgPSB7fSxcbiAgICBwYXJlbnRFbGVtZW50ID0gbnVsbCxcbiAgICBlbGVtZW50VGV4dCA9IG51bGxcbikge1xuICAgIGlmIChlbGVtZW50VHlwZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuXG4gICAgaWYgKGVsZW1lbnRDbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZWxlbWVudENsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgICAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnRUZXh0ICE9IG51bGwpIHtcbiAgICAgICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnRUZXh0O1xuICAgIH1cblxuICAgIGlmIChwYXJlbnRFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyTm9kZUNvbnRlbnQodGhpc05vZGUpIHtcbiAgICB3aGlsZSAodGhpc05vZGUuZmlyc3RDaGlsZCkge1xuICAgICAgICB0aGlzTm9kZS5yZW1vdmVDaGlsZCh0aGlzTm9kZS5sYXN0Q2hpbGQpO1xuICAgIH1cbn1cbiIsIi8vaW1wb3J0ICogYXMgVGFzayBmcm9tIFwiLi9UYXNrLmpzXCI7XG4vL2ltcG9ydCAqIGFzIEdlbmVyYXRlRWxlbWVudCBmcm9tIFwiLi9HZW5lcmF0ZVBhZ2VFbGVtZW50LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3Qge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbiA9IFwiTm8gZGVzY3JpcHRpb24gc2V0XCIsXG4gICAgICAgIHRhc2tzID0gW10sXG4gICAgICAgIHBhcmVudFByb2plY3RcbiAgICApIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0ID0gcGFyZW50UHJvamVjdDtcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHNldE5hbWUobmV3TmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0VGFza3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICAgIH1cblxuICAgIHNldFRhc2tzKHRhc2tzTGlzdCkge1xuICAgICAgICB0aGlzLnRhc2tzID0gdGFza3NMaXN0O1xuICAgIH1cblxuICAgIGdldFRhc2sodGFza05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IHRhc2tOYW1lKTtcbiAgICB9XG5cbiAgICBjb250YWluc1Rhc2sodGFza05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3Muc29tZSgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT0gdGFza05hbWUpO1xuICAgIH1cblxuICAgIGFkZFRhc2sobmV3VGFzaykge1xuICAgICAgICBpZiAoIXRoaXMuY29udGFpbnNUYXNrKG5ld1Rhc2suZ2V0TmFtZSgpKSkge1xuICAgICAgICAgICAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlVGFzayh0YXNrTmFtZSkge1xuICAgICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpICE9PSB0YXNrTmFtZSk7XG4gICAgfVxuXG4gICAgc2V0Q29udGFpbmVyTm9kZShjb250YWluZXJOb2RlKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyTm9kZSA9IGNvbnRhaW5lck5vZGU7XG4gICAgfVxuXG4gICAgZ2V0Q29udGFpbmVyTm9kZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyTm9kZTtcbiAgICAgICAgfVxuICAgICAgICAvL1RPRE86IFNob3VsZCB0aGVyZSBiZSBhIHJldHVybiB2YWx1ZSBpZiB0aGVyZSBpc24ndCBhIG5vZGUgYXNzaWduZWQgYWxyZWFkeT9cbiAgICAgICAgLy9TaG91bGQgdGhpcyBwcm9wZXJ0eSBqdXN0IGJlIGluaXRpYWxpemVkIGFzIGEgYmxhbmsgc29tZWhvdyB3aGVuIHRoaXMgb2JqZWN0IGlzIGNyZWF0ZWQ/XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgR2VuZXJhdGVFbGVtZW50IGZyb20gXCIuL0dlbmVyYXRlUGFnZUVsZW1lbnQuanNcIjtcbmltcG9ydCBVSSBmcm9tIFwiLi9VSS5qc1wiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vU3RvcmFnZS5qc1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpblVJIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5uZXdTdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcbiAgICAgICAgdGhpcy51c2VyTGlzdCA9IHRoaXMubmV3U3RvcmFnZS5nZXRVc2VycygpO1xuXG4gICAgICAgIHRoaXMucGFnZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICAgICAgICB0aGlzLmdlbmVyYXRlTG9naW5QYWdlKCk7XG4gICAgfVxuXG4gICAgLy9UT0RPOiBHZXQgYW5kIHJldHVybiBhcnJheSBvZiB1c2VycyBmcm9tIGxvY2FsU3RvcmFnZVxuICAgIC8qIG9wZW5Vc2VycygpIHt9ICovXG5cbiAgICBjcmVhdGVVc2VyTGlzdERpdigpIHtcbiAgICAgICAgdGhpcy51c2VyTGlzdC5mb3JFYWNoKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXJMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlTmV3VXNlckRpdih1c2VyKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyVXNlckxpc3REaXYoKSB7XG4gICAgICAgIHRoaXMudXNlckxpc3RDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgfVxuXG4gICAgcmVsb2FkVXNlckxpc3QoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJVc2VyTGlzdERpdigpO1xuICAgICAgICB0aGlzLmNyZWF0ZVVzZXJMaXN0RGl2KCk7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3VXNlckRpdih1c2VyKSB7XG4gICAgICAgIGNvbnN0IHVzZXJEaXYgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJ1c2VyLW5hbWUtb3B0aW9uXCIsIFwiYnV0dG9uXCJdLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHVzZXIubmFtZVxuICAgICAgICApO1xuICAgICAgICB1c2VyRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU5ld1VJKHVzZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXNlckRpdjtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdVSSh1c2VyKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQYWdlQm9keSgpO1xuICAgICAgICBjb25zdCBuZXdQYWdlID0gbmV3IFVJKHVzZXIsIHRoaXMubmV3U3RvcmFnZSk7XG4gICAgfVxuXG4gICAgY2xlYXJQYWdlQm9keSgpIHtcbiAgICAgICAgdGhpcy5wYWdlQm9keS5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdVc2VyKCkge1xuICAgICAgICAvL1Byb21wdCBmb3IgdXNlciBpbmZvXG4gICAgICAgIGNvbnN0IG5ld1VzZXJOYW1lID0gcHJvbXB0KFwiTmV3IFVzZXIgbmFtZT9cIik7XG5cbiAgICAgICAgLy9jcmVhdGUgbmV3IHVzZXJcbiAgICAgICAgY29uc3QgbmV3VXNlciA9IG5ldyBVc2VyKG5ld1VzZXJOYW1lLCBbXSwgdGhpcy51c2VyTGlzdCk7XG5cbiAgICAgICAgLy9BZGQgaXQgYXMgYW4gYWN0dWFsIGNoaWxkIG9mIHRoZSBTdG9yYWdlIHVzZXIgYXJyYXlcbiAgICAgICAgdGhpcy5uZXdTdG9yYWdlLnNpbXBsZVNlbmRUb1N0b3JhZ2UobmV3VXNlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmV3U3RvcmFnZS5nZXRVc2VycygpfWApO1xuXG4gICAgICAgIHRoaXMucmVsb2FkVXNlckxpc3QoKTtcblxuICAgICAgICAvL1NhdmUgdGhlIFN0b3JhZ2UgYXJyYXkgb2YgdXNlcnMgdG8gbG9jYWxTdG9yYWdlIHRvIG1haW50YWluIHN0YXRlIG9uIHBhZ2UgcmVsb2FkXG5cbiAgICAgICAgLy9tYWtlIHN1cmUgdXNlciBwYXJlbnQgY29udGFpbmVyIGlzIG9iamVjdFxuICAgICAgICAvL0RvIEkgbmVlZCB0byBzYXZlIHRoaXMgbmV3IG9iamVjdCBpbW1lZGlhdGVseT9cbiAgICAgICAgLy9EbyBpIG5lZWQgdG8gYWx0ZXIgdGhlIHNhdmUgZnVuY3Rpb24gdG8gaW5jbHVkZSBhbGwgb2JqZWN0c1xuXG4gICAgICAgIC8vU2hvdWxkIHRoaXMgYWxzbyBvcGVuIHRoZSBtYWluIFVJIHdpdGggbmV3IHVzZXIgYW5kIG5vIHByb2plY3RzLCBldGM/XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVMb2dpbkNvbnRyb2xzKGxvZ2luQ29udHJvbENvbnRhaW5lcikge1xuICAgICAgICB0aGlzLm5ld1VzZXJCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuZXctdXNlci1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBsb2dpbkNvbnRyb2xDb250YWluZXIsXG4gICAgICAgICAgICBcIm5ldyB1c2VyXCJcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5uZXdVc2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAvL2p1c3QgZ29ubmEgYWRkIGl0IHRvIHRoZSBsaXN0IG9mIHBvdGVudGlhbCB1c2VycyBmb3Igbm93XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU5ld1VzZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zYXZlVXNlcnNCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuZXctdXNlci1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBsb2dpbkNvbnRyb2xDb250YWluZXIsXG4gICAgICAgICAgICBcInNhdmUgdXNlcnNcIlxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuY2xlYXJVc2Vyc0J1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5ldy11c2VyLWJ1dHRvblwiLCBcImJ1dHRvblwiXSxcbiAgICAgICAgICAgIGxvZ2luQ29udHJvbENvbnRhaW5lcixcbiAgICAgICAgICAgIFwiY2xlYXIgdXNlcnNcIlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdlbmVyYXRlTG9naW5QYWdlKCkge1xuICAgICAgICB0aGlzLmxvZ2luUGFnZUJvZHkgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJsb2dpbi1wYWdlLWJvZHlcIl0sXG4gICAgICAgICAgICB0aGlzLnBhZ2VCb2R5XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5sb2dpbkNvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcImxvZ2luLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHRoaXMubG9naW5QYWdlQm9keVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMubG9naW5Db250cm9sQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibG9naW4tY29udHJvbC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICB0aGlzLmxvZ2luQ29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5nZW5lcmF0ZUxvZ2luQ29udHJvbHModGhpcy5sb2dpbkNvbnRyb2xDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMudXNlckxpc3RDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJ1c2VyLWxpc3QtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgdGhpcy5sb2dpbkNvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlVXNlckxpc3REaXYoKTtcbiAgICB9XG5cbiAgICByZWZyZXNoTG9naW5QYWdlKCkge1xuICAgICAgICB0aGlzLmNsZWFyUGFnZUJvZHkoKTtcblxuICAgICAgICAvL05vdyByZWdlbmVyYXRlIHBhZ2UgYm9keSBlbGVtZW50cyBzZXBhcmF0ZWx5IGZyb20gdGhlIGNvbnN0cnVjdG9yLi4uLlxuICAgICAgICB0aGlzLmdlbmVyYXRlTG9naW5QYWdlKCk7XG4gICAgfVxufVxuIiwiLy9pbXBvcnQgKiBhcyBMaXN0IGZyb20gXCIuL0xpc3QuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgLy9UT0RPOiBTaG91bGQgdGhlIHByb2plY3QgaGF2ZSBhIHJlZmVyZW5jZSB0byB0aGUgVUkgZWxlbWVudCBjb250YWluaW5nIGl0J3MgaW5mb3JtYXRpb24gdG8gbWFrZSB1cGRhdGluZyBzYWlkIFVJIGVsZW1lbnQgZWFzaWVyP1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbiA9IFwiTm8gZGVzY3JpcHRpb24gc2V0XCIsXG4gICAgICAgIGxpc3RzID0gW10sXG4gICAgICAgIHBhcmVudFVzZXJcbiAgICApIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmxpc3RzID0gbGlzdHM7XG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0ID0gcGFyZW50VXNlcjtcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHNldE5hbWUobmV3TmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0VGFza3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3RzO1xuICAgIH1cblxuICAgIHNldExpc3RzKGxpc3RzKSB7XG4gICAgICAgIHRoaXMubGlzdHMgPSBsaXN0cztcbiAgICB9XG5cbiAgICBjb250YWluc0xpc3QobGlzdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdHMuc29tZSgobGlzdCkgPT4gbGlzdC5nZXROYW1lKCkgPT0gbGlzdE5hbWUpO1xuICAgIH1cblxuICAgIGFkZExpc3QobmV3TGlzdCkge1xuICAgICAgICBpZiAoIXRoaXMuY29udGFpbnNMaXN0KG5ld0xpc3QuZ2V0TmFtZSgpKSkge1xuICAgICAgICAgICAgdGhpcy5saXN0cy5wdXNoKG5ld0xpc3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlTGlzdChsaXN0TmFtZSkge1xuICAgICAgICB0aGlzLmxpc3RzID0gdGhpcy5saXN0cy5maWx0ZXIoKGxpc3QpID0+IGxpc3QuZ2V0TmFtZSgpICE9PSBsaXN0TmFtZSk7XG4gICAgfVxuXG4gICAgc2V0Q29udGFpbmVyTm9kZShjb250YWluZXJOb2RlKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyTm9kZSA9IGNvbnRhaW5lck5vZGU7XG4gICAgfVxuXG4gICAgZ2V0Q29udGFpbmVyTm9kZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyTm9kZTtcbiAgICAgICAgfVxuICAgICAgICAvL1RPRE86IFNob3VsZCB0aGVyZSBiZSBhIHJldHVybiB2YWx1ZSBpZiB0aGVyZSBpc24ndCBhIG5vZGUgYXNzaWduZWQgYWxyZWFkeT9cbiAgICAgICAgLy9TaG91bGQgdGhpcyBwcm9wZXJ0eSBqdXN0IGJlIGluaXRpYWxpemVkIGFzIGEgYmxhbmsgc29tZWhvdyB3aGVuIHRoaXMgb2JqZWN0IGlzIGNyZWF0ZWQ/XG4gICAgfVxufVxuIiwiLy9pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyLmpzXCI7XG5pbXBvcnQgc3RvcmFnZUZpbGUgZnJvbSBcIi4vdXNlclN0b3JhZ2UuanNvblwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFzay5qc1wiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdC5qc1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdC5qc1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QganNvblRleHRPZlN0b3JlZFVzZXJBcnJheSA9IHRoaXMuZ2V0RnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICAvKiBjb25zb2xlLmxvZyhganNvblRleHRPZlN0b3JlZFVzZXJBcnJheTogJHtqc29uVGV4dE9mU3RvcmVkVXNlckFycmF5fWApO1xuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YganNvblRleHRPZlN0b3JlZFVzZXJBcnJheSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGpzb25UZXh0T2ZTdG9yZWRVc2VyQXJyYXkpOyAqL1xuICAgICAgICAvKiBjb25zb2xlLmxvZyhqc29uVGV4dCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBqc29uVGV4dCk7ICovXG4gICAgICAgIHRoaXMudXNlckxpc3QgPSB0aGlzLnBhcnNlVXNlcnMoanNvblRleHRPZlN0b3JlZFVzZXJBcnJheSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlckxpc3QpO1xuICAgIH1cblxuICAgIGdldFVzZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyTGlzdDtcbiAgICB9XG5cbiAgICAvL1RPRE86IERvIHdlIG5lZWQgYSB1c2VyIGNvbnRhaW5lciBvYmplY3QgdG8gdGhlbiBiZSBhYmxlIHRvIGNvbW1pdCBiYWNrIGludG8gdGhlIGpzb24gZmlsZT9cblxuICAgIHBhcnNlVXNlcnMoanNvblRleHRPZlN0b3JlZFVzZXJBcnJheSkge1xuICAgICAgICBjb25zdCB1c2VycyA9IFtdO1xuXG4gICAgICAgIGpzb25UZXh0T2ZTdG9yZWRVc2VyQXJyYXkuZm9yRWFjaCgodXNlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNlck5hbWUgPSB1c2VyLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyID0gbmV3IFVzZXIodXNlck5hbWUsIFtdLCBqc29uVGV4dE9mU3RvcmVkVXNlckFycmF5KTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJQcm9qZWN0cyA9IHRoaXMucGFyc2VQcm9qZWN0cyh1c2VyLnByb2plY3RzLCBuZXdVc2VyKTtcbiAgICAgICAgICAgIG5ld1VzZXIuc2V0UHJvamVjdHModXNlclByb2plY3RzKTtcbiAgICAgICAgICAgIHVzZXJzLnB1c2gobmV3VXNlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB1c2VycztcbiAgICB9XG5cbiAgICAvL0NyZWF0ZSBwYXJlbnQgdXNlciBmaXJzdCBhbmQgKnRoZW4qIGdlbmVyYXRlIHRoZSBsaXN0IG9mIHByb2plY3RzIG9uY2UgdGhlIHVzZXIgb2JqZWN0IGFscmVhZHkgZXhpc3RzP1xuXG4gICAgcGFyc2VQcm9qZWN0cyhqc29uUHJvamVjdHMsIHBhcmVudFVzZXIpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBbXTtcbiAgICAgICAganNvblByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcbiAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgcGFyZW50VXNlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaXN0cyA9IHRoaXMucGFyc2VMaXN0cyhwcm9qZWN0Lmxpc3RzLCBuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIG5ld1Byb2plY3Quc2V0TGlzdHMocHJvamVjdExpc3RzKTtcbiAgICAgICAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvamVjdHM7XG4gICAgfVxuXG4gICAgcGFyc2VMaXN0cyhqc29uTGlzdHMsIHBhcmVudFByb2plY3QpIHtcbiAgICAgICAgY29uc3QgbGlzdHMgPSBbXTtcbiAgICAgICAganNvbkxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3ROYW1lID0gbGlzdC5uYW1lO1xuICAgICAgICAgICAgY29uc3QgbGlzdERlc2NyaXB0aW9uID0gbGlzdC5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IG5ld0xpc3QgPSBuZXcgTGlzdChcbiAgICAgICAgICAgICAgICBsaXN0TmFtZSxcbiAgICAgICAgICAgICAgICBsaXN0RGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgcGFyZW50UHJvamVjdFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RUYXNrcyA9IHRoaXMucGFyc2VUYXNrcyhsaXN0LnRhc2tzLCBuZXdMaXN0KTtcbiAgICAgICAgICAgIG5ld0xpc3Quc2V0VGFza3MobGlzdFRhc2tzKTtcbiAgICAgICAgICAgIGxpc3RzLnB1c2gobmV3TGlzdCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbGlzdHM7XG4gICAgfVxuXG4gICAgcGFyc2VUYXNrcyhqc29uVGFza3MsIHBhcmVudExpc3QpIHtcbiAgICAgICAgY29uc3QgdGFza3MgPSBbXTtcbiAgICAgICAganNvblRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gdGFzay5uYW1lO1xuICAgICAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gdGFzay5kdWVEYXRlO1xuICAgICAgICAgICAgY29uc3QgdGFza0NoZWNrZWQgPSB0YXNrLmNoZWNrZWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhcbiAgICAgICAgICAgICAgICB0YXNrTmFtZSxcbiAgICAgICAgICAgICAgICB0YXNrRHVlRGF0ZSxcbiAgICAgICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgcGFyZW50TGlzdCxcbiAgICAgICAgICAgICAgICB0YXNrQ2hlY2tlZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFza3M7XG4gICAgfVxuXG4gICAgLy9SZXR1cm5zIGFuIGFycmF5IG9mIHVzZXIgb2JqZWN0cyBlaXRoZXIgZnJvbSBiYXNlIGZpbGUgb3IgZnJvbSB0aGUgc3RvcmVkIGZpbGUgb2YgdXNlcnNcbiAgICBnZXRGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICBjb25zdCBzdG9yZWRVc2VycyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclN0b3JhZ2VcIik7XG5cbiAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJTdG9yYWdlXCIpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJsaXBvIVwiKTtcbiAgICAgICAgICAgIHJldHVybiBzdG9yYWdlRmlsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzdG9yZWRVc2Vycyk7XG4gICAgfVxuXG4gICAgc2ltcGxlU2VuZFRvU3RvcmFnZSh1c2VyVG9TdG9yZSkge1xuICAgICAgICBpZiAodGhpcy5kb2VzVXNlckFscmVhZHlFeGlzdCh1c2VyVG9TdG9yZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMudXNlckxpc3QuZmluZChcbiAgICAgICAgICAgICAgICAodXNlcikgPT4gdXNlci5uYW1lID09PSB1c2VyVG9TdG9yZS5uYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHVzZXJUb1N0b3JlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYm9pbmshXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51c2VyTGlzdC5wdXNoKHVzZXJUb1N0b3JlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFhYWFhbmshXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coYHRoaXMgaXMgYSBsaXN0IG9mIHVzZXJzIGJlZm9yZSBzdG9yaW5nOmApO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJMaXN0KTtcblxuICAgICAgICB0aGlzLnN0b3JlVXNlckFycmF5KCk7XG4gICAgfVxuXG4gICAgZG9lc1VzZXJBbHJlYWR5RXhpc3QodXNlclRvQ2hlY2spIHtcbiAgICAgICAgY29uc3QgY29udGFpbnNVc2VyID0gdGhpcy51c2VyTGlzdC5zb21lKFxuICAgICAgICAgICAgKHVzZXIpID0+IHVzZXIubmFtZSA9PT0gdXNlclRvQ2hlY2submFtZVxuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmxvZyhgQ29udGFpbnMgVXNlcj8gOiAke2NvbnRhaW5zVXNlcn1gKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5zVXNlcjtcbiAgICB9XG5cbiAgICBzdG9yZVVzZXJBcnJheSgpIHtcbiAgICAgICAgY29uc3QgdG9TZW5kVG9TdG9yYWdlID0gSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICB0aGlzLnVzZXJMaXN0LFxuICAgICAgICAgICAgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXkgPT09IFwicGFyZW50T2JqZWN0XCIgPyB1bmRlZmluZWQgOiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJTdG9yYWdlXCIsIHRvU2VuZFRvU3RvcmFnZSk7XG4gICAgfVxuXG4gICAgLy9UT0RPOiBTaG91bGQgdGhlcmUgYmUgYSBtZXRob2QgdG8gbnVrZSBsb2NhbHN0b3JhZ2Ugb2YgYWxsIHNhdmVkIGRhdGE/XG4gICAgLy9Qcm9iYWJseS4uLlxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGR1ZURhdGUgPSBcIk5vIGR1ZSBkYXRlIHNldC5cIixcbiAgICAgICAgZGVzY3JpcHRpb24gPSBcIk5vIGRlc2NyaXB0aW9uIHNldCB5ZXQuXCIsXG4gICAgICAgIHBhcmVudExpc3QsXG4gICAgICAgIGNoZWNrZWQgPSBmYWxzZVxuICAgICkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0ID0gcGFyZW50TGlzdDtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gY2hlY2tlZDtcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHNldE5hbWUobmV3TmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgIH1cblxuICAgIGdldERhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gICAgfVxuXG4gICAgc2V0RGF0ZShuZXdEYXRlKSB7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0RhdGU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXRDb250YWluZXJOb2RlKGNvbnRhaW5lck5vZGUpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJOb2RlID0gY29udGFpbmVyTm9kZTtcbiAgICB9XG5cbiAgICBnZXRDb250YWluZXJOb2RlKCkge1xuICAgICAgICBpZiAodGhpcy5jb250YWluZXJOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXJOb2RlO1xuICAgICAgICB9XG4gICAgICAgIC8vVE9ETzogU2hvdWxkIHRoZXJlIGJlIGEgcmV0dXJuIHZhbHVlIGlmIHRoZXJlIGlzbid0IGEgbm9kZSBhc3NpZ25lZCBhbHJlYWR5P1xuICAgICAgICAvL1Nob3VsZCB0aGlzIHByb3BlcnR5IGp1c3QgYmUgaW5pdGlhbGl6ZWQgYXMgYSBibGFuayBzb21laG93IHdoZW4gdGhpcyBvYmplY3QgaXMgY3JlYXRlZD9cbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBHZW5lcmF0ZUVsZW1lbnQgZnJvbSBcIi4vR2VuZXJhdGVQYWdlRWxlbWVudC5qc1wiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vU3RvcmFnZS5qc1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFzay5qc1wiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdC5qc1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdC5qc1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlci5qc1wiO1xuaW1wb3J0IExvZ2luVUkgZnJvbSBcIi4vTG9naW5VSS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XG4gICAgLy9Jbml0aWFsaXplIHBhZ2UgYm9keSwgbmF2IGNvbnRhaW5lciwgYW5kIGNvbnRlbnQgY29udGFpbmVyIHBhZ2UgZWxlbWVudHMgdG8gYmUgbGF0ZXIgcG9wdWxhdGVkXG4gICAgY29uc3RydWN0b3IodGhpc1VzZXIsIHRoaXNTdG9yYWdlKSB7XG4gICAgICAgIC8qIGNvbnN0IG5ld1N0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpOyAqL1xuICAgICAgICAvKiB0aGlzLm5ld1N0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xuICAgICAgICB0aGlzLnVzZXJMaXN0ID0gdGhpcy5uZXdTdG9yYWdlLmdldFVzZXJzKCk7ICovXG5cbiAgICAgICAgLy9SZWZhY3RvciB0aGlzIHRvIHRha2UgaW4gYSBzaW5nbGUgdXNlciBhbmQgZ2VuZXJhdGUgVUlcbiAgICAgICAgdGhpcy5uZXdTdG9yYWdlID0gdGhpc1N0b3JhZ2U7XG4gICAgICAgIHRoaXMudXNlciA9IHRoaXNVc2VyO1xuXG4gICAgICAgIC8qIHRoaXMudXNlciA9IHRoaXMudXNlckxpc3RbMF07ICovXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy51c2VyKTtcbiAgICAgICAgdGhpcy5wYWdlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgICB0aGlzLm5hdkNvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnBhZ2VCb2R5LmFwcGVuZENoaWxkKHRoaXMubmF2Q29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLmNvbnRlbnRDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJjb250ZW50LWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucGFnZUJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50Q29udGFpbmVyKTtcblxuICAgICAgICBpZiAodGhpcy51c2VyLnByb2plY3RzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkUGFnZUNvbnRlbnQodGhpcy51c2VyLnByb2plY3RzWzBdLm5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2FkUGFnZUNvbnRlbnQoKTtcbiAgICAgICAgfVxuICAgICAgICAvKiB0aGlzLmxvYWRQYWdlQ29udGVudCh0aGlzLnVzZXIubmFtZSk7ICovXG4gICAgfVxuXG4gICAgLy9DbGVhcnMgYW5kIHBvcHVsYXRlcyBuYXYgYW5kIGRpc3BsYXkgcGFuZXNcbiAgICBsb2FkUGFnZUNvbnRlbnQobmFtZU9mUHJvamVjdFRvTG9hZCA9IFwiXCIpIHtcbiAgICAgICAgdGhpcy5yZWxvYWROYXZDb250ZW50KCk7XG5cbiAgICAgICAgdGhpcy5jbGVhckRpc3BsYXlDb250ZW50KCk7XG4gICAgICAgIC8vSW4gY2FzZSB0aGVyZSBpc24ndCBhIHByb2plY3QgdG8gbG9hZC4uLi5cbiAgICAgICAgaWYgKG5hbWVPZlByb2plY3RUb0xvYWQgIT0gXCJcIikge1xuICAgICAgICAgICAgdGhpcy5maWxsRGlzcGxheVBhbmVDb250ZW50KG5hbWVPZlByb2plY3RUb0xvYWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJOYXZDb250ZW50KCkge1xuICAgICAgICB0aGlzLm5hdkNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICByZWxvYWROYXZDb250ZW50KCkge1xuICAgICAgICB0aGlzLmNsZWFyTmF2Q29udGVudCgpO1xuICAgICAgICB0aGlzLmZpbGxOYXZDb250ZW50KCk7XG4gICAgfVxuXG4gICAgY2xlYXJEaXNwbGF5Q29udGVudCgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIH1cblxuICAgIGZpbGxOYXZDb250ZW50KCkge1xuICAgICAgICBjb25zdCBuYXZJbmZvQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibmF2LWluZm8tY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgdGhpcy5uYXZDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBuYXZUaXRsZUNvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi10aXRsZS1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBuYXZJbmZvQ29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgbmF2Q29udHJvbENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1jb250cm9sLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIG5hdkluZm9Db250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBuYXZUaXRsZSA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi10aXRsZVwiXSxcbiAgICAgICAgICAgIG5hdlRpdGxlQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJNeSBQcm9qZWN0c1wiXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgYWRkTmV3UHJvamVjdEJ1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1uZXctcHJvamVjdC1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBuYXZDb250cm9sQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJhZGQgcHJvamVjdFwiXG4gICAgICAgICk7XG4gICAgICAgIGFkZE5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTmV3UHJvamVjdCgpO1xuICAgICAgICAgICAgdGhpcy5yZWxvYWROYXZDb250ZW50KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNhdmVCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtc2F2ZS11c2Vycy1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBuYXZDb250cm9sQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJzYXZlIGFsbFwiXG4gICAgICAgICk7XG4gICAgICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmxhbW8hXCIpO1xuICAgICAgICAgICAgdGhpcy5uZXdTdG9yYWdlLnNpbXBsZVNlbmRUb1N0b3JhZ2UodGhpcy51c2VyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZXhpdFRvTG9naW5CdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtZXhpdC1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBuYXZDb250cm9sQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJleGl0XCJcbiAgICAgICAgKTtcbiAgICAgICAgZXhpdFRvTG9naW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIExvZ2luVUkucmVmcmVzaExvZ2luUGFnZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBuYXZDb250ZW50Q29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibmF2LWNvbnRlbnQtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgdGhpcy5uYXZDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnBvcHVsYXRlTmF2Q29udGVudChuYXZDb250ZW50Q29udGFpbmVyLCB0aGlzLnVzZXIucHJvamVjdHMpO1xuXG4gICAgICAgIHRoaXMubmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkNvbnRlbnRDb250YWluZXIpO1xuICAgIH1cblxuICAgIHBvcHVsYXRlTmF2Q29udGVudChuYXZDb250ZW50Q29udGFpbmVyLCBwcm9qZWN0cykge1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBuYXZDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUHJvamVjdE5hdlZpc3VhbChwcm9qZWN0KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlUHJvamVjdE5hdlZpc3VhbChwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcImRpdlwiLCBbXG4gICAgICAgICAgICBcIm5hdi1wcm9qZWN0LWNvbnRhaW5lclwiLFxuICAgICAgICBdKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtcHJvamVjdC10aXRsZS1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlSWNvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1wcm9qZWN0LXRpdGxlLWljb25cIl0sXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGVDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtcHJvamVjdC10aXRsZVwiLCBcImJ1dHRvblwiXSxcbiAgICAgICAgICAgIHByb2plY3RUaXRsZUNvbnRhaW5lcixcbiAgICAgICAgICAgIHByb2plY3QubmFtZVxuICAgICAgICApO1xuICAgICAgICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJEaXNwbGF5Q29udGVudCgpO1xuICAgICAgICAgICAgdGhpcy5maWxsRGlzcGxheVBhbmVDb250ZW50KGAke3Byb2plY3QubmFtZX1gKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRlbnRDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtcHJvamVjdC1jb250ZW50LWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBwcm9qZWN0Lmxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlTGlzdE5hdlZpc3VhbChsaXN0KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qIHByb2plY3Quc2V0Q29udGFpbmVyTm9kZShwcm9qZWN0Q29udGFpbmVyKTsgKi9cblxuICAgICAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0TmF2VmlzdWFsKGxpc3QpIHtcbiAgICAgICAgY29uc3QgbGlzdFRpdGxlQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXCJkaXZcIiwgW1xuICAgICAgICAgICAgXCJuYXYtbGlzdC10aXRsZS1jb250YWluZXJcIixcbiAgICAgICAgXSk7XG5cbiAgICAgICAgY29uc3QgbGlzdFRpdGxlSWNvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1saXN0LXRpdGxlLWljb25cIl0sXG4gICAgICAgICAgICBsaXN0VGl0bGVDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBsaXN0VGl0bGVEaXYgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtbGlzdC10aXRsZVwiXSxcbiAgICAgICAgICAgIGxpc3RUaXRsZUNvbnRhaW5lcixcbiAgICAgICAgICAgIGxpc3QubmFtZVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBsaXN0VGl0bGVDb250YWluZXI7XG4gICAgfVxuXG4gICAgLy9DaGVja3MgdGhhdCBhIHByb2plY3QgYnkgdGhhdCBuYW1lIGV4aXN0cyBhbmQgdGhlbiBzZW5kcyB0aGF0IHByb2plY3QgbmFtZSBvbiB0byBiZSBhZGRlZCB0byB0aGUgd29ya3NwYWNlXG4gICAgZmlsbERpc3BsYXlQYW5lQ29udGVudChwcm9qZWN0TmFtZSA9IFwiZGVmYXVsdFwiKSB7XG4gICAgICAgIGlmICghdGhpcy51c2VyLmNvbnRhaW5zUHJvamVjdChwcm9qZWN0TmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXCJkaXZcIiwgW1xuICAgICAgICAgICAgXCJwcm9qZWN0LWNvbnRhaW5lclwiLFxuICAgICAgICBdKTtcblxuICAgICAgICB0aGlzLmNyZWF0ZVByb2plY3RWaXN1YWwoXG4gICAgICAgICAgICB0aGlzLnVzZXIuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSksXG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBjcmVhdGVQcm9qZWN0VmlzdWFsKHByb2plY3QsIHByb2plY3RDb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wicHJvamVjdC10aXRsZS1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdEluZm9Db250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJwcm9qZWN0LWluZm8tY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgcHJvamVjdFRpdGxlQ29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRyb2xDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJwcm9qZWN0LWNvbnRyb2wtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgcHJvamVjdFRpdGxlQ29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdENhcmRDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJwcm9qZWN0LWNhcmQtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wicHJvamVjdC10aXRsZVwiXSxcbiAgICAgICAgICAgIHByb2plY3RJbmZvQ29udGFpbmVyLFxuICAgICAgICAgICAgcHJvamVjdC5uYW1lXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wicHJvamVjdC1kZXNjcmlwdGlvblwiXSxcbiAgICAgICAgICAgIHByb2plY3RJbmZvQ29udGFpbmVyLFxuICAgICAgICAgICAgcHJvamVjdC5kZXNjcmlwdGlvblxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZU5ld0xpc3RCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuZXctcHJvamVjdC1saXN0LWJ1dHRvblwiLCBcImJ1dHRvblwiXSxcbiAgICAgICAgICAgIHByb2plY3RDb250cm9sQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJuZXcgbGlzdFwiXG4gICAgICAgICk7XG4gICAgICAgIGNyZWF0ZU5ld0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0xpc3QgPSB0aGlzLmNyZWF0ZUxpc3QocHJvamVjdCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2plY3RWaXN1YWwocHJvamVjdCk7XG4gICAgICAgICAgICB0aGlzLnJlbG9hZE5hdkNvbnRlbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY2xvc2VQcm9qZWN0QnV0dG9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiY2xvc2UtcHJvamVjdC1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBwcm9qZWN0Q29udHJvbENvbnRhaW5lcixcbiAgICAgICAgICAgIFwiY2xvc2UgcHJvamVjdFwiXG4gICAgICAgICk7XG4gICAgICAgIGNsb3NlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGVhckRpc3BsYXlDb250ZW50KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJpdGVtLXJlbW92ZS1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBwcm9qZWN0Q29udHJvbENvbnRhaW5lcixcbiAgICAgICAgICAgIFwiZGVsZXRlIHByb2plY3RcIlxuICAgICAgICApO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0LnBhcmVudE9iamVjdC5yZW1vdmVQcm9qZWN0KHByb2plY3QubmFtZSk7XG4gICAgICAgICAgICB0aGlzLmxvYWRQYWdlQ29udGVudCgpO1xuICAgICAgICAgICAgLy9UT0RPOiB0aGlzIGFsc28gbmVlZHMgdG8gdXBkYXRlIHRoZSBqc29uIGZpbGUgb2YgcmVjb3JkIHRvIHNhdmUgcGFnZSBzdGF0ZSBvbiByZWxvYWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZWRpdFByb2plY3RCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJwcm9qZWN0LWVkaXQtYnV0dG9uXCIsIFwiYnV0dG9uXCJdLFxuICAgICAgICAgICAgcHJvamVjdENvbnRyb2xDb250YWluZXIsXG4gICAgICAgICAgICBcImVkaXQgcHJvamVjdFwiXG4gICAgICAgICk7XG4gICAgICAgIGVkaXRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVkaXRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9qZWN0VmlzdWFsKHByb2plY3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFwcGVuZEFsbExpc3RzVG9Qcm9qZWN0KHByb2plY3RDYXJkQ29udGFpbmVyLCBwcm9qZWN0Lmxpc3RzKTtcblxuICAgICAgICBwcm9qZWN0LnNldENvbnRhaW5lck5vZGUocHJvamVjdENvbnRhaW5lcik7XG5cbiAgICAgICAgLyogdGhpcy5jb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpOyAqL1xuICAgIH1cblxuICAgIGFwcGVuZEFsbExpc3RzVG9Qcm9qZWN0KHByb2plY3RDb250YWluZXIsIGxpc3RzKSB7XG4gICAgICAgIGxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kTGlzdChsaXN0LCBwcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXBwZW5kTGlzdChsaXN0LCBwcm9qZWN0Q29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcImRpdlwiLCBbXG4gICAgICAgICAgICBcImxpc3QtY29udGFpbmVyXCIsXG4gICAgICAgIF0pO1xuICAgICAgICB0aGlzLmNyZWF0ZUxpc3RWaXN1YWwobGlzdCwgbGlzdENvbnRhaW5lcik7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgY3JlYXRlTGlzdFZpc3VhbChsaXN0LCBsaXN0Q29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IGxpc3RUaXRsZUNvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcImxpc3QtdGl0bGUtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgbGlzdENvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGxpc3RJbmZvQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibGlzdC1pbmZvLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIGxpc3RUaXRsZUNvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGxpc3RDb250cm9sQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibGlzdC1jb250cm9sLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIGxpc3RUaXRsZUNvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGxpc3RDYXJkQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibGlzdC1jYXJkLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIGxpc3RDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcImxpc3QtdGl0bGVcIl0sXG4gICAgICAgICAgICBsaXN0SW5mb0NvbnRhaW5lcixcbiAgICAgICAgICAgIGxpc3QubmFtZVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGxpc3REZXNjcmlwdGlvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcImxpc3QtZGVzY3JpcHRpb25cIl0sXG4gICAgICAgICAgICBsaXN0SW5mb0NvbnRhaW5lcixcbiAgICAgICAgICAgIGxpc3QuZGVzY3JpcHRpb25cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBhZGROZXdUYXNrQnV0dG9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibmV3LWxpc3QtaXRlbS1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBsaXN0Q29udHJvbENvbnRhaW5lcixcbiAgICAgICAgICAgIFwibmV3IHRhc2tcIlxuICAgICAgICApO1xuICAgICAgICBhZGROZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gdGhpcy5jcmVhdGVUYXNrKGxpc3QpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMaXN0VmlzdWFsKGxpc3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZW1vdmVMaXN0QnV0dG9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiaXRlbS1yZW1vdmUtYnV0dG9uXCIsIFwiYnV0dG9uXCJdLFxuICAgICAgICAgICAgbGlzdENvbnRyb2xDb250YWluZXIsXG4gICAgICAgICAgICBcImRlbGV0ZSBsaXN0XCJcbiAgICAgICAgKTtcbiAgICAgICAgcmVtb3ZlTGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGlzdC5wYXJlbnRPYmplY3QucmVtb3ZlTGlzdChsaXN0Lm5hbWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9qZWN0VmlzdWFsKGxpc3QucGFyZW50T2JqZWN0KTtcbiAgICAgICAgICAgIHRoaXMucmVsb2FkTmF2Q29udGVudCgpO1xuXG4gICAgICAgICAgICAvL1RPRE86IHRoaXMgYWxzbyBuZWVkcyB0byB1cGRhdGUgdGhlIGpzb24gZmlsZSBvZiByZWNvcmQgdG8gc2F2ZSBwYWdlIHN0YXRlIG9uIHJlbG9hZFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBlZGl0TGlzdEJ1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcImxpc3QtZWRpdC1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBsaXN0Q29udHJvbENvbnRhaW5lcixcbiAgICAgICAgICAgIFwiZWRpdCBsaXN0XCJcbiAgICAgICAgKTtcbiAgICAgICAgZWRpdExpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWRpdExpc3QobGlzdCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3RWaXN1YWwobGlzdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYXBwZW5kVGFza0xpc3QobGlzdENvbnRhaW5lciwgbGlzdCk7XG4gICAgICAgIGxpc3Quc2V0Q29udGFpbmVyTm9kZShsaXN0Q29udGFpbmVyKTtcbiAgICAgICAgLy9Eb2VzIHRoaXMgKG5lZWQgdG8gcmV0dXJuPykgbGlzdCBjb250YWluZXJcbiAgICAgICAgcmV0dXJuIGxpc3RDb250YWluZXI7XG4gICAgfVxuXG4gICAgYXBwZW5kVGFza0xpc3QobGlzdENvbnRhaW5lciwgbGlzdCkge1xuICAgICAgICBsaXN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kVGFzayh0YXNrLCBsaXN0Q29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXBwZW5kVGFzayh0YXNrLCBsaXN0Q29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcImRpdlwiLCBbXG4gICAgICAgICAgICBcIml0ZW0tY29udGFpbmVyXCIsXG4gICAgICAgIF0pO1xuICAgICAgICB0aGlzLmNyZWF0ZVRhc2tWaXN1YWwodGFzaywgdGFza0NvbnRhaW5lcik7XG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLy9DaGVja2JveCBuZWVkcyB0byBzYXZlIHN0YXRlIGJldHdlZW4gbG9hZHNcbiAgICBjcmVhdGVUYXNrVmlzdWFsKHRhc2ssIHRhc2tDb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJpdGVtLWNoZWNrYm94LWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHRhc2tDb250YWluZXJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgICAgIFtcIml0ZW0tY2hlY2tib3hcIl0sXG4gICAgICAgICAgICBjaGVja2JveENvbnRhaW5lclxuICAgICAgICApO1xuICAgICAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICAvKiBjb25zb2xlLmxvZyhgVGFzayBuYW1lPyAke3Rhc2submFtZX0gVGFzayBjaGVja2VkPyAke3Rhc2suY2hlY2tlZH1gKTsgKi9cbiAgICAgICAgaWYgKHRhc2suY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2suY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHRhc2suY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXNrLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiaXRlbS1pbmZvLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHRhc2tDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJpdGVtLXRpdGxlXCJdLFxuICAgICAgICAgICAgaW5mb0NvbnRhaW5lcixcbiAgICAgICAgICAgIHRhc2submFtZVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIml0ZW0tZGVzY3JpcHRpb25cIl0sXG4gICAgICAgICAgICBpbmZvQ29udGFpbmVyLFxuICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvblxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EdWVEYXRlID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiaXRlbS1kdWUtZGF0ZVwiXSxcbiAgICAgICAgICAgIGluZm9Db250YWluZXIsXG4gICAgICAgICAgICB0YXNrLmR1ZURhdGVcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCB0YXNrQ29udHJvbHNDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJ0YXNrLWNvbnRyb2xzLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHRhc2tDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCByZW1vdmVUYXNrQnV0dG9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiaXRlbS1yZW1vdmUtYnV0dG9uXCIsIFwiYnV0dG9uXCJdLFxuICAgICAgICAgICAgdGFza0NvbnRyb2xzQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJyZW1vdmUgaXRlbVwiXG4gICAgICAgICk7XG4gICAgICAgIHJlbW92ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRhc2sucGFyZW50T2JqZWN0LnJlbW92ZVRhc2sodGFzay5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGlzdFZpc3VhbCh0YXNrLnBhcmVudE9iamVjdCk7XG4gICAgICAgICAgICAvL1RPRE86IHRoaXMgYWxzbyBuZWVkcyB0byB1cGRhdGUgdGhlIGpzb24gZmlsZSBvZiByZWNvcmQgdG8gc2F2ZSBwYWdlIHN0YXRlIG9uIHJlbG9hZFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBlZGl0VGFza0J1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIml0ZW0tZWRpdC1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICB0YXNrQ29udHJvbHNDb250YWluZXIsXG4gICAgICAgICAgICBcImVkaXQgaXRlbVwiXG4gICAgICAgICk7XG4gICAgICAgIGVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVkaXRUYXNrKHRhc2spO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUYXNrVmlzdWFsKHRhc2spO1xuICAgICAgICB9KTtcblxuICAgICAgICB0YXNrLnNldENvbnRhaW5lck5vZGUodGFza0NvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xuICAgIH1cblxuICAgIGNyZWF0ZVRhc2socGFyZW50TGlzdCkge1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IHByb21wdChcIkl0ZW0gbmFtZT9cIik7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHByb21wdChcIkl0ZW0gZGVzY3JpcHRpb24/XCIpO1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHByb21wdChcIkl0ZW0gZHVlIGRhdGU/XCIpO1xuXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhcbiAgICAgICAgICAgIHRhc2tOYW1lLFxuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGFza0R1ZURhdGUsXG4gICAgICAgICAgICBwYXJlbnRMaXN0XG4gICAgICAgICk7XG5cbiAgICAgICAgcGFyZW50TGlzdC5hZGRUYXNrKG5ld1Rhc2spO1xuICAgIH1cblxuICAgIGVkaXRUYXNrKHRhc2spIHtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBwcm9tcHQoXCJOZXcgdGFzayBuYW1lP1wiLCBgJHt0YXNrLm5hbWV9YCk7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHByb21wdChcbiAgICAgICAgICAgIFwiTmV3IHRhc2sgZGVzY3JpcHRpb24/XCIsXG4gICAgICAgICAgICBgJHt0YXNrLmRlc2NyaXB0aW9ufWBcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBwcm9tcHQoXCJOZXcgdGFzayBkdWUgZGF0ZT9cIiwgYCR7dGFzay5kdWVEYXRlfWApO1xuXG4gICAgICAgIHRhc2suc2V0TmFtZSh0YXNrTmFtZSk7XG4gICAgICAgIHRhc2suc2V0RGF0ZSh0YXNrRHVlRGF0ZSk7XG4gICAgICAgIHRhc2suc2V0RGVzY3JpcHRpb24odGFza0Rlc2NyaXB0aW9uKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUYXNrVmlzdWFsKHRhc2spIHtcbiAgICAgICAgdGhpcy5jbGVhclRhc2tWaXN1YWwodGFzay5jb250YWluZXJOb2RlKTtcbiAgICAgICAgdGhpcy5jcmVhdGVUYXNrVmlzdWFsKHRhc2ssIHRhc2suY29udGFpbmVyTm9kZSk7XG4gICAgfVxuXG4gICAgY2xlYXJUYXNrVmlzdWFsKHRhc2tWaXN1YWwpIHtcbiAgICAgICAgdGFza1Zpc3VhbC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0KHBhcmVudFByb2plY3QpIHtcbiAgICAgICAgY29uc3QgbGlzdE5hbWUgPSBwcm9tcHQoXCJMaXN0IG5hbWU/XCIpO1xuICAgICAgICBjb25zdCBsaXN0RGVzY3JpcHRpb24gPSBwcm9tcHQoXCJMaXN0IGRlc2NyaXB0aW9uP1wiKTtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IG5ldyBMaXN0KGxpc3ROYW1lLCBsaXN0RGVzY3JpcHRpb24sIFtdLCBwYXJlbnRQcm9qZWN0KTtcblxuICAgICAgICBwYXJlbnRQcm9qZWN0LmFkZExpc3QobmV3TGlzdCk7XG4gICAgfVxuXG4gICAgZWRpdExpc3QobGlzdCkge1xuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IHByb21wdChcIkxpc3QgbmFtZT9cIiwgbGlzdC5uYW1lKTtcbiAgICAgICAgY29uc3QgbGlzdERlc2NyaXB0aW9uID0gcHJvbXB0KFwiTGlzdCBkZXNjcmlwdGlvbj9cIiwgbGlzdC5kZXNjcmlwdGlvbik7XG5cbiAgICAgICAgbGlzdC5uYW1lID0gbGlzdE5hbWU7XG4gICAgICAgIGxpc3QuZGVzY3JpcHRpb24gPSBsaXN0RGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgdXBkYXRlTGlzdFZpc3VhbChsaXN0KSB7XG4gICAgICAgIHRoaXMuY2xlYXJMaXN0VmlzdWFsKGxpc3QuY29udGFpbmVyTm9kZSk7XG4gICAgICAgIHRoaXMuY3JlYXRlTGlzdFZpc3VhbChsaXN0LCBsaXN0LmNvbnRhaW5lck5vZGUpO1xuICAgIH1cblxuICAgIGNsZWFyTGlzdFZpc3VhbChsaXN0VmlzdWFsKSB7XG4gICAgICAgIGxpc3RWaXN1YWwucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgfVxuXG4gICAgZWRpdFByb2plY3QocHJvamVjdCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb21wdChcIlByb2plY3QgbmFtZT9cIiwgcHJvamVjdC5uYW1lKTtcbiAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gcHJvbXB0KFxuICAgICAgICAgICAgXCJQcm9qZWN0IGRlc2NyaXB0aW9uP1wiLFxuICAgICAgICAgICAgcHJvamVjdC5kZXNjcmlwdGlvblxuICAgICAgICApO1xuXG4gICAgICAgIHByb2plY3QubmFtZSA9IHByb2plY3ROYW1lO1xuICAgICAgICBwcm9qZWN0LmRlc2NyaXB0aW9uID0gcHJvamVjdERlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHVwZGF0ZVByb2plY3RWaXN1YWwocHJvamVjdCkge1xuICAgICAgICB0aGlzLmNsZWFyUHJvamVjdFZpc3VhbChwcm9qZWN0LmNvbnRhaW5lck5vZGUpO1xuICAgICAgICB0aGlzLmNyZWF0ZVByb2plY3RWaXN1YWwocHJvamVjdCwgcHJvamVjdC5jb250YWluZXJOb2RlKTtcbiAgICB9XG5cbiAgICBjbGVhclByb2plY3RWaXN1YWwocHJvamVjdFZpc3VhbCkge1xuICAgICAgICBwcm9qZWN0VmlzdWFsLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ld1Byb2plY3QoKSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gcHJvbXB0KFwiUHJvamVjdCBuYW1lP1wiKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdERlc2NyaXB0aW9uID0gcHJvbXB0KFwiUHJvamVjdCBkZXNjcmlwdGlvbj9cIik7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RMaXN0cyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcbiAgICAgICAgICAgIG5ld1Byb2plY3ROYW1lLFxuICAgICAgICAgICAgbmV3UHJvamVjdERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgbmV3UHJvamVjdExpc3RzLFxuICAgICAgICAgICAgdGhpcy51c2VyXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy51c2VyLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgcHJvamVjdHMgPSBbXSwgcGFyZW50Q29udGFpbmVyID0gbnVsbCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XG4gICAgICAgIHRoaXMucGFyZW50T2JqZWN0ID0gcGFyZW50Q29udGFpbmVyO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICAgIH1cblxuICAgIHNldFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgICB9XG5cbiAgICBjb250YWluc1Byb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuc29tZShcbiAgICAgICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zUHJvamVjdChuZXdQcm9qZWN0LmdldE5hbWUoKSkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKFxuICAgICAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpICE9PSBwcm9qZWN0TmFtZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZChcbiAgICAgICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWVcbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgVUkgZnJvbSBcIi4vbW9kdWxlcy9VSS5qc1wiO1xuaW1wb3J0IExvZ2luVUkgZnJvbSBcIi4vbW9kdWxlcy9Mb2dpblVJLmpzXCI7XG5cbi8qIGNvbnN0IG5ld1BhZ2UgPSBuZXcgVUkoKTsgKi9cblxuY29uc3QgbmV3TG9naW4gPSBuZXcgTG9naW5VSSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9