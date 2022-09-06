/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./example/compApiSample.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./example/compApiSample.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    var $Adaptive = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)('Adpative'); // console.log($Adaptive);

    var count = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    return {
      count: count
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./example/hello.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./example/hello.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      greeting: 'Example Vue component Hello World!',
      show: false,
      tablet: null
    };
  },
  mounted: function mounted() {
    // Example using the ref and custom registered media query (see the app.js)
    this.$Adaptive.registerElement(this.$refs.six, {
      addClass: {
        doggy: 'seven'
      }
    }); // can use this...

    this.$Adaptive.registerElement(this.$refs.callmeback, {
      execute: {
        mobile: function mobile(element) {
          console.log('This is a callback at mobile breakdown');
          console.log(element);
        }
      }
    }); // or

    this.$Adaptive["if"]('tablet', [this, 'tablet']); // or

    this.$Adaptive["if"]('tablet', function () {// code
    }); // or

    this.$Adaptive["if"]('tablet', this.changeText);
  },
  methods: {
    changeText: function changeText() {
      this.greeting = Math.floor(Math.random() * 10);
    },
    toggle: function toggle() {
      this.show = !this.show;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-components/teleport.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-components/teleport.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Adaptive Teleport
 * @module
 * @example <teleport-to target="" position=""></teleport-to>
 * @property {String|Object} target
 * @property {String} target
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TeleportTo',
  inheritAttrs: false,
  props: {
    target: {
      type: [String, Object],
      require: true
    },
    position: {
      type: String,
      "default": 'to',
      require: false
    }
  },
  setup: function setup(props) {
    var directive = "".concat(props.position, "(").concat(props.target, ")");
    return {
      directive: directive
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./example/compApiSample.vue?vue&type=template&id=05417592":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./example/compApiSample.vue?vue&type=template&id=05417592 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Composition Api component ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.count++;
    })
  }, "You clicked me " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.count) + " times.", 1
  /* TEXT */
  )]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./example/hello.vue?vue&type=template&id=c5766a62":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./example/hello.vue?vue&type=template&id=c5766a62 ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "sample"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "Start Hello component", -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Hola");

var _hoisted_4 = {
  "class": "greeting"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Using Directive inside Vue component");

var _hoisted_8 = [_hoisted_7];

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_10 = {
  ref: "six"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_12 = {
  key: 0,
  "class": "lazy"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Getting teleported (teleport) from the component to \"static Hello\"");

var _hoisted_16 = [_hoisted_15];

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_18 = {
  ref: "callmeback"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_20 = {
  key: 1
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "hitTarget"
}, null, -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, "End Hello component", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_teleport_to = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("teleport-to");

  var _directive_adaptive = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("adaptive");

  var _directive_teleport_to = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("teleport-to");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_teleport_to, {
    target: "#hitTarget"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.greeting), 1
  /* TEXT */
  ), _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.changeText && $options.changeText.apply($options, arguments);
    })
  }, "Test Vue component is working"), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Example of directive binding with Adaptive "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, _hoisted_8)), [[_directive_adaptive, {
    addClass: {
      desktop: 'cinco'
    }
  }]]), _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Example of use as a ref element with plugin style "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, "Using Ref element inside component for Vue Plugin mode and custom media query expression", 512
  /* NEED_PATCH */
  ), _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Example of a later insertion "), $data.show ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, "Using (observer) After load inside component")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.toggle && $options.toggle.apply($options, arguments);
    })
  }, "Show hide Lazy element"), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, _hoisted_16)), [[_directive_teleport_to, '#hello']]), _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, "Has a callback function at a defined breakdown", 512
  /* NEED_PATCH */
  ), _hoisted_19, $data.tablet ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_20, "Has a conditional IF tablet")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_21, _hoisted_22, _hoisted_23]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-components/teleport.vue?vue&type=template&id=01eac2f4":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-components/teleport.vue?vue&type=template&id=01eac2f4 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_teleport_to = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("teleport-to");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])), [[_directive_teleport_to, $setup.directive]]);
}

/***/ }),

/***/ "./src/Adaptive.js":
/*!*************************!*\
  !*** ./src/Adaptive.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ElementHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementHelper.js */ "./src/ElementHelper.js");
/* harmony import */ var _AdaptiveElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdaptiveElement.js */ "./src/AdaptiveElement.js");
/* harmony import */ var _Teleport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Teleport.js */ "./src/Teleport.js");
/* harmony import */ var _GetSettings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GetSettings.js */ "./src/GetSettings.js");
/* harmony import */ var _vue_components_teleport_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vue-components/teleport.vue */ "./src/vue-components/teleport.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
* //@author Antuan Suarez
    MIT License

    Copyright (c) [2022] [Antuan Suarez] https://github.com/knighttower

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/

/**
 * Inspired by http://wicky.nillia.ms/enquire.js
 */

/**
 * Import the Element DOM helper
 */
// -----------------------------------------




 // =========================================
// --> ADAPTIVE JS
// --------------------------

