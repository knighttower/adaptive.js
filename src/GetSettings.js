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
 * Handle getting the correct settings from the string attribute
 * @private
 * @param {String|Array|Object} settings
 * @return {Object}
 */
export default function(settings) {
    let values, breakDownId, directive, properties;
    let type = typeof settings;
    // Matches the JSON objects as string: {'hello'{key:value}}
    let regexType1 = /\{((.|\n)*?)\}/gm;
    // Matches object-style strings: hello.tablet(...values) | hello[expression](...values)
    let regexType2 = /\.(.*?)\(((.|\n)*?)\)/gm;
    let regexType3 = /\[((.|\n)*?)\]/gm;
    // Matches string ID or class: literals #... or ....
    let regexType4 = /^(\.|\#)([a-zA-Z]+)/g;
    // Mathes simple directive function style: hello(#idOr.Class)
    let regexType5 = /^([a-zA-Z]+)(\()(\.|\#)(.*)(\))/g;

    if (type === 'object' || type === 'array') {
        return settings;
    }
    // Else if String

    if (settings.match(regexType4)) {
        return settings;
    }

    if (settings.match(regexType5)) {
        directive = settings.split('(')[0].trim();
        values = getInBetween(settings, '(', ')');
        settings = {};
        settings[directive] = values;
        return settings;
    }

    if (settings.match(regexType1)) {
        return JSON.parse(settings.replace(/'/g, '"'));
    }

    if (settings.match(regexType2) || settings.match(regexType3)) {
        let setObject = {};

        settings = settings.split(';');

        settings.forEach((command) => {
            command = command.trim();

            if (command.match(regexType3)) {
                values = getInBetween(command, '](', ')');
                breakDownId = getInBetween(command, '[', ']');
                directive = command.split('[')[0].trim();
            } else {
                values = getInBetween(command, '(', ')');
                command = command.replace(getMatchBlock(command, '(', ')'), '');
                properties = command.split('.');
                directive = properties[0];
                breakDownId = properties[1];
                properties[2] = properties[2] ?? null;
            }

            values = values
                .split(',')
                .map((cl) => cl.trim())
                .join(' ');

            if (!setObject[directive]) {
                setObject[directive] = {};
            }

            if (properties && properties[2]) {
                setObject[directive][breakDownId] = {};
                setObject[directive][breakDownId][properties[2]] = values;
            } else {
                setObject[directive][breakDownId] = values;
            }
        });

        return setObject;
    }
}

function getInBetween(str, p1, p2) {
    str = getMatchBlock(str, p1, p2);

    return str
        .replace(new RegExp(setExpString(p1)), '')
        .replace(new RegExp(setExpString(p2)), '')
        .trim();
}

function getMatchBlock(str, p1, p2) {
    p1 = setExpString(p1);
    p2 = setExpString(p2);
    let regex = new RegExp(setLookUpExp(p1, p2), 'gm');

    return str.match(regex)[0];
}

function setExpString(exp) {
    return `\\${exp.split('').join('\\')}`;
}

function setLookUpExp(p1, p2) {
    return `${p1}((.|\n)*?)${p2}`;
}
