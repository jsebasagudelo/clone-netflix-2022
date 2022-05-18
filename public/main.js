/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 5962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$p": () => (/* binding */ SET_MOVIES),
/* harmony export */   "Ej": () => (/* binding */ LOGGED_IN_USER),
/* harmony export */   "Nv": () => (/* binding */ LOGOUT),
/* harmony export */   "Zp": () => (/* binding */ SEARCH_INPUT_VALUE),
/* harmony export */   "rN": () => (/* binding */ SET_MOVIES_FAVORITE)
/* harmony export */ });
var SET_MOVIES = 'SET_MOVIES';
var SEARCH_INPUT_VALUE = 'SEARCH_INPUT_VALUE';
var SET_MOVIES_FAVORITE = 'SET_MOVIES_FAVORITE';
var LOGGED_IN_USER = 'LOGGED_IN_USER';
var LOGOUT = 'LOGGED_IN_USER';

/***/ }),

/***/ 2962:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(4890);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(5998);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(3727);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
;// CONCATENATED MODULE: ./src/styles/components/StylesApp.js

var useStylesApp = (0,makeStyles/* default */.Z)(function (theme) {
  return {
    root: {
      background: "#1111",
      // minHeight: "100vh",
      lef: 0,
      right: 0,
      fontSize: " 62.5%",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    }
  };
});
/* harmony default export */ const StylesApp = (useStylesApp);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(4589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/styles/App.css
var App = __webpack_require__(3773);
;// CONCATENATED MODULE: ./src/components/styles/App.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(App/* default */.Z, options);




       /* harmony default export */ const styles_App = (App/* default */.Z && App/* default.locals */.Z.locals ? App/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/routes/App.js


var Profile = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(307), __webpack_require__.e(658), __webpack_require__.e(25), __webpack_require__.e(695)]).then(__webpack_require__.bind(__webpack_require__, 8695));
});
var Genero = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(307), __webpack_require__.e(658), __webpack_require__.e(224), __webpack_require__.e(669), __webpack_require__.e(957), __webpack_require__.e(215), __webpack_require__.e(25), __webpack_require__.e(300), __webpack_require__.e(100)]).then(__webpack_require__.bind(__webpack_require__, 6100));
});
var NotFound = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(307), __webpack_require__.e(606)]).then(__webpack_require__.bind(__webpack_require__, 9606));
});
var Search = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(307), __webpack_require__.e(658), __webpack_require__.e(224), __webpack_require__.e(669), __webpack_require__.e(957), __webpack_require__.e(924), __webpack_require__.e(25), __webpack_require__.e(109)]).then(__webpack_require__.bind(__webpack_require__, 5109));
});
var Mylist = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(307), __webpack_require__.e(658), __webpack_require__.e(224), __webpack_require__.e(25), __webpack_require__.e(252)]).then(__webpack_require__.bind(__webpack_require__, 6252));
});
var Home = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(307), __webpack_require__.e(658), __webpack_require__.e(669), __webpack_require__.e(25), __webpack_require__.e(860)]).then(__webpack_require__.bind(__webpack_require__, 8860));
});



function App_App() {
  var classes = StylesApp();
  return /*#__PURE__*/react.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react.createElement(react_router_dom/* BrowserRouter */.VK, {
    history: history
  }, /*#__PURE__*/react.createElement(react.Suspense, {
    fallback: /*#__PURE__*/react.createElement("div", null, "Loading...")
  }, /*#__PURE__*/react.createElement(react_router/* Switch */.rs, null, /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/profile",
    exact: true
  }, /*#__PURE__*/react.createElement(Profile, null)), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/genero",
    exact: true
  }, /*#__PURE__*/react.createElement(Genero, null)), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/mylist",
    exact: true
  }, /*#__PURE__*/react.createElement(Mylist, null)), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/search",
    exact: true
  }, /*#__PURE__*/react.createElement(Search, null)), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/",
    exact: true
  }, /*#__PURE__*/react.createElement(Home, null)), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "*",
    component: NotFound
  })))));
}

