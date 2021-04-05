/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbook"] = self["webpackChunkbook"] || []).push([["src_views_Mine_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Mine.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Mine.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_less_mine_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/less/mine.less */ \"./src/assets/less/mine.less\");\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nvar Books = function Books() {\n  return __webpack_require__.e(/*! import() */ \"src_components_BooksModule_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/BooksModule.vue */ \"./src/components/BooksModule.vue\"));\n};\n\nvar Title = function Title() {\n  return __webpack_require__.e(/*! import() */ \"src_components_TitleModule_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/TitleModule.vue */ \"./src/components/TitleModule.vue\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Mine\",\n  components: {\n    Books: Books,\n    Title: Title\n  },\n  created: function created() {\n    this.getRankingType(0);\n    this.getUserInfo();\n    this.activeTab();\n  },\n  computed: {\n    bookCoin: function bookCoin() {\n      return this.$store.state.readCoin;\n    },\n    bookNum: function bookNum() {\n      var arr = Object.keys(this.$store.state.readBooks);\n      return arr.length;\n    },\n    bookReadTime: function bookReadTime() {\n      var t = this.$store.state.readTime; // 输出秒数\n\n      return parseInt(t / 60);\n    }\n  },\n  data: function data() {\n    return {\n      // 功能列表数据\n      featureListData: [{\n        title: \"签到\",\n        icon: __webpack_require__(/*! ../assets/images/icon_come.png */ \"./src/assets/images/icon_come.png\"),\n        name: \"SignIn\"\n      }, {\n        title: \"我的资料\",\n        icon: __webpack_require__(/*! ../assets/images/icon_people.png */ \"./src/assets/images/icon_people.png\"),\n        name: \"UserInfo\"\n      }, {\n        title: \"礼物\",\n        icon: __webpack_require__(/*! ../assets/images/icon_gift.png */ \"./src/assets/images/icon_gift.png\"),\n        name: \"Gift\"\n      }, {\n        title: \"充值中心\",\n        icon: __webpack_require__(/*! ../assets/images/icon_card.png */ \"./src/assets/images/icon_card.png\"),\n        name: \"Pay\"\n      }, {\n        title: \"安全中心\",\n        icon: __webpack_require__(/*! ../assets/images/icon_safe.png */ \"./src/assets/images/icon_safe.png\"),\n        name: \"Safe\"\n      }, {\n        title: \"帮助中心\",\n        icon: __webpack_require__(/*! ../assets/images/icon_help.png */ \"./src/assets/images/icon_help.png\"),\n        name: \"Help\"\n      }],\n      // 轮播图列表\n      bannerData: [{\n        bannerImg: __webpack_require__(/*! ../assets/images/banner1.jpg */ \"./src/assets/images/banner1.jpg\")\n      }, {\n        bannerImg: __webpack_require__(/*! ../assets/images/banner2.jpg */ \"./src/assets/images/banner2.jpg\")\n      }, {\n        bannerImg: __webpack_require__(/*! ../assets/images/banner3.jpg */ \"./src/assets/images/banner3.jpg\")\n      }],\n      // 推荐书籍\n      recommendBooks: [],\n      // 显示的书籍\n      booksList: [],\n      // 个人信息\n      userInfo: {}\n    };\n  },\n  methods: {\n    //个人资料\n    getUserInfo: function getUserInfo() {\n      var _this = this;\n\n      var tokenString = localStorage.getItem(\"__tk\");\n\n      if (!tokenString) {\n        return;\n      }\n\n      this.$toast.loading({\n        message: \"加载中...\",\n        forbidClick: true,\n        duration: 0\n      });\n      this.axios({\n        url: \"http://www.kangliuyong.com:10002/findMy\",\n        method: \"GET\",\n        params: {\n          appkey: \"U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=\",\n          tokenString: tokenString\n        }\n      }).then(function (res) {\n        _this.$toast.clear();\n\n        if (res.data.code == \"A001\") {\n          _this.userInfo = res.data.result[0];\n        }\n      }).catch(function (err) {\n        _this.$toast.clear();\n      });\n    },\n    // 页面跳转\n    goPage: function goPage(name) {\n      this.$router.push({\n        name: name\n      });\n    },\n    //  获取排行榜类型\n    getRankingType: function getRankingType(index) {\n      var _this2 = this;\n\n      this.$toast.loading({\n        message: \"加载中...\",\n        forbidClick: true,\n        duration: 0\n      });\n      this.axios({\n        url: \"http://api.kele8.cn/agent/http://api.zhuishushenqi.com/ranking/gender\",\n        method: \"GET\"\n      }).then(function (res) {\n        _this2.$toast.clear();\n\n        var id = res.data.female[index]._id;\n\n        _this2.getRankingBook(id);\n      }).catch(function (err) {\n        _this2.$toast.clear();\n      });\n    },\n    // 获取排行榜分类列表\n    getRankingBook: function getRankingBook(id) {\n      var _this3 = this;\n\n      this.$toast.loading({\n        message: \"加载中...\",\n        forbidClick: true,\n        duration: 0\n      });\n      this.axios({\n        url: \"http://api.kele8.cn/agent/http://api.zhuishushenqi.com/ranking/\" + id,\n        method: \"GET\"\n      }).then(function (res) {\n        _this3.$toast.clear();\n\n        _this3.recommendBooks = res.data.ranking.books;\n        res.data.ranking.books.forEach(function (item) {\n          item.cover = _this3.handleImg(item.cover);\n        });\n        _this3.recommendBooks = res.data.ranking.books;\n\n        _this3.showBooks();\n      }).catch(function (err) {\n        _this3.$toast.clear();\n      });\n    },\n    // 10本推荐书籍\n    showBooks: function showBooks() {\n      var Books = [];\n      var len = this.recommendBooks.length;\n      var randomNum = Math.floor(Math.random() * len);\n\n      for (var i = 0; i < 6; i++) {\n        randomNum++;\n\n        if (randomNum >= len) {\n          randomNum = 0;\n        }\n\n        Books.push(this.recommendBooks[randomNum]);\n      }\n\n      this.booksList = Books;\n    },\n    // 刷新推荐\n    onChangeBook: function onChangeBook() {\n      this.showBooks();\n    },\n    // 图片处理\n    handleImg: function handleImg(img) {\n      var reg = /^\\/agent\\//;\n      return decodeURIComponent(img).replace(reg, \"\");\n    },\n    // 触发active\n    activeTab: function activeTab() {\n      this.$emit('activeTab', '3');\n    }\n  }\n});\n\n//# sourceURL=webpack://book/./src/views/Mine.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/assets/less/mine.less":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/assets/less/mine.less ***!
  \*************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.id, \".mine {\\n  width: 100%;\\n  height: 100vh;\\n  overflow-x: hidden;\\n  overflow-y: scroll;\\n  box-sizing: border-box;\\n  position: relative;\\n  background-color: #f5f5f5;\\n}\\n.mine::-webkit-scrollbar {\\n  width: 0 !important;\\n  height: 0 !important;\\n}\\n.mine .bg {\\n  width: 100%;\\n  height: 140px;\\n  background-color: #A5CC97;\\n  position: absolute;\\n  top: 0px;\\n  left: 0px;\\n  z-index: 10;\\n}\\n.mine .baseInfo {\\n  margin: 60px 20px 20px;\\n  background-color: #fff;\\n  border-radius: 5px;\\n  box-sizing: border-box;\\n  padding: 20px;\\n  position: relative;\\n  z-index: 20;\\n}\\n.mine .baseInfo .info_top {\\n  margin-bottom: 14px;\\n}\\n.mine .baseInfo .info_top .img {\\n  border-radius: 50%;\\n  width: 60px;\\n  height: 60px;\\n  margin-right: 10px;\\n  overflow: hidden;\\n}\\n.mine .baseInfo .info_top .text {\\n  font-size: 12px;\\n  margin-top: 10px;\\n}\\n.mine .baseInfo .info_top .text .text_name {\\n  font-weight: bold;\\n  margin-bottom: 5px;\\n  font-size: 14px;\\n}\\n.mine .baseInfo .info_top .text .text_vip {\\n  width: 60px;\\n  padding: 2px 0;\\n  text-align: center;\\n  background-color: #6CAB0E;\\n  color: #fff;\\n  border-radius: 5px;\\n}\\n.mine .baseInfo .info_bottom {\\n  display: flex;\\n  margin-bottom: 5px;\\n}\\n.mine .baseInfo .info_bottom p {\\n  margin: 0;\\n  padding: 0;\\n}\\n.mine .baseInfo .info_bottom .info_item {\\n  flex: 1;\\n  text-align: center;\\n  box-sizing: border-box;\\n  border-right: 2px solid #eaeded;\\n}\\n.mine .baseInfo .info_bottom .info_item:nth-last-of-type(1) {\\n  border-right: none;\\n}\\n.mine .baseInfo .info_bottom .info_item p:first-child {\\n  font-size: 18px;\\n  font-weight: bold;\\n}\\n.mine .baseInfo .info_bottom .info_item p:nth-child(2) {\\n  font-size: 14px;\\n}\\n.mine .featureList {\\n  margin: 0 20px;\\n  border-radius: 10px;\\n  overflow: hidden;\\n  margin-bottom: 20px;\\n}\\n.mine .bannerList {\\n  margin: 0 20px;\\n  border-radius: 5px;\\n  margin-bottom: 20px ;\\n  overflow: hidden;\\n}\\n.mine .bannerList .my-swipe .van-swipe-item {\\n  height: 110px;\\n  background-size: 100%;\\n  background-repeat: no-repeat;\\n}\\n.mine .recommend {\\n  margin: 0 20px;\\n  border-radius: 5px;\\n  margin-bottom: 20px ;\\n  background-color: #fff;\\n  box-sizing: border-box;\\n  padding: 0px 20px;\\n}\\n.mine .recommend .titleModule {\\n  margin-bottom: 10px;\\n}\\n.mine .mine_bottom {\\n  color: #cccccc;\\n  height: 40px;\\n  padding-bottom: 60px;\\n  text-align: center;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack://book/./src/assets/less/mine.less?./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./src/assets/less/mine.less":
