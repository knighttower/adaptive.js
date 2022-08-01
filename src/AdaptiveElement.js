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

import DomObserver from './DomObserver.js';
import ElementHelper from './ElementHelper.js';
import QueryHandler from './QueryHandler.js';

/**
 * @class Adds some extra functionality to interact with a DOM element
 * @param {Object} props
 * @param {Object} Adaptive Instance of
 * @return {Object}
 */
export default class AdaptiveElement {
    /**
     * Constructor
     * @param {String|Object} selector
     * @return {Object}
     */
    constructor(props, Adaptive) {
        this.props = props;
        this.Adaptive = Adaptive;
        this.domObserver = [];

        for (let directive in props.settings) {
            this[directive](props.settings[directive]);
        }
    }

    addClass(queries) {
        return QueryHandler.add(
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
            },
            this.Adaptive
        );
    }

    removeClass(queries) {
        return QueryHandler.add(
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
            },
            this.Adaptive
        );
    }

    addStyle(queries) {
        // Save the original style in memory to not discard them
        this.props.originalStyle = this.props.domElement.getAttribute('style');

        return QueryHandler.add(
            queries,
            ($styles) => {
                return (this.props.domElement.style.cssText += $styles);
            },
            () => {
                return (this.props.domElement.style.cssText = this.props.originalStyle);
            },
            this.Adaptive
        );
    }

    teleport(queries) {
        let placeholder = document.createElement('param');
        placeholder.name = 'adaptive';
        placeholder.value = this.props.adaptiveId;
        this.props.domElement.insertAdjacentElement('beforebegin', placeholder);

        return QueryHandler.add(
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

                    this.domObserver.push(self.props.adaptiveId);
                    DomObserver.addOnNodeChange(self.props.adaptiveId, () => {
                        let target = new ElementHelper(selector);
                        if (target.isInDom()) {
                            target.domElement.insertAdjacentElement(position, self.props.domElement);
                            DomObserver.removeOnNodeChange(self.props.adaptiveId);
                            delete self.domObserver[self.props.adaptiveId];
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
            },
            this.Adaptive
        );
    }
}