/**
 * Add/remove classes/styles or teleport an element
 * @module Adpative
 * @param {Object} root Window or parent object
 * @param {Object} factory The Class
 * @return {Object}
 * @example See example > app.js, example > hello.vue, test > index.html
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function (window) {
  'use strict';
  /**
   * Register this library into the window
   * @private
   * @return {Object}
   */

  var $this = {};
  var Adaptive = new Proxy($this, {
    get: function get(target, prop, receiver) {
      if (prop in target) {
        return target[prop];
      }
    }
  });
  /**
   * All the elements that will be part of the grid
   * @private
   */

  var domElements = {};
  /**
   * Holds memory of registered domobserver callbacks
   * @private
   */

  var domObserver = [];
  /**
   * Flag for isMounted
   * @private
   */

  var isMounted = false;
  /**
   * Flag for using Vue
   * @private
   */

  var useVue = false;
  /**
   * Flag for using Hybrid
   * @private
   */

  var isHybrid = false;
  /**
   * queries possible sizes
   * @private
   */

  var screens = {
    '320': [1, 379],
    '480': [380, 519],
    '520': [520, 599]
    /* up to : mobiles */
    ,
    '600': [600, 699]
    /* up to : mid-size-tables */
    ,
    '700': [700, 799]
    /* up to : tablets / ipad */
    ,
    '800': [800, 919]
    /* transition in between tablets and desktop */
    ,
    '920': [920, 999]
    /* from here on for desktops */
    ,
    '1000': [1000, 1199],
    '1200': [1200, 1439],
    '1440': [1440, 1599],
    '1600': [1600, 1700]
  };
  /**
   * break the 3 major device types
   * @private
   */

  var devices = {
    mobile: [1, 599]
    /* Actual phones */
    ,
    tablet: [600, 799]
    /* tablets in portrait or below */
    ,
    'odd-device': [800, 1023]
    /* small Laptops and Ipads in landscape */
    ,
    desktop: [1024, 1440]
    /* Most common resolutions below 1920 */

  };
  /**
   * break the 3 major device types
   * @private
   */

  var broadMediaQueries = {
    'non-desktop': [100, 1023],
    nondesktop: [100, 1023],
    fullscreen: [1441, 6000]
    /* Large monitos and fullscreen in 1920 res */

  };
  /**
   * To register additional custom queries add the key:[min, max]
   * @private
   */

  var customMinMaxQueries = {};
  /**
   * To register additional custom queries add the key:'Query Expression'
   * @private
   */

  var customExpressionQueries = {}; // =========================================
  // --> Utility
  // --------------------------

  /**
   * Get all the available queries
   * @private
   * @return {Object}
   */

  $this.getAllQueries = function () {
    return Object.assign({}, screens, devices, broadMediaQueries, customMinMaxQueries, customExpressionQueries);
  };

  $this.getMinMaxQueries = function () {
    return Object.assign({}, screens, devices, broadMediaQueries, customMinMaxQueries);
  };

  $this.getExpQueries = function () {
    return Object.assign({}, customExpressionQueries);
  };
  /**
   * Register an element
   * @param {String|Object} elementOrSelector
   * @param {Object} data Optional used directly to add the directives, but is mostly for VUe
   * @return {Void}
   */


  $this.registerElement = function (elementOrSelector, data) {
    var helper = new _ElementHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"](elementOrSelector);

    if (helper.isInDom()) {
      return registerThis(helper, data);
    } else {
      helper.whenInDom().then(function (element) {
        return registerThis(element, data);
      });
    }
  };
  /**
   * Register an element
   * @private
   * @param {String|Object} elementOrSelector
   * @param {Object} data Optional used directly to add the directives, but is mostly for VUe
   * @return {Void}
   */


  function registerThis(element, data) {
    // Register only unique non indexed elements
    if (!element.getAttribute('data-adaptive-id')) {
      var uniqueId = element.getHash();
      element.domElement.setAttribute('data-adaptive-id', uniqueId);
      domElements[uniqueId] = new _AdaptiveElement_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        adaptiveId: uniqueId,
        helper: element,
        domElement: element.domElement,
        xpath: element.getXpathTo(),
        settings: (0,_GetSettings_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data || element.getAttribute('data-adaptive')),
        useVue: useVue
      }, $this);
      return uniqueId;
    }
  }
  /**
   * Register A custom Query Min, Max
   * @param {String} id Identifier
   * @param {Number} min Number only, no units attached as it only handles pixels here
   * @param {Number} max Number only, no units attached as it only handles pixels here
   * @return {Void}
   */


  $this.addQueryMinMax = function (id, min, max) {
    if (!customMinMaxQueries[id]) {
      if (!min || !max) {
        throw new Exception('Min or Max must be passed (id, min, max)', 1);
      }

      customMinMaxQueries[id] = [min, max];
    }
  };
  /**
   * Register A custom Query Expression
   * @param {String} id Identifier
   * @param {String} query Media query, example "screen and (max-width: 500em) and (orientation: landscape)"
   * @param {Number} max Number only, no units attached as it only handles pixels here
   * @return {Void}
   */


  $this.addQueryExpression = function (id, query) {
    if (!customExpressionQueries[id]) {
      customExpressionQueries[id] = query;
    }
  };

  $this["if"] = function (breakdownId) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if ($this.getAllQueries()[breakdownId]) {
      var isFunction = callback && typeof callback === 'function';
      var isArray = callback && Array.isArray(callback);
      var observer = {};
      observer[breakdownId] = {
        breakdownId: breakdownId,
        match: false,
        isMatch: function isMatch() {
          this.match = true;
        },
        unMatch: function unMatch() {
          this.match = false;
        },
        "do": function _do() {
          if (this.match) {
            if (isFunction) {
              callback();
            }

            if (isArray) {
              callback[0][callback[1]] = true;
            }

            return true;
          }

          if (isArray) {
            callback[0][callback[1]] = false;
          }

          return false;
        }
      };
      QueryHandler.add(observer, function (o) {
        o.isMatch();
        o["do"]();
      }, function (o) {
        o.unMatch();
        o["do"]();
      }, $this);
      return observer[breakdownId];
    }
  };
  /**
   * Full reset, handle with care
   * @private
   * @return {Void}
   */


  $this.reset = function () {
    Object.keys(domElements).forEach(function (key) {
      return delete domElements[key];
    });
    DomObserver.cleanup();
    QueryHandler.reset();
    isMounted = false;
  }; // =========================================
  // --> DomReady and INIT
  // --------------------------

  /**
   * Real init for the app
   * @private
   */


  function _init() {
    isMounted = true;
    Array.from(document.querySelectorAll('[data-adaptive]:not([data-adaptive-id])')).forEach(function (element, index) {
      $this.registerElement(element);
    });
    QueryHandler.init();

    if (isHybrid) {
      new _Teleport_js__WEBPACK_IMPORTED_MODULE_2__["default"]().global();
    }
  }
  /**
   * Initialization, cam be called externally to reinitialized after dom loaded
   * @return {Void}
   */


  $this.init = function () {
    if (isMounted) {
      return false;
    }

    if (document.readyState === 'complete' || document.readyState !== 'loading' && !document.documentElement.doScroll) {
      return domIsReady();
    } else {
      // Use the handy event callback
      document.addEventListener('DOMContentLoaded', domIsReady); // A fallback to window.onload, that will always work

      window.addEventListener('load', domIsReady);
    }

    return;
  };
  /**
   * When ready trigger the initialization
   * @private
   */


  function domIsReady() {
    document.removeEventListener('DOMContentLoaded', domIsReady);
    window.removeEventListener('load', domIsReady);

    _init();

    return;
  }

  $this.useVue = function (Vue) {
    var hybrid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (hybrid) {
      isHybrid = true;
    }

    if (_typeof(Vue) === 'object' && typeof Vue.mixin === 'function') {
      useVue = true;
      var installer = {
        install: function install(app, options) {
          // For Options API
          app.config.globalProperties.$Adaptive = Adaptive; // For composition API

          app.provide('Adaptive', Adaptive);
        }
      };
      /**
       * Adaptive used as vue.$Adaptive
       * @private
       */

      Vue.use(installer);
      /**
       * Adaptive used as v-adaptive
       * @private
       */

      Vue.directive('adaptive', {
        mounted: function mounted(element, binding, vnode, prevVnode) {
          Adaptive.registerElement(element, binding.value);
        }
      });
      /**
       * Adaptive used as v-teleport-to
       * @private
       */

      Vue.directive('teleport-to', {
        mounted: function mounted(element, binding, vnode, prevVnode) {
          return new _Teleport_js__WEBPACK_IMPORTED_MODULE_2__["default"](element).beam(binding.value);
        }
      });
      Vue.component('teleport-to', _vue_components_teleport_vue__WEBPACK_IMPORTED_MODULE_4__["default"]);
      /**
       * Adaptive used for non Vue elements register with data-adaptive attr
       * Hybrid mode
       * @private
       */

      Vue.mixin({
        mounted: function mounted() {
          return Adaptive.init();
        }
      });
    }

    return Vue;
  };

  return window.Adaptive = Adaptive;
})(typeof window !== 'undefined' ? window : undefined));

