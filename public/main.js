/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Api/Requests.js":
/*!*****************************!*\
  !*** ./src/Api/Requests.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var API_KEY = "a3f405c037b3877af91a264045307fa3"; //https://api.themoviedb.org/3/genre/movie/list?api_key=a3f405c037b3877af91a264045307fa3&language=en-US
//endpoints
//Cada endpoint es un genero

var requests = {
  fetchTrending: "trending/all/week?api_key=".concat(API_KEY, "&language=en-US"),
  fetchNetflixOriginals: "discover/tv?api_key=".concat(API_KEY, "&with_networks=213"),
  fetchTopRated: "/movie/top_rated?api_key=".concat(API_KEY, "&language=en-US"),
  fetchActionMovies: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=28"),
  fetchComedyMovies: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=35"),
  fetchHorrorMovies: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=27"),
  fetchRomanceMovies: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=10749"),
  fetchDocumentaries: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=99"),
  fetchGenders: "/genre/movie/list?api_key=".concat(API_KEY, "&language=en-US"),
  fetchGender: "/discover/movie?api_key=".concat(API_KEY, "&language=en-US"),
  fetchSearchMovies: "/search/movie?api_key=".concat(API_KEY, "&language=en-US")
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (requests);

/***/ }),

/***/ "./src/Api/index.js":
/*!**************************!*\
  !*** ./src/Api/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "https://api.themoviedb.org/3"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setMovies": () => (/* binding */ setMovies),
/* harmony export */   "setMoviesFavorites": () => (/* binding */ setMoviesFavorites),
/* harmony export */   "setSearchInputValue": () => (/* binding */ setSearchInputValue),
/* harmony export */   "setUserInfo": () => (/* binding */ setUserInfo)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/actions/types.js");

var setMovies = function setMovies(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.SET_MOVIES,
    payload: payload
  };
};
var setSearchInputValue = function setSearchInputValue(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.SEARCH_INPUT_VALUE,
    payload: payload
  };
};
var setMoviesFavorites = function setMoviesFavorites(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.SET_MOVIES_FAVORITE,
    payload: payload
  };
};
var setUserInfo = function setUserInfo(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.LOGGED_IN_USER,
    payload: payload
  };
};

/***/ }),

/***/ "./src/actions/types.js":
/*!******************************!*\
  !*** ./src/actions/types.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOGGED_IN_USER": () => (/* binding */ LOGGED_IN_USER),
/* harmony export */   "LOGOUT": () => (/* binding */ LOGOUT),
/* harmony export */   "SEARCH_INPUT_VALUE": () => (/* binding */ SEARCH_INPUT_VALUE),
/* harmony export */   "SET_MOVIES": () => (/* binding */ SET_MOVIES),
/* harmony export */   "SET_MOVIES_FAVORITE": () => (/* binding */ SET_MOVIES_FAVORITE)
/* harmony export */ });
var SET_MOVIES = 'SET_MOVIES';
var SEARCH_INPUT_VALUE = 'SEARCH_INPUT_VALUE';
var SET_MOVIES_FAVORITE = 'SET_MOVIES_FAVORITE';
var LOGGED_IN_USER = 'LOGGED_IN_USER';
var LOGOUT = 'LOGGED_IN_USER';

/***/ }),

/***/ "./src/components/Banner.jsx":
/*!***********************************!*\
  !*** ./src/components/Banner.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _utils_Utilidades__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Utilidades */ "./src/utils/Utilidades.js");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Api */ "./src/Api/index.js");
/* harmony import */ var _Api_Requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Api/Requests */ "./src/Api/Requests.js");
/* harmony import */ var _styles_components_StyleBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/StyleBanner */ "./src/styles/components/StyleBanner.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Banner = function Banner() {
  var classes = (0,_styles_components_StyleBanner__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      movie = _useState2[0],
      setMovie = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var fetchDataAxios = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var request, random;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _Api__WEBPACK_IMPORTED_MODULE_2__["default"].get(_Api_Requests__WEBPACK_IMPORTED_MODULE_3__["default"].fetchNetflixOriginals);

              case 2:
                request = _context.sent;
                random = Math.floor(Math.random() * request.data.results.length - 1);
                setMovie(request.data.results[random]);
                return _context.abrupt("return", request);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchDataAxios() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchDataAxios();
    return function () {
      setMovie({});
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    className: classes.banner,
    style: {
      backgroundImage: "url(\"https://image.tmdb.org/t/p/original".concat(movie === null || movie === void 0 ? void 0 : movie.backdrop_path, "\")"),
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.banner__content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h2",
    component: "h1",
    className: classes.banner__title
  }, (movie === null || movie === void 0 ? void 0 : movie.title) || (movie === null || movie === void 0 ? void 0 : movie.name) || (movie === null || movie === void 0 ? void 0 : movie.original_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h6",
    className: classes.banner__overview,
    style: {
      wordWrap: "break-word"
    }
  }, (0,_utils_Utilidades__WEBPACK_IMPORTED_MODULE_1__.truncate)(movie === null || movie === void 0 ? void 0 : movie.overview, 160)))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);

/***/ }),

/***/ "./src/components/Error.jsx":
/*!**********************************!*\
  !*** ./src/components/Error.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_components_StyleError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/StyleError */ "./src/styles/components/StyleError.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");





var Error = function Error(_ref) {
  var title = _ref.title,
      message = _ref.message;
  var classes = (0,_styles_components_StyleError__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.bg
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    direction: "column",
    alignItems: "center",
    justify: "center",
    spacing: 4,
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h4",
    color: "secondary"
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h6",
    className: classes.error
  }, message))));
};

Error.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_4__.string.isRequired,
  message: prop_types__WEBPACK_IMPORTED_MODULE_4__.string.isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);

/***/ }),

/***/ "./src/components/Footer.jsx":
/*!***********************************!*\
  !*** ./src/components/Footer.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles_components_StyleFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/StyleFooter */ "./src/styles/components/StyleFooter.js");



var Footer = function Footer() {
  var classes = (0,_styles_components_StyleFooter__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", {
    className: classes.footer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.copyright
  }, "\xA9 2022 Made with \u2764\uFE0F by ", "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: classes.link__container,
    href: "https://github.com/jsebasagudelo/netflix-clone"
  }, "   ", "Sebastian Agudelo")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/AppBar/AppBar.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Avatar/Avatar.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _assets_images_netflixavatar_red_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/netflixavatar_red.png */ "./src/assets/images/netflixavatar_red.png");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/index */ "./src/actions/index.js");
/* harmony import */ var _assets_images_netflix_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/netflix-logo.png */ "./src/assets/images/netflix-logo.png");
/* harmony import */ var _styles_components_StyleHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/components/StyleHeader */ "./src/styles/components/StyleHeader.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Header = function Header() {
  var classes = (0,_styles_components_StyleHeader__WEBPACK_IMPORTED_MODULE_5__["default"])();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      inputsearch = _useState4[0],
      setInputSearch = _useState4[1];

  var history = (0,react_router__WEBPACK_IMPORTED_MODULE_6__.useHistory)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();

  var hideHeader = function hideHeader() {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  var handleChange = function handleChange(event) {
    setInputSearch(event.target.value);
    dispatch((0,_actions_index__WEBPACK_IMPORTED_MODULE_3__.setSearchInputValue)(event.target.value));

    if (event.target.value.length > 0) {
      history.push("/search?q=".concat(event.target.value));
    } else {
      history.push("/");
    }
  };

  var handleHome = function handleHome() {
    dispatch((0,_actions_index__WEBPACK_IMPORTED_MODULE_3__.setSearchInputValue)(""));
    setInputSearch("");
    history.push("/");
  };

  var handlePeliculas = function handlePeliculas() {
    history.push("/genero");
  };

  var handleProfile = function handleProfile() {
    history.push("/profile");
  };

  var handleMyList = function handleMyList() {
    history.push("/mylist");
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.addEventListener("scroll", hideHeader);
    return function () {
      return window.removeEventListener("scroll", hideHeader);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {
    position: "sticky",
    className: "".concat(classes.root, " ").concat(show && classes.scrolled),
    elevation: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.toolbar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.Izquierda
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: handleHome
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_images_netflix_logo_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    al: "logo",
    className: classes.logo
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "inherit",
    variant: "text",
    onClick: handlePeliculas
  }, "Peliculas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "inherit",
    variant: "text",
    onClick: handleMyList
  }, "Mi Lista")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.Lateral
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.search
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.searchIcon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_11__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_12__["default"], {
    placeholder: "Search\u2026",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      "aria-label": "search"
    },
    onChange: handleChange,
    value: inputsearch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "square",
    src: _assets_images_netflixavatar_red_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    style: {
      cursor: "pointer"
    },
    onClick: handleProfile
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Loader.jsx":
/*!***********************************!*\
  !*** ./src/components/Loader.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");
/* harmony import */ var _styles_components_StyleLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/StyleLoader */ "./src/styles/components/StyleLoader.js");




var Loader = function Loader() {
  var classes = (0,_styles_components_StyleLoader__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.loader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__["default"], {
    classes: {
      colorPrimary: classes.colorPrimary
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: classes.loader_text
  }, "Loading..."));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ "./src/components/Mylist.jsx":
/*!***********************************!*\
  !*** ./src/components/Mylist.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var movie_trailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! movie-trailer */ "./node_modules/movie-trailer/index.js");
/* harmony import */ var movie_trailer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(movie_trailer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_HighlightOffRounded__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/HighlightOffRounded */ "./node_modules/@material-ui/icons/HighlightOffRounded.js");
/* harmony import */ var _containers_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/Layout */ "./src/containers/Layout.jsx");
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-youtube */ "./node_modules/react-youtube/dist/YouTube.mjs");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _styles_components_StyleMylist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/StyleMylist */ "./src/styles/components/StyleMylist.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/constant */ "./src/utils/constant.js");
/* harmony import */ var _components_styles_row_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/styles/row.css */ "./src/components/styles/row.css");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var Mylist = function Mylist() {
  var classes = (0,_styles_components_StyleMylist__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      trailerPath = _useState2[0],
      setTrailerPath = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      description = _useState4[0],
      setDescription = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      title = _useState6[0],
      setTitle = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      original_title = _useState8[0],
      setOriginal_title = _useState8[1];

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return _objectSpread({}, state);
  }),
      movie = _useSelector.movie;

  var handlePagination = function handlePagination(e) {
    var el = e.target.parentElement.className.split(" ");
    var scrollContainer = document.querySelector(".".concat(el[1]));

    if (e.target.className === "pagination pagination--right") {
      scrollContainer.scrollLeft += scrollContainer.offsetWidth;
    } else {
      scrollContainer.scrollLeft -= scrollContainer.offsetWidth;
    }
  };

  var handleClick = function handleClick(movie) {
    if (trailerPath === "") {
      movie_trailer__WEBPACK_IMPORTED_MODULE_1___default()((movie === null || movie === void 0 ? void 0 : movie.name) || (movie === null || movie === void 0 ? void 0 : movie.title) || (movie === null || movie === void 0 ? void 0 : movie.original_name) || (movie === null || movie === void 0 ? void 0 : movie.original_title)).then(function (response) {
        var path = response.split("?v=")[1];
        console.log(JSON.stringify(response));
        setTrailerPath(path);
        document.querySelector("body").style.overflow = "hidden";
        setDescription(movie === null || movie === void 0 ? void 0 : movie.overview);
        setTitle((movie === null || movie === void 0 ? void 0 : movie.name) || (movie === null || movie === void 0 ? void 0 : movie.title));
        setOriginal_title(movie === null || movie === void 0 ? void 0 : movie.original_name);
      })["catch"](function (error) {
        console.log(error);
      });
    } else {
      setTrailerPath("");
      setDescription("");
      setTitle("");
      setOriginal_title("");
      document.querySelector("body").style.overflow = "auto";
    }
  };

  var opts = {
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      controls: 0
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_containers_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.espacio
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h5",
    style: {
      marginBottom: "60px",
      color: "#fff",
      marginLeft: "30px"
    }
  }, "My List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row__posters row__posters--".concat(25)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "pagination pagination--left",
    onClick: function onClick(e) {
      return handlePagination(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      fill: '#fff'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "pagination pagination--right",
    onClick: function onClick(e) {
      return handlePagination(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_9__["default"], null)), movie.listFavorites.map(function (movie) {
    return movie.backdrop_path && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      key: movie.id,
      className: classes.row__poster,
      src: _utils_constant__WEBPACK_IMPORTED_MODULE_5__.base_url_Img + movie.backdrop_path,
      alt: movie.name,
      onClick: function onClick() {
        return handleClick(movie);
      }
    });
  })), trailerPath && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.info__overlay,
    onClick: function onClick() {
      return handleClick(null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.info__overlay__contentBox,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    onClick: function onClick() {
      return handleClick(null);
    },
    className: classes.info__overlay__btnClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_HighlightOffRounded__WEBPACK_IMPORTED_MODULE_10__["default"], {
    style: {
      fill: "#fff",
      fontSize: 40
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.info__overlay_videoBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_youtube__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.info__overlay__youtube,
    videoId: trailerPath,
    opts: opts,
    title: "string"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.info__overlay__iconBox
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.info__overlay__text
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, original_title ? "(".concat(original_title, ")") : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, description)))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mylist);

