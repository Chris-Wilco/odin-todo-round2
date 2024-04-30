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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap\");\n\n:root {\n    --mute-color: rgb(255, 127, 80, 0.1);\n    --secondary-color: 253, 107, 62;\n    --highlight-color: 147, 252, 217;\n    --dark-shadow-color: 0, 0, 0;\n    --box-shadow-values: 0.5rem 0.8rem 0.05rem;\n    --minor-box-shadow-values: 0.3rem 0.3rem 0.05rem;\n    --general-font: \"Montserrat\", \"Roboto Condensed\", sans-serif;\n    --title-font: \"Roboto Slab\", serif;\n    --base-font-color: rgb(0, 0, 0, 0.8);\n    --base-font-size: 1vh;\n    --title-font-size: 4rem;\n    --header-font-size: 2rem;\n    --content-font-size: 1rem;\n    --base-line-height: 1.25;\n    --content-line-height: 2;\n\n    font-size: var(--base-font-size);\n\n    --item-title-font-size: 1.5rem;\n    --item-info-font-size: 1rem;\n    --list-title-font-size: 2rem;\n    --list-info-font-size: 1rem;\n    --project-title-font-size: 2rem;\n    --project-info-font-size: 1.5rem;\n    --nav-title-font-size: 1.5rem;\n    --nav-info-font-size: 1.25rem;\n\n    --nav-icon-dimension: 2rem;\n\n    --dark-green: rgba(4, 42, 43, 1);\n    --moonstone: rgba(94, 177, 191, 1);\n    --light-cyan: rgba(205, 237, 246, 1);\n    --orange-crayola: rgba(239, 123, 69, 1);\n    --chili-red: rgba(216, 71, 39, 1);\n\n    --lapis-lazuli: rgba(35, 87, 137, 1);\n    --imperial-red: rgba(251, 54, 64, 0.1);\n    --aquamarine: rgba(22, 244, 208, 1);\n    --school-bus-yellow: rgba(241, 211, 2, 1);\n    --black: rgba(2, 1, 0, 1);\n\n    --nav-background-color: var(--imperial-red);\n    --content-container-color: rgb(242, 242, 242);\n    --project-container-color: rgb(255, 255, 255);\n\n    --box-shadow-values: -0.5rem 0.8rem 0.5rem;\n    --minor-box-shadow-values: -0.3rem 0.3rem 0.3rem;\n    --drop-shadow-color: rgb(0, 0, 0, 0.4);\n    --minor-drop-shadow-color: rgb(0, 0, 0, 0.1);\n    --minor-box-shadow-reverse-values: 0.5rem 0.5rem 0.3rem;\n    --box-shadow-values-1: 0.5rem 0.5rem 0.3rem;\n    --box-shadow-values-2: -0.1rem -0.1rem 0.1rem;\n    --box-shadow-values-3: 1rem 1rem 0.3rem;\n    --box-shadow-values-4: -0.5rem -0.5rem 0.1rem;\n\n    box-sizing: border-box;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: minmax(min(10rem, 100%), 2fr) minmax(\n            min(10rem, 100%),\n            5fr\n        );\n\n    font-family: var(--general-font);\n    font-size: var(--general-font-size);\n    margin: 0;\n    padding: 0;\n\n    height: 100vh;\n}\n\n.button {\n    cursor: pointer;\n}\n\n.nav-container {\n    grid-column: 1 / 2;\n\n    display: grid;\n    grid-template-rows: 1fr 2fr 10fr 1fr;\n    grid-template-columns: 1fr 6fr 1fr;\n\n    gap: 2rem;\n    background-color: var(--project-container-color);\n    /* padding: 4rem 1rem; */\n\n    position: sticky;\n    top: 0;\n    margin: 0;\n    height: 100vh;\n\n    /* border: 1px solid blue; */\n\n    box-shadow: var(--box-shadow-values-1) var(--drop-shadow-color),\n        var(--box-shadow-values-2) var(--drop-shadow-color);\n}\n\n.nav-info-container {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n\n    display: grid;\n    /* grid-template-columns: 2fr 1fr; */\n    grid-template-rows: 1fr 2fr;\n    /* align-items: center; */\n    justify-items: center;\n\n    /* display: flex;\n    align-items: center;\n    gap: 1rem; */\n\n    font-size: var(--nav-title-font-size);\n    padding: 2rem;\n\n    /* border: 1px solid blue; */\n    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);\n}\n\n.nav-title-container {\n    /* grid-column: 1 / 2; */\n    grid-row: 1 / 2;\n\n    /* border: solid red 1px; */\n}\n\n.nav-title {\n    /* border: solid blue 1px; */\n}\n\n.nav-control-container {\n    /* border: solid red 1px; */\n}\n\n.nav-new-project-button {\n    /* background-image: url(./img/icons/plus.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1; */\n}\n\n.nav-content-container {\n    grid-row: 3 / 4;\n    grid-column: 2 / 3;\n\n    /* display: grid;\n    gap: 1rem;\n    grid-template-rows: repeat(auto-fill, minmax(100px, auto));\n    align-items: start; */\n\n    /* display: flex;\n    flex-direction: column; */\n\n    /* display: grid;\n    grid-template-columns: 1fr;\n    align-items: start;\n    gap: 1rem;\n    grid-auto-flow: dense; */\n\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n\n    padding: 2rem;\n\n    font-size: var(--nav-info-font-size);\n    /* overflow: scroll; */\n\n    /* border: solid red 1px; */\n\n    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);\n}\n\n.nav-project-container {\n    grid-column: 1 / 2;\n\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n\n    /* height: minmax(50px, 100px); */\n\n    /* border: solid pink 1px; */\n}\n\n.nav-project-title-container {\n    grid-column: 1 / 3;\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.nav-project-title-icon {\n    background-image: url(./img/icons/dots-horizontal-circle-outline.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.nav-project-title {\n    font-weight: 500;\n}\n\n.nav-project-content-container {\n    grid-column: 2 / 3;\n    /* height: 200px; */\n\n    /* border: 1px solid yellow; */\n}\n\n.nav-list-title-container {\n    display: flex;\n    align-items: center;\n    gap: 0.2rem;\n}\n\n.nav-list-title-icon {\n    background-image: url(./img/icons/menu-right-outline.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.nav-list-title {\n}\n\n.content-container {\n    grid-column: 2 / 3;\n\n    display: grid;\n    gap: 1rem;\n    background-color: var(--content-container-color);\n    /* border: solid 1px red; */\n\n    /* height: 100vh; */\n    height: 100%;\n    /* box-shadow: var(--box-shadow-values) var(--drop-shadow-color); */\n}\n\n.project-container {\n    display: grid;\n    grid-template-rows: 12rem 1fr;\n\n    background-color: rgba(var(--mute-color), 1);\n    padding: 2rem;\n    margin: 1rem;\n    gap: 1.5rem;\n\n    height: 100%;\n\n    /* overflow: scroll; */\n    /* border-radius: 0.5rem; */\n    background-color: var(--project-container-color);\n    /* box-shadow: var(--box-shadow-values)\n        rgba(var(--drop-shadow-color-color), 0.5); */\n    box-shadow: var(--box-shadow-values-1) var(--drop-shadow-color),\n        var(--box-shadow-values-2) var(--minor-drop-shadow-color);\n\n    /* border: solid black 1px; */\n}\n\n.project-title-container {\n    grid-row: 1 / 2;\n\n    display: grid;\n    grid-template-columns: 5fr 1fr;\n    font-size: var(--project-info-font-size);\n    /* border: solid black 1px; */\n\n    padding: 0.5rem;\n\n    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);\n}\n\n.project-info-container {\n    /* border: solid red 1px; */\n}\n\n.project-control-container {\n    /* border: solid blue 1px; */\n}\n\n.project-title {\n    font-size: var(--project-title-font-size);\n}\n\n.project-description {\n}\n\n.new-project-list-button {\n    /* background-image: url(./img/icons/plus.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1; */\n}\n\n.close-project-button {\n    /* background-image: url(./img/icons/close-box-outline.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1; */\n}\n\n.project-card-container {\n    grid-row: 2 / 3;\n\n    /* display: grid;\n    grid-auto-rows: auto; */\n\n    height: 100%;\n\n    display: flex;\n    flex-direction: column;\n\n    overflow: scroll;\n    /* border: solid green 1px; */\n    gap: 1.5rem;\n    padding: 2rem;\n}\n\n.list-container {\n    display: grid;\n    gap: 0.5rem;\n\n    /* background-color: rgba(var(--secondary-color), 0.5); */\n    padding: 1rem;\n    /* box-shadow: var(--minor-box-shadow-values) var(--drop-shadow-color); */\n    /* box-shadow: var(--minor-box-shadow-reverse-values) var(--drop-shadow-color); */\n    /* border-radius: 0.5rem; */\n\n    /* box-shadow: var(--box-shadow-values-1) var(--drop-shadow-color),\n        var(--box-shadow-values-2) var(--minor-drop-shadow-color); */\n    /* border: solid 1px black; */\n\n    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);\n}\n\n.list-title-container {\n    display: grid;\n    grid-template-columns: 5fr 1fr;\n    font-size: var(--list-info-font-size);\n}\n\n.list-info-container {\n}\n\n.list-title {\n    font-size: var(--list-title-font-size);\n}\n\n.list-description {\n}\n\n.new-list-item-button {\n    /* background-image: url(./img/icons/plus.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1; */\n}\n\n.list-edit-button {\n}\n\n.item-container {\n    display: grid;\n    grid-template-columns: 1fr 6fr 1fr;\n    /* background-color: rgba(var(--secondary-color), 0.5); */\n}\n\n.item-checkbox-container {\n    grid-column: 1 / 2;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.item-checkbox {\n}\n\n/* input[type=\"checkbox\"] {\n    appearance: none;\n    display: grid;\n    place-content: center;\n    border: solid 1px black;\n    height: 1em;\n    width: 1em;\n\n    background: #0a0a0a;\n    border-color: #fff;\n}\n\ninput[type=\"checkbox\"]::before {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    transform: scale(0);\n    transition: 120ms transform ease-in-out;\n    box-shadow: inset 1em 1em var(--form-control-color);\n} */\n\n.item-info-container {\n    grid-column: 2 / 3;\n    font-size: var(--item-info-font-size);\n}\n\n.item-title {\n    font-size: var(--item-title-font-size);\n}\n\n.item-description {\n}\n\n.item-due-date {\n}\n\n.item-remove-button {\n}\n\n.login-page-body {\n    grid-column: 1 / 3;\n\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    grid-template-rows: 1fr 2fr 1fr;\n\n    background-color: rgb(0, 0, 0, 0.05);\n    /* border: 1px solid red; */\n}\n\n.login-container {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n\n    background-color: white;\n    /* border: 1px solid blue; */\n\n    /* display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; */\n\n    display: grid;\n    grid-template-columns: 1fr 4fr 1fr;\n    grid-template-rows: 1fr 1fr 4fr 1fr;\n    justify-items: center;\n    gap: 1rem;\n\n    /* box-shadow: var(--minor-box-shadow-reverse-values) var(--drop-shadow-color),\n        var(--minor-box-shadow-values) var(--drop-shadow-color); */\n    /* box-shadow: var(--box-shadow-values-1) var(--drop-shadow-color),\n        var(--box-shadow-values-2) var(--drop-shadow-color); */\n    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);\n}\n\n.login-control-container {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n    width: 100%;\n    height: 100%;\n\n    /* border: 1px solid green; */\n    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);\n}\n\n.user-list-container {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 2rem;\n    width: 100%;\n    height: 100%;\n\n    /* border: 1px solid red; */\n    box-shadow: 0 0 0.5rem 0.5rem rgb(0, 0, 0, 0.1);\n}\n\n.user-name-option {\n    font-family: var(--general-font);\n    font-size: var(--item-title-font-size);\n}\n"],"sourceRoot":""}]);
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

    //TODO: Is this useless?
    //Not for *every* case, I don't think. When we're saving a user that already exists, it makes sense to check against existing users and then overwrite the pre-existing one so that we don't duplicated every time we save.
    //I think it is for the case of creating a brand new user from the login screen though. It adds the new user even if the user already exists so when checking with a new blank "user 1", this overwrites the already existing "user 1".
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
            /* navInfoContainer */ null
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
            /* projectTitleContainer */ null
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
            /* listTitleContainer */ null
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLGFBQWEsV0FBVyxVQUFVLFlBQVksY0FBYyxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxRQUFRLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxNQUFNLE9BQU8sT0FBTyxLQUFLLE1BQU0sT0FBTyxPQUFPLEtBQUssV0FBVyxLQUFLLFFBQVEsWUFBWSxVQUFVLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxNQUFNLE9BQU8sY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxNQUFNLE9BQU8sT0FBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSx1QkFBdUIsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssYUFBYSxXQUFXLFlBQVksY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxZQUFZLGNBQWMsUUFBUSxRQUFRLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxLQUFLLE9BQU8sTUFBTSxPQUFPLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxXQUFXLFlBQVksYUFBYSxPQUFP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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNZO0FBQ1U7O0FBRTNDLDZCQUE2Qjs7QUFFN0IscUJBQXFCLDJEQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vc3JjL21vZHVsZXMvR2VuZXJhdGVQYWdlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vc3JjL21vZHVsZXMvTGlzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vc3JjL21vZHVsZXMvTG9naW5VSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vc3JjL21vZHVsZXMvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vc3JjL21vZHVsZXMvVGFzay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9pY29ucy9kb3RzLWhvcml6b250YWwtY2lyY2xlLW91dGxpbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvaWNvbnMvbWVudS1yaWdodC1vdXRsaW5lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCtBbHRlcm5hdGVzOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZmYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDAuLjkwMDsxLDEwMC4uOTAwJmZhbWlseT1Sb2JvdG8rTW9ubzppdGFsLHdnaHRAMCwxMDAuLjcwMDsxLDEwMC4uNzAwJmZhbWlseT1Sb2JvdG8rU2xhYjp3Z2h0QDEwMC4uOTAwJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmZhbWlseT1VYnVudHU6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1tdXRlLWNvbG9yOiByZ2IoMjU1LCAxMjcsIDgwLCAwLjEpO1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAyNTMsIDEwNywgNjI7XG4gICAgLS1oaWdobGlnaHQtY29sb3I6IDE0NywgMjUyLCAyMTc7XG4gICAgLS1kYXJrLXNoYWRvdy1jb2xvcjogMCwgMCwgMDtcbiAgICAtLWJveC1zaGFkb3ctdmFsdWVzOiAwLjVyZW0gMC44cmVtIDAuMDVyZW07XG4gICAgLS1taW5vci1ib3gtc2hhZG93LXZhbHVlczogMC4zcmVtIDAuM3JlbSAwLjA1cmVtO1xuICAgIC0tZ2VuZXJhbC1mb250OiBcIk1vbnRzZXJyYXRcIiwgXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gICAgLS10aXRsZS1mb250OiBcIlJvYm90byBTbGFiXCIsIHNlcmlmO1xuICAgIC0tYmFzZS1mb250LWNvbG9yOiByZ2IoMCwgMCwgMCwgMC44KTtcbiAgICAtLWJhc2UtZm9udC1zaXplOiAxdmg7XG4gICAgLS10aXRsZS1mb250LXNpemU6IDRyZW07XG4gICAgLS1oZWFkZXItZm9udC1zaXplOiAycmVtO1xuICAgIC0tY29udGVudC1mb250LXNpemU6IDFyZW07XG4gICAgLS1iYXNlLWxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgIC0tY29udGVudC1saW5lLWhlaWdodDogMjtcblxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYmFzZS1mb250LXNpemUpO1xuXG4gICAgLS1pdGVtLXRpdGxlLWZvbnQtc2l6ZTogMS41cmVtO1xuICAgIC0taXRlbS1pbmZvLWZvbnQtc2l6ZTogMXJlbTtcbiAgICAtLWxpc3QtdGl0bGUtZm9udC1zaXplOiAycmVtO1xuICAgIC0tbGlzdC1pbmZvLWZvbnQtc2l6ZTogMXJlbTtcbiAgICAtLXByb2plY3QtdGl0bGUtZm9udC1zaXplOiAycmVtO1xuICAgIC0tcHJvamVjdC1pbmZvLWZvbnQtc2l6ZTogMS41cmVtO1xuICAgIC0tbmF2LXRpdGxlLWZvbnQtc2l6ZTogMS41cmVtO1xuICAgIC0tbmF2LWluZm8tZm9udC1zaXplOiAxLjI1cmVtO1xuXG4gICAgLS1uYXYtaWNvbi1kaW1lbnNpb246IDJyZW07XG5cbiAgICAtLWRhcmstZ3JlZW46IHJnYmEoNCwgNDIsIDQzLCAxKTtcbiAgICAtLW1vb25zdG9uZTogcmdiYSg5NCwgMTc3LCAxOTEsIDEpO1xuICAgIC0tbGlnaHQtY3lhbjogcmdiYSgyMDUsIDIzNywgMjQ2LCAxKTtcbiAgICAtLW9yYW5nZS1jcmF5b2xhOiByZ2JhKDIzOSwgMTIzLCA2OSwgMSk7XG4gICAgLS1jaGlsaS1yZWQ6IHJnYmEoMjE2LCA3MSwgMzksIDEpO1xuXG4gICAgLS1sYXBpcy1sYXp1bGk6IHJnYmEoMzUsIDg3LCAxMzcsIDEpO1xuICAgIC0taW1wZXJpYWwtcmVkOiByZ2JhKDI1MSwgNTQsIDY0LCAwLjEpO1xuICAgIC0tYXF1YW1hcmluZTogcmdiYSgyMiwgMjQ0LCAyMDgsIDEpO1xuICAgIC0tc2Nob29sLWJ1cy15ZWxsb3c6IHJnYmEoMjQxLCAyMTEsIDIsIDEpO1xuICAgIC0tYmxhY2s6IHJnYmEoMiwgMSwgMCwgMSk7XG5cbiAgICAtLW5hdi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbXBlcmlhbC1yZWQpO1xuICAgIC0tY29udGVudC1jb250YWluZXItY29sb3I6IHJnYigyNDIsIDI0MiwgMjQyKTtcbiAgICAtLXByb2plY3QtY29udGFpbmVyLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cbiAgICAtLWJveC1zaGFkb3ctdmFsdWVzOiAtMC41cmVtIDAuOHJlbSAwLjVyZW07XG4gICAgLS1taW5vci1ib3gtc2hhZG93LXZhbHVlczogLTAuM3JlbSAwLjNyZW0gMC4zcmVtO1xuICAgIC0tZHJvcC1zaGFkb3ctY29sb3I6IHJnYigwLCAwLCAwLCAwLjQpO1xuICAgIC0tbWlub3ItZHJvcC1zaGFkb3ctY29sb3I6IHJnYigwLCAwLCAwLCAwLjEpO1xuICAgIC0tbWlub3ItYm94LXNoYWRvdy1yZXZlcnNlLXZhbHVlczogMC41cmVtIDAuNXJlbSAwLjNyZW07XG4gICAgLS1ib3gtc2hhZG93LXZhbHVlcy0xOiAwLjVyZW0gMC41cmVtIDAuM3JlbTtcbiAgICAtLWJveC1zaGFkb3ctdmFsdWVzLTI6IC0wLjFyZW0gLTAuMXJlbSAwLjFyZW07XG4gICAgLS1ib3gtc2hhZG93LXZhbHVlcy0zOiAxcmVtIDFyZW0gMC4zcmVtO1xuICAgIC0tYm94LXNoYWRvdy12YWx1ZXMtNDogLTAuNXJlbSAtMC41cmVtIDAuMXJlbTtcblxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgobWluKDEwcmVtLCAxMDAlKSwgMmZyKSBtaW5tYXgoXG4gICAgICAgICAgICBtaW4oMTByZW0sIDEwMCUpLFxuICAgICAgICAgICAgNWZyXG4gICAgICAgICk7XG5cbiAgICBmb250LWZhbWlseTogdmFyKC0tZ2VuZXJhbC1mb250KTtcbiAgICBmb250LXNpemU6IHZhcigtLWdlbmVyYWwtZm9udC1zaXplKTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcblxuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi5idXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdi1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDEwZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciAxZnI7XG5cbiAgICBnYXA6IDJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdC1jb250YWluZXItY29sb3IpO1xuICAgIC8qIHBhZGRpbmc6IDRyZW0gMXJlbTsgKi9cblxuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cblxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdmFsdWVzLTEpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKSxcbiAgICAgICAgdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMtMikgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpO1xufVxuXG4ubmF2LWluZm8tY29udGFpbmVyIHtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7ICovXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG4gICAgLyogZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTsgKi9cblxuICAgIGZvbnQtc2l6ZTogdmFyKC0tbmF2LXRpdGxlLWZvbnQtc2l6ZSk7XG4gICAgcGFkZGluZzogMnJlbTtcblxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNXJlbSAwLjVyZW0gcmdiKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5uYXYtdGl0bGUtY29udGFpbmVyIHtcbiAgICAvKiBncmlkLWNvbHVtbjogMSAvIDI7ICovXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuXG4gICAgLyogYm9yZGVyOiBzb2xpZCByZWQgMXB4OyAqL1xufVxuXG4ubmF2LXRpdGxlIHtcbiAgICAvKiBib3JkZXI6IHNvbGlkIGJsdWUgMXB4OyAqL1xufVxuXG4ubmF2LWNvbnRyb2wtY29udGFpbmVyIHtcbiAgICAvKiBib3JkZXI6IHNvbGlkIHJlZCAxcHg7ICovXG59XG5cbi5uYXYtbmV3LXByb2plY3QtYnV0dG9uIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvcGx1cy5zdmcpO1xuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxOyAqL1xufVxuXG4ubmF2LWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBncmlkLXJvdzogMyAvIDQ7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuXG4gICAgLyogZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDFyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTAwcHgsIGF1dG8pKTtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7ICovXG5cbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXG5cbiAgICAvKiBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBnYXA6IDFyZW07XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGRlbnNlOyAqL1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcblxuICAgIHBhZGRpbmc6IDJyZW07XG5cbiAgICBmb250LXNpemU6IHZhcigtLW5hdi1pbmZvLWZvbnQtc2l6ZSk7XG4gICAgLyogb3ZlcmZsb3c6IHNjcm9sbDsgKi9cblxuICAgIC8qIGJvcmRlcjogc29saWQgcmVkIDFweDsgKi9cblxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVyZW0gMC41cmVtIHJnYigwLCAwLCAwLCAwLjEpO1xufVxuXG4ubmF2LXByb2plY3QtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcblxuICAgIC8qIGhlaWdodDogbWlubWF4KDUwcHgsIDEwMHB4KTsgKi9cblxuICAgIC8qIGJvcmRlcjogc29saWQgcGluayAxcHg7ICovXG59XG5cbi5uYXYtcHJvamVjdC10aXRsZS1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG59XG5cbi5uYXYtcHJvamVjdC10aXRsZS1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaWNvbi1kaW1lbnNpb24pO1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG59XG5cbi5uYXYtcHJvamVjdC10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm5hdi1wcm9qZWN0LWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgLyogaGVpZ2h0OiAyMDBweDsgKi9cblxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvdzsgKi9cbn1cblxuLm5hdi1saXN0LXRpdGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC4ycmVtO1xufVxuXG4ubmF2LWxpc3QtdGl0bGUtaWNvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xufVxuXG4ubmF2LWxpc3QtdGl0bGUge1xufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtY29udGFpbmVyLWNvbG9yKTtcbiAgICAvKiBib3JkZXI6IHNvbGlkIDFweCByZWQ7ICovXG5cbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvKiBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LXZhbHVlcykgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpOyAqL1xufVxuXG4ucHJvamVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMnJlbSAxZnI7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW11dGUtY29sb3IpLCAxKTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBnYXA6IDEuNXJlbTtcblxuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC8qIG92ZXJmbG93OiBzY3JvbGw7ICovXG4gICAgLyogYm9yZGVyLXJhZGl1czogMC41cmVtOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3QtY29udGFpbmVyLWNvbG9yKTtcbiAgICAvKiBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LXZhbHVlcylcbiAgICAgICAgcmdiYSh2YXIoLS1kcm9wLXNoYWRvdy1jb2xvci1jb2xvciksIDAuNSk7ICovXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMtMSkgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpLFxuICAgICAgICB2YXIoLS1ib3gtc2hhZG93LXZhbHVlcy0yKSB2YXIoLS1taW5vci1kcm9wLXNoYWRvdy1jb2xvcik7XG5cbiAgICAvKiBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDsgKi9cbn1cblxuLnByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmcjtcbiAgICBmb250LXNpemU6IHZhcigtLXByb2plY3QtaW5mby1mb250LXNpemUpO1xuICAgIC8qIGJvcmRlcjogc29saWQgYmxhY2sgMXB4OyAqL1xuXG4gICAgcGFkZGluZzogMC41cmVtO1xuXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNXJlbSAwLjVyZW0gcmdiKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5wcm9qZWN0LWluZm8tY29udGFpbmVyIHtcbiAgICAvKiBib3JkZXI6IHNvbGlkIHJlZCAxcHg7ICovXG59XG5cbi5wcm9qZWN0LWNvbnRyb2wtY29udGFpbmVyIHtcbiAgICAvKiBib3JkZXI6IHNvbGlkIGJsdWUgMXB4OyAqL1xufVxuXG4ucHJvamVjdC10aXRsZSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1wcm9qZWN0LXRpdGxlLWZvbnQtc2l6ZSk7XG59XG5cbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbn1cblxuLm5ldy1wcm9qZWN0LWxpc3QtYnV0dG9uIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvcGx1cy5zdmcpO1xuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxOyAqL1xufVxuXG4uY2xvc2UtcHJvamVjdC1idXR0b24ge1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9pY29ucy9jbG9zZS1ib3gtb3V0bGluZS5zdmcpO1xuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxOyAqL1xufVxuXG4ucHJvamVjdC1jYXJkLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuXG4gICAgLyogZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tcm93czogYXV0bzsgKi9cblxuICAgIGhlaWdodDogMTAwJTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgLyogYm9yZGVyOiBzb2xpZCBncmVlbiAxcHg7ICovXG4gICAgZ2FwOiAxLjVyZW07XG4gICAgcGFkZGluZzogMnJlbTtcbn1cblxuLmxpc3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMC41cmVtO1xuXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zZWNvbmRhcnktY29sb3IpLCAwLjUpOyAqL1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tbWlub3ItYm94LXNoYWRvdy12YWx1ZXMpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKTsgKi9cbiAgICAvKiBib3gtc2hhZG93OiB2YXIoLS1taW5vci1ib3gtc2hhZG93LXJldmVyc2UtdmFsdWVzKSB2YXIoLS1kcm9wLXNoYWRvdy1jb2xvcik7ICovXG4gICAgLyogYm9yZGVyLXJhZGl1czogMC41cmVtOyAqL1xuXG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMtMSkgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpLFxuICAgICAgICB2YXIoLS1ib3gtc2hhZG93LXZhbHVlcy0yKSB2YXIoLS1taW5vci1kcm9wLXNoYWRvdy1jb2xvcik7ICovXG4gICAgLyogYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7ICovXG5cbiAgICBib3gtc2hhZG93OiAwIDAgMC41cmVtIDAuNXJlbSByZ2IoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmxpc3QtdGl0bGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmcjtcbiAgICBmb250LXNpemU6IHZhcigtLWxpc3QtaW5mby1mb250LXNpemUpO1xufVxuXG4ubGlzdC1pbmZvLWNvbnRhaW5lciB7XG59XG5cbi5saXN0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IHZhcigtLWxpc3QtdGl0bGUtZm9udC1zaXplKTtcbn1cblxuLmxpc3QtZGVzY3JpcHRpb24ge1xufVxuXG4ubmV3LWxpc3QtaXRlbS1idXR0b24ge1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9pY29ucy9wbHVzLnN2Zyk7XG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaWNvbi1kaW1lbnNpb24pO1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7ICovXG59XG5cbi5saXN0LWVkaXQtYnV0dG9uIHtcbn1cblxuLml0ZW0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciAxZnI7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zZWNvbmRhcnktY29sb3IpLCAwLjUpOyAqL1xufVxuXG4uaXRlbS1jaGVja2JveC1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLml0ZW0tY2hlY2tib3gge1xufVxuXG4vKiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgd2lkdGg6IDFlbTtcblxuICAgIGJhY2tncm91bmQ6ICMwYTBhMGE7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMC42NWVtO1xuICAgIGhlaWdodDogMC42NWVtO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tZm9ybS1jb250cm9sLWNvbG9yKTtcbn0gKi9cblxuLml0ZW0taW5mby1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBmb250LXNpemU6IHZhcigtLWl0ZW0taW5mby1mb250LXNpemUpO1xufVxuXG4uaXRlbS10aXRsZSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pdGVtLXRpdGxlLWZvbnQtc2l6ZSk7XG59XG5cbi5pdGVtLWRlc2NyaXB0aW9uIHtcbn1cblxuLml0ZW0tZHVlLWRhdGUge1xufVxuXG4uaXRlbS1yZW1vdmUtYnV0dG9uIHtcbn1cblxuLmxvZ2luLXBhZ2UtYm9keSB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4wNSk7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xufVxuXG4ubG9naW4tY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cblxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciA0ZnIgMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG5cbiAgICAvKiBib3gtc2hhZG93OiB2YXIoLS1taW5vci1ib3gtc2hhZG93LXJldmVyc2UtdmFsdWVzKSB2YXIoLS1kcm9wLXNoYWRvdy1jb2xvciksXG4gICAgICAgIHZhcigtLW1pbm9yLWJveC1zaGFkb3ctdmFsdWVzKSB2YXIoLS1kcm9wLXNoYWRvdy1jb2xvcik7ICovXG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMtMSkgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpLFxuICAgICAgICB2YXIoLS1ib3gtc2hhZG93LXZhbHVlcy0yKSB2YXIoLS1kcm9wLXNoYWRvdy1jb2xvcik7ICovXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNXJlbSAwLjVyZW0gcmdiKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5sb2dpbi1jb250cm9sLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGdyaWQtcm93OiAyIC8gMztcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgKi9cbiAgICBib3gtc2hhZG93OiAwIDAgMC41cmVtIDAuNXJlbSByZ2IoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnVzZXItbGlzdC1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBncmlkLXJvdzogMyAvIDQ7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVyZW0gMC41cmVtIHJnYigwLCAwLCAwLCAwLjEpO1xufVxuXG4udXNlci1uYW1lLW9wdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWdlbmVyYWwtZm9udCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pdGVtLXRpdGxlLWZvbnQtc2l6ZSk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyw0QkFBNEI7SUFDNUIsMENBQTBDO0lBQzFDLGdEQUFnRDtJQUNoRCw0REFBNEQ7SUFDNUQsa0NBQWtDO0lBQ2xDLG9DQUFvQztJQUNwQyxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLHdCQUF3Qjs7SUFFeEIsZ0NBQWdDOztJQUVoQyw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsNkJBQTZCOztJQUU3QiwwQkFBMEI7O0lBRTFCLGdDQUFnQztJQUNoQyxrQ0FBa0M7SUFDbEMsb0NBQW9DO0lBQ3BDLHVDQUF1QztJQUN2QyxpQ0FBaUM7O0lBRWpDLG9DQUFvQztJQUNwQyxzQ0FBc0M7SUFDdEMsbUNBQW1DO0lBQ25DLHlDQUF5QztJQUN6Qyx5QkFBeUI7O0lBRXpCLDJDQUEyQztJQUMzQyw2Q0FBNkM7SUFDN0MsNkNBQTZDOztJQUU3QywwQ0FBMEM7SUFDMUMsZ0RBQWdEO0lBQ2hELHNDQUFzQztJQUN0Qyw0Q0FBNEM7SUFDNUMsdURBQXVEO0lBQ3ZELDJDQUEyQztJQUMzQyw2Q0FBNkM7SUFDN0MsdUNBQXVDO0lBQ3ZDLDZDQUE2Qzs7SUFFN0Msc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiOzs7U0FHSzs7SUFFTCxnQ0FBZ0M7SUFDaEMsbUNBQW1DO0lBQ25DLFNBQVM7SUFDVCxVQUFVOztJQUVWLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JB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InNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCtBbHRlcm5hdGVzOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZmYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDAuLjkwMDsxLDEwMC4uOTAwJmZhbWlseT1Sb2JvdG8rTW9ubzppdGFsLHdnaHRAMCwxMDAuLjcwMDsxLDEwMC4uNzAwJmZhbWlseT1Sb2JvdG8rU2xhYjp3Z2h0QDEwMC4uOTAwJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmZhbWlseT1VYnVudHU6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG4gICAgLS1tdXRlLWNvbG9yOiByZ2IoMjU1LCAxMjcsIDgwLCAwLjEpO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogMjUzLCAxMDcsIDYyO1xcbiAgICAtLWhpZ2hsaWdodC1jb2xvcjogMTQ3LCAyNTIsIDIxNztcXG4gICAgLS1kYXJrLXNoYWRvdy1jb2xvcjogMCwgMCwgMDtcXG4gICAgLS1ib3gtc2hhZG93LXZhbHVlczogMC41cmVtIDAuOHJlbSAwLjA1cmVtO1xcbiAgICAtLW1pbm9yLWJveC1zaGFkb3ctdmFsdWVzOiAwLjNyZW0gMC4zcmVtIDAuMDVyZW07XFxuICAgIC0tZ2VuZXJhbC1mb250OiBcXFwiTW9udHNlcnJhdFxcXCIsIFxcXCJSb2JvdG8gQ29uZGVuc2VkXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgLS10aXRsZS1mb250OiBcXFwiUm9ib3RvIFNsYWJcXFwiLCBzZXJpZjtcXG4gICAgLS1iYXNlLWZvbnQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjgpO1xcbiAgICAtLWJhc2UtZm9udC1zaXplOiAxdmg7XFxuICAgIC0tdGl0bGUtZm9udC1zaXplOiA0cmVtO1xcbiAgICAtLWhlYWRlci1mb250LXNpemU6IDJyZW07XFxuICAgIC0tY29udGVudC1mb250LXNpemU6IDFyZW07XFxuICAgIC0tYmFzZS1saW5lLWhlaWdodDogMS4yNTtcXG4gICAgLS1jb250ZW50LWxpbmUtaGVpZ2h0OiAyO1xcblxcbiAgICBmb250LXNpemU6IHZhcigtLWJhc2UtZm9udC1zaXplKTtcXG5cXG4gICAgLS1pdGVtLXRpdGxlLWZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAtLWl0ZW0taW5mby1mb250LXNpemU6IDFyZW07XFxuICAgIC0tbGlzdC10aXRsZS1mb250LXNpemU6IDJyZW07XFxuICAgIC0tbGlzdC1pbmZvLWZvbnQtc2l6ZTogMXJlbTtcXG4gICAgLS1wcm9qZWN0LXRpdGxlLWZvbnQtc2l6ZTogMnJlbTtcXG4gICAgLS1wcm9qZWN0LWluZm8tZm9udC1zaXplOiAxLjVyZW07XFxuICAgIC0tbmF2LXRpdGxlLWZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAtLW5hdi1pbmZvLWZvbnQtc2l6ZTogMS4yNXJlbTtcXG5cXG4gICAgLS1uYXYtaWNvbi1kaW1lbnNpb246IDJyZW07XFxuXFxuICAgIC0tZGFyay1ncmVlbjogcmdiYSg0LCA0MiwgNDMsIDEpO1xcbiAgICAtLW1vb25zdG9uZTogcmdiYSg5NCwgMTc3LCAxOTEsIDEpO1xcbiAgICAtLWxpZ2h0LWN5YW46IHJnYmEoMjA1LCAyMzcsIDI0NiwgMSk7XFxuICAgIC0tb3JhbmdlLWNyYXlvbGE6IHJnYmEoMjM5LCAxMjMsIDY5LCAxKTtcXG4gICAgLS1jaGlsaS1yZWQ6IHJnYmEoMjE2LCA3MSwgMzksIDEpO1xcblxcbiAgICAtLWxhcGlzLWxhenVsaTogcmdiYSgzNSwgODcsIDEzNywgMSk7XFxuICAgIC0taW1wZXJpYWwtcmVkOiByZ2JhKDI1MSwgNTQsIDY0LCAwLjEpO1xcbiAgICAtLWFxdWFtYXJpbmU6IHJnYmEoMjIsIDI0NCwgMjA4LCAxKTtcXG4gICAgLS1zY2hvb2wtYnVzLXllbGxvdzogcmdiYSgyNDEsIDIxMSwgMiwgMSk7XFxuICAgIC0tYmxhY2s6IHJnYmEoMiwgMSwgMCwgMSk7XFxuXFxuICAgIC0tbmF2LWJhY2tncm91bmQtY29sb3I6IHZhcigtLWltcGVyaWFsLXJlZCk7XFxuICAgIC0tY29udGVudC1jb250YWluZXItY29sb3I6IHJnYigyNDIsIDI0MiwgMjQyKTtcXG4gICAgLS1wcm9qZWN0LWNvbnRhaW5lci1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcblxcbiAgICAtLWJveC1zaGFkb3ctdmFsdWVzOiAtMC41cmVtIDAuOHJlbSAwLjVyZW07XFxuICAgIC0tbWlub3ItYm94LXNoYWRvdy12YWx1ZXM6IC0wLjNyZW0gMC4zcmVtIDAuM3JlbTtcXG4gICAgLS1kcm9wLXNoYWRvdy1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNCk7XFxuICAgIC0tbWlub3ItZHJvcC1zaGFkb3ctY29sb3I6IHJnYigwLCAwLCAwLCAwLjEpO1xcbiAgICAtLW1pbm9yLWJveC1zaGFkb3ctcmV2ZXJzZS12YWx1ZXM6IDAuNXJlbSAwLjVyZW0gMC4zcmVtO1xcbiAgICAtLWJveC1zaGFkb3ctdmFsdWVzLTE6IDAuNXJlbSAwLjVyZW0gMC4zcmVtO1xcbiAgICAtLWJveC1zaGFkb3ctdmFsdWVzLTI6IC0wLjFyZW0gLTAuMXJlbSAwLjFyZW07XFxuICAgIC0tYm94LXNoYWRvdy12YWx1ZXMtMzogMXJlbSAxcmVtIDAuM3JlbTtcXG4gICAgLS1ib3gtc2hhZG93LXZhbHVlcy00OiAtMC41cmVtIC0wLjVyZW0gMC4xcmVtO1xcblxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgobWluKDEwcmVtLCAxMDAlKSwgMmZyKSBtaW5tYXgoXFxuICAgICAgICAgICAgbWluKDEwcmVtLCAxMDAlKSxcXG4gICAgICAgICAgICA1ZnJcXG4gICAgICAgICk7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1nZW5lcmFsLWZvbnQpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWdlbmVyYWwtZm9udC1zaXplKTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcblxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDEwZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgMWZyO1xcblxcbiAgICBnYXA6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3QtY29udGFpbmVyLWNvbG9yKTtcXG4gICAgLyogcGFkZGluZzogNHJlbSAxcmVtOyAqL1xcblxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXG5cXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMtMSkgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpLFxcbiAgICAgICAgdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMtMikgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpO1xcbn1cXG5cXG4ubmF2LWluZm8tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjsgKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTsgKi9cXG5cXG4gICAgZm9udC1zaXplOiB2YXIoLS1uYXYtdGl0bGUtZm9udC1zaXplKTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG5cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNXJlbSAwLjVyZW0gcmdiKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5uYXYtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgLyogZ3JpZC1jb2x1bW46IDEgLyAyOyAqL1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuXFxuICAgIC8qIGJvcmRlcjogc29saWQgcmVkIDFweDsgKi9cXG59XFxuXFxuLm5hdi10aXRsZSB7XFxuICAgIC8qIGJvcmRlcjogc29saWQgYmx1ZSAxcHg7ICovXFxufVxcblxcbi5uYXYtY29udHJvbC1jb250YWluZXIge1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIHJlZCAxcHg7ICovXFxufVxcblxcbi5uYXYtbmV3LXByb2plY3QtYnV0dG9uIHtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2ljb25zL3BsdXMuc3ZnKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaWNvbi1kaW1lbnNpb24pO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxOyAqL1xcbn1cXG5cXG4ubmF2LWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuXFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTAwcHgsIGF1dG8pKTtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0OyAqL1xcblxcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcblxcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGdyaWQtYXV0by1mbG93OiBkZW5zZTsgKi9cXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcblxcbiAgICBwYWRkaW5nOiAycmVtO1xcblxcbiAgICBmb250LXNpemU6IHZhcigtLW5hdi1pbmZvLWZvbnQtc2l6ZSk7XFxuICAgIC8qIG92ZXJmbG93OiBzY3JvbGw7ICovXFxuXFxuICAgIC8qIGJvcmRlcjogc29saWQgcmVkIDFweDsgKi9cXG5cXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNXJlbSAwLjVyZW0gcmdiKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5uYXYtcHJvamVjdC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG5cXG4gICAgLyogaGVpZ2h0OiBtaW5tYXgoNTBweCwgMTAwcHgpOyAqL1xcblxcbiAgICAvKiBib3JkZXI6IHNvbGlkIHBpbmsgMXB4OyAqL1xcbn1cXG5cXG4ubmF2LXByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLm5hdi1wcm9qZWN0LXRpdGxlLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvZG90cy1ob3Jpem9udGFsLWNpcmNsZS1vdXRsaW5lLnN2Zyk7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLm5hdi1wcm9qZWN0LXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLm5hdi1wcm9qZWN0LWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICAvKiBoZWlnaHQ6IDIwMHB4OyAqL1xcblxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7ICovXFxufVxcblxcbi5uYXYtbGlzdC10aXRsZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuMnJlbTtcXG59XFxuXFxuLm5hdi1saXN0LXRpdGxlLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvbWVudS1yaWdodC1vdXRsaW5lLnN2Zyk7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLm5hdi1saXN0LXRpdGxlIHtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtY29udGFpbmVyLWNvbG9yKTtcXG4gICAgLyogYm9yZGVyOiBzb2xpZCAxcHggcmVkOyAqL1xcblxcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdmFsdWVzKSB2YXIoLS1kcm9wLXNoYWRvdy1jb2xvcik7ICovXFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTJyZW0gMWZyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW11dGUtY29sb3IpLCAxKTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBnYXA6IDEuNXJlbTtcXG5cXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICAvKiBvdmVyZmxvdzogc2Nyb2xsOyAqL1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiAwLjVyZW07ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3QtY29udGFpbmVyLWNvbG9yKTtcXG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMpXFxuICAgICAgICByZ2JhKHZhcigtLWRyb3Atc2hhZG93LWNvbG9yLWNvbG9yKSwgMC41KTsgKi9cXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMtMSkgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpLFxcbiAgICAgICAgdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMtMikgdmFyKC0tbWlub3ItZHJvcC1zaGFkb3ctY29sb3IpO1xcblxcbiAgICAvKiBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDsgKi9cXG59XFxuXFxuLnByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnI7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcHJvamVjdC1pbmZvLWZvbnQtc2l6ZSk7XFxuICAgIC8qIGJvcmRlcjogc29saWQgYmxhY2sgMXB4OyAqL1xcblxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVyZW0gMC41cmVtIHJnYigwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvLWNvbnRhaW5lciB7XFxuICAgIC8qIGJvcmRlcjogc29saWQgcmVkIDFweDsgKi9cXG59XFxuXFxuLnByb2plY3QtY29udHJvbC1jb250YWluZXIge1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIGJsdWUgMXB4OyAqL1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcHJvamVjdC10aXRsZS1mb250LXNpemUpO1xcbn1cXG5cXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxufVxcblxcbi5uZXctcHJvamVjdC1saXN0LWJ1dHRvbiB7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9pY29ucy9wbHVzLnN2Zyk7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTsgKi9cXG59XFxuXFxuLmNsb3NlLXByb2plY3QtYnV0dG9uIHtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2ljb25zL2Nsb3NlLWJveC1vdXRsaW5lLnN2Zyk7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTsgKi9cXG59XFxuXFxuLnByb2plY3QtY2FyZC1jb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuXFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvOyAqL1xcblxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIC8qIGJvcmRlcjogc29saWQgZ3JlZW4gMXB4OyAqL1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSwgMC41KTsgKi9cXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tbWlub3ItYm94LXNoYWRvdy12YWx1ZXMpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKTsgKi9cXG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tbWlub3ItYm94LXNoYWRvdy1yZXZlcnNlLXZhbHVlcykgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpOyAqL1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiAwLjVyZW07ICovXFxuXFxuICAgIC8qIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdmFsdWVzLTEpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKSxcXG4gICAgICAgIHZhcigtLWJveC1zaGFkb3ctdmFsdWVzLTIpIHZhcigtLW1pbm9yLWRyb3Atc2hhZG93LWNvbG9yKTsgKi9cXG4gICAgLyogYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7ICovXFxuXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVyZW0gMC41cmVtIHJnYigwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4ubGlzdC10aXRsZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnI7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tbGlzdC1pbmZvLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5saXN0LWluZm8tY29udGFpbmVyIHtcXG59XFxuXFxuLmxpc3QtdGl0bGUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWxpc3QtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLmxpc3QtZGVzY3JpcHRpb24ge1xcbn1cXG5cXG4ubmV3LWxpc3QtaXRlbS1idXR0b24ge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvcGx1cy5zdmcpO1xcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7ICovXFxufVxcblxcbi5saXN0LWVkaXQtYnV0dG9uIHtcXG59XFxuXFxuLml0ZW0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyIDFmcjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zZWNvbmRhcnktY29sb3IpLCAwLjUpOyAqL1xcbn1cXG5cXG4uaXRlbS1jaGVja2JveC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaXRlbS1jaGVja2JveCB7XFxufVxcblxcbi8qIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gICAgd2lkdGg6IDFlbTtcXG5cXG4gICAgYmFja2dyb3VuZDogIzBhMGEwYTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDAuNjVlbTtcXG4gICAgaGVpZ2h0OiAwLjY1ZW07XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1mb3JtLWNvbnRyb2wtY29sb3IpO1xcbn0gKi9cXG5cXG4uaXRlbS1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZm9udC1zaXplOiB2YXIoLS1pdGVtLWluZm8tZm9udC1zaXplKTtcXG59XFxuXFxuLml0ZW0tdGl0bGUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWl0ZW0tdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLml0ZW0tZGVzY3JpcHRpb24ge1xcbn1cXG5cXG4uaXRlbS1kdWUtZGF0ZSB7XFxufVxcblxcbi5pdGVtLXJlbW92ZS1idXR0b24ge1xcbn1cXG5cXG4ubG9naW4tcGFnZS1ib2R5IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4wNSk7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuLmxvZ2luLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXG5cXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciA0ZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG5cXG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tbWlub3ItYm94LXNoYWRvdy1yZXZlcnNlLXZhbHVlcykgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpLFxcbiAgICAgICAgdmFyKC0tbWlub3ItYm94LXNoYWRvdy12YWx1ZXMpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKTsgKi9cXG4gICAgLyogYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMtMSkgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpLFxcbiAgICAgICAgdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMtMikgdmFyKC0tZHJvcC1zaGFkb3ctY29sb3IpOyAqL1xcbiAgICBib3gtc2hhZG93OiAwIDAgMC41cmVtIDAuNXJlbSByZ2IoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmxvZ2luLWNvbnRyb2wtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xcbiAgICBib3gtc2hhZG93OiAwIDAgMC41cmVtIDAuNXJlbSByZ2IoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLnVzZXItbGlzdC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbiAgICBib3gtc2hhZG93OiAwIDAgMC41cmVtIDAuNXJlbSByZ2IoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLnVzZXItbmFtZS1vcHRpb24ge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZ2VuZXJhbC1mb250KTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1pdGVtLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgZWxlbWVudFR5cGUsXG4gICAgZWxlbWVudENsYXNzZXMgPSB7fSxcbiAgICBwYXJlbnRFbGVtZW50ID0gbnVsbCxcbiAgICBlbGVtZW50VGV4dCA9IG51bGxcbikge1xuICAgIGlmIChlbGVtZW50VHlwZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuXG4gICAgaWYgKGVsZW1lbnRDbGFzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZWxlbWVudENsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgICAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnRUZXh0ICE9IG51bGwpIHtcbiAgICAgICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnRUZXh0O1xuICAgIH1cblxuICAgIGlmIChwYXJlbnRFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyTm9kZUNvbnRlbnQodGhpc05vZGUpIHtcbiAgICB3aGlsZSAodGhpc05vZGUuZmlyc3RDaGlsZCkge1xuICAgICAgICB0aGlzTm9kZS5yZW1vdmVDaGlsZCh0aGlzTm9kZS5sYXN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURyb3Bkb3duKFxuICAgIGRyb3Bkb3duQnV0dG9uVGV4dCxcbiAgICBkcm9wZG93bkl0ZW1zRGl2LFxuICAgIHBhcmVudERpdiA9IG51bGxcbikge1xuICAgIGNvbnN0IGRyb3BEb3duQ29udGFpbmVyRGl2ID0gZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgW1wiZHJvcGRvd24tY29udGFpbmVyLWRpdlwiXSxcbiAgICAgICAgcGFyZW50RGl2XG4gICAgKTtcbiAgICBjb25zdCBkcm9wZG93bkJ1dHRvbiA9IGdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFtcImRyb3Bkb3duLWJ1dHRvblwiLCBcImJ1dHRvblwiXSxcbiAgICAgICAgZHJvcERvd25Db250YWluZXJEaXYsXG4gICAgICAgIGRyb3Bkb3duQnV0dG9uVGV4dFxuICAgICk7XG4gICAgZHJvcERvd25Db250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZHJvcGRvd25JdGVtc0Rpdik7XG4gICAgdGhpcy5tZW51U2hvd0hpZGUoZHJvcGRvd25JdGVtc0Rpdik7XG5cbiAgICBkcm9wZG93bkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLm1lbnVTaG93SGlkZShkcm9wZG93bkl0ZW1zRGl2KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkcm9wRG93bkNvbnRhaW5lckRpdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVTaG93SGlkZShkcm9wRG93bkl0ZW1zRGl2KSB7XG4gICAgaWYgKGRyb3BEb3duSXRlbXNEaXYuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIikge1xuICAgICAgICBkcm9wRG93bkl0ZW1zRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZHJvcERvd25JdGVtc0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufVxuIiwiLy9pbXBvcnQgKiBhcyBUYXNrIGZyb20gXCIuL1Rhc2suanNcIjtcbi8vaW1wb3J0ICogYXMgR2VuZXJhdGVFbGVtZW50IGZyb20gXCIuL0dlbmVyYXRlUGFnZUVsZW1lbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gXCJObyBkZXNjcmlwdGlvbiBzZXRcIixcbiAgICAgICAgdGFza3MgPSBbXSxcbiAgICAgICAgcGFyZW50UHJvamVjdFxuICAgICkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QgPSBwYXJlbnRQcm9qZWN0O1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXRUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3M7XG4gICAgfVxuXG4gICAgc2V0VGFza3ModGFza3NMaXN0KSB7XG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrc0xpc3Q7XG4gICAgfVxuXG4gICAgZ2V0VGFzayh0YXNrTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gdGFza05hbWUpO1xuICAgIH1cblxuICAgIGNvbnRhaW5zVGFzayh0YXNrTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PSB0YXNrTmFtZSk7XG4gICAgfVxuXG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluc1Rhc2sobmV3VGFzay5nZXROYW1lKCkpKSB7XG4gICAgICAgICAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVUYXNrKHRhc2tOYW1lKSB7XG4gICAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5nZXROYW1lKCkgIT09IHRhc2tOYW1lKTtcbiAgICB9XG5cbiAgICBzZXRDb250YWluZXJOb2RlKGNvbnRhaW5lck5vZGUpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJOb2RlID0gY29udGFpbmVyTm9kZTtcbiAgICB9XG5cbiAgICBnZXRDb250YWluZXJOb2RlKCkge1xuICAgICAgICBpZiAodGhpcy5jb250YWluZXJOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXJOb2RlO1xuICAgICAgICB9XG4gICAgICAgIC8vVE9ETzogU2hvdWxkIHRoZXJlIGJlIGEgcmV0dXJuIHZhbHVlIGlmIHRoZXJlIGlzbid0IGEgbm9kZSBhc3NpZ25lZCBhbHJlYWR5P1xuICAgICAgICAvL1Nob3VsZCB0aGlzIHByb3BlcnR5IGp1c3QgYmUgaW5pdGlhbGl6ZWQgYXMgYSBibGFuayBzb21laG93IHdoZW4gdGhpcyBvYmplY3QgaXMgY3JlYXRlZD9cbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBHZW5lcmF0ZUVsZW1lbnQgZnJvbSBcIi4vR2VuZXJhdGVQYWdlRWxlbWVudC5qc1wiO1xuaW1wb3J0IFVJIGZyb20gXCIuL1VJLmpzXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9TdG9yYWdlLmpzXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luVUkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5ld1N0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xuICAgICAgICB0aGlzLnVzZXJMaXN0ID0gdGhpcy5uZXdTdG9yYWdlLmdldFVzZXJzKCk7XG4gICAgICAgIHRoaXMucGFnZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUxvZ2luUGFnZSgpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlTG9naW5QYWdlKCkge1xuICAgICAgICB0aGlzLmxvZ2luUGFnZUJvZHkgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJsb2dpbi1wYWdlLWJvZHlcIl0sXG4gICAgICAgICAgICB0aGlzLnBhZ2VCb2R5XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5sb2dpbkNvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcImxvZ2luLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHRoaXMubG9naW5QYWdlQm9keVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMubG9naW5Db250cm9sQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibG9naW4tY29udHJvbC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICB0aGlzLmxvZ2luQ29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5nZW5lcmF0ZUxvZ2luQ29udHJvbHModGhpcy5sb2dpbkNvbnRyb2xDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMudXNlckxpc3RDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJ1c2VyLWxpc3QtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgdGhpcy5sb2dpbkNvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlVXNlckxpc3REaXYoKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUxvZ2luQ29udHJvbHMobG9naW5Db250cm9sQ29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMubmV3VXNlckJ1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5ldy11c2VyLWJ1dHRvblwiLCBcImJ1dHRvblwiXSxcbiAgICAgICAgICAgIGxvZ2luQ29udHJvbENvbnRhaW5lcixcbiAgICAgICAgICAgIFwibmV3IHVzZXJcIlxuICAgICAgICApO1xuICAgICAgICB0aGlzLm5ld1VzZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTmV3VXNlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNhdmVVc2Vyc0J1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5ldy11c2VyLWJ1dHRvblwiLCBcImJ1dHRvblwiXSxcbiAgICAgICAgICAgIGxvZ2luQ29udHJvbENvbnRhaW5lcixcbiAgICAgICAgICAgIFwic2F2ZSB1c2Vyc1wiXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2F2ZVVzZXJzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5ld1N0b3JhZ2Uuc3RvcmVVc2VyQXJyYXkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jbGVhclVzZXJzQnV0dG9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibmV3LXVzZXItYnV0dG9uXCIsIFwiYnV0dG9uXCJdLFxuICAgICAgICAgICAgbG9naW5Db250cm9sQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJjbGVhciB1c2Vyc1wiXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY2xlYXJVc2Vyc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZXdTdG9yYWdlLmRlbGV0ZVVzZXJBcnJheSgpO1xuICAgICAgICAgICAgdGhpcy5uZXdTdG9yYWdlLnJlZnJlc2hVc2VyQXJyYXkoKTtcbiAgICAgICAgICAgIHRoaXMudXNlckxpc3QgPSB0aGlzLm5ld1N0b3JhZ2UudXNlckxpc3Q7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hMb2dpblBhZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlVXNlckxpc3REaXYoKSB7XG4gICAgICAgIHRoaXMudXNlckxpc3QuZm9yRWFjaCgodXNlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VyTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZU5ld1VzZXJEaXYodXNlcikpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhclVzZXJMaXN0RGl2KCkge1xuICAgICAgICB0aGlzLnVzZXJMaXN0Q29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIH1cblxuICAgIHJlbG9hZFVzZXJMaXN0KCkge1xuICAgICAgICB0aGlzLmNsZWFyVXNlckxpc3REaXYoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVVc2VyTGlzdERpdigpO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ld1VzZXJEaXYodXNlcikge1xuICAgICAgICBjb25zdCB1c2VyRGl2ID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1widXNlci1uYW1lLW9wdGlvblwiLCBcImJ1dHRvblwiXSxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICB1c2VyLm5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgdXNlckRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVOZXdVSSh1c2VyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1c2VyRGl2O1xuICAgIH1cblxuICAgIGNyZWF0ZU5ld1VJKHVzZXIpIHtcbiAgICAgICAgdGhpcy5jbGVhclBhZ2VCb2R5KCk7XG4gICAgICAgIGNvbnN0IG5ld1BhZ2UgPSBuZXcgVUkodXNlciwgdGhpcy5uZXdTdG9yYWdlLCB0aGlzKTtcbiAgICB9XG5cbiAgICBjbGVhclBhZ2VCb2R5KCkge1xuICAgICAgICB0aGlzLnBhZ2VCb2R5LnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ld1VzZXIoKSB7XG4gICAgICAgIGNvbnN0IG5ld1VzZXJOYW1lID0gcHJvbXB0KFwiTmV3IFVzZXIgbmFtZT9cIik7XG4gICAgICAgIGNvbnN0IG5ld1VzZXIgPSBuZXcgVXNlcihuZXdVc2VyTmFtZSwgW10sIHRoaXMudXNlckxpc3QpO1xuXG4gICAgICAgIGlmICghdGhpcy5uZXdTdG9yYWdlLmRvZXNVc2VyQWxyZWFkeUV4aXN0KG5ld1VzZXIpKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJMaXN0LnB1c2gobmV3VXNlcik7XG4gICAgICAgICAgICB0aGlzLm5ld1N0b3JhZ2Uuc3RvcmVVc2VyQXJyYXkoKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coYE9yaWdpbmFsIChzdG9yZWQpIHVzZXIgbGlzdDpgKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmV3U3RvcmFnZS5zdG9yZWRVc2VyTGlzdCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQ3VycmVudCB1c2VyIGxpc3Q6YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5ld1N0b3JhZ2UudXNlckxpc3QpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVsb2FkVXNlckxpc3QoKTtcbiAgICB9XG5cbiAgICByZWZyZXNoTG9naW5QYWdlKCkge1xuICAgICAgICB0aGlzLmNsZWFyUGFnZUJvZHkoKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUxvZ2luUGFnZSgpO1xuICAgIH1cbn1cbiIsIi8vaW1wb3J0ICogYXMgTGlzdCBmcm9tIFwiLi9MaXN0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIC8vVE9ETzogU2hvdWxkIHRoZSBwcm9qZWN0IGhhdmUgYSByZWZlcmVuY2UgdG8gdGhlIFVJIGVsZW1lbnQgY29udGFpbmluZyBpdCdzIGluZm9ybWF0aW9uIHRvIG1ha2UgdXBkYXRpbmcgc2FpZCBVSSBlbGVtZW50IGVhc2llcj9cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24gPSBcIk5vIGRlc2NyaXB0aW9uIHNldFwiLFxuICAgICAgICBsaXN0cyA9IFtdLFxuICAgICAgICBwYXJlbnRVc2VyXG4gICAgKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5saXN0cyA9IGxpc3RzO1xuICAgICAgICB0aGlzLnBhcmVudE9iamVjdCA9IHBhcmVudFVzZXI7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBzZXROYW1lKG5ld05hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICB9XG5cbiAgICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGdldFRhc2tzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0cztcbiAgICB9XG5cbiAgICBzZXRMaXN0cyhsaXN0cykge1xuICAgICAgICB0aGlzLmxpc3RzID0gbGlzdHM7XG4gICAgfVxuXG4gICAgY29udGFpbnNMaXN0KGxpc3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3RzLnNvbWUoKGxpc3QpID0+IGxpc3QuZ2V0TmFtZSgpID09IGxpc3ROYW1lKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0KG5ld0xpc3QpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zTGlzdChuZXdMaXN0LmdldE5hbWUoKSkpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdHMucHVzaChuZXdMaXN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUxpc3QobGlzdE5hbWUpIHtcbiAgICAgICAgdGhpcy5saXN0cyA9IHRoaXMubGlzdHMuZmlsdGVyKChsaXN0KSA9PiBsaXN0LmdldE5hbWUoKSAhPT0gbGlzdE5hbWUpO1xuICAgIH1cblxuICAgIHNldENvbnRhaW5lck5vZGUoY29udGFpbmVyTm9kZSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lck5vZGUgPSBjb250YWluZXJOb2RlO1xuICAgIH1cblxuICAgIGdldENvbnRhaW5lck5vZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lck5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lck5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgLy9UT0RPOiBTaG91bGQgdGhlcmUgYmUgYSByZXR1cm4gdmFsdWUgaWYgdGhlcmUgaXNuJ3QgYSBub2RlIGFzc2lnbmVkIGFscmVhZHk/XG4gICAgICAgIC8vU2hvdWxkIHRoaXMgcHJvcGVydHkganVzdCBiZSBpbml0aWFsaXplZCBhcyBhIGJsYW5rIHNvbWVob3cgd2hlbiB0aGlzIG9iamVjdCBpcyBjcmVhdGVkP1xuICAgIH1cbn1cbiIsIi8vaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlci5qc1wiO1xuaW1wb3J0IHN0b3JhZ2VGaWxlIGZyb20gXCIuL3VzZXJTdG9yYWdlLmpzb25cIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2suanNcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3QuanNcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3QuanNcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuL1VzZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaFVzZXJBcnJheSgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJMaXN0KTtcbiAgICB9XG5cbiAgICBnZXRVc2VycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckxpc3Q7XG4gICAgfVxuXG4gICAgcmVmcmVzaFVzZXJBcnJheSgpIHtcbiAgICAgICAgY29uc3QganNvblRleHRPZlN0b3JlZFVzZXJBcnJheSA9IHRoaXMuZ2V0RnJvbUxvY2FsU3RvcmFnZSgpO1xuXG4gICAgICAgIHRoaXMuc3RvcmVkVXNlckxpc3QgPSB0aGlzLnBhcnNlVXNlcnMoanNvblRleHRPZlN0b3JlZFVzZXJBcnJheSk7XG4gICAgICAgIHRoaXMudXNlckxpc3QgPSB0aGlzLnBhcnNlVXNlcnMoanNvblRleHRPZlN0b3JlZFVzZXJBcnJheSk7XG4gICAgfVxuXG4gICAgcGFyc2VVc2Vycyhqc29uVGV4dE9mU3RvcmVkVXNlckFycmF5KSB7XG4gICAgICAgIGNvbnN0IHVzZXJzID0gW107XG5cbiAgICAgICAganNvblRleHRPZlN0b3JlZFVzZXJBcnJheS5mb3JFYWNoKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VyTmFtZSA9IHVzZXIubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1VzZXIgPSBuZXcgVXNlcih1c2VyTmFtZSwgW10sIGpzb25UZXh0T2ZTdG9yZWRVc2VyQXJyYXkpO1xuICAgICAgICAgICAgY29uc3QgdXNlclByb2plY3RzID0gdGhpcy5wYXJzZVByb2plY3RzKHVzZXIucHJvamVjdHMsIG5ld1VzZXIpO1xuICAgICAgICAgICAgbmV3VXNlci5zZXRQcm9qZWN0cyh1c2VyUHJvamVjdHMpO1xuICAgICAgICAgICAgdXNlcnMucHVzaChuZXdVc2VyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHVzZXJzO1xuICAgIH1cblxuICAgIHBhcnNlUHJvamVjdHMoanNvblByb2plY3RzLCBwYXJlbnRVc2VyKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gW107XG4gICAgICAgIGpzb25Qcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3QubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IHByb2plY3QuZGVzY3JpcHRpb247XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgICAgIHBhcmVudFVzZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdHMgPSB0aGlzLnBhcnNlTGlzdHMocHJvamVjdC5saXN0cywgbmV3UHJvamVjdCk7XG4gICAgICAgICAgICBuZXdQcm9qZWN0LnNldExpc3RzKHByb2plY3RMaXN0cyk7XG4gICAgICAgICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzO1xuICAgIH1cblxuICAgIHBhcnNlTGlzdHMoanNvbkxpc3RzLCBwYXJlbnRQcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IGxpc3RzID0gW107XG4gICAgICAgIGpzb25MaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0TmFtZSA9IGxpc3QubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3REZXNjcmlwdGlvbiA9IGxpc3QuZGVzY3JpcHRpb247XG4gICAgICAgICAgICBjb25zdCBuZXdMaXN0ID0gbmV3IExpc3QoXG4gICAgICAgICAgICAgICAgbGlzdE5hbWUsXG4gICAgICAgICAgICAgICAgbGlzdERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgICAgIHBhcmVudFByb2plY3RcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBsaXN0VGFza3MgPSB0aGlzLnBhcnNlVGFza3MobGlzdC50YXNrcywgbmV3TGlzdCk7XG4gICAgICAgICAgICBuZXdMaXN0LnNldFRhc2tzKGxpc3RUYXNrcyk7XG4gICAgICAgICAgICBsaXN0cy5wdXNoKG5ld0xpc3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGxpc3RzO1xuICAgIH1cblxuICAgIHBhcnNlVGFza3MoanNvblRhc2tzLCBwYXJlbnRMaXN0KSB7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gW107XG4gICAgICAgIGpzb25UYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IHRhc2submFtZTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDaGVja2VkID0gdGFzay5jaGVja2VkO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soXG4gICAgICAgICAgICAgICAgdGFza05hbWUsXG4gICAgICAgICAgICAgICAgdGFza0R1ZURhdGUsXG4gICAgICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIHBhcmVudExpc3QsXG4gICAgICAgICAgICAgICAgdGFza0NoZWNrZWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRhc2tzO1xuICAgIH1cblxuICAgIC8vUmV0dXJucyBhbiBhcnJheSBvZiB1c2VyIG9iamVjdHMgZWl0aGVyIGZyb20gYmFzZSBmaWxlIG9yIGZyb20gdGhlIHN0b3JlZCBmaWxlIG9mIHVzZXJzXG4gICAgZ2V0RnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgY29uc3Qgc3RvcmVkVXNlcnMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJTdG9yYWdlXCIpO1xuXG4gICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyU3RvcmFnZVwiKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyB1c2VycyBzdG9yZWQgaW4gbG9jYWxTdG9yYWdlLlwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmV0cmlldmluZyB1c2VyIGxpc3QgZnJvbSB1c2VyU3RvcmFnZS5qc29uLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBzdG9yYWdlRmlsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzdG9yZWRVc2Vycyk7XG4gICAgfVxuXG4gICAgLy9UT0RPOiBJcyB0aGlzIHVzZWxlc3M/XG4gICAgLy9Ob3QgZm9yICpldmVyeSogY2FzZSwgSSBkb24ndCB0aGluay4gV2hlbiB3ZSdyZSBzYXZpbmcgYSB1c2VyIHRoYXQgYWxyZWFkeSBleGlzdHMsIGl0IG1ha2VzIHNlbnNlIHRvIGNoZWNrIGFnYWluc3QgZXhpc3RpbmcgdXNlcnMgYW5kIHRoZW4gb3ZlcndyaXRlIHRoZSBwcmUtZXhpc3Rpbmcgb25lIHNvIHRoYXQgd2UgZG9uJ3QgZHVwbGljYXRlZCBldmVyeSB0aW1lIHdlIHNhdmUuXG4gICAgLy9JIHRoaW5rIGl0IGlzIGZvciB0aGUgY2FzZSBvZiBjcmVhdGluZyBhIGJyYW5kIG5ldyB1c2VyIGZyb20gdGhlIGxvZ2luIHNjcmVlbiB0aG91Z2guIEl0IGFkZHMgdGhlIG5ldyB1c2VyIGV2ZW4gaWYgdGhlIHVzZXIgYWxyZWFkeSBleGlzdHMgc28gd2hlbiBjaGVja2luZyB3aXRoIGEgbmV3IGJsYW5rIFwidXNlciAxXCIsIHRoaXMgb3ZlcndyaXRlcyB0aGUgYWxyZWFkeSBleGlzdGluZyBcInVzZXIgMVwiLlxuICAgIG92ZXJ3cml0ZVNhdmVkVXNlcih1c2VyVG9TdG9yZSkge1xuICAgICAgICBpZiAodGhpcy5kb2VzVXNlckFscmVhZHlFeGlzdCh1c2VyVG9TdG9yZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMudXNlckxpc3QuZmluZChcbiAgICAgICAgICAgICAgICAodXNlcikgPT4gdXNlci5uYW1lID09PSB1c2VyVG9TdG9yZS5uYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHVzZXJUb1N0b3JlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXNlckxpc3QucHVzaCh1c2VyVG9TdG9yZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9yZVVzZXJBcnJheSgpO1xuICAgIH1cblxuICAgIGRvZXNVc2VyQWxyZWFkeUV4aXN0KHVzZXJUb0NoZWNrKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5zVXNlciA9IHRoaXMudXNlckxpc3Quc29tZShcbiAgICAgICAgICAgICh1c2VyKSA9PiB1c2VyLm5hbWUgPT09IHVzZXJUb0NoZWNrLm5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2coYENvbnRhaW5zIFVzZXIgJHt1c2VyVG9DaGVja30/IDogJHtjb250YWluc1VzZXJ9YCk7XG4gICAgICAgIHJldHVybiBjb250YWluc1VzZXI7XG4gICAgfVxuXG4gICAgc3RvcmVVc2VyQXJyYXkoKSB7XG4gICAgICAgIGNvbnN0IHRvU2VuZFRvU3RvcmFnZSA9IEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAgdGhpcy51c2VyTGlzdCxcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5ID09PSBcInBhcmVudE9iamVjdFwiID8gdW5kZWZpbmVkIDogdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyU3RvcmFnZVwiLCB0b1NlbmRUb1N0b3JhZ2UpO1xuICAgIH1cblxuICAgIGRlbGV0ZVVzZXJBcnJheSgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyU3RvcmFnZVwiKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZHVlRGF0ZSA9IFwiTm8gZHVlIGRhdGUgc2V0LlwiLFxuICAgICAgICBkZXNjcmlwdGlvbiA9IFwiTm8gZGVzY3JpcHRpb24gc2V0IHlldC5cIixcbiAgICAgICAgcGFyZW50TGlzdCxcbiAgICAgICAgY2hlY2tlZCA9IGZhbHNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QgPSBwYXJlbnRMaXN0O1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgfVxuXG4gICAgZ2V0RGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBzZXREYXRlKG5ld0RhdGUpIHtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gbmV3RGF0ZTtcbiAgICB9XG5cbiAgICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldENvbnRhaW5lck5vZGUoY29udGFpbmVyTm9kZSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lck5vZGUgPSBjb250YWluZXJOb2RlO1xuICAgIH1cblxuICAgIGdldENvbnRhaW5lck5vZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lck5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lck5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgLy9UT0RPOiBTaG91bGQgdGhlcmUgYmUgYSByZXR1cm4gdmFsdWUgaWYgdGhlcmUgaXNuJ3QgYSBub2RlIGFzc2lnbmVkIGFscmVhZHk/XG4gICAgICAgIC8vU2hvdWxkIHRoaXMgcHJvcGVydHkganVzdCBiZSBpbml0aWFsaXplZCBhcyBhIGJsYW5rIHNvbWVob3cgd2hlbiB0aGlzIG9iamVjdCBpcyBjcmVhdGVkP1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIEdlbmVyYXRlRWxlbWVudCBmcm9tIFwiLi9HZW5lcmF0ZVBhZ2VFbGVtZW50LmpzXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9TdG9yYWdlLmpzXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrLmpzXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0LmpzXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0LmpzXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyLmpzXCI7XG5pbXBvcnQgTG9naW5VSSBmcm9tIFwiLi9Mb2dpblVJLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgICAvL0luaXRpYWxpemUgcGFnZSBib2R5LCBuYXYgY29udGFpbmVyLCBhbmQgY29udGVudCBjb250YWluZXIgcGFnZSBlbGVtZW50cyB0byBiZSBsYXRlciBwb3B1bGF0ZWRcbiAgICBjb25zdHJ1Y3Rvcih0aGlzVXNlciwgdGhpc1N0b3JhZ2UsIHRoaXNMb2dpblVJKSB7XG4gICAgICAgIHRoaXMubmV3U3RvcmFnZSA9IHRoaXNTdG9yYWdlO1xuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzVXNlcjtcbiAgICAgICAgdGhpcy5sb2dpblVJID0gdGhpc0xvZ2luVUk7XG5cbiAgICAgICAgdGhpcy5wYWdlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgICB0aGlzLm5hdkNvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnBhZ2VCb2R5LmFwcGVuZENoaWxkKHRoaXMubmF2Q29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLmNvbnRlbnRDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJjb250ZW50LWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucGFnZUJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50Q29udGFpbmVyKTtcblxuICAgICAgICBpZiAodGhpcy51c2VyLnByb2plY3RzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkUGFnZUNvbnRlbnQodGhpcy51c2VyLnByb2plY3RzWzBdLm5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2FkUGFnZUNvbnRlbnQoKTtcbiAgICAgICAgfVxuICAgICAgICAvKiB0aGlzLmxvYWRQYWdlQ29udGVudCh0aGlzLnVzZXIubmFtZSk7ICovXG4gICAgfVxuXG4gICAgLy9DbGVhcnMgYW5kIHBvcHVsYXRlcyBuYXYgYW5kIGRpc3BsYXkgcGFuZXNcbiAgICBsb2FkUGFnZUNvbnRlbnQobmFtZU9mUHJvamVjdFRvTG9hZCA9IFwiXCIpIHtcbiAgICAgICAgdGhpcy5yZWxvYWROYXZDb250ZW50KCk7XG5cbiAgICAgICAgdGhpcy5jbGVhckRpc3BsYXlDb250ZW50KCk7XG4gICAgICAgIC8vSW4gY2FzZSB0aGVyZSBpc24ndCBhIHByb2plY3QgdG8gbG9hZC4uLi5cbiAgICAgICAgaWYgKG5hbWVPZlByb2plY3RUb0xvYWQgIT0gXCJcIikge1xuICAgICAgICAgICAgdGhpcy5maWxsRGlzcGxheVBhbmVDb250ZW50KG5hbWVPZlByb2plY3RUb0xvYWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJOYXZDb250ZW50KCkge1xuICAgICAgICB0aGlzLm5hdkNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICByZWxvYWROYXZDb250ZW50KCkge1xuICAgICAgICB0aGlzLmNsZWFyTmF2Q29udGVudCgpO1xuICAgICAgICB0aGlzLmZpbGxOYXZDb250ZW50KCk7XG4gICAgfVxuXG4gICAgY2xlYXJEaXNwbGF5Q29udGVudCgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIH1cblxuICAgIGZpbGxOYXZDb250ZW50KCkge1xuICAgICAgICBjb25zdCBuYXZJbmZvQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibmF2LWluZm8tY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgdGhpcy5uYXZDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBuYXZUaXRsZUNvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi10aXRsZS1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBuYXZJbmZvQ29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgbmF2Q29udHJvbENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1jb250cm9sLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIC8qIG5hdkluZm9Db250YWluZXIgKi8gbnVsbFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3REcm9wZG93bkNvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5jcmVhdGVEcm9wZG93bihcbiAgICAgICAgICAgIFwib3B0aW9uc1wiLFxuICAgICAgICAgICAgbmF2Q29udHJvbENvbnRhaW5lcixcbiAgICAgICAgICAgIG5hdkluZm9Db250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBuYXZUaXRsZSA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi10aXRsZVwiXSxcbiAgICAgICAgICAgIG5hdlRpdGxlQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJNeSBQcm9qZWN0c1wiXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgYWRkTmV3UHJvamVjdEJ1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1uZXctcHJvamVjdC1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBuYXZDb250cm9sQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJhZGQgcHJvamVjdFwiXG4gICAgICAgICk7XG4gICAgICAgIGFkZE5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTmV3UHJvamVjdCgpO1xuICAgICAgICAgICAgdGhpcy5yZWxvYWROYXZDb250ZW50KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNhdmVCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtc2F2ZS11c2Vycy1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBuYXZDb250cm9sQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJzYXZlXCJcbiAgICAgICAgKTtcbiAgICAgICAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZXdTdG9yYWdlLm92ZXJ3cml0ZVNhdmVkVXNlcih0aGlzLnVzZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBleGl0VG9Mb2dpbkJ1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1leGl0LWJ1dHRvblwiLCBcImJ1dHRvblwiXSxcbiAgICAgICAgICAgIG5hdkNvbnRyb2xDb250YWluZXIsXG4gICAgICAgICAgICBcImV4aXRcIlxuICAgICAgICApO1xuICAgICAgICBleGl0VG9Mb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2dpblVJLnJlZnJlc2hMb2dpblBhZ2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgbmF2Q29udGVudENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1jb250ZW50LWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHRoaXMubmF2Q29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5wb3B1bGF0ZU5hdkNvbnRlbnQobmF2Q29udGVudENvbnRhaW5lciwgdGhpcy51c2VyLnByb2plY3RzKTtcblxuICAgICAgICB0aGlzLm5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZDb250ZW50Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBwb3B1bGF0ZU5hdkNvbnRlbnQobmF2Q29udGVudENvbnRhaW5lciwgcHJvamVjdHMpIHtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgbmF2Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVByb2plY3ROYXZWaXN1YWwocHJvamVjdClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZVByb2plY3ROYXZWaXN1YWwocHJvamVjdCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXCJkaXZcIiwgW1xuICAgICAgICAgICAgXCJuYXYtcHJvamVjdC1jb250YWluZXJcIixcbiAgICAgICAgXSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibmF2LXByb2plY3QtdGl0bGUtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUljb24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtcHJvamVjdC10aXRsZS1pY29uXCJdLFxuICAgICAgICAgICAgcHJvamVjdFRpdGxlQ29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibmF2LXByb2plY3QtdGl0bGVcIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGVDb250YWluZXIsXG4gICAgICAgICAgICBwcm9qZWN0Lm5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyRGlzcGxheUNvbnRlbnQoKTtcbiAgICAgICAgICAgIHRoaXMuZmlsbERpc3BsYXlQYW5lQ29udGVudChgJHtwcm9qZWN0Lm5hbWV9YCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250ZW50Q29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibmF2LXByb2plY3QtY29udGVudC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgcHJvamVjdC5saXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUxpc3ROYXZWaXN1YWwobGlzdCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0TmF2VmlzdWFsKGxpc3QpIHtcbiAgICAgICAgY29uc3QgbGlzdFRpdGxlQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXCJkaXZcIiwgW1xuICAgICAgICAgICAgXCJuYXYtbGlzdC10aXRsZS1jb250YWluZXJcIixcbiAgICAgICAgXSk7XG5cbiAgICAgICAgY29uc3QgbGlzdFRpdGxlSWNvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1saXN0LXRpdGxlLWljb25cIl0sXG4gICAgICAgICAgICBsaXN0VGl0bGVDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBsaXN0VGl0bGVEaXYgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtbGlzdC10aXRsZVwiXSxcbiAgICAgICAgICAgIGxpc3RUaXRsZUNvbnRhaW5lcixcbiAgICAgICAgICAgIGxpc3QubmFtZVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBsaXN0VGl0bGVDb250YWluZXI7XG4gICAgfVxuXG4gICAgLy9DaGVja3MgdGhhdCBhIHByb2plY3QgYnkgdGhhdCBuYW1lIGV4aXN0cyBhbmQgdGhlbiBzZW5kcyB0aGF0IHByb2plY3QgbmFtZSBvbiB0byBiZSBhZGRlZCB0byB0aGUgd29ya3NwYWNlXG4gICAgZmlsbERpc3BsYXlQYW5lQ29udGVudChwcm9qZWN0TmFtZSA9IFwiZGVmYXVsdFwiKSB7XG4gICAgICAgIGlmICghdGhpcy51c2VyLmNvbnRhaW5zUHJvamVjdChwcm9qZWN0TmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXCJkaXZcIiwgW1xuICAgICAgICAgICAgXCJwcm9qZWN0LWNvbnRhaW5lclwiLFxuICAgICAgICBdKTtcblxuICAgICAgICB0aGlzLmNyZWF0ZVByb2plY3RWaXN1YWwoXG4gICAgICAgICAgICB0aGlzLnVzZXIuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSksXG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBjcmVhdGVQcm9qZWN0VmlzdWFsKHByb2plY3QsIHByb2plY3RDb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wicHJvamVjdC10aXRsZS1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdEluZm9Db250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJwcm9qZWN0LWluZm8tY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgcHJvamVjdFRpdGxlQ29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRyb2xDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJwcm9qZWN0LWNvbnRyb2wtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgLyogcHJvamVjdFRpdGxlQ29udGFpbmVyICovIG51bGxcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0RHJvcGRvd25Db250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuY3JlYXRlRHJvcGRvd24oXG4gICAgICAgICAgICBcIm9wdGlvbnNcIixcbiAgICAgICAgICAgIHByb2plY3RDb250cm9sQ29udGFpbmVyLFxuICAgICAgICAgICAgcHJvamVjdFRpdGxlQ29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdENhcmRDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJwcm9qZWN0LWNhcmQtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wicHJvamVjdC10aXRsZVwiXSxcbiAgICAgICAgICAgIHByb2plY3RJbmZvQ29udGFpbmVyLFxuICAgICAgICAgICAgcHJvamVjdC5uYW1lXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wicHJvamVjdC1kZXNjcmlwdGlvblwiXSxcbiAgICAgICAgICAgIHByb2plY3RJbmZvQ29udGFpbmVyLFxuICAgICAgICAgICAgcHJvamVjdC5kZXNjcmlwdGlvblxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZU5ld0xpc3RCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuZXctcHJvamVjdC1saXN0LWJ1dHRvblwiLCBcImJ1dHRvblwiXSxcbiAgICAgICAgICAgIHByb2plY3RDb250cm9sQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJuZXcgbGlzdFwiXG4gICAgICAgICk7XG4gICAgICAgIGNyZWF0ZU5ld0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0xpc3QgPSB0aGlzLmNyZWF0ZUxpc3QocHJvamVjdCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2plY3RWaXN1YWwocHJvamVjdCk7XG4gICAgICAgICAgICB0aGlzLnJlbG9hZE5hdkNvbnRlbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY2xvc2VQcm9qZWN0QnV0dG9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiY2xvc2UtcHJvamVjdC1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBwcm9qZWN0Q29udHJvbENvbnRhaW5lcixcbiAgICAgICAgICAgIFwiY2xvc2UgcHJvamVjdFwiXG4gICAgICAgICk7XG4gICAgICAgIGNsb3NlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGVhckRpc3BsYXlDb250ZW50KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJpdGVtLXJlbW92ZS1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBwcm9qZWN0Q29udHJvbENvbnRhaW5lcixcbiAgICAgICAgICAgIFwiZGVsZXRlIHByb2plY3RcIlxuICAgICAgICApO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0LnBhcmVudE9iamVjdC5yZW1vdmVQcm9qZWN0KHByb2plY3QubmFtZSk7XG4gICAgICAgICAgICB0aGlzLmxvYWRQYWdlQ29udGVudCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBlZGl0UHJvamVjdEJ1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcInByb2plY3QtZWRpdC1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICBwcm9qZWN0Q29udHJvbENvbnRhaW5lcixcbiAgICAgICAgICAgIFwiZWRpdCBwcm9qZWN0XCJcbiAgICAgICAgKTtcbiAgICAgICAgZWRpdFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWRpdFByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2plY3RWaXN1YWwocHJvamVjdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYXBwZW5kQWxsTGlzdHNUb1Byb2plY3QocHJvamVjdENhcmRDb250YWluZXIsIHByb2plY3QubGlzdHMpO1xuXG4gICAgICAgIHByb2plY3Quc2V0Q29udGFpbmVyTm9kZShwcm9qZWN0Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBhcHBlbmRBbGxMaXN0c1RvUHJvamVjdChwcm9qZWN0Q29udGFpbmVyLCBsaXN0cykge1xuICAgICAgICBsaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZExpc3QobGlzdCwgcHJvamVjdENvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFwcGVuZExpc3QobGlzdCwgcHJvamVjdENvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXCJkaXZcIiwgW1xuICAgICAgICAgICAgXCJsaXN0LWNvbnRhaW5lclwiLFxuICAgICAgICBdKTtcbiAgICAgICAgdGhpcy5jcmVhdGVMaXN0VmlzdWFsKGxpc3QsIGxpc3RDb250YWluZXIpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xuICAgIH1cblxuICAgIGNyZWF0ZUxpc3RWaXN1YWwobGlzdCwgbGlzdENvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBsaXN0VGl0bGVDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJsaXN0LXRpdGxlLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIGxpc3RDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBsaXN0SW5mb0NvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcImxpc3QtaW5mby1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBsaXN0VGl0bGVDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBsaXN0Q29udHJvbENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcImxpc3QtY29udHJvbC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICAvKiBsaXN0VGl0bGVDb250YWluZXIgKi8gbnVsbFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3REcm9wZG93bkNvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5jcmVhdGVEcm9wZG93bihcbiAgICAgICAgICAgIFwib3B0aW9uc1wiLFxuICAgICAgICAgICAgbGlzdENvbnRyb2xDb250YWluZXIsXG4gICAgICAgICAgICBsaXN0VGl0bGVDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBsaXN0Q2FyZENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcImxpc3QtY2FyZC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBsaXN0Q29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgbGlzdE5hbWUgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJsaXN0LXRpdGxlXCJdLFxuICAgICAgICAgICAgbGlzdEluZm9Db250YWluZXIsXG4gICAgICAgICAgICBsaXN0Lm5hbWVcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBsaXN0RGVzY3JpcHRpb24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJsaXN0LWRlc2NyaXB0aW9uXCJdLFxuICAgICAgICAgICAgbGlzdEluZm9Db250YWluZXIsXG4gICAgICAgICAgICBsaXN0LmRlc2NyaXB0aW9uXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgYWRkTmV3VGFza0J1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5ldy1saXN0LWl0ZW0tYnV0dG9uXCIsIFwiYnV0dG9uXCJdLFxuICAgICAgICAgICAgbGlzdENvbnRyb2xDb250YWluZXIsXG4gICAgICAgICAgICBcIm5ldyB0YXNrXCJcbiAgICAgICAgKTtcbiAgICAgICAgYWRkTmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IHRoaXMuY3JlYXRlVGFzayhsaXN0KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGlzdFZpc3VhbChsaXN0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlTGlzdEJ1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIml0ZW0tcmVtb3ZlLWJ1dHRvblwiLCBcImJ1dHRvblwiXSxcbiAgICAgICAgICAgIGxpc3RDb250cm9sQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJkZWxldGUgbGlzdFwiXG4gICAgICAgICk7XG4gICAgICAgIHJlbW92ZUxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGxpc3QucGFyZW50T2JqZWN0LnJlbW92ZUxpc3QobGlzdC5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvamVjdFZpc3VhbChsaXN0LnBhcmVudE9iamVjdCk7XG4gICAgICAgICAgICB0aGlzLnJlbG9hZE5hdkNvbnRlbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZWRpdExpc3RCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJsaXN0LWVkaXQtYnV0dG9uXCIsIFwiYnV0dG9uXCJdLFxuICAgICAgICAgICAgbGlzdENvbnRyb2xDb250YWluZXIsXG4gICAgICAgICAgICBcImVkaXQgbGlzdFwiXG4gICAgICAgICk7XG4gICAgICAgIGVkaXRMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVkaXRMaXN0KGxpc3QpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMaXN0VmlzdWFsKGxpc3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFwcGVuZFRhc2tMaXN0KGxpc3RDb250YWluZXIsIGxpc3QpO1xuICAgICAgICBsaXN0LnNldENvbnRhaW5lck5vZGUobGlzdENvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiBsaXN0Q29udGFpbmVyO1xuICAgIH1cblxuICAgIGFwcGVuZFRhc2tMaXN0KGxpc3RDb250YWluZXIsIGxpc3QpIHtcbiAgICAgICAgbGlzdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZFRhc2sodGFzaywgbGlzdENvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFwcGVuZFRhc2sodGFzaywgbGlzdENvbnRhaW5lcikge1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXCJkaXZcIiwgW1xuICAgICAgICAgICAgXCJpdGVtLWNvbnRhaW5lclwiLFxuICAgICAgICBdKTtcbiAgICAgICAgdGhpcy5jcmVhdGVUYXNrVmlzdWFsKHRhc2ssIHRhc2tDb250YWluZXIpO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIH1cblxuICAgIGNyZWF0ZVRhc2tWaXN1YWwodGFzaywgdGFza0NvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIml0ZW0tY2hlY2tib3gtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgdGFza0NvbnRhaW5lclxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgICAgW1wiaXRlbS1jaGVja2JveFwiXSxcbiAgICAgICAgICAgIGNoZWNrYm94Q29udGFpbmVyXG4gICAgICAgICk7XG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgIGlmICh0YXNrLmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0YXNrLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFzay5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIml0ZW0taW5mby1jb250YWluZXJcIl0sXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiaXRlbS10aXRsZVwiXSxcbiAgICAgICAgICAgIGluZm9Db250YWluZXIsXG4gICAgICAgICAgICB0YXNrLm5hbWVcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJpdGVtLWRlc2NyaXB0aW9uXCJdLFxuICAgICAgICAgICAgaW5mb0NvbnRhaW5lcixcbiAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb25cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBpdGVtRHVlRGF0ZSA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIml0ZW0tZHVlLWRhdGVcIl0sXG4gICAgICAgICAgICBpbmZvQ29udGFpbmVyLFxuICAgICAgICAgICAgdGFzay5kdWVEYXRlXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgdGFza0NvbnRyb2xzQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1widGFzay1jb250cm9scy1jb250YWluZXJcIl0sXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlVGFza0J1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIml0ZW0tcmVtb3ZlLWJ1dHRvblwiLCBcImJ1dHRvblwiXSxcbiAgICAgICAgICAgIHRhc2tDb250cm9sc0NvbnRhaW5lcixcbiAgICAgICAgICAgIFwicmVtb3ZlIGl0ZW1cIlxuICAgICAgICApO1xuICAgICAgICByZW1vdmVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0YXNrLnBhcmVudE9iamVjdC5yZW1vdmVUYXNrKHRhc2submFtZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3RWaXN1YWwodGFzay5wYXJlbnRPYmplY3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBlZGl0VGFza0J1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIml0ZW0tZWRpdC1idXR0b25cIiwgXCJidXR0b25cIl0sXG4gICAgICAgICAgICB0YXNrQ29udHJvbHNDb250YWluZXIsXG4gICAgICAgICAgICBcImVkaXQgaXRlbVwiXG4gICAgICAgICk7XG4gICAgICAgIGVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVkaXRUYXNrKHRhc2spO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUYXNrVmlzdWFsKHRhc2spO1xuICAgICAgICB9KTtcblxuICAgICAgICB0YXNrLnNldENvbnRhaW5lck5vZGUodGFza0NvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xuICAgIH1cblxuICAgIGNyZWF0ZVRhc2socGFyZW50TGlzdCkge1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IHByb21wdChcIkl0ZW0gbmFtZT9cIik7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHByb21wdChcIkl0ZW0gZGVzY3JpcHRpb24/XCIpO1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHByb21wdChcIkl0ZW0gZHVlIGRhdGU/XCIpO1xuXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhcbiAgICAgICAgICAgIHRhc2tOYW1lLFxuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGFza0R1ZURhdGUsXG4gICAgICAgICAgICBwYXJlbnRMaXN0XG4gICAgICAgICk7XG4gICAgICAgIHBhcmVudExpc3QuYWRkVGFzayhuZXdUYXNrKTtcbiAgICB9XG5cbiAgICBlZGl0VGFzayh0YXNrKSB7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gcHJvbXB0KFwiTmV3IHRhc2sgbmFtZT9cIiwgYCR7dGFzay5uYW1lfWApO1xuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBwcm9tcHQoXG4gICAgICAgICAgICBcIk5ldyB0YXNrIGRlc2NyaXB0aW9uP1wiLFxuICAgICAgICAgICAgYCR7dGFzay5kZXNjcmlwdGlvbn1gXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gcHJvbXB0KFwiTmV3IHRhc2sgZHVlIGRhdGU/XCIsIGAke3Rhc2suZHVlRGF0ZX1gKTtcblxuICAgICAgICB0YXNrLnNldE5hbWUodGFza05hbWUpO1xuICAgICAgICB0YXNrLnNldERhdGUodGFza0R1ZURhdGUpO1xuICAgICAgICB0YXNrLnNldERlc2NyaXB0aW9uKHRhc2tEZXNjcmlwdGlvbik7XG4gICAgfVxuXG4gICAgdXBkYXRlVGFza1Zpc3VhbCh0YXNrKSB7XG4gICAgICAgIHRoaXMuY2xlYXJUYXNrVmlzdWFsKHRhc2suY29udGFpbmVyTm9kZSk7XG4gICAgICAgIHRoaXMuY3JlYXRlVGFza1Zpc3VhbCh0YXNrLCB0YXNrLmNvbnRhaW5lck5vZGUpO1xuICAgIH1cblxuICAgIGNsZWFyVGFza1Zpc3VhbCh0YXNrVmlzdWFsKSB7XG4gICAgICAgIHRhc2tWaXN1YWwucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlTGlzdChwYXJlbnRQcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IGxpc3ROYW1lID0gcHJvbXB0KFwiTGlzdCBuYW1lP1wiKTtcbiAgICAgICAgY29uc3QgbGlzdERlc2NyaXB0aW9uID0gcHJvbXB0KFwiTGlzdCBkZXNjcmlwdGlvbj9cIik7XG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBuZXcgTGlzdChsaXN0TmFtZSwgbGlzdERlc2NyaXB0aW9uLCBbXSwgcGFyZW50UHJvamVjdCk7XG5cbiAgICAgICAgcGFyZW50UHJvamVjdC5hZGRMaXN0KG5ld0xpc3QpO1xuICAgIH1cblxuICAgIGVkaXRMaXN0KGxpc3QpIHtcbiAgICAgICAgY29uc3QgbGlzdE5hbWUgPSBwcm9tcHQoXCJMaXN0IG5hbWU/XCIsIGxpc3QubmFtZSk7XG4gICAgICAgIGNvbnN0IGxpc3REZXNjcmlwdGlvbiA9IHByb21wdChcIkxpc3QgZGVzY3JpcHRpb24/XCIsIGxpc3QuZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGxpc3QubmFtZSA9IGxpc3ROYW1lO1xuICAgICAgICBsaXN0LmRlc2NyaXB0aW9uID0gbGlzdERlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHVwZGF0ZUxpc3RWaXN1YWwobGlzdCkge1xuICAgICAgICB0aGlzLmNsZWFyTGlzdFZpc3VhbChsaXN0LmNvbnRhaW5lck5vZGUpO1xuICAgICAgICB0aGlzLmNyZWF0ZUxpc3RWaXN1YWwobGlzdCwgbGlzdC5jb250YWluZXJOb2RlKTtcbiAgICB9XG5cbiAgICBjbGVhckxpc3RWaXN1YWwobGlzdFZpc3VhbCkge1xuICAgICAgICBsaXN0VmlzdWFsLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIH1cblxuICAgIGVkaXRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9tcHQoXCJQcm9qZWN0IG5hbWU/XCIsIHByb2plY3QubmFtZSk7XG4gICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IHByb21wdChcbiAgICAgICAgICAgIFwiUHJvamVjdCBkZXNjcmlwdGlvbj9cIixcbiAgICAgICAgICAgIHByb2plY3QuZGVzY3JpcHRpb25cbiAgICAgICAgKTtcblxuICAgICAgICBwcm9qZWN0Lm5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgcHJvamVjdC5kZXNjcmlwdGlvbiA9IHByb2plY3REZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICB1cGRhdGVQcm9qZWN0VmlzdWFsKHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5jbGVhclByb2plY3RWaXN1YWwocHJvamVjdC5jb250YWluZXJOb2RlKTtcbiAgICAgICAgdGhpcy5jcmVhdGVQcm9qZWN0VmlzdWFsKHByb2plY3QsIHByb2plY3QuY29udGFpbmVyTm9kZSk7XG4gICAgfVxuXG4gICAgY2xlYXJQcm9qZWN0VmlzdWFsKHByb2plY3RWaXN1YWwpIHtcbiAgICAgICAgcHJvamVjdFZpc3VhbC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IHByb21wdChcIlByb2plY3QgbmFtZT9cIik7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3REZXNjcmlwdGlvbiA9IHByb21wdChcIlByb2plY3QgZGVzY3JpcHRpb24/XCIpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0TGlzdHMgPSBbXTtcblxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgICAgICAgICBuZXdQcm9qZWN0TmFtZSxcbiAgICAgICAgICAgIG5ld1Byb2plY3REZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG5ld1Byb2plY3RMaXN0cyxcbiAgICAgICAgICAgIHRoaXMudXNlclxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMudXNlci5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByb2plY3RzID0gW10sIHBhcmVudENvbnRhaW5lciA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuICAgICAgICB0aGlzLnBhcmVudE9iamVjdCA9IHBhcmVudENvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHNldE5hbWUobmV3TmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgIH1cblxuICAgIGdldFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgICB9XG5cbiAgICBzZXRQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XG4gICAgfVxuXG4gICAgY29udGFpbnNQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLnNvbWUoXG4gICAgICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYWRkUHJvamVjdChuZXdQcm9qZWN0KSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluc1Byb2plY3QobmV3UHJvamVjdC5nZXROYW1lKCkpKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcihcbiAgICAgICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSAhPT0gcHJvamVjdE5hbWVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQoXG4gICAgICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lXG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFVJIGZyb20gXCIuL21vZHVsZXMvVUkuanNcIjtcbmltcG9ydCBMb2dpblVJIGZyb20gXCIuL21vZHVsZXMvTG9naW5VSS5qc1wiO1xuXG4vKiBjb25zdCBuZXdQYWdlID0gbmV3IFVJKCk7ICovXG5cbmNvbnN0IG5ld0xvZ2luID0gbmV3IExvZ2luVUkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==