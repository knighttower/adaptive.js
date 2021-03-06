/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
      var $element = new _Teleport_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.props, this.props.settings);
      return _QueryHandler_js__WEBPACK_IMPORTED_MODULE_1___default().add(queries, function ($directive) {
        return $element.beam($directive);
      }, function () {
        return $element.back();
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
   * Holds memory of registered functions
   * @private
   */

  var executeOnAttrChanged = {};
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
   * Add function callback when an attribute change is detected
   * @param {String} id
   * @param {Function} callback Callback when any attribute changes
   * @return {Void}
   */


  $this.addOnAttrChange = function (id, callback) {
    if (callback) {
      executeOnAttrChanged[id] = callback;
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
   * Remove from attr change
   * @param {String} id
   * @return {Void}
   */


  $this.removeOnAttrChange = function (id) {
    if (id) {
      delete executeOnAttrChanged[id];
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
    Object.keys(executeOnAttrChanged).forEach(function (key) {
      return delete executeOnAttrChanged[key];
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
      // Use traditional 'for loops' for IE 11
      var _iterator = _createForOfIteratorHelper(mutationList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var mutation = _step.value;

          if (mutation.type === 'childList') {
            for (var id in executeOnNodeChanged) {
              executeOnNodeChanged[id]();
            }
          } else if (mutation.type === 'attributes') {
            for (var _id in executeOnAttrChanged) {
              executeOnAttrChanged[_id]();
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
      attributes: true,
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
  // --> Private
  // --------------------------

  /**
   * Conver string into valid JSON
   * @private
   * @param {String} string
   * @return {String}
   */


  _createClass(ElementHelper, [{
    key: "_convertString",
    value: function _convertString(string) {
      return String(string.replace(/'/g, '"'));
    } // =========================================
    // --> Public
    // --------------------------

    /**
     * Check if the element exists or is visible. It will keep querying
     * @return {Boolean}
     */

  }, {
    key: "isInDom",
    value: function isInDom() {
      var _$this$domElement;

      var $this = this;
      var callbackId = Date.now() + Math.floor(Math.random() * 1000);

      if (!((_$this$domElement = $this.domElement) !== null && _$this$domElement !== void 0 && _$this$domElement.outerHTML)) {
        DomObserver.addOnNodeChange(callbackId, function () {
          var _element$domElement;

          var element = new ElementHelper($this.selector);

          if ((_element$domElement = element.domElement) !== null && _element$domElement !== void 0 && _element$domElement.outerHTML) {
            $this = element;
            DomObserver.removeOnNodeChange(callbackId);
          }

          return;
        });
        return false;
      }

      return true;
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

      if (String(attrData).includes('{') || String(attrData).includes('[')) {
        attrData = JSON.parse(this._convertString(attrData));
      }

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

  var domQueriesUnMatch = {}; // =========================================
  // --> PUBLIC
  // --------------------------

  /**
   * Register a query
   * @param {String} queries Media query
   * @param {Function} matchCallback Callback
   * @param {Function} unMatchCallback Callback
   * @return {Void}
   */

  $this.add = function (queries, matchCallback, unMatchCallback, Adaptive) {
    for (var query in queries) {
      var values = queries[query];
      var queryPreset = Adaptive.getMinMaxQueries()[query];
      var customExpression = Adaptive.getExpQueries()[query];
      var queryExpression = query;

      if (queryPreset) {
        queryExpression = "(min-width: ".concat(queryPreset[0], "px) and (max-width: ").concat(queryPreset[1], "px)");
      } else if (customExpression) {
        queryExpression = customExpression;
      }

      var isRegistered = Boolean(domQueriesMatch[queryExpression]);

      if (!isRegistered) {
        domQueriesMatch[queryExpression] = [];
        domQueriesUnMatch[queryExpression] = [];
      }

      domQueriesMatch[queryExpression].push([matchCallback, values]);
      domQueriesUnMatch[queryExpression].push([unMatchCallback, values]);
    }
  };
  /**
   * Initialization of the class functionality
   * @return {Void}
   */


  $this.init = function () {
    registerQueryListeners();
    onLoad();
  };

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

  /**
   * @private
   */


  function onLoad() {
    Object.keys(domQueriesMatch).forEach(function (queryExpression) {
      var mq = window.matchMedia(queryExpression);

      if (mq.matches) {
        domQueriesMatch[mq.media].forEach(function (callback) {
          return callback[0](callback[1]);
        });
      }
    });
  }
  /**
   * @private
   */


  function registerQueryListeners() {
    Object.keys(domQueriesMatch).forEach(function (queryExpression) {
      var isRegistered = Boolean(registeredQueries[queryExpression]);

      if (!isRegistered) {
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
      }
    });
  }

  return window.AdaptiveQH = $this;
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
   * @param {String|Object} selector
   * @return {Object}
   */
  function Teleport(props) {
    _classCallCheck(this, Teleport);

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

  _createClass(Teleport, [{
    key: "beam",
    value: function beam($directive) {
      // Defaults to "to" target if only the selector is passed
      if (typeof $directive === 'string') {
        $directive = {
          to: $directive
        };
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
        _DomObserver_js__WEBPACK_IMPORTED_MODULE_0___default().addOnNodeChange(self.props.adaptiveId, function () {
          var target = new _ElementHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"](selector);

          if (target.isInDom()) {
            target.domElement.insertAdjacentElement(position, self.props.domElement);
            _DomObserver_js__WEBPACK_IMPORTED_MODULE_0___default().removeOnNodeChange(self.props.adaptiveId);
          }
        });
      }
    }
  }, {
    key: "back",
    value: function back() {
      var target = new _ElementHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"]("[name=\"adaptive\"][value=\"".concat(this.props.adaptiveId, "\""));

      if (target.isInDom()) {
        target.domElement.insertAdjacentElement('afterend', this.props.domElement); // target.domElement.remove();
      }
    }
  }]);

  return Teleport;
}();



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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/Adaptive.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ElementHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementHelper.js */ "./src/ElementHelper.js");
/* harmony import */ var _AdaptiveElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdaptiveElement.js */ "./src/AdaptiveElement.js");
/* harmony import */ var _Teleport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Teleport.js */ "./src/Teleport.js");
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
 * @example Add a data attribute with valid JSON like this --> data-adaptive="{'addClass':{'tablet':'hello','desktop':'dos-tres hellothere'},'teleport':{'tablet':{'to':'.sample'}}}"
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function (window) {
  'use strict';
  /**
   * Register this library into the window
   * @private
   * @return {Object}
   */

  var Adaptive = {};
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
    'odd-device': [800, 1024]
    /* small Laptops and Ipads in landscape */
    ,
    desktop: [1025, 1440]
    /* Most common resolutions below 1920 */

  };
  /**
   * break the 3 major device types
   * @private
   */

  var broadMediaQueries = {
    'non-desktop': [100, 1024],
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

  Adaptive.getAllQueries = function () {
    return Object.assign({}, screens, devices, broadMediaQueries, customMinMaxQueries, customExpressionQueries);
  };

  Adaptive.getMinMaxQueries = function () {
    return Object.assign({}, screens, devices, broadMediaQueries, customMinMaxQueries);
  };

  Adaptive.getExpQueries = function () {
    return Object.assign({}, customExpressionQueries);
  };
  /**
   * Register an element
   * @param {String|Object} elementOrSelector
   * @param {Object} data Optional used directly to add the directives, but is mostly for VUe
   * @return {Void}
   */


  Adaptive.registerElement = function (elementOrSelector, data) {
    var helper = new _ElementHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"](elementOrSelector); // Register only unique non indexed elements

    if (!helper.getAttribute('data-adaptive-id')) {
      var uniqueId = helper.getHash();
      helper.domElement.setAttribute('data-adaptive-id', uniqueId);
      domElements[uniqueId] = new _AdaptiveElement_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        adaptiveId: uniqueId,
        helper: helper,
        domElement: helper.domElement,
        xpath: helper.getXpathTo(),
        settings: data || helper.getAttribute('data-adaptive'),
        useVue: useVue
      }, Adaptive);
      return uniqueId;
    }
  };
  /**
   * Register A custom Query Min, Max
   * @param {String} id Identifier
   * @param {Number} min Number only, no units attached as it only handles pixels here
   * @param {Number} max Number only, no units attached as it only handles pixels here
   * @return {Void}
   */


  Adaptive.addQueryMinMax = function (id, min, max) {
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


  Adaptive.addQueryExpression = function (id, query) {
    if (!customExpressionQueries[id]) {
      customExpressionQueries[id] = query;
    }
  }; // =========================================
  // --> Instance Protototypes
  // --------------------------

  /**
   * Full reset, handle with care
   * @private
   * @return {Void}
   */


  Adaptive.reset = function () {
    Object.keys(domElements).forEach(function (key) {
      return delete domElements[key];
    });
    DomObserver.clenup();
    AdaptiveQH.reset();
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
      Adaptive.registerElement(element);
    });
    AdaptiveQH.init();
  }
  /**
   * Initialization, cam be called externally to reinitialized after dom loaded
   * @return {Void}
   */


  Adaptive.init = function () {
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

  Adaptive.useVue = function (Vue) {
    if (_typeof(Vue) === 'object' && typeof Vue.mixin === 'function') {
      useVue = true;
      var installer = {
        install: function install(app, options) {
          // For Options API
          app.config.globalProperties.$Adaptive = Adaptive; // For composition API

          app.provide('Adpative', Adaptive);
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
})();

/******/ })()
;