/*!***********************************!*\
  !*** ./src/assets/less/mine.less ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_index_js_node_modules_less_loader_dist_cjs_js_mine_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js!./mine.less */ \"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/assets/less/mine.less\");\n/* harmony import */ var _node_modules_css_loader_index_js_node_modules_less_loader_dist_cjs_js_mine_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_node_modules_less_loader_dist_cjs_js_mine_less__WEBPACK_IMPORTED_MODULE_1__);\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_index_js_node_modules_less_loader_dist_cjs_js_mine_less__WEBPACK_IMPORTED_MODULE_1___default()), options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((_node_modules_css_loader_index_js_node_modules_less_loader_dist_cjs_js_mine_less__WEBPACK_IMPORTED_MODULE_1___default().locals) || {});\n\n//# sourceURL=webpack://book/./src/assets/less/mine.less?");

/***/ }),

/***/ "./src/assets/images/banner1.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/banner1.jpg ***!
  \***************************************/
/***/ (function(module) {

eval("module.exports = \"./images/banner1.jpg\";\n\n//# sourceURL=webpack://book/./src/assets/images/banner1.jpg?");

/***/ }),

/***/ "./src/assets/images/banner2.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/banner2.jpg ***!
  \***************************************/
/***/ (function(module) {

eval("module.exports = \"./images/banner2.jpg\";\n\n//# sourceURL=webpack://book/./src/assets/images/banner2.jpg?");

/***/ }),

