"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/write/[number]/edit",{

/***/ "./src/components/book/new/new.presenter.tsx":
/*!***************************************************!*\
  !*** ./src/components/book/new/new.presenter.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NewPageUI; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _newStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newStyle */ \"./src/components/book/new/newStyle.ts\");\n/* harmony import */ var _pages_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/loading */ \"./pages/loading.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction NewPageUI(props) {\n    var _props_data, _props_data1, _props_data2;\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            setLoading(false);\n        }, 1000);\n        return ()=>clearTimeout(timer);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\유니유니\\\\ReadingBook\\\\book\\\\src\\\\components\\\\book\\\\new\\\\new.presenter.tsx\",\n            lineNumber: 18,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newStyle__WEBPACK_IMPORTED_MODULE_1__.NewTableWrap, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newStyle__WEBPACK_IMPORTED_MODULE_1__.NewTable, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newStyle__WEBPACK_IMPORTED_MODULE_1__.NewTableList, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newStyle__WEBPACK_IMPORTED_MODULE_1__.NewTitle, {\n                                style: {\n                                    fontSize: \"32px\"\n                                },\n                                children: [\n                                    \"메모\",\n                                    props.isEdit ? \" 수정하기\" : \" 기록하기\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\유니유니\\\\ReadingBook\\\\book\\\\src\\\\components\\\\book\\\\new\\\\new.presenter.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\유니유니\\\\ReadingBook\\\\book\\\\src\\\\components\\\\book\\\\new\\\\new.presenter.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newStyle__WEBPACK_IMPORTED_MODULE_1__.NewTableList, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newStyle__WEBPACK_IMPORTED_MODULE_1__.NewTitle, {\n                                    children: \"제목\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\유니유니\\\\ReadingBook\\\\book\\\\src\\\\components\\\\book\\\\new\\\\new.presenter.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newStyle__WEBPACK_IMPORTED_MODULE_1__.NewInput, {\n                                    type: \"text\",\n                                    onChange: props === null || props === void 0 ? void 0 : props.onChangeTitle,\n                                    defaultValue: (_props_data = props.data) === null || _props_data === void 0 ? void 0 : _props_data.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\유니유니\\\\ReadingBook\\\\book\\\\src\\\\components\\\\book\\\\new\\\\new.presenter.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\유니유니\\\\ReadingBook\\\\book\\\\src\\\\components\\\\book\\\\new\\\\new.presenter.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newStyle__WEBPACK_IMPORTED_MODULE_1__.NewTableList, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newStyle__WEBPACK_IMPORTED_MODULE_1__.NewTitle, {\n                                    children: \"내용\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\유니유니\\\\ReadingBook\\\\book\\\\src\\\\components\\\\book\\\\new\\\\new.presenter.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newStyle__WEBPACK_IMPORTED_MODULE_1__.NewContent, {\n                                    onChange: props === null || props === void 0 ? void 0 : props.onChangeContents,\n                                    defaultValue: (_props_data1 = props.data) === null || _props_data1 === void 0 ? void 0 : _props_data1.contents\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\유니유니\\\\ReadingBook\\\\book\\\\src\\\\components\\\\book\\\\new\\\\new.presenter.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\유니유니\\\\ReadingBook\\\\book\\\\src\\\\components\\\\book\\\\new\\\\new.presenter.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newStyle__WEBPACK_IMPORTED_MODULE_1__.NewTableList, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newStyle__WEBPACK_IMPORTED_MODULE_1__.NewTitle, {\n                                    children: \"마음에 드는 구절\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\유니유니\\\\ReadingBook\\\\book\\\\src\\\\components\\\\book\\\\new\\\\new.presenter.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newStyle__WEBPACK_IMPORTED_MODULE_1__.NewInput, {\n                                    type: \"text\",\n                                    onChange: props === null || props === void 0 ? void 0 : props.onChangeSentence,\n                                    defaultValue: (_props_data2 = props.data) === null || _props_data2 === void 0 ? void 0 : _props_data2.sentence\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\유니유니\\\\ReadingBook\\\\book\\\\src\\\\components\\\\book\\\\new\\\\new.presenter.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\유니유니\\\\ReadingBook\\\\book\\\\src\\\\components\\\\book\\\\new\\\\new.presenter.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newStyle__WEBPACK_IMPORTED_MODULE_1__.NewTableList, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newStyle__WEBPACK_IMPORTED_MODULE_1__.NewTitle, {\n                                    children: \"책표지 사진 첨부\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\유니유니\\\\ReadingBook\\\\book\\\\src\\\\components\\\\book\\\\new\\\\new.presenter.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newStyle__WEBPACK_IMPORTED_MODULE_1__.NewImageSpace, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newStyle__WEBPACK_IMPORTED_MODULE_1__.NewImage, {\n                                        src: props.isEdit ? \"\".concat(props.imageURL) : \"\".concat(props.image),\n                                        isUpload: props === null || props === void 0 ? void 0 : props.image\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\유니유니\\\\ReadingBook\\\\book\\\\src\\\\components\\\\book\\\\new\\\\new.presenter.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\유니유니\\\\ReadingBook\\\\book\\\\src\\\\components\\\\book\\\\new\\\\new.presenter.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newStyle__WEBPACK_IMPORTED_MODULE_1__.NewInput, {\n                                    id: \"image\",\n                                    accept: \"image/*\",\n                                    type: \"file\",\n                                    multiple: true,\n                                    onChange: props.onChangeImage,\n                                    style: {\n                                        cursor: \"pointer\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\유니유니\\\\ReadingBook\\\\book\\\\src\\\\components\\\\book\\\\new\\\\new.presenter.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newStyle__WEBPACK_IMPORTED_MODULE_1__.NewUploadBtn, {\n                                    id: \"uploadImage\",\n                                    onClick: props.onClickUpload,\n                                    isUploadImage: props.isUploadImage,\n                                    children: \"이미지 등록하기\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\유니유니\\\\ReadingBook\\\\book\\\\src\\\\components\\\\book\\\\new\\\\new.presenter.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\유니유니\\\\ReadingBook\\\\book\\\\src\\\\components\\\\book\\\\new\\\\new.presenter.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\유니유니\\\\ReadingBook\\\\book\\\\src\\\\components\\\\book\\\\new\\\\new.presenter.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_newStyle__WEBPACK_IMPORTED_MODULE_1__.NewTableBtn, {\n                    onClick: props.isEdit ? props.onClickUpdate : props.onClickMemo,\n                    children: props.isEdit ? \"수정하기\" : \"기록하기\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\유니유니\\\\ReadingBook\\\\book\\\\src\\\\components\\\\book\\\\new\\\\new.presenter.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\LG\\\\Desktop\\\\유니유니\\\\ReadingBook\\\\book\\\\src\\\\components\\\\book\\\\new\\\\new.presenter.tsx\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(NewPageUI, \"J7PPXooW06IQ11rfabbvgk72KFw=\");\n_c = NewPageUI;\nvar _c;\n$RefreshReg$(_c, \"NewPageUI\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ib29rL25ldy9uZXcucHJlc2VudGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDZ0M7QUFDVTtBQUNFO0FBRTdCLFNBQVNJLFVBQVVDLEtBQWdCO1FBMEJwQkEsYUFPQUEsY0FRQUE7O0lBeEM1QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQVU7SUFDaERELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU0sUUFBUUMsV0FBVztZQUN2QkYsV0FBVztRQUNiLEdBQUc7UUFDSCxPQUFPLElBQU1HLGFBQWFGO0lBQzVCLEdBQUcsRUFBRTtJQUVMLHFCQUNFO2tCQUNHRix3QkFDQyw4REFBQ0wsc0RBQVdBOzs7O2lDQUVaLDhEQUFDRCxtREFBYzs7OEJBQ2IsOERBQUNBLCtDQUFVOztzQ0FDVCw4REFBQ0EsbURBQWM7c0NBQ2IsNEVBQUNBLCtDQUFVO2dDQUFDZSxPQUFPO29DQUFFQyxVQUFVO2dDQUFPOztvQ0FBRztvQ0FDcENYLE1BQU1ZLE1BQU0sR0FBRyxVQUFVOzs7Ozs7Ozs7Ozs7c0NBR2hDLDhEQUFDakIsbURBQWM7OzhDQUNiLDhEQUFDQSwrQ0FBVTs4Q0FBQzs7Ozs7OzhDQUNaLDhEQUFDQSwrQ0FBVTtvQ0FDVG1CLE1BQUs7b0NBQ0xDLFFBQVEsRUFBRWYsa0JBQUFBLDRCQUFBQSxNQUFPZ0IsYUFBYTtvQ0FDOUJDLFlBQVksR0FBRWpCLGNBQUFBLE1BQU1rQixJQUFJLGNBQVZsQixrQ0FBQUEsWUFBWW1CLEtBQUs7Ozs7Ozs7Ozs7OztzQ0FHbkMsOERBQUN4QixtREFBYzs7OENBQ2IsOERBQUNBLCtDQUFVOzhDQUFDOzs7Ozs7OENBQ1osOERBQUNBLGlEQUFZO29DQUNYb0IsUUFBUSxFQUFFZixrQkFBQUEsNEJBQUFBLE1BQU9xQixnQkFBZ0I7b0NBQ2pDSixZQUFZLEdBQUVqQixlQUFBQSxNQUFNa0IsSUFBSSxjQUFWbEIsbUNBQUFBLGFBQVlzQixRQUFROzs7Ozs7Ozs7Ozs7c0NBR3RDLDhEQUFDM0IsbURBQWM7OzhDQUNiLDhEQUFDQSwrQ0FBVTs4Q0FBQzs7Ozs7OzhDQUNaLDhEQUFDQSwrQ0FBVTtvQ0FDVG1CLE1BQUs7b0NBQ0xDLFFBQVEsRUFBRWYsa0JBQUFBLDRCQUFBQSxNQUFPdUIsZ0JBQWdCO29DQUNqQ04sWUFBWSxHQUFFakIsZUFBQUEsTUFBTWtCLElBQUksY0FBVmxCLG1DQUFBQSxhQUFZd0IsUUFBUTs7Ozs7Ozs7Ozs7O3NDQUd0Qyw4REFBQzdCLG1EQUFjOzs4Q0FDYiw4REFBQ0EsK0NBQVU7OENBQUM7Ozs7Ozs4Q0FDWiw4REFBQ0Esb0RBQWU7OENBQ2QsNEVBQUNBLCtDQUFVO3dDQUNUZ0MsS0FBSzNCLE1BQU1ZLE1BQU0sR0FBRyxHQUFrQixPQUFmWixNQUFNNEIsUUFBUSxJQUFLLEdBQWUsT0FBWjVCLE1BQU02QixLQUFLO3dDQUN4REMsUUFBUSxFQUFFOUIsa0JBQUFBLDRCQUFBQSxNQUFPNkIsS0FBSzs7Ozs7Ozs7Ozs7OENBRzFCLDhEQUFDbEMsK0NBQVU7b0NBQ1RvQyxJQUFHO29DQUNIQyxRQUFPO29DQUNQbEIsTUFBSztvQ0FDTG1CLFVBQVU7b0NBQ1ZsQixVQUFVZixNQUFNa0MsYUFBYTtvQ0FDN0J4QixPQUFPO3dDQUFFeUIsUUFBUTtvQ0FBVTs7Ozs7OzhDQUU3Qiw4REFBQ3hDLG1EQUFjO29DQUNib0MsSUFBRztvQ0FDSE0sU0FBU3JDLE1BQU1zQyxhQUFhO29DQUM1QkMsZUFBZXZDLE1BQU11QyxhQUFhOzhDQUNuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUtMLDhEQUFDNUMsa0RBQWE7b0JBQ1owQyxTQUFTckMsTUFBTVksTUFBTSxHQUFHWixNQUFNeUMsYUFBYSxHQUFHekMsTUFBTTBDLFdBQVc7OEJBRTlEMUMsTUFBTVksTUFBTSxHQUFHLFNBQVM7Ozs7Ozs7Ozs7Ozs7QUFNckM7R0E5RXdCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ib29rL25ldy9uZXcucHJlc2VudGVyLnRzeD8yNGM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElOZXdQcm9wcyB9IGZyb20gXCIuL25ldy50eXBlc1wiO1xyXG5pbXBvcnQgKiBhcyBOIGZyb20gXCIuL25ld1N0eWxlXCI7XHJcbmltcG9ydCBMb2FkaW5nUGFnZSBmcm9tIFwiQC9wYWdlcy9sb2FkaW5nXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1BhZ2VVSShwcm9wczogSU5ld1Byb3BzKSB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICA8TG9hZGluZ1BhZ2UgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8Ti5OZXdUYWJsZVdyYXA+XHJcbiAgICAgICAgICA8Ti5OZXdUYWJsZT5cclxuICAgICAgICAgICAgPE4uTmV3VGFibGVMaXN0PlxyXG4gICAgICAgICAgICAgIDxOLk5ld1RpdGxlIHN0eWxlPXt7IGZvbnRTaXplOiBcIjMycHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIOuplOuqqHtwcm9wcy5pc0VkaXQgPyBcIiDsiJjsoJXtlZjquLBcIiA6IFwiIOq4sOuhne2VmOq4sFwifVxyXG4gICAgICAgICAgICAgIDwvTi5OZXdUaXRsZT5cclxuICAgICAgICAgICAgPC9OLk5ld1RhYmxlTGlzdD5cclxuICAgICAgICAgICAgPE4uTmV3VGFibGVMaXN0PlxyXG4gICAgICAgICAgICAgIDxOLk5ld1RpdGxlPuygnOuqqTwvTi5OZXdUaXRsZT5cclxuICAgICAgICAgICAgICA8Ti5OZXdJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzPy5vbkNoYW5nZVRpdGxlfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9wcy5kYXRhPy50aXRsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L04uTmV3VGFibGVMaXN0PlxyXG4gICAgICAgICAgICA8Ti5OZXdUYWJsZUxpc3Q+XHJcbiAgICAgICAgICAgICAgPE4uTmV3VGl0bGU+64K07JqpPC9OLk5ld1RpdGxlPlxyXG4gICAgICAgICAgICAgIDxOLk5ld0NvbnRlbnRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcz8ub25DaGFuZ2VDb250ZW50c31cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvcHMuZGF0YT8uY29udGVudHN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9OLk5ld1RhYmxlTGlzdD5cclxuICAgICAgICAgICAgPE4uTmV3VGFibGVMaXN0PlxyXG4gICAgICAgICAgICAgIDxOLk5ld1RpdGxlPuuniOydjOyXkCDrk5zripQg6rWs7KCIPC9OLk5ld1RpdGxlPlxyXG4gICAgICAgICAgICAgIDxOLk5ld0lucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHM/Lm9uQ2hhbmdlU2VudGVuY2V9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Byb3BzLmRhdGE/LnNlbnRlbmNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTi5OZXdUYWJsZUxpc3Q+XHJcbiAgICAgICAgICAgIDxOLk5ld1RhYmxlTGlzdD5cclxuICAgICAgICAgICAgICA8Ti5OZXdUaXRsZT7ssYXtkZzsp4Ag7IKs7KeEIOyyqOu2gDwvTi5OZXdUaXRsZT5cclxuICAgICAgICAgICAgICA8Ti5OZXdJbWFnZVNwYWNlPlxyXG4gICAgICAgICAgICAgICAgPE4uTmV3SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXtwcm9wcy5pc0VkaXQgPyBgJHtwcm9wcy5pbWFnZVVSTH1gIDogYCR7cHJvcHMuaW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgaXNVcGxvYWQ9e3Byb3BzPy5pbWFnZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9OLk5ld0ltYWdlU3BhY2U+XHJcbiAgICAgICAgICAgICAgPE4uTmV3SW5wdXRcclxuICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICBtdWx0aXBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZUltYWdlfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPE4uTmV3VXBsb2FkQnRuXHJcbiAgICAgICAgICAgICAgICBpZD1cInVwbG9hZEltYWdlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2tVcGxvYWR9XHJcbiAgICAgICAgICAgICAgICBpc1VwbG9hZEltYWdlPXtwcm9wcy5pc1VwbG9hZEltYWdlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIOydtOuvuOyngCDrk7HroZ3tlZjquLBcclxuICAgICAgICAgICAgICA8L04uTmV3VXBsb2FkQnRuPlxyXG4gICAgICAgICAgICA8L04uTmV3VGFibGVMaXN0PlxyXG4gICAgICAgICAgPC9OLk5ld1RhYmxlPlxyXG4gICAgICAgICAgPE4uTmV3VGFibGVCdG5cclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMuaXNFZGl0ID8gcHJvcHMub25DbGlja1VwZGF0ZSA6IHByb3BzLm9uQ2xpY2tNZW1vfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMuaXNFZGl0ID8gXCLsiJjsoJXtlZjquLBcIiA6IFwi6riw66Gd7ZWY6riwXCJ9XHJcbiAgICAgICAgICA8L04uTmV3VGFibGVCdG4+XHJcbiAgICAgICAgPC9OLk5ld1RhYmxlV3JhcD5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIk4iLCJMb2FkaW5nUGFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmV3UGFnZVVJIiwicHJvcHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIk5ld1RhYmxlV3JhcCIsIk5ld1RhYmxlIiwiTmV3VGFibGVMaXN0IiwiTmV3VGl0bGUiLCJzdHlsZSIsImZvbnRTaXplIiwiaXNFZGl0IiwiTmV3SW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJvbkNoYW5nZVRpdGxlIiwiZGVmYXVsdFZhbHVlIiwiZGF0YSIsInRpdGxlIiwiTmV3Q29udGVudCIsIm9uQ2hhbmdlQ29udGVudHMiLCJjb250ZW50cyIsIm9uQ2hhbmdlU2VudGVuY2UiLCJzZW50ZW5jZSIsIk5ld0ltYWdlU3BhY2UiLCJOZXdJbWFnZSIsInNyYyIsImltYWdlVVJMIiwiaW1hZ2UiLCJpc1VwbG9hZCIsImlkIiwiYWNjZXB0IiwibXVsdGlwbGUiLCJvbkNoYW5nZUltYWdlIiwiY3Vyc29yIiwiTmV3VXBsb2FkQnRuIiwib25DbGljayIsIm9uQ2xpY2tVcGxvYWQiLCJpc1VwbG9hZEltYWdlIiwiTmV3VGFibGVCdG4iLCJvbkNsaWNrVXBkYXRlIiwib25DbGlja01lbW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/book/new/new.presenter.tsx\n"));

/***/ })

});