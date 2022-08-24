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

import ElementHelper from './ElementHelper.js';
import AdaptiveElement from './AdaptiveElement.js';
import Teleport from './Teleport.js';
import GetSettings from './GetSettings.js';
import TeleportTo from './vue-components/teleport.vue';

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
     * Holds memory of registered domobserver callbacks
     * @private
     */
    const domObserver = [];

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
        if (helper.isInDom()) {
            return registerThis(helper, data);
        } else {
            helper.whenInDom().then(function(element) {
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
            let uniqueId = element.getHash();
            element.domElement.setAttribute('data-adaptive-id', uniqueId);

            domElements[uniqueId] = new AdaptiveElement(
                {
                    adaptiveId: uniqueId,
                    helper: element,
                    domElement: element.domElement,
                    xpath: element.getXpathTo(),
                    settings: GetSettings(data || element.getAttribute('data-adaptive')),
                    useVue: useVue,
                },
                Adaptive
            );

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

    Adaptive.if = function(breakdownId, callback = null) {
        if (Adaptive.getAllQueries()[breakdownId]) {
            let isFunction = callback && typeof callback === 'function';
            let isArray = callback && Array.isArray(callback);
            let observer = {};

            observer[breakdownId] = {
                breakdownId: breakdownId,
                match: false,
                isMatch() {
                    this.match = true;
                },
                unMatch() {
                    this.match = false;
                },
                do() {
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
                },
            };

            QueryHandler.add(
                observer,
                (o) => {
                    o.isMatch();
                    o.do();
                },
                (o) => {
                    o.unMatch();
                    o.do();
                },
                Adaptive
            );

            return observer[breakdownId];
        }
    };

    /**
     * Full reset, handle with care
     * @private
     * @return {Void}
     */
    Adaptive.reset = () => {
        Object.keys(domElements).forEach((key) => delete domElements[key]);
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
        Array.from(document.querySelectorAll('[data-adaptive]:not([data-adaptive-id])')).forEach(function(
            element,
            index
        ) {
            Adaptive.registerElement(element);
        });

        QueryHandler.init();
        if (isHybrid) {
            new Teleport().global();
        }
    }

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

    Adaptive.useVue = (Vue, hybrid = false) => {
        if (hybrid) {
            isHybrid = true;
        }
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
                mounted: (element, binding, vnode, prevVnode) => {
                    Adaptive.registerElement(element, binding.value);
                },
            });

            /**
             * Adaptive used as v-teleport-to
             * @private
             */
            Vue.directive('teleport-to', {
                mounted: (element, binding, vnode, prevVnode) => {
                    return new Teleport(element).beam(binding.value);
                },
            });

            Vue.component('teleport-to', TeleportTo);

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

    return (window.Adaptive = Adaptive);
})(typeof window !== 'undefined' ? window : this);