/***/ }),

/***/ "./src/components/NotFound.jsx":
/*!*************************************!*\
  !*** ./src/components/NotFound.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles_components_StyleNotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/StyleNotFound */ "./src/styles/components/StyleNotFound.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _common_Back__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/Back */ "./src/components/common/Back.jsx");





var NotFound = function NotFound() {
  var classes = (0,_styles_components_StyleNotFound__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.bg
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    direction: "column",
    alignItems: "center",
    justify: "center",
    spacing: 4,
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h4"
  }, "Lost your way?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body1",
    align: "center"
  }, "Sorry, we can't find that page. You'll find lots to explore on the home page.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_Back__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h4",
    className: classes.error
  }, "Error"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

/***/ }),

/***/ "./src/components/Plans.jsx":
/*!**********************************!*\
  !*** ./src/components/Plans.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styled_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styled/Button */ "./src/styled/Button.js");
/* harmony import */ var _styles_components_StylePlans__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/StylePlans */ "./src/styles/components/StylePlans.js");





var Plans = function Plans(_ref) {
  var cost = _ref.cost,
      children = _ref.children,
      color = _ref.color,
      wide = _ref.wide;
  var classes = (0,_styles_components_StylePlans__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h5",
    className: classes.standard
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_Button__WEBPACK_IMPORTED_MODULE_1__.StyledButton, {
    color: color,
    wide: wide
  }, "Subscribe"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Plans);

/***/ }),

/***/ "./src/components/Row.jsx":
/*!********************************!*\
  !*** ./src/components/Row.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_HighlightOffRounded__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/HighlightOffRounded */ "./node_modules/@material-ui/icons/HighlightOffRounded.js");
/* harmony import */ var movie_trailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! movie-trailer */ "./node_modules/movie-trailer/index.js");
/* harmony import */ var movie_trailer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(movie_trailer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-youtube */ "./node_modules/react-youtube/dist/YouTube.mjs");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Api */ "./src/Api/index.js");
/* harmony import */ var _components_styles_row_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles/row.css */ "./src/components/styles/row.css");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/constant */ "./src/utils/constant.js");
/* harmony import */ var _styles_components_StyleRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/components/StyleRow */ "./src/styles/components/StyleRow.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











 // design pattern: Render Props

var Row = function Row(_ref) {
  var titleMovie = _ref.titleMovie,
      id = _ref.id,
      fetchUrl = _ref.fetchUrl,
      _ref$with_genres = _ref.with_genres,
      with_genres = _ref$with_genres === void 0 ? 0 : _ref$with_genres;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      movies = _useState2[0],
      setMovies = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      trailerPath = _useState4[0],
      setTrailerPath = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      description = _useState6[0],
      setDescription = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      title = _useState8[0],
      setTitle = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      original_title = _useState10[0],
      setOriginal_title = _useState10[1];

  var classes = (0,_styles_components_StyleRow__WEBPACK_IMPORTED_MODULE_5__["default"])();

  var handlePagination = function handlePagination(e) {
    var el = e.target.parentElement.className.split(" ");
    var scrollContainer = document.querySelector(".".concat(el[1]));

    if (e.target.className === "pagination pagination--right") {
      scrollContainer.scrollLeft += scrollContainer.offsetWidth;
    } else {
      scrollContainer.scrollLeft -= scrollContainer.offsetWidth;
    }
  };

  var handleClick = function handleClick(movie) {
    if (trailerPath === "") {
      movie_trailer__WEBPACK_IMPORTED_MODULE_1___default()((movie === null || movie === void 0 ? void 0 : movie.name) || (movie === null || movie === void 0 ? void 0 : movie.title) || (movie === null || movie === void 0 ? void 0 : movie.original_name) || (movie === null || movie === void 0 ? void 0 : movie.original_title)).then(function (response) {
        var path = response.split("?v=")[1];
        console.log(path);
        console.log(JSON.stringify(response));
        setTrailerPath(path);
        document.querySelector("body").style.overflow = "hidden";
        setDescription(movie === null || movie === void 0 ? void 0 : movie.overview);
        setTitle((movie === null || movie === void 0 ? void 0 : movie.name) || (movie === null || movie === void 0 ? void 0 : movie.title));
        setOriginal_title(movie === null || movie === void 0 ? void 0 : movie.original_name);
      })["catch"](function (error) {
        console.log(error);
      });
    } else {
      setTrailerPath("");
      setDescription("");
      setTitle("");
      setOriginal_title("");
      document.querySelector("body").style.overflow = "auto";
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchUrl = with_genres != 0 ? "".concat(fetchUrl, "&with_genres=").concat(with_genres, "&sort_by=vote_average.desc&vote_count.gte=20") : fetchUrl;

    var fetchData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var request;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _Api__WEBPACK_IMPORTED_MODULE_2__["default"].get(fetchUrl);

              case 2:
                request = _context.sent;
                setMovies(request.data.results);
                return _context.abrupt("return", request);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();

    fetchData();
  }, [fetchUrl + with_genres]);
  var opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      controls: 0
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: classes.row__title
  }, titleMovie), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row__posters row__posters--".concat(id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "pagination pagination--left",
    onClick: function onClick(e) {
      return handlePagination(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "pagination pagination--right",
    onClick: function onClick(e) {
      return handlePagination(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_7__["default"], null)), movies.map(function (movie) {
    return movie.backdrop_path && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      key: movie.id,
      className: classes.row__poster,
      src: _utils_constant__WEBPACK_IMPORTED_MODULE_4__.base_url_Img + movie.backdrop_path,
      alt: movie.name,
      onClick: function onClick() {
        return handleClick(movie);
      }
    });
  })), trailerPath && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.info__overlay,
    onClick: function onClick() {
      return handleClick(null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.info__overlay__contentBox,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    onClick: function onClick() {
      return handleClick(null);
    },
    className: classes.info__overlay__btnClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_HighlightOffRounded__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.info__overlay__btnClose
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.info__overlay_videoBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_youtube__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.info__overlay__youtube,
    videoId: trailerPath,
    opts: opts,
    title: "string"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.info__overlay__iconBox
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.info__overlay__text
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, original_title ? "(".concat(original_title, ")") : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, description))))));
}; // Component Documentation


Row.propTypes = {
  titleMovie: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),
  id: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string),
  fetchUrl: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row); // Alias Component in the browser

Row.displayName = "Row Movie";

/***/ }),

/***/ "./src/components/base/BannerBase.jsx":
/*!********************************************!*\
  !*** ./src/components/base/BannerBase.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _custom_hooks_useGetBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../custom-hooks/useGetBanner */ "./src/custom-hooks/useGetBanner.js");
/* harmony import */ var _utils_Utilidades__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Utilidades */ "./src/utils/Utilidades.js");
/* harmony import */ var _styles_components_StyleBannerBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/components/StyleBannerBase */ "./src/styles/components/StyleBannerBase.js");






var BannerBase = function BannerBase(_ref) {
  var children = _ref.children;
  var classes = (0,_styles_components_StyleBannerBase__WEBPACK_IMPORTED_MODULE_3__["default"])();

  var _useGetBanner = (0,_custom_hooks_useGetBanner__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      movieBanner = _useGetBanner.movieBanner,
      getBanner = _useGetBanner.getBanner;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getBanner();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    className: classes.banner,
    style: {
      backgroundImage: "url(\"https://image.tmdb.org/t/p/original".concat(movieBanner === null || movieBanner === void 0 ? void 0 : movieBanner.backdrop_path, "\")"),
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.banner__content
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h2",
    component: "h1",
    className: classes.banner__title
  }, (movieBanner === null || movieBanner === void 0 ? void 0 : movieBanner.title) || (movieBanner === null || movieBanner === void 0 ? void 0 : movieBanner.name) || (movieBanner === null || movieBanner === void 0 ? void 0 : movieBanner.original_name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    className: classes.description
  }, (0,_utils_Utilidades__WEBPACK_IMPORTED_MODULE_2__.truncate)(movieBanner === null || movieBanner === void 0 ? void 0 : movieBanner.overview, 160), children));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerBase);

/***/ }),

/***/ "./src/components/common/Back.jsx":
/*!****************************************!*\
  !*** ./src/components/common/Back.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _styled_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styled/Button */ "./src/styled/Button.js");





var Back = function Back() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core___WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h6",
    gutterBottom: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: {
      pathname: "/"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_Button__WEBPACK_IMPORTED_MODULE_1__.StyledButton, null, "Go Home"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.withRouter)(Back));

/***/ }),

/***/ "./src/components/movie/MovieCard.jsx":
/*!********************************************!*\
  !*** ./src/components/movie/MovieCard.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/PlayArrow.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/Info.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/Add.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Card/Card.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/CardActions/CardActions.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constant */ "./src/utils/constant.js");
/* harmony import */ var _ui_ModalInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/ModalInfo */ "./src/components/ui/ModalInfo.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/index */ "./src/actions/index.js");
/* harmony import */ var _styles_components_StylesMovieCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/components/StylesMovieCard */ "./src/styles/components/StylesMovieCard.js");
/* harmony import */ var movie_trailer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! movie-trailer */ "./node_modules/movie-trailer/index.js");
/* harmony import */ var movie_trailer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(movie_trailer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-youtube */ "./node_modules/react-youtube/dist/YouTube.mjs");
/* harmony import */ var _material_ui_icons_HighlightOffRounded__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/HighlightOffRounded */ "./node_modules/@material-ui/icons/HighlightOffRounded.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var MovieCard = function MovieCard(_ref) {
  var movie = _ref.movie,
      _ref$poster = _ref.poster,
      poster = _ref$poster === void 0 ? "" : _ref$poster;
  var classes = (0,_styles_components_StylesMovieCard__WEBPACK_IMPORTED_MODULE_5__["default"])();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      trailerPath = _useState2[0],
      setTrailerPath = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      description = _useState4[0],
      setDescription = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      titlemovie = _useState6[0],
      setTitle = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      original_title = _useState8[0],
      setOriginal_title = _useState8[1];

  var backdrop_path = movie.backdrop_path,
      poster_path = movie.poster_path,
      title = movie.title,
      name = movie.name;

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      modalShow = _useState10[0],
      setModalShow = _useState10[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  var onClose = function onClose() {
    setModalShow(false);
  };

  var onShow = function onShow() {
    setModalShow(true);
  };

  var addMyList = function addMyList() {
    dispatch((0,_actions_index__WEBPACK_IMPORTED_MODULE_4__.setMoviesFavorites)(movie));
  };

  var opts = {
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      controls: 0
    }
  };

  var handleClick = function handleClick(movie) {
    if (trailerPath === "") {
      movie_trailer__WEBPACK_IMPORTED_MODULE_6___default()((movie === null || movie === void 0 ? void 0 : movie.name) || (movie === null || movie === void 0 ? void 0 : movie.title) || (movie === null || movie === void 0 ? void 0 : movie.original_name) || (movie === null || movie === void 0 ? void 0 : movie.original_title)).then(function (response) {
        var path = response.split("?v=")[1];
        console.log(JSON.stringify(response));
        setTrailerPath(path);
        document.querySelector("body").style.overflow = "hidden";
        setDescription(movie === null || movie === void 0 ? void 0 : movie.overview);
        setTitle((movie === null || movie === void 0 ? void 0 : movie.name) || (movie === null || movie === void 0 ? void 0 : movie.title));
        setOriginal_title(movie === null || movie === void 0 ? void 0 : movie.original_name);
      })["catch"](function (error) {
        console.log(error);
      });
    } else {
      setTrailerPath("");
      setDescription("");
      setTitle("");
      setOriginal_title("");
      document.querySelector("body").style.overflow = "auto";
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: poster ? classes.poster__root : classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.img,
    style: {
      backgroundImage: backdrop_path ? "url(".concat(_utils_constant__WEBPACK_IMPORTED_MODULE_1__.base_url_Img).concat(poster ? poster_path : backdrop_path, ")") : poster_path ? "url(".concat(_utils_constant__WEBPACK_IMPORTED_MODULE_1__.base_url_Img).concat(poster_path, ")") : null
    },
    onClick: onShow
  }, !backdrop_path && !poster_path && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "body2",
    align: "center"
  }, title ? title : name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.actions
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_11__["default"], {
    color: "secondary",
    className: classes.btn,
    onClick: function onClick() {
      return handleClick(movie);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes.btn,
    onClick: onShow
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_13__["default"], {
    color: "secondary",
    className: classes.btn,
    onClick: addMyList
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_ModalInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    show: modalShow,
    onClose: onClose,
    movie: movie
  }), trailerPath && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.info__overlay,
    onClick: function onClick() {
      return handleClick(null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.info__overlay__contentBox,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    onClick: function onClick() {
      return handleClick(null);
    },
    className: classes.info__overlay__btnClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_HighlightOffRounded__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.info__overlay__btnClose
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.info__overlay_videoBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_youtube__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: classes.info__overlay__youtube,
    videoId: trailerPath,
    opts: opts
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.info__overlay__iconBox
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.info__overlay__text
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, original_title ? "(".concat(original_title, ")") : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, description)))));
};

