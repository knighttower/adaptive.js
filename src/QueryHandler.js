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
(function(root, factory) {
    'use strict';
    if (typeof module === 'object' && typeof exports === 'object') {
        module.exports = factory(root);
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        factory(root);
    }
})(typeof window !== 'undefined' ? window : this, function(window) {
    'use strict';
    /**
     * Query Handler Class Object
     * @private
     * @return {Object}
     */
    const $this = {};

    /**
     * Holds memory of registered queries expressions
     * @private
     */
    const registeredQueries = {};

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

    // =========================================
    // --> PUBLIC
    // --------------------------

    /**
     * Register a query
     * @param {String} queries Media query
     * @param {Function} matchCallback Callback
     * @param {Function} unMatchCallback Callback
     * @return {Void}
     */
    $this.add = function(queries, matchCallback, unMatchCallback, Adaptive) {
        for (let query in queries) {
            let values = queries[query];
            let queryExpression = query;
            let queryPreset, customExpression;

            if (Adaptive && Adaptive === window.Adaptive) {
                queryPreset = Adaptive.getMinMaxQueries()[query];
                customExpression = Adaptive.getExpQueries()[query];
            }

            if (queryPreset) {
                queryExpression = `(min-width: ${queryPreset[0]}px) and (max-width: ${queryPreset[1]}px)`;
            } else if (customExpression) {
                queryExpression = customExpression;
            }

            let isRegistered = Boolean(domQueriesMatch[queryExpression]);

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
    $this.init = () => {
        registerQueryListeners();
        onLoad();
    };

    $this.reset = () => {
        Object.keys(registeredQueries).forEach((queryExpression) => {
            window.matchMedia(queryExpression).removeEventListener('change', registeredQueries[queryExpression]);
            delete registeredQueries[queryExpression];
        });
        Object.keys(domQueriesMatch).forEach((key) => delete domQueriesMatch[key]);
        Object.keys(domQueriesUnMatch).forEach((key) => delete domQueriesUnMatch[key]);
    };

    // =========================================
    // --> PRIVATE
    // --------------------------

    /**
     * @private
     */
    function onLoad() {
        Object.keys(domQueriesMatch).forEach((queryExpression) => {
            let mq = window.matchMedia(queryExpression);
            if (mq.matches) {
                domQueriesMatch[mq.media].forEach(function(callback) {
                    return callback[0](callback[1]);
                });
            }
        });
    }

    /**
     * @private
     */
    function registerQueryListeners() {
        Object.keys(domQueriesMatch).forEach((queryExpression) => {
            let isRegistered = Boolean(registeredQueries[queryExpression]);
            if (!isRegistered) {
                let matchQuery = window.matchMedia(queryExpression);
                let callback = (mq) => {
                    if (!mq.matches) {
                        domQueriesUnMatch[mq.media].forEach(function(callback) {
                            return callback[0](callback[1]);
                        });
                    } else {
                        domQueriesMatch[mq.media].forEach(function(callback) {
                            return callback[0](callback[1]);
                        });
                    }
                };

                registeredQueries[queryExpression] = callback;
                return matchQuery.addEventListener('change', callback);
            }
        });
    }

    return (window.AdaptiveQH = $this);
});
