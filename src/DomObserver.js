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
     * Register this library into the window
     * @private
     * @return {Object}
     */
    const $this = (window.DomObserver = window.DomObserver || {});

    /**
     * Holds memory of registered functions
     * @private
     */
    const executeOnNodeChanged = {};

    /**
     * Holds memory of registered functions
     * @private
     */
    const executeOnAttrChanged = {};

    /**
     * When node change
     * @param {String} id
     * @param {Function} callback Callback when any node changes/ add/deleted/modified
     * @return {Void}
     */
    $this.addOnNodeChange = (id, callback) => {
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
    $this.addOnAttrChange = (id, callback) => {
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
    $this.removeOnNodeChange = (id) => {
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
    $this.removeOnAttrChange = (id) => {
        if (id) {
            delete executeOnAttrChanged[id];
        }
        return;
    };

    /**
     * Deep cleanup
     * @return {Void}
     */
    $this.cleanup = () => {
        Object.keys(executeOnNodeChanged).forEach((key) => delete executeOnNodeChanged[key]);
        Object.keys(executeOnAttrChanged).forEach((key) => delete executeOnAttrChanged[key]);
        return;
    };

    /**
     * Obsever
     * @private
     * @return {MutationObserver}
     */
    (() => {
        const callback = function(mutationList, observer) {
            // Use traditional 'for loops' for IE 11
            for (const mutation of mutationList) {
                if (mutation.type === 'childList') {
                    for (let id in executeOnNodeChanged) {
                        executeOnNodeChanged[id]();
                    }
                } else if (mutation.type === 'attributes') {
                    for (let id in executeOnAttrChanged) {
                        executeOnAttrChanged[id]();
                    }
                }
            }
        };
        const config = { attributes: true, childList: true, subtree: true };
        const observer = new MutationObserver(callback);

        return observer.observe(document.body, config);
    })();

    return $this;
});
