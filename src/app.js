const { createApp } = Vue;
import { initial } from 'lodash';
import hello from './hello.vue';
import ElementHelper from './ElementHelper.js';

const app = createApp({});

app.component('hello', hello);
app.mount('#app');

if (document.readyState === "completed") {
    alert("Your page is loaded");
}


// when DOM is ready
// The ready event handler and self cleanup method
function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    console.log('ready later');
}



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

// Select the node that will be observed for mutations
const targetNode = document.getElementById('app');
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

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



    function init() {
        Array
            .from(document.querySelectorAll('[data-adaptive]'))
            .forEach(function (element, index) {
                let helper = new ElementHelper(element);
                let uniqueId = helper.getHash();
                let xpath = helper.getXpathTo();
                let settings = helper.getAttribute('data-adaptive');
                helper.element.setAttribute('data-adaptive-id', uniqueId);
                console.log(settings);
                // xpathArray.push(xpath);
                // indexArray.push(index);
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
