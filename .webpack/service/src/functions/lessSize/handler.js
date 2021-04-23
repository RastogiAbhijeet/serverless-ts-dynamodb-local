/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/lessSize/handler.ts":
/*!*******************************************!*\
  !*** ./src/functions/lessSize/handler.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/apiGateway */ \"./src/libs/apiGateway.ts\");\n/* harmony import */ var _libs_lambda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @libs/lambda */ \"./src/libs/lambda.ts\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var aws_sdk_clients_cognitoidentityserviceprovider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aws-sdk/clients/cognitoidentityserviceprovider */ \"aws-sdk/clients/cognitoidentityserviceprovider\");\n/* harmony import */ var aws_sdk_clients_cognitoidentityserviceprovider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_clients_cognitoidentityserviceprovider__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst lessSize = async (event) => {\n    let secret, binaryDecodedSecret;\n    try {\n        secret = `${process.env.PG_HOST} , ${process.env.PG_USER}`;\n        const cognitoidentityserviceprovider = new aws_sdk_clients_cognitoidentityserviceprovider__WEBPACK_IMPORTED_MODULE_5__();\n        var params = {\n            UserPoolId: \"us-east-1_DdI9Agwta\",\n            AttributesToGet: [\"email\"],\n        };\n        const cRes = await cognitoidentityserviceprovider\n            .listUsers(params)\n            .promise();\n        const pool = new pg__WEBPACK_IMPORTED_MODULE_3__.Pool({\n            user: process.env.PG_USER,\n            host: process.env.PG_HOST,\n            database: process.env.PG_DB_NAME,\n            password: process.env.PG_PASSWORD,\n            port: parseInt(process.env.PG_PORT),\n        });\n        const queryRes = await pool.query(\"select * from users;\");\n        const res = await axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"https://run.mocky.io/v3/7a1c731d-5a03-4ee7-b0f4-89f94aa5130f\");\n        return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)({\n            message: `Got some response Secret : ${secret} \\n CognitoUsers : ${JSON.stringify(cRes.Users)},\\nAPI Res: ${JSON.stringify(res.data)} \\n, ${JSON.stringify({\n                data: queryRes.rows,\n            })} Test to the exciting Serverless world! - res.data.`,\n        });\n    }\n    catch (err) {\n        return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)({\n            message: \"Could not process request\",\n            error: err.message,\n        });\n    }\n};\nconst main = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_2__.middyfy)(lessSize);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2xlc3NTaXplL2hhbmRsZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hY21lLXR5cGVzY3JpcHQvLi9zcmMvZnVuY3Rpb25zL2xlc3NTaXplL2hhbmRsZXIudHM/OTI2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJcIjtcbmltcG9ydCB7IGZvcm1hdEpTT05SZXNwb25zZSB9IGZyb20gXCJAbGlicy9hcGlHYXRld2F5XCI7XG5pbXBvcnQgeyBtaWRkeWZ5IH0gZnJvbSBcIkBsaWJzL2xhbWJkYVwiO1xuaW1wb3J0ICogYXMgcGcgZnJvbSBcInBnXCI7XG5pbXBvcnQgeyBBUElHYXRld2F5UHJveHlFdmVudCB9IGZyb20gXCJhd3MtbGFtYmRhXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgKiBhcyBDb2duaXRvSWRlbnRpdHlTZXJ2aWNlUHJvdmlkZXIgZnJvbSBcImF3cy1zZGsvY2xpZW50cy9jb2duaXRvaWRlbnRpdHlzZXJ2aWNlcHJvdmlkZXJcIjtcblxuY29uc3QgbGVzc1NpemUgPSBhc3luYyAoZXZlbnQ6IEFQSUdhdGV3YXlQcm94eUV2ZW50KSA9PiB7XG4gIGxldCBzZWNyZXQ6IHN0cmluZywgYmluYXJ5RGVjb2RlZFNlY3JldDogc3RyaW5nO1xuXG4gIHRyeSB7XG4gICAgc2VjcmV0ID0gYCR7cHJvY2Vzcy5lbnYuUEdfSE9TVH0gLCAke3Byb2Nlc3MuZW52LlBHX1VTRVJ9YDtcblxuICAgIGNvbnN0IGNvZ25pdG9pZGVudGl0eXNlcnZpY2Vwcm92aWRlciA9IG5ldyBDb2duaXRvSWRlbnRpdHlTZXJ2aWNlUHJvdmlkZXIoKTtcblxuICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICBVc2VyUG9vbElkOiBcInVzLWVhc3QtMV9EZEk5QWd3dGFcIiAvKiByZXF1aXJlZCAqLyxcbiAgICAgIEF0dHJpYnV0ZXNUb0dldDogW1wiZW1haWxcIl0sXG4gICAgfTtcblxuICAgIGNvbnN0IGNSZXMgPSBhd2FpdCBjb2duaXRvaWRlbnRpdHlzZXJ2aWNlcHJvdmlkZXJcbiAgICAgIC5saXN0VXNlcnMocGFyYW1zKVxuICAgICAgLnByb21pc2UoKTtcblxuICAgIGNvbnN0IHBvb2wgPSBuZXcgcGcuUG9vbCh7XG4gICAgICB1c2VyOiBwcm9jZXNzLmVudi5QR19VU0VSLFxuICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuUEdfSE9TVCxcbiAgICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5QR19EQl9OQU1FLFxuICAgICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LlBHX1BBU1NXT1JELFxuICAgICAgcG9ydDogcGFyc2VJbnQocHJvY2Vzcy5lbnYuUEdfUE9SVCksXG4gICAgfSk7XG5cbiAgICBjb25zdCBxdWVyeVJlcyA9IGF3YWl0IHBvb2wucXVlcnkoXCJzZWxlY3QgKiBmcm9tIHVzZXJzO1wiKTtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgIFwiaHR0cHM6Ly9ydW4ubW9ja3kuaW8vdjMvN2ExYzczMWQtNWEwMy00ZWU3LWIwZjQtODlmOTRhYTUxMzBmXCJcbiAgICApO1xuXG4gICAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZSh7XG4gICAgICBtZXNzYWdlOiBgR290IHNvbWUgcmVzcG9uc2UgU2VjcmV0IDogJHtzZWNyZXR9IFxcbiBDb2duaXRvVXNlcnMgOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICBjUmVzLlVzZXJzXG4gICAgICApfSxcXG5BUEkgUmVzOiAke0pTT04uc3RyaW5naWZ5KHJlcy5kYXRhKX0gXFxuLCAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZGF0YTogcXVlcnlSZXMucm93cyxcbiAgICAgIH0pfSBUZXN0IHRvIHRoZSBleGNpdGluZyBTZXJ2ZXJsZXNzIHdvcmxkISAtIHJlcy5kYXRhLmAsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBmb3JtYXRKU09OUmVzcG9uc2Uoe1xuICAgICAgbWVzc2FnZTogXCJDb3VsZCBub3QgcHJvY2VzcyByZXF1ZXN0XCIsXG4gICAgICBlcnJvcjogZXJyLm1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBtYWluID0gbWlkZHlmeShsZXNzU2l6ZSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/functions/lessSize/handler.ts\n");

