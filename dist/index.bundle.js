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

.login-page-body {
    grid-column: 1 / 3;

    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 2fr 1fr;

    border: 1px solid red;
}

.login-container {
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    border: 1px solid blue;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.user-name-option {
    font-family: var(--general-font);
    font-size: var(--item-title-font-size);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap\");\n\n:root {\n    --mute-color: rgb(255, 127, 80, 0.1);\n    --secondary-color: 253, 107, 62;\n    --highlight-color: 147, 252, 217;\n    --dark-shadow-color: 0, 0, 0;\n    --box-shadow-values: 0.5rem 0.8rem 0.05rem;\n    --minor-box-shadow-values: 0.3rem 0.3rem 0.05rem;\n    --general-font: \"Montserrat\", \"Roboto Condensed\", sans-serif;\n    --title-font: \"Roboto Slab\", serif;\n    --base-font-color: rgb(0, 0, 0, 0.8);\n    --base-font-size: 1vh;\n    --title-font-size: 4rem;\n    --header-font-size: 2rem;\n    --content-font-size: 1rem;\n    --base-line-height: 1.25;\n    --content-line-height: 2;\n\n    font-size: var(--base-font-size);\n\n    --item-title-font-size: 1.5rem;\n    --item-info-font-size: 1rem;\n    --list-title-font-size: 2rem;\n    --list-info-font-size: 1rem;\n    --project-title-font-size: 2rem;\n    --project-info-font-size: 1.5rem;\n    --nav-title-font-size: 1.5rem;\n    --nav-info-font-size: 1.25rem;\n\n    --nav-icon-dimension: 2rem;\n\n    --dark-green: rgba(4, 42, 43, 1);\n    --moonstone: rgba(94, 177, 191, 1);\n    --light-cyan: rgba(205, 237, 246, 1);\n    --orange-crayola: rgba(239, 123, 69, 1);\n    --chili-red: rgba(216, 71, 39, 1);\n\n    --lapis-lazuli: rgba(35, 87, 137, 1);\n    --imperial-red: rgba(251, 54, 64, 0.1);\n    --aquamarine: rgba(22, 244, 208, 1);\n    --school-bus-yellow: rgba(241, 211, 2, 1);\n    --black: rgba(2, 1, 0, 1);\n\n    --nav-background-color: var(--imperial-red);\n    --content-container-color: rgb(242, 242, 242);\n    --project-container-color: rgb(255, 255, 255);\n\n    --box-shadow-values: -0.5rem 0.8rem 0.5rem;\n    --minor-box-shadow-values: -0.3rem 0.3rem 0.3rem;\n    --drop-shadow-color: rgb(0, 0, 0, 0.4);\n\n    box-sizing: border-box;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: minmax(min(10rem, 100%), 2fr) minmax(\n            min(10rem, 100%),\n            5fr\n        );\n\n    font-family: var(--general-font);\n    font-size: var(--general-font-size);\n    margin: 0;\n    padding: 0;\n\n    height: 100vh;\n}\n\n.nav-container {\n    grid-column: 1 / 2;\n\n    display: grid;\n    /* grid-template-rows: 3rem repeat(auto-fit, minmax(10px, 0.5fr)); */\n    grid-template-rows: 1fr 9fr;\n\n    gap: 2rem;\n    background-color: var(--project-container-color);\n    padding: 4rem 1rem;\n\n    position: sticky;\n    top: 0;\n    margin: 0;\n    height: 100vh;\n\n    border: 1px solid blue;\n}\n\n.nav-title-container {\n    grid-row: 1 / 2;\n\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n\n    font-size: var(--nav-title-font-size);\n}\n\n.nav-title {\n}\n\n.new-project-button {\n    background-image: url(./img/icons/plus.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.nav-content-container {\n    grid-row: 2 / 3;\n\n    /* display: grid;\n    gap: 1rem;\n    grid-template-rows: repeat(auto-fill, minmax(100px, auto));\n    align-items: start; */\n\n    display: flex;\n    flex-direction: column;\n\n    font-size: var(--nav-info-font-size);\n    /* overflow: scroll; */\n\n    border: solid red 1px;\n}\n\n.nav-project-container {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n\n    /* height: minmax(50px, 100px); */\n\n    border: solid pink 1px;\n}\n\n.nav-project-title-container {\n    grid-column: 1 / 3;\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.nav-project-title-icon {\n    background-image: url(./img/icons/dots-horizontal-circle-outline.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.nav-project-title {\n    font-weight: 500;\n}\n\n.nav-project-content-container {\n    grid-column: 2 / 3;\n    /* height: 200px; */\n\n    border: 1px solid yellow;\n}\n\n.nav-list-title-container {\n    display: flex;\n    align-items: center;\n    gap: 0.2rem;\n}\n\n.nav-list-title-icon {\n    background-image: url(./img/icons/menu-right-outline.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.nav-list-title {\n}\n\n.content-container {\n    grid-column: 2 / 3;\n\n    display: grid;\n    gap: 1rem;\n    background-color: var(--content-container-color);\n    /* border: solid 1px red; */\n\n    /* height: 100vh; */\n    height: 100%;\n    /* box-shadow: var(--box-shadow-values) var(--drop-shadow-color); */\n}\n\n.project-container {\n    display: grid;\n    /* grid-template-rows: 4rem repeat(auto-fill, 1fr); */\n    grid-template-rows: 6rem 1fr;\n\n    /* background-color: rgba(var(--mute-color), 1); */\n    padding: 2rem;\n    margin: 1rem;\n    gap: 0.5rem;\n\n    height: 100%;\n\n    /* overflow: scroll; */\n    /* border-radius: 0.5rem; */\n    background-color: var(--project-container-color);\n    box-shadow: var(--box-shadow-values)\n        rgba(var(--drop-shadow-color-color), 0.5);\n\n    border: solid black 1px;\n}\n\n.project-title-container {\n    grid-row: 1 / 2;\n\n    display: grid;\n    grid-template-columns: 5fr 1fr;\n    font-size: var(--project-info-font-size);\n    border: solid black 1px;\n}\n\n.project-info-container {\n    border: solid red 1px;\n}\n\n.project-control-container {\n    border: solid blue 1px;\n}\n\n.project-title {\n    font-size: var(--project-title-font-size);\n}\n\n.project-description {\n}\n\n.new-project-list-button {\n    /* background-image: url(./img/icons/plus.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1; */\n}\n\n.close-project-button {\n    /* background-image: url(./img/icons/close-box-outline.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1; */\n}\n\n.project-card-container {\n    grid-row: 2 / 3;\n\n    /* display: grid;\n    grid-auto-rows: auto; */\n\n    height: 100%;\n\n    display: flex;\n    flex-direction: column;\n\n    overflow: scroll;\n    border: solid green 1px;\n}\n\n.list-container {\n    display: grid;\n    gap: 0.5rem;\n\n    /* background-color: rgba(var(--secondary-color), 0.5); */\n    padding: 1rem;\n    box-shadow: var(--minor-box-shadow-values) var(--drop-shadow-color);\n    /* border-radius: 0.5rem; */\n}\n\n.list-title-container {\n    display: grid;\n    grid-template-columns: 5fr 1fr;\n    font-size: var(--list-info-font-size);\n}\n\n.list-info-container {\n}\n\n.list-title {\n    font-size: var(--list-title-font-size);\n}\n\n.list-description {\n}\n\n.new-list-item-button {\n    background-image: url(./img/icons/plus.svg);\n    height: var(--nav-icon-dimension);\n    aspect-ratio: 1 / 1;\n}\n\n.item-container {\n    display: grid;\n    grid-template-columns: 1fr 6fr 1fr;\n    /* background-color: rgba(var(--secondary-color), 0.5); */\n}\n\n.item-checkbox-container {\n    grid-column: 1 / 2;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.item-checkbox {\n}\n\n/* input[type=\"checkbox\"] {\n    appearance: none;\n    display: grid;\n    place-content: center;\n    border: solid 1px black;\n    height: 1em;\n    width: 1em;\n\n    background: #0a0a0a;\n    border-color: #fff;\n}\n\ninput[type=\"checkbox\"]::before {\n    content: \"\";\n    width: 0.65em;\n    height: 0.65em;\n    transform: scale(0);\n    transition: 120ms transform ease-in-out;\n    box-shadow: inset 1em 1em var(--form-control-color);\n} */\n\n.item-info-container {\n    grid-column: 2 / 3;\n    font-size: var(--item-info-font-size);\n}\n\n.item-title {\n    font-size: var(--item-title-font-size);\n}\n\n.item-description {\n}\n\n.item-due-date {\n}\n\n.item-remove-button {\n}\n\n.login-page-body {\n    grid-column: 1 / 3;\n\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    grid-template-rows: 1fr 2fr 1fr;\n\n    border: 1px solid red;\n}\n\n.login-container {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n\n    border: 1px solid blue;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.user-name-option {\n    font-family: var(--general-font);\n    font-size: var(--item-title-font-size);\n}\n"],"sourceRoot":""}]);
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

        this.newUserButton = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["new-user-button"],
            this.loginContainer,
            "Create new User"
        );
        this.newUserButton.addEventListener("click", () => {
            //just gonna add it to the list of potential users for now
            this.createNewUser();
        });

        this.userListContainer = _GeneratePageElement_js__WEBPACK_IMPORTED_MODULE_0__.generatePageElement(
            "div",
            ["user-list-container"],
            this.loginContainer
        );

        this.createUserListDiv();
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
            ["user-name-option"],
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

        /* console.log(`new user named: ${newUser.name}`);
        console.log(`new user parent: ${newUser.parentObject}`); */

        //make sure user parent container is object
        //Do I need to save this new object immediately?
        //Do i need to alter the save function to include all objects

        //Should this also open the main UI with new user and no projects, etc?
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
        /* const thatsNotAnArrayThisIsAnArray = [];
        thatsNotAnArrayThisIsAnArray.push(userToStore);
        const toSendToStorage = JSON.stringify(
            thatsNotAnArrayThisIsAnArray,
            function replacer(key, value) {
                return key === "parentObject" ? undefined : value;
            }
        ); */

        /* this.userList.push(userToStore); */
        /* const toSendToStorage = JSON.stringify(
            this.userList,
            function replacer(key, value) {
                return key === "parentObject" ? undefined : value;
            }
        ); */

        /* console.log(toSendToStorage);
        console.log(JSON.parse(toSendToStorage)); */

        /* localStorage.setItem("userStorage", toSendToStorage); */
        console.log(`this is a list of users before adding:`);
        console.log(this.userList);

        console.log(`this is the user: ${userToStore}`);
        console.log(userToStore);

        /* if (this.doesUserAlreadyExist(userToStore)) {
            const target = this.userList.find((user) => {
                user.name === userToStore.name;
            });
            Object.assign(target, userToStore);
            console.log("boink!");
        } else {
            this.userList.push(userToStore);
            console.log("baaaaank!");
        } */

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
/* harmony import */ var _modules_LoginUI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/LoginUI.js */ "./src/modules/LoginUI.js");




/* const newPage = new UI(); */