/***/ "./src/assets/images/banner3.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/banner3.jpg ***!
  \***************************************/
/***/ (function(module) {

eval("module.exports = \"./images/banner3.jpg\";\n\n//# sourceURL=webpack://book/./src/assets/images/banner3.jpg?");

/***/ }),

/***/ "./src/assets/images/icon_card.png":
/*!*****************************************!*\
  !*** ./src/assets/images/icon_card.png ***!
  \*****************************************/
/***/ (function(module) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACz0lEQVRYR9WXX0hTURzHP3duJhVIGBX90dQwsKI/vvgQNRGKCIIwC3uQghSyh0ToQcWUEg0MQ+2hMiJ0YVpEIMkqREFb0r9ZWlkY/ikaicNlIav9uXHGNqap2+w66TxdLud8v5/7+3PuORILPKQF9idQgHQgxw1bA9xTCjwQgG2AURhGaNSy1WaXJEkyybJcDVwHRv8FJhCAS0Bu0+kM0pO3cK31OdV6A2+/fPP43gBqga65gPgDiJQkaTBhVdTSvso8ta9Ba+8nqvQGml++97zuBK4CjYAtUBh/AIVAaUlaKsWHUqfVHBgZc0WkvsPoNP+cUIWpVGaH03nZDeKlmwnIH0A/EN9bkcumtSv8flSN/im6J9086//smXvLDdI8F4A04K7Iu8h/MOOB8QO6TiO3DW9cyzRq1Sub3alzw3z11fKNgHZxuKZ84rctORiz2ebu3ZpAUuxqdJ3djuFRS5g6TDVud7hATnnWeQEiNOoeq82+WZsYq5Q/7e8GqM06SOauHdR1iIi8RhQvcAc4LB58IyAL87aiLMUApIwCpmpuzKvko2m0HUgJOYCISMp5sWVwETgTcoAjVQ00dfUI3w2AKxchS4H5xwTLs0uF52Ngz19FCMxrDZTdb6ew8ZHwFe3t/ZmFIAJxtBWdYE3OBdk0Nj4gQ/xM+8A8RSCOvP07OVBRJ3zPAcWzA5zN6lakD2WWSRkFMdrEOJYsCqfF2OeQYR1gmhEA8PanIhAgR0dFDg2bv8cA9UDmVN1JNTAfAMAwEA3sA/SzARwDRoAWhb5eyMiAHTAAu6fT9UZAbijXAoNSRv6gwgBC7iRwxQ9AmQVZuikdzc9VGMAKrATG/UVgPdZfFul4iUVhANFV22fS9C3CbGAIeKgwwKydFYou+H8AXgBJ7r1AqSyIzhInHHGBmXZMOhO692mxSKnhPXoFAqCUaVA6/u4FQYnNZfIfm84LMLJLKTgAAAAASUVORK5CYII=\"\n\n//# sourceURL=webpack://book/./src/assets/images/icon_card.png?");

/***/ }),

