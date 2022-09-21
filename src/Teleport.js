/**
* @author Antuan
    MIT License

    Copyright (c) [2022] [Antuan] https://github.com/knighttower

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

import DomObserver from './DomObserver.js';
import ElementHelper from './ElementHelper.js';
import GetSettings from './GetSettings.js';

export default class Teleport {
    /**
     * Constructor
     * @param {String|Object} selector || props object (see AdaptiveElement)
     * @return {Object}
     */
    constructor(props) {
        if (props) {
            if (!props.adaptiveId) {
                let element = new ElementHelper(props);
                let uniqueId = null;
                if (!element.getAttribute('data-adaptive-id')) {
                    uniqueId = element.getHash();
                    element.domElement.setAttribute('data-adaptive-id', uniqueId);
                } else {
                    uniqueId = element.getAttribute('data-adaptive-id');
                }

                props = {
                    adaptiveId: uniqueId,
                    helper: element,
                    domElement: element.domElement,
                    xpath: element.getXpathTo(),
                };
            }
            this.props = props;

            let placeholder = new ElementHelper(`[name="adaptive"][value="${this.props.adaptiveId}"`);
            if (!placeholder.isInDom()) {
                placeholder = document.createElement('param');
                placeholder.name = 'adaptive';
                placeholder.value = this.props.adaptiveId;
                this.props.domElement.insertAdjacentElement('beforebegin', placeholder);
            }
        }
    }

    /**
     * Teleport object
     * @param {String|Object} target (selector) directive defaults to "to" || {to|after|before: target}
     */
    beam($directive) {
        $directive = GetSettings($directive);
        // Defaults to "to" target if only the selector is passed
        if (typeof $directive === 'string') {
            $directive = { to: $directive };
        } else if (Array.isArray($directive)) {
            if ($directive.length > 1) {
                $directive = { [$directive[0]]: $directive[1] };
            } else {
                $directive = { to: $directive[0] };
            }
        }

        let direction = Object.keys($directive)[0];
        let selector = $directive[direction];
        let target = new ElementHelper(selector);
        let position = 'beforeend';
        switch (direction) {
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

            DomObserver.addOnNodeChange(this.props.adaptiveId, () => {
                let target = new ElementHelper(selector);

                if (target.isInDom()) {
                    target.domElement.insertAdjacentElement(position, self.props.domElement);
                    DomObserver.removeOnNodeChange(self.props.adaptiveId);
                }
            });
        }
    }

    /**
     * Return to its original place
     */
    back() {
        let target = new ElementHelper(`[name="adaptive"][value="${this.props.adaptiveId}"`);
        if (target.isInDom()) {
            target.domElement.insertAdjacentElement('afterend', this.props.domElement);
            // target.domElement.remove();
        }
    }

    /**
     * If element is no it the DOM and needs to cancel the observer
     */
    cancel() {
        DomObserver.removeOnNodeChange(this.props.adaptiveId);
    }

    /**
     * Warning, this will make it global and would work with data attr like data-teleport-to
     */
    global() {
        if (!this.props) {
            Array.from(document.querySelectorAll('[data-teleport-to]')).forEach(function(element, index) {
                new Teleport(element).beam(element.getAttribute('data-teleport-to'));
            });
        }
    }
}
