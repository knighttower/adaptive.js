'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
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
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch (e) {
    return typeof fn === "function";
  }
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

// Author Knighttower
// MIT License
// [2022] [Knighttower] https://github.com/knighttower
/**
 * @module DomObserver
 * Detect DOM changes
 * @name DomObserver
 * @param {window} selector
 * @param {Function}
 * @return DomObserver
 * @example DomObserver.addOnNodeChange('elementIdentifier', () => { console.log('Node changed') })
 * @example DomObserver.removeOnNodeChange('elementIdentifier')
 */
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
var addOnNodeChange = function addOnNodeChange(id, callback) {
  if (callback) {
    executeOnNodeChanged[id] = callback;
  }
};
/**
 * Remove from node change
 * @param {String} id
 * @return {Void}
 */
var removeOnNodeChange = function removeOnNodeChange(id) {
  if (id) {
    delete executeOnNodeChanged[id];
  }
};
/**
 * Deep cleanup
 * @return {Void}
 */
var cleanup = function cleanup() {
  Object.keys(executeOnNodeChanged).forEach(function (key) {
    return delete executeOnNodeChanged[key];
  });
};
/**
 * Observer
 * @private
 * @return {MutationObserver}
 */
(function () {
  if (typeof window !== 'undefined') {
    var callback = function callback(mutationList) {
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
    observer.observe(document.body, config);
  }
})();
var DomObserver$1 = {
  executeOnNodeChanged: executeOnNodeChanged,
  addOnNodeChange: addOnNodeChange,
  removeOnNodeChange: removeOnNodeChange,
  cleanup: cleanup
};

/**
 * @class Adds some extra functionality to interact with a DOM element
 * @param {String|Object} selector Class or ID or DOM element
 * @param {String} scope The scope to search in, window, document, dom element. Defaults to document
 * @return {Object}
 * @example new ElementHelper('elementSelector')
 * @example new ElementHelper('elementSelector', domElement|window|document)
 *
 */
var ElementHelper = /*#__PURE__*/function () {
  /**
   * Constructor
   * @param {String|Object} selector
   * @return {Object}
   */
  function ElementHelper(selector) {
    var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    _classCallCheck(this, ElementHelper);
    this.selector = selector;
    if (_typeof(selector) === 'object') {
      this.domElement = selector;
    } else if (String(selector).includes('//')) {
      this.domElement = this.getElementByXpath(selector);
    } else {
      this.domElement = scope.querySelector(selector);
    }
  }

  // =========================================
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
      return Boolean((_this$domElement = this.domElement) === null || _this$domElement === void 0 ? void 0 : _this$domElement.outerHTML);
    }

    /**
     * Wait for element exists or is visible. It will keep querying
     * @function whenInDom
     * @return {Promise}
     */
  }, {
    key: "whenInDom",
    value: function whenInDom() {
      var $this = this;
      var callbackId = Date.now() + Math.floor(Math.random() * 1000);
      return new Promise(function (resolveThis) {
        if (!$this.isInDom()) {
          DomObserver$1.addOnNodeChange(callbackId, function () {
            var element = new ElementHelper($this.selector);
            if (element.isInDom()) {
              $this = element;
              resolveThis($this);
              DomObserver$1.removeOnNodeChange(callbackId);
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
        return "//*[@id='".concat(element.id, "']");
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
      return this.domElement.getAttribute(attr) || null;
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

/* Author Knighttower
    MIT License
    [2023] [Knighttower] https://github.com/knighttower
*/
/**
 * @module ProxyHelper
 * Convert to proxy to protect objects
 * Allows to declare _private, _protected and _mutable - all arrays with prop names
 * @example ProxyHelper({objectProps..., _protected: array(...)})
 * @param {Object} object
 * @return {Proxy}
 * @usage const proxy = ProxyHelper({objectProps..., _protected: array(...), _private: array(...), _mutable: array(...)})
 * @usage _protected: array(...) -> Cannot be modified
 * @usage _private: array(...) -> Cannot be accessed
 * @usage _mutable: array(...) -> Can be modified
 */
function ProxyHelper(object) {

  var _private = new Map((object._private || ['_private']).map(function (prop) {
    return [prop, true];
  }));
  var _protected = new Map([].concat(_toConsumableArray(_private), _toConsumableArray((object._protected || []).map(function (prop) {
    return [prop, true];
  }))));
  var _mutable = new Map((object._mutable || []).map(function (prop) {
    return [prop, true];
  }));
  return new Proxy(object, {
    get: function get(target, prop) {
      if (prop in target && !_private.has(String(prop))) {
        return target[prop];
      } else {
        console.error('Prop is private, not set, or object is protected', prop);
        return undefined;
      }
    },
    set: function set(target, prop, value) {
      prop = String(prop);
      if (prop in target) {
        if (_mutable.has(prop)) {
          target[prop] = value;
          return true;
        }
        if (!_protected.has(prop) && !_private.has(prop)) {
          target[prop] = value;
          return true;
        } else {
          console.error('The prop is protected or private and cannot be modified', prop, value);
          return false;
        }
      } else {
        console.error('Protected Object, cannot set new props', prop, value);
        return false;
      }
    }
  });
}

/**
 * Converts a given variable to a number if possible.
 * @param {string|number} input - The input variable to convert.
 * @returns {string|number} - The converted number or the original variable.
 * @example convertToNumber(123) // Output: 123 (number)
 * @example convertToNumber(123.45) // Output: 123.45 (number)
 * @example convertToNumber("123") // Output: 123 (number)
 * @example convertToNumber("123.45") // Output: 123.45 (number)
 * @example convertToNumber("abc") // Output: "abc" (original string)
 * @example convertToNumber("123abc") // Output: "123abc" (original string)
 * @example convertToNumber(null) // Output: null (original)
 */
function convertToNumber(input) {
  var isNum = isNumber(input);
  if (isNum !== null) {
    return isNum;
  }
  // Case: String that cannot be converted to a number
  return input;
}

/**
 * Check if there is a value, if not return null or the default value
 * It can test strings, arrays, objects, numbers, booleans
 * @function emptyOrValue
 * @memberof Utility
 * @param {String|Number} value If the value is not empty, returns it
 * @param {String|Number} _default The default value if empty
 * @return mixed
 * @example emptyOrValue('test', 'default') // 'test'
 * @example emptyOrValue('', 'default') // 'default'
 * @example emptyOrValue('test') // 'test'
 * @example emptyOrValue('') // null
 * @example emptyOrValue(0) // 0
 * @example var hello = ''; emptyOrValue(hello) // Null
 * @example var hello = 'test'; emptyOrValue(hello) // 'test'
 * @example var hello = 'test'; emptyOrValue(hello, 'default') // 'test'
 * @example var hello = ''; emptyOrValue(hello, 'default') // 'default'
 * @example var hello = []; emptyOrValue(hello, 'default') // null
 * @example var hello = {}; emptyOrValue(hello, 'default') // null
 * @example var hello = [...]; emptyOrValue(hello') // [...]
 */
function emptyOrValue(value) {
  var _default = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  /**
   * Test sequence:
   * If it is a number 0> : true
   * If is not undefined: true
   * If it is boolean (true|false) prevents going to empty
   * If it is not Empty, [], null, {}, 0, true, false: true
   */

  if (isNumber(value) !== null || typeof value === 'boolean') {
    return value;
  } else if (!isEmpty(value)) {
    return value;
  }
  return _default;
}

/**
 * Generate unique ids
 * @function getDynamicId
 * @memberof Utility
 * @return string Format kn__000000__000
 */
function getDynamicId() {
  return 'kn__' + new Date().getTime() + '__' + Math.floor(Math.random() * (999 - 100));
}

/**
 * Alias to getDynamicId
 * @function getRandomId
 * @memberof Utility
 * @return string
 * @example getRandomId() // kn__000000__000
 */
var getRandomId = getDynamicId;

/**
 * Check if a value is empty
 * @function isEmpty
 * @memberof Utility
 * @param {string|array|object|map|set|number|boolean} value
 * @url https://moderndash.io/
 * @return {string}
 */
function isEmpty(value) {
  if (value === null || value === undefined) {
    return true;
  }
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }
  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }
  if (ArrayBuffer.isView(value)) {
    return value.byteLength === 0;
  }
  if (_typeof(value) === 'object') {
    return Object.keys(value).length === 0;
  }
  return false;
}

/**
 * Check if is a number or Int, if not return null
 * Integrates both Int and Number, or convert a string number to number to test
 * Note: this is not like Lodash isNumber since this one takes into consideration the 'string number'
 * @function isNumber
 * @memberof Utility
 * @param {String|Number} value
 * @return null|int
 * @example isNumber(123) // true
 * @example isNumber(123.45) // true
 * @example isNumber('123abc') // false
 * @example isNumber('abc') // false
 * @example isNumber('') // false
 * @example isNumber("123") // true
 * @example isNumber("123.45") // true
 */
function isNumber(value) {
  var isType = _typeof(value);
  switch (value) {
    case null:
    case undefined:
    case '':
      return null;
    case '0':
    case 0:
      return 0;
    default:
      if (isType === 'number' || isType === 'string') {
        if (typeof value === 'number' || !Number.isNaN(Number(value))) {
          return +value;
        }
      }
      break;
  }
  return null;
}

/**
 * @example ProxyHelper({objectProps..., _protected: array(...)})
 * @param {Object} object
 * @return {Proxy}
 * @usage const proxy = ProxyHelper({objectProps..., _protected: array(...), _private: array(...), _mutable: array(...)})
 * @usage _protected: array(...) -> Cannot be modified
 * @usage _private: array(...) -> Cannot be accessed
 * @usage _mutable: array(...) -> Can be modified
 */
function proxyObject(obj) {
  return ProxyHelper(obj);
}

/**
 * Dom Element selector
 * @function selectElement
 * @param {String} selector - The selector to search for
 * @param {Object} scope - The scope to search in
 * @return {String} - The first element that matches the selector
 * @uses ElementHelper @knighttower/element-helper (https://github.com/knighttower/ElementHelper)
 * @example selectElement('#test') // <div id="test"></div>
 */
function selectElement(selector) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return new ElementHelper(selector, scope);
}

/**
 * Check the type of a variable, and get the correct type for it. It also accepts simple comparisons
 * For more advance type checking see https://github.com/knighttower/JsTypeCheck
 * @param {any} input - The variable to check
 * @param {string} test - The types to check against, piped string
 * @return {string|boolean} - The type of the variable
 * @example typeOf('hello', 'string') // returns true
 * @example typeOf('hello', 'number') // returns false
 * @example typeOf('hello', 'string') // returns true
 * @example typeOf('hello') // returns 'string'
 * @example typeOf({}) // returns 'object'
 */
function typeOf(input, test) {
  // Special case for null since it can be treated as an object
  if (input === null) {
    if (test) {
      return test === null || test === 'null' ? true : false;
    }
    return 'null';
  }
  var inputType;
  switch (_typeof(input)) {
    case 'number':
    case 'string':
    case 'boolean':
    case 'undefined':
    case 'bigint':
    case 'symbol':
    case 'function':
      inputType = _typeof(input);
      break;
    case 'object':
      inputType = Array.isArray(input) ? 'array' : 'object';
      break;
    default:
      inputType = 'unknown';
  }
  if (test) {
    return test === inputType;
  }
  return inputType;
}

// @private
function _removeBrackets(strExp) {
  var regex = /^(\[|\{)(.*?)(\]|\})$/; // Match brackets at start and end
  var match = strExp.match(regex);
  if (match) {
    return match[2].trim(); // Extract and trim the content between brackets
  }

  return strExp; // Return the original string if no brackets found at start and end
}

/**
 * Clean a string from delimeters or just trimmed if no delimeters given
 * @funtion cleanStr
 * @param {String} str - String to use
 * @param {String|Regex} p1 - Delimeter 1
 * @param {String|Regex} p2 - Delimeter 2
 * @return {String|void}
 * @example cleanStr('hello world', 'h', 'd') // 'ello worl'
 * @example cleanStr('  hello world  ') // 'hello world'
 * @example cleanStr('hello world', 'hello') // 'world'
 * @example cleanStr('Hello World. Sunshine is here!', '\..*!') // Hello World
 * @example cleanStr('Hello World. Sunshine is here!', /Hello/g) // ' World. Sunshine is here!'
 * @example cleanStr('Hello World. Sunshine is here!', /Hello/g, /Sunshine/g) // ' World.  is here!'
 */
function cleanStr(str) {
  var arguments$1 = arguments;

  if (!str) {
    return;
  }
  if (typeof str !== 'string') {
    return str;
  }
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments$1[_key];
  }
  return args.reduce(function (accStr, arg) {
    var regex = arg instanceof RegExp ? arg : new RegExp(setExpString(arg));
    return accStr.replace(regex, '');
  }, str).trim();
}

/**
 * Find the last instance of nested pattern with delimeters
 * @function findNested
 * @param {string} str
 * @param {string} start - Delimeter 1
 * @param {string} end - Delimeter 2
 * @return {string|null}
 * @example findNested('[[]hello [world]]', '[', ']') // [world]
 */
function findNested(str) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '[';
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ']';
  if (typeof str !== 'string') {
    return str;
  }
  // Find the last index of '['
  var lastIndex = str.lastIndexOf(start);
  // If '[' is not found, return null or some default value
  if (lastIndex === -1) {
    return null;
  }

  // Extract the substring starting from the last '[' to the end
  var substring = str.substring(lastIndex);
  // Find the index of the first ']' in the substring
  var endIndex = substring.indexOf(end);
  // If ']' is not found, return null or some default value
  if (endIndex === -1) {
    return null;
  }
  // Extract and return the content between the last '[' and the next ']', including them
  return substring.substring(0, endIndex + 1);
}

/**
 * Fix quotes from a string
 * @function fixQuotes
 * @param {String} str
 * @return {String} q quote type
 * @return {String}
 * @example fixQuotes("'hello'") // "hello"
 * @example fixQuotes('"hello"') // "hello"
 */
function fixQuotes(str) {
  var q = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '"';
  if (typeof str !== 'string') {
    return str;
  }
  return str.replace(/`|'|"/g, q);
}

/**
 * Converts strings formats into objects or arrays
 * Note: quoted strings are not supported, use getDirectiveFromString instead
 * @param {string} strExp
 * @return {object|array|string}
 * @example getArrObjFromString('[[value,value],value]') // [['value', 'value'], 'value']
 * @example getArrObjFromString('[[value,value],value, { y: hello }, hello]') // [['value', 'value'], 'value', { y: 'hello' }, 'hello']
 * @example getArrObjFromString('{ y: hello, x: world, z: [value,value]}') // { y: 'hello', x: 'world', z: ['value', 'value'] }
 */
function getArrObjFromString(strExp) {
  // alredy typeof object or array just return it
  if (typeOf(strExp, 'object') || typeOf(strExp, 'array')) {
    return strExp;
  }
  var isObject = startAndEndWith(strExp, '{', '}');
  var isArray = startAndEndWith(strExp, '[', ']');
  // If it is other type of string, return it
  if (!isObject && !isArray) {
    return strExp;
  }
  var newCollection = isObject ? {} : [];
  var nestedElements = {};

  //remove the brackets
  var newStrExp = _removeBrackets(strExp);
  var loopNested = function loopNested() {
    var objects = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    // ignore eslint comment
    // eslint-disable-next-line no-constant-condition
    while (true) {
      //find any nested arrays or objects
      var matched = objects ? findNested(newStrExp, '{', '}') : findNested(newStrExp);
      if (!matched) {
        break;
      }

      //replace the nested array or object with a marker so that we can safely split the string
      var marker = "__".concat(getRandomId(), "__");
      nestedElements[marker] = matched;
      newStrExp = newStrExp.replace(matched, marker);
    }
  };
  loopNested();
  loopNested(true);
  getChunks(newStrExp).forEach(function (chunk, index) {
    var isObjectKey = chunk.includes(':') && isObject;
    var chunkParts = isObjectKey ? getChunks(chunk, ':') : [];
    var chunkKey = removeQuotes(emptyOrValue(chunkParts[0], index));
    chunk = isObjectKey ? chunkParts[1] : chunk;
    if (chunk in nestedElements) {
      chunk = getArrObjFromString(nestedElements[chunk]);
    }
    chunk = convertToNumber(removeQuotes(chunk));
    // set back in the collection either as an object or array
    isObject ? newCollection[chunkKey] = chunk : newCollection.push(chunk);
  });
  // uncomment to debug
  // console.log('___ log ___', newCollection);
  return newCollection;
}

/**
 * handles the following patterns to get an object from string attributes
 * // Matches the JSON objects as string: {'directive':{key:value}} OR {key:value}
 * // Matches the Array as string: [value, value] OR ['value','value']
 * // Matches a multi-array string like [[value,value]],value]
 * // Matches object-style strings: directive.tablet(...values) OR directive[expression](...values)
 * // Matches string ID or class: literals Id(#) or class (.). Note that in Vue it needs to be in quotes attr="'#theId'"
 * // Mathes simple directive function style: directive(#idOr.Class)
 * Note: all the above with the exception of the Id/class will be converted into actual objects
 */
/**
 * Converts strings formats into objects
 * @function getDirectivesFromString
 * @param {String|Array|Object} stringDirective
 * @return {object|null|void}
 * @example getDirectivesFromString('directive.tablet(...values)') // {directive: {tablet: 'values'}}
 * @example getDirectivesFromString('[[value,value],value]') // {directive: 'values', directive2: 'values'}
 * @example getDirectivesFromString('directive.tablet|mobile(...values)') // {directive: {tablet: 'values', mobile: 'values'}}
 * @example getDirectivesFromString('directive.tablet(...values)') // {directive: {tablet: 'values'}}
 */
function getDirectivesFromString(stringDirective) {
  var str = stringDirective;
  if (!emptyOrValue(str)) {
    return null;
  }
  var results = function results() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var results = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return {
      type: type,
      directive: results
    };
  };
  var matchArrayTypes = /^\[((.|\n)*?)\]$/gm;
  // comment eslint to ignore
  // eslint-disable-next-line no-useless-escape
  var matchObjectTypes = /^\{((.|\n)*?)\:((.|\n)*?)\}/gm;
  // eslint-disable-next-line no-useless-escape
  var matchFunctionString = /^([a-zA-Z]+)(\()(\.|\#)(.*)(\))/g;
  var regexDotObjectString = /([a-zA-Z]+)\.(.*?)\(((.|\n)*?)\)/gm;
  var regexExObjectString = /([a-zA-Z]+)\[((.|\n)*?)\]\(((.|\n)*?)\)/gm;
  var type = _typeof(str);
  if (type === 'object' || type === 'array') {
    return results(type, str);
  } else {
    switch (true) {
      case !!str.match(matchArrayTypes):
        // Matches the Array as string: [value, value] OR ['value','value']
        // regexArrayLike = /^\[((.|\n)*?)\]$/gm;
        // Matches a multi-array string like [[value,value]],value]
        // regexMultiArrayString = /\[(\n|)(((.|\[)*)?)\](\,\n|)(((.|\])*)?)(\n|)\]/gm;

        type = 'array';
        break;
      case !!str.match(matchObjectTypes):
        // Matches the JSON objects as string: {'directive':{key:value}} OR {key:value}
        // regexObjectLike = /^\{((.|\n)*?)\:((.|\n)*?)\}/gm;
        type = 'object';
        break;
      case !!str.match(matchFunctionString):
        // Mathes simple directive function style: directive(#idOr.Class)
        // regexFunctionString
        // eslint-disable-next-line
        var directive = str.split('(')[0].trim();
        return results('idOrClassWithDirective', _defineProperty({}, directive, getMatchInBetween(str, '(', ')')));
      case !!str.match(regexDotObjectString):
        // Matches object-style strings: directive.tablet(...values) OR directive[expression](...values)
        // OR directive.breakdown|breakdown2(...values) OR directive.tablet(...values)&&directive.mobile(...values)
        type = 'dotObject';
        break;
      case !!str.match(regexExObjectString):
        type = 'dotObject';
        break;
      default:
        return results('string', str);
    }
  }
  if (type === 'array' || type === 'object') {
    var strQ = fixQuotes(str);
    try {
      return results(type, JSON.parse(strQ));
    } catch (error) {
      // uncomment to debug
      // console.log('___ parse error ___', error);
    }
    return results(type, getArrObjFromString(strQ));
  }
  if (type === 'dotObject') {
    var values, breakDownId, _directive;
    var setObject = {};
    getChunks(str, '&&').forEach(function (command) {
      if (command.match(regexExObjectString)) {
        // Matches object-style strings: directive[expression](...values)
        values = getMatchInBetween(command, '](', ')');
        breakDownId = getMatchInBetween(command, '[', ']');
        _directive = command.split('[')[0].trim();
      } else {
        // Matches object-style strings: directive.tablet(...values)
        values = getMatchInBetween(command, '(', ')');
        command = command.replace(getMatchBlock(command, '(', ')'), '');
        var _getChunks = getChunks(command, '.');
        var _getChunks2 = _slicedToArray(_getChunks, 2);
        _directive = _getChunks2[0];
        breakDownId = _getChunks2[1];
      }
      values = getArrObjFromString(values);
      if (!setObject[_directive]) {
        setObject[_directive] = {};
      }
      getChunks(breakDownId, '|').forEach(function (id) {
        setObject[_directive][id] = values;
      });
    });
    return results('dotObject', setObject);
  }
}

/**
 * Find math by delimeters returns raw matches
 * @function getMatchBlock
 * @param {String} str
 * @param {String|Regex} p1
 * @param {String|Regex} p2
 * @param {Boolean} all If it should return all matches or single one (default)
 * @return {String|Array|Null}
 * @example getMatchBlock('is a hello world today', 'h', 'd') // 'hello world'
 * @example getMatchBlock('is a hello world today', 'h', 'd', true) // ['hello world']
 * @example getMatchBlock('is a <hello world/> today', '<', '/>') // '<hello world/>'
 */
function getMatchBlock(str, p1, p2) {
  var all = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (typeof str !== 'string') {
    return str;
  }
  p1 = setExpString(p1);
  p2 = setExpString(p2);
  var regex = new RegExp(setLookUpExp(p1, p2), 'gm');
  var matches = str.match(regex);
  if (matches) {
    return all ? matches : matches[0];
  }
  return null;
}
/**
 * Splits a string into chunks by a given splitter and cleans the chunks
 * @param {string} str
 * @param {string} splitter - The string/character to split the string by. Defaults to ','
 * @return {string|array}
 */
function getChunks(str) {
  var splitter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
  if (typeof str !== 'string') {
    return str;
  }
  if (isEmpty(str)) {
    return [];
  }
  str = cleanStr(str);
  var chunks = str.split(splitter).map(function (t) {
    return cleanStr(t);
  });
  return chunks.length === 1 && chunks[0] === '' ? [str] : chunks;
}

/**
 * find a match in between two delimeters, either string or regex given, returns clean matches
 * @function getMatchBlock
 * @param {String} str
 * @param {String|Regex} p1
 * @param {String|Regex} p2
 * @param {Boolean} all If it should return all matches or single one (default)
 * @return {String|Array|Null}
 * @example getMatchInBetween('hello world', 'h', 'd') // 'ello worl'
 * @example getMatchInBetween('hello <world/>', '<', '/>', true) // ['world']
 * @example getMatchInBetween('hello <world/>', '<', '/>') // 'world'
 */
function getMatchInBetween(str, p1, p2) {
  var _getMatchBlock;
  var all = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (typeof str !== 'string') {
    return str;
  }
  var matchBlock = (_getMatchBlock = getMatchBlock(str, p1, p2, all)) !== null && _getMatchBlock !== void 0 ? _getMatchBlock : all ? [] : str;
  return all ? matchBlock.map(function (match) {
    return cleanStr(match, p1, p2);
  }) : cleanStr(matchBlock, p1, p2);
}

/**
 * Remove quotes from a string
 * @function removeQuotes
 * @param {String} str
 * @return {String}
 * @example removeQuotes('"hello"') // hello
 * @example removeQuotes("'hello'") // hello
 */
function removeQuotes(str) {
  if (typeof str !== 'string') {
    return str;
  }
  return str.replace(/`|'|"/g, '');
}

/**
 * Checks if a string starts and ends with a given string
 * @param {string} strExp
 * @param {string} start - The string/character to check it starts with
 * @param {string} end - The string/character to check it ends with
 * @return {string}
 * @example startAndEndWith('hello world', 'h', 'd') // false
 * @example startAndEndWith('hello world', 'h', 'd') // true
 */
function startAndEndWith(strExp) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (!start || strExp.startsWith(start)) && (!end || strExp.endsWith(end));
}

/**
 * Scapes a string to create a regex or returns the regex if it already is an expression
 * @function setExpString
 * @param {String|Regex} exp
 * @return {String|Regex}
 * @example setExpString('hello') // '\h\e\l\l\o'
 * @example setExpString(/hello/) // /hello/
 * @example setExpString([hello]) // \\[hello\\/ then use like new new RegExp(setExpString(StringOrRegex))
 */
function setExpString(exp) {
  if (exp instanceof RegExp) {
    return exp;
  } else {
    return exp.split('').map(function (_char) {
      return ['$', '^', '.', '*', '+', '?', '(', ')', '[', ']', '{', '}', '|', '\\'].includes(_char) ? "\\".concat(_char) : _char;
    }).join('');
  }
}

/**
 * Regex builder to get a match in between two delimeters
 * @function setLookUpExp
 * @param {String|Regex} args - minimun two arguments as delimeters
 * @return {String} - Regex
 * @example setLookUpExp('h', 'd') // 'h((.|\n)*?)d'
 * @example setLookUpExp('h', 'd', 'c') // 'h((.|\n)*?)d((.|\n)*?)c'
 * @usage:
 * const pattern = setLookUpExp(".", "!");
const regex = new RegExp(pattern, 'g');
const text = "Hello World. Sunshine is here! Have fun!";
const matches = text.match(regex);
console.log(matches);  // Output: [". Sunshine is here!"]
 */
function setLookUpExp() {
  var arguments$1 = arguments;

  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments$1[_key2];
  }
  if (args.length < 2) {
    throw new Error('You need to pass at least two arguments');
  }
  var expression = '';
  // loop through args
  args.forEach(function (arg, index) {
    // if arg is a regex, return the source
    if (arg instanceof RegExp) {
      arg = arg.source;
    }
    if (index === 0) {
      expression = arg;
    } else {
      expression += "((.|\n)*?)".concat(arg);
    }
  });
  return expression;
}

var typesMap = new Map([['array', function (_var_) {
  return typeOf(_var_, 'array');
}], ['bigInt', function (_var_) {
  return typeof _var_ === 'bigint';
}], ['boolean', function (_var_) {
  return typeof _var_ === 'boolean';
}], ['date', function (_var_) {
  return _var_ instanceof Date;
}], ['float', function (_var_) {
  return typeof _var_ === 'number' && !Number.isInteger(_var_);
}], ['function', function (_var_) {
  return typeof _var_ === 'function';
}], ['int', function (_var_) {
  return Number.isInteger(_var_);
}], ['map', function (_var_) {
  return _var_ instanceof Map;
}], ['null', function (_var_) {
  return _var_ === null;
}], ['number', function (_var_) {
  return typeof _var_ === 'number';
}], ['object', function (_var_) {
  return typeOf(_var_, 'object');
}], ['promise', function (_var_) {
  return _var_ instanceof Promise;
}], ['regExp', function (_var_) {
  return _var_ instanceof RegExp;
}], ['set', function (_var_) {
  return _var_ instanceof Set;
}], ['string', function (_var_) {
  return typeof _var_ === 'string';
}], ['symbol', function (_var_) {
  return _typeof(_var_) === 'symbol';
}], ['undefined', function (_var_) {
  return typeof _var_ === 'undefined';
}], ['weakMap', function (_var_) {
  return _var_ instanceof WeakMap;
}], ['weakSet', function (_var_) {
  return _var_ instanceof WeakSet;
}]]);

// =========================================
// --> STORAGE
// --------------------------
// Cache storage for tests
var cachedTests = new Map();
var cachedPipedTypes = new Map();

// =========================================
// --> Utility functions
// --------------------------

/**
 * If the type is a union type, split it and return the tests for each type
 * @param {string} str
 * @return {array} tests
 */
function getPipedTypes(str) {
  if (cachedPipedTypes.has(str)) {
    return cachedPipedTypes.get(str);
  }
  return str.split('|').reduce(function (testsForKey, t) {
    var itCanBeNull = false;
    var type = t.trim();
    if (type.endsWith('?')) {
      type = type.slice(0, -1);
      itCanBeNull = true;
    }
    // lookup the test for the type and add it to the testsForKey array
    var typeObj = typesMap.get(type);
    var test = typeObj !== null && typeObj !== void 0 ? typeObj : isNoType(type);
    if (test) {
      testsForKey.push(test);
    }
    // for optional types, add the tests for null and undefined
    if (itCanBeNull) {
      testsForKey.push(typesMap.get('null'), typesMap.get('undefined'));
    }
    cachedPipedTypes.set(str, testsForKey);
    return testsForKey;
  }, []);
}

/**
 * Get the tests for a type
 * @param {string} type
 * @return {function[]} tests
 * @throws {Error} if type is not supported
 */
function isNoType(type) {
  throw new Error("Type Error: \"".concat(type, "\" is not supported"));
}

/**
 * Determine the type of the expression
 * @param {any} strExp
 * @return {string}
 */
function determineMethod(strExp) {
  if (typeOf(strExp, 'array') || typeOf(strExp, 'object')) {
    return typeOf(strExp);
  }
  var __str = strExp.trim();
  if (startAndEndWith(__str, '[', ']')) {
    return 'array';
  }
  if (startAndEndWith(__str, '{', '}')) {
    return 'object';
  }
  return 'basic';
}

// =========================================
// --> Handlers for different types
// --------------------------

/**
 * Basic single types
 * @param {string} typeStr
 * @return {object} tests
 */
var basicTypes = function basicTypes(typeStr) {
  return getPipedTypes(typeStr);
};

/**
 * Handle array types
 * @param {string} strExp
 * @return {array} tests
 */
var arrayTypes = function arrayTypes(strExp) {
  var testUnit = [];
  var convertedObj = getArrObjFromString(strExp);
  convertedObj.forEach(function (test) {
    testUnit.push(testBuilder(test));
  });
  return testUnit;
};

/**
 * Handle object types
 * @param {string} strExp
 * @return {object} tests
 */
var objectTypes = function objectTypes(strExp) {
  return new ( /*#__PURE__*/function () {
    function handleObjects() {
      _classCallCheck(this, handleObjects);
      this.testUnit = new Map([['tests', new Map()], ['optionalKeys', []], ['testFew', []], ['testAllAny', false], ['testOnly', false]]);
      return this.handleObject();
    }
    _createClass(handleObjects, [{
      key: "checkOptionalKey",
      value: function checkOptionalKey(key) {
        if (key.endsWith('?')) {
          key = key.slice(0, -1);
          this.testUnit.get('optionalKeys').push(key);
        }
        return key;
      }
    }, {
      key: "checkTheAnyKey",
      value: function checkTheAnyKey(obj) {
        if ('any' in obj) {
          var keys = Object.keys(obj);
          if (keys.length === 1) {
            this.testUnit.set('testAllAny', true);
          } else {
            this.testUnit.set('testFew', keys.filter(function (key) {
              return key !== 'any';
            }));
          }
        }
      }
    }, {
      key: "handleObject",
      value: function handleObject() {
        var convertedObj = getArrObjFromString(strExp);
        this.checkTheAnyKey(convertedObj);
        for (var key in convertedObj) {
          var cleanKey = this.checkOptionalKey(key);
          var value = convertedObj[key];
          if (value === '...') {
            delete convertedObj[key];
            this.testUnit.set('testOnly', true);
            continue;
          }
          this.testUnit.get('tests').set(cleanKey, testBuilder(value));
        }
        return this.testUnit;
      }
    }]);
    return handleObjects;
  }())();
};

/**
 * Build the test unit
 * @param {any} strExp String expression
 * @return {object} testUnit
 * @throws {Error} if type is not supported
 * @example testBuilder('number') // returns {testMethod: 'basic', tests: [function]}
 * @example testBuilder('[number]') // returns {testMethod: 'array', tests: [[function]]}
 * @example testBuilder('{any: number}') // returns {testMethod: 'object', tests: {any: [function]}}
 * @usage See more cases in the 'type-pattern.txt' file
 */
function testBuilder(strExp) {
  if (cachedTests.has(strExp)) {
    return cachedTests.get(strExp);
  }
  var testUnit = new Map([['testMethod', determineMethod(strExp)], ['tests', null]]);
  switch (testUnit.get('testMethod')) {
    case 'basic':
      testUnit.set('tests', basicTypes(strExp));
      break;
    case 'array':
      testUnit.set('tests', arrayTypes(strExp));
      break;
    case 'object':
      /* eslint-disable-next-line */
      var objTypes = objectTypes(strExp);
      testUnit = new Map([].concat(_toConsumableArray(testUnit), _toConsumableArray(objTypes)));
      break;
    default:
      isNoType(strExp);
  }
  cachedTests.set(strExp, testUnit);
  return testUnit;
}

// Error collectot
var typeErrorLogs = [];
// Setting cache
var cachedSettings = new Map();
var runBasicTest = function runBasicTest(inputVal, tests) {
  return tests.some(function (test) {
    var testResult = test(inputVal);
    if (!testResult) {
      typeErrorLogs.push({
        value: inputVal,
        tests: tests
      });
    }
    return testResult;
  });
};
var runArrayTest = function runArrayTest(inputVal, tests) {
  // If the input is not an array, return false
  if (!typeOf(inputVal, 'array')) {
    return false;
  }
  // Else, test each value in the array
  return tests.every(function (test, index) {
    // console.log('is array: ', inputVal[index], test);
    return runRouteTest(inputVal[index], test);
  });
};
var HandleObjects = /*#__PURE__*/function () {
  function HandleObjects(inputVal, unitTest) {
    _classCallCheck(this, HandleObjects);
    // Extract all properties at once
    var _reduce = _toConsumableArray(unitTest.entries()).reduce(function (acc, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, key, value));
      }, {}),
      testOnly = _reduce.testOnly,
      testFew = _reduce.testFew,
      testAllAny = _reduce.testAllAny,
      optionalKeys = _reduce.optionalKeys,
      tests = _reduce.tests;
    // Use destructured variables
    this.testUnitKeys = _toConsumableArray(tests.keys());
    this.testOnly = testOnly;
    this.testFew = testFew;
    this.testAllAny = testAllAny;
    this.optionalKeys = optionalKeys;
    this.testCollection = tests;
    // the input object to test
    this.inputObject = inputVal;
  }
  _createClass(HandleObjects, [{
    key: "handleUnitTest",
    value: function handleUnitTest() {
      switch (true) {
        case this.testAllAny:
          // '{any: type}' // any key
          return this.testObjAllAny();
        case !isEmpty(this.testFew):
          // '{key1: type, any: type}'; // specific key, and all other "any"
          // test the testFew fist so that we can remove them from the inputObject
          /* eslint-disable-next-line */
          var testFewResults = this.testObjFew();
          // remove the testFew from the inputObject
          this.filterOutFew();
          return testFewResults && this.testObjAllAny();
        case !isEmpty(this.optionalKeys):
          // '{key1?: type, key2?: type}'; // optional keys
          // test the optionalKeys fist so that we can remove them from the inputObject
          /* eslint-disable-next-line */
          var optionalKeysResults = this.testObjOptionalKeys();
          // remove the optionalKeys from the inputObject
          this.filterOutOptionalKeys();
          return optionalKeysResults && this.defaultTest();
        case !this.testOnly:
          // '{key1: type, key2: type}'; // all keys
          for (var k in this.inputObject) {
            if (!this.testCollection.has(k)) {
              return false;
            }
          }
          // when testOnly it will bypass this and check only those found in the test collection
          // even if the test value has more keys
          break;
      }
      return this.defaultTest();
    }
  }, {
    key: "filterOutOptionalKeys",
    value: function filterOutOptionalKeys() {
      var _this = this;
      this.testUnitKeys = this.testUnitKeys.filter(function (item) {
        return !_this.optionalKeys.includes(item);
      });
    }
  }, {
    key: "filterOutFew",
    value: function filterOutFew() {
      var _this2 = this;
      this.inputObject = Object.fromEntries(Object.entries(this.inputObject).filter(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
          key = _ref4[0];
        return !_this2.testFew.includes(key);
      }));
    }
  }, {
    key: "testObjOptionalKeys",
    value: function testObjOptionalKeys() {
      var _this3 = this;
      return this.optionalKeys.every(function (key) {
        var test = _this3.testCollection.get(key);
        var testValue = _this3.inputObject[key];
        return !testValue ? true : runRouteTest(testValue, test);
      });
    }
  }, {
    key: "testObjFew",
    value: function testObjFew() {
      var _this4 = this;
      return this.testFew.every(function (key) {
        var test = _this4.testCollection.get(key);
        var testValue = _this4.inputObject[key];
        return runRouteTest(testValue, test);
      });
    }
  }, {
    key: "testObjAllAny",
    value: function testObjAllAny() {
      var _this5 = this;
      return Object.values(this.inputObject).every(function (value) {
        return runRouteTest(value, _this5.testCollection.get('any'));
      });
    }
  }, {
    key: "defaultTest",
    value: function defaultTest() {
      var _this6 = this;
      return this.testUnitKeys.every(function (key) {
        var test = _this6.testCollection.get(key);
        var testValue = _this6.inputObject[key];
        return runRouteTest(testValue, test);
      });
    }
  }]);
  return HandleObjects;
}();
var runObjectTest = function runObjectTest(inputVal, unitTest) {
  if (!typeOf(inputVal, 'object')) {
    return false;
  }
  return new HandleObjects(inputVal, unitTest).handleUnitTest();
};
function runRouteTest(inputVal, unitTest) {
  var testMethod = unitTest.get('testMethod');
  var tests = unitTest.get('tests');
  switch (testMethod) {
    case 'basic':
      return runBasicTest(inputVal, tests);
    case 'array':
      return runArrayTest(inputVal, tests);
    case 'object':
      return runObjectTest(inputVal, unitTest);
    // No change here as the entire Map is passed
    default:
      return false;
  }
}