/***/ "./src/assets/images/icon_come.png":
/*!*****************************************!*\
  !*** ./src/assets/images/icon_come.png ***!
  \*****************************************/
/***/ (function(module) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACZUlEQVRYR92XXUgUURiGn62I6IdESJaFyITc/KHSgo296YcC6YfICrwQCsIsiS5CCrTIkC6KLr0pk+giEAIJgiK9qI1aW8h262KDCKmg3LRWatNKJoxv2pX9G2dmnXGjczWwZ973Oe/5vtlzHOR5OPLsjxmAK0ApsEUH+gHwGmg0sjgzACK8GXShJ4GHBkBVvn8O4ABwDqgwEl8Oc54AHUB34t3kBNri5m+BG1nEDwLFwHkdY1mAlkYN4AEagGvpWxAE1gEuYCiLiRU1UA34gTdAZTqAXvFYASCeKTrJW6AHsB4oAW7pbIHU0SAwoDEvZ4Acai7rK9LKMqRVU9pQLwFLAGqGgsVz5lJwt6gqlB+AyPPbDii456xWkzBTA7OSgFb/WmIeF3kWL1C11dMTsNJIU2v+ssL+iZGoNwNgSYWb8vZmWyFCTS38ioxMeackUOjdgKfnqq0AfaWbUL7F/kOASeU3oWMtrGpuZLFbPpjZhy0JKGPjvGhqZfi+j6rOizh3b9cEeLy1jlhYDkx/G8BUDQz3PkKJfce1b8eUwcSXUdX8s+8pazvace3fOW0NBWqPEPVLJ+YAEG69xLuublYerWd120l+fvykxj4aCFJ5+SzL6/fqFvCMAEQ92HCayJ0+nLu28eP9B76+fEX5hVOsOFynay4TZgyQDCHP7jMnKDl+yJC5ZQAi5Nu4hwWuIjw9nYbNLQUw5Zo0WXML5i1aGFbGxsu8vTdZuqYsV/1p34v6BwjUynmUfiDjvyBxKkY+yXaMePuJtNyuMk5E8sNs3AuuA12JBZq5GdkRiqmrmS0AfwBld+ch3sDxFQAAAABJRU5ErkJggg==\"\n\n//# sourceURL=webpack://book/./src/assets/images/icon_come.png?");

