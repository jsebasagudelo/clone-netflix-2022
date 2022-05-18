"use strict";
(self["webpackChunkclone_netflix"] = self["webpackChunkclone_netflix"] || []).push([[300],{

/***/ 1300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Row)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ChevronRight.js
var ChevronRight = __webpack_require__(6735);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ChevronLeft.js
var ChevronLeft = __webpack_require__(9875);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/HighlightOffRounded.js
var HighlightOffRounded = __webpack_require__(5890);
// EXTERNAL MODULE: ./node_modules/movie-trailer/index.js
var movie_trailer = __webpack_require__(7134);
var movie_trailer_default = /*#__PURE__*/__webpack_require__.n(movie_trailer);
// EXTERNAL MODULE: ./node_modules/react-youtube/dist/YouTube.mjs
var YouTube = __webpack_require__(3191);
// EXTERNAL MODULE: ./src/Api/index.js
var Api = __webpack_require__(7314);
// EXTERNAL MODULE: ./src/components/styles/row.css
var row = __webpack_require__(7347);
// EXTERNAL MODULE: ./src/utils/constant.js
var constant = __webpack_require__(1294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
;// CONCATENATED MODULE: ./src/styles/components/StyleRow.js

var useStyleRow = (0,makeStyles/* default */.Z)(function (theme) {
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
/* harmony default export */ const StyleRow = (useStyleRow);
;// CONCATENATED MODULE: ./src/components/Row.jsx
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

  var _useState = (0,react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      movies = _useState2[0],
      setMovies = _useState2[1];

  var _useState3 = (0,react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      trailerPath = _useState4[0],
      setTrailerPath = _useState4[1];

  var _useState5 = (0,react.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      description = _useState6[0],
      setDescription = _useState6[1];

  var _useState7 = (0,react.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      title = _useState8[0],
      setTitle = _useState8[1];

  var _useState9 = (0,react.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      original_title = _useState10[0],
      setOriginal_title = _useState10[1];

  var classes = StyleRow();

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
      movie_trailer_default()((movie === null || movie === void 0 ? void 0 : movie.name) || (movie === null || movie === void 0 ? void 0 : movie.title) || (movie === null || movie === void 0 ? void 0 : movie.original_name) || (movie === null || movie === void 0 ? void 0 : movie.original_title)).then(function (response) {
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

  (0,react.useEffect)(function () {
    fetchUrl = with_genres != 0 ? "".concat(fetchUrl, "&with_genres=").concat(with_genres, "&sort_by=vote_average.desc&vote_count.gte=20") : fetchUrl;

    var fetchData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var request;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Api/* default.get */.Z.get(fetchUrl);

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
  return /*#__PURE__*/react.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react.createElement("h2", {
    className: classes.row__title
  }, titleMovie), /*#__PURE__*/react.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react.createElement("div", {
    className: "row__posters row__posters--".concat(id)
  }, /*#__PURE__*/react.createElement("span", {
    className: "pagination pagination--left",
    onClick: function onClick(e) {
      return handlePagination(e);
    }
  }, /*#__PURE__*/react.createElement(ChevronLeft/* default */.Z, null)), /*#__PURE__*/react.createElement("span", {
    className: "pagination pagination--right",
    onClick: function onClick(e) {
      return handlePagination(e);
    }
  }, /*#__PURE__*/react.createElement(ChevronRight/* default */.Z, null)), movies.map(function (movie) {
    return movie.backdrop_path && /*#__PURE__*/react.createElement("img", {
      key: movie.id,
      className: classes.row__poster,
      src: constant/* base_url_Img */.DJ + movie.backdrop_path,
      alt: movie.name,
      onClick: function onClick() {
        return handleClick(movie);
      }
    });
  })), trailerPath && /*#__PURE__*/react.createElement("div", {
    className: classes.info__overlay,
    onClick: function onClick() {
      return handleClick(null);
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.info__overlay__contentBox,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/react.createElement("span", {
    onClick: function onClick() {
      return handleClick(null);
    },
    className: classes.info__overlay__btnClose
  }, /*#__PURE__*/react.createElement(HighlightOffRounded/* default */.Z, {
    className: classes.info__overlay__btnClose
  })), /*#__PURE__*/react.createElement("div", {
    className: classes.info__overlay_videoBox
  }, /*#__PURE__*/react.createElement(YouTube/* default */.Z, {
    className: classes.info__overlay__youtube,
    videoId: trailerPath,
    opts: opts,
    title: "string"
  }), /*#__PURE__*/react.createElement("div", {
    className: classes.info__overlay__iconBox
  })), /*#__PURE__*/react.createElement("div", {
    className: classes.info__overlay__text
  }, /*#__PURE__*/react.createElement("h1", null, title), /*#__PURE__*/react.createElement("h2", null, original_title ? "(".concat(original_title, ")") : ""), /*#__PURE__*/react.createElement("p", null, description))))));
}; // Component Documentation


Row.propTypes = {
  titleMovie: (prop_types_default()).string,
  id: (prop_types_default()).string,
  fetchUrl: (prop_types_default()).string
};
/* harmony default export */ const components_Row = (Row); // Alias Component in the browser

Row.displayName = "Row Movie";

/***/ }),

/***/ 1294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DJ": () => (/* binding */ base_url_Img),
/* harmony export */   "ef": () => (/* binding */ genero_accion)
/* harmony export */ });
/* unused harmony exports base_url, API_KEY */
var base_url = "https://api.themoviedb.org/3";
var base_url_Img = "https://image.tmdb.org/t/p/original/";
var genero_accion = "37";
var API_KEY = "a3f405c037b3877af91a264045307fa3";

/***/ }),

/***/ 4627:
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
___CSS_LOADER_EXPORT___.push([module.id, ".rows {\r\n    z-index: 50;\r\n    position: relative;\r\n    left: 0;\r\n    top: -12rem;\r\n    width: 100%;\r\n     overflow-x: hidden; \r\n}\r\n \r\n\r\n.row {\r\n    padding: 0;\r\n    position: relative;\r\n    margin: 1.5vw 0 2.5vw;\r\n}\r\n\r\n.row__title {\r\n    font-size: 2vw;\r\n    font-weight: 500;\r\n    text-shadow: 2px 2px 4px rgba(0,0,0,.25);\r\n    padding-left: 3vw;\r\n}\r\n\r\n.row__posters {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    scroll-behavior: smooth;\r\n    overflow-x: scroll;\r\n    overflow-y: hidden;\r\n    padding: 1rem 0 1rem 3vw;\r\n}\r\n\r\n\r\n\r\n.pagination {\r\n    position: absolute;\r\n    opacity: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: calc(100% - 2rem);\r\n    width: 3vw;\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n    transition: opacity 0.2s;\r\n    z-index: 10;\r\n    cursor: pointer;\r\n}\r\n\r\n.pagination:hover {\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.pagination i {\r\n  /* pointer-events: none;\r\n    font-size: 1.3vw;*/\r\n}\r\n\r\n.pagination--left {\r\n    left: 0;\r\n    top: 1rem;\r\n}\r\n\r\n\r\n.pagination--right {\r\n    right: 0;\r\n    top: 1rem;\r\n}\r\n\r\n\r\n.row__posters:hover > .pagination {\r\n    opacity: 1;\r\n}\r\n\r\n.row__poster {\r\n    width: auto;\r\n    height: 10vw;\r\n    object-fit: contain;\r\n    max-height: 15rem;\r\n    min-height: 8rem;\r\n    transition: transform 0.3s;\r\n    border-radius: 5px;\r\n    margin-right: 1rem;\r\n    cursor: pointer;\r\n    transition: all 0.2s;\r\n}\r\n\r\n\r\n.row__poster:hover {\r\n    filter: brightness(1.1);\r\n    transform: scale(1.1);\r\n}\r\n\r\n.info__overlay {\r\n    position: fixed;\r\n    content: \"\";\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    z-index: 99;\r\n    overflow: scroll;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.error {\r\n    position: fixed;\r\n    padding: 2rem 3rem 2.5rem;\r\n    top: 10rem;\r\n    left: 50%;\r\n    z-index: 999;\r\n    transform: translateX(-50%);\r\n    border: 1px solid rgba(80, 80, 80, 0.2);\r\n    border-top: 2px solid #fff;\r\n    background-color: rgba(10, 10, 10, 0.9);\r\n}\r\n\r\n.error__heading {\r\n    font-family: inherit;\r\n    font-size: 3rem;\r\n    font-weight: 500;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.error__description {\r\n    font-family: inherit;\r\n    font-size: 2rem;\r\n    font-weight: 300;\r\n}\r\n\r\n.fade-in {\r\n    animation: fadeIn ease 0.5s;\r\n}\r\n\r\n.fade-out {\r\n    animation: fadeOut ease 0.5s;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    0% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n\r\n@keyframes fadeOut {\r\n    0% {opacity: 1;}\r\n    100% {opacity: 0;}\r\n}\r\n\r\n@media (max-width: 900px) {\r\n    .nav__list {\r\n        display: none;\r\n    }\r\n    .nav__browse {\r\n        display: flex;\r\n    }\r\n\r\n    .info__overlay--contentBox {\r\n        width: 95%;\r\n        top: 8rem;\r\n        transform: translateX(-50%);\r\n    }\r\n\r\n    .info__overlay--youtube {\r\n        height: 45vw;\r\n    }\r\n\r\n    .info__overlay--text {\r\n        padding: 2vw 4vw 4vw;\r\n    }\r\n\r\n    .info__overlay--text h2 {\r\n        margin-bottom: 3vw;\r\n    }\r\n}\r\n\r\n@media (max-width: 775px) {\r\n    .rows {\r\n        top: -7rem;\r\n    }\r\n\r\n    .info__button {\r\n        padding: 1rem 2rem;\r\n    }\r\n\r\n    .row__poster {\r\n        height: 15vw;\r\n    }\r\n\r\n    .row__title {\r\n        font-size: 1.8rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 450px) {\r\n    .info__overlay--text p {\r\n        font-size: 2rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 350px) {\r\n    .rows {\r\n        top: -5rem;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/components/styles/row.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,kBAAkB;IAClB,OAAO;IACP,WAAW;IACX,WAAW;KACV,kBAAkB;AACvB;;;AAGA;IACI,UAAU;IACV,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,wCAAwC;IACxC,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;IAClB,wBAAwB;AAC5B;;;;AAIA;IACI,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,yBAAyB;IACzB,UAAU;IACV,oCAAoC;IACpC,wBAAwB;IACxB,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;EACE;sBACoB;AACtB;;AAEA;IACI,OAAO;IACP,SAAS;AACb;;;AAGA;IACI,QAAQ;IACR,SAAS;AACb;;;AAGA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,0BAA0B;IAC1B,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,oBAAoB;AACxB;;;AAGA;IACI,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,WAAW;IACX,gBAAgB;AACpB;;;;;;;;AAQA;IACI,eAAe;IACf,yBAAyB;IACzB,UAAU;IACV,SAAS;IACT,YAAY;IACZ,2BAA2B;IAC3B,uCAAuC;IACvC,0BAA0B;IAC1B,uCAAuC;AAC3C;;AAEA;IACI,oBAAoB;IACpB,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,IAAI,UAAU,CAAC;IACf,MAAM,UAAU,CAAC;AACrB;;AAEA;IACI,IAAI,UAAU,CAAC;IACf,MAAM,UAAU,CAAC;AACrB;;AAEA;IACI;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;;IAEA;QACI,UAAU;QACV,SAAS;QACT,2BAA2B;IAC/B;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,oBAAoB;IACxB;;IAEA;QACI,kBAAkB;IACtB;AACJ;;AAEA;IACI;QACI,UAAU;IACd;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,UAAU;IACd;AACJ","sourcesContent":[".rows {\r\n    z-index: 50;\r\n    position: relative;\r\n    left: 0;\r\n    top: -12rem;\r\n    width: 100%;\r\n     overflow-x: hidden; \r\n}\r\n \r\n\r\n.row {\r\n    padding: 0;\r\n    position: relative;\r\n    margin: 1.5vw 0 2.5vw;\r\n}\r\n\r\n.row__title {\r\n    font-size: 2vw;\r\n    font-weight: 500;\r\n    text-shadow: 2px 2px 4px rgba(0,0,0,.25);\r\n    padding-left: 3vw;\r\n}\r\n\r\n.row__posters {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    scroll-behavior: smooth;\r\n    overflow-x: scroll;\r\n    overflow-y: hidden;\r\n    padding: 1rem 0 1rem 3vw;\r\n}\r\n\r\n\r\n\r\n.pagination {\r\n    position: absolute;\r\n    opacity: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: calc(100% - 2rem);\r\n    width: 3vw;\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n    transition: opacity 0.2s;\r\n    z-index: 10;\r\n    cursor: pointer;\r\n}\r\n\r\n.pagination:hover {\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.pagination i {\r\n  /* pointer-events: none;\r\n    font-size: 1.3vw;*/\r\n}\r\n\r\n.pagination--left {\r\n    left: 0;\r\n    top: 1rem;\r\n}\r\n\r\n\r\n.pagination--right {\r\n    right: 0;\r\n    top: 1rem;\r\n}\r\n\r\n\r\n.row__posters:hover > .pagination {\r\n    opacity: 1;\r\n}\r\n\r\n.row__poster {\r\n    width: auto;\r\n    height: 10vw;\r\n    object-fit: contain;\r\n    max-height: 15rem;\r\n    min-height: 8rem;\r\n    transition: transform 0.3s;\r\n    border-radius: 5px;\r\n    margin-right: 1rem;\r\n    cursor: pointer;\r\n    transition: all 0.2s;\r\n}\r\n\r\n\r\n.row__poster:hover {\r\n    filter: brightness(1.1);\r\n    transform: scale(1.1);\r\n}\r\n\r\n.info__overlay {\r\n    position: fixed;\r\n    content: \"\";\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    z-index: 99;\r\n    overflow: scroll;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.error {\r\n    position: fixed;\r\n    padding: 2rem 3rem 2.5rem;\r\n    top: 10rem;\r\n    left: 50%;\r\n    z-index: 999;\r\n    transform: translateX(-50%);\r\n    border: 1px solid rgba(80, 80, 80, 0.2);\r\n    border-top: 2px solid #fff;\r\n    background-color: rgba(10, 10, 10, 0.9);\r\n}\r\n\r\n.error__heading {\r\n    font-family: inherit;\r\n    font-size: 3rem;\r\n    font-weight: 500;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.error__description {\r\n    font-family: inherit;\r\n    font-size: 2rem;\r\n    font-weight: 300;\r\n}\r\n\r\n.fade-in {\r\n    animation: fadeIn ease 0.5s;\r\n}\r\n\r\n.fade-out {\r\n    animation: fadeOut ease 0.5s;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    0% {opacity: 0;}\r\n    100% {opacity: 1;}\r\n}\r\n\r\n@keyframes fadeOut {\r\n    0% {opacity: 1;}\r\n    100% {opacity: 0;}\r\n}\r\n\r\n@media (max-width: 900px) {\r\n    .nav__list {\r\n        display: none;\r\n    }\r\n    .nav__browse {\r\n        display: flex;\r\n    }\r\n\r\n    .info__overlay--contentBox {\r\n        width: 95%;\r\n        top: 8rem;\r\n        transform: translateX(-50%);\r\n    }\r\n\r\n    .info__overlay--youtube {\r\n        height: 45vw;\r\n    }\r\n\r\n    .info__overlay--text {\r\n        padding: 2vw 4vw 4vw;\r\n    }\r\n\r\n    .info__overlay--text h2 {\r\n        margin-bottom: 3vw;\r\n    }\r\n}\r\n\r\n@media (max-width: 775px) {\r\n    .rows {\r\n        top: -7rem;\r\n    }\r\n\r\n    .info__button {\r\n        padding: 1rem 2rem;\r\n    }\r\n\r\n    .row__poster {\r\n        height: 15vw;\r\n    }\r\n\r\n    .row__title {\r\n        font-size: 1.8rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 450px) {\r\n    .info__overlay--text p {\r\n        font-size: 2rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 350px) {\r\n    .rows {\r\n        top: -5rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7347:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_row_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4627);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_row_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_row_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_row_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_row_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ })

}]);
//# sourceMappingURL=300.chunk.js.map