const { createApp } = Vue;
import { initial } from 'lodash';
import hello from './hello.vue';
import ElementHelper from './ElementHelper.js';

const app = createApp({});

app.component('hello', hello);
app.mount('#app');



// Monitor changes in the DOM
const callback = function (mutationList, observer) {
    // Use traditional 'for loops' for IE 11
    for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};
const config = { attributes: true, childList: true, subtree: true };

const observer = new MutationObserver(callback);
observer.observe((document.body), config);

(function (root, factory) {
    "use strict";

    if (typeof module === "object" && typeof exports === "object") {
        module.exports = factory(root);
    } else if (typeof define === "function" && define.amd) {
        define(factory);
    } else {
        factory(root);
    }
})(typeof window !== 'undefined' ? window : this, function (window) {
    "use strict";

    /**
    * Register this library into the window
    * @private
    * @return {Object}
    */
    const $this = (window.Adaptive = window.Adaptive || {});


    /**
    * All the elements that will be part of the grid
    * @private
    * @return {Object}
    */
    const domElements = {};


    /**
    * All the elements that will be part of the grid
    * @private
    * @return {Object}
    */
    const domQueriesMatch = {};
    const domQueriesUnMatch = {};

    /* set the queries possible sizes */
    //other sizes can be added to this array
    $this._screens = {
        '320': ['1', '379'],
        '480': ['380', '519'],
        '520': ['520', '599'], /* up to : mobiles */
        '600': ['600', '699'], /* up to : mid-size-tables */
        '700': ['700', '799'], /* up to : tablets / ipad */
        '800': ['800', '919'], /* transition in between tablets and desktop */
        '920': ['920', '999'], /* from here on for desktops */
        '1000': ['1000', '1199'],
        '1200': ['1200', '1439'],
        '1440': ['1440', '1599'],
        '1600': ['1600', '1700'],
    };

    /* break the 3 major device types */
    //do not remove or add devices !!
    $this._devices = {
        'mobile': ['1', '599'],/* Actual phones */
        'tablet': ['600', '799'],/* tablets in portrait or below */
        'odd-device': ['800', '1024'],/* small Laptops and Ipads in landscape */
        'desktop': ['1025', '1440'],/* Most common resolutions below 1920 */
    };


    $this._customMediaQueries = {
        'non-desktop': ['100', '1024'],
        'fullscreen': ['1441', '6000'],/* Large monitos and fullscreen in 1920 res */
    };


    $this.getAllQueries = () => {
        return Object.assign(
            {},
            $this._screens,
            $this._devices,
            $this._customMediaQueries
        );
    };


    $this.registerElement = (element) => {
        let helper = new ElementHelper(element);
        // Register only unique non indexed elements
        if (!helper.getAttribute('data-adaptive-id')) {
            let uniqueId = helper.getHash();
            helper.domElement.setAttribute('data-adaptive-id', uniqueId);

            domElements[uniqueId] = new AdaptiveElement({
                helper: helper,
                domElement: helper.domElement,
                xpath: helper.getXpathTo(),
                settings: helper.getAttribute('data-adaptive')
            });
        }
    };

    function AdaptiveElement(props) {
        this.props = props;
        for (let directive in props.settings) {
            this[directive](props.settings[directive]);
        }
    }

    AdaptiveElement.prototype = {
        addClass: function (queries) {
            return new QueryHandler(queries, ($class) => {
                return this.props.domElement.classList.add($class);
            }, ($class) => {
                return this.props.domElement.classList.remove($class);
            });
        },
        removeClass: function (queries) {
            QueryHandler(queries, ($class) => {
                return this.props.domElement.classList.remove($class);
            }, ($class) => {
                return this.props.domElement.classList.add($class);
            })
        },
        addStyle: function (queries) {
            // console.log(queries);
        },
        removeStyle: function (queries) {
            // console.log(queries);
        },
        teleport: function (queries) {
            // console.log(queries);
        },
    };


    function QueryHandler(queries, matchCallback, unMatchCallback) {
        for (let query in queries) {
            let values = queries[query];
            let defaulQuery = $this.getAllQueries()[query];
            let queryExpression = query;
            if (defaulQuery) {
                queryExpression = `screen and (min-width: ${defaulQuery[0]}px) and (max-width: ${defaulQuery[1]}px)`;
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

    QueryHandler.prototype = {
        createListener: function (matchQuery) {
            var $self = this;
            $self.match(matchQuery);
            if (!$self.queryIsRegistered) {
                matchQuery.addListener($self.match);
            }
            return;
        },
        match: function (matchQuery) {
            if (matchQuery.matches) {
                console.log(matchQuery);
                domQueriesMatch[matchQuery.media].forEach(function (callback) {
                    return callback[0](callback[1]);
                });
            } else {
                domQueriesUnMatch[matchQuery.media].forEach(function (callback) {
                    return callback[0](callback[1]);
                });
            }

            return;
        }
    };


    function init() {
        Array
            .from(document.querySelectorAll('[data-adaptive]:not([data-adaptive-id])'))
            .forEach(function (element, index) {
                $this.registerElement(element);
            });

        return;
    }

    /**
    * When ready trigger the initialization
    * @private
    */
    function domIsReady() {
        document.removeEventListener("DOMContentLoaded", domIsReady);
        window.removeEventListener("load", domIsReady);

        return init();
    }


    /**
    * DOM ready or wait for load
    * @private
    */
    (() => {

        if (document.readyState === "complete" ||
            (document.readyState !== "loading" && !document.documentElement.doScroll)) {
            return domIsReady();
        } else {
            // Use the handy event callback
            document.addEventListener("DOMContentLoaded", domIsReady);
            // A fallback to window.onload, that will always work
            window.addEventListener("load", domIsReady);
        }

        return;
    })();

    return $this;
});
