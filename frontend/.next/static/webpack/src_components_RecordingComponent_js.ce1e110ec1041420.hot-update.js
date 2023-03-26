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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_mic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-mic */ \"./node_modules/react-mic/dist/index.js\");\n/* harmony import */ var react_mic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_mic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RecordingComponent.module.css */ \"./src/components/RecordingComponent.module.css\");\n/* harmony import */ var _RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst RecordingComponent = ()=>{\n    _s();\n    const [recording, setRecording] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [audioBlob, setAudioBlob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [chatGPTResponse, setChatGPTResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [base64Audio, setBase64Audio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const startRecording = ()=>{\n        setRecording(true);\n    };\n    const stopRecording = ()=>{\n        setRecording(false);\n    };\n    const onData = (recordedData)=>{\n    // You can process recorded data here if needed\n    };\n    const onStop = (recordedBlob)=>{\n        console.log(\"Recorded blob:\", recordedBlob);\n        setAudioBlob(recordedBlob.blob);\n    };\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (base64Audio && audioRef.current) {\n            const audioData = \"data:audio/wav;base64,\".concat(base64Audio);\n            audioRef.current.src = audioData;\n            audioRef.current.play(); // Autoplay the audio\n        }\n    }, [\n        base64Audio\n    ]);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const formData = new FormData();\n        formData.append(\"audio_file\", new File([\n            audioBlob\n        ], \"audio.wav\", {\n            type: \"audio/wav\"\n        }));\n        try {\n            const response = await fetch(\"http://127.0.0.1:8000/api/get_chatgpt_response/\", {\n                method: \"POST\",\n                body: formData\n            });\n            const data = await response.json();\n            console.log(\"Response:\", data);\n            setUserInput(data.user_input);\n            setChatGPTResponse(data.chatgpt_response);\n            setBase64Audio(data.audio_base64); // Store the Base64 audio data\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    };\n    const endSession = async ()=>{\n        try {\n            const response = await fetch(\"http://127.0.0.1:8000/api/end_session/\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (response.ok) {\n                // The session has ended successfully, refresh the page\n                window.location.reload();\n            } else {\n                console.error(\"Error ending session:\", response.statusText);\n            }\n        } catch (error) {\n            console.error(\"Error ending session:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().heading),\n                children: \"Recording Component\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samdr\\\\gitreadyupdated\\\\gitReady\\\\frontend\\\\src\\\\components\\\\RecordingComponent.js\",\n                lineNumber: 86,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_mic__WEBPACK_IMPORTED_MODULE_2__.ReactMic, {\n                record: recording,\n                className: \"\".concat((_RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().soundWave), \" sound-wave\"),\n                onStop: onStop,\n                onData: onData,\n                mimeType: \"audio/wav\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samdr\\\\gitreadyupdated\\\\gitReady\\\\frontend\\\\src\\\\components\\\\RecordingComponent.js\",\n                lineNumber: 87,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                onClick: startRecording,\n                disabled: recording,\n                children: \"Start Recording\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samdr\\\\gitreadyupdated\\\\gitReady\\\\frontend\\\\src\\\\components\\\\RecordingComponent.js\",\n                lineNumber: 94,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                onClick: stopRecording,\n                disabled: !recording,\n                children: \"Stop Recording\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samdr\\\\gitreadyupdated\\\\gitReady\\\\frontend\\\\src\\\\components\\\\RecordingComponent.js\",\n                lineNumber: 101,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_RecordingComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                onClick: handleSubmit,\n                disabled: !audioBlob,\n                children: \"Submit Recording\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samdr\\\\gitreadyupdated\\\\gitReady\\\\frontend\\\\src\\\\components\\\\RecordingComponent.js\",\n                lineNumber: 108,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                ref: audioRef,\n                controls: true,\n                autoPlay: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samdr\\\\gitreadyupdated\\\\gitReady\\\\frontend\\\\src\\\\components\\\\RecordingComponent.js\",\n                lineNumber: 115,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: endSession,\n                children: \"End Session\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samdr\\\\gitreadyupdated\\\\gitReady\\\\frontend\\\\src\\\\components\\\\RecordingComponent.js\",\n                lineNumber: 116,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\samdr\\\\gitreadyupdated\\\\gitReady\\\\frontend\\\\src\\\\components\\\\RecordingComponent.js\",\n        lineNumber: 85,\n        columnNumber: 3\n    }, undefined);\n};\n_s(RecordingComponent, \"Sworr5B5M/nhHkYAAr1XLEBb008=\");\n_c = RecordingComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecordingComponent);\nvar _c;\n$RefreshReg$(_c, \"RecordingComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RVYsOERBQUNDO2dCQUNBUCxXQUFXcEQsOEVBQWE7Z0JBQ3hCNEQsU0FBU2hEO2dCQUNUaUQsVUFBVTNEOzBCQUNWOzs7Ozs7MEJBR0QsOERBQUN5RDtnQkFDQVAsV0FBV3BELDhFQUFhO2dCQUN4QjRELFNBQVMvQztnQkFDVGdELFVBQVUsQ0FBQzNEOzBCQUNYOzs7Ozs7MEJBR0QsOERBQUN5RDtnQkFDQVAsV0FBV3BELDhFQUFhO2dCQUN4QjRELFNBQVNsQztnQkFDVG1DLFVBQVUsQ0FBQ3pEOzBCQUNYOzs7Ozs7MEJBR0QsOERBQUMwRDtnQkFBTUMsS0FBSzFDO2dCQUFVMkMsUUFBUTtnQkFBQ0MsUUFBUTs7Ozs7OzBCQUN2Qyw4REFBQ047Z0JBQU9DLFNBQVNoQjswQkFBWTs7Ozs7Ozs7Ozs7O0FBR2hDO0dBbEhNM0M7S0FBQUE7QUFvSE4sK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZWNvcmRpbmdDb21wb25lbnQuanM/Y2FkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZWFjdE1pYyB9IGZyb20gJ3JlYWN0LW1pYyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9SZWNvcmRpbmdDb21wb25lbnQubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBSZWNvcmRpbmdDb21wb25lbnQgPSAoKSA9PiB7XHJcblx0Y29uc3QgW3JlY29yZGluZywgc2V0UmVjb3JkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbYXVkaW9CbG9iLCBzZXRBdWRpb0Jsb2JdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbY2hhdEdQVFJlc3BvbnNlLCBzZXRDaGF0R1BUUmVzcG9uc2VdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtiYXNlNjRBdWRpbywgc2V0QmFzZTY0QXVkaW9dID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG5cdGNvbnN0IHN0YXJ0UmVjb3JkaW5nID0gKCkgPT4ge1xyXG5cdFx0c2V0UmVjb3JkaW5nKHRydWUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHN0b3BSZWNvcmRpbmcgPSAoKSA9PiB7XHJcblx0XHRzZXRSZWNvcmRpbmcoZmFsc2UpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9uRGF0YSA9IChyZWNvcmRlZERhdGEpID0+IHtcclxuXHRcdC8vIFlvdSBjYW4gcHJvY2VzcyByZWNvcmRlZCBkYXRhIGhlcmUgaWYgbmVlZGVkXHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25TdG9wID0gKHJlY29yZGVkQmxvYikgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coJ1JlY29yZGVkIGJsb2I6JywgcmVjb3JkZWRCbG9iKTtcclxuXHRcdHNldEF1ZGlvQmxvYihyZWNvcmRlZEJsb2IuYmxvYik7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgYXVkaW9SZWYgPSB1c2VSZWYoKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChiYXNlNjRBdWRpbyAmJiBhdWRpb1JlZi5jdXJyZW50KSB7XHJcblx0XHRcdGNvbnN0IGF1ZGlvRGF0YSA9IGBkYXRhOmF1ZGlvL3dhdjtiYXNlNjQsJHtiYXNlNjRBdWRpb31gO1xyXG5cdFx0XHRhdWRpb1JlZi5jdXJyZW50LnNyYyA9IGF1ZGlvRGF0YTtcclxuXHRcdFx0YXVkaW9SZWYuY3VycmVudC5wbGF5KCk7IC8vIEF1dG9wbGF5IHRoZSBhdWRpb1xyXG5cdFx0fVxyXG5cdH0sIFtiYXNlNjRBdWRpb10pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdFx0Zm9ybURhdGEuYXBwZW5kKFxyXG5cdFx0XHQnYXVkaW9fZmlsZScsXHJcblx0XHRcdG5ldyBGaWxlKFthdWRpb0Jsb2JdLCAnYXVkaW8ud2F2JywgeyB0eXBlOiAnYXVkaW8vd2F2JyB9KVxyXG5cdFx0KTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcblx0XHRcdFx0J2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvZ2V0X2NoYXRncHRfcmVzcG9uc2UvJyxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdGJvZHk6IGZvcm1EYXRhLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1Jlc3BvbnNlOicsIGRhdGEpO1xyXG5cdFx0XHRzZXRVc2VySW5wdXQoZGF0YS51c2VyX2lucHV0KTtcclxuXHRcdFx0c2V0Q2hhdEdQVFJlc3BvbnNlKGRhdGEuY2hhdGdwdF9yZXNwb25zZSk7XHJcblx0XHRcdHNldEJhc2U2NEF1ZGlvKGRhdGEuYXVkaW9fYmFzZTY0KTsgLy8gU3RvcmUgdGhlIEJhc2U2NCBhdWRpbyBkYXRhXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZW5kU2Vzc2lvbiA9IGFzeW5jICgpID0+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvZW5kX3Nlc3Npb24vJywge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcclxuXHRcdFx0XHQvLyBUaGUgc2Vzc2lvbiBoYXMgZW5kZWQgc3VjY2Vzc2Z1bGx5LCByZWZyZXNoIHRoZSBwYWdlXHJcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGVuZGluZyBzZXNzaW9uOicsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBlbmRpbmcgc2Vzc2lvbjonLCBlcnJvcik7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuXHRcdFx0PGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9PlJlY29yZGluZyBDb21wb25lbnQ8L2gxPlxyXG5cdFx0XHQ8UmVhY3RNaWNcclxuXHRcdFx0XHRyZWNvcmQ9e3JlY29yZGluZ31cclxuXHRcdFx0XHRjbGFzc05hbWU9e2Ake3N0eWxlcy5zb3VuZFdhdmV9IHNvdW5kLXdhdmVgfVxyXG5cdFx0XHRcdG9uU3RvcD17b25TdG9wfVxyXG5cdFx0XHRcdG9uRGF0YT17b25EYXRhfVxyXG5cdFx0XHRcdG1pbWVUeXBlPSdhdWRpby93YXYnXHJcblx0XHRcdC8+XHJcblx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XHJcblx0XHRcdFx0b25DbGljaz17c3RhcnRSZWNvcmRpbmd9XHJcblx0XHRcdFx0ZGlzYWJsZWQ9e3JlY29yZGluZ31cclxuXHRcdFx0PlxyXG5cdFx0XHRcdFN0YXJ0IFJlY29yZGluZ1xyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cclxuXHRcdFx0XHRvbkNsaWNrPXtzdG9wUmVjb3JkaW5nfVxyXG5cdFx0XHRcdGRpc2FibGVkPXshcmVjb3JkaW5nfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0U3RvcCBSZWNvcmRpbmdcclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XHJcblx0XHRcdFx0b25DbGljaz17aGFuZGxlU3VibWl0fVxyXG5cdFx0XHRcdGRpc2FibGVkPXshYXVkaW9CbG9ifVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0U3VibWl0IFJlY29yZGluZ1xyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PGF1ZGlvIHJlZj17YXVkaW9SZWZ9IGNvbnRyb2xzIGF1dG9QbGF5IC8+XHJcblx0XHRcdDxidXR0b24gb25DbGljaz17ZW5kU2Vzc2lvbn0+RW5kIFNlc3Npb248L2J1dHRvbj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWNvcmRpbmdDb21wb25lbnQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiUmVhY3RNaWMiLCJzdHlsZXMiLCJSZWNvcmRpbmdDb21wb25lbnQiLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJhdWRpb0Jsb2IiLCJzZXRBdWRpb0Jsb2IiLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJjaGF0R1BUUmVzcG9uc2UiLCJzZXRDaGF0R1BUUmVzcG9uc2UiLCJiYXNlNjRBdWRpbyIsInNldEJhc2U2NEF1ZGlvIiwic3RhcnRSZWNvcmRpbmciLCJzdG9wUmVjb3JkaW5nIiwib25EYXRhIiwicmVjb3JkZWREYXRhIiwib25TdG9wIiwicmVjb3JkZWRCbG9iIiwiY29uc29sZSIsImxvZyIsImJsb2IiLCJhdWRpb1JlZiIsImN1cnJlbnQiLCJhdWRpb0RhdGEiLCJzcmMiLCJwbGF5IiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJGaWxlIiwidHlwZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiZGF0YSIsImpzb24iLCJ1c2VyX2lucHV0IiwiY2hhdGdwdF9yZXNwb25zZSIsImF1ZGlvX2Jhc2U2NCIsImVycm9yIiwiZW5kU2Vzc2lvbiIsImhlYWRlcnMiLCJvayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwic3RhdHVzVGV4dCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgxIiwiaGVhZGluZyIsInJlY29yZCIsInNvdW5kV2F2ZSIsIm1pbWVUeXBlIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwiYXVkaW8iLCJyZWYiLCJjb250cm9scyIsImF1dG9QbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/RecordingComponent.js\n"));

/***/ })

});