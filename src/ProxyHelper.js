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
import { concat } from 'lodash';

/**
 * Convert to proxy to protect objects
 * Allows to declare _private, _protected and _mutable all arrays with prop names
 * @example ProxyHelper({objectProps..., _protected: array(...)})
 * @param {Object} object
 * @return {Proxy}
 */
export default function(object) {
    'use strict';

    let _private = ['_private'];
    if (object._private) {
        _private = _.concat(_private, object._private);
    }

    let _protected = _.concat(['_protected'], _private);
    if (object._protected) {
        _protected = _.concat(_protected, object._protected);
    }

    let _mutable = [];
    if (object._mutable) {
        _mutable = _.concat(_mutable, object._mutable);
    }

    return new Proxy(object, {
        get(target, prop) {
            if (prop in target && !_.includes(_private, prop)) {
                return target[prop];
            } else {
                console.error('Prop is not private, not set or object is protected', prop);
            }
        },
        set(target, prop, value) {
            if (prop in target) {
                if (_.includes(_mutable, prop)) {
                    return (target[prop] = value);
                }
                // Functions by default are protected
                let type = typeof target[prop];
                if (type !== 'function' || !_.includes(_protected, prop)) {
                    target[prop] = value;
                } else {
                    console.error('The prop is a function and cannot be modified', prop, value);
                }
            } else {
                console.error('Protected Object, cannot set props', prop, value);
            }
            return true;
        },
    });
}