MovieCard.propTypes = {
  movie: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieCard);

/***/ }),

/***/ "./src/components/movie/SearchedResults.jsx":
/*!**************************************************!*\
  !*** ./src/components/movie/SearchedResults.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _MovieCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieCard */ "./src/components/movie/MovieCard.jsx");




var SearchedResults = function SearchedResults(_ref) {
  var movies = _ref.movies;
  var styles = {
    main: {
      marginBottom: "60px"
    },
    grid: {
      background: "#111",
      padding: "20px"
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    style: styles.grid
  }, movies.map(function (d, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["default"], {
      item: true,
      key: idx,
      xs: 6,
      sm: 4,
      md: 3,
      lg: 2,
      style: styles.main
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MovieCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      movie: d
    }));
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchedResults);

/***/ }),

/***/ "./src/components/ui/ModalInfo.jsx":
/*!*****************************************!*\
  !*** ./src/components/ui/ModalInfo.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Container/Container.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/Add.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constant */ "./src/utils/constant.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/index */ "./src/actions/index.js");
/* harmony import */ var _utils_Utilidades__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/Utilidades */ "./src/utils/Utilidades.js");
/* harmony import */ var _styles_components_StylesModalInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/components/StylesModalInfo */ "./src/styles/components/StylesModalInfo.js");












var ModalInfo = function ModalInfo(_ref) {
  var show = _ref.show,
      onClose = _ref.onClose,
      movie = _ref.movie;
  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var matchesXS = (0,_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_7__["default"])(theme.breakpoints.down("xs"));
  var classes = (0,_styles_components_StylesModalInfo__WEBPACK_IMPORTED_MODULE_5__["default"])();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var backdrop_path = movie.backdrop_path,
      title = movie.title,
      name = movie.name,
      overview = movie.overview,
      vote_average = movie.vote_average,
      first_air_date = movie.first_air_date,
      poster_path = movie.poster_path;

  var addMyList = function addMyList() {
    dispatch((0,_actions_index__WEBPACK_IMPORTED_MODULE_3__.setMoviesFavorites)(movie));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fullScreen: matchesXS,
    open: show,
    onClose: onClose,
    PaperProps: {
      style: {
        padding: 0,
        backgroundColor: "#000",
        height: matchesXS ? "100vh" : "75vh",
        border: matchesXS ? "none" : "1px solid #fff"
      }
    },
    fullWidth: true,
    maxWidth: "md",
    scroll: matchesXS ? "body" : "paper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
    style: {
      zIndex: 20,
      position: "absolute",
      right: "10px",
      paddingTop: "0px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.btn,
    onClick: onClose
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root,
    style: {
      backgroundImage: backdrop_path ? "url(".concat(_utils_constant__WEBPACK_IMPORTED_MODULE_1__.base_url_Img).concat(backdrop_path, ")") : "url(".concat(_utils_constant__WEBPACK_IMPORTED_MODULE_1__.base_url_Img).concat(poster_path, ")")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.inner
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["default"], {
    maxWidth: "xl",
    className: classes.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["default"], {
    container: true,
    direction: "column",
    justifyContent: "flex-end",
    spacing: 2,
    style: {
      height: "100%",
      marginTop: matchesXS && "300px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "h1",
    className: classes.title
  }, title ? title : name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: classes.add__btn,
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_16__["default"], null),
    onClick: addMyList
  }, "My List"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    className: classes.rate
  }, "Rating: ", vote_average * 10, "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    className: classes.date
  }, first_air_date === null || first_air_date === void 0 ? void 0 : first_air_date.substr(0, 4)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["default"], {
    variant: "body2",
    color: "inherit",
    className: classes.overview
  }, (0,_utils_Utilidades__WEBPACK_IMPORTED_MODULE_4__.truncate)(overview)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalInfo);

/***/ }),

/***/ "./src/containers/Layout.jsx":
/*!***********************************!*\
  !*** ./src/containers/Layout.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.jsx");
/* harmony import */ var _helpers_ErrorBoundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/ErrorBoundary */ "./src/helpers/ErrorBoundary.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Login */ "./src/pages/Login.jsx");
/* harmony import */ var _services_firebase_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/firebase/firebase */ "./src/services/firebase/firebase.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var Layout = function Layout(_ref) {
  var children = _ref.children;

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return _objectSpread({}, state);
  }),
      user = _useSelector.user; //console.log("usuario:"+userName)


  var userName = user.userInfo; //const userName="sebas"

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useHistory)();
  var styles = {
    main: {
      background: "#111",
      height: "100vh"
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var unsubscribe = _services_firebase_firebase__WEBPACK_IMPORTED_MODULE_6__.auth.onAuthStateChanged(function (userAuth) {
      if (userAuth) {
        console.log("onAuthStateChanged: " + userAuth.email);
      } else {
        history.push("/");
      }
    });
    return unsubscribe;
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: styles.main
  }, !userName.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Login__WEBPACK_IMPORTED_MODULE_5__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}; // pattern design react: HOC


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_helpers_ErrorBoundary__WEBPACK_IMPORTED_MODULE_3__.errorBoundary)(Layout));

/***/ }),

/***/ "./src/custom-hooks/useGetBanner.js":
/*!******************************************!*\
  !*** ./src/custom-hooks/useGetBanner.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Api */ "./src/Api/index.js");
/* harmony import */ var _Api_Requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Api/Requests */ "./src/Api/Requests.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var useGetBanner = function useGetBanner() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      movieBanner = _useState6[0],
      setMovieBanner = _useState6[1];

  var getBanner = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var request, random;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _Api__WEBPACK_IMPORTED_MODULE_1__["default"].get(_Api_Requests__WEBPACK_IMPORTED_MODULE_2__["default"].fetchNetflixOriginals);

            case 3:
              request = _context.sent;
              random = Math.floor(Math.random() * request.data.results.length - 1);
              setMovieBanner(request.data.results[random]);
              setLoading(true);
              return _context.abrupt("return", request);

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              setLoading(false);
              setError(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function getBanner() {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    movieBanner: movieBanner,
    loading: loading,
    error: error,
    getBanner: getBanner
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetBanner);

/***/ }),

/***/ "./src/helpers/ErrorBoundary.jsx":
/*!***************************************!*\
  !*** ./src/helpers/ErrorBoundary.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "errorBoundary": () => (/* binding */ errorBoundary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Error */ "./src/components/Error.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var errorBoundary = function errorBoundary(WrappedComponent) {
  var _class;

  var resetError = function resetError(context) {
    return context.setState({
      error: false
    });
  };

  return _class = /*#__PURE__*/function (_Component) {
    _inherits(_class, _Component);

    var _super = _createSuper(_class);

    function _class() {
      var _this;

      _classCallCheck(this, _class);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "state", {
        error: false,
        message: ''
      });

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidCatch",
      value: function componentDidCatch(error) {
        console.log("error: ", error);
        this.setState({
          hasError: true,
          message: error.message,
          error: true
        });
      }
    }, {
      key: "render",
      value: function render() {
        var props = this.props,
            state = this.state;
        var hasError = state.hasError,
            message = state.message;
        var title = " an error has occurred";
        var ErrorRender = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Error__WEBPACK_IMPORTED_MODULE_1__["default"], {
          title: title,
          message: message
        });
        var NormalRender = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrappedComponent, props);
        return hasError ? ErrorRender : NormalRender;
      }
    }]);

    return _class;
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component), _defineProperty(_class, "getDerivedFromError", function () {
    return {
      error: true
    };
  }), _class;
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _routes_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/App */ "./src/routes/App.js");
/* harmony import */ var _redux_rootReducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux/rootReducers */ "./src/redux/rootReducers.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__);







var store = (0,redux__WEBPACK_IMPORTED_MODULE_6__.createStore)(_redux_rootReducers__WEBPACK_IMPORTED_MODULE_4__["default"], window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined);
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
  store: store
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_routes_App__WEBPACK_IMPORTED_MODULE_3__["default"], null)), document.getElementById("root"));

/***/ }),

/***/ "./src/pages/Genero.jsx":
/*!******************************!*\
  !*** ./src/pages/Genero.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/Select.js");
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Api */ "./src/Api/index.js");
/* harmony import */ var _Api_Requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Api/Requests */ "./src/Api/Requests.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constant */ "./src/utils/constant.js");
/* harmony import */ var _components_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Row */ "./src/components/Row.jsx");
/* harmony import */ var _containers_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/Layout */ "./src/containers/Layout.jsx");
/* harmony import */ var _styles_components_StyleGenero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/components/StyleGenero */ "./src/styles/components/StyleGenero.js");
/* harmony import */ var _components_base_BannerBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/base/BannerBase */ "./src/components/base/BannerBase.jsx");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Genero = function Genero() {
  var classes = (0,_styles_components_StyleGenero__WEBPACK_IMPORTED_MODULE_6__["default"])();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      generlist = _useState2[0],
      setGenerlist = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      movie = _useState6[0],
      setMovie = _useState6[1]; //const { getBanner } = useGetBanner();


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var fetchGenres = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var request;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _Api__WEBPACK_IMPORTED_MODULE_1__["default"].get(_Api_Requests__WEBPACK_IMPORTED_MODULE_2__["default"].fetchGenders);

              case 2:
                request = _context.sent;
                setGenerlist(request.data.genres);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchGenres() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchGenres();
  }, [value]);

  var handleChange = function handleChange(event) {
    var id = event.target.value;

    if (event.target.value == 0) {
      id = _utils_constant__WEBPACK_IMPORTED_MODULE_3__.genero_accion;
    }

    setValue(id);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_containers_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.contenedor
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_base_BannerBase__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.genero
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      m: 1,
      minWidth: 80
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__["default"], {
    MenuProps: MenuProps,
    id: "demo-simple-select-autowidth",
    value: value,
    className: classes.select,
    inputProps: {
      classes: {
        icon: classes.icon
      }
    },
    autoWidth: true,
    onChange: handleChange
  }, generlist.map(function (genero) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: genero.id,
      value: genero.id
    }, genero.name);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "0"
  }, "Generos")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "1",
    titleMovie: "",
    fetchUrl: _Api_Requests__WEBPACK_IMPORTED_MODULE_2__["default"].fetchActionMovies,
    with_genres: value
  })))));
};

var ITEM_HEIGHT = 48;
var ITEM_PADDING_TOP = 8;
var MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Genero);
Genero.displayName = "Row Movie Generos";

/***/ }),

/***/ "./src/pages/Home.jsx":
/*!****************************!*\
  !*** ./src/pages/Home.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Banner */ "./src/components/Banner.jsx");
/* harmony import */ var _Api_Requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Api/Requests */ "./src/Api/Requests.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Loader */ "./src/components/Loader.jsx");
/* harmony import */ var _containers_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/Layout */ "./src/containers/Layout.jsx");
/* harmony import */ var _styles_components_StyleHome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/components/StyleHome */ "./src/styles/components/StyleHome.js");






var Row = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Row */ "./src/components/Row.jsx"));
}); // design pattern: Stateless

