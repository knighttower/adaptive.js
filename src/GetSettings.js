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
    let type = typeof settings;
    // Matches the JSON objects as string
    let regexType1 = /\{((.|\n)*?)\}\}/gm;
    // Matches object-style strings
    let regexType2 = /\.(.*?)\(((.|\n)*?)\)/gm;
    let regexType3 = /\[((.|\n)*?)\]/gm;

    if (type === 'object' || type === 'array') {
        return settings;
    }

    // Make sure the settings is string
    settings = String(settings);

    if (settings.match(regexType1)) {
        return JSON.parse(settings.replace(/'/g, '"'));
    }

    if (settings.match(regexType2) || settings.match(regexType3)) {
        let setObject = {};
        settings = settings.split(';');

        settings.forEach((command) => {
            let classes, breakDownId, directive;

            if (command.match(regexType3)) {
                classes = getInBetween(command, '](', ')').trim();
                breakDownId = getInBetween(command, '[', ']').trim();
                directive = command.split('[')[0].trim();
            } else {
                classes = getInBetween(command, '(', ')').trim();
                breakDownId = getInBetween(command, '.', '(').trim();
                directive = command.split('.')[0].trim();
            }

            classes = classes
                .split(',')
                .map((cl) => cl.trim())
                .join(' ');

            if (!setObject[directive]) {
                setObject[directive] = {};
            }

            setObject[directive][breakDownId] = classes;
        });

        return setObject;
    }
}

function getInBetween(str, m1, m2) {
    m1 = `\\${m1.split('').join('\\')}`;
    m2 = `\\${m2.split('').join('\\')}`;
    let getExp = `${m1}((.|\n)*?)${m2}`;
    let regex = new RegExp(getExp, 'gm');
    str = str.match(regex)[0];
    return str.replace(new RegExp(m1), '').replace(new RegExp(m2), '');
}