/***/ }),

/***/ "./src/assets/images/icon_gift.png":
/*!*****************************************!*\
  !*** ./src/assets/images/icon_gift.png ***!
  \*****************************************/
/***/ (function(module) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACQklEQVRYR+3XS4iNYRjA8d83RJNGRi4LWRCimYVLLGxmJiuXwmJsUIRxSbKRBYUyq1FCuUyKBRaULEQpjZVmYWQxRRZMZFxGzdSQ+xy9M9/UcXznzJljjrOZZ3M63/s8z/t/n++5vF+kxBKVeH/DAdiI7THwTZzJgD+KmvjZRVzN53D5AhxB2CBdDuBE/CBpPegfGwoiH4Cp+IC72IdxaMIqLMJ4tOIeDuITTmMlpqErF0Q+ALVowU40x85m4A5eoAyzsBqv4/UGXEAdHowUwFZcTnN2CMfj/4fRmLa2HycLAahHVQLxXozBtTikIezVWBPr3kY7viG8ss34hVMJvjrTIvlHFYSkCcn0P2QDboSN0nOgfc7M8gXXGqvLllZNzAlR1/DYg7ZuqbYV/XrRkvtql1RqaV6c066j86uaHW19r959DbkzNxMglY+TYFQoQLrt4OHTIzAKUNoIlEW6Fs2vmPLoyrIhq+BfcqC6vtXTl5+7+1ImZybhddRXzZ5gamXottnlyfNePb0/+zM/SKiISRVjLZxXkdXoWcdnUcTbj9+DTpghYZb8NQ2bosi2VMqA55GXH7iF0AcGSrjAPcJsCDNi0D4V9/zQ+7NJok4SwBasxfoczooKsA4BIvxmk6IC5PNWigpwKY5ArvwoKkCm86SIjAKMRqCoETiHXUNcKIcLMHizPo/d6VmdVGrhC+hKPs2gAJ1NmV9M2Wp9OfYg3P+TZBKmozxe/IL36Mmi/wZn8TBzvdBhVMDhk01KDvAbNt7vIeaWRKwAAAAASUVORK5CYII=\"\n\n//# sourceURL=webpack://book/./src/assets/images/icon_gift.png?");

/***/ }),

/***/ "./src/assets/images/icon_help.png":
/*!*****************************************!*\
  !*** ./src/assets/images/icon_help.png ***!
  \*****************************************/
