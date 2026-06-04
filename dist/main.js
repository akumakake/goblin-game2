/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> * {\\n|     margin: 0;\\n|     padding: 0;\");\n\n//# sourceURL=webpack://goblin-game/./src/css/style.css?");

/***/ }),

/***/ "./src/img/goblin.png":
/*!****************************!*\
  !*** ./src/img/goblin.png ***!
  \****************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://goblin-game/./src/img/goblin.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Game */ \"./src/js/Game.js\");\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  new _js_Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n});\n\n//# sourceURL=webpack://goblin-game/./src/index.js?");

/***/ }),

/***/ "./src/js/Board.js":
/*!*************************!*\
  !*** ./src/js/Board.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Board)\n/* harmony export */ });\nclass Board {\r\n  constructor(size = 4) {\r\n    this.size = size;\r\n    this.cells = [];\r\n    this.gameField = document.getElementById('game-field');\r\n    this.createBoard();\r\n  }\r\n\r\n  createBoard() {\r\n    this.gameField.innerHTML = '';\r\n    this.cells = [];\r\n\r\n    for (let i = 0; i < this.size * this.size; i++) {\r\n      const cell = document.createElement('div');\r\n      cell.classList.add('cell');\r\n      cell.dataset.index = i;\r\n      this.gameField.appendChild(cell);\r\n      this.cells.push(cell);\r\n    }\r\n  }\r\n\r\n  getRandomCell() {\r\n    const index = Math.floor(Math.random() * this.cells.length);\r\n    return this.cells[index];\r\n  }\r\n\r\n  getCell(index) {\r\n    return this.cells[index];\r\n  }\r\n\r\n  addClickListener(callback) {\r\n    this.cells.forEach((cell) => {\r\n      cell.addEventListener('click', (e) => {\r\n        callback(e.currentTarget);\r\n      });\r\n    });\r\n  }\r\n}\n\n//# sourceURL=webpack://goblin-game/./src/js/Board.js?");

/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ \"./src/js/Board.js\");\n/* harmony import */ var _Goblin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Goblin */ \"./src/js/Goblin.js\");\n/* harmony import */ var _ScoreBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScoreBoard */ \"./src/js/ScoreBoard.js\");\n\r\n\r\n\r\n\r\nclass Game {\r\n  constructor() {\r\n    this.board = new _Board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4);\r\n    this.goblin = new _Goblin__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n    this.scoreBoard = new _ScoreBoard__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n    this.interval = null;\r\n    this.timeout = null;\r\n    this.isPlaying = false;\r\n    this.gameOverElement = document.getElementById('game-over');\r\n    this.finalScoreElement = document.getElementById('final-score');\r\n    this.restartButton = document.getElementById('restart-btn');\r\n\r\n    this.init();\r\n  }\r\n\r\n  init() {\r\n    this.board.addClickListener(this.handleCellClick.bind(this));\r\n    this.restartButton.addEventListener('click', () => this.restart());\r\n    this.start();\r\n  }\r\n\r\n  start() {\r\n    this.isPlaying = true;\r\n    this.gameOverElement.style.display = 'none';\r\n    this.scoreBoard.reset();\r\n    this.scheduleGoblin();\r\n  }\r\n\r\n  scheduleGoblin() {\r\n    if (!this.isPlaying) return;\r\n\r\n    const randomCell = this.board.getRandomCell();\r\n    this.goblin.placeInCell(randomCell);\r\n\r\n    this.timeout = setTimeout(() => {\r\n      if (this.isPlaying) {\r\n        this.missGoblin();\r\n      }\r\n    }, 1000);\r\n  }\r\n\r\n  handleCellClick(cell) {\r\n    if (!this.isPlaying) return;\r\n\r\n    if (cell === this.goblin.currentCell) {\r\n      this.hitGoblin();\r\n    }\r\n  }\r\n\r\n  hitGoblin() {\r\n    clearTimeout(this.timeout);\r\n    this.scoreBoard.addScore();\r\n    this.goblin.remove();\r\n    this.scheduleGoblin();\r\n  }\r\n\r\n  missGoblin() {\r\n    this.scoreBoard.addMiss();\r\n    this.goblin.remove();\r\n\r\n    if (this.scoreBoard.isGameOver()) {\r\n      this.endGame();\r\n    } else {\r\n      this.scheduleGoblin();\r\n    }\r\n  }\r\n\r\n  endGame() {\r\n    this.isPlaying = false;\r\n    this.goblin.remove();\r\n    clearTimeout(this.timeout);\r\n    this.finalScoreElement.textContent = this.scoreBoard.score;\r\n    this.gameOverElement.style.display = 'block';\r\n  }\r\n\r\n  restart() {\r\n    this.start();\r\n  }\r\n}\n\n//# sourceURL=webpack://goblin-game/./src/js/Game.js?");

/***/ }),

/***/ "./src/js/Goblin.js":
/*!**************************!*\
  !*** ./src/js/Goblin.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Goblin)\n/* harmony export */ });\n/* harmony import */ var _img_goblin_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/goblin.png */ \"./src/img/goblin.png\");\n/* harmony import */ var _img_goblin_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_goblin_png__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nclass Goblin {\r\n  constructor() {\r\n    this.element = document.createElement('img');\r\n    this.element.src = (_img_goblin_png__WEBPACK_IMPORTED_MODULE_0___default());\r\n    this.element.classList.add('goblin');\r\n    this.element.alt = 'Goblin';\r\n    this.currentCell = null;\r\n  }\r\n\r\n  placeInCell(cell) {\r\n    this.remove();\r\n    cell.appendChild(this.element);\r\n    cell.classList.add('active');\r\n    this.currentCell = cell;\r\n  }\r\n\r\n  remove() {\r\n    if (this.currentCell) {\r\n      this.currentCell.classList.remove('active');\r\n      if (this.element.parentNode) {\r\n        this.element.remove();\r\n      }\r\n      this.currentCell = null;\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://goblin-game/./src/js/Goblin.js?");

/***/ }),

/***/ "./src/js/ScoreBoard.js":
/*!******************************!*\
  !*** ./src/js/ScoreBoard.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScoreBoard)\n/* harmony export */ });\nclass ScoreBoard {\r\n  constructor() {\r\n    this.score = 0;\r\n    this.missed = 0;\r\n    this.maxMissed = 5;\r\n    this.scoreElement = document.getElementById('score');\r\n    this.missedElement = document.getElementById('missed');\r\n  }\r\n\r\n  addScore() {\r\n    this.score++;\r\n    this.updateDisplay();\r\n  }\r\n\r\n  addMiss() {\r\n    this.missed++;\r\n    this.updateDisplay();\r\n  }\r\n\r\n  isGameOver() {\r\n    return this.missed >= this.maxMissed;\r\n  }\r\n\r\n  updateDisplay() {\r\n    this.scoreElement.textContent = this.score;\r\n    this.missedElement.textContent = this.missed;\r\n  }\r\n\r\n  reset() {\r\n    this.score = 0;\r\n    this.missed = 0;\r\n    this.updateDisplay();\r\n  }\r\n}\n\n//# sourceURL=webpack://goblin-game/./src/js/ScoreBoard.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;