/***/ }),

/***/ "./src/AdaptiveElement.js":
/*!********************************!*\
  !*** ./src/AdaptiveElement.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdaptiveElement)
/* harmony export */ });
/* harmony import */ var _Teleport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Teleport.js */ "./src/Teleport.js");
/* harmony import */ var _QueryHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryHandler.js */ "./src/QueryHandler.js");
/* harmony import */ var _QueryHandler_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_QueryHandler_js__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* @author Antuan Suarez
    MIT License

    Copyright (c) [2022] [Antuan Suarez] https://github.com/knighttower

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/
 // when it imports, it also registers itself as global


/**
 * @class Adds some extra functionality to interact with a DOM element
 * @param {Object} props
 * @param {Object} Adaptive Instance of
 * @return {Object}
 */

var AdaptiveElement = /*#__PURE__*/function () {
  /**
   * Constructor
   * @param {String|Object} selector
   * @return {Object}
   */
  function AdaptiveElement(props, Adaptive) {
    _classCallCheck(this, AdaptiveElement);

    this.props = props;
    this.Adaptive = Adaptive;

    for (var directive in props.settings) {
      // Matches the method name and passes the directives
      // Ex: this[addClass]({...})
      this[directive](props.settings[directive]);
    }
  }

  _createClass(AdaptiveElement, [{
    key: "addClass",
    value: function addClass(queries) {
      var _this = this;

      return _QueryHandler_js__WEBPACK_IMPORTED_MODULE_1___default().add(queries, function ($classes) {
        $classes = $classes.split(' ');
        $classes.forEach(function ($class) {
          _this.props.domElement.classList.add($class);
        });
        return;
      }, function ($classes) {
        $classes = $classes.split(' ');
        $classes.forEach(function ($class) {
          _this.props.domElement.classList.remove($class);
        });
        return;
      }, this.Adaptive);
    }
  }, {
    key: "removeClass",
    value: function removeClass(queries) {
      var _this2 = this;

      return _QueryHandler_js__WEBPACK_IMPORTED_MODULE_1___default().add(queries, function ($classes) {
        $classes = $classes.split(' ');
        $classes.forEach(function ($class) {
          _this2.props.domElement.classList.remove($class);
        });
        return;
      }, function ($classes) {
        $classes = $classes.split(' ');
        $classes.forEach(function ($class) {
          _this2.props.domElement.classList.add($class);
        });
        return;
      }, this.Adaptive);
    }
  }, {
    key: "addStyle",
    value: function addStyle(queries) {
      var _this3 = this;

      // Save the original style in memory to not discard them
      this.props.originalStyle = this.props.domElement.getAttribute('style');
      return _QueryHandler_js__WEBPACK_IMPORTED_MODULE_1___default().add(queries, function ($styles) {
        return _this3.props.domElement.style.cssText += $styles;
      }, function () {
        return _this3.props.domElement.style.cssText = _this3.props.originalStyle;
      }, this.Adaptive);
    }
  }, {
    key: "teleport",
    value: function teleport(queries) {
      var $element = new _Teleport_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.props);
      return _QueryHandler_js__WEBPACK_IMPORTED_MODULE_1___default().add(queries, function ($directive) {
        return $element.beam($directive);
      }, function () {
        $element.back();
        return $element.cancel();
      }, this.Adaptive);
    }
  }, {
    key: "execute",
    value: function execute(queries) {
      var $element = this;
      var attrs = {
        adaptiveId: $element.props.uniqueId,
        helper: $element.props.helper,
        domElement: $element.props.domElement,
        xpath: $element.props.xpath
      };
      return _QueryHandler_js__WEBPACK_IMPORTED_MODULE_1___default().add(queries, function ($callback) {
        if ($callback && typeof $callback === 'function') {
          return $callback(attrs);
        }
      }, function ($callback) {
        if ($callback && typeof $callback === 'function') {
          return $callback(attrs);
        }
      }, this.Adaptive);
    }
  }]);

  return AdaptiveElement;
}();



/***/ }),

/***/ "./src/DomObserver.js":
/*!****************************!*\
  !*** ./src/DomObserver.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
* @author Antuan Suarez
    MIT License

    Copyright (c) [2022] [Antuan Suarez] https://github.com/knighttower

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/

/**
 * @class Detect DOM changes
 * @param {window} selector
 * @param {Funtion}
 * @return DomObserver
 */