/***/ (function(module) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABkElEQVRYR+2XvUvDYBCHn9ePVTo4dGvVCoKLi11EqZMgqO2guAhOigRHHURQFwdduhTRv0CqoCi4WnTTtZ1a8QukYMGPQRQqlTe0oYTU1JCYobnpheTunvy4u7wncNmEy/kxAlgHJoA+m+EywCEg42umB5gEkv72rqKvzf9tBeDj863p4SndWvHt6Rz4kufX93xzvnDTAkwBB5XneoATYGx7+YruQL+V/KSzKVbjw5rvcaKknrP31yxtheXxFBivBXAORCpOVghqAchYUUX93hSgEeoV8AA8BWxToDc0RCZ3QXVB/1sRFl4eiYRn2D/bYHp0TWumvwBcWmlBM5+oIgbrakMwHNFm8et5LqeS+RzwADwFGloBHyAvE8/19JSFd35vw6OdUpAiwdiikL3qhJkAJEpxAbNRRUglnDDTQYRUIbYg7pzIDpgCjAABYM8tAPV33NBtmATkbtAB2F0HQeC2vBPI3UA1/a14DtgtJ3cCQELMV9eY0WomFdgEQjYXYg5Yqd6KjBSwOad5ONe34x+UIroh/TFKpwAAAABJRU5ErkJggg==\"\n\n//# sourceURL=webpack://book/./src/assets/images/icon_help.png?");

/***/ }),

/***/ "./src/assets/images/icon_people.png":
/*!*******************************************!*\
  !*** ./src/assets/images/icon_people.png ***!
  \*******************************************/
/***/ (function(module) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEGklEQVRYR8WXfUxVZRzHP0fgEsHEDRleDaWlIWTpvHPaVuxSjnKVvfja2iDEVJxu15feTFPa1AqGZrR86cXRBJHaiulSc1dcajRCxU1BynS8GES51u40Fe5pv9tz3OXGvefeQ4vnr7N7f8/v9znf5/d8n+doDPLQBrk+AwFwArUDfYFIAeYDzwOPAvHAVeBr4H3geyswkQAsk0LDYuOuOUaM6Z028u6Yby41/dnY3Z54o7fnJlAI7IkUIlwAF7BlTrqDqpkv9anRcrWLBQfLb57suGgDDgCfA6eAs+HAhAMwKS46pi4zyR5bn7smaE5H+UbOdnf09Hq90SpIYAqArlAgpgDJcQlHu697nNtzXmDRxIeD5trZ+C1LDu9hbrqDjOF2ik7sl1hR4XHgl2ATTQGGxyV0xERFjewofMdU0cT3XDxxz/1UPFlA0cn9BkQRsMEyQEJM7F/O0emxNc8tNQXI/HgDXnSaC6QmPLK3lGPtP3bqup4G3OgvgakCtqjoW8snZ0cXO2eZAjxUUcyZX9vwuLb5Yrc1uHG598njWOCiJYCUO4e2Tk5JTT0we7kpwPiP1hNvs9GQ+4Yv9lhbC9l7S+UxO5hpmSpgjx96KN52R07LwrdMAZLLVjF9TAaVTy30xZbWH2F1rexK7gPOW1IA2Ay8JlvQkTI6KMTx9p/Iqizh1amPsTnrWV/cvJpdVF9okEc70GkVYAJQ50y9t9k9f6Wj/yTalSmfbdJ+u+6xu+etJC0xiYauVqaUb5Lwn4HxwC2rADJvI7DmmXET133xdGHaEE2bpqOP0qDWq+uNUSWFf4hTfjojj7wJD/rqTK/a0uRuvZAByPlRZXkbqoki4Q+AB0gPSJYo6/tA8ijP6by13w3RaJxRXdZ58PK5CmArsCJU85g2od/kSvU2gR0tJrMekG1SpuKN34J2v5E3EoAPAHGjwKQzga8Af8dbBOwAzgFZ6tjuV4hwAMTF5A1fBL4E/mnxvkOWRxrUH+IQkKMgxJl2WmlCuQO8AqQC1cDcEOvZBtwFnADeBWrUGbAESFHH9Dqg2T9HMAUyAXEe8d9rQHGoA8Uvocgu8ssoAd4ExgGvq/65AgjEJ6F6QG4cUnwEIEb+NnA6VCcH/CdLIaqJWnWq4BEFsFa54u2lClRgN5AHNKnC5REUDgzNFQcFxAuMgqKsvJRs6ySZ4A8gf8xRay33u98HUNyYKkU+VHkNiKOA3Kh9tf0BdHViyTb7r4dR1Mh7u6H/T4BJwBnlCXJEirH1UeAScFmOcYUpS3JeX73DRY9tt7Y1X/w+6NXKRLLZQD2QHxjnr4Bhn0aMNGS+9+XtuqZrK7SSxYeVqVhZHnkxcVH5iOkzAneByDRMRfT32SXNY2WI9KLgv0Y4VmylYNhzBh3gb4O0HDAQVj/6AAAAAElFTkSuQmCC\"\n\n//# sourceURL=webpack://book/./src/assets/images/icon_people.png?");