/**
 * Get settings either from an object or a string keyword.
 * @param {Object | string} input - The settings object or keyword for predefined settings.
 * @return {object | null} - The settings object.
 */
function getSettings(input) {
  if (input) {
    if (cachedSettings.has(input)) {
      return cachedSettings.get(input);
    }
    // Check if input is an object
    var type = _typeof(input);
    var _val = null;
    switch (type) {
      case 'function':
        _val = {
          callback: input
        };
        break;
      case 'object':
        _val = input;
        break;
      case 'string':
        switch (input) {
          case 'log':
            _val = {
              log: true
            };
            break;
          case 'fail':
            _val = {
              fail: true
            };
            break;
          case 'return':
            _val = {
              "return": true
            };
            break;
          case 'validOutput':
            _val = {
              validOutput: input
            };
            break;
        }
        break;
    }
    cachedSettings.set(input, _val);
    return _val;
  }
  return {
    log: false,
    fail: false,
    "return": false,
    validOutput: false,
    callback: null
  };
}

/**
 * Throw an error with the last typeErrorLogs
 */
function typeError() {
  var errorLog = typeErrorLogs[typeErrorLogs.length - 1];
  console.log(typeErrorLogs);
  //clean the array of error logs
  typeErrorLogs.length = 0;
  throw new Error("Type Error: \"".concat(errorLog.value, "\" is not valid, see log console for details"));
}

