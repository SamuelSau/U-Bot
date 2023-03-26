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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_mic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-mic */ \"./node_modules/react-mic/dist/index.js\");\n/* harmony import */ var react_mic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_mic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RecordingComponent.module.css */ \"./src/components/RecordingComponent.module.css\");\n/* harmony import */ var _RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst RecordingComponent = ()=>{\n    _s();\n    const [recording, setRecording] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [audioBlob, setAudioBlob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [chatGPTResponse, setChatGPTResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [base64Audio, setBase64Audio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const startRecording = ()=>{\n        setRecording(true);\n    };\n    const stopRecording = ()=>{\n        setRecording(false);\n    };\n    const onData = (recordedData)=>{\n    // You can process recorded data here if needed\n    };\n    const onStop = (recordedBlob)=>{\n        console.log(\"Recorded blob:\", recordedBlob);\n        setAudioBlob(recordedBlob.blob);\n    };\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (base64Audio && audioRef.current) {\n            const audioData = \"data:audio/wav;base64,\".concat(base64Audio);\n            audioRef.current.src = audioData;\n            audioRef.current.play(); // Autoplay the audio\n        }\n    }, [\n        base64Audio\n    ]);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const formData = new FormData();\n        formData.append(\"audio_file\", new File([\n            audioBlob\n        ], \"audio.wav\", {\n            type: \"audio/wav\"\n        }));\n        try {\n            const response = await fetch(\"http://127.0.0.1:8000/api/get_chatgpt_response/\", {\n                method: \"POST\",\n                body: formData\n            });\n            const data = await response.json();\n            console.log(\"Response:\", data);\n            setUserInput(data.user_input);\n            setChatGPTResponse(data.chatgpt_response);\n            setBase64Audio(data.audio_base64); // Store the Base64 audio data\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().heading),\n                children: \"Recording Component\"\n            }, void 0, false, {\n                fileName: \"/Users/janpaulparedero/Projects/gitReady/gitReady/frontend/src/components/RecordingComponent.js\",\n                lineNumber: 66,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_mic__WEBPACK_IMPORTED_MODULE_2__.ReactMic, {\n                record: recording,\n                className: \"\".concat((_RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().soundWave), \" sound-wave\"),\n                onStop: onStop,\n                onData: onData,\n                mimeType: \"audio/wav\"\n            }, void 0, false, {\n                fileName: \"/Users/janpaulparedero/Projects/gitReady/gitReady/frontend/src/components/RecordingComponent.js\",\n                lineNumber: 67,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                onClick: startRecording,\n                disabled: recording,\n                children: \"Start Recording\"\n            }, void 0, false, {\n                fileName: \"/Users/janpaulparedero/Projects/gitReady/gitReady/frontend/src/components/RecordingComponent.js\",\n                lineNumber: 74,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                onClick: stopRecording,\n                disabled: !recording,\n                children: \"Stop Recording\"\n            }, void 0, false, {\n                fileName: \"/Users/janpaulparedero/Projects/gitReady/gitReady/frontend/src/components/RecordingComponent.js\",\n                lineNumber: 81,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                onClick: handleSubmit,\n                disabled: !audioBlob,\n                children: \"Submit Recording\"\n            }, void 0, false, {\n                fileName: \"/Users/janpaulparedero/Projects/gitReady/gitReady/frontend/src/components/RecordingComponent.js\",\n                lineNumber: 88,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                ref: audioRef,\n                controls: true,\n                autoPlay: true\n            }, void 0, false, {\n                fileName: \"/Users/janpaulparedero/Projects/gitReady/gitReady/frontend/src/components/RecordingComponent.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/janpaulparedero/Projects/gitReady/gitReady/frontend/src/components/RecordingComponent.js\",\n        lineNumber: 65,\n        columnNumber: 3\n    }, undefined);\n};\n_s(RecordingComponent, \"Sworr5B5M/nhHkYAAr1XLEBb008=\");\n_c = RecordingComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecordingComponent);\nvar _c;\n$RefreshReg$(_c, \"RecordingComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUErRk4sK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdDb21wb25lbnQuanM/Y2FkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJlYWN0TWljIH0gZnJvbSAncmVhY3QtbWljJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1JlY29yZGluZ0NvbXBvbmVudC5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IFJlY29yZGluZ0NvbXBvbmVudCA9ICgpID0+IHtcclxuXHRjb25zdCBbcmVjb3JkaW5nLCBzZXRSZWNvcmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFthdWRpb0Jsb2IsIHNldEF1ZGlvQmxvYl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdXNlcklucHV0LCBzZXRVc2VySW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjaGF0R1BUUmVzcG9uc2UsIHNldENoYXRHUFRSZXNwb25zZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2Jhc2U2NEF1ZGlvLCBzZXRCYXNlNjRBdWRpb10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcblx0Y29uc3Qgc3RhcnRSZWNvcmRpbmcgPSAoKSA9PiB7XHJcblx0XHRzZXRSZWNvcmRpbmcodHJ1ZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc3RvcFJlY29yZGluZyA9ICgpID0+IHtcclxuXHRcdHNldFJlY29yZGluZyhmYWxzZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25EYXRhID0gKHJlY29yZGVkRGF0YSkgPT4ge1xyXG5cdFx0Ly8gWW91IGNhbiBwcm9jZXNzIHJlY29yZGVkIGRhdGEgaGVyZSBpZiBuZWVkZWRcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvblN0b3AgPSAocmVjb3JkZWRCbG9iKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZygnUmVjb3JkZWQgYmxvYjonLCByZWNvcmRlZEJsb2IpO1xyXG5cdFx0c2V0QXVkaW9CbG9iKHJlY29yZGVkQmxvYi5ibG9iKTtcclxuXHR9O1xyXG5cclxuICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGJhc2U2NEF1ZGlvICYmIGF1ZGlvUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgYXVkaW9EYXRhID0gYGRhdGE6YXVkaW8vd2F2O2Jhc2U2NCwke2Jhc2U2NEF1ZGlvfWA7XHJcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQuc3JjID0gYXVkaW9EYXRhO1xyXG4gICAgICAgICAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTsgLy8gQXV0b3BsYXkgdGhlIGF1ZGlvXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2Jhc2U2NEF1ZGlvXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblx0XHRmb3JtRGF0YS5hcHBlbmQoXHJcblx0XHRcdCdhdWRpb19maWxlJyxcclxuXHRcdFx0bmV3IEZpbGUoW2F1ZGlvQmxvYl0sICdhdWRpby53YXYnLCB7IHR5cGU6ICdhdWRpby93YXYnIH0pXHJcblx0XHQpO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuXHRcdFx0XHQnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9nZXRfY2hhdGdwdF9yZXNwb25zZS8nLFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0Ym9keTogZm9ybURhdGEsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnUmVzcG9uc2U6JywgZGF0YSk7XHJcbiAgICAgIHNldFVzZXJJbnB1dChkYXRhLnVzZXJfaW5wdXQpO1xyXG4gICAgICBzZXRDaGF0R1BUUmVzcG9uc2UoZGF0YS5jaGF0Z3B0X3Jlc3BvbnNlKTtcclxuICAgICAgc2V0QmFzZTY0QXVkaW8oZGF0YS5hdWRpb19iYXNlNjQpOyAvLyBTdG9yZSB0aGUgQmFzZTY0IGF1ZGlvIGRhdGFcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG5cdFx0XHQ8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ30+UmVjb3JkaW5nIENvbXBvbmVudDwvaDE+XHJcblx0XHRcdDxSZWFjdE1pY1xyXG5cdFx0XHRcdHJlY29yZD17cmVjb3JkaW5nfVxyXG5cdFx0XHRcdGNsYXNzTmFtZT17YCR7c3R5bGVzLnNvdW5kV2F2ZX0gc291bmQtd2F2ZWB9XHJcblx0XHRcdFx0b25TdG9wPXtvblN0b3B9XHJcblx0XHRcdFx0b25EYXRhPXtvbkRhdGF9XHJcblx0XHRcdFx0bWltZVR5cGU9J2F1ZGlvL3dhdidcclxuXHRcdFx0Lz5cclxuXHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cclxuXHRcdFx0XHRvbkNsaWNrPXtzdGFydFJlY29yZGluZ31cclxuXHRcdFx0XHRkaXNhYmxlZD17cmVjb3JkaW5nfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0U3RhcnQgUmVjb3JkaW5nXHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxyXG5cdFx0XHRcdG9uQ2xpY2s9e3N0b3BSZWNvcmRpbmd9XHJcblx0XHRcdFx0ZGlzYWJsZWQ9eyFyZWNvcmRpbmd9XHJcblx0XHRcdD5cclxuXHRcdFx0XHRTdG9wIFJlY29yZGluZ1xyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cclxuXHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XHJcblx0XHRcdFx0ZGlzYWJsZWQ9eyFhdWRpb0Jsb2J9XHJcblx0XHRcdD5cclxuXHRcdFx0XHRTdWJtaXQgUmVjb3JkaW5nXHJcblx0XHRcdDwvYnV0dG9uPlxyXG4gICAgICA8YXVkaW8gcmVmPXthdWRpb1JlZn0gY29udHJvbHMgYXV0b1BsYXkvPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY29yZGluZ0NvbXBvbmVudDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIlJlYWN0TWljIiwic3R5bGVzIiwiUmVjb3JkaW5nQ29tcG9uZW50IiwicmVjb3JkaW5nIiwic2V0UmVjb3JkaW5nIiwiYXVkaW9CbG9iIiwic2V0QXVkaW9CbG9iIiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwiY2hhdEdQVFJlc3BvbnNlIiwic2V0Q2hhdEdQVFJlc3BvbnNlIiwiYmFzZTY0QXVkaW8iLCJzZXRCYXNlNjRBdWRpbyIsInN0YXJ0UmVjb3JkaW5nIiwic3RvcFJlY29yZGluZyIsIm9uRGF0YSIsInJlY29yZGVkRGF0YSIsIm9uU3RvcCIsInJlY29yZGVkQmxvYiIsImNvbnNvbGUiLCJsb2ciLCJibG9iIiwiYXVkaW9SZWYiLCJjdXJyZW50IiwiYXVkaW9EYXRhIiwic3JjIiwicGxheSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiRmlsZSIsInR5cGUiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImRhdGEiLCJqc29uIiwidXNlcl9pbnB1dCIsImNoYXRncHRfcmVzcG9uc2UiLCJhdWRpb19iYXNlNjQiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgxIiwiaGVhZGluZyIsInJlY29yZCIsInNvdW5kV2F2ZSIsIm1pbWVUeXBlIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwiYXVkaW8iLCJyZWYiLCJjb250cm9scyIsImF1dG9QbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/RecordingComponent.js\n"));

/***/ })

});