"use strict";
(self["webpackChunkclone_netflix"] = self["webpackChunkclone_netflix"] || []).push([[25],{

/***/ 7876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LF": () => (/* binding */ setMoviesFavorites),
/* harmony export */   "ps": () => (/* binding */ setUserInfo),
/* harmony export */   "tU": () => (/* binding */ setSearchInputValue)
/* harmony export */ });
/* unused harmony export setMovies */
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5962);

var setMovies = function setMovies(payload) {
  return {
    type: SET_MOVIES,
    payload: payload
  };
};
var setSearchInputValue = function setSearchInputValue(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .SEARCH_INPUT_VALUE */ .Zp,
    payload: payload
  };
};
var setMoviesFavorites = function setMoviesFavorites(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .SET_MOVIES_FAVORITE */ .rN,
    payload: payload
  };
};
var setUserInfo = function setUserInfo(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .LOGGED_IN_USER */ .Ej,
    payload: payload
  };
};

/***/ }),

/***/ 4025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ containers_Layout)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AppBar/AppBar.js
var AppBar = __webpack_require__(5258);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js
var Toolbar = __webpack_require__(8358);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(7812);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(3901);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(5998);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputBase/InputBase.js + 1 modules
var InputBase = __webpack_require__(4741);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Search.js
var Search = __webpack_require__(8995);
;// CONCATENATED MODULE: ./src/assets/images/netflixavatar_red.png
/* harmony default export */ const netflixavatar_red = (__webpack_require__.p + "e3ba3d553ecf34615db2dd4563eb7fda.png");
// EXTERNAL MODULE: ./src/actions/index.js
var actions = __webpack_require__(7876);
;// CONCATENATED MODULE: ./src/assets/images/netflix-logo.png
/* harmony default export */ const netflix_logo = (__webpack_require__.p + "774e8c1632ac9433608b40e3f6a21558.png");
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(9693);
;// CONCATENATED MODULE: ./src/styles/components/StyleHeader.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var useStyleHeader = (0,makeStyles/* default */.Z)(function (theme) {
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
    menu: _defineProperty({}, theme.breakpoints.down("sm"), {
      display: "none"
    }),
    search: _defineProperty({
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: (0,colorManipulator/* alpha */.Fq)(theme.palette.common.white, 0.25)
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
/* harmony default export */ const StyleHeader = (useStyleHeader);
;// CONCATENATED MODULE: ./src/components/Header.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Header = function Header() {
  var classes = StyleHeader();

  var _useState = (0,react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = (0,react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      inputsearch = _useState4[0],
      setInputSearch = _useState4[1];

  var history = (0,react_router/* useHistory */.k6)();
  var dispatch = (0,es/* useDispatch */.I0)();

  var hideHeader = function hideHeader() {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  var handleChange = function handleChange(event) {
    setInputSearch(event.target.value);
    dispatch((0,actions/* setSearchInputValue */.tU)(event.target.value));

    if (event.target.value.length > 0) {
      history.push("/search?q=".concat(event.target.value));
    } else {
      history.push("/");
    }
  };

  var handleHome = function handleHome() {
    dispatch((0,actions/* setSearchInputValue */.tU)(""));
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

  (0,react.useEffect)(function () {
    window.addEventListener("scroll", hideHeader);
    return function () {
      return window.removeEventListener("scroll", hideHeader);
    };
  }, []);
  return /*#__PURE__*/react.createElement(AppBar/* default */.Z, {
    position: "sticky",
    className: "".concat(classes.root, " ").concat(show && classes.scrolled),
    elevation: 0
  }, /*#__PURE__*/react.createElement(Toolbar/* default */.Z, {
    className: classes.toolbar
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.Izquierda
  }, /*#__PURE__*/react.createElement(IconButton/* default */.Z, {
    onClick: handleHome
  }, /*#__PURE__*/react.createElement("img", {
    src: netflix_logo,
    al: "logo",
    className: classes.logo
  })), /*#__PURE__*/react.createElement(Button/* default */.Z, {
    color: "inherit",
    variant: "text",
    onClick: handlePeliculas,
    className: classes.menu
  }, "Peliculas"), /*#__PURE__*/react.createElement(Button/* default */.Z, {
    color: "inherit",
    variant: "text",
    onClick: handleMyList,
    className: classes.menu
  }, "Mi Lista")), /*#__PURE__*/react.createElement("div", {
    className: classes.Lateral
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.search
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.searchIcon
  }, /*#__PURE__*/react.createElement(Search/* default */.Z, null)), /*#__PURE__*/react.createElement(InputBase/* default */.Z, {
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
  })), /*#__PURE__*/react.createElement(Avatar/* default */.Z, {
    variant: "square",
    src: netflixavatar_red,
    style: {
      cursor: "pointer"
    },
    onClick: handleProfile
  }))));
};

/* harmony default export */ const components_Header = (Header);
;// CONCATENATED MODULE: ./src/styles/components/StyleFooter.js

var useStyleFooter = (0,makeStyles/* default */.Z)(function (theme) {
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
/* harmony default export */ const StyleFooter = (useStyleFooter);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./src/components/Footer.jsx




var Footer = function Footer(_ref) {
  var autor = _ref.autor;
  var classes = StyleFooter();
  return /*#__PURE__*/react.createElement("footer", {
    className: classes.footer
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.copyright
  }, "\xA9 2022 Made with \u2764\uFE0F by ", "  ", /*#__PURE__*/react.createElement("a", {
    className: classes.link__container,
    href: "https://github.com/jsebasagudelo/netflix-clone"
  }, "   ", autor)));
}; // Component Documentation


Footer.propTypes = {
  autor: (prop_types_default()).string
};
/* harmony default export */ const components_Footer = (Footer);
;// CONCATENATED MODULE: ./src/styles/components/StyleError.js

var useStylesError = (0,makeStyles/* default */.Z)(function (theme) {
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
/* harmony default export */ const StyleError = (useStylesError);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
;// CONCATENATED MODULE: ./src/components/Error.jsx





var Error = function Error(_ref) {
  var title = _ref.title,
      message = _ref.message;
  var classes = StyleError();
  return /*#__PURE__*/react.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react.createElement("div", {
    className: classes.bg
  }), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    container: true,
    direction: "column",
    alignItems: "center",
    justify: "center",
    spacing: 4,
    className: classes.content
  }, /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "h4",
    color: "secondary"
  }, title)), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "h6",
    className: classes.error
  }, message))));
};