var Home = function Home() {
  var classes = (0,_styles_components_StyleHome__WEBPACK_IMPORTED_MODULE_5__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_containers_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.rows
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Row, {
    id: "1",
    titleMovie: "Netflix Original",
    fetchUrl: _Api_Requests__WEBPACK_IMPORTED_MODULE_2__["default"].fetchTopRated
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Row, {
    id: "2",
    titleMovie: "Action Movie",
    fetchUrl: _Api_Requests__WEBPACK_IMPORTED_MODULE_2__["default"].fetchActionMovies
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Row, {
    id: "3",
    titleMovie: "Comedy Movie",
    fetchUrl: _Api_Requests__WEBPACK_IMPORTED_MODULE_2__["default"].fetchComedyMovies
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Row, {
    id: "4",
    titleMovie: "Documentaries",
    fetchUrl: _Api_Requests__WEBPACK_IMPORTED_MODULE_2__["default"].fetchDocumentaries
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Row, {
    id: "5",
    titleMovie: "Horror Movies",
    fetchUrl: _Api_Requests__WEBPACK_IMPORTED_MODULE_2__["default"].fetchHorrorMovies
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/pages/Login.jsx":
/*!*****************************!*\
  !*** ./src/pages/Login.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _assets_images_netflix_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/netflix-logo.png */ "./src/assets/images/netflix-logo.png");
/* harmony import */ var _assets_images_HeroBanner_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/HeroBanner.jpg */ "./src/assets/images/HeroBanner.jpg");
/* harmony import */ var _styled_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/Input */ "./src/styled/Input.js");
/* harmony import */ var _styled_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styled/Button */ "./src/styled/Button.js");
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SignUp */ "./src/pages/SignUp.jsx");
/* harmony import */ var _styles_components_StylesLogin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/components/StylesLogin */ "./src/styles/components/StylesLogin.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Login = function Login() {
  var handleLogin = function handleLogin() {
    setSignIn(false);
  };

  var classes = (0,_styles_components_StylesLogin__WEBPACK_IMPORTED_MODULE_6__["default"])();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      signIn = _useState2[0],
      setSignIn = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root,
    style: {
      backgroundImage: "url(".concat(_assets_images_HeroBanner_jpg__WEBPACK_IMPORTED_MODULE_2__["default"], ")")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_images_netflix_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    className: classes.image,
    alt: "logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_Button__WEBPACK_IMPORTED_MODULE_4__.StyledButton, {
    className: classes.session,
    onClick: handleLogin
  }, "Iniciar session"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.info
  }, !signIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SignUp__WEBPACK_IMPORTED_MODULE_5__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h4",
    gutterBottom: true
  }, "Unlimited films, TV programmes and more."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h5"
  }, "Watch anywhere. Cancel at any time."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h6",
    gutterBottom: true
  }, "Ready to watch ? Enter your email to create or restart your membership."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.inputBlock
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_Input__WEBPACK_IMPORTED_MODULE_3__.StyledInput, {
    placeholder: "Email Address"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_Button__WEBPACK_IMPORTED_MODULE_4__.StyledButton, null, "Get started")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./src/pages/Profile.jsx":
/*!*******************************!*\
  !*** ./src/pages/Profile.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Plans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Plans */ "./src/components/Plans.jsx");
/* harmony import */ var _services_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase/firebase */ "./src/services/firebase/firebase.js");
/* harmony import */ var _assets_images_netflixavatar_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/netflixavatar.png */ "./src/assets/images/netflixavatar.png");
/* harmony import */ var _styled_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styled/Button */ "./src/styled/Button.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var _containers_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/Layout */ "./src/containers/Layout.jsx");
/* harmony import */ var _styles_components_StyleProfile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/components/StyleProfile */ "./src/styles/components/StyleProfile.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var Profile = function Profile() {
  var classes = (0,_styles_components_StyleProfile__WEBPACK_IMPORTED_MODULE_8__["default"])();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    return _objectSpread({}, state);
  }),
      user = _useSelector.user;

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useHistory)();

  var signOut = function signOut() {
    _services_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__.auth.signOut();
    dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_6__.setUserInfo)(""));
    history.push("/");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_containers_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
    m: 0,
    pt: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.body
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h3"
  }, "Edit Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.info
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_images_netflixavatar_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "avatar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.details
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.plans
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6"
  }, "Email usuario ", user.userInfo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h5",
    gutterBottom: true,
    className: classes.plansText
  }, "Plans"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Plans__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cost: 7.99
  }, "Netflix Standar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Plans__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cost: 11.99
  }, "Netflix Basic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Plans__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "gray",
    cost: 15.99,
    wide: "medium"
  }, "Netflix Premium"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_Button__WEBPACK_IMPORTED_MODULE_4__.StyledButton, {
    wide: "fullWidth",
    onClick: signOut
  }, "Sign Out")))))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

/***/ }),

/***/ "./src/pages/Search.jsx":
/*!******************************!*\
  !*** ./src/pages/Search.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Api_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Api/index */ "./src/Api/index.js");
/* harmony import */ var _Api_Requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Api/Requests */ "./src/Api/Requests.js");
/* harmony import */ var _components_movie_SearchedResults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/movie/SearchedResults */ "./src/components/movie/SearchedResults.jsx");
/* harmony import */ var _containers_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/Layout */ "./src/containers/Layout.jsx");
/* harmony import */ var _styles_components_StyleSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/components/StyleSearch */ "./src/styles/components/StyleSearch.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Search = function Search() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return _objectSpread({}, state);
  }),
      movie = _useSelector.movie;

  var searchinputvalue = movie.inputvalue;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      movies = _useState2[0],
      setMovies = _useState2[1];

  var classes = (0,_styles_components_StyleSearch__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var fetchDataAxios = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var request;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(searchinputvalue.length > 0)) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return _Api_index__WEBPACK_IMPORTED_MODULE_2__["default"].get("".concat(_Api_Requests__WEBPACK_IMPORTED_MODULE_3__["default"].fetchSearchMovies, "&query=").concat(searchinputvalue));

              case 3:
                request = _context.sent;
                setMovies(request.data.results);
                return _context.abrupt("return", request);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchDataAxios() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchDataAxios();
  }, [searchinputvalue]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_containers_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.espacio
  }), movies.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_movie_SearchedResults__WEBPACK_IMPORTED_MODULE_4__["default"], {
    movies: movies
  })) : ""));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),

/***/ "./src/pages/SignUp.jsx":
/*!******************************!*\
  !*** ./src/pages/SignUp.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");
/* harmony import */ var _styled_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styled/Button */ "./src/styled/Button.js");
/* harmony import */ var _styled_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled/Input */ "./src/styled/Input.js");
/* harmony import */ var _services_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase/firebase */ "./src/services/firebase/firebase.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var _styles_components_StyleSignUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/components/StyleSignUp */ "./src/styles/components/StyleSignUp.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var SignUp = function SignUp() {
  var classes = (0,_styles_components_StyleSignUp__WEBPACK_IMPORTED_MODULE_6__["default"])();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      errorMessage = _useState8[0],
      setErrorMessage = _useState8[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();

  var register = function register(e) {
    e.preventDefault();
    _services_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__.auth.createUserWithEmailAndPassword(email, password).then(function (authUser) {
      return console.log(authUser);
    })["catch"](function (err) {
      return alert(err.message);
    });
  };

  var signIn = function signIn(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(function () {
      setLoading(false);

      if (email === '' || password === '') {
        setErrorMessage("The password is invalid or the user does not have a password.");
      } else {
        setErrorMessage("");
      }

      _services_firebase_firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signInWithEmailAndPassword(email, password).then(function (authUser) {
        dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_5__.setUserInfo)(authUser.user.email));
      })["catch"](function (err) {
        return alert(err.message);
      });
    }, 2000);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h5",
    align: "left"
  }, "Sign In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: classes.form
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_Input__WEBPACK_IMPORTED_MODULE_2__.StyledInput, {
    placeholder: "Email",
    value: email,
    type: "email",
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    className: classes.email
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_Input__WEBPACK_IMPORTED_MODULE_2__.StyledInput, {
    placeholder: "Password",
    value: password,
    type: "password",
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    className: classes.password
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: classes.errormessage
  }, errorMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styled_Button__WEBPACK_IMPORTED_MODULE_1__.StyledButton, {
    type: "submit",
    wide: "medium",
    radius: "true",
    onClick: signIn
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: 18,
    className: classes.icon,
    color: "inherit"
  }), !loading && 'SignIn'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "subtitle2"
  }, "New to Netflix ?", "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: classes.signupLink,
    onClick: register
  }, "Sign Up now.", " "))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);

/***/ }),

/***/ "./src/redux/movieReducer.js":
/*!***********************************!*\
  !*** ./src/redux/movieReducer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "movieReducer": () => (/* binding */ movieReducer)
/* harmony export */ });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");
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
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.SET_MOVIES:
      return _objectSpread(_objectSpread({}, state), {}, {
        list: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.SEARCH_INPUT_VALUE:
      return _objectSpread(_objectSpread({}, state), {}, {
        inputvalue: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.SET_MOVIES_FAVORITE:
      return _objectSpread(_objectSpread({}, state), {}, {
        listFavorites: [].concat(_toConsumableArray(state.listFavorites), [action.payload])
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/redux/rootReducers.js":
/*!***********************************!*\
  !*** ./src/redux/rootReducers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_movieReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../redux/movieReducer */ "./src/redux/movieReducer.js");
/* harmony import */ var _redux_userReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/userReducer */ "./src/redux/userReducer.js");



var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
  movie: _redux_movieReducer__WEBPACK_IMPORTED_MODULE_0__.movieReducer,
  user: _redux_userReducer__WEBPACK_IMPORTED_MODULE_1__.userReducer
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

/***/ }),

/***/ "./src/redux/userReducer.js":
/*!**********************************!*\
  !*** ./src/redux/userReducer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userReducer": () => (/* binding */ userReducer)
/* harmony export */ });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  userInfo: []
};
var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.LOGGED_IN_USER:
      return _objectSpread(_objectSpread({}, state), {}, {
        userInfo: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.LOGOUT:
      return action.payload;

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/routes/App.js":
/*!***************************!*\
  !*** ./src/routes/App.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Home */ "./src/pages/Home.jsx");
/* harmony import */ var _pages_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Profile */ "./src/pages/Profile.jsx");
/* harmony import */ var _pages_Genero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Genero */ "./src/pages/Genero.jsx");
/* harmony import */ var _components_NotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NotFound */ "./src/components/NotFound.jsx");
/* harmony import */ var _pages_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Search */ "./src/pages/Search.jsx");
/* harmony import */ var _components_Mylist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Mylist */ "./src/components/Mylist.jsx");
/* harmony import */ var _styles_components_StylesApp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/components/StylesApp */ "./src/styles/components/StylesApp.js");
/* harmony import */ var _components_styles_App_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/styles/App.css */ "./src/components/styles/App.css");











function App() {
  var classes = (0,_styles_components_StylesApp__WEBPACK_IMPORTED_MODULE_7__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.BrowserRouter, {
    history: history
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/profile",
    exact: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Profile__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/genero",
    exact: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Genero__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/mylist",
    exact: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Mylist__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/search",
    exact: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Search__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/",
    exact: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "*",
    component: _components_NotFound__WEBPACK_IMPORTED_MODULE_4__["default"]
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/services/firebase/firebase.js":
/*!*******************************************!*\
  !*** ./src/services/firebase/firebase.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auth": () => (/* binding */ auth),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");


var firebaseConfig = {
  apiKey: "AIzaSyDy0si8pWSLGWJZ4JvVqqhea_ZCmBkw_pQ",
  authDomain: "netflix-clone-2022-1481e.firebaseapp.com",
  projectId: "netflix-clone-2022-1481e",
  storageBucket: "netflix-clone-2022-1481e.appspot.com",
  messagingSenderId: "352677560912",
  appId: "1:352677560912:web:f41b90155a04c0805b4755"
};
firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
var auth = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/styled/Button.js":
/*!******************************!*\
  !*** ./src/styled/Button.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledButton": () => (/* binding */ StyledButton)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nz-index: 15;\nbackground-color:", ";\ncolor: #fff;\nborder-radius: ", ";\npadding: 15px;\nwidth: ", ";\n  text-transform: inherit;\n  cursor: pointer;\n  padding: 15px;\n  font-size: 1.1rem;\n  border: none;\n  outline: none;\n"])), function (props) {
  return props.color === "gray" ? "lightgray" : "red";
}, function (props) {
  return props.radius ? "5px" : null;
}, function (_ref) {
  var wide = _ref.wide;
  return handleWidth(wide);
});

var handleWidth = function handleWidth(wide) {
  switch (wide) {
    case "fullWidth":
      return "100%";

    case "medium":
      return "260px";

    default:
      return "160px";
  }
};

/***/ }),