/* harmony default export */ const routes_App = (App_App);
// EXTERNAL MODULE: ./src/actions/types.js
var types = __webpack_require__(5962);
;// CONCATENATED MODULE: ./src/redux/movieReducer.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  list: [],
  inputvalue: "",
  listFavorites: []
};
var movieReducer = function movieReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types/* SET_MOVIES */.$p:
      return _objectSpread(_objectSpread({}, state), {}, {
        list: action.payload
      });

    case types/* SEARCH_INPUT_VALUE */.Zp:
      return _objectSpread(_objectSpread({}, state), {}, {
        inputvalue: action.payload
      });

    case types/* SET_MOVIES_FAVORITE */.rN:
      return _objectSpread(_objectSpread({}, state), {}, {
        listFavorites: [].concat(_toConsumableArray(state.listFavorites), [action.payload])
      });

    default:
      return state;
  }
};
;// CONCATENATED MODULE: ./src/redux/userReducer.js
function userReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function userReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? userReducer_ownKeys(Object(source), !0).forEach(function (key) { userReducer_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : userReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function userReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var userReducer_initialState = {
  userInfo: []
};
var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : userReducer_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types/* LOGGED_IN_USER */.Ej:
      return userReducer_objectSpread(userReducer_objectSpread({}, state), {}, {
        userInfo: action.payload
      });

    case types/* LOGOUT */.Nv:
      return action.payload;

    default:
      return state;
  }
};
;// CONCATENATED MODULE: ./src/redux/rootReducers.js



var rootReducer = (0,redux/* combineReducers */.UY)({
  movie: movieReducer,
  user: userReducer
});
/* harmony default export */ const rootReducers = (rootReducer);
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
;// CONCATENATED MODULE: ./src/index.js







var store = (0,redux/* createStore */.MT)(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined);
react_dom.render( /*#__PURE__*/react.createElement(es/* Provider */.zt, {
  store: store
}, /*#__PURE__*/react.createElement(routes_App, null)), document.getElementById("root"));

/***/ }),

