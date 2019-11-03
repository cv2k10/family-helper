module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _React$Component);

  function Layout(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).call(this, props));
    _this.state = {
      burgerMenuOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "onClickMenuBurger",
    value: function onClickMenuBurger() {
      this.setState({
        burgerMenuOpen: !this.state.burgerMenuOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("header", {
        className: "header"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "header-left"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "menu-burger",
        onClick: function onClick() {
          return _this2.onClickMenuBurger();
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: this.state.burgerMenuOpen ? "burger burger-cross" : "burger"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        className: "logo",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        width: "50",
        height: "50",
        viewBox: "0 0 210 210",
        style: {
          fill: '#000000'
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        fill: "none",
        "fill-rule": "nonzero",
        stroke: "none",
        "stroke-width": "1",
        "stroke-linecap": "butt",
        "stroke-linejoin": "miter",
        "stroke-miterlimit": "10",
        "stroke-dasharray": "",
        "stroke-dashoffset": "0",
        "font-family": "none",
        "font-weight": "none",
        "font-size": "none",
        "text-anchor": "none",
        style: {
          mixBlendMode: 'normal'
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M0,210v-210h210v210z",
        fill: "none"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        fill: "#3498db"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "surface1"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M105,8.4c-0.73828,0 -1.47656,0.19688 -2.13281,0.59062l-60.86719,35.78203v9.76172l63,-37.06172l63,37.06172v-9.76172l-60.86719,-35.78203c-0.65625,-0.39375 -1.39453,-0.59062 -2.13281,-0.59062zM105,27.21797l-50.4,29.64609v56.53594c0,2.32969 1.87031,4.2 4.2,4.2h92.4c2.32969,0 4.2,-1.87031 4.2,-4.2v-56.53594zM21,67.2c-6.74297,0 -12.6,4.2 -12.6,12.6v50.4c0,12.6 3.92109,16.12734 8.4,21c0,0 25.06875,32.17266 29.4,37.8v8.4c0,2.31328 1.88672,4.2 4.2,4.2h33.6c2.31328,0 4.2,-1.88672 4.2,-4.2v-16.8c0,-15.45469 -7.67812,-26.75859 -16.5375,-35.66719l-20.13047,-21.47578c-7.69453,-7.69453 -13.60078,-2.67422 -14.74922,-1.46016c-3.78984,3.97031 -3.80625,10.15547 -0.06562,14.06016l20.13047,21.39375c1.34531,1.41094 1.34531,3.69141 0,5.10234c-0.65625,0.70547 -1.54219,1.05 -2.42813,1.05c-0.86953,0 -1.75547,-0.34453 -2.42813,-1.05l-18.44063,-19.70391c-12.55078,-12.64922 -4.15078,-25.24922 0.04922,-25.24922v-37.8c0,-8.4 -5.85703,-12.6 -12.6,-12.6zM189,67.2c-6.74297,0 -12.6,4.2 -12.6,12.6v37.8c4.2,0 12.6,12.6 0.04922,25.24922l-18.44063,19.70391c-0.67266,0.70547 -1.55859,1.05 -2.42812,1.05c-0.88594,0 -1.77187,-0.34453 -2.42812,-1.05c-1.34531,-1.41094 -1.34531,-3.69141 0,-5.10234l20.14687,-21.39375c3.72422,-3.90469 3.70781,-10.08984 -0.06563,-14.06016c-1.16484,-1.21406 -7.07109,-6.23437 -14.76562,1.46016l-20.13047,21.47578c-8.85937,8.90859 -16.5375,20.2125 -16.5375,35.66719v16.8c0,2.31328 1.88672,4.2 4.2,4.2h33.6c2.31328,0 4.2,-1.88672 4.2,-4.2v-8.4c4.33125,-5.62734 29.4,-37.8 29.4,-37.8c4.47891,-4.87266 8.4,-8.4 8.4,-21v-50.4c0,-8.4 -5.85703,-12.6 -12.6,-12.6z"
      }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "logo-title"
      }, "Family Helper")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "header-right"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "search",
        src: "https://img.icons8.com/ios/50/000000/search-filled.png"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        className: "profile",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        width: "50",
        height: "50",
        viewBox: "0 0 192 192",
        style: {
          fill: '#000000'
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        fill: "none",
        "fill-rule": "nonzero",
        stroke: "none",
        "stroke-width": "1",
        "stroke-linecap": "butt",
        "stroke-linejoin": "miter",
        "stroke-miterlimit": "10",
        "stroke-dasharray": "",
        "stroke-dashoffset": "0",
        "font-family": "none",
        "font-weight": "none",
        "font-size": "none",
        "text-anchor": "none",
        style: {
          mixBlendMode: 'normal'
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M0,192v-192h192v192z",
        fill: "none"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        fill: "#aaaaaa"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M96,7.71c-48.7323,0 -88.32,39.58769 -88.32,88.32c0,46.48109 36.02423,84.61587 81.6375,88.0425c0.08993,0.00731 0.17989,0.01547 0.27,0.0225c2.12094,0.15283 4.253,0.255 6.4125,0.255c2.1595,0 4.29156,-0.10217 6.4125,-0.255c0.09011,-0.00703 0.18007,-0.01519 0.27,-0.0225c45.61327,-3.42663 81.6375,-41.56141 81.6375,-88.0425c0,-48.7323 -39.5877,-88.32 -88.32,-88.32zM96,15.39c44.58172,0 80.64,36.05827 80.64,80.64c0,22.00974 -8.81352,41.91844 -23.0775,56.46c-6.10237,-4.44372 -13.64367,-7.0946 -20.4,-9.465c-8.00256,-2.8032 -15.57336,-5.46048 -17.67,-10.08c-0.33024,-3.94368 -0.30072,-7.02336 -0.27,-10.56l0.0075,-1.5c3.40992,-3.2448 7.69812,-10.09302 9.165,-16.4175c2.5344,-1.35168 5.63322,-4.59186 6.5625,-12.3525c0.46464,-3.85152 -0.6315,-6.83436 -2.1675,-8.835c2.0736,-7.1232 6.19938,-25.15596 -1.0275,-36.795c-3.05664,-4.91904 -7.66914,-8.02254 -13.7325,-9.2475c-3.40608,-4.21632 -9.83358,-6.5175 -18.4275,-6.5175c-13.05984,0.24192 -22.63392,4.24206 -28.44,11.8875c-6.84672,9.024 -8.14044,22.65828 -3.855,40.545c-1.58592,2.00064 -2.72982,5.02668 -2.2575,8.955c0.93312,7.76064 4.0206,11.00082 6.555,12.3525c1.46688,6.33216 5.75124,13.1802 9.165,16.425l0.0075,1.4625c0.03072,3.552 0.06024,6.63846 -0.27,10.5975c-2.10432,4.63104 -9.71154,7.31724 -17.7525,10.155c-6.71576,2.37145 -14.21242,5.02641 -20.3025,9.4125c-14.27502,-14.54321 -23.0925,-34.46313 -23.0925,-56.4825c0,-44.58172 36.05828,-80.64 80.64,-80.64z"
      })))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        id: "menu-mobile",
        className: this.state.burgerMenuOpen ? "display-on" : null
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "overlay",
        onClick: function onClick() {
          return _this2.setState({
            burgerMenuOpen: false
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "sidebar-nav"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "smenu"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "sitem"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "stitle"
      }, "Home"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/OrderForm"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "sitem"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "stitle"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", null, "Order our service now!")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/WhatIsFamilyHelper"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "sitem"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "stitle"
      }, "What is Family Helper"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/HowWeHelpYou"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "sitem"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "stitle"
      }, "How We Could Help You"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/ExcellentCompanionshipServices"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "sitem"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "stitle"
      }, "Excellent Companionship Services"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/HowItWorks"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "sitem"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "stitle"
      }, "How It Works"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/WhyFamilyHelper"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "sitem"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "stitle"
      }, "Why Family Helper"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/CustomerComments"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "sitem"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "stitle"
      }, "Customer Comments About Our Services"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/Pricing"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "sitem"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "stitle"
      }, "Pricing"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/ContactUs"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "sitem"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "stitle"
      }, "Contact Us"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/AboutUs"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "sitem"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "stitle"
      }, "About Us"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/FrequentlyAskQuestions"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "sitem"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "stitle"
      }, "FAQ"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/TermsAndConditions"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "sitem"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "stitle"
      }, "Terms And Conditions")))))), this.props.children, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        className: "footer"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "copyright"
      }, "\xA9 2019 Family Helper Sdn Bhd"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "info"
      }, "Family Helper\xAE The safer way to take care of your elderly\u2122")));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/areas.js":