/***/ "./src/styled/Input.js":
/*!*****************************!*\
  !*** ./src/styled/Input.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledInput": () => (/* binding */ StyledInput)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


 // Design Pattern: Style Component

var StyledInput = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  z-index: 30;\n  background: #fff;\n  padding: 25.5px;\n  outline-width: 0;\n  height: 30px;\n  border-radius:5px\n \n  border: none;\n\n"])));

/***/ }),

/***/ "./src/styles/components/StyleBanner.js":
/*!**********************************************!*\
  !*** ./src/styles/components/StyleBanner.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");

var useStyleBanner = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
  return {
    root: {},
    buttons: {
      "& button": {
        cursor: "pointer",
        color: "#fff",
        fontWeight: 700,
        borderRadius: "5px",
        padding: theme.spacing(1, 4, 1, 4),
        marginRight: "1rem",
        backgroundColor: "rgb(51,51,51,0.5)"
      },
      "& button:hover": {
        color: "#000",
        backgroundColor: "#e6e6e6"
      }
    },
    description: {},
    banner: {
      padding: "0",
      width: "auto",
      height: "47vw",
      color: "#fff",
      position: "relative"
    },
    banner__content: {
      padding: "0 3vw",
      height: "70%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-end",
      paddingBottom: "2vw"
    },
    banner__title: {
      fontsize: "4vw",
      fontWeight: "800",
      maxWidth: "70rem",
      textShadow: "2px 2px 4px rgba(0,0,0,.25)"
    },
    banner__overview: {
      margin: "1vw 0",
      maxWidth: "40vw",
      fontSize: "1.5vw",
      fontWeight: "400",
      lineHeight: "1.4",
      textShadow: "2px 2px 4px rgba(0,0,0,.45)"
    },
    content: {
      padding: "0 3vw",
      paddingBottom: "2vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-end"
    },
    fadeBottom: {
      position: "absolute",
      top: "30vh",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 99,
      backgroundImage: "linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)"
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyleBanner);

/***/ }),

/***/ "./src/styles/components/StyleBannerBase.js":
/*!**************************************************!*\
  !*** ./src/styles/components/StyleBannerBase.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");

var useStylesBannerBase = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
  return {
    root: {
      position: "relative",
      height: "400px;",
      objetFit: "contain"
      /*centrada que cubra el total del contenedor*/
      ,
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff"
    },
    banner: {
      padding: "0",
      width: "auto",
      height: "37vw",
      color: "#fff",
      position: "relative"
    },
    banner__content: {
      padding: "0 3vw",
      height: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-end",
      paddingBottom: "2vw"
    },
    banner__title: {
      padding: "30",
      fontWeight: "800",
      maxWidth: "70rem",
      textShadow: "2px 2px 4px rgba(0,0,0,.25)",
      lineHeight: "1.8"
    },
    description: {
      wordWrap: "break-word"
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStylesBannerBase);

/***/ }),

/***/ "./src/styles/components/StyleError.js":
/*!*********************************************!*\
  !*** ./src/styles/components/StyleError.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");

var useStylesError = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
  return {
    bg: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      background: "#111",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    },
    content: {
      position: "absolute",
      top: 0,
      left: 0,
      padding: "3em 4% 0",
      height: "100%"
    },
    error: {
      borderLeft: "2px solid #e50914",
      padding: "0 40px",
      borderRight: "2px solid #e50914",
      color: "#fff"
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStylesError);

/***/ }),

/***/ "./src/styles/components/StyleFooter.js":
/*!**********************************************!*\
  !*** ./src/styles/components/StyleFooter.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");

var useStyleFooter = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
  return {
    root: {
      padding: "100px 0",
      background: "#111",
      borderBottom: "8px solid #222"
    },
    footer: {
      backgroundColor: "#111",
      paddingTop: "15rem",
      paddingBottom: "4rem",
      justifyContent: "center",
      display: "flex"
    },
    text: {
      color: "#111 !important",
      fontSize: "18px"
    },
    link__container: {
      textDecoration: "none",
      color: "red",
      transition: "all .3s"
    },
    copyright: {
      color: "#fff",
      textAlign: "center",
      lineHeight: "1.8",
      display: "flex",
      "&:hover": {
        borderBottom: "1px solid #fff"
      },
      "&:active,&:visited": {
        boxSizing: "inherit",
        padding: "2px 0",
        textDecoration: "none",
        color: "#fff"
      }
    },
    footer_row: {
      marginTop: "40",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      justifyContent: "center"
    },
    footer_wrapper: {
      maxWidth: "1000",
      margin: "auto",
      padding: "70px 56px"
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyleFooter);

/***/ }),

/***/ "./src/styles/components/StyleGenero.js":
/*!**********************************************!*\
  !*** ./src/styles/components/StyleGenero.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");

var useStyleGenero = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
  return {
    root: {
      color: "#fff",
      marginLeft: theme.spacing(4),
      height: "80vh"
    },
    contenedor: {
      background: "#111"
    },
    select: {
      "&:before": {
        borderColor: "#fff"
      },
      "&:after": {
        borderColor: "#fff"
      },
      "&:not(.Mui-disabled):hover::before": {
        borderColor: "white"
      },
      color: "#fff"
    },
    icon: {
      fill: "#fff"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      color: "#fff"
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      backgroundColor: "#b3b3b3"
    },
    colorBlanco: {
      color: "#fff"
    },
    genero: {
      //display: "flex",
      //: 30 /* distancia*/,
      color: "#fff",
      marginLeft: theme.spacing(4)
    },
    title: {
      color: "#fff"
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyleGenero);

/***/ }),

/***/ "./src/styles/components/StyleHeader.js":
/*!**********************************************!*\
  !*** ./src/styles/components/StyleHeader.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var useStyleHeader = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
  return {
    root: {
      top: 0,
      lef: 0,
      right: 0,
      position: "fixed",
      zIndex: 999,
      background: "linear-gradient(to bottom, rgba(22, 22, 22, 0.801), rgba(22, 22, 22, 0.493), transparent)",
      fontSize: "font-size: 1.4rem"
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "item"
    },
    logo: {
      width: "100px",
      cursor: "pointer"
    },
    scrolled: {
      //backgroundColor: "transparent",
      //backgroundColor: "#111",
      background: "linear-gradient(to bottom, rgb(0, 0, 0) 10%, rgb(8, 8, 8) 50%, rgb(17, 17, 17) 100%)",
      opacity: "0.9"
    },
    Lateral: {
      display: "flex",
      justifyContent: "center",
      alignItems: "item",
      gap: 10
      /* distancia*/

    },
    Izquierda: {
      display: "flex",
      "& button": {},
      "& button:hover": {
        color: "#b3b3b3"
      }
    },
    search: _defineProperty({
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: "100%"
    }, theme.breakpoints.up("sm"), {
      marginLeft: theme.spacing(1),
      width: "auto"
    }),
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit"
    },
    inputInput: _defineProperty({
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: "calc(1em + ".concat(theme.spacing(4), "px)"),
      transition: theme.transitions.create("width"),
      width: "100%"
    }, theme.breakpoints.up("sm"), {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    })
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyleHeader);

/***/ }),

/***/ "./src/styles/components/StyleHome.js":
/*!********************************************!*\
  !*** ./src/styles/components/StyleHome.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");

var useStyleHome = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
  return {
    root: {},
    rows: {
      zIndex: "50",
      position: "relative",
      left: "0",
      top: "0",
      width: "100%",
      overflow: "hidden"
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyleHome);

/***/ }),

/***/ "./src/styles/components/StyleLoader.js":
/*!**********************************************!*\
  !*** ./src/styles/components/StyleLoader.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");

var useStyleLoader = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
  return {
    loader: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    loader_text: {
      fontsize: "21",
      fontFamily: "'Source Sans Pro', sans-serif",
      color: "#65fafb;"
    },
    colorPrimary: {
      color: "#65fafb"
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyleLoader);

/***/ }),

/***/ "./src/styles/components/StyleMylist.js":
/*!**********************************************!*\
  !*** ./src/styles/components/StyleMylist.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");

var useStyleMyList = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
  return {
    root: {
      background: "#111",
      height: "100vw"
    },
    espacio: {
      height: "5vw",
      background: "#111"
    },
    row__title: {
      fontSize: "2vw",
      fontWeight: "500",
      textShadow: "2px 2px 4px rgba(0,0,0,.25)",
      paddingLeft: "3vw"
    },
    row: {
      padding: 0,
      position: "relative",
      margin: "1.5vw 0 2.5vw"
    },
    row__posters: {
      display: "flex",
      justifyContent: "flex-start",
      scrollBehavior: "smooth",
      overflowX: "scroll",
      overflowY: "hidden",
      padding: "1rem 0 1rem 3vw"
    },
    row__poster: {
      width: "auto",
      height: "10vw",
      objectFit: "contain",
      maxHeight: "15rem",
      minHeight: "8rem",
      transition: "transform 0.3s",
      borderRadius: "5px",
      marginRight: "1rem",
      cursor: "pointer",
      "&:hover": {
        transform: "scale(1.1)"
      }
    },
    info__overlay: {
      position: "fixed",
      content: "",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: "99",
      overflow: "scroll"
    },
    info__overlay__contentBox: {
      position: "absolute",
      top: "8rem",
      left: "50%",
      transform: "translateX(-50%)",
      width: "85rem",
      height: "auto",
      minHeight: "50rem",
      borderRadius: "1rem",
      overflow: "hidden",
      backgroundColor: "#111"
    },
    info__overlay__btnClose: {
      position: "absolute",
      top: 0,
      right: 0,
      border: "none",
      marginTop: "1.5rem",
      marginRight: "1.5rem",
      fontSize: "2rem",
      zIndex: "50",
      cursor: "pointer"
    },
    info__overlay__videoBox: {
      width: "100%",
      height: "100%",
      position: "relative"
    },
    info__overlay__youtube: {
      width: "100%",
      height: "47.8rem"
    },
    info__overlay__iconBox: {
      position: "absolute",
      bottom: "4vw",
      left: "3rem",
      display: "flex",
      alignItems: "center"
    },
    info__button: {
      backgroundColor: "rgba(100, 100, 100, 0.5)",
      color: "inherit",
      fontWeight: "500",
      fontFamily: "inherit",
      fontSize: "2rem",
      border: "none",
      padding: "1.5rem 3rem",
      minWidth: "10rem",
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      transition: "all 0.1s",
      cursor: "pointer"
    },
    info__button__play: {
      color: "#333",
      backgroundColor: "#fff",
      fontSize: "2rem"
    },
    icon__black__opacity: {
      color: "rgba(32, 32, 32, 0.6)"
    },
    info__overlay__text: {
      padding: "2rem 4rem 4rem",
      color: "#fff"
    },
    pagination: {
      position: "absolute",
      opacity: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "calc(100% - 2rem)",
      width: "3vw",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      transition: "opacity 0.2s",
      zIndex: "10",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.6)"
      }
    },
    pagination__right: {
      right: 0,
      top: "1rem"
    },
    pagination__left: {
      left: 0,
      top: "1rem"
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyleMyList);

/***/ }),

/***/ "./src/styles/components/StyleNotFound.js":
/*!************************************************!*\
  !*** ./src/styles/components/StyleNotFound.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _assets_images_404_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/404.jpg */ "./src/assets/images/404.jpg");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var useStylesNotFound = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"])(function (theme) {
  var _root, _logo;

  return {
    root: (_root = {
      color: "#fff",
      /// background: "#111",
      // width: "100vw",
      //height: "100vw",
      // textAlign:"center",
      // paddingTop:theme.spacing(6),
      fontSize: "0.5rem"
    }, _defineProperty(_root, theme.breakpoints.down("md"), {
      fontSize: "1.5rem"
    }), _defineProperty(_root, theme.breakpoints.down("sm"), {
      paddingTop: "16px"
    }), _defineProperty(_root, theme.breakpoints.down("xs"), {
      fontSize: "1.25rem"
    }), _root),
    logo: (_logo = {
      color: theme.palette.common.red,
      width: "max-content",
      fontSize: "2rem",
      paddingTop: "20px",
      fontWeight: "bold",
      position: "relative",
      zIndex: "100"
    }, _defineProperty(_logo, theme.breakpoints.down("md"), {
      fontSize: "1.5rem"
    }), _defineProperty(_logo, theme.breakpoints.down("sm"), {
      paddingTop: "16px"
    }), _defineProperty(_logo, theme.breakpoints.down("xs"), {
      fontSize: "1.25rem"
    }), _logo),
    bg: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      backgroundImage: "url(".concat(_assets_images_404_jpg__WEBPACK_IMPORTED_MODULE_0__["default"], ")"),
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    },
    content: {
      position: "absolute",
      top: 0,
      left: 0,
      padding: "3em 4% 0",
      height: "100%"
    },
    link: {
      boxSizing: "inherit",
      padding: "2px 0",
      textDecoration: "none",
      color: "inherit",
      "&:hover": {
        borderBottom: "1px solid #fff"
      }
    },
    error: {
      borderLeft: "6px solid #e50914",
      padding: "0 40px",
      borderRight: "6px solid #e50914"
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStylesNotFound);

