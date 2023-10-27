// Author Knighttower
//  MIT License
//  Copyright (c) [2022] [Knighttower] https://github.com/knighttower

import Teleport from '../Teleport.js';
// when it imports, it also registers itself as global
import QueryHandler from '../QueryHandler.js';

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

        for (let directive in props.settings) {
            // Matches the method name and passes the directives
            // Ex: this[addClass]({...})
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
        let $element = new Teleport(this.props);

        return QueryHandler.add(
            queries,
            ($directive) => {
                return $element.beam($directive);
            },
            () => {
                $element.back();
                return $element.cancel();
            },
            this.Adaptive
        );
    }

    execute(queries) {
        let $element = this;
        let attrs = {
            adaptiveId: $element.props.uniqueId,
            helper: $element.props.helper,
            domElement: $element.props.domElement,
            xpath: $element.props.xpath,
        };
        return QueryHandler.add(
            queries,
            ($callback) => {
                if ($callback && typeof $callback === 'function') {
                    return $callback(attrs);
                }
            },
            ($callback) => {
                if ($callback && typeof $callback === 'function') {
                    return $callback(attrs);
                }
            },
            this.Adaptive
        );
    }
}