(function (root, factory) {
  'use strict';

  if (( false ? 0 : _typeof(module)) === 'object' && ( false ? 0 : _typeof(exports)) === 'object') {
    module.exports = factory(root);
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof window !== 'undefined' ? window : this, function (window) {
  'use strict';
  /**
   * Register this library into the window
   * @private
   * @return {Object}
   */

  var $this = window.DomObserver = window.DomObserver || {};
  /**
   * Holds memory of registered functions
   * @private
   */

  var executeOnNodeChanged = {};
  /**
   * When node change
   * @param {String} id
   * @param {Function} callback Callback when any node changes/ add/deleted/modified
   * @return {Void}
   */

  $this.addOnNodeChange = function (id, callback) {
    if (callback) {
      executeOnNodeChanged[id] = callback;
    }

    return;
  };
  /**
   * Remove from node change
   * @param {String} id
   * @return {Void}
   */


  $this.removeOnNodeChange = function (id) {
    if (id) {
      delete executeOnNodeChanged[id];
    }

    return;
  };
  /**
   * Deep cleanup
   * @return {Void}
   */


  $this.cleanup = function () {
    Object.keys(executeOnNodeChanged).forEach(function (key) {
      return delete executeOnNodeChanged[key];
    });
    return;
  };
  /**
   * Obsever
   * @private
   * @return {MutationObserver}
   */


  (function () {
    var callback = function callback(mutationList, observer) {
      var _iterator = _createForOfIteratorHelper(mutationList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var mutation = _step.value;

          if (mutation.type === 'childList') {
            for (var id in executeOnNodeChanged) {
              executeOnNodeChanged[id]();
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };

    var config = {
      childList: true,
      subtree: true
    };
    var observer = new MutationObserver(callback);
    return observer.observe(document.body, config);
  })();

  return $this;
});

/***/ }),

/***/ "./src/ElementHelper.js":
/*!******************************!*\
  !*** ./src/ElementHelper.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ElementHelper)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* @author Antuan Suarez
    MIT License

    Copyright (c) [2022] [Antuan Suarez] https://github.com/knighttower

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/

/**
 * @class Adds some extra functionality to interact with a DOM element
 * @param {String|Object} selector
 * @return {Object}
 */
var ElementHelper = /*#__PURE__*/function () {
  /**
   * Constructor
   * @param {String|Object} selector
   * @return {Object}
   */
  function ElementHelper(selector) {
    _classCallCheck(this, ElementHelper);

    this.selector = selector;

    if (_typeof(selector) === 'object') {
      this.domElement = selector;
    } else if (String(selector).includes('//')) {
      this.domElement = this.getElementByXpath(selector);
    } else {
      this.domElement = document.querySelector(selector);
    }
  } // =========================================
  // --> Public
  // --------------------------

  /**
   * Check if the element exists or is visible. It will keep querying
   * @return {Boolean}
   */


  _createClass(ElementHelper, [{
    key: "isInDom",
    value: function isInDom() {
      var _this$domElement;

      if (!((_this$domElement = this.domElement) !== null && _this$domElement !== void 0 && _this$domElement.outerHTML)) {
        return false;
      }

      return true;
    }
    /**
     * Wait for element exists or is visible. It will keep querying
     * @return {Promise}
     */

  }, {
    key: "whenInDom",
    value: function whenInDom() {
      var $this = this;
      var callbackId = Date.now() + Math.floor(Math.random() * 1000);
      return new Promise(function (resolveThis) {
        if (!$this.isInDom()) {
          DomObserver.addOnNodeChange(callbackId, function () {
            var element = new ElementHelper($this.selector);

            if (element.isInDom()) {
              $this = element;
              resolveThis($this);
              DomObserver.removeOnNodeChange(callbackId);
            }
          });
        } else {
          resolveThis($this);
        }
      });
    }
    /**
     * Find element by Xpath string
     * @param {String} xpath
     * @example getElementByXpath("//html[1]/body[1]/div[1]")
     * @return {Object} DOM element
     */

  }, {
    key: "getElementByXpath",
    value: function getElementByXpath(xpath) {
      return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
    /**
     * Get the element xpath string
     * @author Based on https://stackoverflow.com/questions/2631820/how-do-i-ensure-saved-click-coordinates-can-be-reload-to-the-same-place-even-if/2631931#2631931
     * @return {String}
     */

  }, {
    key: "getXpathTo",
    value: function getXpathTo() {
      var element = this.domElement;

      if (element.id) {
        return "//*[@id='" + element.id + "']";
      }

      if (element === document.body) {
        return '//' + element.tagName;
      }

      var ix = 0;
      var siblings = element.parentNode.childNodes;

      for (var i = 0; i < siblings.length; i++) {
        var sibling = siblings[i];

        if (sibling === element) {
          return new ElementHelper(element.parentNode).getXpathTo() + '/' + element.tagName + '[' + (ix + 1) + ']';
        }

        if (sibling.nodeType === 1 && sibling.tagName === element.tagName) {
          ix++;
        }
      }
    }
    /**
     * Get the element attribute, but parse it if it is an object or array
     * @param {String} attr Atrribute name
     * @return {String|Array|Object|Null}
     */

  }, {
    key: "getAttribute",
    value: function getAttribute(attr) {
      var attrData = this.domElement.getAttribute(attr);
      return attrData ? attrData : null;
    }
    /**
     * Create a unique has for the element derived from its xpath
     * @author Based on https://www.geeksforgeeks.org/how-to-create-hash-from-string-in-javascript/
     * @return {String}
     */

  }, {
    key: "getHash",
    value: function getHash() {
      var string = String(this.getXpathTo());
      var hash = 0;

      if (string.length === 0) {
        return hash;
      }

      for (var i = 0; i < string.length; i++) {
        var _char = string.charCodeAt(i);

        hash = (hash << 5) - hash + _char;
        hash = hash & hash;
      }

      return hash;
    }
  }]);

  return ElementHelper;
}();
/**
 * Future
 * @private
 * @todo enhance to extend the prototype like https://stackoverflow.com/questions/779880/in-javascript-can-you-extend-the-dom
 */




/***/ }),

/***/ "./src/GetSettings.js":
/*!****************************!*\
  !*** ./src/GetSettings.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
* @author Antuan Suarez
    MIT License

    Copyright (c) [2022] [Antuan Suarez] https://github.com/knighttower

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/

/**
 * handles the following patterns to get an object from string attributes
 * // Matches the JSON objects as string: {'hello':{key:value}} OR {key:value}
 * // Matches the Array as string: [value, value] || ['value','value']
 * // Matches object-style strings: hello.tablet(...values) OR hello[expression](...values)
 * // Matches string ID or class: literals Id(#) or class (.). Note that in Vue it needs to be in quotes attr="'#theId'"
 * // Mathes simple directive function style: hello(#idOr.Class)
 * Note: all the above with the exception of the Id/class will be converted into actual objects
 */

/**
 * Handle getting the correct settings from the string attribute
 * @private
 * @param {String|Array|Object} settings
 * @return {Object|void|null}
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(settings) {
  if (!settings) {
    return null;
  }

  var values, breakDownId, directive, properties;

  var type = _typeof(settings); // Matches the JSON objects as string: {'hello':{key:value}} || {key:value}


  var regexObjectLike = /^\{((.|\n)*?)\:((.|\n)*?)\}/gm; // Matches the Array as string: [value, value] || ['value','value']

  var regexArrayLike = /^\[((.|\n)*?)\]$/gm; // Matches a multi-array string like [[value,value]],value]

  var regexMultiArrayString = /\[(\n|)(((.|\[)*)?)\](\,\n|)(((.|\])*)?)(\n|)\]/gm; // Matches object-style strings: hello.tablet(...values) | hello[expression](...values)

  var regexDotObjectString = /([a-zA-Z]+)\.(.*?)\(((.|\n)*?)\)/gm;
  var regexExObjectString = /([a-zA-Z]+)\[((.|\n)*?)\]\(((.|\n)*?)\)/gm; // Matches string ID or class: literals #... or ....

  var regexIdOrClass = /^(\.|\#)([a-zA-Z]+)/g; // Mathes simple directive function style: hello(#idOr.Class)

  var regexFunctionString = /^([a-zA-Z]+)(\()(\.|\#)(.*)(\))/g;

  if (type === 'object' || type === 'array') {
    return settings;
  } // Else if String


  if (settings.match(regexIdOrClass)) {
    return settings;
  }

  if (settings.match(regexFunctionString)) {
    directive = settings.split('(')[0].trim();
    values = getInBetween(settings, '(', ')');
    settings = {};
    settings[directive] = values;
    return settings;
  }

  if (settings.match(regexArrayLike)) {
    var start = /^\[/;
    var end = /\]$/;
    var keyProps = getInBetween(settings, start, end);
    keyProps = keyProps.split(','); // test if multi-array

    if (settings.match(regexMultiArrayString)) {
      keyProps = getMultiArray(settings);
    }

    keyProps.forEach(function (str) {
      var cleanStr = addQuotes(removeQuotes(str));
      settings = settings.replace(str, cleanStr);
    });
    return JSON.parse(fixQuotes(settings));
  }

  if (settings.match(regexObjectLike)) {
    var _keyProps = getInBetween(settings, '{', ':', true);

    _keyProps = _keyProps.concat(getInBetween(settings, ',', ':', true));

    _keyProps.forEach(function (str) {
      var cleanStr = addQuotes(removeQuotes(str));
      settings = settings.replace(str, cleanStr);
    });

    return JSON.parse(fixQuotes(settings));
  }

  if (settings.match(regexDotObjectString) || settings.match(regexExObjectString)) {
    var setObject = {};
    settings = settings.split('&&');
    settings.forEach(function (command) {
      command = command.trim();

      if (command.match(regexExObjectString)) {
        values = getInBetween(command, '](', ')');
        breakDownId = getInBetween(command, '[', ']');
        directive = command.split('[')[0].trim();
      } else {
        var _properties$;

        values = getInBetween(command, '(', ')');
        command = command.replace(getMatchBlock(command, '(', ')'), '');
        properties = command.split('.');
        directive = properties[0];
        breakDownId = properties[1];
        properties[2] = (_properties$ = properties[2]) !== null && _properties$ !== void 0 ? _properties$ : null;
      }

      values = values.split(',').map(function (cl) {
        return cl.trim();
      }).join(' ');

      if (!setObject[directive]) {
        setObject[directive] = {};
      }

      if (properties && properties[2]) {
        setObject[directive][breakDownId] = {};
        setObject[directive][breakDownId][properties[2]] = values;
      } else {
        setObject[directive][breakDownId] = values;
      }
    });
    return setObject;
  }
}

function getMultiArray(str) {
  var _Object$keys$length;

  var arrays = {};
  var innerArrayRegex = /(\[([^[]*?))\]/gm;
  var start = /^\[/;
  var end = /\]$/;
  str = getInBetween(str, start, end);
  var innerArrays = str.match(innerArrayRegex);

  if (innerArrays) {
    (function () {
      var i = 1;

      while (str.match(innerArrayRegex)) {
        str.match(innerArrayRegex).forEach(function (record, index) {
          var $index = "@".concat(i, "@").concat(index);
          arrays[$index] = record;
          str = str.replace(record, $index);
        });
        i++;
      }
    })();
  }

  str = str.split(',');
  var total = ((_Object$keys$length = Object.keys(arrays).length) !== null && _Object$keys$length !== void 0 ? _Object$keys$length : 1) * str.length;
  var loops = 0;

  while (Object.keys(arrays).length > 0) {
    var keys = Object.keys(arrays);
    var tmpStr = str;
    Object.keys(arrays).forEach(function (key) {
      var strArray = getInBetween(arrays[key], start, end).split(',');
      var replaced = findAndReplace(str, strArray, key);

      if (replaced) {
        str = replaced;
        delete arrays[key];
      }
    });

    if (loops > total) {
      throw new Error('Too many loops, the string passed is malformed' + str);
    }

    loops++;
  }

  return str;
}
/**
 * Recursively will loop in array to find the desired target
 * @private
 * @param {Array} arr
 * @param {Array|Object|String} value Replacer
 * @param {String} find The target (needle)
 * @return {Null|Array}
 */


function findAndReplace(arr, value, find) {
  var results = null;
  var tmpArray = arr;
  arr.forEach(function (prop, index) {
    if (Array.isArray(prop)) {
      var replaced = findAndReplace(prop, value, find);

      if (replaced) {
        tmpArray[index] = replaced;
        results = tmpArray;
      }
    }

    if (prop === find) {
      if (Array.isArray(value)) {
        value = value.map(function (p) {
          if (!Array.isArray(p)) {
            return p.trim();
          }

          return p;
        });
      }

      tmpArray[index] = value;
      results = tmpArray;
    }
  });
  return results;
}
/**
 * find a match in between two delimeters, either string or regex given, returns clean matches
 * @private
 * @param {String} str
 * @param {String|Regex} p1
 * @param {String|Regex} p2
 * @param {Boolean} all If it should return all matches or single one (default)
 * @return {String|Array|Null}
 */


function getInBetween(str, p1, p2) {
  var all = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (all) {
    var _getMatchBlock;

    var matches = [];
    var group = (_getMatchBlock = getMatchBlock(str, p1, p2, all)) !== null && _getMatchBlock !== void 0 ? _getMatchBlock : [];
    group.forEach(function (match) {
      matches.push(cleanStr(match, p1, p2));
    });
    return matches;
  } else {
    var _getMatchBlock2;

    str = (_getMatchBlock2 = getMatchBlock(str, p1, p2)) !== null && _getMatchBlock2 !== void 0 ? _getMatchBlock2 : str;
    return cleanStr(str, p1, p2);
  }
}
/**
 * Find math by delimeters returns raw matches
 * @private
 * @param {String} str
 * @param {String|Regex} p1
 * @param {String|Regex} p2
 * @param {Boolean} all If it should return all matches or single one (default)
 * @return {String|Array|Void}
 */


function getMatchBlock(str, p1, p2) {
  var all = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  p1 = setExpString(p1);
  p2 = setExpString(p2);
  var regex = new RegExp(setLookUpExp(p1, p2), 'gm');

  if (all) {
    return str.match(regex);
  } else {
    return str.match(regex)[0];
  }
}

function cleanStr(str, p1, p2) {
  return str.replace(new RegExp(setExpString(p1)), '').replace(new RegExp(setExpString(p2)), '').trim();
}
/**
 * Escape a regex
 * @private
 */


function setExpString(exp) {
  if (exp instanceof RegExp) {
    return exp;
  } else {
    return "\\".concat(exp.split('').join('\\'));
  }
}
/**
 * Regex builder
 * @private
 */


function setLookUpExp(p1, p2) {
  var p1IsRegex = p1 instanceof RegExp;
  var p2IsRegex = p2 instanceof RegExp;

  if (p1IsRegex || p2IsRegex) {
    if (p1IsRegex) {
      p1 = p1.source;
    }

    if (p2IsRegex) {
      p2 = p2.source;
    }
  }

  return "".concat(p1, "((.|\n)*?)").concat(p2);
}

function removeQuotes(str) {
  return str.replace(/'|"/g, '');
}

function fixQuotes(str) {
  return str.replace(/'/g, '"');
}

function addQuotes(str) {
  return "\"".concat(str, "\"");
}

/***/ }),

/***/ "./src/QueryHandler.js":
/*!*****************************!*\
  !*** ./src/QueryHandler.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
* @author Antuan Suarez
    MIT License

    Copyright (c) [2022] [Antuan Suarez] https://github.com/knighttower

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/
var _require = __webpack_require__(/*! vue */ "vue"),
    VueElement = _require.VueElement;
/**
 * @class Detect DOM changes
 * @param {window} selector
 * @param {Funtion}
 * @return QueryHandler
 */


(function (root, factory) {
  'use strict';

  if (( false ? 0 : _typeof(module)) === 'object' && ( false ? 0 : _typeof(exports)) === 'object') {
    module.exports = factory(root);
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof window !== 'undefined' ? window : this, function (window) {
  'use strict';
  /**
   * Query Handler Class Object
   * @private
   * @return {Object}
   */

  var $this = {};
  var QueryHandler = new Proxy($this, {
    get: function get(target, prop, receiver) {
      if (prop in target) {
        return target[prop];
      }
    }
  });
  /**
   * Holds memory of registered queries expressions
   * @private
   */

  var registeredQueries = {};
  /**
   * Holds memory of registered queries to match
   * @private
   */

  var domQueriesMatch = {};
  /**
   * Holds memory of registered queries to Unmatch
   * @private
   */

  var domQueriesUnMatch = {};
  /**
   * Flag
   * @private
   */

  var loaded = false; // =========================================
  // --> PUBLIC
  // --------------------------

  /**
   * Register a query
   * @param {Object} queries Media queries with breakdowns and directives
   * @param {Function} matchCallback Callback
   * @param {Function|Null} unMatchCallback Callback
   * @param {Object|Null} Adaptive When in use with Adaptive.js object
   * @return {Void}
   */

  $this.add = function (queries, matchCallback) {
    var unMatchCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var Adaptive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    for (var query in queries) {
      var _getPreset;

      // Values are the classes, styles, functions
      var values = queries[query]; // Set a preset if found or just the query in case is custom

      var queryExpression = (_getPreset = getPreset(query, Adaptive)) !== null && _getPreset !== void 0 ? _getPreset : query; // If it does not exists, add it as an array

      if (!Boolean(domQueriesMatch[queryExpression])) {
        domQueriesMatch[queryExpression] = [];
        domQueriesUnMatch[queryExpression] = [];
      }

      domQueriesMatch[queryExpression].push([matchCallback, values]);

      if (unMatchCallback) {
        domQueriesUnMatch[queryExpression].push([unMatchCallback, values]);
      }

      registerQueryListener(queryExpression);
    }
  };
  /**
   * Initialization of the class functionality
   * @return {Void}
   */


  $this.init = function () {
    loaded = true;
    Object.keys(domQueriesMatch).forEach(function (queryExpression) {
      // Listener for after initial load
      registerQueryListener(queryExpression); // Run the queries on load once

      singleRun(queryExpression);
    });
  };
  /**
   * Reset the whole object | warning
   * @return {Void}
   */


  $this.reset = function () {
    Object.keys(registeredQueries).forEach(function (queryExpression) {
      window.matchMedia(queryExpression).removeEventListener('change', registeredQueries[queryExpression]);
      delete registeredQueries[queryExpression];
    });
    Object.keys(domQueriesMatch).forEach(function (key) {
      return delete domQueriesMatch[key];
    });
    Object.keys(domQueriesUnMatch).forEach(function (key) {
      return delete domQueriesUnMatch[key];
    });
  }; // =========================================
  // --> PRIVATE
  // --------------------------


  function singleRun(queryExpression) {
    var mq = window.matchMedia(queryExpression);

    if (mq.matches) {
      domQueriesMatch[mq.media].forEach(function (callback) {
        return callback[0](callback[1]);
      });
    }
  }
  /**
   * Get the preset query values present in Adaptive object
   * @private
   */


  function getPreset(queryId) {
    var Adaptive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var presets = {
      q: null,
      // query min-max values preset
      e: null // custom expression preset

    }; // -----------------------------------------
    // when working with Adaptive.Js

    if (Adaptive) {
      var _presetQs$queryId, _presetEs$queryId;

      var presetQs = Adaptive.getMinMaxQueries();
      var presetEs = Adaptive.getExpQueries();
      presets.q = (_presetQs$queryId = presetQs[queryId]) !== null && _presetQs$queryId !== void 0 ? _presetQs$queryId : null;
      presets.e = (_presetEs$queryId = presetEs[queryId]) !== null && _presetEs$queryId !== void 0 ? _presetEs$queryId : null;

      if (!presets.q && !presets.e) {
        if (queryId.includes('|')) {
          var qs = queryId.split('|');
          var qs1 = qs[0];
          var qs2 = qs[1];

          if (presetQs[qs1] && presetQs[qs2]) {
            return buildExpression(presetQs[qs1], presetQs[qs2], true);
          }

          if (presetEs[qs1] && presetEs[qs2]) {
            return buildExpression(presetEs[qs1], presetEs[qs2], true, true);
          }
        }
      } else {
        // Write the correct expression for the preset min-max
        if (presets.q) {
          return buildExpression(presets.q[0], presets.q[1]);
        } // No need to build the expression as it already is


        if (presets.e) {
          return presets.e;
        }
      }
    }

    return null;
  }
  /**
   * @private
   */


  function buildExpression(q1, q2) {
    var isCompound = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var isExpression = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var templateQuery = '(min-width: $1px) and (max-width: $2px)';

    if (isCompound) {
      if (!isExpression) {
        q1 = templateQuery.replace('$1', q1[0]).replace('$2', q1[1]);
        q2 = templateQuery.replace('$1', q2[0]).replace('$2', q2[1]);
      }

      return "".concat(q1, ", ").concat(q2);
    }

    return templateQuery.replace('$1', q1).replace('$2', q2);
  }

  function registerQueryListener(queryExpression) {
    // If not already registered
    // This helps to avoid too many Listeners created
    if (!Boolean(registeredQueries[queryExpression])) {
      var matchQuery = window.matchMedia(queryExpression);

      var callback = function callback(mq) {
        if (!mq.matches) {
          domQueriesUnMatch[mq.media].forEach(function (callback) {
            return callback[0](callback[1]);
          });
        } else {
          domQueriesMatch[mq.media].forEach(function (callback) {
            return callback[0](callback[1]);
          });
        }
      };

      registeredQueries[queryExpression] = callback;
      return matchQuery.addEventListener('change', callback);
    } // For those added after all has been loaded


    if (loaded) {
      singleRun(queryExpression);
    }
  }

  return window.QueryHandler = QueryHandler;
});

/***/ }),

/***/ "./src/Teleport.js":
/*!*************************!*\
  !*** ./src/Teleport.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Teleport)
/* harmony export */ });
/* harmony import */ var _DomObserver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomObserver.js */ "./src/DomObserver.js");
/* harmony import */ var _DomObserver_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_DomObserver_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ElementHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElementHelper.js */ "./src/ElementHelper.js");
/* harmony import */ var _GetSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetSettings.js */ "./src/GetSettings.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* @author Antuan Suarez
    MIT License

    Copyright (c) [2022] [Antuan Suarez] https://github.com/knighttower

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/




