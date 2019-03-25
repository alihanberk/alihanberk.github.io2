webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Solutions.js":
/*!*********************************!*\
  !*** ./components/Solutions.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/es/react-svg.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/alihanberkbilgic/Desktop/Bilgetech/BotgateLandingPage/components/Solutions.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Solutions =
/*#__PURE__*/
function (_Component) {
  _inherits(Solutions, _Component);

  function Solutions(props) {
    var _this;

    _classCallCheck(this, Solutions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Solutions).call(this, props));
    _this.state = {
      h6: ["Solutions"],
      h2: ["More than just a chatbot"],
      p: ["Customize your AI to focus on your company needs & see what <b>Botgate</b> can do for you!"],
      solutions: [{
        icon: '/static/img/logo/light.svg',
        title: 'E-Commerce',
        p: "Would you like to create another channel to connect with your customers and sell your products via conversational marketing? And those channels are the ones your customers already use every single day! Also answering their questions about the products while shopping will increase customer satisfaction.",
        button: {
          text: 'Discover more',
          icon: '/static/img/icon/right.svg',
          action: 'http://google.com'
        }
      }, {
        icon: '/static/img/logo/light.svg',
        title: 'Lead Generation',
        p: "Instead of answering the chat channels all day long, let your agent get in contact with the customers who has indicated interest in your company's product or service. And arrange meetings, phone calls for your sales team. You just focus on your business, Botgate covers repetitive work for you.",
        button: {
          text: 'Discover more',
          icon: '/static/img/icon/right.svg',
          action: 'http://google.com'
        }
      }, {
        icon: '/static/img/logo/light.svg',
        title: 'Customer Support',
        p: "Have an army of 300 agents working every day to solve repeating tickets? Let your conversational AI Bot cover the redundant tickets, you only devote your resources to the special cases. And you can stop the bot anytime and take over the conversation real time!",
        button: {
          text: 'Discover more',
          icon: '/static/img/icon/right.svg',
          action: 'http://google.com'
        }
      }, {
        icon: '/static/img/logo/light.svg',
        title: 'HR Process',
        p: "Now is the time to utilise AI to work for your business. Let your AI Bot handle all the repetitive workflows; from employee onboarding to expense approvals, benefits enrollment and other work processes. No more using a different portal for every single issue. No more complex form filling or redundant work processes.",
        button: {
          text: 'Discover more',
          icon: '/static/img/icon/right.svg',
          action: 'http://google.com'
        }
      }]
    };
    return _this;
  }

  _createClass(Solutions, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          h6 = _this$state.h6,
          h2 = _this$state.h2,
          p = _this$state.p,
          solutions = _this$state.solutions;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "solutions pt-56 mt-64 pb-48",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "container pt-96",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 24,
        md: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        type: "h6",
        text: h6,
        className: "mb-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        type: "h2",
        text: h2,
        className: "mt-8 mb-16 font-bilgetech",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        type: "p",
        text: p,
        className: "mt-16",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container mt-48",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        gutter: 96,
        className: "d-flex wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, solutions.map(function (solution, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          key: i,
          xs: 24,
          sm: {
            span: 10,
            offset: 1
          },
          md: {
            span: 10,
            offset: 1
          },
          className: "mb-64",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
          src: solution.icon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          type: "h3",
          text: [solution.title],
          className: "mt-0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          type: "p",
          text: [solution.p],
          className: "solution-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
          bottom: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "ghost",
          className: "mt-16 w-190 text-black",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, solution.button.text, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
          src: solution.button.icon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }))));
      }))));
    }
  }]);

  return Solutions;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Solutions);

/***/ })

})
//# sourceMappingURL=index.js.2c8916b21e2d3aaefc32.hot-update.js.map