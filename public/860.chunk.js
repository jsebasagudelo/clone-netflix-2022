"use strict";
(self["webpackChunkclone_netflix"] = self["webpackChunkclone_netflix"] || []).push([[860],{

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

/***/ 8860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Home)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: ./src/utils/Utilidades.js
var Utilidades = __webpack_require__(9019);
// EXTERNAL MODULE: ./src/Api/index.js
var Api = __webpack_require__(7314);
// EXTERNAL MODULE: ./src/Api/Requests.js
var Requests = __webpack_require__(2509);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
;// CONCATENATED MODULE: ./src/styles/components/StyleBanner.js

var useStyleBanner = (0,makeStyles/* default */.Z)(function (theme) {
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
/* harmony default export */ const StyleBanner = (useStyleBanner);
;// CONCATENATED MODULE: ./src/components/Banner.jsx
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Banner = function Banner() {
  var classes = StyleBanner();

  var _useState = (0,react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      movie = _useState2[0],
      setMovie = _useState2[1];

  (0,react.useEffect)(function () {
    var fetchDataAxios = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var request, random;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Api/* default.get */.Z.get(Requests/* default.fetchNetflixOriginals */.Z.fetchNetflixOriginals);

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
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("header", {
    className: classes.banner,
    style: {
      backgroundImage: "url(\"https://image.tmdb.org/t/p/original".concat(movie === null || movie === void 0 ? void 0 : movie.backdrop_path, "\")"),
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.banner__content
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "h2",
    component: "h1",
    className: classes.banner__title
  }, (movie === null || movie === void 0 ? void 0 : movie.title) || (movie === null || movie === void 0 ? void 0 : movie.name) || (movie === null || movie === void 0 ? void 0 : movie.original_name)), /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "h6",
    className: classes.banner__overview,
    style: {
      wordWrap: "break-word"
    }
  }, (0,Utilidades/* truncate */.$)(movie === null || movie === void 0 ? void 0 : movie.overview, 160)))));
};

/* harmony default export */ const components_Banner = (Banner);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(5477);
;// CONCATENATED MODULE: ./src/styles/components/StyleLoader.js

var useStyleLoader = (0,makeStyles/* default */.Z)(function (theme) {
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
/* harmony default export */ const StyleLoader = (useStyleLoader);
;// CONCATENATED MODULE: ./src/components/Loader.jsx




var Loader = function Loader() {
  var classes = StyleLoader();
  return /*#__PURE__*/react.createElement("div", {
    className: classes.loader
  }, /*#__PURE__*/react.createElement(CircularProgress/* default */.Z, {
    classes: {
      colorPrimary: classes.colorPrimary
    }
  }), /*#__PURE__*/react.createElement("span", {
    className: classes.loader_text
  }, "Loading..."));
};

/* harmony default export */ const components_Loader = (Loader);
// EXTERNAL MODULE: ./src/containers/Layout.jsx + 15 modules
var Layout = __webpack_require__(4025);
;// CONCATENATED MODULE: ./src/styles/components/StyleHome.js

var useStyleHome = (0,makeStyles/* default */.Z)(function (theme) {
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
/* harmony default export */ const StyleHome = (useStyleHome);
;// CONCATENATED MODULE: ./src/pages/Home.jsx






var Row = /*#__PURE__*/(0,react.lazy)(function () {
  return Promise.all(/* import() */[__webpack_require__.e(224), __webpack_require__.e(300), __webpack_require__.e(166)]).then(__webpack_require__.bind(__webpack_require__, 1300));
}); // design pattern: Stateless

var Home = function Home() {
  var classes = StyleHome();
  return /*#__PURE__*/react.createElement(Layout/* default */.Z, null, /*#__PURE__*/react.createElement(components_Banner, null), /*#__PURE__*/react.createElement(react.Suspense, {
    fallback: /*#__PURE__*/react.createElement(components_Loader, null)
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.rows
  }, /*#__PURE__*/react.createElement(Row, {
    id: "1",
    titleMovie: "Netflix Original",
    fetchUrl: Requests/* default.fetchTopRated */.Z.fetchTopRated
  }), /*#__PURE__*/react.createElement(Row, {
    id: "2",
    titleMovie: "Action Movie",
    fetchUrl: Requests/* default.fetchActionMovies */.Z.fetchActionMovies
  }), /*#__PURE__*/react.createElement(Row, {
    id: "3",
    titleMovie: "Comedy Movie",
    fetchUrl: Requests/* default.fetchComedyMovies */.Z.fetchComedyMovies
  }), /*#__PURE__*/react.createElement(Row, {
    id: "4",
    titleMovie: "Documentaries",
    fetchUrl: Requests/* default.fetchDocumentaries */.Z.fetchDocumentaries
  }), /*#__PURE__*/react.createElement(Row, {
    id: "5",
    titleMovie: "Horror Movies",
    fetchUrl: Requests/* default.fetchHorrorMovies */.Z.fetchHorrorMovies
  }))));
};

/* harmony default export */ const pages_Home = (Home);

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
//# sourceMappingURL=860.chunk.js.map