var Teleport = /*#__PURE__*/function () {
  /**
   * Constructor
   * @param {String|Object} selector || props object (see AdaptiveElement)
   * @return {Object}
   */
  function Teleport(props) {
    _classCallCheck(this, Teleport);

    if (props) {
      if (!props.adaptiveId) {
        var element = new _ElementHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"](props);
        var uniqueId = null;

        if (!element.getAttribute('data-adaptive-id')) {
          uniqueId = element.getHash();
          element.domElement.setAttribute('data-adaptive-id', uniqueId);
        } else {
          uniqueId = element.getAttribute('data-adaptive-id');
        }

        props = {
          adaptiveId: uniqueId,
          helper: element,
          domElement: element.domElement,
          xpath: element.getXpathTo()
        };
      }

      this.props = props;
      var placeholder = new _ElementHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"]("[name=\"adaptive\"][value=\"".concat(this.props.adaptiveId, "\""));

      if (!placeholder.isInDom()) {
        placeholder = document.createElement('param');
        placeholder.name = 'adaptive';
        placeholder.value = this.props.adaptiveId;
        this.props.domElement.insertAdjacentElement('beforebegin', placeholder);
      }
    }
  }
  /**
   * Teleport object
   * @param {String|Object} target (selector) directive defaults to "to" || {to|after|before: target}
   */


  _createClass(Teleport, [{
    key: "beam",
    value: function beam($directive) {
      $directive = (0,_GetSettings_js__WEBPACK_IMPORTED_MODULE_2__["default"])($directive); // Defaults to "to" target if only the selector is passed

      if (typeof $directive === 'string') {
        $directive = {
          to: $directive
        };
      } else if (Array.isArray($directive)) {
        if ($directive.length > 1) {
          $directive = _defineProperty({}, $directive[0], $directive[1]);
        } else {
          $directive = {
            to: $directive[0]
          };
        }
      }

      var direction = Object.keys($directive)[0];
      var selector = $directive[direction];
      var target = new _ElementHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"](selector);
      var position = 'beforeend';

      switch (direction) {
        case 'to':
          // default
          break;

        case 'before':
          position = 'beforebegin';
          break;

        case 'after':
          position = 'afterend';
          break;
      }

      if (target.isInDom()) {
        target.domElement.insertAdjacentElement(position, this.props.domElement);
      } else {
        // This will create a loop up until the Element/Node is found
        var self = this;
        _DomObserver_js__WEBPACK_IMPORTED_MODULE_0___default().addOnNodeChange(this.props.adaptiveId, function () {
          var target = new _ElementHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"](selector);

          if (target.isInDom()) {
            target.domElement.insertAdjacentElement(position, self.props.domElement);
            _DomObserver_js__WEBPACK_IMPORTED_MODULE_0___default().removeOnNodeChange(self.props.adaptiveId);
          }
        });
      }
    }
    /**
     * Return to its original place
     */

  }, {
    key: "back",
    value: function back() {
      var target = new _ElementHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"]("[name=\"adaptive\"][value=\"".concat(this.props.adaptiveId, "\""));

      if (target.isInDom()) {
        target.domElement.insertAdjacentElement('afterend', this.props.domElement); // target.domElement.remove();
      }
    }
    /**
     * If element is no it the DOM and needs to cancel the observer
     */

  }, {
    key: "cancel",
    value: function cancel() {
      _DomObserver_js__WEBPACK_IMPORTED_MODULE_0___default().removeOnNodeChange(this.props.adaptiveId);
    }
    /**
     * Warning, this will make it global and would work with data attr like data-teleport-to
     */

  }, {
    key: "global",
    value: function global() {
      if (!this.props) {
        Array.from(document.querySelectorAll('[data-teleport-to]')).forEach(function (element, index) {
          new Teleport(element).beam(element.getAttribute('data-teleport-to'));
        });
      }
    }
  }]);

  return Teleport;
}();



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./example/hello.vue?vue&type=style&index=0&id=c5766a62&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./example/hello.vue?vue&type=style&index=0&id=c5766a62&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.greeting {\n    color: red;\n    font-weight: bold;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./example/hello.vue?vue&type=style&index=0&id=c5766a62&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./example/hello.vue?vue&type=style&index=0&id=c5766a62&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_hello_vue_vue_type_style_index_0_id_c5766a62_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./hello.vue?vue&type=style&index=0&id=c5766a62&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./example/hello.vue?vue&type=style&index=0&id=c5766a62&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_hello_vue_vue_type_style_index_0_id_c5766a62_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_hello_vue_vue_type_style_index_0_id_c5766a62_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./example/compApiSample.vue":
/*!***********************************!*\
  !*** ./example/compApiSample.vue ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _compApiSample_vue_vue_type_template_id_05417592__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compApiSample.vue?vue&type=template&id=05417592 */ "./example/compApiSample.vue?vue&type=template&id=05417592");