/*!*****************************!*\
  !*** ./components/areas.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var areas = {
  klangValley: [{
    name: 'Cheras',
    select: true
  }, {
    name: 'Ampang',
    select: true
  }, {
    name: 'Sri Petaling',
    select: true
  }, {
    name: 'Kuchai Lama',
    select: true
  }, {
    name: 'Petaling Jaya',
    select: false
  }, {
    name: 'Subang Jaya',
    select: false
  }, {
    name: 'Damansara',
    select: false
  }, {
    name: 'Kepong',
    select: false
  }, {
    name: 'Wangsa Maju',
    select: false
  }, {
    name: 'Kajang',
    select: false
  }, {
    name: 'Serdang',
    select: false
  }, {
    name: 'Puchong',
    select: false
  }, {
    name: 'Brickfield',
    select: false
  }, {
    name: 'Mont Kiara',
    select: false
  }, {
    name: 'Shah Alam',
    select: false
  }, {
    name: 'Klang',
    select: false
  }, {
    name: 'Kota Kemumting',
    select: false
  }, {
    name: 'Putrajaya',
    select: false
  }, {
    name: 'Bangi',
    select: false
  }, {
    name: 'Selayang',
    select: false
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (areas);

/***/ }),

/***/ "./components/items.js":
/*!*****************************!*\
  !*** ./components/items.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var services = {
  hourStart: 6,
  hourEnd: 20,
  items: [// setting all the services contents
  {
    service: 'DoctorAppointment',
    title: 'Doctor Appointment',
    stitle: 'Doctor Appointment',
    icon: 'stethoscope.png',
    main: 'You or your senior have a doctor appointment, children are busy with job works, no worry, contact us, our companion people will pick you from your house, send you to destination hospital or clinic, accompany you in doctor room until appointment finished, send you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'stethoscope-100.png',
      text: 'Drives you to clinic or hospital'
    }, {
      icon: 'machine-100.png',
      text: 'Accompany you in doctor room'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // DoctorAppointment
  {
    service: 'GroceryShopping',
    title: 'Grocery Shopping',
    stitle: 'Grocery Shopping',
    icon: 'ingredients.png',
    main: 'You or your loved one want to buy some grocery items for daily living, no transport, call us, we can assit you. We pick you from your home, drives you to shopping store, carry your plastic bag, accompany you do purchasing, drives you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'ingredients-100.png',
      text: 'Drives you to grocery store'
    }, {
      icon: 'shopping-bag-100.png',
      text: 'Carry bag for you'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // GroceryShopping    
  {
    service: 'RehabililationCenter',
    title: 'Physiotherapy Treatment',
    stitle: 'Physiotherapy Treatment',
    icon: 'physical-therapy.png',
    main: 'You or your senior have regular treatment at rehabilitation centre, fear of trouble working children, no problem, contact us, we deliver you ti the destination centre. We pick you to from your home, drive you to the rehabilitation center, accompany you until treatment finished, send you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'physical-therapy-100.png',
      text: 'Drives you to rehabilitation centre'
    }, {
      icon: 'machine-100.png',
      text: 'Accompany at rehabilitation centre'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // RehabilationCenter 
  {
    service: 'VisitRelativeorFriend',
    title: 'Visit Relative or Friend',
    stitle: 'Relative Visits',
    icon: 'meeting.png',
    main: 'You or your loved one want to meet relative or friend having chatting,children\'s are busy,contact us. We pick you from home ,drives you to destination appointment,wait and accompany you  until chatting finished,send you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'meeting-100.png',
      text: 'Drives you to destination house'
    }, {
      icon: 'machine-100.png',
      text: 'Accompany you until chatting finish'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // VisitRelativeorFriend  
  {
    service: 'DialysisCentre',
    title: 'Dialysis Centre',
    stitle: 'Dialysis Centre',
    icon: 'dialysis-machine.png',
    main: 'You or your senior having regular treatment at dialsyse centre,nobody drives,contact us. Our companion person pick you  from your home,drives your to dialsyse centre,accompany you in centre room until appointment finished,send you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'dialysis-100.png',
      text: 'Drives you to dialysis centre'
    }, {
      icon: 'machine-100.png',
      text: 'Wait and accompany at dialysis centre'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // DialysisCentre   
  {
    service: 'CityTour',
    title: 'City Tour',
    stitle: 'City Tour',
    icon: 'city.png',
    main: 'You or your senior want have a trip tour at k.L centre attraction destination,call us,we can assist and drives you ,no worry. We pick you from your home,drives you to the destination,accompany you enjoyed city beautiful scene,send you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'city-100.png',
      text: 'Drives you to destination'
    }, {
      icon: 'guardian-100.png',
      text: 'Accompany you walk around city'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // CityTour     
  {
    service: 'TachiPractising',
    title: 'Tachi Practising',
    stitle: 'Tachi Practising',
    icon: 'functional-training.png',
    main: 'You or your senior having regular practising tachi  with friend at Park garden,children\'s are busy,contact us. We pick you from home,drives you to garden park or centre,wait until your training finished,send you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'warm-up-100.png',
      text: 'Drives you to garden park'
    }, {
      icon: 'machine-100.png',
      text: 'Wait until training finished'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // TachiPractising 
  {
    service: 'RunErrandsWork',
    title: 'Run Errands Work',
    stitle: 'Errands Service',
    icon: 'front-desk.png',
    main: 'Doing errands work in bank or government department are lackadaisical and headache ,let our companion person helps you or your senior ,contact us. We pick you from hi home,drives you to destination,assists you solved your work,send you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'front-desk-100.png',
      text: 'Drives you to destination'
    }, {
      icon: 'ticket-purchase-100.png',
      text: 'Handling errand work for you'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // RunErrandsWork     
  {
    service: 'WelcomeRelativeorFriend',
    title: 'Welcome Relative or Friend',
    stitle: 'Welcome Friends',
    icon: 'airplane-landing.png',
    main: 'Welcome relative , friend from outstation or oversea,no transport and children\'s busy work job,no worry ,call us. We can send you to arrival hall,wait and welcome your lovely guests ,and send you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'airplane-landing-100.png',
      text: 'Drives you to arrival hall'
    }, {
      icon: 'conference-100.png',
      text: 'Wait, welcome your relative or friend'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // WelcomeRelativeorFriend
  {
    service: 'SingingorDancingTraining',
    title: 'Singing or Dancing Training',
    stitle: 'Singing/Dancing',
    icon: 'choir.png',
    main: 'You or your senior having regular singing or dancing training,no body drives,call us. We pick you from your home ,drives you to training centre,wait until your training finished,send you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'choir-100.png',
      text: 'Drives you to training centre'
    }, {
      icon: 'machine-100.png',
      text: 'Wait until you training finished'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // SingingorDancingTraining
  {
    service: 'Saloon',
    title: 'Saloon',
    icon: 'barbershop.png',
    stitle: 'Saloon',
    main: 'You or your loved one want have haircut ,contact us,we can drives you to the saloon centre,accompany you until your haircut finished ,send you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'barbershop-100.png',
      text: 'Drives you to saloon centre'
    }, {
      icon: 'barber-chair-100.png',
      text: 'Wait until haircut finished'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // Saloon
  {
    service: 'AttendWeddingCeremony',
    title: 'Attend wedding ceremony',
    stitle: 'Wedding Ceremony',
    icon: 'newlyweds.png',
    main: 'You received wedding invitation,and like to attend the ceremony,but nobody drives,contact us,we can assist you. We pick you from home,drives you to the ballroom ,wait until you finished enjoyed delicious food,send you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'wedding-100.png',
      text: 'Drives you to the balloom'
    }, {
      icon: 'machine-100.png',
      text: 'Wait until wedding ceremony finished'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // AttendWeddingCeremony
  {
    service: 'VisitFriendRelativeatHospital',
    title: 'Visit Friend/Relative at Hospital',
    stitle: 'Patient Visit',
    icon: 'being-sick.png',
    main: 'You like visit patient friend/relative at hospital,but children\'s not allow drives yourself ,contact us. We pick you from home,drives you to hospital,wait and accompany until your time visit finished ,send you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'hospital-3-100.png',
      text: 'Drives you to hospital'
    }, {
      icon: 'being-sick-100.png',
      text: 'Meet patient relative or friend'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // VisitFriendRelativeatHospital
  {
    service: 'HavingMealatRestaurant',
    title: 'Having meal at restaurant',
    stitle: 'Having Meal',
    icon: 'restaurant.png',
    main: 'You or your loved one accept invitation having meal at restaurant,children\'s busy with job work,no worry ,give us a call. We pick you from home,drives you to restaurant ,wait until you finished meal, send you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'restaurant-100.png',
      text: 'Drives you to restaurant'
    }, {
      icon: 'restaurant-table-100.png',
      text: 'Wait until you finished meal'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // HavingMealatRestaurant
  {
    service: 'LakeMorningWalk',
    title: 'Lake/morning walk',
    stitle: 'Lake Walking',
    icon: 'lake.png',
    main: 'You or your senior like have morning walk at Park or lake,fear of safety ,call us,we can dispatch someone to accompany you. Pick you from your home,drives you to destination lake or park,accompany until you finished morning walk,send you back home. ',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'lake-100.png',
      text: 'Drives you to lake park'
    }, {
      icon: 'walking-100.png',
      text: 'Accompany until your morning walk finished'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // LakeMorningWalk
  {
    service: 'WatchMovie',
    title: 'Watch Movie',
    stitle: 'Watch Movie',
    icon: 'movie-projector.png',
    main: 'You or your senior want have a movie,fear of loneliness and no transport ,contact us,our companion person can assist you. Pick you from your home,send you to cinema , queued for ticket,food and beverage ,accompany you enjoyed movie show,drives you back home. ',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'star-wars-100.png',
      text: 'Drives you to cinema'
    }, {
      icon: 'occupied-theatre-seat-100.png',
      text: 'Accompany enjoy the movie show'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // WatchMovie
  {
    service: 'ReligiousCharityActivities',
    title: 'Religious/charity activities',
    stitle: 'Religious Activities',
    icon: 'contemporary-christian-music.png',
    main: 'You or your senior participate in religious or charity activities,children\'s not free, no worry, contact us.We pick you from home, drives you to worship place or event charity, wait until your activities finished, send you back home. ',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'welfare-100.png',
      text: 'Drives you attend charity activities or worship place'
    }, {
      icon: 'machine-100.png',
      text: 'Wait until you activities finished'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // ReligiousCharityActivities
  {
    service: 'MassageCentre',
    title: 'Massage Centre',
    stitle: 'Massage Centre',
    icon: 'massage.png',
    main: 'You or your loved one book for body massage,fear of lost way home and risk driving alone,no problem,contact us. Our companion person pick you from home,drives you to massage centre,accompany you until appointment finished ,send you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'massage-100.png',
      text: 'Drive you to massage centre'
    }, {
      icon: 'machine-100.png',
      text: 'Wait until appointment finished'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // MassageCentre
  {
    service: 'MarketWalk',
    title: 'Market Walk',
    stitle: 'Market Walk',
    icon: 'fish.png',
    main: 'You or your loved one like to buy some food items for daily living at market, contact us. We pick you from home,drives you to market,carry basket for you,accompany until you finished doing purchases, send you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'fish-100.png',
      text: 'Drives you to market'
    }, {
      icon: 'shopping-bag-100.png',
      text: 'Carry basket for you'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // MarketWalk
  {
    service: 'AttendFuneralFunction',
    title: 'Attend Funeral Function',
    stitle: 'Funeral House',
    icon: 'pray.png',
    main: 'You or your senior like to attend funeral function relative or friend,children\'s are outstation of business or busy, no worry, call us.Pick you from your home, drives you to decease house, wait until you finished condolence respect of decease, send you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'pray-100.png',
      text: 'Drives you to decease house'
    }, {
      icon: 'machine-100.png',
      text: 'Wait until condolence time finished'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // AttendFuneralFunction
  {
    service: 'ReunionwithFriendRelative',
    title: 'Reunion with Friend/Relative',
    stitle: 'Friends Reunion',
    icon: 'groups.png',
    main: 'You or your loved one accept invitation having gathering reunion ,children\'s busy with work job, contact us.We drives you to meet your relatives or friends, wait until your reunion time finished, send you back home. ',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'user-groups-100.png',
      text: 'Drives you to re-union with relative or friend'
    }, {
      icon: 'machine-100.png',
      text: 'Wait until your appointment finished'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // ReunionwithFriendRelative
  {
    service: 'VisitOldFolksHouse',
    title: 'Visit Old Folks House',
    stitle: 'Old Folk Home',
    icon: 'men-age-group-6.png',
    main: 'You or your senior like visit old folks house meet old friend or relative ,contact us ,our companion person can helps you. We pick you from home,drives you to old folks house,wait  and accompany until your appointment time  finished,send you back home. ',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'grandfather-100.png',
      text: 'Drives you to old folk house'
    }, {
      icon: 'people-working-together-100.png',
      text: 'Wait until you chatting finished'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // VisitOldFolksHouse
  {
    service: 'AcupunctureTreatment',
    title: 'Acupuncture Treatment',
    stitle: 'Acupuncture',
    icon: 'neck-and-shoulder-massage-area.png',
    main: 'You or your loved one have regular acupuncture treatment,contact us,we can assist you. We pick you from home ,drives you to treatment  centre,wait and accompany until your appointment finished,send you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'neck-and-shoulder-massage-area-100.png',
      text: 'Drives you to acupuncture centre'
    }, {
      icon: 'machine-100.png',
      text: 'Wait until your appointment finished'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // AcupunctureTreatment
  {
    service: 'OutdoorHiking',
    title: 'Outdoor Hiking',
    stitle: 'Outdoor Hiking',
    icon: 'trekking.png',
    main: 'You or loved one like doing outdoor hiking,fear  loneliness and risk of life,contact us,we can assist you. Pick you from home,drives you to destination hiking,doing hiking together with you, send you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'trekking-100.png',
      text: 'Drives you to hiking'
    }, {
      icon: 'machine-100.png',
      text: 'Accompany you together'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // OutdoorHiking
  {
    service: 'SportsGame',
    title: 'Sports Game',
    stitle: 'Sports Game',
    icon: 'badminton.png',
    main: 'You or your senior like doing indoor/outdoor sports activities,children\'s busy with work job,call us, we can helps you. Pick you from home, drives you to sport centre destination, wait until you finished exercise training,send you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'badminton-100.png',
      text: 'Drives you to sports game center'
    }, {
      icon: 'machine-100.png',
      text: 'Wait until you finished exercise'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // SportsGame
  {
    service: 'Breakfast',
    title: 'Breakfast',
    stitle: 'Breakfast',
    icon: 'cafe.png',
    main: 'Having breakfast with friends is fun, need our companionship service?  Contact us. We pick you from home, drives you meet your friends at restaurant, wait until your breakfast finished, send you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'cafe-100.png',
      text: 'Drives you to restaurant'
    }, {
      icon: 'machine-100.png',
      text: 'Wait until you finished breakfast'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // Breakfast
  {
    service: 'AttendCourse',
    title: 'Attend Course',
    stitle: 'Attend Course',
    icon: 'classroom.png',
    main: 'Want attend courses at tuition centre upgrade knowledge, family member busy with business, need our assistant? Contact us. Pick you from home, drives you to the learning center, wait until your study course finished, send you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'classroom-100.png',
      text: 'Drives you to learning center'
    }, {
      icon: 'machine-100.png',
      text: 'Wait until your course finished'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // AttendCourse        
  {
    service: 'KaraokeEntertainment',
    title: 'Karaoke Entertainment',
    stitle: 'Karaoke',
    icon: 'micro.png',
    main: 'you or your loved one like enjoyed song singing at karaoke room, children\'s are busy,no worry,contact us. We pick you from home,drives you to the entertainment center,accompany and with you until your happy hours finished,send you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'micro-100.png',
      text: 'Drives you to entertainment center'
    }, {
      icon: 'machine-100.png',
      text: 'Wait until you finished song singing'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }, // KaraokeEntertainment
  {
    service: 'OtherService',
    title: 'Other Service',
    stitle: 'Other Service',
    main: 'You and your senior want to go some place, children are busy with job works, no problem, call us, our companion people will pick you from your house, send you to the destination and wait until your appointment finished, send you back home.',
    details: [{
      icon: 'people-in-car-side.png',
      text: 'We pick you from home'
    }, {
      icon: 'city-100.png',
      text: 'Drives you to the place'
    }, {
      icon: 'machine-100.png',
      text: 'Wait until you finished the task'
    }, {
      icon: 'home-100.png',
      text: 'Send you back home'
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (services);

/***/ }),