Error.propTypes = {
  title: prop_types.string.isRequired,
  message: prop_types.string.isRequired
};
/* harmony default export */ const components_Error = (Error);
;// CONCATENATED MODULE: ./src/helpers/ErrorBoundary.jsx
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

function ErrorBoundary_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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

      ErrorBoundary_defineProperty(_assertThisInitialized(_this), "state", {
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
        var ErrorRender = /*#__PURE__*/react.createElement(components_Error, {
          title: title,
          message: message
        });
        var NormalRender = /*#__PURE__*/react.createElement(WrappedComponent, props);
        return hasError ? ErrorRender : NormalRender;
      }
    }]);

    return _class;
  }(react.Component), ErrorBoundary_defineProperty(_class, "getDerivedFromError", function () {
    return {
      error: true
    };
  }), _class;
};
;// CONCATENATED MODULE: ./src/assets/images/HeroBanner.jpg
/* harmony default export */ const HeroBanner = (__webpack_require__.p + "b79a7bcf909f9ac4cb070245716a4d11.jpg");
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(8804);
;// CONCATENATED MODULE: ./src/styled/Input.js
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


 // Design Pattern: Style Component

var StyledInput = (0,styled_components_browser_esm/* default */.ZP)(InputBase/* default */.Z)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  z-index: 30;\n  background: #fff;\n  padding: 25.5px;\n  outline-width: 0;\n  height: 30px;\n  border-radius:5px\n \n  border: none;\n\n"])));
// EXTERNAL MODULE: ./src/styled/Button.js
var styled_Button = __webpack_require__(878);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(5477);
// EXTERNAL MODULE: ./src/services/firebase/firebase.js
var firebase = __webpack_require__(725);
;// CONCATENATED MODULE: ./src/styles/components/StyleSignUp.js

