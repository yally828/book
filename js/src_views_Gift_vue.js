/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbook"] = self["webpackChunkbook"] || []).push([["src_views_Gift_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Gift.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Gift.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar Bgc = function Bgc() {\n  return __webpack_require__.e(/*! import() */ \"src_components_BgModule_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/BgModule.vue */ \"./src/components/BgModule.vue\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Gift\",\n  components: {\n    Bgc: Bgc\n  },\n  data: function data() {\n    return {\n      // 兑换码\n      giftCode: \"\",\n      // 绑定用户\n      giftUser: \"\",\n      //测试兑换码\n      testCode: [{\n        code: \"sugar10010\",\n        coin: 10\n      }, {\n        code: \"sugar10086\",\n        coin: 30\n      }]\n    };\n  },\n  methods: {\n    // 确定兑换\n    onSubmit: function onSubmit() {\n      this.$toast(\"账号或兑换码不存在\");\n    }\n  }\n});\n\n//# sourceURL=webpack://book/./src/views/Gift.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Gift.vue?vue&type=style&index=0&id=5baff72c&lang=less&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Gift.vue?vue&type=style&index=0&id=5baff72c&lang=less&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.id, \".gift[data-v-5baff72c] {\\n  position: relative;\\n}\\n.gift .gift_title[data-v-5baff72c] {\\n  width: 300px;\\n  background-color: #fff;\\n  height: 80px;\\n  box-shadow: 0px 0px 4px 1px #ccc;\\n  position: absolute;\\n  top: 120px;\\n  margin-left: -150px;\\n  overflow: hidden;\\n  border-radius: 5px;\\n  left: 50%;\\n  text-align: center;\\n  line-height: 80px;\\n  font-size: 20px;\\n  font-weight: bold;\\n  color: #6CAB0E;\\n}\\n.gift .gift_code[data-v-5baff72c] {\\n  width: 300px;\\n  margin: 60px auto 40px;\\n  font-size: 14px;\\n}\\n.gift .gift_code .send_phone[data-v-5baff72c] {\\n  height: 40px;\\n  line-height: 40px;\\n  margin-bottom: 20px;\\n}\\n.gift .gift_code .send_phone span[data-v-5baff72c] {\\n  height: 40px;\\n  border-left: 6px solid #A5CC97;\\n  padding-left: 10px;\\n}\\n.gift .gift_code .send_phone input[data-v-5baff72c] {\\n  width: 200px;\\n  border-bottom: 1px solid #A5CC97;\\n  padding-left: 20px;\\n}\\n.gift .gift_code .send_code[data-v-5baff72c] {\\n  height: 40px;\\n  line-height: 40px;\\n}\\n.gift .gift_code .send_code span[data-v-5baff72c] {\\n  height: 40px;\\n  padding-left: 10px;\\n  border-left: 6px solid #A5CC97;\\n}\\n.gift .gift_code .send_code input[data-v-5baff72c] {\\n  border-bottom: 1px solid #A5CC97;\\n  padding-left: 20px;\\n  width: 200px;\\n}\\n.gift .gift_code .send_submit[data-v-5baff72c] {\\n  margin-top: 30px;\\n  text-align: center;\\n  line-height: 40px;\\n  height: 40px;\\n  color: #fff;\\n  background-color: #A5CC97;\\n}\\n.gift .about_code[data-v-5baff72c] {\\n  text-align: left;\\n  width: 300px;\\n  margin: 0 auto;\\n}\\n.gift .about_code p[data-v-5baff72c] {\\n  font-size: 14px;\\n  font-weight: bold;\\n  color: #333;\\n  line-height: 24px;\\n}\\n.gift .about_code ul li[data-v-5baff72c] {\\n  font-size: 12px;\\n  line-height: 20px;\\n  padding: 0px 0px 0px 20px;\\n  color: #999;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack://book/./src/views/Gift.vue?./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Gift.vue?vue&type=style&index=0&id=5baff72c&lang=less&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Gift.vue?vue&type=style&index=0&id=5baff72c&lang=less&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gift_vue_vue_type_style_index_0_id_5baff72c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Gift.vue?vue&type=style&index=0&id=5baff72c&lang=less&scoped=true& */ \"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Gift.vue?vue&type=style&index=0&id=5baff72c&lang=less&scoped=true&\");\n/* harmony import */ var _node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gift_vue_vue_type_style_index_0_id_5baff72c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gift_vue_vue_type_style_index_0_id_5baff72c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_1__);\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gift_vue_vue_type_style_index_0_id_5baff72c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_1___default()), options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gift_vue_vue_type_style_index_0_id_5baff72c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_1___default().locals) || {});\n\n//# sourceURL=webpack://book/./src/views/Gift.vue?./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/views/Gift.vue":
/*!****************************!*\
  !*** ./src/views/Gift.vue ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Gift_vue_vue_type_template_id_5baff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gift.vue?vue&type=template&id=5baff72c&scoped=true& */ \"./src/views/Gift.vue?vue&type=template&id=5baff72c&scoped=true&\");\n/* harmony import */ var _Gift_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gift.vue?vue&type=script&lang=js& */ \"./src/views/Gift.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _Gift_vue_vue_type_style_index_0_id_5baff72c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gift.vue?vue&type=style&index=0&id=5baff72c&lang=less&scoped=true& */ \"./src/views/Gift.vue?vue&type=style&index=0&id=5baff72c&lang=less&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n;\n\n\n/* normalize component */\n\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(\n  _Gift_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _Gift_vue_vue_type_template_id_5baff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,\n  _Gift_vue_vue_type_template_id_5baff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  \"5baff72c\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/Gift.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://book/./src/views/Gift.vue?");

/***/ }),