/***/ }),

/***/ "./src/assets/images/icon_safe.png":
/*!*****************************************!*\
  !*** ./src/assets/images/icon_safe.png ***!
  \*****************************************/
/***/ (function(module) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADQ0lEQVRYR8WXWUiUURTHf984Y0hqC22WFWlqG9SgLURQZFAKYS8V9VBQ0EJZ0EO0r+BDWQZBiylIBQkVRJsvBUUWEbm0Es2U7VpKaFGZs3xx9I7M2IzfzOeABy4zMvf8z++ee++5R41eNq2X4xMJwHhAxjj16ftbNByAUw3f93uAx2iBoQASgGlqzAXmBRFqBt4BFiANiOsyR4LfBu4Cj9T40VUnGEA+sA0Yria/BiqBZyqgBJUhAP42QoGMVVnKBGTIYsTEZzNw1d8pGMBHoAU4ogJLSntiPpBNQCuQZQSgA/uBfSaj5gCDgAfAGz8N0dsLgecuWAZ6CvAQmK4CPwfWKpiIALYARSYzMEHtfapasS+bYQOYjBvUzT+b4QHkfK0u0zTt2M0h9tookEQOkNtQXatr2r6KofYrvQIQhaD+EpFnABCnJcDFKMCYApBiUQps6C2ARnVv86IAsAYoVjrh3QJVvaTOSwmNpp0EVgF9jEqxXD95iIZEMzpwHxgJjDICkHd8lgKQ7QiwxS9exP4e0JqKzZKie/RU3WLx6m6Pw2KLqUse5K4r1rJcIcB/Aq+AqUYAsm+n1SE8IZMXNDzJ1vAsB2YA8tzGhqh7bWg40HiMrl+uGJZ5Tc2bAtQAohdwuIM9RiLeQIz2LLe+pkz3elcAc8xshw5PgPI7WbmxrZ8a5E1YCFw3yoD8fhDYNbPiHP3sE83E7vT5+62Jh3mr+fO5vl5vc0sbJ71Gp4VqySZJBxSfNsZrLzlsic9IMQ3xcuch3peWi/86tbUBWt01pSuBMgluLz6EGQhH4WmchXKc2quqVNf/zKgr3ggcl+CTTxSQODE9rEzobjfOY6WGwUXMCEDmbAcKrInx3vRtGyyjVy3tFqLxViXOohK9ueqpaJ8FJJMhLRwAcV6u2Wx7dJcrI2nRfNK2rqdvSkA9oa3pe/uq35dcQLPGtOhuj3TWp4xSFi6A6PRX2dgaO3igK2NHvi15Wcdz8eXSDZxHz3h/vf0g/yOcBwrpuIKGFgmAT2y21se2W//ryo5LTnLLJv75WG+1JiZUuX/8PNC17zciMAPg05SKKUNMXjzfq2cUM+xrGJGQ2ck9yYDZmAF+/wC8wvYh/Pu6RQAAAABJRU5ErkJggg==\"\n\n//# sourceURL=webpack://book/./src/assets/images/icon_safe.png?");

/***/ }),

/***/ "./src/views/Mine.vue":
/*!****************************!*\
  !*** ./src/views/Mine.vue ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Mine_vue_vue_type_template_id_4e42760d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mine.vue?vue&type=template&id=4e42760d& */ \"./src/views/Mine.vue?vue&type=template&id=4e42760d&\");\n/* harmony import */ var _Mine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mine.vue?vue&type=script&lang=js& */ \"./src/views/Mine.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(\n  _Mine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _Mine_vue_vue_type_template_id_4e42760d___WEBPACK_IMPORTED_MODULE_0__.render,\n  _Mine_vue_vue_type_template_id_4e42760d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/Mine.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://book/./src/views/Mine.vue?");

