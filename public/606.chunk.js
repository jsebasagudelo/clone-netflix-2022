"use strict";
(self["webpackChunkclone_netflix"] = self["webpackChunkclone_netflix"] || []).push([[606],{

/***/ 9606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_NotFound)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
;// CONCATENATED MODULE: ./src/assets/images/404.jpg
/* harmony default export */ const _404 = (__webpack_require__.p + "88ca082f9393f426cb9f0eec5098f8c6.jpg");
;// CONCATENATED MODULE: ./src/styles/components/StyleNotFound.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var useStylesNotFound = (0,makeStyles/* default */.Z)(function (theme) {
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
      backgroundImage: "url(".concat(_404, ")"),
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
/* harmony default export */ const StyleNotFound = (useStylesNotFound);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(3727);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
// EXTERNAL MODULE: ./src/styled/Button.js
var Button = __webpack_require__(878);
;// CONCATENATED MODULE: ./src/components/common/Back.jsx





var Back = function Back() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "h6",
    gutterBottom: true
  }, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: {
      pathname: "/"
    }
  }, /*#__PURE__*/react.createElement(Button/* StyledButton */.S, null, "Go Home"))));
};

/* harmony default export */ const common_Back = ((0,react_router/* withRouter */.EN)(Back));
;// CONCATENATED MODULE: ./src/components/NotFound.jsx





var NotFound = function NotFound() {
  var classes = StyleNotFound();
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
    variant: "h4"
  }, "Lost your way?")), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "body1",
    align: "center"
  }, "Sorry, we can't find that page. You'll find lots to explore on the home page.")), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(common_Back, null)), /*#__PURE__*/react.createElement(Grid/* default */.Z, {
    item: true
  }, /*#__PURE__*/react.createElement(Typography/* default */.Z, {
    variant: "h4",
    className: classes.error
  }, "Error"))));
};

/* harmony default export */ const components_NotFound = (NotFound);

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
//# sourceMappingURL=606.chunk.js.map