/* harmony import */ var _compApiSample_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compApiSample.vue?vue&type=script&lang=js */ "./example/compApiSample.vue?vue&type=script&lang=js");
/* harmony import */ var D_WEB_ROOT_AD_Adaptive_HTML_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_WEB_ROOT_AD_Adaptive_HTML_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_compApiSample_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_compApiSample_vue_vue_type_template_id_05417592__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"example/compApiSample.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./example/hello.vue":
/*!***************************!*\
  !*** ./example/hello.vue ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hello_vue_vue_type_template_id_c5766a62__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello.vue?vue&type=template&id=c5766a62 */ "./example/hello.vue?vue&type=template&id=c5766a62");
/* harmony import */ var _hello_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hello.vue?vue&type=script&lang=js */ "./example/hello.vue?vue&type=script&lang=js");
/* harmony import */ var _hello_vue_vue_type_style_index_0_id_c5766a62_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hello.vue?vue&type=style&index=0&id=c5766a62&lang=css */ "./example/hello.vue?vue&type=style&index=0&id=c5766a62&lang=css");
/* harmony import */ var D_WEB_ROOT_AD_Adaptive_HTML_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_WEB_ROOT_AD_Adaptive_HTML_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_hello_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_hello_vue_vue_type_template_id_c5766a62__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"example/hello.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/vue-components/teleport.vue":
/*!*****************************************!*\
  !*** ./src/vue-components/teleport.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _teleport_vue_vue_type_template_id_01eac2f4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teleport.vue?vue&type=template&id=01eac2f4 */ "./src/vue-components/teleport.vue?vue&type=template&id=01eac2f4");