/***/ }),

/***/ "./src/views/Mine.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./src/views/Mine.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Mine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Mine.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Mine.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Mine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack://book/./src/views/Mine.vue?");

/***/ }),

/***/ "./src/views/Mine.vue?vue&type=template&id=4e42760d&":
/*!***********************************************************!*\
  !*** ./src/views/Mine.vue?vue&type=template&id=4e42760d& ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mine_vue_vue_type_template_id_4e42760d___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mine_vue_vue_type_template_id_4e42760d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mine_vue_vue_type_template_id_4e42760d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Mine.vue?vue&type=template&id=4e42760d& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Mine.vue?vue&type=template&id=4e42760d&\");\n\n\n//# sourceURL=webpack://book/./src/views/Mine.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Mine.vue?vue&type=template&id=4e42760d&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/Mine.vue?vue&type=template&id=4e42760d& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"mine\" }, [\n    _c(\"div\", { staticClass: \"bg\" }),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"baseInfo\" }, [\n      _c(\"div\", { staticClass: \"info_top clearfix\" }, [\n        _c(\"div\", { staticClass: \"img fl\" }, [\n          _c(\"img\", {\n            staticClass: \"auto-img\",\n            attrs: { src: _vm.userInfo.userImg, alt: \"\" }\n          })\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"text fl\" }, [\n          _c(\"div\", { staticClass: \"text_name\" }, [\n            _vm._v(_vm._s(_vm.userInfo.nickName))\n          ]),\n          _vm._v(\" \"),\n          Boolean(_vm.userInfo.vip)\n            ? _c(\"div\", { staticClass: \"text_vip\" }, [_vm._v(\"vip\")])\n            : _c(\"div\", { staticClass: \"text_vip\" }, [_vm._v(\"未开通vip\")])\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"info_bottom\" }, [\n        _c(\"div\", { staticClass: \"info_item\" }, [\n          _c(\"p\", [_vm._v(_vm._s(_vm.bookCoin))]),\n          _vm._v(\" \"),\n          _c(\"p\", [_vm._v(\"我的书币\")])\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"info_item\" }, [\n          _vm.bookNum == undefined\n            ? _c(\"p\", [_vm._v(\"0\")])\n            : _c(\"p\", [_vm._v(_vm._s(_vm.bookNum))]),\n          _vm._v(\" \"),\n          _c(\"p\", [_vm._v(\"收藏数量\")])\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"info_item\" }, [\n          _c(\"p\", [_vm._v(_vm._s(_vm.bookReadTime))]),\n          _vm._v(\" \"),\n          _c(\"p\", [_vm._v(\"阅读(分钟)\")])\n        ])\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"featureList\" },\n      [\n        _c(\n          \"van-grid\",\n          { attrs: { \"column-num\": 3 } },\n          _vm._l(_vm.featureListData, function(item, index) {\n            return _c(\"van-grid-item\", {\n              key: index,\n              attrs: { icon: item.icon, text: item.title },\n              on: {\n                click: function($event) {\n                  return _vm.goPage(item.name)\n                }\n              }\n            })\n          }),\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"bannerList\" },\n      [\n        _c(\n          \"van-swipe\",\n          {\n            staticClass: \"my-swipe\",\n            attrs: { autoplay: 3000, \"indicator-color\": \"white\" }\n          },\n          [\n            _vm._l(_vm.bannerData, function(item, index) {\n              return _c(\"van-swipe-item\", {\n                key: index,\n                style: { \"background-image\": \"url(\" + item.bannerImg + \")\" }\n              })\n            }),\n            _vm._v(\"banner\\n    \")\n          ],\n          2\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"mine_bottom\" }, [_vm._v(\"好像到底了哦\")])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://book/./src/views/Mine.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

}]);