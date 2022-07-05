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
        if (typeof (selector) === 'object') {
            this.domElement = selector;
        } else if (String(selector).includes('//')) {
            this.domElement = this.getElementByXpath(selector);
        } else {
            this.domElement = document.querySelector(selector);
        }
    }


    /**
    * Conver string into valid JSON
    * @param {String} string
    * @return {String}
    */
    _convertString(string) {
        return String((string).replace(/'/g, '"'));
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
            hash = ((hash << 5) - hash) + char;
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