var useStylesSignUp = (0,makeStyles/* default */.Z)(function (theme) {
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
/* harmony default export */ const StyleSignUp = (useStylesSignUp);
;// CONCATENATED MODULE: ./src/pages/SignUp.jsx
function SignUp_slicedToArray(arr, i) { return SignUp_arrayWithHoles(arr) || SignUp_iterableToArrayLimit(arr, i) || SignUp_unsupportedIterableToArray(arr, i) || SignUp_nonIterableRest(); }

function SignUp_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SignUp_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SignUp_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SignUp_arrayLikeToArray(o, minLen); }

function SignUp_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SignUp_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function SignUp_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var SignUp = function SignUp() {
  var classes = StyleSignUp();

  var _useState = (0,react.useState)(""),
      _useState2 = SignUp_slicedToArray(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,react.useState)(""),
      _useState4 = SignUp_slicedToArray(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = SignUp_slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = (0,react.useState)(""),
      _useState8 = SignUp_slicedToArray(_useState7, 2),
      errorMessage = _useState8[0],
      setErrorMessage = _useState8[1];

  var dispatch = (0,es/* useDispatch */.I0)();

  var register = function register(e) {
    e.preventDefault();
    firebase/* auth.createUserWithEmailAndPassword */.I.createUserWithEmailAndPassword(email, password).then(function (authUser) {
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

      firebase/* auth.signInWithEmailAndPassword */.I.signInWithEmailAndPassword(email, password).then(function (authUser) {
        dispatch((0,actions/* setUserInfo */.ps)(authUser.user.email));
      })["catch"](function (err) {
        return alert(err.message);
      });
    }, 2000);
  };

  return /*#__PURE__*/react.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "h5",
    align: "left"
  }, "Sign In"), /*#__PURE__*/react.createElement("form", {
    className: classes.form
  }, /*#__PURE__*/react.createElement(StyledInput, {
    placeholder: "Email",
    value: email,
    type: "email",
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    className: classes.email
  }), /*#__PURE__*/react.createElement(StyledInput, {
    placeholder: "Password",
    value: password,
    type: "password",
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    className: classes.password
  }), /*#__PURE__*/react.createElement("span", {
    className: classes.errormessage
  }, errorMessage), /*#__PURE__*/react.createElement(styled_Button/* StyledButton */.S, {
    type: "submit",
    wide: "medium",
    radius: "true",
    onClick: signIn
  }, loading && /*#__PURE__*/react.createElement(CircularProgress/* default */.Z, {
    size: 18,
    className: classes.icon,
    color: "inherit"
  }), !loading && 'SignIn'), /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "subtitle2"
  }, "New to Netflix ?", "  ", /*#__PURE__*/react.createElement("span", {
    className: classes.signupLink,
    onClick: register
  }, "Sign Up now.", " "))));
};

/* harmony default export */ const pages_SignUp = (SignUp);
;// CONCATENATED MODULE: ./src/styles/components/StylesLogin.js
function StylesLogin_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var useStylesLogin = (0,makeStyles/* default */.Z)(function (theme) {
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
    inputBlock: StylesLogin_defineProperty({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: theme.spacing(4)
    }, theme.breakpoints.down("sm"), {
      flexDirection: "column",
      margin: "0 15"
    })
  };
});
/* harmony default export */ const StylesLogin = (useStylesLogin);
;// CONCATENATED MODULE: ./src/pages/Login.jsx
function Login_slicedToArray(arr, i) { return Login_arrayWithHoles(arr) || Login_iterableToArrayLimit(arr, i) || Login_unsupportedIterableToArray(arr, i) || Login_nonIterableRest(); }

function Login_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Login_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Login_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Login_arrayLikeToArray(o, minLen); }