/***/ 3773:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n*::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n\r\n.info {\r\n  display: none;\r\n  position: absolute;\r\n  bottom: 0;\r\n  /* transform: translateY(15%);*/\r\n\r\n  border: 1px solid red;\r\n  left: 3px;\r\n  width: 94%;\r\n  /* height: 100%;*/\r\n  padding: 0.6em;\r\n  /*pointer-events: none;*/\r\n  transition: all 0.4s ease 0.15s;\r\n  /* width: \"calc(100% - 6px)\";*/\r\n\r\n  z-index: 2;\r\n  border-radius: 5px;\r\n}\r\n.card {\r\n  border: 2px solid blue;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n.card:hover .info {\r\n  display: block;\r\n}\r\n.Poster__info--iconswrp {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n.Poster__info--icon {\r\n  display: inline-flex;\r\n  padding: 6px;\r\n  border-radius: 50%;\r\n  font-size: 12px;\r\n  cursor: pointer;\r\n  margin: 0 5px;\r\n  margin-bottom: 0.6em;\r\n  background: transparent;\r\n  color: #fff;\r\n  border: 1px solid #fff;\r\n  transition: all 0.3s ease-out;\r\n  outline: none;\r\n}\r\n\r\n/*MODAL*/\r\n\r\n.modal {\r\n  position: fixed;\r\n  z-index: 99999;\r\n  width: 100%;\r\n  top:  0; \r\n  left: 0; \r\n  color: #fff;\r\n\r\n  opacity: 0;\r\n  box-shadow: 0 1.5rem 4rem rgba(#171818, .15);\r\n  height: 40rem;\r\n\r\n}\r\n.backdrop {\r\n  width: 100%; \r\n  height: 100%;\r\n  position: fixed; \r\n  z-index: 100; \r\n  left: 0; \r\n  top: 0; \r\n  background-color: rgba(#111111, .7);\r\n  transition: all .5s;\r\n}\r\n.show {\r\n  transition: .5s .3s ease-out;\r\n  top: 25%;\r\n  left: 0;\r\n  visibility: visible;\r\n  opacity: 1;\r\n\r\n}\r\n\r\n.backdrop {\r\n  width: 100%; \r\n  height: 100%;\r\n  position: fixed; \r\n  z-index: 100; \r\n  left: 0; \r\n  top: 0; \r\n  background-color: rgba(#111111, .7);\r\n  transition: all .5s;\r\n}\r\n.hide {\r\n  visibility: hidden;\r\n\r\n}\r\n.modal__rating {\r\n  font-size: 2rem;\r\n  color: #5cdf5c;\r\n}\r\n.modal__container {\r\n  background: linear-gradient(90deg, #000 50%, transparent);\r\n  width: 70%;\r\n  padding-top: 3rem;\r\n  height: 100%;\r\n  padding-left: 5rem;\r\n}\r\n\r\n.modal__title {\r\n  font-size: 4rem;\r\n}\r\n\r\n.modal__rating {\r\n  font-size: 2rem;\r\n  color: #5cdf5c;\r\n}\r\n\r\n.modal__info {\r\n  padding-top: 1.6rem;\r\n  font-size: 2rem;\r\n\r\n  \r\n}\r\n\r\n.modal__episode {\r\n  padding-top: .5rem;\r\n  font-size: 2rem;\r\n}\r\n\r\n.modal__overview {\r\n     color: #7a7a7a;\r\n    padding-top: 2rem;\r\n    font-size: 2rem;\r\n    hyphens: auto;\r\n    width: 60%;\r\n    line-height: 1.2;\r\n}\r\n\r\n.modal__btn {\r\n  text-transform: uppercase;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  color: #fff;\r\n  border: .5px solid rgb(122, 122, 122);\r\n  border-radius: 2px;\r\n  font-size: 1.5rem;\r\n  margin-top: 2rem;\r\n  margin-right: 1rem;\r\n  padding: 1rem 2rem 1rem 2rem;\r\n  transition: all .2s;\r\n}\r\n.modal__btn:hover{\r\n  transform: scale(1.09); \r\n}\r\n.modal_icon {\r\n  fill: #fff;\r\n  padding-right: 1rem;\r\n  height: 1.4rem;\r\n  width: 1.4rem;\r\n}\r\n.modal__btn {\r\n  text-transform: uppercase;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  color: #fff;\r\n  border: .5px solid rgb(122, 122, 122);\r\n  border-radius: 2px;\r\n  font-size: 1.5rem;\r\n  margin-top: 2rem;\r\n  margin-right: 1rem;\r\n  padding: 1rem 2rem 1rem 2rem;\r\n  transition: all .2s;\r\n\r\n\r\n}\r\n.modal__btn_red {\r\n  background-color: #e21221;\r\n  border: none;\r\n}\r\n.modal__btn_icon{\r\n  fill: #fff;\r\n  padding-right: 1rem;\r\n  height: 1.4rem;\r\n  width: 1.9rem;\r\n  \r\n}\r\n", "",{"version":3,"sources":["webpack://./src/components/styles/App.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,aAAa;AACf;;;AAGA;EACE,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,+BAA+B;;EAE/B,qBAAqB;EACrB,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,cAAc;EACd,wBAAwB;EACxB,+BAA+B;EAC/B,8BAA8B;;EAE9B,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,qBAAqB;EACrB,kBAAkB;AACpB;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;AAC7B;AACA;EACE,oBAAoB;EACpB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,aAAa;EACb,oBAAoB;EACpB,uBAAuB;EACvB,WAAW;EACX,sBAAsB;EACtB,6BAA6B;EAC7B,aAAa;AACf;;AAEA,QAAQ;;AAER;EACE,eAAe;EACf,cAAc;EACd,WAAW;EACX,OAAO;EACP,OAAO;EACP,WAAW;;EAEX,UAAU;EACV,4CAA4C;EAC5C,aAAa;;AAEf;AACA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,OAAO;EACP,MAAM;EACN,mCAAmC;EACnC,mBAAmB;AACrB;AACA;EACE,4BAA4B;EAC5B,QAAQ;EACR,OAAO;EACP,mBAAmB;EACnB,UAAU;;AAEZ;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,OAAO;EACP,MAAM;EACN,mCAAmC;EACnC,mBAAmB;AACrB;AACA;EACE,kBAAkB;;AAEpB;AACA;EACE,eAAe;EACf,cAAc;AAChB;AACA;EACE,yDAAyD;EACzD,UAAU;EACV,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,eAAe;;;AAGjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;KACK,cAAc;IACf,iBAAiB;IACjB,eAAe;IACf,aAAa;IACb,UAAU;IACV,gBAAgB;AACpB;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,eAAe;EACf,6BAA6B;EAC7B,WAAW;EACX,qCAAqC;EACrC,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,4BAA4B;EAC5B,mBAAmB;AACrB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,UAAU;EACV,mBAAmB;EACnB,cAAc;EACd,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,eAAe;EACf,6BAA6B;EAC7B,WAAW;EACX,qCAAqC;EACrC,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,4BAA4B;EAC5B,mBAAmB;;;AAGrB;AACA;EACE,yBAAyB;EACzB,YAAY;AACd;AACA;EACE,UAAU;EACV,mBAAmB;EACnB,cAAc;EACd,aAAa;;AAEf","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n*::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n\r\n.info {\r\n  display: none;\r\n  position: absolute;\r\n  bottom: 0;\r\n  /* transform: translateY(15%);*/\r\n\r\n  border: 1px solid red;\r\n  left: 3px;\r\n  width: 94%;\r\n  /* height: 100%;*/\r\n  padding: 0.6em;\r\n  /*pointer-events: none;*/\r\n  transition: all 0.4s ease 0.15s;\r\n  /* width: \"calc(100% - 6px)\";*/\r\n\r\n  z-index: 2;\r\n  border-radius: 5px;\r\n}\r\n.card {\r\n  border: 2px solid blue;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n.card:hover .info {\r\n  display: block;\r\n}\r\n.Poster__info--iconswrp {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n.Poster__info--icon {\r\n  display: inline-flex;\r\n  padding: 6px;\r\n  border-radius: 50%;\r\n  font-size: 12px;\r\n  cursor: pointer;\r\n  margin: 0 5px;\r\n  margin-bottom: 0.6em;\r\n  background: transparent;\r\n  color: #fff;\r\n  border: 1px solid #fff;\r\n  transition: all 0.3s ease-out;\r\n  outline: none;\r\n}\r\n\r\n/*MODAL*/\r\n\r\n.modal {\r\n  position: fixed;\r\n  z-index: 99999;\r\n  width: 100%;\r\n  top:  0; \r\n  left: 0; \r\n  color: #fff;\r\n\r\n  opacity: 0;\r\n  box-shadow: 0 1.5rem 4rem rgba(#171818, .15);\r\n  height: 40rem;\r\n\r\n}\r\n.backdrop {\r\n  width: 100%; \r\n  height: 100%;\r\n  position: fixed; \r\n  z-index: 100; \r\n  left: 0; \r\n  top: 0; \r\n  background-color: rgba(#111111, .7);\r\n  transition: all .5s;\r\n}\r\n.show {\r\n  transition: .5s .3s ease-out;\r\n  top: 25%;\r\n  left: 0;\r\n  visibility: visible;\r\n  opacity: 1;\r\n\r\n}\r\n\r\n.backdrop {\r\n  width: 100%; \r\n  height: 100%;\r\n  position: fixed; \r\n  z-index: 100; \r\n  left: 0; \r\n  top: 0; \r\n  background-color: rgba(#111111, .7);\r\n  transition: all .5s;\r\n}\r\n.hide {\r\n  visibility: hidden;\r\n\r\n}\r\n.modal__rating {\r\n  font-size: 2rem;\r\n  color: #5cdf5c;\r\n}\r\n.modal__container {\r\n  background: linear-gradient(90deg, #000 50%, transparent);\r\n  width: 70%;\r\n  padding-top: 3rem;\r\n  height: 100%;\r\n  padding-left: 5rem;\r\n}\r\n\r\n.modal__title {\r\n  font-size: 4rem;\r\n}\r\n\r\n.modal__rating {\r\n  font-size: 2rem;\r\n  color: #5cdf5c;\r\n}\r\n\r\n.modal__info {\r\n  padding-top: 1.6rem;\r\n  font-size: 2rem;\r\n\r\n  \r\n}\r\n\r\n.modal__episode {\r\n  padding-top: .5rem;\r\n  font-size: 2rem;\r\n}\r\n\r\n.modal__overview {\r\n     color: #7a7a7a;\r\n    padding-top: 2rem;\r\n    font-size: 2rem;\r\n    hyphens: auto;\r\n    width: 60%;\r\n    line-height: 1.2;\r\n}\r\n\r\n.modal__btn {\r\n  text-transform: uppercase;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  color: #fff;\r\n  border: .5px solid rgb(122, 122, 122);\r\n  border-radius: 2px;\r\n  font-size: 1.5rem;\r\n  margin-top: 2rem;\r\n  margin-right: 1rem;\r\n  padding: 1rem 2rem 1rem 2rem;\r\n  transition: all .2s;\r\n}\r\n.modal__btn:hover{\r\n  transform: scale(1.09); \r\n}\r\n.modal_icon {\r\n  fill: #fff;\r\n  padding-right: 1rem;\r\n  height: 1.4rem;\r\n  width: 1.4rem;\r\n}\r\n.modal__btn {\r\n  text-transform: uppercase;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  color: #fff;\r\n  border: .5px solid rgb(122, 122, 122);\r\n  border-radius: 2px;\r\n  font-size: 1.5rem;\r\n  margin-top: 2rem;\r\n  margin-right: 1rem;\r\n  padding: 1rem 2rem 1rem 2rem;\r\n  transition: all .2s;\r\n\r\n\r\n}\r\n.modal__btn_red {\r\n  background-color: #e21221;\r\n  border: none;\r\n}\r\n.modal__btn_icon{\r\n  fill: #fff;\r\n  padding-right: 1rem;\r\n  height: 1.4rem;\r\n  width: 1.9rem;\r\n  \r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".chunk.js";
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "clone-netflix:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkclone_netflix"] = self["webpackChunkclone_netflix"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [272], () => (__webpack_require__(2962)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map