/***/ "./components/prices.js":
/*!******************************!*\
  !*** ./components/prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var prices = {
  common: {
    periods: [{
      price: 150,
      hour: 3
    }, {
      price: 175,
      hour: 4
    }, {
      price: 195,
      hour: 5
    }],
    expressFee: 50,
    expressPeriod: 7
  }
};
/* harmony default export */ __webpack_exports__["default"] = (prices);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");



function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false;
  if (_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map["default"]();
var IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    observer.unobserve(el);
    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  (0, _inherits2["default"])(Link, _react$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2["default"])(this, Link);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Link).apply(this, arguments));

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      })["catch"](function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.cleanUpListeners = function () {};
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners = listenToIntersections(ref, function () {
          _this2.prefetch();
        });
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router["default"].prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          return _this3.handleRef(el);
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) {}

      return _react["default"].cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
    as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
    prefetch: _propTypes["default"].bool,
    replace: _propTypes["default"].bool,
    shallow: _propTypes["default"].bool,
    passHref: _propTypes["default"].bool,
    scroll: _propTypes["default"].bool,
    children: _propTypes["default"].oneOfType([_propTypes["default"].element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _construct2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/construct */ "./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.useRequest = useRequest;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _requestContext = __webpack_require__(/*! next-server/dist/lib/request-context */ "next-server/dist/lib/request-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty["default"])(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty["default"])(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
}

function useRequest() {
  return _react["default"].useContext(_requestContext.RequestContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = (0, _construct2["default"])(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var _i = 0, _urlPropertyFields = urlPropertyFields; _i < _urlPropertyFields.length; _i++) {
    var property = _urlPropertyFields[_i];

    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2["default"])({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2["default"].events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty["default"])(instance, field, {
      get: function get() {
        return _router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react$default$Compon) {
    (0, _inherits2["default"])(WithRouteWrapper, _react$default$Compon);

    function WithRouteWrapper() {
      var _this;

      (0, _classCallCheck2["default"])(this, WithRouteWrapper);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(WithRouteWrapper).apply(this, arguments));
      _this.context = void 0;
      return _this;
    }

    (0, _createClass2["default"])(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(ComposedComponent, (0, _extends2["default"])({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(_react["default"].Component);

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes["default"].object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/OrderForm.js":
/*!****************************!*\
  !*** ./pages/OrderForm.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_areas_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/areas.js */ "./components/areas.js");
/* harmony import */ var _components_items_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/items.js */ "./components/items.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_prices_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/prices.js */ "./components/prices.js");
/* harmony import */ var _scss_fonts_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../scss/fonts.scss */ "./scss/fonts.scss");
/* harmony import */ var _scss_fonts_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_scss_fonts_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_13__);















var submitForm = function submitForm(formData) {
  /* onSubmit event with input param, e.target (form) */
  var data = {
    form: {
      fullname: formData.fullname.value,
      email: formData.email.value,
      gender: formData.gender.value,
      age: formData.age.value,
      health: formData.health.value,
      healthstatus: formData.healthstatus.value,
      phone: formData.phone.value,
      // phonehome: formData.phonehome.value,
      fulladdress: formData.fulladdress.value,
      // urgent: formData.urgent.value,
      service: formData.service.value,
      otherservice: formData.otherservice.value,
      date: formData.date.value,
      period: formData.period.value,
      time: formData.time.value,
      area: formData.area.value,
      pickup: formData.pickup.value,
      visit: formData.visit.value,
      price: formData.price.value
    } // console.log(JSON.stringify(data, null, 2));

  };
  fetch('/api/order', {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(data)
  }).then(function (res) {
    // res.status === 200 ? this.setState({ submitted: true }) : ''
    if (res.status === 200) {
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push({
        pathname: '/OrderCompleted',
        query: data.form
      });
    } else throw new Error('Error: response status is ' + res.status);
  })["catch"](function (e) {
    console.error(e.message);
  });
};

var Order = function Order() {
  var initSelection = {
    services: _components_items_js__WEBPACK_IMPORTED_MODULE_9__["default"].items,
    areas: _components_areas_js__WEBPACK_IMPORTED_MODULE_8__["default"].klangValley,
    period: _components_prices_js__WEBPACK_IMPORTED_MODULE_11__["default"].common.periods[0].hour
  };

  var nextDayDate = function nextDayDate() {
    var today = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  var inputHealthStatus = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])();
  var inputOtherService = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(initSelection),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      selection = _useState2[0],
      setSelection = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(_components_prices_js__WEBPACK_IMPORTED_MODULE_11__["default"].common.periods[0].price),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      totalPrice = _useState4[0],
      setTotalPrice = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({}),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      queryInput = _useState6[0],
      setQueryInput = _useState6[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(_components_prices_js__WEBPACK_IMPORTED_MODULE_11__["default"].common.periods[0].hour),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      period = _useState8[0],
      setPeriod = _useState8[1];

  var h24To12 = function h24To12(h, m) {
    var minutesStr = ('0' + m).slice(-2); //slice method for extract last 2 digits

    return h === 0 || h === 24 ? "12:".concat(minutesStr, "am") : h === 12 ? "12:".concat(minutesStr, "pm") : h % 12 + ":".concat(minutesStr) + (h > 11 && h < 24 ? 'pm' : 'am');
  };

  var isExpress = function isExpress(dateString, days) {
    var date = new Date(dateString);
    var todayString = new Date().toISOString().split('T')[0];
    var today = new Date(todayString);
    var oneWeek = today.getTime() + days * 24 * 60 * 60 * 1000;
    return date.getTime() < oneWeek;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    // const subscription = props.source.subscribe();
    console.log(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(router.query));
    setQueryInput(router.query);
    return function () {// subscription.unsubscribe();
    };
  }, []);
  var title = 'Contact Page';
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", null, title)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
    className: "enquiry section"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "enq-header"
  }, "Request of Services"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "form-title"
  }, "Customer Details"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
    className: "enq-form",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      submitForm(e.target);
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
    type: "text",
    id: "fullname",
    name: "fullname",
    placeholder: "Full Name",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    placeholder: "Email",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
    style: {
      marginBottom: 0
    }
  }, "Gender: "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    style: {
      flex: 1
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
    type: "radio",
    id: "male",
    name: "gender",
    value: "male"
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
    htmlFor: "male"
  }, "Male")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    style: {
      flex: 1
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
    type: "radio",
    id: "female",
    name: "gender",
    value: "female"
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
    htmlFor: "female"
  }, "Female")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
    style: {
      marginBottom: 0
    }
  }, "Age: "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
    style: {
      marginTop: 0,
      marginBottom: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
    type: "radio",
    id: "age50below",
    name: "age",
    value: "49 or below"
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
    htmlFor: "age50below"
  }, "49 or below")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
    style: {
      marginTop: 0,
      marginBottom: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
    type: "radio",
    id: "age50-59",
    name: "age",
    value: "50 - 59"
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
    htmlFor: "age50-59"
  }, "50- 59")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
    style: {
      marginTop: 0,
      marginBottom: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
    type: "radio",
    id: "age60-69",
    name: "age",
    value: "60 - 69"
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
    htmlFor: "age60-69"
  }, "60 -69")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
    style: {
      marginTop: 0,
      marginBottom: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
    type: "radio",
    id: "age70-79",
    name: "age",
    value: "70 - 79"
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
    htmlFor: "age70-79"
  }, "70 - 79")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
    style: {
      marginTop: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
    type: "radio",
    id: "age80above",
    name: "age",
    value: "80 or above"
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
    htmlFor: "age80above"
  }, "80 or above")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
    style: {
      marginBottom: 0
    }
  }, "Health Status: "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    style: {
      flex: 1
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
    type: "radio",
    id: "health-good",
    name: "health",
    value: "good",
    defaultChecked: true,
    onChange: function onChange() {
      return inputHealthStatus.current.className = 'disp-none';
    }
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
    htmlFor: "health-good"
  }, "Good")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
    style: {
      flex: 1
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
    type: "radio",
    id: "health-poor",
    name: "health",
    value: "poor",
    onChange: function onChange() {
      return inputHealthStatus.current.className = 'disp-block';
    }
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
    htmlFor: "health-poor"
  }, "Poor")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
    type: "text",
    id: "healthstatus",
    name: "healthstatus",
    placeholder: "Elaborate health status",
    className: "disp-none",
    ref: inputHealthStatus
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
    type: "tel",
    id: "phone",
    name: "phone",
    placeholder: "Hand Phone Contact (for urgent used)",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("textarea", {
    id: "fulladdress",
    name: "fulladdress",
    placeholder: "Home Address",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "form-title"
  }, "Service Details"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
    id: "enq-service",
    name: "service",
    value: queryInput.service || "",
    className: "dropdown",
    required: true,
    onInput: function onInput(e) {
      console.log('e: ' + e.target.value);
      inputOtherService.current.className = e.target.value === 'OtherService' ? 'disp-block' : 'disp-none';
      setQueryInput(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, queryInput, {
        service: e.target.value
      }));
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
    value: ""
  }, "Select Service"), selection.services.map(function (service, i) {
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
      value: service.service,
      key: i
    }, service.title);
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
    type: "text",
    id: "other",
    name: "otherservice",
    className: "disp-none",
    placeholder: "Please specify other service",
    ref: inputOtherService
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
    type: "date",
    id: "date",
    name: "date",
    placeholder: "Date Service Needed",
    required: true,
    value: queryInput.date || "",
    min: nextDayDate(),
    onChange: function onChange(e) {
      setQueryInput(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, queryInput, {
        date: e.target.value
      }));
      /* set current date string from datepicker */

      var selected = _components_prices_js__WEBPACK_IMPORTED_MODULE_11__["default"].common.periods.find(function (p) {
        return p.hour === +selection.period;
      });
      /* get {price, period} object of selected period */

      var tp = selected.price + (isExpress(e.target.value, _components_prices_js__WEBPACK_IMPORTED_MODULE_11__["default"].common.expressPeriod) ? _components_prices_js__WEBPACK_IMPORTED_MODULE_11__["default"].common.expressFee : 0);
      /*  total price = sum of priod of selected period + express fee (if less than 7 days)*/

      setTotalPrice(tp);
      /* set total price */
    }
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, isExpress(queryInput.date, _components_prices_js__WEBPACK_IMPORTED_MODULE_11__["default"].common.expressPeriod) ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
    className: "mt-0"
  }, "Express service selected (RM", _components_prices_js__WEBPACK_IMPORTED_MODULE_11__["default"].common.expressFee, ".00)") : null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
    style: {
      marginBottom: 0
    }
  }, "Period: "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    onChange: function onChange(e) {
      var period = e.target.value;
      /* current select hour: '3','4' or '5' (string) (hours) */

      setSelection(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, selection, {
        period: period
      }));
      /* update period to state selection, {services,areas,period}  */

      var selected = _components_prices_js__WEBPACK_IMPORTED_MODULE_11__["default"].common.periods.find(function (p) {
        return p.hour === +period;
      });
      /* get selected {price,period} of current period */

      setTotalPrice(selected.price + (isExpress(queryInput.date, _components_prices_js__WEBPACK_IMPORTED_MODULE_11__["default"].common.expressPeriod) ? _components_prices_js__WEBPACK_IMPORTED_MODULE_11__["default"].common.expressFee : 0));
    }
    /* update total price = period price + express fee (if less than 7 days) */
    ,
    value: period
    /* value sync with onChange */

  }, _components_prices_js__WEBPACK_IMPORTED_MODULE_11__["default"].common.periods.map(function (p, i) {
    return (
      /* loop prices.js object */
      react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "radio",
        id: 'period' + p.hour,
        name: "period",
        value: p.hour,
        defaultChecked: i === 0,
        required: true
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: 'period' + p.hour
      }, p.hour + ' Hours Services: Rm' + p.price + '.00'))
    );
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
    id: "enq-service",
    name: "time",
    required: true,
    value: queryInput.time || "",
    onChange: function onChange(e) {
      return setQueryInput(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, queryInput, {
        time: e.target.value
      }));
    },
    className: "dropdown"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
    value: ""
  }, "Select time period"), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(new Array(_components_items_js__WEBPACK_IMPORTED_MODULE_9__["default"].hourEnd - _components_items_js__WEBPACK_IMPORTED_MODULE_9__["default"].hourStart + 1)).map(function (_, i) {
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, i > 0 ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
      key: i - .5
    }, h24To12(_components_items_js__WEBPACK_IMPORTED_MODULE_9__["default"].hourStart + i - 1, 30), " - ", h24To12(_components_items_js__WEBPACK_IMPORTED_MODULE_9__["default"].hourStart + i - 1 + +selection.period, 30) + ' (' + selection.period + ' hours)') : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
      key: i
    }, h24To12(_components_items_js__WEBPACK_IMPORTED_MODULE_9__["default"].hourStart + i, 0), " - ", h24To12(_components_items_js__WEBPACK_IMPORTED_MODULE_9__["default"].hourStart + i + +selection.period, 0) + ' (' + selection.period + ' hours)'));
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
    id: "enq-area",
    name: "area",
    required: true,
    value: queryInput.area || "",
    onChange: function onChange(e) {
      return setQueryInput(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, queryInput, {
        area: e.target.value
      }));
    },
    className: "dropdown"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
    value: ""
  }, "Select Area"), selection.areas.map(function (area, i) {
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
      value: area.name,
      disabled: !area.select,
      key: i
    }, area.name);
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("textarea", {
    id: "pickup",
    name: "pickup",
    placeholder: "Pickup Location (please specify if different from home address)"
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("textarea", {
    id: "visit",
    name: "visit",
    placeholder: "Visit Location",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
    type: "hidden",
    name: "price",
    value: 'RM' + totalPrice + '.00'
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, "Total Price: RM", totalPrice, ".00"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
    type: "submit",
    value: "Order"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Order);

/***/ }),

/***/ "./scss/fonts.scss":
/*!*************************!*\
  !*** ./scss/fonts.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/OrderForm.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/calvin/cv-works/coding/family-helper/pages/OrderForm.js */"./pages/OrderForm.js");


/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next-server/dist/lib/request-context":
/*!*******************************************************!*\
  !*** external "next-server/dist/lib/request-context" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=OrderForm.js.map