/* harmony import */ var _teleport_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teleport.vue?vue&type=script&lang=js */ "./src/vue-components/teleport.vue?vue&type=script&lang=js");
/* harmony import */ var D_WEB_ROOT_AD_Adaptive_HTML_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_WEB_ROOT_AD_Adaptive_HTML_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_teleport_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_teleport_vue_vue_type_template_id_01eac2f4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/vue-components/teleport.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./example/compApiSample.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./example/compApiSample.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_compApiSample_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_compApiSample_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./compApiSample.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./example/compApiSample.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./example/hello.vue?vue&type=script&lang=js":
/*!***************************************************!*\
  !*** ./example/hello.vue?vue&type=script&lang=js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_hello_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_hello_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./hello.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./example/hello.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue-components/teleport.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./src/vue-components/teleport.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_teleport_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_teleport_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./teleport.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-components/teleport.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./example/compApiSample.vue?vue&type=template&id=05417592":
/*!*****************************************************************!*\
  !*** ./example/compApiSample.vue?vue&type=template&id=05417592 ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_compApiSample_vue_vue_type_template_id_05417592__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_compApiSample_vue_vue_type_template_id_05417592__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./compApiSample.vue?vue&type=template&id=05417592 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./example/compApiSample.vue?vue&type=template&id=05417592");


/***/ }),