/***/ "./src/views/Gift.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./src/views/Gift.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gift_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Gift.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Gift.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gift_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack://book/./src/views/Gift.vue?");

/***/ }),

/***/ "./src/views/Gift.vue?vue&type=style&index=0&id=5baff72c&lang=less&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./src/views/Gift.vue?vue&type=style&index=0&id=5baff72c&lang=less&scoped=true& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Gift_vue_vue_type_style_index_0_id_5baff72c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Gift.vue?vue&type=style&index=0&id=5baff72c&lang=less&scoped=true& */ \"./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Gift.vue?vue&type=style&index=0&id=5baff72c&lang=less&scoped=true&\");\n\n\n//# sourceURL=webpack://book/./src/views/Gift.vue?");

/***/ }),

/***/ "./src/views/Gift.vue?vue&type=template&id=5baff72c&scoped=true&":
/*!***********************************************************************!*\
  !*** ./src/views/Gift.vue?vue&type=template&id=5baff72c&scoped=true& ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gift_vue_vue_type_template_id_5baff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gift_vue_vue_type_template_id_5baff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Gift_vue_vue_type_template_id_5baff72c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Gift.vue?vue&type=template&id=5baff72c&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Gift.vue?vue&type=template&id=5baff72c&scoped=true&\");\n\n\n//# sourceURL=webpack://book/./src/views/Gift.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Gift.vue?vue&type=template&id=5baff72c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Gift.vue?vue&type=template&id=5baff72c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"gift\" },\n    [\n      _c(\"Bgc\"),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"gift_title\" }, [_vm._v(\"礼品兑换处\")]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"gift_code\" }, [\n        _c(\"div\", { staticClass: \"send_phone clearfix\" }, [\n          _c(\"span\", { staticClass: \"fl\" }, [_vm._v(\"绑定用户\")]),\n          _vm._v(\" \"),\n          _c(\"input\", {\n            directives: [\n              {\n                name: \"model\",\n                rawName: \"v-model\",\n                value: _vm.giftUser,\n                expression: \"giftUser\"\n              }\n            ],\n            staticClass: \"fr\",\n            attrs: { type: \"text\", placeholder: \"请输入绑定账号\" },\n            domProps: { value: _vm.giftUser },\n            on: {\n              input: function($event) {\n                if ($event.target.composing) {\n                  return\n                }\n                _vm.giftUser = $event.target.value\n              }\n            }\n          })\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"send_code clearfix\" }, [\n          _c(\"span\", { staticClass: \"fl\" }, [_vm._v(\"兑换码\")]),\n          _vm._v(\" \"),\n          _c(\"input\", {\n            directives: [\n              {\n                name: \"model\",\n                rawName: \"v-model\",\n                value: _vm.giftCode,\n                expression: \"giftCode\"\n              }\n            ],\n            staticClass: \"fr\",\n            attrs: { type: \"text\", placeholder: \"请输入兑换码\" },\n            domProps: { value: _vm.giftCode },\n            on: {\n              input: function($event) {\n                if ($event.target.composing) {\n                  return\n                }\n                _vm.giftCode = $event.target.value\n              }\n            }\n          })\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"send_submit\", on: { click: _vm.onSubmit } }, [\n          _vm._v(\"确定兑换\")\n        ])\n      ]),\n      _vm._v(\" \"),\n      _vm._m(0)\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"about_code\" }, [\n      _c(\"p\", [_vm._v(\"关于兑换码：\")]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _vm._v(\"1.兑换码包含书卷兑换码，会员兑换码两种，均可以在此处兑换\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [_vm._v(\"2.兑换码一旦绑定到账户后，将不能转移、取消\")]),\n        _vm._v(\" \"),\n        _c(\"li\", [_vm._v(\"3.兑换码有绑定有效期，如过期将无法绑定到账户\")])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://book/./src/views/Gift.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

}]);