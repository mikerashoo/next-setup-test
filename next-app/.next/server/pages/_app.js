/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/lib/store slices/usersSlice.js":
/*!********************************************!*\
  !*** ./src/lib/store slices/usersSlice.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addUser\": () => (/* binding */ addUser),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"setUsers\": () => (/* binding */ setUsers),\n/* harmony export */   \"usersSlice\": () => (/* binding */ usersSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    users: []\n};\nconst usersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"users\",\n    initialState,\n    reducers: {\n        addUser: (state, action)=>{\n            state.users = [\n                ...state.users,\n                action.payload\n            ];\n        },\n        setUsers: (state, action)=>{\n            console.log(\"set users: \", action.payload);\n            state.users = action.payload;\n        }\n    }\n});\nconst { addUser , setUsers  } = usersSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usersSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL3N0b3JlIHNsaWNlcy91c2Vyc1NsaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxZQUFZLEdBQUc7SUFDakJDLEtBQUssRUFBRSxFQUFFO0NBQ1o7QUFFTSxNQUFNQyxVQUFVLEdBQUdILDZEQUFXLENBQUM7SUFDbENJLElBQUksRUFBRSxPQUFPO0lBQ2JILFlBQVk7SUFDWkksUUFBUSxFQUFFO1FBQ05DLE9BQU8sRUFBRSxDQUFDQyxLQUFLLEVBQUVDLE1BQU0sR0FBSztZQUN4QkQsS0FBSyxDQUFDTCxLQUFLLEdBQUc7bUJBQUlLLEtBQUssQ0FBQ0wsS0FBSztnQkFBRU0sTUFBTSxDQUFDQyxPQUFPO2FBQUM7U0FDakQ7UUFDREMsUUFBUSxFQUFFLENBQUNILEtBQUssRUFBRUMsTUFBTSxHQUFLO1lBQ3pCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUVKLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLENBQUM7WUFDM0NGLEtBQUssQ0FBQ0wsS0FBSyxHQUFHTSxNQUFNLENBQUNDLE9BQU87U0FDL0I7S0FDSjtDQUNKLENBQUM7QUFFSyxNQUFNLEVBQUVILE9BQU8sR0FBRUksUUFBUSxHQUFFLEdBQUdQLFVBQVUsQ0FBQ1UsT0FBTztBQUV2RCxpRUFBZVYsVUFBVSxDQUFDVyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJlZXplLW5leHQvLi9zcmMvbGliL3N0b3JlIHNsaWNlcy91c2Vyc1NsaWNlLmpzPzQxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgdXNlcnM6IFtdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2Vyc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ3VzZXJzJyxcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgYWRkVXNlcjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUudXNlcnMgPSBbLi4uc3RhdGUudXNlcnMsIGFjdGlvbi5wYXlsb2FkXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0VXNlcnM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXQgdXNlcnM6ICcsIGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgc3RhdGUudXNlcnMgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBhZGRVc2VyLCBzZXRVc2VycyB9ID0gdXNlcnNTbGljZS5hY3Rpb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2Vyc1NsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJ1c2VycyIsInVzZXJzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRVc2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0VXNlcnMiLCJjb25zb2xlIiwibG9nIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/store slices/usersSlice.js\n");

/***/ }),