const newLogin = new _modules_LoginUI_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxNQUFNLEtBQUssYUFBYSxXQUFXLFVBQVUsWUFBWSxjQUFjLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxRQUFRLGFBQWEsT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssTUFBTSxLQUFLLE1BQU0sT0FBTyxPQUFPLEtBQUssTUFBTSxPQUFPLE9BQU8sS0FBSyxXQUFXLEtBQUssUUFBUSxZQUFZLFVBQVUsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sdUJBQXVCLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxLQUFLLGFBQWEsV0FBVyxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLHVIQUF1SCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLDZD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Q0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDWTtBQUNVOztBQUUzQyw2QkFBNkI7O0FBRTdCLHFCQUFxQiwyREFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL0dlbmVyYXRlUGFnZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL0xpc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL0xvZ2luVUkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvLi9zcmMvbW9kdWxlcy9Vc2VyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tcm91bmQyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby1yb3VuZDIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLXJvdW5kMi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvaWNvbnMvcGx1cy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9pY29ucy9kb3RzLWhvcml6b250YWwtY2lyY2xlLW91dGxpbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWcvaWNvbnMvbWVudS1yaWdodC1vdXRsaW5lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCtBbHRlcm5hdGVzOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZmYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDAuLjkwMDsxLDEwMC4uOTAwJmZhbWlseT1Sb2JvdG8rTW9ubzppdGFsLHdnaHRAMCwxMDAuLjcwMDsxLDEwMC4uNzAwJmZhbWlseT1Sb2JvdG8rU2xhYjp3Z2h0QDEwMC4uOTAwJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmZhbWlseT1VYnVudHU6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tbXV0ZS1jb2xvcjogcmdiKDI1NSwgMTI3LCA4MCwgMC4xKTtcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogMjUzLCAxMDcsIDYyO1xuICAgIC0taGlnaGxpZ2h0LWNvbG9yOiAxNDcsIDI1MiwgMjE3O1xuICAgIC0tZGFyay1zaGFkb3ctY29sb3I6IDAsIDAsIDA7XG4gICAgLS1ib3gtc2hhZG93LXZhbHVlczogMC41cmVtIDAuOHJlbSAwLjA1cmVtO1xuICAgIC0tbWlub3ItYm94LXNoYWRvdy12YWx1ZXM6IDAuM3JlbSAwLjNyZW0gMC4wNXJlbTtcbiAgICAtLWdlbmVyYWwtZm9udDogXCJNb250c2VycmF0XCIsIFwiUm9ib3RvIENvbmRlbnNlZFwiLCBzYW5zLXNlcmlmO1xuICAgIC0tdGl0bGUtZm9udDogXCJSb2JvdG8gU2xhYlwiLCBzZXJpZjtcbiAgICAtLWJhc2UtZm9udC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuOCk7XG4gICAgLS1iYXNlLWZvbnQtc2l6ZTogMXZoO1xuICAgIC0tdGl0bGUtZm9udC1zaXplOiA0cmVtO1xuICAgIC0taGVhZGVyLWZvbnQtc2l6ZTogMnJlbTtcbiAgICAtLWNvbnRlbnQtZm9udC1zaXplOiAxcmVtO1xuICAgIC0tYmFzZS1saW5lLWhlaWdodDogMS4yNTtcbiAgICAtLWNvbnRlbnQtbGluZS1oZWlnaHQ6IDI7XG5cbiAgICBmb250LXNpemU6IHZhcigtLWJhc2UtZm9udC1zaXplKTtcblxuICAgIC0taXRlbS10aXRsZS1mb250LXNpemU6IDEuNXJlbTtcbiAgICAtLWl0ZW0taW5mby1mb250LXNpemU6IDFyZW07XG4gICAgLS1saXN0LXRpdGxlLWZvbnQtc2l6ZTogMnJlbTtcbiAgICAtLWxpc3QtaW5mby1mb250LXNpemU6IDFyZW07XG4gICAgLS1wcm9qZWN0LXRpdGxlLWZvbnQtc2l6ZTogMnJlbTtcbiAgICAtLXByb2plY3QtaW5mby1mb250LXNpemU6IDEuNXJlbTtcbiAgICAtLW5hdi10aXRsZS1mb250LXNpemU6IDEuNXJlbTtcbiAgICAtLW5hdi1pbmZvLWZvbnQtc2l6ZTogMS4yNXJlbTtcblxuICAgIC0tbmF2LWljb24tZGltZW5zaW9uOiAycmVtO1xuXG4gICAgLS1kYXJrLWdyZWVuOiByZ2JhKDQsIDQyLCA0MywgMSk7XG4gICAgLS1tb29uc3RvbmU6IHJnYmEoOTQsIDE3NywgMTkxLCAxKTtcbiAgICAtLWxpZ2h0LWN5YW46IHJnYmEoMjA1LCAyMzcsIDI0NiwgMSk7XG4gICAgLS1vcmFuZ2UtY3JheW9sYTogcmdiYSgyMzksIDEyMywgNjksIDEpO1xuICAgIC0tY2hpbGktcmVkOiByZ2JhKDIxNiwgNzEsIDM5LCAxKTtcblxuICAgIC0tbGFwaXMtbGF6dWxpOiByZ2JhKDM1LCA4NywgMTM3LCAxKTtcbiAgICAtLWltcGVyaWFsLXJlZDogcmdiYSgyNTEsIDU0LCA2NCwgMC4xKTtcbiAgICAtLWFxdWFtYXJpbmU6IHJnYmEoMjIsIDI0NCwgMjA4LCAxKTtcbiAgICAtLXNjaG9vbC1idXMteWVsbG93OiByZ2JhKDI0MSwgMjExLCAyLCAxKTtcbiAgICAtLWJsYWNrOiByZ2JhKDIsIDEsIDAsIDEpO1xuXG4gICAgLS1uYXYtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW1wZXJpYWwtcmVkKTtcbiAgICAtLWNvbnRlbnQtY29udGFpbmVyLWNvbG9yOiByZ2IoMjQyLCAyNDIsIDI0Mik7XG4gICAgLS1wcm9qZWN0LWNvbnRhaW5lci1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXG4gICAgLS1ib3gtc2hhZG93LXZhbHVlczogLTAuNXJlbSAwLjhyZW0gMC41cmVtO1xuICAgIC0tbWlub3ItYm94LXNoYWRvdy12YWx1ZXM6IC0wLjNyZW0gMC4zcmVtIDAuM3JlbTtcbiAgICAtLWRyb3Atc2hhZG93LWNvbG9yOiByZ2IoMCwgMCwgMCwgMC40KTtcblxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgobWluKDEwcmVtLCAxMDAlKSwgMmZyKSBtaW5tYXgoXG4gICAgICAgICAgICBtaW4oMTByZW0sIDEwMCUpLFxuICAgICAgICAgICAgNWZyXG4gICAgICAgICk7XG5cbiAgICBmb250LWZhbWlseTogdmFyKC0tZ2VuZXJhbC1mb250KTtcbiAgICBmb250LXNpemU6IHZhcigtLWdlbmVyYWwtZm9udC1zaXplKTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcblxuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi5uYXYtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMHB4LCAwLjVmcikpOyAqL1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmcjtcblxuICAgIGdhcDogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0LWNvbnRhaW5lci1jb2xvcik7XG4gICAgcGFkZGluZzogNHJlbSAxcmVtO1xuXG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xufVxuXG4ubmF2LXRpdGxlLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcblxuICAgIGZvbnQtc2l6ZTogdmFyKC0tbmF2LXRpdGxlLWZvbnQtc2l6ZSk7XG59XG5cbi5uYXYtdGl0bGUge1xufVxuXG4ubmV3LXByb2plY3QtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaWNvbi1kaW1lbnNpb24pO1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG59XG5cbi5uYXYtY29udGVudC1jb250YWluZXIge1xuICAgIGdyaWQtcm93OiAyIC8gMztcblxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEwMHB4LCBhdXRvKSk7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0OyAqL1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgZm9udC1zaXplOiB2YXIoLS1uYXYtaW5mby1mb250LXNpemUpO1xuICAgIC8qIG92ZXJmbG93OiBzY3JvbGw7ICovXG5cbiAgICBib3JkZXI6IHNvbGlkIHJlZCAxcHg7XG59XG5cbi5uYXYtcHJvamVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xuXG4gICAgLyogaGVpZ2h0OiBtaW5tYXgoNTBweCwgMTAwcHgpOyAqL1xuXG4gICAgYm9yZGVyOiBzb2xpZCBwaW5rIDFweDtcbn1cblxuLm5hdi1wcm9qZWN0LXRpdGxlLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuLm5hdi1wcm9qZWN0LXRpdGxlLWljb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbn1cblxuLm5hdi1wcm9qZWN0LXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubmF2LXByb2plY3QtY29udGVudC1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICAvKiBoZWlnaHQ6IDIwMHB4OyAqL1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgeWVsbG93O1xufVxuXG4ubmF2LWxpc3QtdGl0bGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjJyZW07XG59XG5cbi5uYXYtbGlzdC10aXRsZS1pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaWNvbi1kaW1lbnNpb24pO1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG59XG5cbi5uYXYtbGlzdC10aXRsZSB7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1jb250YWluZXItY29sb3IpO1xuICAgIC8qIGJvcmRlcjogc29saWQgMXB4IHJlZDsgKi9cblxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdmFsdWVzKSB2YXIoLS1kcm9wLXNoYWRvdy1jb2xvcik7ICovXG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gcmVwZWF0KGF1dG8tZmlsbCwgMWZyKTsgKi9cbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDZyZW0gMWZyO1xuXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1tdXRlLWNvbG9yKSwgMSk7ICovXG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgZ2FwOiAwLjVyZW07XG5cbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAvKiBvdmVyZmxvdzogc2Nyb2xsOyAqL1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0LWNvbnRhaW5lci1jb2xvcik7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMpXG4gICAgICAgIHJnYmEodmFyKC0tZHJvcC1zaGFkb3ctY29sb3ItY29sb3IpLCAwLjUpO1xuXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG59XG5cbi5wcm9qZWN0LXRpdGxlLWNvbnRhaW5lciB7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnI7XG4gICAgZm9udC1zaXplOiB2YXIoLS1wcm9qZWN0LWluZm8tZm9udC1zaXplKTtcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcbn1cblxuLnByb2plY3QtaW5mby1jb250YWluZXIge1xuICAgIGJvcmRlcjogc29saWQgcmVkIDFweDtcbn1cblxuLnByb2plY3QtY29udHJvbC1jb250YWluZXIge1xuICAgIGJvcmRlcjogc29saWQgYmx1ZSAxcHg7XG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IHZhcigtLXByb2plY3QtdGl0bGUtZm9udC1zaXplKTtcbn1cblxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xufVxuXG4ubmV3LXByb2plY3QtbGlzdC1idXR0b24ge1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9pY29ucy9wbHVzLnN2Zyk7XG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaWNvbi1kaW1lbnNpb24pO1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7ICovXG59XG5cbi5jbG9zZS1wcm9qZWN0LWJ1dHRvbiB7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2ljb25zL2Nsb3NlLWJveC1vdXRsaW5lLnN2Zyk7XG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaWNvbi1kaW1lbnNpb24pO1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7ICovXG59XG5cbi5wcm9qZWN0LWNhcmQtY29udGFpbmVyIHtcbiAgICBncmlkLXJvdzogMiAvIDM7XG5cbiAgICAvKiBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvOyAqL1xuXG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBib3JkZXI6IHNvbGlkIGdyZWVuIDFweDtcbn1cblxuLmxpc3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMC41cmVtO1xuXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1zZWNvbmRhcnktY29sb3IpLCAwLjUpOyAqL1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm94LXNoYWRvdzogdmFyKC0tbWlub3ItYm94LXNoYWRvdy12YWx1ZXMpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKTtcbiAgICAvKiBib3JkZXItcmFkaXVzOiAwLjVyZW07ICovXG59XG5cbi5saXN0LXRpdGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnI7XG4gICAgZm9udC1zaXplOiB2YXIoLS1saXN0LWluZm8tZm9udC1zaXplKTtcbn1cblxuLmxpc3QtaW5mby1jb250YWluZXIge1xufVxuXG4ubGlzdC10aXRsZSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1saXN0LXRpdGxlLWZvbnQtc2l6ZSk7XG59XG5cbi5saXN0LWRlc2NyaXB0aW9uIHtcbn1cblxuLm5ldy1saXN0LWl0ZW0tYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1uYXYtaWNvbi1kaW1lbnNpb24pO1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG59XG5cbi5pdGVtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgMWZyO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSwgMC41KTsgKi9cbn1cblxuLml0ZW0tY2hlY2tib3gtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pdGVtLWNoZWNrYm94IHtcbn1cblxuLyogaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xuICAgIGhlaWdodDogMWVtO1xuICAgIHdpZHRoOiAxZW07XG5cbiAgICBiYWNrZ3JvdW5kOiAjMGEwYTBhO1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDAuNjVlbTtcbiAgICBoZWlnaHQ6IDAuNjVlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtIHZhcigtLWZvcm0tY29udHJvbC1jb2xvcik7XG59ICovXG5cbi5pdGVtLWluZm8tY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pdGVtLWluZm8tZm9udC1zaXplKTtcbn1cblxuLml0ZW0tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taXRlbS10aXRsZS1mb250LXNpemUpO1xufVxuXG4uaXRlbS1kZXNjcmlwdGlvbiB7XG59XG5cbi5pdGVtLWR1ZS1kYXRlIHtcbn1cblxuLml0ZW0tcmVtb3ZlLWJ1dHRvbiB7XG59XG5cbi5sb2dpbi1wYWdlLWJvZHkge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4ubG9naW4tY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udXNlci1uYW1lLW9wdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWdlbmVyYWwtZm9udCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1pdGVtLXRpdGxlLWZvbnQtc2l6ZSk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyw0QkFBNEI7SUFDNUIsMENBQTBDO0lBQzFDLGdEQUFnRDtJQUNoRCw0REFBNEQ7SUFDNUQsa0NBQWtDO0lBQ2xDLG9DQUFvQztJQUNwQyxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLHdCQUF3Qjs7SUFFeEIsZ0NBQWdDOztJQUVoQyw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsNkJBQTZCOztJQUU3QiwwQkFBMEI7O0lBRTFCLGdDQUFnQztJQUNoQyxrQ0FBa0M7SUFDbEMsb0NBQW9DO0lBQ3BDLHVDQUF1QztJQUN2QyxpQ0FBaUM7O0lBRWpD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SSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHlEQUF5RDtBQUM3RDs7QUFFQTtJQUNJLGtCQUFrQjs7SUFFbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRzs7QUFFSDtJQUNJLGtCQUFrQjtJQUNsQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7SUFDSSxrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsK0JBQStCOztJQUUvQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZixzQkFBc0I7O0lBRXRCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxzQ0FBc0M7QUFDMUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCtBbHRlcm5hdGVzOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZmYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDAuLjkwMDsxLDEwMC4uOTAwJmZhbWlseT1Sb2JvdG8rTW9ubzppdGFsLHdnaHRAMCwxMDAuLjcwMDsxLDEwMC4uNzAwJmZhbWlseT1Sb2JvdG8rU2xhYjp3Z2h0QDEwMC4uOTAwJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmZhbWlseT1VYnVudHU6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG4gICAgLS1tdXRlLWNvbG9yOiByZ2IoMjU1LCAxMjcsIDgwLCAwLjEpO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogMjUzLCAxMDcsIDYyO1xcbiAgICAtLWhpZ2hsaWdodC1jb2xvcjogMTQ3LCAyNTIsIDIxNztcXG4gICAgLS1kYXJrLXNoYWRvdy1jb2xvcjogMCwgMCwgMDtcXG4gICAgLS1ib3gtc2hhZG93LXZhbHVlczogMC41cmVtIDAuOHJlbSAwLjA1cmVtO1xcbiAgICAtLW1pbm9yLWJveC1zaGFkb3ctdmFsdWVzOiAwLjNyZW0gMC4zcmVtIDAuMDVyZW07XFxuICAgIC0tZ2VuZXJhbC1mb250OiBcXFwiTW9udHNlcnJhdFxcXCIsIFxcXCJSb2JvdG8gQ29uZGVuc2VkXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgLS10aXRsZS1mb250OiBcXFwiUm9ib3RvIFNsYWJcXFwiLCBzZXJpZjtcXG4gICAgLS1iYXNlLWZvbnQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjgpO1xcbiAgICAtLWJhc2UtZm9udC1zaXplOiAxdmg7XFxuICAgIC0tdGl0bGUtZm9udC1zaXplOiA0cmVtO1xcbiAgICAtLWhlYWRlci1mb250LXNpemU6IDJyZW07XFxuICAgIC0tY29udGVudC1mb250LXNpemU6IDFyZW07XFxuICAgIC0tYmFzZS1saW5lLWhlaWdodDogMS4yNTtcXG4gICAgLS1jb250ZW50LWxpbmUtaGVpZ2h0OiAyO1xcblxcbiAgICBmb250LXNpemU6IHZhcigtLWJhc2UtZm9udC1zaXplKTtcXG5cXG4gICAgLS1pdGVtLXRpdGxlLWZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAtLWl0ZW0taW5mby1mb250LXNpemU6IDFyZW07XFxuICAgIC0tbGlzdC10aXRsZS1mb250LXNpemU6IDJyZW07XFxuICAgIC0tbGlzdC1pbmZvLWZvbnQtc2l6ZTogMXJlbTtcXG4gICAgLS1wcm9qZWN0LXRpdGxlLWZvbnQtc2l6ZTogMnJlbTtcXG4gICAgLS1wcm9qZWN0LWluZm8tZm9udC1zaXplOiAxLjVyZW07XFxuICAgIC0tbmF2LXRpdGxlLWZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAtLW5hdi1pbmZvLWZvbnQtc2l6ZTogMS4yNXJlbTtcXG5cXG4gICAgLS1uYXYtaWNvbi1kaW1lbnNpb246IDJyZW07XFxuXFxuICAgIC0tZGFyay1ncmVlbjogcmdiYSg0LCA0MiwgNDMsIDEpO1xcbiAgICAtLW1vb25zdG9uZTogcmdiYSg5NCwgMTc3LCAxOTEsIDEpO1xcbiAgICAtLWxpZ2h0LWN5YW46IHJnYmEoMjA1LCAyMzcsIDI0NiwgMSk7XFxuICAgIC0tb3JhbmdlLWNyYXlvbGE6IHJnYmEoMjM5LCAxMjMsIDY5LCAxKTtcXG4gICAgLS1jaGlsaS1yZWQ6IHJnYmEoMjE2LCA3MSwgMzksIDEpO1xcblxcbiAgICAtLWxhcGlzLWxhenVsaTogcmdiYSgzNSwgODcsIDEzNywgMSk7XFxuICAgIC0taW1wZXJpYWwtcmVkOiByZ2JhKDI1MSwgNTQsIDY0LCAwLjEpO1xcbiAgICAtLWFxdWFtYXJpbmU6IHJnYmEoMjIsIDI0NCwgMjA4LCAxKTtcXG4gICAgLS1zY2hvb2wtYnVzLXllbGxvdzogcmdiYSgyNDEsIDIxMSwgMiwgMSk7XFxuICAgIC0tYmxhY2s6IHJnYmEoMiwgMSwgMCwgMSk7XFxuXFxuICAgIC0tbmF2LWJhY2tncm91bmQtY29sb3I6IHZhcigtLWltcGVyaWFsLXJlZCk7XFxuICAgIC0tY29udGVudC1jb250YWluZXItY29sb3I6IHJnYigyNDIsIDI0MiwgMjQyKTtcXG4gICAgLS1wcm9qZWN0LWNvbnRhaW5lci1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcblxcbiAgICAtLWJveC1zaGFkb3ctdmFsdWVzOiAtMC41cmVtIDAuOHJlbSAwLjVyZW07XFxuICAgIC0tbWlub3ItYm94LXNoYWRvdy12YWx1ZXM6IC0wLjNyZW0gMC4zcmVtIDAuM3JlbTtcXG4gICAgLS1kcm9wLXNoYWRvdy1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNCk7XFxuXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChtaW4oMTByZW0sIDEwMCUpLCAyZnIpIG1pbm1heChcXG4gICAgICAgICAgICBtaW4oMTByZW0sIDEwMCUpLFxcbiAgICAgICAgICAgIDVmclxcbiAgICAgICAgKTtcXG5cXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWdlbmVyYWwtZm9udCk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZ2VuZXJhbC1mb250LXNpemUpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5uYXYtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW0gcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTBweCwgMC41ZnIpKTsgKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyO1xcblxcbiAgICBnYXA6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3QtY29udGFpbmVyLWNvbG9yKTtcXG4gICAgcGFkZGluZzogNHJlbSAxcmVtO1xcblxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG59XFxuXFxuLm5hdi10aXRsZS1jb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG5cXG4gICAgZm9udC1zaXplOiB2YXIoLS1uYXYtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLm5hdi10aXRsZSB7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvcGx1cy5zdmcpO1xcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbi5uYXYtY29udGVudC1jb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuXFxuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTAwcHgsIGF1dG8pKTtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0OyAqL1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBmb250LXNpemU6IHZhcigtLW5hdi1pbmZvLWZvbnQtc2l6ZSk7XFxuICAgIC8qIG92ZXJmbG93OiBzY3JvbGw7ICovXFxuXFxuICAgIGJvcmRlcjogc29saWQgcmVkIDFweDtcXG59XFxuXFxuLm5hdi1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG5cXG4gICAgLyogaGVpZ2h0OiBtaW5tYXgoNTBweCwgMTAwcHgpOyAqL1xcblxcbiAgICBib3JkZXI6IHNvbGlkIHBpbmsgMXB4O1xcbn1cXG5cXG4ubmF2LXByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLm5hdi1wcm9qZWN0LXRpdGxlLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvZG90cy1ob3Jpem9udGFsLWNpcmNsZS1vdXRsaW5lLnN2Zyk7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLm5hdi1wcm9qZWN0LXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLm5hdi1wcm9qZWN0LWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICAvKiBoZWlnaHQ6IDIwMHB4OyAqL1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7XFxufVxcblxcbi5uYXYtbGlzdC10aXRsZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuMnJlbTtcXG59XFxuXFxuLm5hdi1saXN0LXRpdGxlLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvbWVudS1yaWdodC1vdXRsaW5lLnN2Zyk7XFxuICAgIGhlaWdodDogdmFyKC0tbmF2LWljb24tZGltZW5zaW9uKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLm5hdi1saXN0LXRpdGxlIHtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtY29udGFpbmVyLWNvbG9yKTtcXG4gICAgLyogYm9yZGVyOiBzb2xpZCAxcHggcmVkOyAqL1xcblxcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdmFsdWVzKSB2YXIoLS1kcm9wLXNoYWRvdy1jb2xvcik7ICovXFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSByZXBlYXQoYXV0by1maWxsLCAxZnIpOyAqL1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDZyZW0gMWZyO1xcblxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLW11dGUtY29sb3IpLCAxKTsgKi9cXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBnYXA6IDAuNXJlbTtcXG5cXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICAvKiBvdmVyZmxvdzogc2Nyb2xsOyAqL1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiAwLjVyZW07ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3QtY29udGFpbmVyLWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy12YWx1ZXMpXFxuICAgICAgICByZ2JhKHZhcigtLWRyb3Atc2hhZG93LWNvbG9yLWNvbG9yKSwgMC41KTtcXG5cXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyO1xcbiAgICBmb250LXNpemU6IHZhcigtLXByb2plY3QtaW5mby1mb250LXNpemUpO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG59XFxuXFxuLnByb2plY3QtaW5mby1jb250YWluZXIge1xcbiAgICBib3JkZXI6IHNvbGlkIHJlZCAxcHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRyb2wtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiBzb2xpZCBibHVlIDFweDtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgICBmb250LXNpemU6IHZhcigtLXByb2plY3QtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xcbn1cXG5cXG4ubmV3LXByb2plY3QtbGlzdC1idXR0b24ge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvcGx1cy5zdmcpO1xcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7ICovXFxufVxcblxcbi5jbG9zZS1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9pY29ucy9jbG9zZS1ib3gtb3V0bGluZS5zdmcpO1xcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7ICovXFxufVxcblxcbi5wcm9qZWN0LWNhcmQtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcblxcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tcm93czogYXV0bzsgKi9cXG5cXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBib3JkZXI6IHNvbGlkIGdyZWVuIDFweDtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSwgMC41KTsgKi9cXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tbWlub3ItYm94LXNoYWRvdy12YWx1ZXMpIHZhcigtLWRyb3Atc2hhZG93LWNvbG9yKTtcXG4gICAgLyogYm9yZGVyLXJhZGl1czogMC41cmVtOyAqL1xcbn1cXG5cXG4ubGlzdC10aXRsZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnI7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tbGlzdC1pbmZvLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5saXN0LWluZm8tY29udGFpbmVyIHtcXG59XFxuXFxuLmxpc3QtdGl0bGUge1xcbiAgICBmb250LXNpemU6IHZhcigtLWxpc3QtdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXFxuLmxpc3QtZGVzY3JpcHRpb24ge1xcbn1cXG5cXG4ubmV3LWxpc3QtaXRlbS1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvaWNvbnMvcGx1cy5zdmcpO1xcbiAgICBoZWlnaHQ6IHZhcigtLW5hdi1pY29uLWRpbWVuc2lvbik7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbi5pdGVtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciAxZnI7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSwgMC41KTsgKi9cXG59XFxuXFxuLml0ZW0tY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLml0ZW0tY2hlY2tib3gge1xcbn1cXG5cXG4vKiBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gICAgaGVpZ2h0OiAxZW07XFxuICAgIHdpZHRoOiAxZW07XFxuXFxuICAgIGJhY2tncm91bmQ6ICMwYTBhMGE7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAwLjY1ZW07XFxuICAgIGhlaWdodDogMC42NWVtO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tZm9ybS1jb250cm9sLWNvbG9yKTtcXG59ICovXFxuXFxuLml0ZW0taW5mby1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taXRlbS1pbmZvLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5pdGVtLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1pdGVtLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5pdGVtLWRlc2NyaXB0aW9uIHtcXG59XFxuXFxuLml0ZW0tZHVlLWRhdGUge1xcbn1cXG5cXG4uaXRlbS1yZW1vdmUtYnV0dG9uIHtcXG59XFxuXFxuLmxvZ2luLXBhZ2UtYm9keSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmcjtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4ubG9naW4tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udXNlci1uYW1lLW9wdGlvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1nZW5lcmFsLWZvbnQpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWl0ZW0tdGl0bGUtZm9udC1zaXplKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICBlbGVtZW50VHlwZSxcbiAgICBlbGVtZW50Q2xhc3NlcyA9IHt9LFxuICAgIHBhcmVudEVsZW1lbnQgPSBudWxsLFxuICAgIGVsZW1lbnRUZXh0ID0gbnVsbFxuKSB7XG4gICAgaWYgKGVsZW1lbnRUeXBlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG5cbiAgICBpZiAoZWxlbWVudENsYXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBlbGVtZW50Q2xhc3Nlcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudFRleHQgIT0gbnVsbCkge1xuICAgICAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudFRleHQ7XG4gICAgfVxuXG4gICAgaWYgKHBhcmVudEVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJOb2RlQ29udGVudCh0aGlzTm9kZSkge1xuICAgIHdoaWxlICh0aGlzTm9kZS5maXJzdENoaWxkKSB7XG4gICAgICAgIHRoaXNOb2RlLnJlbW92ZUNoaWxkKHRoaXNOb2RlLmxhc3RDaGlsZCk7XG4gICAgfVxufVxuIiwiLy9pbXBvcnQgKiBhcyBUYXNrIGZyb20gXCIuL1Rhc2suanNcIjtcbi8vaW1wb3J0ICogYXMgR2VuZXJhdGVFbGVtZW50IGZyb20gXCIuL0dlbmVyYXRlUGFnZUVsZW1lbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gXCJObyBkZXNjcmlwdGlvbiBzZXRcIixcbiAgICAgICAgdGFza3MgPSBbXSxcbiAgICAgICAgcGFyZW50UHJvamVjdFxuICAgICkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QgPSBwYXJlbnRQcm9qZWN0O1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXRUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3M7XG4gICAgfVxuXG4gICAgc2V0VGFza3ModGFza3NMaXN0KSB7XG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrc0xpc3Q7XG4gICAgfVxuXG4gICAgZ2V0VGFzayh0YXNrTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gdGFza05hbWUpO1xuICAgIH1cblxuICAgIGNvbnRhaW5zVGFzayh0YXNrTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PSB0YXNrTmFtZSk7XG4gICAgfVxuXG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluc1Rhc2sobmV3VGFzay5nZXROYW1lKCkpKSB7XG4gICAgICAgICAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVUYXNrKHRhc2tOYW1lKSB7XG4gICAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5nZXROYW1lKCkgIT09IHRhc2tOYW1lKTtcbiAgICB9XG5cbiAgICBzZXRDb250YWluZXJOb2RlKGNvbnRhaW5lck5vZGUpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJOb2RlID0gY29udGFpbmVyTm9kZTtcbiAgICB9XG5cbiAgICBnZXRDb250YWluZXJOb2RlKCkge1xuICAgICAgICBpZiAodGhpcy5jb250YWluZXJOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXJOb2RlO1xuICAgICAgICB9XG4gICAgICAgIC8vVE9ETzogU2hvdWxkIHRoZXJlIGJlIGEgcmV0dXJuIHZhbHVlIGlmIHRoZXJlIGlzbid0IGEgbm9kZSBhc3NpZ25lZCBhbHJlYWR5P1xuICAgICAgICAvL1Nob3VsZCB0aGlzIHByb3BlcnR5IGp1c3QgYmUgaW5pdGlhbGl6ZWQgYXMgYSBibGFuayBzb21laG93IHdoZW4gdGhpcyBvYmplY3QgaXMgY3JlYXRlZD9cbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBHZW5lcmF0ZUVsZW1lbnQgZnJvbSBcIi4vR2VuZXJhdGVQYWdlRWxlbWVudC5qc1wiO1xuaW1wb3J0IFVJIGZyb20gXCIuL1VJLmpzXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9TdG9yYWdlLmpzXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luVUkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5ld1N0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xuICAgICAgICB0aGlzLnVzZXJMaXN0ID0gdGhpcy5uZXdTdG9yYWdlLmdldFVzZXJzKCk7XG5cbiAgICAgICAgdGhpcy5wYWdlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgICB0aGlzLmxvZ2luUGFnZUJvZHkgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJsb2dpbi1wYWdlLWJvZHlcIl0sXG4gICAgICAgICAgICB0aGlzLnBhZ2VCb2R5XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubG9naW5Db250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJsb2dpbi1jb250YWluZXJcIl0sXG4gICAgICAgICAgICB0aGlzLmxvZ2luUGFnZUJvZHlcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLm5ld1VzZXJCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuZXctdXNlci1idXR0b25cIl0sXG4gICAgICAgICAgICB0aGlzLmxvZ2luQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJDcmVhdGUgbmV3IFVzZXJcIlxuICAgICAgICApO1xuICAgICAgICB0aGlzLm5ld1VzZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIC8vanVzdCBnb25uYSBhZGQgaXQgdG8gdGhlIGxpc3Qgb2YgcG90ZW50aWFsIHVzZXJzIGZvciBub3dcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTmV3VXNlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVzZXJMaXN0Q29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1widXNlci1saXN0LWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHRoaXMubG9naW5Db250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmNyZWF0ZVVzZXJMaXN0RGl2KCk7XG4gICAgfVxuXG4gICAgLy9UT0RPOiBHZXQgYW5kIHJldHVybiBhcnJheSBvZiB1c2VycyBmcm9tIGxvY2FsU3RvcmFnZVxuICAgIC8qIG9wZW5Vc2VycygpIHt9ICovXG5cbiAgICBjcmVhdGVVc2VyTGlzdERpdigpIHtcbiAgICAgICAgdGhpcy51c2VyTGlzdC5mb3JFYWNoKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXJMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlTmV3VXNlckRpdih1c2VyKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyVXNlckxpc3REaXYoKSB7XG4gICAgICAgIHRoaXMudXNlckxpc3RDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgfVxuXG4gICAgcmVsb2FkVXNlckxpc3QoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJVc2VyTGlzdERpdigpO1xuICAgICAgICB0aGlzLmNyZWF0ZVVzZXJMaXN0RGl2KCk7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3VXNlckRpdih1c2VyKSB7XG4gICAgICAgIGNvbnN0IHVzZXJEaXYgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJ1c2VyLW5hbWUtb3B0aW9uXCJdLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHVzZXIubmFtZVxuICAgICAgICApO1xuICAgICAgICB1c2VyRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU5ld1VJKHVzZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXNlckRpdjtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdVSSh1c2VyKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQYWdlQm9keSgpO1xuICAgICAgICBjb25zdCBuZXdQYWdlID0gbmV3IFVJKHVzZXIsIHRoaXMubmV3U3RvcmFnZSk7XG4gICAgfVxuXG4gICAgY2xlYXJQYWdlQm9keSgpIHtcbiAgICAgICAgdGhpcy5wYWdlQm9keS5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdVc2VyKCkge1xuICAgICAgICAvL1Byb21wdCBmb3IgdXNlciBpbmZvXG4gICAgICAgIGNvbnN0IG5ld1VzZXJOYW1lID0gcHJvbXB0KFwiTmV3IFVzZXIgbmFtZT9cIik7XG5cbiAgICAgICAgLy9jcmVhdGUgbmV3IHVzZXJcbiAgICAgICAgY29uc3QgbmV3VXNlciA9IG5ldyBVc2VyKG5ld1VzZXJOYW1lLCBbXSwgdGhpcy51c2VyTGlzdCk7XG5cbiAgICAgICAgLy9BZGQgaXQgYXMgYW4gYWN0dWFsIGNoaWxkIG9mIHRoZSBTdG9yYWdlIHVzZXIgYXJyYXlcbiAgICAgICAgdGhpcy5uZXdTdG9yYWdlLnNpbXBsZVNlbmRUb1N0b3JhZ2UobmV3VXNlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmV3U3RvcmFnZS5nZXRVc2VycygpfWApO1xuXG4gICAgICAgIHRoaXMucmVsb2FkVXNlckxpc3QoKTtcblxuICAgICAgICAvL1NhdmUgdGhlIFN0b3JhZ2UgYXJyYXkgb2YgdXNlcnMgdG8gbG9jYWxTdG9yYWdlIHRvIG1haW50YWluIHN0YXRlIG9uIHBhZ2UgcmVsb2FkXG5cbiAgICAgICAgLyogY29uc29sZS5sb2coYG5ldyB1c2VyIG5hbWVkOiAke25ld1VzZXIubmFtZX1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYG5ldyB1c2VyIHBhcmVudDogJHtuZXdVc2VyLnBhcmVudE9iamVjdH1gKTsgKi9cblxuICAgICAgICAvL21ha2Ugc3VyZSB1c2VyIHBhcmVudCBjb250YWluZXIgaXMgb2JqZWN0XG4gICAgICAgIC8vRG8gSSBuZWVkIHRvIHNhdmUgdGhpcyBuZXcgb2JqZWN0IGltbWVkaWF0ZWx5P1xuICAgICAgICAvL0RvIGkgbmVlZCB0byBhbHRlciB0aGUgc2F2ZSBmdW5jdGlvbiB0byBpbmNsdWRlIGFsbCBvYmplY3RzXG5cbiAgICAgICAgLy9TaG91bGQgdGhpcyBhbHNvIG9wZW4gdGhlIG1haW4gVUkgd2l0aCBuZXcgdXNlciBhbmQgbm8gcHJvamVjdHMsIGV0Yz9cbiAgICB9XG59XG4iLCIvL2ltcG9ydCAqIGFzIExpc3QgZnJvbSBcIi4vTGlzdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICAvL1RPRE86IFNob3VsZCB0aGUgcHJvamVjdCBoYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBVSSBlbGVtZW50IGNvbnRhaW5pbmcgaXQncyBpbmZvcm1hdGlvbiB0byBtYWtlIHVwZGF0aW5nIHNhaWQgVUkgZWxlbWVudCBlYXNpZXI/XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gXCJObyBkZXNjcmlwdGlvbiBzZXRcIixcbiAgICAgICAgbGlzdHMgPSBbXSxcbiAgICAgICAgcGFyZW50VXNlclxuICAgICkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMubGlzdHMgPSBsaXN0cztcbiAgICAgICAgdGhpcy5wYXJlbnRPYmplY3QgPSBwYXJlbnRVc2VyO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXRUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdHM7XG4gICAgfVxuXG4gICAgc2V0TGlzdHMobGlzdHMpIHtcbiAgICAgICAgdGhpcy5saXN0cyA9IGxpc3RzO1xuICAgIH1cblxuICAgIGNvbnRhaW5zTGlzdChsaXN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0cy5zb21lKChsaXN0KSA9PiBsaXN0LmdldE5hbWUoKSA9PSBsaXN0TmFtZSk7XG4gICAgfVxuXG4gICAgYWRkTGlzdChuZXdMaXN0KSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluc0xpc3QobmV3TGlzdC5nZXROYW1lKCkpKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RzLnB1c2gobmV3TGlzdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVMaXN0KGxpc3ROYW1lKSB7XG4gICAgICAgIHRoaXMubGlzdHMgPSB0aGlzLmxpc3RzLmZpbHRlcigobGlzdCkgPT4gbGlzdC5nZXROYW1lKCkgIT09IGxpc3ROYW1lKTtcbiAgICB9XG5cbiAgICBzZXRDb250YWluZXJOb2RlKGNvbnRhaW5lck5vZGUpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJOb2RlID0gY29udGFpbmVyTm9kZTtcbiAgICB9XG5cbiAgICBnZXRDb250YWluZXJOb2RlKCkge1xuICAgICAgICBpZiAodGhpcy5jb250YWluZXJOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXJOb2RlO1xuICAgICAgICB9XG4gICAgICAgIC8vVE9ETzogU2hvdWxkIHRoZXJlIGJlIGEgcmV0dXJuIHZhbHVlIGlmIHRoZXJlIGlzbid0IGEgbm9kZSBhc3NpZ25lZCBhbHJlYWR5P1xuICAgICAgICAvL1Nob3VsZCB0aGlzIHByb3BlcnR5IGp1c3QgYmUgaW5pdGlhbGl6ZWQgYXMgYSBibGFuayBzb21laG93IHdoZW4gdGhpcyBvYmplY3QgaXMgY3JlYXRlZD9cbiAgICB9XG59XG4iLCIvL2ltcG9ydCBVc2VyIGZyb20gXCIuL1VzZXIuanNcIjtcbmltcG9ydCBzdG9yYWdlRmlsZSBmcm9tIFwiLi91c2VyU3RvcmFnZS5qc29uXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrLmpzXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9MaXN0LmpzXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0LmpzXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBqc29uVGV4dE9mU3RvcmVkVXNlckFycmF5ID0gdGhpcy5nZXRGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIC8qIGNvbnNvbGUubG9nKGBqc29uVGV4dE9mU3RvcmVkVXNlckFycmF5OiAke2pzb25UZXh0T2ZTdG9yZWRVc2VyQXJyYXl9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBqc29uVGV4dE9mU3RvcmVkVXNlckFycmF5KTtcbiAgICAgICAgY29uc29sZS5sb2coanNvblRleHRPZlN0b3JlZFVzZXJBcnJheSk7ICovXG4gICAgICAgIC8qIGNvbnNvbGUubG9nKGpzb25UZXh0KTtcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIGpzb25UZXh0KTsgKi9cbiAgICAgICAgdGhpcy51c2VyTGlzdCA9IHRoaXMucGFyc2VVc2Vycyhqc29uVGV4dE9mU3RvcmVkVXNlckFycmF5KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyTGlzdCk7XG4gICAgfVxuXG4gICAgZ2V0VXNlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJMaXN0O1xuICAgIH1cblxuICAgIC8vVE9ETzogRG8gd2UgbmVlZCBhIHVzZXIgY29udGFpbmVyIG9iamVjdCB0byB0aGVuIGJlIGFibGUgdG8gY29tbWl0IGJhY2sgaW50byB0aGUganNvbiBmaWxlP1xuXG4gICAgcGFyc2VVc2Vycyhqc29uVGV4dE9mU3RvcmVkVXNlckFycmF5KSB7XG4gICAgICAgIGNvbnN0IHVzZXJzID0gW107XG5cbiAgICAgICAganNvblRleHRPZlN0b3JlZFVzZXJBcnJheS5mb3JFYWNoKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VyTmFtZSA9IHVzZXIubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1VzZXIgPSBuZXcgVXNlcih1c2VyTmFtZSwgW10sIGpzb25UZXh0T2ZTdG9yZWRVc2VyQXJyYXkpO1xuICAgICAgICAgICAgY29uc3QgdXNlclByb2plY3RzID0gdGhpcy5wYXJzZVByb2plY3RzKHVzZXIucHJvamVjdHMsIG5ld1VzZXIpO1xuICAgICAgICAgICAgbmV3VXNlci5zZXRQcm9qZWN0cyh1c2VyUHJvamVjdHMpO1xuICAgICAgICAgICAgdXNlcnMucHVzaChuZXdVc2VyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHVzZXJzO1xuICAgIH1cblxuICAgIC8vQ3JlYXRlIHBhcmVudCB1c2VyIGZpcnN0IGFuZCAqdGhlbiogZ2VuZXJhdGUgdGhlIGxpc3Qgb2YgcHJvamVjdHMgb25jZSB0aGUgdXNlciBvYmplY3QgYWxyZWFkeSBleGlzdHM/XG5cbiAgICBwYXJzZVByb2plY3RzKGpzb25Qcm9qZWN0cywgcGFyZW50VXNlcikge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuICAgICAgICBqc29uUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KFxuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICBwYXJlbnRVc2VyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpc3RzID0gdGhpcy5wYXJzZUxpc3RzKHByb2plY3QubGlzdHMsIG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgbmV3UHJvamVjdC5zZXRMaXN0cyhwcm9qZWN0TGlzdHMpO1xuICAgICAgICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICB9XG5cbiAgICBwYXJzZUxpc3RzKGpzb25MaXN0cywgcGFyZW50UHJvamVjdCkge1xuICAgICAgICBjb25zdCBsaXN0cyA9IFtdO1xuICAgICAgICBqc29uTGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdE5hbWUgPSBsaXN0Lm5hbWU7XG4gICAgICAgICAgICBjb25zdCBsaXN0RGVzY3JpcHRpb24gPSBsaXN0LmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IG5ldyBMaXN0KFxuICAgICAgICAgICAgICAgIGxpc3ROYW1lLFxuICAgICAgICAgICAgICAgIGxpc3REZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICBwYXJlbnRQcm9qZWN0XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgbGlzdFRhc2tzID0gdGhpcy5wYXJzZVRhc2tzKGxpc3QudGFza3MsIG5ld0xpc3QpO1xuICAgICAgICAgICAgbmV3TGlzdC5zZXRUYXNrcyhsaXN0VGFza3MpO1xuICAgICAgICAgICAgbGlzdHMucHVzaChuZXdMaXN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBsaXN0cztcbiAgICB9XG5cbiAgICBwYXJzZVRhc2tzKGpzb25UYXNrcywgcGFyZW50TGlzdCkge1xuICAgICAgICBjb25zdCB0YXNrcyA9IFtdO1xuICAgICAgICBqc29uVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSB0YXNrLm5hbWU7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgICAgICBjb25zdCB0YXNrQ2hlY2tlZCA9IHRhc2suY2hlY2tlZDtcblxuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFxuICAgICAgICAgICAgICAgIHRhc2tOYW1lLFxuICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlLFxuICAgICAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBwYXJlbnRMaXN0LFxuICAgICAgICAgICAgICAgIHRhc2tDaGVja2VkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGFza3MucHVzaChuZXdUYXNrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0YXNrcztcbiAgICB9XG5cbiAgICAvL1JldHVybnMgYW4gYXJyYXkgb2YgdXNlciBvYmplY3RzIGVpdGhlciBmcm9tIGJhc2UgZmlsZSBvciBmcm9tIHRoZSBzdG9yZWQgZmlsZSBvZiB1c2Vyc1xuICAgIGdldEZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlZFVzZXJzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyU3RvcmFnZVwiKTtcblxuICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclN0b3JhZ2VcIikpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmxpcG8hXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2VGaWxlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0b3JlZFVzZXJzKTtcbiAgICB9XG5cbiAgICBzaW1wbGVTZW5kVG9TdG9yYWdlKHVzZXJUb1N0b3JlKSB7XG4gICAgICAgIC8qIGNvbnN0IHRoYXRzTm90QW5BcnJheVRoaXNJc0FuQXJyYXkgPSBbXTtcbiAgICAgICAgdGhhdHNOb3RBbkFycmF5VGhpc0lzQW5BcnJheS5wdXNoKHVzZXJUb1N0b3JlKTtcbiAgICAgICAgY29uc3QgdG9TZW5kVG9TdG9yYWdlID0gSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICB0aGF0c05vdEFuQXJyYXlUaGlzSXNBbkFycmF5LFxuICAgICAgICAgICAgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXkgPT09IFwicGFyZW50T2JqZWN0XCIgPyB1bmRlZmluZWQgOiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTsgKi9cblxuICAgICAgICAvKiB0aGlzLnVzZXJMaXN0LnB1c2godXNlclRvU3RvcmUpOyAqL1xuICAgICAgICAvKiBjb25zdCB0b1NlbmRUb1N0b3JhZ2UgPSBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgIHRoaXMudXNlckxpc3QsXG4gICAgICAgICAgICBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleSA9PT0gXCJwYXJlbnRPYmplY3RcIiA/IHVuZGVmaW5lZCA6IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICApOyAqL1xuXG4gICAgICAgIC8qIGNvbnNvbGUubG9nKHRvU2VuZFRvU3RvcmFnZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UodG9TZW5kVG9TdG9yYWdlKSk7ICovXG5cbiAgICAgICAgLyogbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyU3RvcmFnZVwiLCB0b1NlbmRUb1N0b3JhZ2UpOyAqL1xuICAgICAgICBjb25zb2xlLmxvZyhgdGhpcyBpcyBhIGxpc3Qgb2YgdXNlcnMgYmVmb3JlIGFkZGluZzpgKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyTGlzdCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coYHRoaXMgaXMgdGhlIHVzZXI6ICR7dXNlclRvU3RvcmV9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJUb1N0b3JlKTtcblxuICAgICAgICAvKiBpZiAodGhpcy5kb2VzVXNlckFscmVhZHlFeGlzdCh1c2VyVG9TdG9yZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMudXNlckxpc3QuZmluZCgodXNlcikgPT4ge1xuICAgICAgICAgICAgICAgIHVzZXIubmFtZSA9PT0gdXNlclRvU3RvcmUubmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHVzZXJUb1N0b3JlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYm9pbmshXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51c2VyTGlzdC5wdXNoKHVzZXJUb1N0b3JlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFhYWFhbmshXCIpO1xuICAgICAgICB9ICovXG5cbiAgICAgICAgaWYgKHRoaXMuZG9lc1VzZXJBbHJlYWR5RXhpc3QodXNlclRvU3RvcmUpKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnVzZXJMaXN0LmZpbmQoXG4gICAgICAgICAgICAgICAgKHVzZXIpID0+IHVzZXIubmFtZSA9PT0gdXNlclRvU3RvcmUubmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB1c2VyVG9TdG9yZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJvaW5rIVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXNlckxpc3QucHVzaCh1c2VyVG9TdG9yZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJhYWFhYW5rIVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGB0aGlzIGlzIGEgbGlzdCBvZiB1c2VycyBiZWZvcmUgc3RvcmluZzpgKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyTGlzdCk7XG5cbiAgICAgICAgdGhpcy5zdG9yZVVzZXJBcnJheSgpO1xuICAgIH1cblxuICAgIGRvZXNVc2VyQWxyZWFkeUV4aXN0KHVzZXJUb0NoZWNrKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5zVXNlciA9IHRoaXMudXNlckxpc3Quc29tZShcbiAgICAgICAgICAgICh1c2VyKSA9PiB1c2VyLm5hbWUgPT09IHVzZXJUb0NoZWNrLm5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2coYENvbnRhaW5zIFVzZXI/IDogJHtjb250YWluc1VzZXJ9YCk7XG4gICAgICAgIHJldHVybiBjb250YWluc1VzZXI7XG4gICAgfVxuXG4gICAgc3RvcmVVc2VyQXJyYXkoKSB7XG4gICAgICAgIGNvbnN0IHRvU2VuZFRvU3RvcmFnZSA9IEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAgdGhpcy51c2VyTGlzdCxcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5ID09PSBcInBhcmVudE9iamVjdFwiID8gdW5kZWZpbmVkIDogdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyU3RvcmFnZVwiLCB0b1NlbmRUb1N0b3JhZ2UpO1xuICAgIH1cblxuICAgIC8vVE9ETzogU2hvdWxkIHRoZXJlIGJlIGEgbWV0aG9kIHRvIG51a2UgbG9jYWxzdG9yYWdlIG9mIGFsbCBzYXZlZCBkYXRhP1xuICAgIC8vUHJvYmFibHkuLi5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBuYW1lLFxuICAgICAgICBkdWVEYXRlID0gXCJObyBkdWUgZGF0ZSBzZXQuXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gXCJObyBkZXNjcmlwdGlvbiBzZXQgeWV0LlwiLFxuICAgICAgICBwYXJlbnRMaXN0LFxuICAgICAgICBjaGVja2VkID0gZmFsc2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnBhcmVudE9iamVjdCA9IHBhcmVudExpc3Q7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBzZXROYW1lKG5ld05hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICB9XG5cbiAgICBnZXREYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICAgIH1cblxuICAgIHNldERhdGUobmV3RGF0ZSkge1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBuZXdEYXRlO1xuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0Q29udGFpbmVyTm9kZShjb250YWluZXJOb2RlKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyTm9kZSA9IGNvbnRhaW5lck5vZGU7XG4gICAgfVxuXG4gICAgZ2V0Q29udGFpbmVyTm9kZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyTm9kZTtcbiAgICAgICAgfVxuICAgICAgICAvL1RPRE86IFNob3VsZCB0aGVyZSBiZSBhIHJldHVybiB2YWx1ZSBpZiB0aGVyZSBpc24ndCBhIG5vZGUgYXNzaWduZWQgYWxyZWFkeT9cbiAgICAgICAgLy9TaG91bGQgdGhpcyBwcm9wZXJ0eSBqdXN0IGJlIGluaXRpYWxpemVkIGFzIGEgYmxhbmsgc29tZWhvdyB3aGVuIHRoaXMgb2JqZWN0IGlzIGNyZWF0ZWQ/XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgR2VuZXJhdGVFbGVtZW50IGZyb20gXCIuL0dlbmVyYXRlUGFnZUVsZW1lbnQuanNcIjtcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL1N0b3JhZ2UuanNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2suanNcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3QuanNcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3QuanNcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuL1VzZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICAgIC8vSW5pdGlhbGl6ZSBwYWdlIGJvZHksIG5hdiBjb250YWluZXIsIGFuZCBjb250ZW50IGNvbnRhaW5lciBwYWdlIGVsZW1lbnRzIHRvIGJlIGxhdGVyIHBvcHVsYXRlZFxuICAgIGNvbnN0cnVjdG9yKHRoaXNVc2VyLCB0aGlzU3RvcmFnZSkge1xuICAgICAgICAvKiBjb25zdCBuZXdTdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTsgKi9cbiAgICAgICAgLyogdGhpcy5uZXdTdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcbiAgICAgICAgdGhpcy51c2VyTGlzdCA9IHRoaXMubmV3U3RvcmFnZS5nZXRVc2VycygpOyAqL1xuXG4gICAgICAgIC8vUmVmYWN0b3IgdGhpcyB0byB0YWtlIGluIGEgc2luZ2xlIHVzZXIgYW5kIGdlbmVyYXRlIFVJXG4gICAgICAgIHRoaXMubmV3U3RvcmFnZSA9IHRoaXNTdG9yYWdlO1xuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzVXNlcjtcblxuICAgICAgICAvKiB0aGlzLnVzZXIgPSB0aGlzLnVzZXJMaXN0WzBdOyAqL1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMudXNlcik7XG4gICAgICAgIHRoaXMucGFnZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgdGhpcy5uYXZDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wYWdlQm9keS5hcHBlbmRDaGlsZCh0aGlzLm5hdkNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiY29udGVudC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnBhZ2VCb2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGVudENvbnRhaW5lcik7XG5cbiAgICAgICAgaWYgKHRoaXMudXNlci5wcm9qZWN0cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFBhZ2VDb250ZW50KHRoaXMudXNlci5wcm9qZWN0c1swXS5uYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFBhZ2VDb250ZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgLyogdGhpcy5sb2FkUGFnZUNvbnRlbnQodGhpcy51c2VyLm5hbWUpOyAqL1xuICAgIH1cblxuICAgIC8vQ2xlYXJzIGFuZCBwb3B1bGF0ZXMgbmF2IGFuZCBkaXNwbGF5IHBhbmVzXG4gICAgbG9hZFBhZ2VDb250ZW50KG5hbWVPZlByb2plY3RUb0xvYWQgPSBcIlwiKSB7XG4gICAgICAgIHRoaXMucmVsb2FkTmF2Q29udGVudCgpO1xuXG4gICAgICAgIHRoaXMuY2xlYXJEaXNwbGF5Q29udGVudCgpO1xuICAgICAgICAvL0luIGNhc2UgdGhlcmUgaXNuJ3QgYSBwcm9qZWN0IHRvIGxvYWQuLi4uXG4gICAgICAgIGlmIChuYW1lT2ZQcm9qZWN0VG9Mb2FkICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsbERpc3BsYXlQYW5lQ29udGVudChuYW1lT2ZQcm9qZWN0VG9Mb2FkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyTmF2Q29udGVudCgpIHtcbiAgICAgICAgdGhpcy5uYXZDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgfVxuXG4gICAgcmVsb2FkTmF2Q29udGVudCgpIHtcbiAgICAgICAgdGhpcy5jbGVhck5hdkNvbnRlbnQoKTtcbiAgICAgICAgdGhpcy5maWxsTmF2Q29udGVudCgpO1xuICAgIH1cblxuICAgIGNsZWFyRGlzcGxheUNvbnRlbnQoKSB7XG4gICAgICAgIHRoaXMuY29udGVudENvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICBmaWxsTmF2Q29udGVudCgpIHtcbiAgICAgICAgY29uc3QgbmF2VGl0bGVDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtdGl0bGUtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgdGhpcy5uYXZDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBuYXZUaXRsZSA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi10aXRsZVwiXSxcbiAgICAgICAgICAgIG5hdlRpdGxlQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJNeSBQcm9qZWN0c1wiXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgYWRkTmV3UHJvamVjdEJ1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5ldy1wcm9qZWN0LWJ1dHRvblwiXSxcbiAgICAgICAgICAgIG5hdlRpdGxlQ29udGFpbmVyXG4gICAgICAgICk7XG4gICAgICAgIGFkZE5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTmV3UHJvamVjdCgpO1xuICAgICAgICAgICAgdGhpcy5yZWxvYWROYXZDb250ZW50KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNhdmVCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtc2F2ZS11c2Vycy1idXR0b25cIl0sXG4gICAgICAgICAgICBuYXZUaXRsZUNvbnRhaW5lcixcbiAgICAgICAgICAgIFwic2F2ZSBhbGxcIlxuICAgICAgICApO1xuICAgICAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJsYW1vIVwiKTtcbiAgICAgICAgICAgIHRoaXMubmV3U3RvcmFnZS5zaW1wbGVTZW5kVG9TdG9yYWdlKHRoaXMudXNlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG5hdkNvbnRlbnRDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuYXYtY29udGVudC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICB0aGlzLm5hdkNvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMucG9wdWxhdGVOYXZDb250ZW50KG5hdkNvbnRlbnRDb250YWluZXIsIHRoaXMudXNlci5wcm9qZWN0cyk7XG5cbiAgICAgICAgdGhpcy5uYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2Q29udGVudENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcG9wdWxhdGVOYXZDb250ZW50KG5hdkNvbnRlbnRDb250YWluZXIsIHByb2plY3RzKSB7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIG5hdkNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQcm9qZWN0TmF2VmlzdWFsKHByb2plY3QpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVQcm9qZWN0TmF2VmlzdWFsKHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFwiZGl2XCIsIFtcbiAgICAgICAgICAgIFwibmF2LXByb2plY3QtY29udGFpbmVyXCIsXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUNvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1wcm9qZWN0LXRpdGxlLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVJY29uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibmF2LXByb2plY3QtdGl0bGUtaWNvblwiXSxcbiAgICAgICAgICAgIHByb2plY3RUaXRsZUNvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1wcm9qZWN0LXRpdGxlXCJdLFxuICAgICAgICAgICAgcHJvamVjdFRpdGxlQ29udGFpbmVyLFxuICAgICAgICAgICAgcHJvamVjdC5uYW1lXG4gICAgICAgICk7XG4gICAgICAgIHByb2plY3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGVhckRpc3BsYXlDb250ZW50KCk7XG4gICAgICAgICAgICB0aGlzLmZpbGxEaXNwbGF5UGFuZUNvbnRlbnQoYCR7cHJvamVjdC5uYW1lfWApO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGVudENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1wcm9qZWN0LWNvbnRlbnQtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIHByb2plY3QubGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdENvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVMaXN0TmF2VmlzdWFsKGxpc3QpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLyogcHJvamVjdC5zZXRDb250YWluZXJOb2RlKHByb2plY3RDb250YWluZXIpOyAqL1xuXG4gICAgICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xuICAgIH1cblxuICAgIGNyZWF0ZUxpc3ROYXZWaXN1YWwobGlzdCkge1xuICAgICAgICBjb25zdCBsaXN0VGl0bGVDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcImRpdlwiLCBbXG4gICAgICAgICAgICBcIm5hdi1saXN0LXRpdGxlLWNvbnRhaW5lclwiLFxuICAgICAgICBdKTtcblxuICAgICAgICBjb25zdCBsaXN0VGl0bGVJY29uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibmF2LWxpc3QtdGl0bGUtaWNvblwiXSxcbiAgICAgICAgICAgIGxpc3RUaXRsZUNvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGxpc3RUaXRsZURpdiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5hdi1saXN0LXRpdGxlXCJdLFxuICAgICAgICAgICAgbGlzdFRpdGxlQ29udGFpbmVyLFxuICAgICAgICAgICAgbGlzdC5uYW1lXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIGxpc3RUaXRsZUNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvL0NoZWNrcyB0aGF0IGEgcHJvamVjdCBieSB0aGF0IG5hbWUgZXhpc3RzIGFuZCB0aGVuIHNlbmRzIHRoYXQgcHJvamVjdCBuYW1lIG9uIHRvIGJlIGFkZGVkIHRvIHRoZSB3b3Jrc3BhY2VcbiAgICBmaWxsRGlzcGxheVBhbmVDb250ZW50KHByb2plY3ROYW1lID0gXCJkZWZhdWx0XCIpIHtcbiAgICAgICAgaWYgKCF0aGlzLnVzZXIuY29udGFpbnNQcm9qZWN0KHByb2plY3ROYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcImRpdlwiLCBbXG4gICAgICAgICAgICBcInByb2plY3QtY29udGFpbmVyXCIsXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlUHJvamVjdFZpc3VhbChcbiAgICAgICAgICAgIHRoaXMudXNlci5nZXRQcm9qZWN0KHByb2plY3ROYW1lKSxcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXJcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuICAgIH1cblxuICAgIGNyZWF0ZVByb2plY3RWaXN1YWwocHJvamVjdCwgcHJvamVjdENvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJwcm9qZWN0LXRpdGxlLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0SW5mb0NvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcInByb2plY3QtaW5mby1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGVDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udHJvbENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcInByb2plY3QtY29udHJvbC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGVDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZENvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcInByb2plY3QtY2FyZC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJwcm9qZWN0LXRpdGxlXCJdLFxuICAgICAgICAgICAgcHJvamVjdEluZm9Db250YWluZXIsXG4gICAgICAgICAgICBwcm9qZWN0Lm5hbWVcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCJdLFxuICAgICAgICAgICAgcHJvamVjdEluZm9Db250YWluZXIsXG4gICAgICAgICAgICBwcm9qZWN0LmRlc2NyaXB0aW9uXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlTmV3TGlzdEJ1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIm5ldy1wcm9qZWN0LWxpc3QtYnV0dG9uXCJdLFxuICAgICAgICAgICAgcHJvamVjdENvbnRyb2xDb250YWluZXIsXG4gICAgICAgICAgICBcIm5ldyBsaXN0XCJcbiAgICAgICAgKTtcbiAgICAgICAgY3JlYXRlTmV3TGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IHRoaXMuY3JlYXRlTGlzdChwcm9qZWN0KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvamVjdFZpc3VhbChwcm9qZWN0KTtcbiAgICAgICAgICAgIHRoaXMucmVsb2FkTmF2Q29udGVudCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjbG9zZVByb2plY3RCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJjbG9zZS1wcm9qZWN0LWJ1dHRvblwiXSxcbiAgICAgICAgICAgIHByb2plY3RDb250cm9sQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJjbG9zZSBwcm9qZWN0XCJcbiAgICAgICAgKTtcbiAgICAgICAgY2xvc2VQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyRGlzcGxheUNvbnRlbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIml0ZW0tcmVtb3ZlLWJ1dHRvblwiXSxcbiAgICAgICAgICAgIHByb2plY3RDb250cm9sQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJkZWxldGUgcHJvamVjdFwiXG4gICAgICAgICk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3QucGFyZW50T2JqZWN0LnJlbW92ZVByb2plY3QocHJvamVjdC5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMubG9hZFBhZ2VDb250ZW50KCk7XG4gICAgICAgICAgICAvL1RPRE86IHRoaXMgYWxzbyBuZWVkcyB0byB1cGRhdGUgdGhlIGpzb24gZmlsZSBvZiByZWNvcmQgdG8gc2F2ZSBwYWdlIHN0YXRlIG9uIHJlbG9hZFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFwcGVuZEFsbExpc3RzVG9Qcm9qZWN0KHByb2plY3RDYXJkQ29udGFpbmVyLCBwcm9qZWN0Lmxpc3RzKTtcblxuICAgICAgICBwcm9qZWN0LnNldENvbnRhaW5lck5vZGUocHJvamVjdENvbnRhaW5lcik7XG5cbiAgICAgICAgLyogdGhpcy5jb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpOyAqL1xuICAgIH1cblxuICAgIGFwcGVuZEFsbExpc3RzVG9Qcm9qZWN0KHByb2plY3RDb250YWluZXIsIGxpc3RzKSB7XG4gICAgICAgIGxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kTGlzdChsaXN0LCBwcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXBwZW5kTGlzdChsaXN0LCBwcm9qZWN0Q29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcImRpdlwiLCBbXG4gICAgICAgICAgICBcImxpc3QtY29udGFpbmVyXCIsXG4gICAgICAgIF0pO1xuICAgICAgICB0aGlzLmNyZWF0ZUxpc3RWaXN1YWwobGlzdCwgbGlzdENvbnRhaW5lcik7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgY3JlYXRlTGlzdFZpc3VhbChsaXN0LCBsaXN0Q29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IGxpc3RUaXRsZUNvbnRhaW5lciA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcImxpc3QtdGl0bGUtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgbGlzdENvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGxpc3RJbmZvQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibGlzdC1pbmZvLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIGxpc3RUaXRsZUNvbnRhaW5lclxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGxpc3ROYW1lID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibGlzdC10aXRsZVwiXSxcbiAgICAgICAgICAgIGxpc3RJbmZvQ29udGFpbmVyLFxuICAgICAgICAgICAgbGlzdC5uYW1lXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgbGlzdERlc2NyaXB0aW9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wibGlzdC1kZXNjcmlwdGlvblwiXSxcbiAgICAgICAgICAgIGxpc3RJbmZvQ29udGFpbmVyLFxuICAgICAgICAgICAgbGlzdC5kZXNjcmlwdGlvblxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGFkZE5ld1Rhc2tCdXR0b24gPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJuZXctbGlzdC1pdGVtLWJ1dHRvblwiXSxcbiAgICAgICAgICAgIGxpc3RUaXRsZUNvbnRhaW5lclxuICAgICAgICApO1xuICAgICAgICBhZGROZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gdGhpcy5jcmVhdGVUYXNrKGxpc3QpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMaXN0VmlzdWFsKGxpc3QpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZW1vdmVMaXN0QnV0dG9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiaXRlbS1yZW1vdmUtYnV0dG9uXCJdLFxuICAgICAgICAgICAgbGlzdENvbnRhaW5lcixcbiAgICAgICAgICAgIFwiZGVsZXRlIGxpc3RcIlxuICAgICAgICApO1xuICAgICAgICByZW1vdmVMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBsaXN0LnBhcmVudE9iamVjdC5yZW1vdmVMaXN0KGxpc3QubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2plY3RWaXN1YWwobGlzdC5wYXJlbnRPYmplY3QpO1xuICAgICAgICAgICAgdGhpcy5yZWxvYWROYXZDb250ZW50KCk7XG5cbiAgICAgICAgICAgIC8vVE9ETzogdGhpcyBhbHNvIG5lZWRzIHRvIHVwZGF0ZSB0aGUganNvbiBmaWxlIG9mIHJlY29yZCB0byBzYXZlIHBhZ2Ugc3RhdGUgb24gcmVsb2FkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYXBwZW5kVGFza0xpc3QobGlzdENvbnRhaW5lciwgbGlzdCk7XG4gICAgICAgIGxpc3Quc2V0Q29udGFpbmVyTm9kZShsaXN0Q29udGFpbmVyKTtcbiAgICAgICAgLy9Eb2VzIHRoaXMgKG5lZWQgdG8gcmV0dXJuPykgbGlzdCBjb250YWluZXJcbiAgICAgICAgcmV0dXJuIGxpc3RDb250YWluZXI7XG4gICAgfVxuXG4gICAgYXBwZW5kVGFza0xpc3QobGlzdENvbnRhaW5lciwgbGlzdCkge1xuICAgICAgICBsaXN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kVGFzayh0YXNrLCBsaXN0Q29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXBwZW5kVGFzayh0YXNrLCBsaXN0Q29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcImRpdlwiLCBbXG4gICAgICAgICAgICBcIml0ZW0tY29udGFpbmVyXCIsXG4gICAgICAgIF0pO1xuICAgICAgICB0aGlzLmNyZWF0ZVRhc2tWaXN1YWwodGFzaywgdGFza0NvbnRhaW5lcik7XG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLy9DaGVja2JveCBuZWVkcyB0byBzYXZlIHN0YXRlIGJldHdlZW4gbG9hZHNcbiAgICBjcmVhdGVUYXNrVmlzdWFsKHRhc2ssIHRhc2tDb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJpdGVtLWNoZWNrYm94LWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHRhc2tDb250YWluZXJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgICAgIFtcIml0ZW0tY2hlY2tib3hcIl0sXG4gICAgICAgICAgICBjaGVja2JveENvbnRhaW5lclxuICAgICAgICApO1xuICAgICAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICAvKiBjb25zb2xlLmxvZyhgVGFzayBuYW1lPyAke3Rhc2submFtZX0gVGFzayBjaGVja2VkPyAke3Rhc2suY2hlY2tlZH1gKTsgKi9cbiAgICAgICAgaWYgKHRhc2suY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2suY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHRhc2suY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXNrLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiaXRlbS1pbmZvLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHRhc2tDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJpdGVtLXRpdGxlXCJdLFxuICAgICAgICAgICAgaW5mb0NvbnRhaW5lcixcbiAgICAgICAgICAgIHRhc2submFtZVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIml0ZW0tZGVzY3JpcHRpb25cIl0sXG4gICAgICAgICAgICBpbmZvQ29udGFpbmVyLFxuICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvblxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EdWVEYXRlID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiaXRlbS1kdWUtZGF0ZVwiXSxcbiAgICAgICAgICAgIGluZm9Db250YWluZXIsXG4gICAgICAgICAgICB0YXNrLmR1ZURhdGVcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCB0YXNrQ29udHJvbHNDb250YWluZXIgPSBHZW5lcmF0ZUVsZW1lbnQuZ2VuZXJhdGVQYWdlRWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXCJ0YXNrLWNvbnRyb2xzLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIHRhc2tDb250YWluZXJcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCByZW1vdmVUYXNrQnV0dG9uID0gR2VuZXJhdGVFbGVtZW50LmdlbmVyYXRlUGFnZUVsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1wiaXRlbS1yZW1vdmUtYnV0dG9uXCJdLFxuICAgICAgICAgICAgdGFza0NvbnRyb2xzQ29udGFpbmVyLFxuICAgICAgICAgICAgXCJyZW1vdmUgaXRlbVwiXG4gICAgICAgICk7XG4gICAgICAgIHJlbW92ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRhc2sucGFyZW50T2JqZWN0LnJlbW92ZVRhc2sodGFzay5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGlzdFZpc3VhbCh0YXNrLnBhcmVudE9iamVjdCk7XG4gICAgICAgICAgICAvL1RPRE86IHRoaXMgYWxzbyBuZWVkcyB0byB1cGRhdGUgdGhlIGpzb24gZmlsZSBvZiByZWNvcmQgdG8gc2F2ZSBwYWdlIHN0YXRlIG9uIHJlbG9hZFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBlZGl0VGFza0J1dHRvbiA9IEdlbmVyYXRlRWxlbWVudC5nZW5lcmF0ZVBhZ2VFbGVtZW50KFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcIml0ZW0tZWRpdC1idXR0b25cIl0sXG4gICAgICAgICAgICB0YXNrQ29udHJvbHNDb250YWluZXIsXG4gICAgICAgICAgICBcImVkaXQgaXRlbVwiXG4gICAgICAgICk7XG4gICAgICAgIGVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVkaXRUYXNrKHRhc2spO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUYXNrVmlzdWFsKHRhc2spO1xuICAgICAgICB9KTtcblxuICAgICAgICB0YXNrLnNldENvbnRhaW5lck5vZGUodGFza0NvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xuICAgIH1cblxuICAgIGNyZWF0ZVRhc2socGFyZW50TGlzdCkge1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IHByb21wdChcIkl0ZW0gbmFtZT9cIik7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHByb21wdChcIkl0ZW0gZGVzY3JpcHRpb24/XCIpO1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IHByb21wdChcIkl0ZW0gZHVlIGRhdGU/XCIpO1xuXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhcbiAgICAgICAgICAgIHRhc2tOYW1lLFxuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGFza0R1ZURhdGUsXG4gICAgICAgICAgICBwYXJlbnRMaXN0XG4gICAgICAgICk7XG5cbiAgICAgICAgcGFyZW50TGlzdC5hZGRUYXNrKG5ld1Rhc2spO1xuICAgIH1cblxuICAgIGVkaXRUYXNrKHRhc2spIHtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBwcm9tcHQoXCJOZXcgdGFzayBuYW1lP1wiLCBgJHt0YXNrLm5hbWV9YCk7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHByb21wdChcbiAgICAgICAgICAgIFwiTmV3IHRhc2sgZGVzY3JpcHRpb24/XCIsXG4gICAgICAgICAgICBgJHt0YXNrLmRlc2NyaXB0aW9ufWBcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBwcm9tcHQoXCJOZXcgdGFzayBkdWUgZGF0ZT9cIiwgYCR7dGFzay5kdWVEYXRlfWApO1xuXG4gICAgICAgIHRhc2suc2V0TmFtZSh0YXNrTmFtZSk7XG4gICAgICAgIHRhc2suc2V0RGF0ZSh0YXNrRHVlRGF0ZSk7XG4gICAgICAgIHRhc2suc2V0RGVzY3JpcHRpb24odGFza0Rlc2NyaXB0aW9uKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUYXNrVmlzdWFsKHRhc2spIHtcbiAgICAgICAgdGhpcy5jbGVhclRhc2tWaXN1YWwodGFzay5jb250YWluZXJOb2RlKTtcbiAgICAgICAgdGhpcy5jcmVhdGVUYXNrVmlzdWFsKHRhc2ssIHRhc2suY29udGFpbmVyTm9kZSk7XG4gICAgfVxuXG4gICAgY2xlYXJUYXNrVmlzdWFsKHRhc2tWaXN1YWwpIHtcbiAgICAgICAgdGFza1Zpc3VhbC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0KHBhcmVudFByb2plY3QpIHtcbiAgICAgICAgY29uc3QgbGlzdE5hbWUgPSBwcm9tcHQoXCJMaXN0IG5hbWU/XCIpO1xuICAgICAgICBjb25zdCBsaXN0RGVzY3JpcHRpb24gPSBwcm9tcHQoXCJMaXN0IGRlc2NyaXB0aW9uP1wiKTtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IG5ldyBMaXN0KGxpc3ROYW1lLCBsaXN0RGVzY3JpcHRpb24sIFtdLCBwYXJlbnRQcm9qZWN0KTtcblxuICAgICAgICBwYXJlbnRQcm9qZWN0LmFkZExpc3QobmV3TGlzdCk7XG4gICAgfVxuXG4gICAgZWRpdExpc3QobGlzdCkge1xuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IHByb21wdChcIkxpc3QgbmFtZT9cIik7XG4gICAgICAgIGNvbnN0IGxpc3REZXNjcmlwdGlvbiA9IHByb21wdChcIkxpc3QgZGVzY3JpcHRpb24/XCIpO1xuXG4gICAgICAgIGxpc3Quc2V0TmFtZSA9IGxpc3ROYW1lO1xuICAgICAgICBsaXN0LnNldERlc2NyaXB0aW9uID0gbGlzdERlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHVwZGF0ZUxpc3RWaXN1YWwobGlzdCkge1xuICAgICAgICB0aGlzLmNsZWFyTGlzdFZpc3VhbChsaXN0LmNvbnRhaW5lck5vZGUpO1xuICAgICAgICB0aGlzLmNyZWF0ZUxpc3RWaXN1YWwobGlzdCwgbGlzdC5jb250YWluZXJOb2RlKTtcbiAgICB9XG5cbiAgICBjbGVhckxpc3RWaXN1YWwobGlzdFZpc3VhbCkge1xuICAgICAgICBsaXN0VmlzdWFsLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIH1cblxuICAgIGVkaXRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9tcHQoXCJQcm9qZWN0IG5hbWU/XCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBwcm9tcHQoXCJQcm9qZWN0IGRlc2NyaXB0aW9uP1wiKTtcblxuICAgICAgICBwcm9qZWN0Lm5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgcHJvamVjdC5kZXNjcmlwdGlvbiA9IHByb2plY3REZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICB1cGRhdGVQcm9qZWN0VmlzdWFsKHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5jbGVhclByb2plY3RWaXN1YWwocHJvamVjdC5jb250YWluZXJOb2RlKTtcbiAgICAgICAgdGhpcy5jcmVhdGVQcm9qZWN0VmlzdWFsKHByb2plY3QsIHByb2plY3QuY29udGFpbmVyTm9kZSk7XG4gICAgfVxuXG4gICAgY2xlYXJQcm9qZWN0VmlzdWFsKHByb2plY3RWaXN1YWwpIHtcbiAgICAgICAgcHJvamVjdFZpc3VhbC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IHByb21wdChcIlByb2plY3QgbmFtZT9cIik7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3REZXNjcmlwdGlvbiA9IHByb21wdChcIlByb2plY3QgZGVzY3JpcHRpb24/XCIpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0TGlzdHMgPSBbXTtcblxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgICAgICAgICBuZXdQcm9qZWN0TmFtZSxcbiAgICAgICAgICAgIG5ld1Byb2plY3REZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG5ld1Byb2plY3RMaXN0cyxcbiAgICAgICAgICAgIHRoaXMudXNlclxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMudXNlci5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByb2plY3RzID0gW10sIHBhcmVudENvbnRhaW5lciA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuICAgICAgICB0aGlzLnBhcmVudE9iamVjdCA9IHBhcmVudENvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHNldE5hbWUobmV3TmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgIH1cblxuICAgIGdldFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgICB9XG5cbiAgICBzZXRQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XG4gICAgfVxuXG4gICAgY29udGFpbnNQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLnNvbWUoXG4gICAgICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYWRkUHJvamVjdChuZXdQcm9qZWN0KSB7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluc1Byb2plY3QobmV3UHJvamVjdC5nZXROYW1lKCkpKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcihcbiAgICAgICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSAhPT0gcHJvamVjdE5hbWVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQoXG4gICAgICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lXG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFVJIGZyb20gXCIuL21vZHVsZXMvVUkuanNcIjtcbmltcG9ydCBMb2dpblVJIGZyb20gXCIuL21vZHVsZXMvTG9naW5VSS5qc1wiO1xuXG4vKiBjb25zdCBuZXdQYWdlID0gbmV3IFVJKCk7ICovXG5cbmNvbnN0IG5ld0xvZ2luID0gbmV3IExvZ2luVUkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==