/**
* TypeCheck
* @param {string} typeExp
* @param {any} inputVal
* @param {object | string} params Parameters for the typeCheck function. 
* @return {bool | any} TypeChecker By default it returns boolean, but if '.return()' is used it will return the inputVal
* @example typeCheck('number', 1) // true
* @example typeCheck('[number]', [1]) // true
* @example typeCheck('{any: number}', {x: 1, y: 2}) // true
* @example typeCheck('{y: number, x: string}', { x: 'string', y: 10 }, ($this) => {
        console.log('__testLogHere__', $this);
    }) // using call back function
* @usage (stringTypeExpression, anyInputValue, params: object | string)
* @usage params: object = { log: boolean, fail: boolean, callback: function }
* @usage params: string = 'log' | 'fail' | callback: function
* @usage chain Methods: log(), fail(), return() // returns the input value, test() returns the boolean
* @notes This function cannot validate the return value of a function when the validOutput is provided, use _tcx instead
* Params: log = true ; // logs the testData
* Params: fail = true ; // throws an error when the test fails
* Params: return = true ; // returns the inputVal
* Params: callback = function ; // callback function
* @see testUnit for more examples and test cases   
*/
var typeCheck = function typeCheck(typeExp, inputVal, params) {
  return new ( /*#__PURE__*/function () {
    function _class() {
      var _this$settings$callba;
      _classCallCheck(this, _class);
      this.unitTest = testBuilder(typeExp);
      this.testResult = runRouteTest(inputVal, this.unitTest);
      this.bool = this.testResult;
      this.settings = getSettings(params);
      this.callback = (_this$settings$callba = this.settings.callback) !== null && _this$settings$callba !== void 0 ? _this$settings$callba : null;
      this.testData = {
        typeExp: typeExp,
        inputVal: inputVal,
        callback: this.callback,
        unitTest: this.unitTest,
        testResult: this.testResult
      };
      if (this.settings.log) {
        this.log();
      }
      if (this.settings.fail) {
        this.fail();
      }
      if (this.callback) {
        this.callback(this.testData);
      }
    }
    _createClass(_class, [{
      key: "test",
      value: function test() {
        return this.testResult;
      }
    }, {
      key: "log",
      value: function log() {
        console.table(this.testData);
        return this;
      }
    }, {
      key: "fail",
      value: function fail() {
        if (!this.testResult) {
          return typeError();
        }
        return this;
      }
    }, {
      key: "return",
      value: function _return() {
        return inputVal;
      }
    }]);
    return _class;
  }())();
};

