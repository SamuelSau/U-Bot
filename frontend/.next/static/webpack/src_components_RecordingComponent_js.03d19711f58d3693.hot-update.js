"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_RecordingComponent_js",{

/***/ "./src/components/RecordingComponent.js":
/*!**********************************************!*\
  !*** ./src/components/RecordingComponent.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_mic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-mic */ \"./node_modules/react-mic/dist/index.js\");\n/* harmony import */ var react_mic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_mic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RecordingComponent.module.css */ \"./src/components/RecordingComponent.module.css\");\n/* harmony import */ var _RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst RecordingComponent = ()=>{\n    _s();\n    const [recording, setRecording] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [audioBlob, setAudioBlob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const startRecording = ()=>{\n        setRecording(true);\n    };\n    const stopRecording = ()=>{\n        setRecording(false);\n    };\n    const onData = (recordedData)=>{\n    // You can process recorded data here if needed\n    };\n    const onStop = (recordedBlob)=>{\n        console.log(\"Recorded blob:\", recordedBlob);\n        setAudioBlob(recordedBlob.blob);\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const formData = new FormData();\n        formData.append(\"audio_file\", new File([\n            audioBlob\n        ], \"audio.wav\", {\n            type: \"audio/wav\"\n        }));\n        try {\n            const response = await fetch(\"http://127.0.0.1:8000/api/get_chatgpt_response/\", {\n                method: \"POST\",\n                body: formData\n            });\n            console.log(\"Response:\", response);\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    };\n    const downloadAudio = ()=>{\n        if (audioBlob) {\n            const url = URL.createObjectURL(audioBlob);\n            const link = document.createElement(\"a\");\n            link.href = url;\n            link.setAttribute(\"download\", \"audio.wav\");\n            document.body.appendChild(link);\n            link.click();\n            document.body.removeChild(link);\n        } else {\n            alert(\"No audio recording available.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().heading),\n                children: \"Recording Component\"\n            }, void 0, false, {\n                fileName: \"/Users/janpaulparedero/Projects/gitReady/gitReady/frontend/src/components/RecordingComponent.js\",\n                lineNumber: 63,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_mic__WEBPACK_IMPORTED_MODULE_2__.ReactMic, {\n                record: recording,\n                className: \"\".concat((_RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().soundWave), \" sound-wave\"),\n                onStop: onStop,\n                onData: onData,\n                mimeType: \"audio/wav\"\n            }, void 0, false, {\n                fileName: \"/Users/janpaulparedero/Projects/gitReady/gitReady/frontend/src/components/RecordingComponent.js\",\n                lineNumber: 64,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                onClick: startRecording,\n                disabled: recording,\n                children: \"Start Recording\"\n            }, void 0, false, {\n                fileName: \"/Users/janpaulparedero/Projects/gitReady/gitReady/frontend/src/components/RecordingComponent.js\",\n                lineNumber: 71,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                onClick: stopRecording,\n                disabled: !recording,\n                children: \"Stop Recording\"\n            }, void 0, false, {\n                fileName: \"/Users/janpaulparedero/Projects/gitReady/gitReady/frontend/src/components/RecordingComponent.js\",\n                lineNumber: 78,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                onClick: handleSubmit,\n                disabled: !audioBlob,\n                children: \"Submit Recording\"\n            }, void 0, false, {\n                fileName: \"/Users/janpaulparedero/Projects/gitReady/gitReady/frontend/src/components/RecordingComponent.js\",\n                lineNumber: 85,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                onClick: downloadAudio,\n                disabled: !audioBlob,\n                children: \"Submit Recording\"\n            }, void 0, false, {\n                fileName: \"/Users/janpaulparedero/Projects/gitReady/gitReady/frontend/src/components/RecordingComponent.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/janpaulparedero/Projects/gitReady/gitReady/frontend/src/components/RecordingComponent.js\",\n        lineNumber: 62,\n        columnNumber: 3\n    }, undefined);\n};\n_s(RecordingComponent, \"sgVcN73gIbOdGQaVCy3E/kuMiQc=\");\n_c = RecordingComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecordingComponent);\nvar _c;\n$RefreshReg$(_c, \"RecordingComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdDb21wb25lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSDtBQUNnQjtBQUVyRCxNQUFNSSxxQkFBcUIsSUFBTTs7SUFDaEMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDLEtBQUs7SUFDaEQsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDLElBQUk7SUFFL0MsTUFBTVEsaUJBQWlCLElBQU07UUFDNUJILGFBQWEsSUFBSTtJQUNsQjtJQUVBLE1BQU1JLGdCQUFnQixJQUFNO1FBQzNCSixhQUFhLEtBQUs7SUFDbkI7SUFFQSxNQUFNSyxTQUFTLENBQUNDLGVBQWlCO0lBQ2hDLCtDQUErQztJQUNoRDtJQUVBLE1BQU1DLFNBQVMsQ0FBQ0MsZUFBaUI7UUFDaENDLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JGO1FBQzlCTixhQUFhTSxhQUFhRyxJQUFJO0lBQy9CO0lBRUEsTUFBTUMsZUFBZSxPQUFPQyxRQUFVO1FBQ3JDQSxNQUFNQyxjQUFjO1FBQ3BCLE1BQU1DLFdBQVcsSUFBSUM7UUFDckJELFNBQVNFLE1BQU0sQ0FDZCxjQUNBLElBQUlDLEtBQUs7WUFBQ2pCO1NBQVUsRUFBRSxhQUFhO1lBQUVrQixNQUFNO1FBQVk7UUFFeEQsSUFBSTtZQUNILE1BQU1DLFdBQVcsTUFBTUMsTUFDdEIsbURBQ0E7Z0JBQ0NDLFFBQVE7Z0JBQ1JDLE1BQU1SO1lBQ1A7WUFFRE4sUUFBUUMsR0FBRyxDQUFDLGFBQWFVO1FBQzFCLEVBQUUsT0FBT0ksT0FBTztZQUNmZixRQUFRZSxLQUFLLENBQUMsVUFBVUE7UUFDekI7SUFDRDtJQUVDLE1BQU1DLGdCQUFnQixJQUFNO1FBQzFCLElBQUl4QixXQUFXO1lBQ2IsTUFBTXlCLE1BQU1DLElBQUlDLGVBQWUsQ0FBQzNCO1lBQ2hDLE1BQU00QixPQUFPQyxTQUFTQyxhQUFhLENBQUM7WUFDcENGLEtBQUtHLElBQUksR0FBR047WUFDWkcsS0FBS0ksWUFBWSxDQUFDLFlBQVk7WUFDOUJILFNBQVNQLElBQUksQ0FBQ1csV0FBVyxDQUFDTDtZQUMxQkEsS0FBS00sS0FBSztZQUNWTCxTQUFTUCxJQUFJLENBQUNhLFdBQVcsQ0FBQ1A7UUFDNUIsT0FBTztZQUNMUSxNQUFNO1FBQ1IsQ0FBQztJQUNIO0lBRUQscUJBQ0MsOERBQUNDO1FBQUlDLFdBQVcxQyxpRkFBZ0I7OzBCQUMvQiw4REFBQzRDO2dCQUFHRixXQUFXMUMsK0VBQWM7MEJBQUU7Ozs7OzswQkFDL0IsOERBQUNELCtDQUFRQTtnQkFDUitDLFFBQVE1QztnQkFDUndDLFdBQVcsR0FBb0IsT0FBakIxQyxpRkFBZ0IsRUFBQztnQkFDL0JVLFFBQVFBO2dCQUNSRixRQUFRQTtnQkFDUndDLFVBQVM7Ozs7OzswQkFFViw4REFBQ0M7Z0JBQ0FQLFdBQVcxQyw4RUFBYTtnQkFDeEJrRCxTQUFTNUM7Z0JBQ1Q2QyxVQUFVakQ7MEJBQ1Y7Ozs7OzswQkFHRCw4REFBQytDO2dCQUNBUCxXQUFXMUMsOEVBQWE7Z0JBQ3hCa0QsU0FBUzNDO2dCQUNUNEMsVUFBVSxDQUFDakQ7MEJBQ1g7Ozs7OzswQkFHRCw4REFBQytDO2dCQUNBUCxXQUFXMUMsOEVBQWE7Z0JBQ3hCa0QsU0FBU25DO2dCQUNUb0MsVUFBVSxDQUFDL0M7MEJBQ1g7Ozs7OzswQkFHRSw4REFBQzZDO2dCQUNIUCxXQUFXMUMsOEVBQWE7Z0JBQ3hCa0QsU0FBU3RCO2dCQUNUdUIsVUFBVSxDQUFDL0M7MEJBQ1g7Ozs7Ozs7Ozs7OztBQUtKO0dBaEdNSDtLQUFBQTtBQWtHTiwrREFBZUEsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1JlY29yZGluZ0NvbXBvbmVudC5qcz9jYWQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmVhY3RNaWMgfSBmcm9tICdyZWFjdC1taWMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUmVjb3JkaW5nQ29tcG9uZW50Lm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgUmVjb3JkaW5nQ29tcG9uZW50ID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtyZWNvcmRpbmcsIHNldFJlY29yZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2F1ZGlvQmxvYiwgc2V0QXVkaW9CbG9iXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHRjb25zdCBzdGFydFJlY29yZGluZyA9ICgpID0+IHtcclxuXHRcdHNldFJlY29yZGluZyh0cnVlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzdG9wUmVjb3JkaW5nID0gKCkgPT4ge1xyXG5cdFx0c2V0UmVjb3JkaW5nKGZhbHNlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvbkRhdGEgPSAocmVjb3JkZWREYXRhKSA9PiB7XHJcblx0XHQvLyBZb3UgY2FuIHByb2Nlc3MgcmVjb3JkZWQgZGF0YSBoZXJlIGlmIG5lZWRlZFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9uU3RvcCA9IChyZWNvcmRlZEJsb2IpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKCdSZWNvcmRlZCBibG9iOicsIHJlY29yZGVkQmxvYik7XHJcblx0XHRzZXRBdWRpb0Jsb2IocmVjb3JkZWRCbG9iLmJsb2IpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblx0XHRmb3JtRGF0YS5hcHBlbmQoXHJcblx0XHRcdCdhdWRpb19maWxlJyxcclxuXHRcdFx0bmV3IEZpbGUoW2F1ZGlvQmxvYl0sICdhdWRpby53YXYnLCB7IHR5cGU6ICdhdWRpby93YXYnIH0pXHJcblx0XHQpO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuXHRcdFx0XHQnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9nZXRfY2hhdGdwdF9yZXNwb25zZS8nLFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0Ym9keTogZm9ybURhdGEsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnUmVzcG9uc2U6JywgcmVzcG9uc2UpO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG4gIGNvbnN0IGRvd25sb2FkQXVkaW8gPSAoKSA9PiB7XHJcbiAgICBpZiAoYXVkaW9CbG9iKSB7XHJcbiAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYXVkaW9CbG9iKTtcclxuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICBsaW5rLmhyZWYgPSB1cmw7XHJcbiAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgXCJhdWRpby53YXZcIik7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiTm8gYXVkaW8gcmVjb3JkaW5nIGF2YWlsYWJsZS5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuXHRcdFx0PGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9PlJlY29yZGluZyBDb21wb25lbnQ8L2gxPlxyXG5cdFx0XHQ8UmVhY3RNaWNcclxuXHRcdFx0XHRyZWNvcmQ9e3JlY29yZGluZ31cclxuXHRcdFx0XHRjbGFzc05hbWU9e2Ake3N0eWxlcy5zb3VuZFdhdmV9IHNvdW5kLXdhdmVgfVxyXG5cdFx0XHRcdG9uU3RvcD17b25TdG9wfVxyXG5cdFx0XHRcdG9uRGF0YT17b25EYXRhfVxyXG5cdFx0XHRcdG1pbWVUeXBlPSdhdWRpby93YXYnXHJcblx0XHRcdC8+XHJcblx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XHJcblx0XHRcdFx0b25DbGljaz17c3RhcnRSZWNvcmRpbmd9XHJcblx0XHRcdFx0ZGlzYWJsZWQ9e3JlY29yZGluZ31cclxuXHRcdFx0PlxyXG5cdFx0XHRcdFN0YXJ0IFJlY29yZGluZ1xyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cclxuXHRcdFx0XHRvbkNsaWNrPXtzdG9wUmVjb3JkaW5nfVxyXG5cdFx0XHRcdGRpc2FibGVkPXshcmVjb3JkaW5nfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0U3RvcCBSZWNvcmRpbmdcclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XHJcblx0XHRcdFx0b25DbGljaz17aGFuZGxlU3VibWl0fVxyXG5cdFx0XHRcdGRpc2FibGVkPXshYXVkaW9CbG9ifVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0U3VibWl0IFJlY29yZGluZ1xyXG5cdFx0XHQ8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvblxyXG5cdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cclxuXHRcdFx0XHRvbkNsaWNrPXtkb3dubG9hZEF1ZGlvfVxyXG5cdFx0XHRcdGRpc2FibGVkPXshYXVkaW9CbG9ifVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0U3VibWl0IFJlY29yZGluZ1xyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWNvcmRpbmdDb21wb25lbnQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJSZWFjdE1pYyIsInN0eWxlcyIsIlJlY29yZGluZ0NvbXBvbmVudCIsInJlY29yZGluZyIsInNldFJlY29yZGluZyIsImF1ZGlvQmxvYiIsInNldEF1ZGlvQmxvYiIsInN0YXJ0UmVjb3JkaW5nIiwic3RvcFJlY29yZGluZyIsIm9uRGF0YSIsInJlY29yZGVkRGF0YSIsIm9uU3RvcCIsInJlY29yZGVkQmxvYiIsImNvbnNvbGUiLCJsb2ciLCJibG9iIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJGaWxlIiwidHlwZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiZXJyb3IiLCJkb3dubG9hZEF1ZGlvIiwidXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgxIiwiaGVhZGluZyIsInJlY29yZCIsInNvdW5kV2F2ZSIsIm1pbWVUeXBlIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/RecordingComponent.js\n"));

/***/ })

});