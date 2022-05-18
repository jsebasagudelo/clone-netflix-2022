"use strict";
(self["webpackChunkclone_netflix"] = self["webpackChunkclone_netflix"] || []).push([[100],{

/***/ 2509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/***/ 7314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "https://api.themoviedb.org/3"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ }),

/***/ 6100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Genero)
});

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/FormControl.js
var FormControl = __webpack_require__(4436);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(6479);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Select/Select.js + 14 modules
var Select = __webpack_require__(5181);
// EXTERNAL MODULE: ./src/Api/index.js
var Api = __webpack_require__(7314);
// EXTERNAL MODULE: ./src/Api/Requests.js
var Requests = __webpack_require__(2509);
// EXTERNAL MODULE: ./src/utils/constant.js
var constant = __webpack_require__(1294);
// EXTERNAL MODULE: ./src/components/Row.jsx + 1 modules
var Row = __webpack_require__(1300);
// EXTERNAL MODULE: ./src/containers/Layout.jsx + 15 modules
var Layout = __webpack_require__(4025);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
;// CONCATENATED MODULE: ./src/styles/components/StyleGenero.js

var useStyleGenero = (0,makeStyles/* default */.Z)(function (theme) {
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
/* harmony default export */ const StyleGenero = (useStyleGenero);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
;// CONCATENATED MODULE: ./src/custom-hooks/useGetBanner.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var useGetBanner = function useGetBanner() {
  var _useState = (0,react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = (0,react.useState)({}),
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
              return Api/* default.get */.Z.get(Requests/* default.fetchNetflixOriginals */.Z.fetchNetflixOriginals);

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

/* harmony default export */ const custom_hooks_useGetBanner = (useGetBanner);
// EXTERNAL MODULE: ./src/utils/Utilidades.js
var Utilidades = __webpack_require__(9019);
;// CONCATENATED MODULE: ./src/styles/components/StyleBannerBase.js

var useStylesBannerBase = (0,makeStyles/* default */.Z)(function (theme) {
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
/* harmony default export */ const StyleBannerBase = (useStylesBannerBase);
;// CONCATENATED MODULE: ./src/components/base/BannerBase.jsx






var BannerBase = function BannerBase(_ref) {
  var children = _ref.children;
  var classes = StyleBannerBase();

  var _useGetBanner = custom_hooks_useGetBanner(),
      movieBanner = _useGetBanner.movieBanner,
      getBanner = _useGetBanner.getBanner;

  (0,react.useEffect)(function () {
    getBanner();
  }, []);
  return /*#__PURE__*/react.createElement("header", {
    className: classes.banner,
    style: {
      backgroundImage: "url(\"https://image.tmdb.org/t/p/original".concat(movieBanner === null || movieBanner === void 0 ? void 0 : movieBanner.backdrop_path, "\")"),
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.banner__content
  }, children, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "h2",
    component: "h1",
    className: classes.banner__title
  }, (movieBanner === null || movieBanner === void 0 ? void 0 : movieBanner.title) || (movieBanner === null || movieBanner === void 0 ? void 0 : movieBanner.name) || (movieBanner === null || movieBanner === void 0 ? void 0 : movieBanner.original_name))), /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "h6",
    className: classes.description
  }, (0,Utilidades/* truncate */.$)(movieBanner === null || movieBanner === void 0 ? void 0 : movieBanner.overview, 160), children));
};

/* harmony default export */ const base_BannerBase = (BannerBase);
;// CONCATENATED MODULE: ./src/pages/Genero.jsx
function Genero_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Genero_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Genero_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Genero_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Genero_slicedToArray(arr, i) { return Genero_arrayWithHoles(arr) || Genero_iterableToArrayLimit(arr, i) || Genero_unsupportedIterableToArray(arr, i) || Genero_nonIterableRest(); }

function Genero_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Genero_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Genero_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Genero_arrayLikeToArray(o, minLen); }

function Genero_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Genero_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Genero_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Genero = function Genero() {
  var classes = StyleGenero();

  var _useState = (0,react.useState)([]),
      _useState2 = Genero_slicedToArray(_useState, 2),
      generlist = _useState2[0],
      setGenerlist = _useState2[1];

  var _useState3 = (0,react.useState)(0),
      _useState4 = Genero_slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = (0,react.useState)({}),
      _useState6 = Genero_slicedToArray(_useState5, 2),
      movie = _useState6[0],
      setMovie = _useState6[1];

  (0,react.useEffect)(function () {
    var fetchGenres = /*#__PURE__*/function () {
      var _ref = Genero_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var request;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Api/* default.get */.Z.get(Requests/* default.fetchGenders */.Z.fetchGenders);

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
      id = constant/* genero_accion */.ef;
    }

    setValue(id);
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Layout/* default */.Z, null, /*#__PURE__*/react.createElement("div", {
    className: classes.contenedor
  }, /*#__PURE__*/react.createElement(base_BannerBase, null), /*#__PURE__*/react.createElement("div", {
    className: classes.genero
  }, /*#__PURE__*/react.createElement(FormControl/* default */.Z, {
    sx: {
      m: 1,
      minWidth: 80
    }
  }, /*#__PURE__*/react.createElement(Select/* default */.Z, {
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
    return /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
      key: genero.id,
      value: genero.id
    }, genero.name);
  }), /*#__PURE__*/react.createElement(MenuItem/* default */.Z, {
    value: "0"
  }, "Generos")))), /*#__PURE__*/react.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react.createElement(Row["default"], {
    id: "1",
    titleMovie: "",
    fetchUrl: Requests/* default.fetchActionMovies */.Z.fetchActionMovies,
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
/* harmony default export */ const pages_Genero = (Genero);
Genero.displayName = "Row Movie Generos";

/***/ }),

/***/ 9019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ truncate)
/* harmony export */ });
var truncate = function truncate(string, n) {
  return (string === null || string === void 0 ? void 0 : string.length) > n ? "".concat(string.substr(0, n - 1), " ...") : string;
};

/***/ })

}]);
//# sourceMappingURL=100.chunk.js.map