/***/ "./example/hello.vue?vue&type=template&id=c5766a62":
/*!*********************************************************!*\
  !*** ./example/hello.vue?vue&type=template&id=c5766a62 ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_hello_vue_vue_type_template_id_c5766a62__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_hello_vue_vue_type_template_id_c5766a62__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./hello.vue?vue&type=template&id=c5766a62 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./example/hello.vue?vue&type=template&id=c5766a62");


/***/ }),

/***/ "./src/vue-components/teleport.vue?vue&type=template&id=01eac2f4":
/*!***********************************************************************!*\
  !*** ./src/vue-components/teleport.vue?vue&type=template&id=01eac2f4 ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_teleport_vue_vue_type_template_id_01eac2f4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_teleport_vue_vue_type_template_id_01eac2f4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./teleport.vue?vue&type=template&id=01eac2f4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue-components/teleport.vue?vue&type=template&id=01eac2f4");


/***/ }),

/***/ "./example/hello.vue?vue&type=style&index=0&id=c5766a62&lang=css":
/*!***********************************************************************!*\
  !*** ./example/hello.vue?vue&type=style&index=0&id=c5766a62&lang=css ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_hello_vue_vue_type_style_index_0_id_c5766a62_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./hello.vue?vue&type=style&index=0&id=c5766a62&lang=css */ "./node_modules/laravel-mix/node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./example/hello.vue?vue&type=style&index=0&id=c5766a62&lang=css");


/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = Vue;

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./example/app.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Adaptive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Adaptive.js */ "./src/Adaptive.js");
/* harmony import */ var _hello_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hello.vue */ "./example/hello.vue");
/* harmony import */ var _compApiSample_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compApiSample.vue */ "./example/compApiSample.vue");
/**
* @author Antuan Suarez
    MIT License

    Copyright (c) [2022] [Antuan Suarez] https://github.com/knighttower

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/
var _Vue = Vue,
    createApp = _Vue.createApp;



var app = createApp({}); //Optional | Add custom media query (min px, max px) settings (min max)

_src_Adaptive_js__WEBPACK_IMPORTED_MODULE_0__["default"].addQueryMinMax('kitty', 900, 1400); // Optional | Add a custom media query expression (it accepts any valid media query)

_src_Adaptive_js__WEBPACK_IMPORTED_MODULE_0__["default"].addQueryExpression('doggy', '(min-width: 900px)'); // Needs to be instaciated right after the app and before the components
// The second parameter (optional, defaults to false) is to be in hybrid mode for Vue and Static JS(DOM),

_src_Adaptive_js__WEBPACK_IMPORTED_MODULE_0__["default"].useVue(app, true); // Do components and other stuff right after

app.component('hello', _hello_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
app.component('comp-api-sample', _compApiSample_vue__WEBPACK_IMPORTED_MODULE_2__["default"]); // Testing the code if there is a delay on load and how the Adaptive would react

setTimeout(function () {
  app.mount('#app');
}, '1');
})();

/******/ })()
;