/***/ }),

/***/ "./src/libs/apiGateway.ts":
/*!********************************!*\
  !*** ./src/libs/apiGateway.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatJSONResponse\": () => (/* binding */ formatJSONResponse)\n/* harmony export */ });\nconst formatJSONResponse = (response) => {\n    return {\n        statusCode: 200,\n        body: JSON.stringify(response)\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWNtZS10eXBlc2NyaXB0Ly4vc3JjL2xpYnMvYXBpR2F0ZXdheS50cz82MjUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQVBJR2F0ZXdheVByb3h5RXZlbnQsIEFQSUdhdGV3YXlQcm94eVJlc3VsdCwgSGFuZGxlciB9IGZyb20gXCJhd3MtbGFtYmRhXCJcbmltcG9ydCB0eXBlIHsgRnJvbVNjaGVtYSB9IGZyb20gXCJqc29uLXNjaGVtYS10by10c1wiO1xuXG50eXBlIFZhbGlkYXRlZEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gT21pdDxBUElHYXRld2F5UHJveHlFdmVudCwgJ2JvZHknPiAmIHsgYm9keTogRnJvbVNjaGVtYTxTPiB9XG5leHBvcnQgdHlwZSBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gSGFuZGxlcjxWYWxpZGF0ZWRBUElHYXRld2F5UHJveHlFdmVudDxTPiwgQVBJR2F0ZXdheVByb3h5UmVzdWx0PlxuXG5leHBvcnQgY29uc3QgZm9ybWF0SlNPTlJlc3BvbnNlID0gKHJlc3BvbnNlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4ge1xuICByZXR1cm4ge1xuICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXNwb25zZSlcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/apiGateway.ts\n");

/***/ }),

/***/ "./src/libs/lambda.ts":
/*!****************************!*\
  !*** ./src/libs/lambda.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middyfy\": () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst middyfy = (handler) => {\n    return _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()());\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9sYW1iZGEudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hY21lLXR5cGVzY3JpcHQvLi9zcmMvbGlicy9sYW1iZGEudHM/NmIyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWlkZHkgZnJvbSBcIkBtaWRkeS9jb3JlXCJcbmltcG9ydCBtaWRkeUpzb25Cb2R5UGFyc2VyIGZyb20gXCJAbWlkZHkvaHR0cC1qc29uLWJvZHktcGFyc2VyXCJcblxuZXhwb3J0IGNvbnN0IG1pZGR5ZnkgPSAoaGFuZGxlcikgPT4ge1xuICByZXR1cm4gbWlkZHkoaGFuZGxlcikudXNlKG1pZGR5SnNvbkJvZHlQYXJzZXIoKSlcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/lambda.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");;

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");;

/***/ }),

/***/ "aws-sdk/clients/cognitoidentityserviceprovider":
/*!*****************************************************************!*\
  !*** external "aws-sdk/clients/cognitoidentityserviceprovider" ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = require("aws-sdk/clients/cognitoidentityserviceprovider");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");;

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");;

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");;

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/lessSize/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;