/***/ "./src/lib/store.js":
/*!**************************!*\
  !*** ./src/lib/store.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeStore\": () => (/* binding */ makeStore),\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_slices_usersSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store slices/usersSlice */ \"./src/lib/store slices/usersSlice.js\");\n\n\n\nconst combinedReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    users: _store_slices_usersSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\nconst masterReducer = (state, action)=>{\n    if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE) {\n        const nextState = {\n            ...state,\n            users: {\n                users: [\n                    ...action.payload.users.users,\n                    ...state.users.users\n                ]\n            }\n        };\n        return nextState;\n    } else {\n        return combinedReducer(state, action);\n    }\n};\nconst makeStore = ()=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: masterReducer\n    });\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore, {\n    debug: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL3N0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0U7QUFDUDtBQUNkO0FBRTdDLE1BQU1LLGVBQWUsR0FBR0wsaUVBQWUsQ0FBQztJQUNwQ0ksS0FBSztDQUNSLENBQUM7QUFFRixNQUFNRSxhQUFhLEdBQUcsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEdBQUs7SUFDckMsSUFBSUEsTUFBTSxDQUFDQyxJQUFJLEtBQUtQLHVEQUFPLEVBQUU7UUFDekIsTUFBTVEsU0FBUyxHQUFHO1lBQ2QsR0FBR0gsS0FBSztZQUVSSCxLQUFLLEVBQUU7Z0JBQ0hBLEtBQUssRUFBRTt1QkFBSUksTUFBTSxDQUFDRyxPQUFPLENBQUNQLEtBQUssQ0FBQ0EsS0FBSzt1QkFBS0csS0FBSyxDQUFDSCxLQUFLLENBQUNBLEtBQUs7aUJBQUM7YUFDL0Q7U0FDSjtRQUNELE9BQU9NLFNBQVMsQ0FBQztLQUNwQixNQUFNO1FBQ0gsT0FBT0wsZUFBZSxDQUFDRSxLQUFLLEVBQUVDLE1BQU0sQ0FBQztLQUN4QztDQUNKO0FBRU0sTUFBTUksU0FBUyxHQUFHLElBQ3JCWCxnRUFBYyxDQUFDO1FBQ1hZLE9BQU8sRUFBRVAsYUFBYTtLQUN6QixDQUFDLENBQUM7QUFFQSxNQUFNUSxPQUFPLEdBQUdYLGlFQUFhLENBQUNTLFNBQVMsRUFBRTtJQUFFRyxLQUFLLEVBQUUsSUFBSTtDQUFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JyZWV6ZS1uZXh0Ly4vc3JjL2xpYi9zdG9yZS5qcz81MTE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycywgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBIWURSQVRFLCBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xyXG5pbXBvcnQgdXNlcnMgZnJvbSAnLi9zdG9yZSBzbGljZXMvdXNlcnNTbGljZSdcclxuXHJcbmNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICB1c2VycyxcclxufSk7XHJcblxyXG5jb25zdCBtYXN0ZXJSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gSFlEUkFURSkge1xyXG4gICAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsIC8vIHVzZSBwcmV2aW91cyBzdGF0ZVxyXG5cclxuICAgICAgICAgICAgdXNlcnM6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJzOiBbLi4uYWN0aW9uLnBheWxvYWQudXNlcnMudXNlcnMsIC4uLnN0YXRlLnVzZXJzLnVzZXJzXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXh0U3RhdGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbilcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1ha2VTdG9yZSA9ICgpID0+XHJcbiAgICBjb25maWd1cmVTdG9yZSh7XHJcbiAgICAgICAgcmVkdWNlcjogbWFzdGVyUmVkdWNlcixcclxuICAgIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KTsiXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwiY29uZmlndXJlU3RvcmUiLCJIWURSQVRFIiwiY3JlYXRlV3JhcHBlciIsInVzZXJzIiwiY29tYmluZWRSZWR1Y2VyIiwibWFzdGVyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIm5leHRTdGF0ZSIsInBheWxvYWQiLCJtYWtlU3RvcmUiLCJyZWR1Y2VyIiwid3JhcHBlciIsImRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/store.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/store.js */ \"./src/lib/store.js\");\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hp\\\\OneDrive\\\\projects\\\\breeze-next-test\\\\next-app\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 12\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_store_js__WEBPACK_IMPORTED_MODULE_2__.wrapper.withRedux(App));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTtBQUFpQztBQUNTO0FBRTFDLE1BQU1DLEdBQUcsR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEdBQUs7SUFDdEMscUJBQU8sOERBQUNELFNBQVM7UUFBRSxHQUFHQyxTQUFTOzs7OztpQkFBSSxDQUFDO0NBQ3ZDO0FBRUQsaUVBQWVILDREQUFpQixDQUFDQyxHQUFHLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JyZWV6ZS1uZXh0Ly4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAndGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzJ1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJy4uL2xpYi9zdG9yZS5qcyc7XG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7Il0sIm5hbWVzIjpbIndyYXBwZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3aXRoUmVkdXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();