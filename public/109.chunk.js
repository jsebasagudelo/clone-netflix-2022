"use strict";
(self["webpackChunkclone_netflix"] = self["webpackChunkclone_netflix"] || []).push([[109],{

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

/***/ 5109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Search)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(5998);
// EXTERNAL MODULE: ./src/Api/index.js
var Api = __webpack_require__(7314);
// EXTERNAL MODULE: ./src/Api/Requests.js
var Requests = __webpack_require__(2509);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/PlayArrow.js
var PlayArrow = __webpack_require__(5507);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/Info.js
var Info = __webpack_require__(89);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/Add.js
var Add = __webpack_require__(3430);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(8463);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/CardActions.js
var CardActions = __webpack_require__(1907);
// EXTERNAL MODULE: ./src/utils/constant.js
var constant = __webpack_require__(1294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js + 2 modules
var Dialog = __webpack_require__(8623);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(9525);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(6856);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(3832);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Close.js
var Close = __webpack_require__(366);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(3457);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(8920);
// EXTERNAL MODULE: ./src/actions/index.js
var actions = __webpack_require__(7876);
// EXTERNAL MODULE: ./src/utils/Utilidades.js
var Utilidades = __webpack_require__(9019);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
;// CONCATENATED MODULE: ./src/styles/components/StylesModalInfo.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var useStyleModalInfo = (0,makeStyles/* default */.Z)(function (theme) {
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
/* harmony default export */ const StylesModalInfo = (useStyleModalInfo);
;// CONCATENATED MODULE: ./src/components/ui/ModalInfo.jsx












var ModalInfo = function ModalInfo(_ref) {
  var show = _ref.show,
      onClose = _ref.onClose,
      movie = _ref.movie;
  var theme = (0,useTheme/* default */.Z)();
  var matchesXS = (0,useMediaQuery/* default */.Z)(theme.breakpoints.down("xs"));
  var classes = StylesModalInfo();
  var dispatch = (0,es/* useDispatch */.I0)();
  var backdrop_path = movie.backdrop_path,
      title = movie.title,
      name = movie.name,
      overview = movie.overview,
      vote_average = movie.vote_average,
      first_air_date = movie.first_air_date,
      poster_path = movie.poster_path;

  var addMyList = function addMyList() {
    dispatch((0,actions/* setMoviesFavorites */.LF)(movie));
  };

  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Dialog/* default */.Z, {
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
  }, /*#__PURE__*/react.createElement(DialogContent/* default */.Z, null, /*#__PURE__*/react.createElement(DialogActions/* default */.Z, {
    style: {
      zIndex: 20,
      position: "absolute",
      right: "10px",
      paddingTop: "0px"
    }
  }, /*#__PURE__*/react.createElement(Close/* default */.Z, {
    className: classes.btn,
    onClick: onClose
  })), /*#__PURE__*/react.createElement("div", {
    className: classes.root,
    style: {
      backgroundImage: backdrop_path ? "url(".concat(constant/* base_url_Img */.DJ).concat(backdrop_path, ")") : "url(".concat(constant/* base_url_Img */.DJ).concat(poster_path, ")")
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.inner
  })), /*#__PURE__*/react.createElement(Container/* default */.Z, {
    maxWidth: "xl",
    className: classes.content
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "column",
    justifyContent: "flex-end",
    spacing: 2,
    style: {
      height: "100%",
      marginTop: matchesXS && "300px"
    }
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "h1",
    className: classes.title
  }, title ? title : name)), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    container: true,
    spacing: 2
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    className: classes.add__btn,
    startIcon: /*#__PURE__*/react.createElement(Add/* default */.Z, null),
    onClick: addMyList
  }, "My List"))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true,
    container: true,
    spacing: 2
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "body2",
    className: classes.rate
  }, "Rating: ", vote_average * 10, "%")), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "body2",
    className: classes.date
  }, first_air_date === null || first_air_date === void 0 ? void 0 : first_air_date.substr(0, 4)))), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "body2",
    color: "inherit",
    className: classes.overview
  }, (0,Utilidades/* truncate */.$)(overview)))))), /*#__PURE__*/react.createElement(DialogActions/* default */.Z, null)));
};