function Login_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Login_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Login_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Login = function Login() {
  var handleLogin = function handleLogin() {
    setSignIn(false);
  };

  var classes = StylesLogin();

  var _useState = (0,react.useState)(true),
      _useState2 = Login_slicedToArray(_useState, 2),
      signIn = _useState2[0],
      setSignIn = _useState2[1];

  return /*#__PURE__*/react.createElement("div", {
    className: classes.root,
    style: {
      backgroundImage: "url(".concat(HeroBanner, ")")
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: netflix_logo,
    className: classes.image,
    alt: "logo"
  }), /*#__PURE__*/react.createElement(styled_Button/* StyledButton */.S, {
    className: classes.session,
    onClick: handleLogin
  }, "Iniciar session"), /*#__PURE__*/react.createElement("div", {
    className: classes.info
  }, !signIn ? /*#__PURE__*/react.createElement(pages_SignUp, null) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "h4",
    gutterBottom: true
  }, "Unlimited films, TV programmes and more."), /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "h5"
  }, "Watch anywhere. Cancel at any time."), /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "h6",
    gutterBottom: true
  }, "Ready to watch ? Enter your email to create or restart your membership."), /*#__PURE__*/react.createElement("div", {
    className: classes.inputBlock
  }, /*#__PURE__*/react.createElement(StyledInput, {
    placeholder: "Email Address"
  }), /*#__PURE__*/react.createElement(styled_Button/* StyledButton */.S, null, "Get started")))));
};

/* harmony default export */ const pages_Login = (Login);
;// CONCATENATED MODULE: ./src/containers/Layout.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Layout_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Layout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var Layout = function Layout(_ref) {
  var children = _ref.children;

  var _useSelector = (0,es/* useSelector */.v9)(function (state) {
    return _objectSpread({}, state);
  }),
      user = _useSelector.user;

  var userName = user.userInfo; //const userName="sebas"

  var history = (0,react_router/* useHistory */.k6)();
  var styles = {
    main: {
      background: "#111",
      height: "100vh"
    }
  };
  (0,react.useEffect)(function () {
    var unsubscribe = firebase/* auth.onAuthStateChanged */.I.onAuthStateChanged(function (userAuth) {
      if (userAuth) {
        console.log("onAuthStateChanged: " + userAuth.email);
      } else {
        history.push("/");
      }
    });
    return unsubscribe;
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    style: styles.main
  }, !userName.length > 0 ? /*#__PURE__*/react.createElement(pages_Login, null) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(components_Header, null), children, /*#__PURE__*/react.createElement(components_Footer, {
    autor: "Sebastian Agudelo"
  })));
}; // pattern design react: HOC


/* harmony default export */ const containers_Layout = (errorBoundary(Layout));

/***/ }),

/***/ 725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ auth)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5503);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7397);


var firebaseConfig = {
  apiKey: "AIzaSyDy0si8pWSLGWJZ4JvVqqhea_ZCmBkw_pQ",
  authDomain: "netflix-clone-2022-1481e.firebaseapp.com",
  projectId: "netflix-clone-2022-1481e",
  storageBucket: "netflix-clone-2022-1481e.appspot.com",
  messagingSenderId: "352677560912",
  appId: "1:352677560912:web:f41b90155a04c0805b4755"
};
firebase_app__WEBPACK_IMPORTED_MODULE_0__/* ["default"].initializeApp */ .Z.initializeApp(firebaseConfig);
var auth = firebase_app__WEBPACK_IMPORTED_MODULE_0__/* ["default"].auth */ .Z.auth();
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (firebase)));

/***/ }),

/***/ 878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ StyledButton)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8804);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"].button */ .ZP.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nz-index: 15;\nbackground-color:", ";\ncolor: #fff;\nborder-radius: ", ";\npadding: 15px;\nwidth: ", ";\n  text-transform: inherit;\n  cursor: pointer;\n  padding: 15px;\n  font-size: 1.1rem;\n  border: none;\n  outline: none;\n"])), function (props) {
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

/***/ })

}]);
//# sourceMappingURL=25.chunk.js.map