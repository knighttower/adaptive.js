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
 * @param {String|Object} selector
 * @return {Funtion}
 */
export default class DomObserver {
    /**
     * Constructor
     * @param {Function} onNodeChange Callback when any node changes/ add/deleted/modified
     * @param {Function} onAttrChange Callback when any attribute changes
     * @return {Void}
     */
    constructor() {
        /**
         * Holds memory of registered callbacks
         */
        this.executeOnNodeChanged = [];

        /**
         * Holds memory of registered callbacks
         * @private
         */
        this.executeOnAttrChanged = [];

        this.domObserver();
    }

    /**
     * When node change
     * @param {Function} callback Callback when any node changes/ add/deleted/modified
     * @return {Void}
     */
    addOnNodeChange(callback) {
        if (callback) {
            this.executeOnNodeChanged.push(callback);
        }
        return;
    }

    /**
     * Add function callback when an attribute change is detected
     * @param {Function} callback Callback when any attribute changes
     * @return {Void}
     */
    addOnAttrChange(callback) {
        if (callback) {
            this.executeOnAttrChanged.push(callback);
        }
        return;
    }

    /**
     * Remove from node change
     * @param {Function} callback
     * @return {Void}
     */
    removeOnNodeChange(callback) {
        if (callback) {
            this.executeOnNodeChanged = this.executeOnNodeChanged.filter((e) => e !== callback);
        }
        return;
    }

    /**
     * Remvoe from attr change
     * @param {Function} callback
     * @return {Void}
     */
    removeOnAttrChange(callback) {
        if (callback) {
            this.executeOnAttrChanged = this.executeOnAttrChanged.filter((e) => e !== callback);
        }
        return;
    }

    /**
     * Obsever
     * @private
     * @return {MutationObserver}
     */
    domObserver() {
        const callback = function(mutationList, observer) {
            // Use traditional 'for loops' for IE 11
            for (const mutation of mutationList) {
                if (mutation.type === 'childList') {
                    for (let callback in this.executeOnNodeChanged) {
                        this.executeOnNodeChanged[callback]();
                    }
                } else if (mutation.type === 'attributes') {
                    for (let callback in this.executeOnAttrChanged) {
                        this.executeOnAttrChanged[callback]();
                    }
                }
            }
        };
        const config = { attributes: true, childList: true, subtree: true };
        const observer = new MutationObserver(callback);

        return observer.observe(document.body, config);
    }
}