/**
 * @module Teleport
 * Teleport an element to another place in the DOM before, inside or after a target
 * @param {Object|String} props || selector - props object (domElement: element, adaptiveId: null|uniqueId})
 * @example new Teleport({domElement: element, adaptiveId: uniqueId}).beam({to: selector})
 * @example new Teleport(domElement).beam({after: selector})
 * @example new Teleport(domElement).beam({before: selector})
 * @example new Teleport(domElement).beam(selector) // defaults to "to" which is inside the selector
 * @example const eleTeleport = new Teleport(domElement) // returns the object with eleTeleport{beam(String|Object), back(), cancel()}
 * @example Make it global so that is available in the browser and works as a 'window' library
 *   TeleportGlobal()
 *      - <div data-teleport="selector"></div>
 *      - <div data-teleport="{before: 'selector'}"></div>
 *     - <div data-teleport="{after: 'selector'}"></div>
 * @feature If the target (element where it will be sent to) is not in the DOM it will wait until it is and then it will beam the element
 * @return {Object} Teleport object
 */
var Teleport = /*#__PURE__*/function () {
  /**
   * Constructor
   * @param {String|Object} selector || props object (see AdaptiveElement)
   * @return {Object}
   */
  function Teleport(props) {
    _classCallCheck(this, Teleport);
    // Early exit if no props are provided
    if (!typeCheck('string | object', props).test()) { return; }
    this.props = props;
    if (!this.props.adaptiveId) {
      var _element$getAttribute;
      var element = selectElement(this.props);
      var attrId = (_element$getAttribute = element.getAttribute('data-adaptive-id')) !== null && _element$getAttribute !== void 0 ? _element$getAttribute : null;
      // If adaptiveId is not present, create or retrieve it
      var uniqueId = attrId || element.getHash();
      if (!attrId) {
        element.domElement.setAttribute('data-adaptive-id', uniqueId);
      }

      // Update props with additional properties
      this.props = Object.assign({}, this.props, {
        adaptiveId: uniqueId,
        helper: element,
        domElement: element.domElement,
        xpath: element.getXpathTo()
      });
    }
    var placeholder = selectElement("[name=\"adaptive\"][value=\"".concat(this.props.adaptiveId, "\""));
    if (!placeholder.isInDom()) {
      placeholder = document.createElement('param');
      placeholder.name = 'adaptive';
      placeholder.value = this.props.adaptiveId;
      this.props.domElement.insertAdjacentElement('beforebegin', placeholder);
    }
  }

  /**
   * Beam the element to another place in the DOM
   * This method will look for the "tagert" element if it is in the DOM and it will querying the DOM until it finds it
   * if the target is not found call the cancel() method to stop the observer
   * @param {String|Object} target (selector) directive defaults to "to" || {to|after|before: target}
   * @example new Teleport(domElement).beam({after: selector})
   * @example domElement.beam({after: selector})
   */
  _createClass(Teleport, [{
    key: "beam",
    value: function beam(settings) {
      var _this = this;
      settings = getDirectivesFromString(settings).directive;

      // Transform settings to an array format
      switch (typeOf(settings)) {
        case 'string':
          settings = ['default', settings];
          break;
        case 'object':
          var key = Object.keys(settings)[0];
          settings = [key, settings[key]];
          break;
        case 'array':
          if (settings.length === 1) {
            settings = ['default', settings[0]];
          }
          break;
      }
      var _settings = settings,
        _settings2 = _slicedToArray(_settings, 2),
        direction = _settings2[0],
        selector = _settings2[1];
      var target = selectElement(selector);
      var position = 'beforeend';
      switch (direction) {
        case 'before':
          position = 'beforebegin';
          break;
        case 'after':
          position = 'afterend';
          break;
      }
      if (target.isInDom()) {
        target.domElement.insertAdjacentElement(position, this.props.domElement);
        return;
      }

      // Add observer if the target is not in the DOM
      DomObserver$1.addOnNodeChange(this.props.adaptiveId, function () {
        var observedTarget = selectElement(selector);
        if (observedTarget.isInDom()) {
          observedTarget.domElement.insertAdjacentElement(position, _this.props.domElement);
          DomObserver$1.removeOnNodeChange(_this.props.adaptiveId);
        }
      });
    }

    /**
     * Return to its original place
     * @example new Teleport(domElement).back()
     * @example domElement.back()
     */
  }, {
    key: "back",
    value: function back() {
      var target = selectElement("[name=\"adaptive\"][value=\"".concat(this.props.adaptiveId, "\""));
      if (target.isInDom()) {
        target.domElement.insertAdjacentElement('afterend', this.props.domElement);
        // target.domElement.remove();
      }
    }

    /**
     * If element target is no it the DOM and needs to cancel the observer
     * @example new Teleport(domElement).cancel()
     * @example domElement.cancel()
     */
  }, {
    key: "cancel",
    value: function cancel() {
      DomObserver$1.removeOnNodeChange(this.props.adaptiveId);
    }
  }]);
  return Teleport;
}(); // Storage
var TeleportIsGlobal = false;

