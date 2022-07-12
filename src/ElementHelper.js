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
 * Import the DOM helpers
 */
// -----------------------------------------
import DomObserver from './DomObserver.js';
// To avoid too many instances of the obsever, it will init outside
const $domObserver = new DomObserver();

/**
 * @class Adds some extra functionality to interact with a DOM element
 * @param {String|Object} selector
 * @return {Object}
 */
export default class ElementHelper {
    /**
     * Constructor
     * @param {String|Object} selector
     * @return {Object}
     */
    constructor(selector) {
        if (typeof selector === 'object') {
            this.domElement = selector;
        } else if (String(selector).includes('//')) {
            this.domElement = this.getElementByXpath(selector);
        } else {
            this.domElement = document.querySelector(selector);
        }
    }

    /**
     * Check if the element exists or is visible. It will keep querying
     * @return {Boolean}
     */
    isVisible() {
        let $this = this;
        if (!$this.domElement?.outerHTML) {
            let callback = () => {
                console.log(33);
                if ($this.domElement?.outerHTML) {
                    $domObserver.removeOnNodeChange(callback);
                }

                return;
            };
            $domObserver.addOnNodeChange(callback);

            return false;
        }

        return true;
    }

    /**
     * Conver string into valid JSON
     * @param {String} string
     * @return {String}
     */
    _convertString(string) {
        return String(string.replace(/'/g, '"'));
    }

    /**
     * Find element by Xpath string
     * @param {String} xpath
     * @example getElementByXpath("//html[1]/body[1]/div[1]")
     * @return {Object} DOM element
     */
    getElementByXpath(xpath) {
        return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

    /**
     * Get the element xpath string
     * @author Based on https://stackoverflow.com/questions/2631820/how-do-i-ensure-saved-click-coordinates-can-be-reload-to-the-same-place-even-if/2631931#2631931
     * @return {String}
     */
    getXpathTo() {
        let element = this.domElement;

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
                return (
                    new ElementHelper(element.parentNode).getXpathTo() + '/' + element.tagName + '[' + (ix + 1) + ']'
                );
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
    getAttribute(attr) {
        let attrData = this.domElement.getAttribute(attr);
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
    getHash() {
        let string = String(this.getXpathTo());
        var hash = 0;

        if (string.length === 0) {
            return hash;
        }

        for (var i = 0; i < string.length; i++) {
            let char = string.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash = hash & hash;
        }

        return hash;
    }
}

/**
 * Future
 * @private
 * @todo enhance to extend the prototype like https://stackoverflow.com/questions/779880/in-javascript-can-you-extend-the-dom
 */
