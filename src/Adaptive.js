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

import DomObserver from './DomObserver.js';
import ElementHelper from './ElementHelper.js';

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
export default (function(window) {
    'use strict';

    /**
     * Register this library into the window
     * @private
     * @return {Object}
     */
    const Adaptive = {};

    /**
     * All the elements that will be part of the grid
     * @private
     */
    const domElements = {};

    /**
     * Holds memory of registered queries to match
     * @private
     */
    const domQueriesMatch = {};

    /**
     * Holds memory of registered queries to Unmatch
     * @private
     */
    const domQueriesUnMatch = {};

    /**
     * Holds memory of registered domobserver callbacks
     * @private
     */
    const domObserver = [];

    /**
     * Flag for isMounted
     * @private
     */
    var isMounted = false;

    var useVue = false;
    var Vue = null;

    /**
     * queries possible sizes
     * @private
     */
    const screens = {
        '320': [1, 379],
        '480': [380, 519],
        '520': [520, 599] /* up to : mobiles */,
        '600': [600, 699] /* up to : mid-size-tables */,
        '700': [700, 799] /* up to : tablets / ipad */,
        '800': [800, 919] /* transition in between tablets and desktop */,
        '920': [920, 999] /* from here on for desktops */,
        '1000': [1000, 1199],
        '1200': [1200, 1439],
        '1440': [1440, 1599],
        '1600': [1600, 1700],
    };

    /**
     * break the 3 major device types
     * @private
     */
    const devices = {
        mobile: [1, 599] /* Actual phones */,
        tablet: [600, 799] /* tablets in portrait or below */,
        'odd-device': [800, 1024] /* small Laptops and Ipads in landscape */,
        desktop: [1025, 1440] /* Most common resolutions below 1920 */,
    };

    /**
     * break the 3 major device types
     * @private
     */
    const broadMediaQueries = {
        'non-desktop': [100, 1024],
        fullscreen: [1441, 6000] /* Large monitos and fullscreen in 1920 res */,
    };

    /**
     * To register additional custom queries add the key:[min, max]
     * @private
     */
    const customMinMaxQueries = {};

    /**
     * To register additional custom queries add the key:'Query Expression'
     * @private
     */
    const customExpressionQueries = {};

    // =========================================
    // --> Utility
    // --------------------------

    /**
     * Get all the available queries
     * @private
     * @return {Object}
     */
    Adaptive.getAllQueries = () => {
        return Object.assign({}, screens, devices, broadMediaQueries, customMinMaxQueries, customExpressionQueries);
    };

    Adaptive.getMinMaxQueries = () => {
        return Object.assign({}, screens, devices, broadMediaQueries, customMinMaxQueries);
    };

    Adaptive.getExpQueries = () => {
        return Object.assign({}, customExpressionQueries);
    };

    /**
     * Register an element
     * @param {String|Object} elementOrSelector
     * @param {Object} data Optional used directly to add the directives, but is mostly for VUe
     * @return {Void}
     */
    Adaptive.registerElement = (elementOrSelector, data) => {
        let helper = new ElementHelper(elementOrSelector);
        // Register only unique non indexed elements
        if (!helper.getAttribute('data-adaptive-id')) {
            let uniqueId = helper.getHash();
            helper.domElement.setAttribute('data-adaptive-id', uniqueId);

            domElements[uniqueId] = new AdaptiveElement({
                adaptiveId: uniqueId,
                helper: helper,
                domElement: helper.domElement,
                xpath: helper.getXpathTo(),
                settings: data || helper.getAttribute('data-adaptive'),
            });
        }

        return;
    };

    /**
     * Register A custom Query Min, Max
     * @param {String} id Identifier
     * @param {Number} min Number only, no units attached as it only handles pixels here
     * @param {Number} max Number only, no units attached as it only handles pixels here
     * @return {Void}
     */
    Adaptive.addQueryMinMax = function(id, min, max) {
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
    Adaptive.addQueryExpression = function(id, query) {
        if (!customExpressionQueries[id]) {
            customExpressionQueries[id] = query;
        }
    };

    // =========================================
    // --> Instance Protototypes
    // --------------------------

    /**
     * Creates a new Adaptive object per element
     * @private
     * @param {Object} props
     * @return {Object}
     */
    function AdaptiveElement(props) {
        this.props = props;
        for (let directive in props.settings) {
            this[directive](props.settings[directive]);
        }
    }

    /**
     * Add Adaptive prototype
     * @private
     */
    AdaptiveElement.prototype = {
        addClass: function(queries) {
            return new QueryHandler(
                queries,
                ($classes) => {
                    $classes = $classes.split(' ');
                    $classes.forEach(($class) => {
                        this.props.domElement.classList.add($class);
                    });
                    return;
                },
                ($classes) => {
                    $classes = $classes.split(' ');
                    $classes.forEach(($class) => {
                        this.props.domElement.classList.remove($class);
                    });
                    return;
                }
            );
        },
        removeClass: function(queries) {
            return new QueryHandler(
                queries,
                ($classes) => {
                    $classes = $classes.split(' ');
                    $classes.forEach(($class) => {
                        this.props.domElement.classList.remove($class);
                    });
                    return;
                },
                ($classes) => {
                    $classes = $classes.split(' ');
                    $classes.forEach(($class) => {
                        this.props.domElement.classList.add($class);
                    });
                    return;
                }
            );
        },
        addStyle: function(queries) {
            // Save the original style in memory to not discard them
            this.props.originalStyle = this.props.domElement.getAttribute('style');

            return new QueryHandler(
                queries,
                ($styles) => {
                    return (this.props.domElement.style.cssText += $styles);
                },
                () => {
                    return (this.props.domElement.style.cssText = this.props.originalStyle);
                }
            );
        },
        teleport: function(queries) {
            let placeholder = document.createElement('param');
            placeholder.name = 'adaptive';
            placeholder.value = this.props.adaptiveId;
            this.props.domElement.insertAdjacentElement('beforebegin', placeholder);

            return new QueryHandler(
                queries,
                ($directive) => {
                    // Defaults to "to" target if only the selector is passed
                    if (typeof $directive === 'string') {
                        $directive = { to: $directive };
                    }
                    let direction = Object.keys($directive)[0];
                    let selector = $directive[direction];
                    let target = new ElementHelper(selector);
                    let position = 'beforeend';
                    switch (target) {
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
                        let self = this;

                        domObserver.push(self.props.adaptiveId);
                        DomObserver.addOnNodeChange(self.props.adaptiveId, () => {
                            let target = new ElementHelper(selector);
                            if (target.isInDom()) {
                                target.domElement.insertAdjacentElement(position, self.props.domElement);
                                DomObserver.removeOnNodeChange(self.props.adaptiveId);
                                delete domObserver[self.props.adaptiveId];
                            }
                        });
                    }

                    return;
                },
                () => {
                    let target = new ElementHelper(`[name="adaptive"][value="${this.props.adaptiveId}"`);
                    if (target.isInDom()) {
                        target.domElement.insertAdjacentElement('afterend', this.props.domElement);
                        // target.domElement.remove();
                    }
                }
            );
        },
    };

    /**
     * Handle all queries functions
     * @private
     * @param {String} queries Media query
     * @param {Function} matchCallback Callback
     * @param {Function} unMatchCallback Callback
     * @return {Object}
     */
    function QueryHandler(queries, matchCallback, unMatchCallback) {
        for (let query in queries) {
            let values = queries[query];
            let queryPreset = Adaptive.getMinMaxQueries()[query];
            let customExpression = Adaptive.getExpQueries()[query];
            let queryExpression = query;

            if (queryPreset) {
                queryExpression = `(min-width: ${queryPreset[0]}px) and (max-width: ${queryPreset[1]}px)`;
            } else if (customExpression) {
                queryExpression = customExpression;
            }

            this.queryIsRegistered = Boolean(domQueriesMatch[queryExpression]);

            if (!this.queryIsRegistered) {
                domQueriesMatch[queryExpression] = [];
                domQueriesUnMatch[queryExpression] = [];
            }

            domQueriesMatch[queryExpression].push([matchCallback, values]);
            domQueriesUnMatch[queryExpression].push([unMatchCallback, values]);

            let matchQuery = window.matchMedia(queryExpression);
            this.createListener(matchQuery);
        }
    }

    /**
     * Add Query prototype
     * @private
     */
    QueryHandler.prototype = {
        createListener: function(matchQuery) {
            var $self = this;
            $self.match(matchQuery);
            if (!$self.queryIsRegistered) {
                matchQuery.addListener($self.match);
            }
            return;
        },
        match: function(matchQuery) {
            if (matchQuery.matches) {
                domQueriesMatch[matchQuery.media].forEach(function(callback) {
                    return callback[0](callback[1]);
                });
            } else {
                domQueriesUnMatch[matchQuery.media].forEach(function(callback) {
                    return callback[0](callback[1]);
                });
            }

            return;
        },
    };

    /**
     * Full reset, handle with care
     * @private
     * @return {Void}
     */
    Adaptive.reset = () => {
        Object.keys(domElements).forEach((key) => delete domElements[key]);
        Object.keys(domQueriesMatch).forEach((key) => delete domQueriesMatch[key]);
        Object.keys(domQueriesUnMatch).forEach((key) => delete domQueriesUnMatch[key]);
        domObserver.forEach((callback) => {
            DomObserver.removeOnNodeChange(callback);
            DomObserver.removeOnAttrChange(callback);
        });
        isMounted = false;

        return;
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
        Array.from(document.querySelectorAll('[data-adaptive]:not([data-adaptive-id])')).forEach(function(
            element,
            index
        ) {
            Adaptive.registerElement(element);
        });
        return;
    }

    Adaptive.useVue = (Vue) => {
        if (typeof Vue === 'object' && typeof Vue.mixin === 'function') {
            useVue = true;
            let installer = {
                install: (app, options) => {
                    // For Options API
                    app.config.globalProperties.$Adaptive = Adaptive;
                    // For composition API
                    app.provide('Adpative', Adaptive);
                },
            };

            let directive = {
                mounted: (element, binding, vnode, prevVnode) => {
                    Adaptive.registerElement(element, binding.value);
                },
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
            Vue.directive('Adaptive', directive);
            /**
             * Adaptive used for non Vue elements register with data-adaptive attr
             * Hybrid mode
             * @private
             */
            Vue.mixin({
                mounted: () => {
                    return Adaptive.init();
                },
            });
        }

        return Vue;
    };

    /**
     * Initialization, cam be called externally to reinitialized after dom loaded
     * @return {Void}
     */
    Adaptive.init = () => {
        if (isMounted) {
            return false;
        }

        if (
            document.readyState === 'complete' ||
            (document.readyState !== 'loading' && !document.documentElement.doScroll)
        ) {
            return domIsReady();
        } else {
            // Use the handy event callback
            document.addEventListener('DOMContentLoaded', domIsReady);
            // A fallback to window.onload, that will always work
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

    return (window.Adaptive = Adaptive);
})(typeof window !== 'undefined' ? window : this);