/**
 * Warning, this will make it global and would work with data attr like data-teleport
 * @example new Teleport().global()
 */
function TeleportGlobal() {
  // Exit if already initialized
  if (TeleportIsGlobal) { return; }

  // Use forEach directly on NodeList
  document.querySelectorAll('[data-teleport]').forEach(function (element) {
    new Teleport(element).beam(element.getAttribute('data-teleport'));
  });

  // Mark as initialized
  TeleportIsGlobal = true;
}

// Author Knighttower
// MIT License
// Copyright (c) [2022] [Knighttower] https://github.com/knighttower

/**
 * @class CSS Query Handler
 * @return QueryHandler
 */
var QueryHandler = (function QueryHandler() {
  var $window = typeof window !== 'undefined' ? window : {};
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
  var loaded = false;

  // =========================================
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
      var values = queries[query];

      // Set a preset if found or just the query in case is custom
      var queryExpression = (_getPreset = getPreset(query, Adaptive)) !== null && _getPreset !== void 0 ? _getPreset : query;

      // If it does not exists, add it as an array
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
   * Remove items from domQueriesMatch based on value and prop.
   *
   * @param {any} value - The value to be removed.
   * @param {string} prop - The property to look up in the object.
   */
  $this.remove = function (value, prop) {
    for (var _i = 0, _Object$entries = Object.entries(domQueriesMatch); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        expression = _Object$entries$_i[0],
        collection = _Object$entries$_i[1];
      var _iterator = _createForOfIteratorHelper(collection),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var reg = _step.value;
          var type = _typeof(reg[1]);
          // LookUp by the prop value when the second array element is an object
          if (prop && type === 'object') {
            if (prop in reg[1] && reg[1][prop] === value) {
              console.log(domQueriesMatch[expression]);
              domQueriesMatch[expression] = domQueriesMatch[expression].filter(function (o) {
                return o[1][prop] !== value;
              });
            }
            // LookUp by the value (function) and prop when the second array element is a string
          } else if (type === 'string' && reg[1] === prop) {
            domQueriesMatch[expression] = domQueriesMatch[expression].filter(function (o) {
              return o[0] !== value;
            });
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
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
      registerQueryListener(queryExpression);
      // Run the queries on load once
      singleRun(queryExpression);
    });
  };

  /**
   * Reset the whole object | warning
   * @return {Void}
   */
  $this.reset = function () {
    Object.keys(registeredQueries).forEach(function (queryExpression) {
      $window.matchMedia(queryExpression).removeEventListener('change', registeredQueries[queryExpression]);
      delete registeredQueries[queryExpression];
    });
    Object.keys(domQueriesMatch).forEach(function (key) {
      return delete domQueriesMatch[key];
    });
    Object.keys(domQueriesUnMatch).forEach(function (key) {
      return delete domQueriesUnMatch[key];
    });
  };

  // =========================================
  // --> PRIVATE
  // --------------------------

  function singleRun(queryExpression) {
    var mq = $window.matchMedia(queryExpression);
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
    };

    // -----------------------------------------
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
        }
        // No need to build the expression as it already is
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
      var matchQuery = $window.matchMedia(queryExpression);
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
    // For those added after the loaded event
    if (loaded) {
      singleRun(queryExpression);
    }
  }
  return $window.QueryHandler = QueryHandler;
})();

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
    var _this = this;
    _classCallCheck(this, AdaptiveElement);
    _defineProperty(this, "_addClass", function ($classes) {
      $classes = $classes.split(' ');
      $classes.forEach(function ($class) {
        _this.props.domElement.classList.add($class);
      });
      return;
    });
    _defineProperty(this, "_removeClass", function ($classes) {
      $classes = $classes.split(' ');
      $classes.forEach(function ($class) {
        _this.props.domElement.classList.remove($class);
      });
      return;
    });
    this.props = props;
    this.Adaptive = Adaptive;
    for (var directive in props.settings) {
      // Matches the method name and passes the directives
      this[directive](props.settings[directive]);
    }
  }
  _createClass(AdaptiveElement, [{
    key: "addClass",
    value: function addClass(queries) {
      return QueryHandler.add(queries, this._addClass, this._removeClass, this.Adaptive);
    }
  }, {
    key: "removeClass",
    value: function removeClass(queries) {
      return QueryHandler.add(queries, this._removeClass, this._addClass, this.Adaptive);
    }
  }, {
    key: "addStyle",
    value: function addStyle(queries) {
      var _this2 = this;
      // Save the original style in memory to not discard them
      this.props.originalStyle = this.props.domElement.getAttribute('style');
      return QueryHandler.add(queries, function ($styles) {
        return _this2.props.domElement.style.cssText += $styles;
      }, function () {
        return _this2.props.domElement.style.cssText = _this2.props.originalStyle;
      }, this.Adaptive);
    }
  }, {
    key: "teleport",
    value: function teleport(queries) {
      var $element = new Teleport(this.props);
      return QueryHandler.add(queries, function ($directive) {
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
      return QueryHandler.add(queries, function ($callback) {
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

/**
 * Adaptive Teleport
 * @module
 * @example <teleport-to target="" position=""></teleport-to>
 * @property {String|Object} target
 * @property {String} target
 */
var TeleportTo$1 = {
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
  },
  template: "\n        <div>\n            <div v-teleport-to=\"directive\">\n                <slot></slot>\n            </div>\n        </div>\n    "
};

var TeleportTo = /*#__PURE__*/function (_HTMLElement) {
  _inherits(TeleportTo, _HTMLElement);
  var _super = _createSuper(TeleportTo);
  function TeleportTo() {
    _classCallCheck(this, TeleportTo);
    return _super.call(this);
  }
  _createClass(TeleportTo, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this$getAttribute;
      var target = this.getAttribute('target');
      var position = (_this$getAttribute = this.getAttribute('position')) !== null && _this$getAttribute !== void 0 ? _this$getAttribute : 'to';
      var dId = this.getAttribute('data-adaptive-id');
      if (target && !dId) {
        return new Teleport(this).beam("".concat(position, "(").concat(target, ")"));
      }
    }
  }]);
  return TeleportTo;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
function componentTeleportTo() {
  customElements.define('teleport-to', TeleportTo);
}

// =========================================
// --> ADAPTIVE JS
// --------------------------

/**
 * @module Adaptive
 * Add/remove classes/styles or teleport an element
 * @return {Object}
 * @example Adaptive(window, Adaptive)
 * @example Adaptive(this, Adaptive)
 * @example Adaptive.registerElement(element)
 * @see "example" folder for more
 */
var _adaptive = function () {

  var $window = typeof window !== 'undefined' ? window : {};

  // -----------------------------------------
  // This will make it reuse the same instance if already imported without overwrites
  if ($window.$adaptive) {
    return $window.$adaptive;
  }
  // -----------------------------------------

  /**
   * Register this library into the $window
   * @private
   * @return {Object}
   */
  var $this = {
    _mutable: ['registerElement', 'addQueryMinMax', 'addQueryExpression']
  };
  var Adaptive = proxyObject($this);

  /**
   * All the elements that will be part of the grid
   * @private
   */
  var domElements = {};

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
   * Flag for using React
   * @private
   */
  var useReact = false;

  /**
   * Flag for using React
   * @private
   */
  var useWeb = false;

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
    320: [1, 379],
    480: [380, 519],
    520: [520, 599] /* up to : mobiles */,
    600: [600, 699] /* up to : mid-size-tables */,
    700: [700, 799] /* up to : tablets / ipad */,
    800: [800, 919] /* transition in between tablets and desktop */,
    920: [920, 999] /* from here on for desktops */,
    1000: [1000, 1199],
    1200: [1200, 1439],
    1440: [1440, 1599],
    1600: [1600, 1700]
  };

  /**
   * break the 3 major device types
   * @private
   */
  var devices = {
    mobile: [1, 599] /* Actual phones */,
    tablet: [600, 799] /* tablets in portrait or below */,
    odd: [800, 1023] /* small Laptops and Ipads in landscape */,
    desktop: [1024, 1920] /* Most common resolutions below 1920 */
  };

  /**
   * break the 3 major device types
   * @private
   */
  var broadMediaQueries = {
    'non-desktop': [100, 1023],
    nondesktop: [100, 1023],
    fullscreen: [1920, 6000] /* Large monitos and fullscreen in 1920 res */
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
  var customExpressionQueries = {};

  // =========================================
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

  /**
   * @memberof Adaptive
   * @inner
   * Get all the available min max queries
   * @return {Object}
   */
  $this.getMinMaxQueries = function () {
    return Object.assign({}, screens, devices, broadMediaQueries, customMinMaxQueries);
  };

  /**
   * @memberof Adaptive
   * @inner
   * Get all the available "expression" queries
   * @return {Object}
   */
  $this.getExpQueries = function () {
    return Object.assign({}, customExpressionQueries);
  };

  /**
   * @memberof Adaptive
   * @inner
   * Register an element
   * @param {String|Object} elementOrSelector
   * @param {Object} data Optional used directly to add the directives, but is mostly for VUe
   * @return {Void}
   */
  $this.registerElement = function (elementOrSelector, data) {
    var helper = selectElement(elementOrSelector);
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
      var settings = getDirectivesFromString(data || element.getAttribute('data-adaptive')).directive;

      //set the unique id to the element for later use
      element.domElement.setAttribute('data-adaptive-id', uniqueId);
      domElements[uniqueId] = new AdaptiveElement({
        adaptiveId: uniqueId,
        helper: element,
        domElement: element.domElement,
        xpath: element.getXpathTo(),
        settings: settings,
        useVue: useVue,
        useReact: useReact
      }, $this);
      return uniqueId;
    }
  }

  /**
   * @memberof Adaptive
   * @inner
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
   * @memberof Adaptive
   * @inner
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

  /**
   * @memberof Adaptive
   * @inner
   * Register A custom Query Expression
   * @param {String} breakdownId Identifier like "tablet" or "mobile", etc
   * @param {Fucntion|Array} callback Function/Method or Array with object and property to set
   * @example Adaptive.if('mobile', [object, propertyId]) || Adaptive.if('mobile', () => {})
   * @return {Object} Proxy
   */
  $this["if"] = function (breakdownId) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var isFunction = callback && typeof callback === 'function';
    var isArray = callback && Array.isArray(callback);
    var observer = {};
    observer[breakdownId] = {
      _private: ['breakdownId', 'match', 'ifElse', 'do', 'removeAfterExec'],
      _mutable: ['ifElse', 'match', 'removeAfterExec'],
      uid: getDynamicId(),
      breakdownId: breakdownId,
      match: false,
      executed: false,
      removeAfterExec: false,
      ifElse: null,
      "else": function _else(ifElse) {
        if (ifElse && typeof ifElse === 'function') {
          this.ifElse = ifElse;
        }
      },
      onlyOnce: function onlyOnce() {
        this.removeAfterExec = true;
        if (this.executed) {
          QueryHandler.remove(this.uid, 'uid');
        }
      },
      "do": function _do() {
        if (this.match) {
          if (isFunction) {
            callback();
          }
          if (isArray) {
            callback[0][callback[1]] = true;
          }
          if (this.removeAfterExec) {
            QueryHandler.remove(this.uid, 'uid');
          }
          this.executed = true;
          return true;
        }
        if (isArray) {
          callback[0][callback[1]] = false;
        }
        if (this.ifElse) {
          this.ifElse();
        }
        return false;
      }
    };
    QueryHandler.add(observer, function (o) {
      o.match = true;
      o["do"]();
    }, function (o) {
      o.match = false;
      o["do"]();
    }, $this);
    return proxyObject(observer[breakdownId]);
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
  };

  // =========================================
  // --> DomReady and INIT
  // --------------------------

  /**
   * Real init for the app
   * @private
   */
  function _init() {
    isMounted = true;
    document.querySelectorAll('[data-adaptive]:not([data-adaptive-id])').forEach(function (element, index) {
      $this.registerElement(element);
    });
    QueryHandler.init();
    if (useVue || useReact) {
      // hybrid mode
      // support for static and dynamic elements
      if (isHybrid) {
        TeleportGlobal();
      }
    } else {
      // vanilla js
      TeleportGlobal();
    }
  }

  /**
   * @memberof Adaptive
   * @inner
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
      document.addEventListener('DOMContentLoaded', domIsReady);
      // A fallback to $window.onload, that will always work
      $window.addEventListener('load', domIsReady);
    }
    return;
  };

  /**
   * When ready trigger the initialization
   * @private
   */
  function domIsReady() {
    document.removeEventListener('DOMContentLoaded', domIsReady);
    $window.removeEventListener('load', domIsReady);
    _init();
    return;
  }

  /**
   * @memberof Adaptive
   * @inner
   * For use with Vue
   * @param {Vue} Vue Vue instance
   * @param {Boolean} hybrid Allow support when using static and dynamic
   * @return {Vue}
   */
  $this.useVue = function (Vue) {
    var hybrid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (hybrid) {
      isHybrid = true;
    }
    if (_typeof(Vue) === 'object' && typeof Vue.mixin === 'function') {
      // const TeleportTo = import('./vue-components/TeleportTo.js');
      useVue = true;
      var installer = {
        install: function install(app, options) {
          // For Options API
          app.config.globalProperties.Adaptive = Adaptive;
          // For composition API
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
          return new Teleport(element).beam(binding.value);
        }
      });
      Vue.component('teleport-to', TeleportTo$1);

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

  //docs
  /**
   * For use with Web Components
   * @private
   * @return {Void}
   */
  $this.useWebComponent = function () {
    if (!useWeb && !useVue) {
      componentTeleportTo();
      useWeb = true;
    }
  };

  /**
   * @memberof Adaptive
   * @inner
   * For use with React
   * @param {React} React React instance
   * @param {Boolean} hybrid Allow support when using static and dynamic
   * @return {Void}
   */
  $this.useReact = function (React) {
    var hybrid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (hybrid) {
      isHybrid = true;
    }
    if (_typeof(React) === 'object') {
      $this.useWebComponent();
      useReact = true;
    }
  };
  return $window.$adaptive = Adaptive;
}();

exports.Adaptive = _adaptive;
exports.adaptive = _adaptive;
exports.default = _adaptive;