/* harmony default export */ const ui_ModalInfo = (ModalInfo);
;// CONCATENATED MODULE: ./src/styles/components/StylesMovieCard.js
function StylesMovieCard_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var useStyleMovieCard = (0,makeStyles/* default */.Z)(function (theme) {
  var _root, _poster__root;

  return {
    root: (_root = {
      height: "200px"
    }, StylesMovieCard_defineProperty(_root, theme.breakpoints.down("lg"), {
      height: "160px"
    }), StylesMovieCard_defineProperty(_root, theme.breakpoints.down("md"), {
      height: "155px"
    }), StylesMovieCard_defineProperty(_root, theme.breakpoints.down("sm"), {
      height: "140px"
    }), StylesMovieCard_defineProperty(_root, theme.breakpoints.down("xs"), {
      height: "120px"
    }), StylesMovieCard_defineProperty(_root, "position", "relative"), StylesMovieCard_defineProperty(_root, "&.MuiPaper-rounded", {
      borderRadius: "0"
    }), StylesMovieCard_defineProperty(_root, "& .MuiCardActions-root", {
      position: "absolute",
      bottom: 0,
      padding: "6px 4px 0",
      background: "#303030cf"
    }), StylesMovieCard_defineProperty(_root, "&.MuiSkeleton-root", {
      backgroundColor: "rgb(255 255 255 / 14%)"
    }), _root),
    poster__root: (_poster__root = {
      height: "400px"
    }, StylesMovieCard_defineProperty(_poster__root, theme.breakpoints.down("lg"), {
      height: "360px"
    }), StylesMovieCard_defineProperty(_poster__root, theme.breakpoints.down("md"), {
      height: "340x"
    }), StylesMovieCard_defineProperty(_poster__root, theme.breakpoints.down("sm"), {
      height: "320px"
    }), StylesMovieCard_defineProperty(_poster__root, theme.breakpoints.down("xs"), {
      height: "300px"
    }), StylesMovieCard_defineProperty(_poster__root, "position", "relative"), StylesMovieCard_defineProperty(_poster__root, "&.MuiPaper-rounded", {
      borderRadius: "0"
    }), StylesMovieCard_defineProperty(_poster__root, "& .MuiCardActions-root", {
      position: "absolute",
      bottom: 0,
      padding: "6px 4px 0",
      background: "#303030cf"
    }), StylesMovieCard_defineProperty(_poster__root, "&.MuiSkeleton-root", {
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
    actions: StylesMovieCard_defineProperty({}, theme.breakpoints.down("xs"), {
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
/* harmony default export */ const StylesMovieCard = (useStyleMovieCard);
// EXTERNAL MODULE: ./node_modules/movie-trailer/index.js
var movie_trailer = __webpack_require__(7134);
var movie_trailer_default = /*#__PURE__*/__webpack_require__.n(movie_trailer);
// EXTERNAL MODULE: ./node_modules/react-youtube/dist/YouTube.mjs
var YouTube = __webpack_require__(3191);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/HighlightOffRounded.js
var HighlightOffRounded = __webpack_require__(5890);
;// CONCATENATED MODULE: ./src/components/movie/MovieCard.jsx
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
  var classes = StylesMovieCard();

  var _useState = (0,react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      trailerPath = _useState2[0],
      setTrailerPath = _useState2[1];

  var _useState3 = (0,react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      description = _useState4[0],
      setDescription = _useState4[1];

  var _useState5 = (0,react.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      titlemovie = _useState6[0],
      setTitle = _useState6[1];

  var _useState7 = (0,react.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      original_title = _useState8[0],
      setOriginal_title = _useState8[1];

  var backdrop_path = movie.backdrop_path,
      poster_path = movie.poster_path,
      title = movie.title,
      name = movie.name;

  var _useState9 = (0,react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      modalShow = _useState10[0],
      setModalShow = _useState10[1];

  var dispatch = (0,es/* useDispatch */.I0)();

  var onClose = function onClose() {
    setModalShow(false);
  };

  var onShow = function onShow() {
    setModalShow(true);
  };

  var addMyList = function addMyList() {
    dispatch((0,actions/* setMoviesFavorites */.LF)(movie));
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
      movie_trailer_default()((movie === null || movie === void 0 ? void 0 : movie.name) || (movie === null || movie === void 0 ? void 0 : movie.title) || (movie === null || movie === void 0 ? void 0 : movie.original_name) || (movie === null || movie === void 0 ? void 0 : movie.original_title)).then(function (response) {
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

  return /*#__PURE__*/react.createElement(Card/* default */.Z, {
    className: poster ? classes.poster__root : classes.root
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.img,
    style: {
      backgroundImage: backdrop_path ? "url(".concat(constant/* base_url_Img */.DJ).concat(poster ? poster_path : backdrop_path, ")") : poster_path ? "url(".concat(constant/* base_url_Img */.DJ).concat(poster_path, ")") : null
    },
    onClick: onShow
  }, !backdrop_path && !poster_path && /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "body2",
    align: "center"
  }, title ? title : name)), /*#__PURE__*/react.createElement(CardActions/* default */.Z, {
    className: classes.actions
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(PlayArrow/* default */.Z, {
    color: "secondary",
    className: classes.btn,
    onClick: function onClick() {
      return handleClick(movie);
    }
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Info/* default */.Z, {
    className: classes.btn,
    onClick: onShow
  })), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Add/* default */.Z, {
    color: "secondary",
    className: classes.btn,
    onClick: addMyList
  })))), /*#__PURE__*/react.createElement(ui_ModalInfo, {
    show: modalShow,
    onClose: onClose,
    movie: movie
  }), trailerPath && /*#__PURE__*/react.createElement("div", {
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
    opts: opts
  }), /*#__PURE__*/react.createElement("div", {
    className: classes.info__overlay__iconBox
  })), /*#__PURE__*/react.createElement("div", {
    className: classes.info__overlay__text
  }, /*#__PURE__*/react.createElement("h1", null, title), /*#__PURE__*/react.createElement("h2", null, original_title ? "(".concat(original_title, ")") : ""), /*#__PURE__*/react.createElement("p", null, description)))));
};

MovieCard.propTypes = {
  movie: (prop_types_default()).object
};
/* harmony default export */ const movie_MovieCard = (MovieCard);
;// CONCATENATED MODULE: ./src/components/movie/SearchedResults.jsx





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
  return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    style: styles.grid
  }, movies.map(function (d, idx) {
    return /*#__PURE__*/react.createElement(Grid/* default */.Z, {
      item: true,
      key: idx,
      xs: 6,
      sm: 4,
      md: 3,
      lg: 2,
      style: styles.main
    }, /*#__PURE__*/react.createElement(movie_MovieCard, {
      movie: d
    }));
  }));
}; // Component Documentation


SearchedResults.propTypes = {
  movies: (prop_types_default()).array
};
/* harmony default export */ const movie_SearchedResults = (SearchedResults);
// EXTERNAL MODULE: ./src/containers/Layout.jsx + 15 modules
var Layout = __webpack_require__(4025);
;// CONCATENATED MODULE: ./src/styles/components/StyleSearch.js

var useStylesSearch = (0,makeStyles/* default */.Z)(function (theme) {
  return {
    root: {},
    espacio: {
      height: "30vh"
    }
  };
});
/* harmony default export */ const StyleSearch = (useStylesSearch);
;// CONCATENATED MODULE: ./src/pages/Search.jsx
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Search_slicedToArray(arr, i) { return Search_arrayWithHoles(arr) || Search_iterableToArrayLimit(arr, i) || Search_unsupportedIterableToArray(arr, i) || Search_nonIterableRest(); }

function Search_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Search_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Search_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Search_arrayLikeToArray(o, minLen); }

function Search_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Search_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Search_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Search_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Search_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Search = function Search() {
  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return _objectSpread({}, state);
  }),
      movie = _useSelector.movie;

  var searchinputvalue = movie.inputvalue;

  var _useState = (0,react.useState)([]),
      _useState2 = Search_slicedToArray(_useState, 2),
      movies = _useState2[0],
      setMovies = _useState2[1];

  var classes = StyleSearch();
  (0,react.useEffect)(function () {
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
                return Api/* default.get */.Z.get("".concat(Requests/* default.fetchSearchMovies */.Z.fetchSearchMovies, "&query=").concat(searchinputvalue));

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
  return /*#__PURE__*/react.createElement(Layout/* default */.Z, null, /*#__PURE__*/react.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.espacio
  }), movies.length > 0 ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(movie_SearchedResults, {
    movies: movies
  })) : ""));
};

/* harmony default export */ const pages_Search = (Search);

/***/ }),

/***/ 9019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ truncate)
/* harmony export */ });
var truncate = function truncate(string, n) {
  return (string === null || string === void 0 ? void 0 : string.length) > n ? "".concat(string.substr(0, n - 1), " ...") : string;
};

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

/***/ })

}]);
//# sourceMappingURL=109.chunk.js.map