/***/ }),

/***/ "./src/styles/components/StylePlans.js":
/*!*********************************************!*\
  !*** ./src/styles/components/StylePlans.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");

var useStylesPlans = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
  return {
    root: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& button": {
        marginBottom: theme.spacing(2)
      }
    },
    standard: {
      fontSize: "1.2rem"
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStylesPlans);

/***/ }),

/***/ "./src/styles/components/StyleProfile.js":
/*!***********************************************!*\
  !*** ./src/styles/components/StyleProfile.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var useStyleProfile = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
  return {
    root: {
      color: "#fff",
      width: "100vw",
      height: "100vw",
      background: "#111"
    },
    body: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "800px",
      background: "#111"
    },
    info: {
      width: "80%",
      display: "flex",
      "& img": _defineProperty({
        height: "100px"
      }, theme.breakpoints.down("sm"), {
        display: "none"
      })
    },
    details: {
      width: "100%",
      marginLeft: theme.spacing(3),
      "& h6": {
        backgroundColor: "#aaa",
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1),
        fontSize: "18px"
      }
    },
    plans: {
      width: "100%"
    },
    plansText: {
      borderBottom: "1px solid lightgray"
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyleProfile);

/***/ }),

/***/ "./src/styles/components/StyleRow.js":
/*!*******************************************!*\
  !*** ./src/styles/components/StyleRow.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");

var useStyleRow = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
  return {
    root: {
      background: "#111",
      height: "30vh"
    },
    row__title: {
      fontSize: "1.75rem",
      fontWeight: "400",
      textShadow: "2px 2px 4px rgba(0,0,0,.25)",
      paddingLeft: "3vw",
      color: "#fff",
      lineHeight: "1.2"
    },
    row: {
      padding: 0,
      position: "relative",
      margin: "1.5vw 0 2.5vw"
    },
    row__posters: {
      display: "flex",
      justifyContent: "flex-start",
      scrollBehavior: "smooth",
      overflowX: "scroll",
      overflowY: "hidden",
      padding: "1rem 0 1rem 3vw"
    },
    row__poster: {
      width: "auto",
      height: "9vw",
      objectFit: "contain",
      maxHeight: "15rem",
      minHeight: "8rem",
      transition: "transform 0.3s",
      borderRadius: "5px",
      marginRight: "1rem",
      cursor: "pointer"
    },
    info__overlay: {
      position: "fixed",
      content: "",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: "99",
      overflow: "scroll"
    },
    info__overlay__contentBox: {
      position: "absolute",
      top: "8rem",
      left: "50%",
      transform: "translateX(-50%)",
      width: "55rem",
      height: "auto",
      minHeight: "50rem",
      borderRadius: "1rem",
      overflow: "hidden",
      backgroundColor: "#111"
    },
    info__overlay__btnClose: {
      position: "absolute",
      top: 0,
      right: 0,
      border: "none",
      marginTop: "1.5rem",
      marginRight: "1.5rem",
      fontSize: "2rem",
      zIndex: "50",
      cursor: "pointer",
      color: "#fff"
    },
    info__overlay__videoBox: {
      width: "70%",
      height: "70%",
      position: "relative"
    },
    info__overlay__youtube: {
      width: "70%",
      height: "25.8rem"
    },
    info__overlay__iconBox: {
      position: "absolute",
      bottom: "4vw",
      left: "3rem",
      display: "flex",
      alignItems: "center"
    },
    info__button: {
      backgroundColor: "rgba(100, 100, 100, 0.5)",
      color: "inherit",
      fontWeight: "500",
      fontFamily: "inherit",
      fontSize: "2rem",
      border: "none",
      padding: "1.5rem 3rem",
      minWidth: "10rem",
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      transition: "all 0.1s",
      cursor: "pointer"
    },
    info__button__play: {
      color: "#333",
      backgroundColor: "#fff",
      fontSize: "2rem"
    },
    icon__black__opacity: {
      color: "rgba(32, 32, 32, 0.6)"
    },
    info__overlay__text: {
      padding: "2rem 4rem 4rem",
      color: "#fff"
    },
    pagination: {
      position: "absolute",
      opacity: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "calc(100% - 2rem)",
      width: "3vw",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      transition: "opacity 0.2s",
      zIndex: "10",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.6)"
      }
    },
    pagination__right: {
      right: 0,
      top: "1rem"
    },
    pagination__left: {
      left: 0,
      top: "1rem"
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyleRow);

/***/ }),

/***/ "./src/styles/components/StyleSearch.js":
/*!**********************************************!*\
  !*** ./src/styles/components/StyleSearch.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");

var useStylesSearch = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
  return {
    root: {},
    espacio: {
      height: "30vh"
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStylesSearch);

/***/ }),

/***/ "./src/styles/components/StyleSignUp.js":
/*!**********************************************!*\
  !*** ./src/styles/components/StyleSignUp.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");

var useStylesSignUp = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
  return {
    root: {
      maxWidth: "350px",
      width: "20rem",
      height: "25rem",
      background: "rgba(0,0,0,0.65)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      "& h5": {
        marginTop: theme.spacing(2),
        width: "70%"
      }
    },
    email: {
      marginBottom: theme.spacing(2)
      /*2 => 16px  */

    },
    password: {
      marginBottom: theme.spacing(4)
    },
    icon: {
      padding: "2",
      marginLeft: theme.spacing(4)
    },
    form: {
      width: "80%"
    },
    signupLink: {
      color: "#fff",
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline"
      }
    },
    errormessage: {
      color: "#e50914",
      fontSize: "16px",
      lineHeight: "1.2",
      marginBottom: "10px"
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStylesSignUp);

/***/ }),

/***/ "./src/styles/components/StylesApp.js":
/*!********************************************!*\
  !*** ./src/styles/components/StylesApp.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");

var useStylesApp = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStylesApp);

/***/ }),

/***/ "./src/styles/components/StylesLogin.js":
/*!**********************************************!*\
  !*** ./src/styles/components/StylesLogin.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");

var useStylesLogin = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
  return {
    root: {
      position: "relative",
      height: "100vh",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      objectFit: "contain"
    },
    session: {
      position: "fixed",
      zIndex: 15,
      right: 20,
      top: 20
    },
    image: {
      position: "fixed",
      top: 0,
      left: 20,
      width: "150px",
      cursor: "pointer"
    },
    info: {
      zIndex: 15,
      color: "#fff",
      textAlign: "center",
      "& h4": {
        fontWeight: 800
      },
      "& h5": {
        fontWeight: 400
      }
    },
    inputBlock: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "700px",
      marginTop: theme.spacing(4)
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStylesLogin);

/***/ }),

/***/ "./src/styles/components/StylesModalInfo.js":
/*!**************************************************!*\
  !*** ./src/styles/components/StylesModalInfo.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var useStyleModalInfo = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
  return {
    root: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "400px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    },
    inner: {
      backgroundImage: "linear-gradient(to top,rgba(0,0,0) 0,rgba(0,0,0,0) 40%,rgb(0 0 0 / 20%) 100%)",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "400px"
    },
    content: _defineProperty({
      height: "100%",
      position: "relative",
      zIndex: "10",
      paddingBottom: "15px"
    }, theme.breakpoints.down("sm"), {
      height: "90%"
    }),
    rate: {
      color: "#33eb91"
    },
    date: {
      color: "#a3a3a3"
    },
    play__btn: {
      background: "#fff",
      height: " 40px",
      "& .MuiButton-label": {
        color: "#111 !important"
      },
      "&.MuiButton-root:hover": {
        backgroundColor: "rgb(255 255 255 / 90%) !important"
      }
    },
    add__btn: {
      color: "#fff",
      height: " 40px",
      background: "rgb(133 133 133 / 60%)",
      "&.MuiButton-root:hover": {
        backgroundColor: "rgb(133 133 133 / 80%) !important"
      }
    },
    already_add__btn: {
      height: " 40px",
      background: "#26ff2fd4",
      "&.MuiButton-root:hover": {
        background: "#26ff2f80 !important"
      }
    },
    btn: {
      color: "#fff",
      cursor: "pointer",
      "&:hover": {
        color: "red"
      }
    },
    overview: {
      color: "#fff"
    },
    title: {
      color: "#fff",
      fontSize: 30
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyleModalInfo);

/***/ }),

/***/ "./src/styles/components/StylesMovieCard.js":
/*!**************************************************!*\
  !*** ./src/styles/components/StylesMovieCard.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var useStyleMovieCard = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["default"])(function (theme) {
  var _root, _poster__root;

  return {
    root: (_root = {
      height: "200px"
    }, _defineProperty(_root, theme.breakpoints.down("lg"), {
      height: "160px"
    }), _defineProperty(_root, theme.breakpoints.down("md"), {
      height: "155px"
    }), _defineProperty(_root, theme.breakpoints.down("sm"), {
      height: "140px"
    }), _defineProperty(_root, theme.breakpoints.down("xs"), {
      height: "120px"
    }), _defineProperty(_root, "position", "relative"), _defineProperty(_root, "&.MuiPaper-rounded", {
      borderRadius: "0"
    }), _defineProperty(_root, "& .MuiCardActions-root", {
      position: "absolute",
      bottom: 0,
      padding: "6px 4px 0",
      background: "#303030cf"
    }), _defineProperty(_root, "&.MuiSkeleton-root", {
      backgroundColor: "rgb(255 255 255 / 14%)"
    }), _root),
    poster__root: (_poster__root = {
      height: "400px"
    }, _defineProperty(_poster__root, theme.breakpoints.down("lg"), {
      height: "360px"
    }), _defineProperty(_poster__root, theme.breakpoints.down("md"), {
      height: "340x"
    }), _defineProperty(_poster__root, theme.breakpoints.down("sm"), {
      height: "320px"
    }), _defineProperty(_poster__root, theme.breakpoints.down("xs"), {
      height: "300px"
    }), _defineProperty(_poster__root, "position", "relative"), _defineProperty(_poster__root, "&.MuiPaper-rounded", {
      borderRadius: "0"
    }), _defineProperty(_poster__root, "& .MuiCardActions-root", {
      position: "absolute",
      bottom: 0,
      padding: "6px 4px 0",
      background: "#303030cf"
    }), _defineProperty(_poster__root, "&.MuiSkeleton-root", {
      backgroundColor: "rgb(255 255 255 / 14%)"
    }), _poster__root),
    img: {
      position: "absolute",
      cursor: "pointer",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      transition: "all 0.3s",
      background: "#303030cf",
      padding: "40px 20px 0",
      "&:hover": {
        transform: "scale3d(1.2, 1.2, 1.2)"
      }
    },
    actions: _defineProperty({}, theme.breakpoints.down("xs"), {
      display: "none"
    }),
    btn: {
      color: "#fff",
      cursor: "pointer",
      "&:hover": {
        color: "red"
      }
    },
    already_add__btn: {
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.success.main
      }
    },
    info__overlay: {
      position: "fixed",
      content: "",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: "99",
      overflow: "scroll"
    },
    info__overlay__contentBox: {
      position: "absolute",
      top: "8rem",
      left: "50%",
      transform: "translateX(-50%)",
      width: "55rem",
      height: "auto",
      minHeight: "50rem",
      borderRadius: "1rem",
      overflow: "hidden",
      backgroundColor: "#111"
    },
    info__overlay__btnClose: {
      position: "absolute",
      top: 10,
      right: 0,
      border: "none",
      marginTop: "1.5rem",
      marginRight: "1.5rem",
      fontSize: "2rem",
      zIndex: "50",
      cursor: "pointer",
      color: "#fff"
    },
    info__overlay__videoBox: {
      width: "70%",
      height: "70%",
      position: "relative"
    },
    info__overlay__youtube: {
      width: "70%",
      height: "25.8rem"
    },
    info__overlay__iconBox: {
      position: "absolute",
      bottom: "4vw",
      left: "3rem",
      display: "flex",
      alignItems: "center"
    },
    info__overlay__text: {
      padding: "2rem 4rem 4rem",
      color: "#fff"
    },
    info__overlay__youtube_icon: {
      padding: "2rem 4rem 4rem",
      color: "#fff"
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyleMovieCard);

/***/ }),

/***/ "./src/utils/Utilidades.js":
/*!*********************************!*\
  !*** ./src/utils/Utilidades.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "truncate": () => (/* binding */ truncate)
/* harmony export */ });
var truncate = function truncate(string, n) {
  return (string === null || string === void 0 ? void 0 : string.length) > n ? "".concat(string.substr(0, n - 1), " ...") : string;
};

/***/ }),

/***/ "./src/utils/constant.js":
/*!*******************************!*\
  !*** ./src/utils/constant.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_KEY": () => (/* binding */ API_KEY),
/* harmony export */   "base_url": () => (/* binding */ base_url),
/* harmony export */   "base_url_Img": () => (/* binding */ base_url_Img),
/* harmony export */   "genero_accion": () => (/* binding */ genero_accion)
/* harmony export */ });
var base_url = "https://api.themoviedb.org/3";
var base_url_Img = "https://image.tmdb.org/t/p/original/";
var genero_accion = "37";
var API_KEY = "a3f405c037b3877af91a264045307fa3";

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/styles/App.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/styles/App.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n*::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n\r\n.info {\r\n  display: none;\r\n  position: absolute;\r\n  bottom: 0;\r\n  /* transform: translateY(15%);*/\r\n\r\n  border: 1px solid red;\r\n  left: 3px;\r\n  width: 94%;\r\n  /* height: 100%;*/\r\n  padding: 0.6em;\r\n  /*pointer-events: none;*/\r\n  transition: all 0.4s ease 0.15s;\r\n  /* width: \"calc(100% - 6px)\";*/\r\n\r\n  z-index: 2;\r\n  border-radius: 5px;\r\n}\r\n.card {\r\n  border: 2px solid blue;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n.card:hover .info {\r\n  display: block;\r\n}\r\n.Poster__info--iconswrp {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n.Poster__info--icon {\r\n  display: inline-flex;\r\n  padding: 6px;\r\n  border-radius: 50%;\r\n  font-size: 12px;\r\n  cursor: pointer;\r\n  margin: 0 5px;\r\n  margin-bottom: 0.6em;\r\n  background: transparent;\r\n  color: #fff;\r\n  border: 1px solid #fff;\r\n  transition: all 0.3s ease-out;\r\n  outline: none;\r\n}\r\n\r\n/*MODAL*/\r\n\r\n.modal {\r\n  position: fixed;\r\n  z-index: 99999;\r\n  width: 100%;\r\n  top:  0; \r\n  left: 0; \r\n  color: #fff;\r\n\r\n  opacity: 0;\r\n  box-shadow: 0 1.5rem 4rem rgba(#171818, .15);\r\n  height: 40rem;\r\n\r\n}\r\n.backdrop {\r\n  width: 100%; \r\n  height: 100%;\r\n  position: fixed; \r\n  z-index: 100; \r\n  left: 0; \r\n  top: 0; \r\n  background-color: rgba(#111111, .7);\r\n  transition: all .5s;\r\n}\r\n.show {\r\n  transition: .5s .3s ease-out;\r\n  top: 25%;\r\n  left: 0;\r\n  visibility: visible;\r\n  opacity: 1;\r\n\r\n}\r\n\r\n.backdrop {\r\n  width: 100%; \r\n  height: 100%;\r\n  position: fixed; \r\n  z-index: 100; \r\n  left: 0; \r\n  top: 0; \r\n  background-color: rgba(#111111, .7);\r\n  transition: all .5s;\r\n}\r\n.hide {\r\n  visibility: hidden;\r\n\r\n}\r\n.modal__rating {\r\n  font-size: 2rem;\r\n  color: #5cdf5c;\r\n}\r\n.modal__container {\r\n  background: linear-gradient(90deg, #000 50%, transparent);\r\n  width: 70%;\r\n  padding-top: 3rem;\r\n  height: 100%;\r\n  padding-left: 5rem;\r\n}\r\n\r\n.modal__title {\r\n  font-size: 4rem;\r\n}\r\n\r\n.modal__rating {\r\n  font-size: 2rem;\r\n  color: #5cdf5c;\r\n}\r\n\r\n.modal__info {\r\n  padding-top: 1.6rem;\r\n  font-size: 2rem;\r\n\r\n  \r\n}\r\n\r\n.modal__episode {\r\n  padding-top: .5rem;\r\n  font-size: 2rem;\r\n}\r\n\r\n.modal__overview {\r\n     color: #7a7a7a;\r\n    padding-top: 2rem;\r\n    font-size: 2rem;\r\n    hyphens: auto;\r\n    width: 60%;\r\n    line-height: 1.2;\r\n}\r\n\r\n.modal__btn {\r\n  text-transform: uppercase;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  color: #fff;\r\n  border: .5px solid rgb(122, 122, 122);\r\n  border-radius: 2px;\r\n  font-size: 1.5rem;\r\n  margin-top: 2rem;\r\n  margin-right: 1rem;\r\n  padding: 1rem 2rem 1rem 2rem;\r\n  transition: all .2s;\r\n}\r\n.modal__btn:hover{\r\n  transform: scale(1.09); \r\n}\r\n.modal_icon {\r\n  fill: #fff;\r\n  padding-right: 1rem;\r\n  height: 1.4rem;\r\n  width: 1.4rem;\r\n}\r\n.modal__btn {\r\n  text-transform: uppercase;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  color: #fff;\r\n  border: .5px solid rgb(122, 122, 122);\r\n  border-radius: 2px;\r\n  font-size: 1.5rem;\r\n  margin-top: 2rem;\r\n  margin-right: 1rem;\r\n  padding: 1rem 2rem 1rem 2rem;\r\n  transition: all .2s;\r\n\r\n\r\n}\r\n.modal__btn_red {\r\n  background-color: #e21221;\r\n  border: none;\r\n}\r\n.modal__btn_icon{\r\n  fill: #fff;\r\n  padding-right: 1rem;\r\n  height: 1.4rem;\r\n  width: 1.9rem;\r\n  \r\n}\r\n", "",{"version":3,"sources":["webpack://./src/components/styles/App.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,aAAa;AACf;;;AAGA;EACE,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,+BAA+B;;EAE/B,qBAAqB;EACrB,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,cAAc;EACd,wBAAwB;EACxB,+BAA+B;EAC/B,8BAA8B;;EAE9B,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,qBAAqB;EACrB,kBAAkB;AACpB;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;AAC7B;AACA;EACE,oBAAoB;EACpB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,aAAa;EACb,oBAAoB;EACpB,uBAAuB;EACvB,WAAW;EACX,sBAAsB;EACtB,6BAA6B;EAC7B,aAAa;AACf;;AAEA,QAAQ;;AAER;EACE,eAAe;EACf,cAAc;EACd,WAAW;EACX,OAAO;EACP,OAAO;EACP,WAAW;;EAEX,UAAU;EACV,4CAA4C;EAC5C,aAAa;;AAEf;AACA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,OAAO;EACP,MAAM;EACN,mCAAmC;EACnC,mBAAmB;AACrB;AACA;EACE,4BAA4B;EAC5B,QAAQ;EACR,OAAO;EACP,mBAAmB;EACnB,UAAU;;AAEZ;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,OAAO;EACP,MAAM;EACN,mCAAmC;EACnC,mBAAmB;AACrB;AACA;EACE,kBAAkB;;AAEpB;AACA;EACE,eAAe;EACf,cAAc;AAChB;AACA;EACE,yDAAyD;EACzD,UAAU;EACV,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,eAAe;;;AAGjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;KACK,cAAc;IACf,iBAAiB;IACjB,eAAe;IACf,aAAa;IACb,UAAU;IACV,gBAAgB;AACpB;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,eAAe;EACf,6BAA6B;EAC7B,WAAW;EACX,qCAAqC;EACrC,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,4BAA4B;EAC5B,mBAAmB;AACrB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,UAAU;EACV,mBAAmB;EACnB,cAAc;EACd,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,eAAe;EACf,6BAA6B;EAC7B,WAAW;EACX,qCAAqC;EACrC,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,4BAA4B;EAC5B,mBAAmB;;;AAGrB;AACA;EACE,yBAAyB;EACzB,YAAY;AACd;AACA;EACE,UAAU;EACV,mBAAmB;EACnB,cAAc;EACd,aAAa;;AAEf","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n*::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n\r\n.info {\r\n  display: none;\r\n  position: absolute;\r\n  bottom: 0;\r\n  /* transform: translateY(15%);*/\r\n\r\n  border: 1px solid red;\r\n  left: 3px;\r\n  width: 94%;\r\n  /* height: 100%;*/\r\n  padding: 0.6em;\r\n  /*pointer-events: none;*/\r\n  transition: all 0.4s ease 0.15s;\r\n  /* width: \"calc(100% - 6px)\";*/\r\n\r\n  z-index: 2;\r\n  border-radius: 5px;\r\n}\r\n.card {\r\n  border: 2px solid blue;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n.card:hover .info {\r\n  display: block;\r\n}\r\n.Poster__info--iconswrp {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n.Poster__info--icon {\r\n  display: inline-flex;\r\n  padding: 6px;\r\n  border-radius: 50%;\r\n  font-size: 12px;\r\n  cursor: pointer;\r\n  margin: 0 5px;\r\n  margin-bottom: 0.6em;\r\n  background: transparent;\r\n  color: #fff;\r\n  border: 1px solid #fff;\r\n  transition: all 0.3s ease-out;\r\n  outline: none;\r\n}\r\n\r\n/*MODAL*/\r\n\r\n.modal {\r\n  position: fixed;\r\n  z-index: 99999;\r\n  width: 100%;\r\n  top:  0; \r\n  left: 0; \r\n  color: #fff;\r\n\r\n  opacity: 0;\r\n  box-shadow: 0 1.5rem 4rem rgba(#171818, .15);\r\n  height: 40rem;\r\n\r\n}\r\n.backdrop {\r\n  width: 100%; \r\n  height: 100%;\r\n  position: fixed; \r\n  z-index: 100; \r\n  left: 0; \r\n  top: 0; \r\n  background-color: rgba(#111111, .7);\r\n  transition: all .5s;\r\n}\r\n.show {\r\n  transition: .5s .3s ease-out;\r\n  top: 25%;\r\n  left: 0;\r\n  visibility: visible;\r\n  opacity: 1;\r\n\r\n}\r\n\r\n.backdrop {\r\n  width: 100%; \r\n  height: 100%;\r\n  position: fixed; \r\n  z-index: 100; \r\n  left: 0; \r\n  top: 0; \r\n  background-color: rgba(#111111, .7);\r\n  transition: all .5s;\r\n}\r\n.hide {\r\n  visibility: hidden;\r\n\r\n}\r\n.modal__rating {\r\n  font-size: 2rem;\r\n  color: #5cdf5c;\r\n}\r\n.modal__container {\r\n  background: linear-gradient(90deg, #000 50%, transparent);\r\n  width: 70%;\r\n  padding-top: 3rem;\r\n  height: 100%;\r\n  padding-left: 5rem;\r\n}\r\n\r\n.modal__title {\r\n  font-size: 4rem;\r\n}\r\n\r\n.modal__rating {\r\n  font-size: 2rem;\r\n  color: #5cdf5c;\r\n}\r\n\r\n.modal__info {\r\n  padding-top: 1.6rem;\r\n  font-size: 2rem;\r\n\r\n  \r\n}\r\n\r\n.modal__episode {\r\n  padding-top: .5rem;\r\n  font-size: 2rem;\r\n}\r\n\r\n.modal__overview {\r\n     color: #7a7a7a;\r\n    padding-top: 2rem;\r\n    font-size: 2rem;\r\n    hyphens: auto;\r\n    width: 60%;\r\n    line-height: 1.2;\r\n}\r\n\r\n.modal__btn {\r\n  text-transform: uppercase;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  color: #fff;\r\n  border: .5px solid rgb(122, 122, 122);\r\n  border-radius: 2px;\r\n  font-size: 1.5rem;\r\n  margin-top: 2rem;\r\n  margin-right: 1rem;\r\n  padding: 1rem 2rem 1rem 2rem;\r\n  transition: all .2s;\r\n}\r\n.modal__btn:hover{\r\n  transform: scale(1.09); \r\n}\r\n.modal_icon {\r\n  fill: #fff;\r\n  padding-right: 1rem;\r\n  height: 1.4rem;\r\n  width: 1.4rem;\r\n}\r\n.modal__btn {\r\n  text-transform: uppercase;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  color: #fff;\r\n  border: .5px solid rgb(122, 122, 122);\r\n  border-radius: 2px;\r\n  font-size: 1.5rem;\r\n  margin-top: 2rem;\r\n  margin-right: 1rem;\r\n  padding: 1rem 2rem 1rem 2rem;\r\n  transition: all .2s;\r\n\r\n\r\n}\r\n.modal__btn_red {\r\n  background-color: #e21221;\r\n  border: none;\r\n}\r\n.modal__btn_icon{\r\n  fill: #fff;\r\n  padding-right: 1rem;\r\n  height: 1.4rem;\r\n  width: 1.9rem;\r\n  \r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/styles/row.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/styles/row.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".rows {\r\n    z-index: 50;\r\n    position: relative;\r\n    left: 0;\r\n    top: -12rem;\r\n    width: 100%;\r\n     overflow-x: hidden; \r\n}\r\n \r\n\r\n.row {\r\n    padding: 0;\r\n    position: relative;\r\n    margin: 1.5vw 0 2.5vw;\r\n}\r\n\r\n.row__title {\r\n    font-size: 2vw;\r\n    font-weight: 500;\r\n    text-shadow: 2px 2px 4px rgba(0,0,0,.25);\r\n    padding-left: 3vw;\r\n}\r\n\r\n.row__posters {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    scroll-behavior: smooth;\r\n    overflow-x: scroll;\r\n    overflow-y: hidden;\r\n    padding: 1rem 0 1rem 3vw;\r\n}\r\n\r\n\r\n\r\n.pagination {\r\n    position: absolute;\r\n    opacity: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: calc(100% - 2rem);\r\n    width: 3vw;\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n    transition: opacity 0.2s;\r\n    z-index: 10;\r\n    cursor: pointer;\r\n}\r\n\r\n.pagination:hover {\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.pagination i {\r\n  /* pointer-events: none;\r\n    font-size: 1.3vw;*/\r\n}\r\n\r\n.pagination--left {\r\n    left: 0;\r\n    top: 1rem;\r\n}\r\n\r\n\r\n.pagination--right {\r\n    right: 0;\r\n    top: 1rem;\r\n}\r\n\r\n\r\n.row__posters:hover > .pagination {\r\n    opacity: 1;\r\n}\r\n\r\n.row__poster {\r\n    width: auto;\r\n    height: 10vw;\r\n    object-fit: contain;\r\n    max-height: 15rem;\r\n    min-height: 8rem;\r\n    transition: transform 0.3s;\r\n    border-radius: 5px;\r\n    margin-right: 1rem;\r\n    cursor: pointer;\r\n    transition: all 0.2s;\r\n}\r\n\r\n\r\n.row__poster:hover {\r\n    filter: brightness(1.1);\r\n    transform: scale(1.1);\r\n}\r\n\r\n.info__overlay {\r\n    position: fixed;\r\n    content: \"\";\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    z-index: 99;\r\n    overflow: scroll;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.error {\r\n    position: fixed;\r\n    padding: 2rem 3rem 2.5rem;\r\n    top: 10rem;\r\n    left: 50%;\r\n    z-index: 999;\r\n    transform: translateX(-50%);\r\n    border: 1px solid rgba(80, 80, 80, 0.2);\r\n    border-top: 2px solid #fff;\r\n    background-color: rgba(10, 10, 10, 0.9);\r\n}\r\n\r\n.error__heading {\r\n    font-family: inherit;\r\n    font-size: 3rem;\r\n    font-weight: 500;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.error__description {\r\n    font-family: inherit;\r\n    font-size: 2rem;\r\n    font-weight: 300;\r\n}\r\n\r\n.fade-in {\r\n    animation: fadeIn ease 0.5s;\r\n}\r\n\r\n.fade-out {\r\n    animation: fadeOut ease 0.5s;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    0% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n\r\n@keyframes fadeOut {\r\n    0% {opacity: 1;}\r\n    100% {opacity: 0;}\r\n}\r\n\r\n@media (max-width: 900px) {\r\n    .nav__list {\r\n        display: none;\r\n    }\r\n    .nav__browse {\r\n        display: flex;\r\n    }\r\n\r\n    .info__overlay--contentBox {\r\n        width: 95%;\r\n        top: 8rem;\r\n        transform: translateX(-50%);\r\n    }\r\n\r\n    .info__overlay--youtube {\r\n        height: 45vw;\r\n    }\r\n\r\n    .info__overlay--text {\r\n        padding: 2vw 4vw 4vw;\r\n    }\r\n\r\n    .info__overlay--text h2 {\r\n        margin-bottom: 3vw;\r\n    }\r\n}\r\n\r\n@media (max-width: 775px) {\r\n    .rows {\r\n        top: -7rem;\r\n    }\r\n\r\n    .info__button {\r\n        padding: 1rem 2rem;\r\n    }\r\n\r\n    .row__poster {\r\n        height: 15vw;\r\n    }\r\n\r\n    .row__title {\r\n        font-size: 1.8rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 450px) {\r\n    .info__overlay--text p {\r\n        font-size: 2rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 350px) {\r\n    .rows {\r\n        top: -5rem;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/components/styles/row.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,kBAAkB;IAClB,OAAO;IACP,WAAW;IACX,WAAW;KACV,kBAAkB;AACvB;;;AAGA;IACI,UAAU;IACV,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,wCAAwC;IACxC,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;IAClB,wBAAwB;AAC5B;;;;AAIA;IACI,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,yBAAyB;IACzB,UAAU;IACV,oCAAoC;IACpC,wBAAwB;IACxB,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;EACE;sBACoB;AACtB;;AAEA;IACI,OAAO;IACP,SAAS;AACb;;;AAGA;IACI,QAAQ;IACR,SAAS;AACb;;;AAGA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,0BAA0B;IAC1B,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,oBAAoB;AACxB;;;AAGA;IACI,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,WAAW;IACX,gBAAgB;AACpB;;;;;;;;AAQA;IACI,eAAe;IACf,yBAAyB;IACzB,UAAU;IACV,SAAS;IACT,YAAY;IACZ,2BAA2B;IAC3B,uCAAuC;IACvC,0BAA0B;IAC1B,uCAAuC;AAC3C;;AAEA;IACI,oBAAoB;IACpB,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,IAAI,UAAU,CAAC;IACf,MAAM,UAAU,CAAC;AACrB;;AAEA;IACI,IAAI,UAAU,CAAC;IACf,MAAM,UAAU,CAAC;AACrB;;AAEA;IACI;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;;IAEA;QACI,UAAU;QACV,SAAS;QACT,2BAA2B;IAC/B;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,oBAAoB;IACxB;;IAEA;QACI,kBAAkB;IACtB;AACJ;;AAEA;IACI;QACI,UAAU;IACd;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,UAAU;IACd;AACJ","sourcesContent":[".rows {\r\n    z-index: 50;\r\n    position: relative;\r\n    left: 0;\r\n    top: -12rem;\r\n    width: 100%;\r\n     overflow-x: hidden; \r\n}\r\n \r\n\r\n.row {\r\n    padding: 0;\r\n    position: relative;\r\n    margin: 1.5vw 0 2.5vw;\r\n}\r\n\r\n.row__title {\r\n    font-size: 2vw;\r\n    font-weight: 500;\r\n    text-shadow: 2px 2px 4px rgba(0,0,0,.25);\r\n    padding-left: 3vw;\r\n}\r\n\r\n.row__posters {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    scroll-behavior: smooth;\r\n    overflow-x: scroll;\r\n    overflow-y: hidden;\r\n    padding: 1rem 0 1rem 3vw;\r\n}\r\n\r\n\r\n\r\n.pagination {\r\n    position: absolute;\r\n    opacity: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: calc(100% - 2rem);\r\n    width: 3vw;\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n    transition: opacity 0.2s;\r\n    z-index: 10;\r\n    cursor: pointer;\r\n}\r\n\r\n.pagination:hover {\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.pagination i {\r\n  /* pointer-events: none;\r\n    font-size: 1.3vw;*/\r\n}\r\n\r\n.pagination--left {\r\n    left: 0;\r\n    top: 1rem;\r\n}\r\n\r\n\r\n.pagination--right {\r\n    right: 0;\r\n    top: 1rem;\r\n}\r\n\r\n\r\n.row__posters:hover > .pagination {\r\n    opacity: 1;\r\n}\r\n\r\n.row__poster {\r\n    width: auto;\r\n    height: 10vw;\r\n    object-fit: contain;\r\n    max-height: 15rem;\r\n    min-height: 8rem;\r\n    transition: transform 0.3s;\r\n    border-radius: 5px;\r\n    margin-right: 1rem;\r\n    cursor: pointer;\r\n    transition: all 0.2s;\r\n}\r\n\r\n\r\n.row__poster:hover {\r\n    filter: brightness(1.1);\r\n    transform: scale(1.1);\r\n}\r\n\r\n.info__overlay {\r\n    position: fixed;\r\n    content: \"\";\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    z-index: 99;\r\n    overflow: scroll;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.error {\r\n    position: fixed;\r\n    padding: 2rem 3rem 2.5rem;\r\n    top: 10rem;\r\n    left: 50%;\r\n    z-index: 999;\r\n    transform: translateX(-50%);\r\n    border: 1px solid rgba(80, 80, 80, 0.2);\r\n    border-top: 2px solid #fff;\r\n    background-color: rgba(10, 10, 10, 0.9);\r\n}\r\n\r\n.error__heading {\r\n    font-family: inherit;\r\n    font-size: 3rem;\r\n    font-weight: 500;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.error__description {\r\n    font-family: inherit;\r\n    font-size: 2rem;\r\n    font-weight: 300;\r\n}\r\n\r\n.fade-in {\r\n    animation: fadeIn ease 0.5s;\r\n}\r\n\r\n.fade-out {\r\n    animation: fadeOut ease 0.5s;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    0% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n\r\n@keyframes fadeOut {\r\n    0% {opacity: 1;}\r\n    100% {opacity: 0;}\r\n}\r\n\r\n@media (max-width: 900px) {\r\n    .nav__list {\r\n        display: none;\r\n    }\r\n    .nav__browse {\r\n        display: flex;\r\n    }\r\n\r\n    .info__overlay--contentBox {\r\n        width: 95%;\r\n        top: 8rem;\r\n        transform: translateX(-50%);\r\n    }\r\n\r\n    .info__overlay--youtube {\r\n        height: 45vw;\r\n    }\r\n\r\n    .info__overlay--text {\r\n        padding: 2vw 4vw 4vw;\r\n    }\r\n\r\n    .info__overlay--text h2 {\r\n        margin-bottom: 3vw;\r\n    }\r\n}\r\n\r\n@media (max-width: 775px) {\r\n    .rows {\r\n        top: -7rem;\r\n    }\r\n\r\n    .info__button {\r\n        padding: 1rem 2rem;\r\n    }\r\n\r\n    .row__poster {\r\n        height: 15vw;\r\n    }\r\n\r\n    .row__title {\r\n        font-size: 1.8rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 450px) {\r\n    .info__overlay--text p {\r\n        font-size: 2rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 350px) {\r\n    .rows {\r\n        top: -5rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/images/404.jpg":
/*!***********************************!*\
  !*** ./src/assets/images/404.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "88ca082f9393f426cb9f0eec5098f8c6.jpg");

/***/ }),

/***/ "./src/assets/images/HeroBanner.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/HeroBanner.jpg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b79a7bcf909f9ac4cb070245716a4d11.jpg");

/***/ }),

/***/ "./src/assets/images/netflix-logo.png":
/*!********************************************!*\
  !*** ./src/assets/images/netflix-logo.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "774e8c1632ac9433608b40e3f6a21558.png");

/***/ }),

/***/ "./src/assets/images/netflixavatar.png":
/*!*********************************************!*\
  !*** ./src/assets/images/netflixavatar.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "6cd63fc3d72f015a2ebf7cec10624f87.png");

/***/ }),

/***/ "./src/assets/images/netflixavatar_red.png":
/*!*************************************************!*\
  !*** ./src/assets/images/netflixavatar_red.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "e3ba3d553ecf34615db2dd4563eb7fda.png");

/***/ }),

/***/ "./src/components/styles/App.css":
/*!***************************************!*\
  !*** ./src/components/styles/App.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./App.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/styles/App.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/styles/row.css":
/*!***************************************!*\
  !*** ./src/components/styles/row.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_row_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./row.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/styles/row.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_row_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_row_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_row_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_row_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_material-ui_core_esm_AppBar_AppBar_js-node_modules_material-ui_core_esm_-50f893"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map