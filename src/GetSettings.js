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
/**
 * handles the following patterns to get an object from string attributes
 * // Matches the JSON objects as string: {'hello':{key:value}} OR {key:value}
 * // Matches the Array as string: [value, value] || ['value','value']
 * // Matches object-style strings: hello.tablet(...values) OR hello[expression](...values)
 * // Matches string ID or class: literals Id(#) or class (.). Note that in Vue it needs to be in quotes attr="'#theId'"
 * // Mathes simple directive function style: hello(#idOr.Class)
 * Note: all the above with the exception of the Id/class will be converted into actual objects
 */
/**
 * Handle getting the correct settings from the string attribute
 * @private
 * @param {String|Array|Object} settings
 * @return {Object|void|null}
 */
export default function(settings) {
    if (!settings) {
        return null;
    }
    let values, breakDownId, directive, properties;
    const type = typeof settings;
    // Matches the JSON objects as string: {'hello':{key:value}} || {key:value}
    const regexObjectLike = /^\{((.|\n)*?)\:((.|\n)*?)\}/gm;

    // Matches the Array as string: [value, value] || ['value','value']
    const regexArrayLike = /^\[((.|\n)*?)\]$/gm;
    // Matches a multi-array string like [[value,value]],value]
    const regexMultiArrayString = /\[(\n|)(((.|\[)*)?)\](\,\n|)(((.|\])*)?)(\n|)\]/gm;
    // Matches object-style strings: hello.tablet(...values) | hello[expression](...values)
    const regexDotObjectString = /([a-zA-Z]+)\.(.*?)\(((.|\n)*?)\)/gm;
    const regexExObjectString = /([a-zA-Z]+)\[((.|\n)*?)\]\(((.|\n)*?)\)/gm;
    // Matches string ID or class: literals #... or ....
    const regexIdOrClass = /^(\.|\#)([a-zA-Z]+)/g;
    // Mathes simple directive function style: hello(#idOr.Class)
    const regexFunctionString = /^([a-zA-Z]+)(\()(\.|\#)(.*)(\))/g;

    if (type === 'object' || type === 'array') {
        return settings;
    }
    // Else if String

    if (settings.match(regexIdOrClass)) {
        return settings;
    }

    if (settings.match(regexFunctionString)) {
        directive = settings.split('(')[0].trim();
        values = getInBetween(settings, '(', ')');
        settings = {};
        settings[directive] = values;
        return settings;
    }

    if (settings.match(regexArrayLike)) {
        let start = /^\[/;
        let end = /\]$/;
        let keyProps = getInBetween(settings, start, end);
        keyProps = keyProps.split(',');

        // test if multi-array
        if (settings.match(regexMultiArrayString)) {
            keyProps = getMultiArray(settings);
        }

        keyProps.forEach((str) => {
            let cleanStr = addQuotes(removeQuotes(str));
            settings = settings.replace(str, cleanStr);
        });
        return JSON.parse(fixQuotes(settings));
    }

    if (settings.match(regexObjectLike)) {
        let keyProps = getInBetween(settings, '{', ':', true);
        keyProps = keyProps.concat(getInBetween(settings, ',', ':', true));

        keyProps.forEach((str) => {
            let cleanStr = addQuotes(removeQuotes(str));
            settings = settings.replace(str, cleanStr);
        });
        return JSON.parse(fixQuotes(settings));
    }

    if (settings.match(regexDotObjectString) || settings.match(regexExObjectString)) {
        let setObject = {};

        settings = settings.split('&&');

        settings.forEach((command) => {
            command = command.trim();

            if (command.match(regexExObjectString)) {
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

function getMultiArray(str) {
    let arrays = {};
    let innerArrayRegex = /(\[([^[]*?))\]/gm;
    let start = /^\[/;
    let end = /\]$/;
    str = getInBetween(str, start, end);
    let innerArrays = str.match(innerArrayRegex);

    if (innerArrays) {
        let i = 1;
        while (str.match(innerArrayRegex)) {
            str.match(innerArrayRegex).forEach((record, index) => {
                let $index = `@${i}@${index}`;
                arrays[$index] = record;
                str = str.replace(record, $index);
            });

            i++;
        }
    }

    str = str.split(',');

    const total = (Object.keys(arrays).length ?? 1) * str.length;
    let loops = 0;
    while (Object.keys(arrays).length > 0) {
        let keys = Object.keys(arrays);
        let tmpStr = str;
        Object.keys(arrays).forEach((key) => {
            let strArray = getInBetween(arrays[key], start, end).split(',');
            let replaced = findAndReplace(str, strArray, key);

            if (replaced) {
                str = replaced;
                delete arrays[key];
            }
        });

        if (loops > total) {
            throw new Error('Too many loops, the string passed is malformed' + str);
        }
        loops++;
    }

    return str;
}
/**
 * Recursively will loop in array to find the desired target
 * @private
 * @param {Array} arr
 * @param {Array|Object|String} value Replacer
 * @param {String} find The target (needle)
 * @return {Null|Array}
 */
function findAndReplace(arr, value, find) {
    let results = null;
    let tmpArray = arr;

    arr.forEach((prop, index) => {
        if (Array.isArray(prop)) {
            let replaced = findAndReplace(prop, value, find);
            if (replaced) {
                tmpArray[index] = replaced;
                results = tmpArray;
            }
        }
        if (prop === find) {
            if (Array.isArray(value)) {
                value = value.map((p) => {
                    if (!Array.isArray(p)) {
                        return p.trim();
                    }
                    return p;
                });
            }
            tmpArray[index] = value;
            results = tmpArray;
        }
    });

    return results;
}

/**
 * find a match in between two delimeters, either string or regex given, returns clean matches
 * @private
 * @param {String} str
 * @param {String|Regex} p1
 * @param {String|Regex} p2
 * @param {Boolean} all If it should return all matches or single one (default)
 * @return {String|Array|Null}
 */
function getInBetween(str, p1, p2, all = false) {
    if (all) {
        let matches = [];
        let group = getMatchBlock(str, p1, p2, all) ?? [];

        group.forEach((match) => {
            matches.push(cleanStr(match, p1, p2));
        });
        return matches;
    } else {
        str = getMatchBlock(str, p1, p2) ?? str;
        return cleanStr(str, p1, p2);
    }
}
/**
 * Find math by delimeters returns raw matches
 * @private
 * @param {String} str
 * @param {String|Regex} p1
 * @param {String|Regex} p2
 * @param {Boolean} all If it should return all matches or single one (default)
 * @return {String|Array|Void}
 */
function getMatchBlock(str, p1, p2, all = false) {
    p1 = setExpString(p1);
    p2 = setExpString(p2);
    let regex = new RegExp(setLookUpExp(p1, p2), 'gm');
    if (all) {
        return str.match(regex);
    } else {
        return str.match(regex)[0];
    }
}

function cleanStr(str, p1, p2) {
    return str
        .replace(new RegExp(setExpString(p1)), '')
        .replace(new RegExp(setExpString(p2)), '')
        .trim();
}

/**
 * Escape a regex
 * @private
 */
function setExpString(exp) {
    if (exp instanceof RegExp) {
        return exp;
    } else {
        return `\\${exp.split('').join('\\')}`;
    }
}

/**
 * Regex builder
 * @private
 */
function setLookUpExp(p1, p2) {
    let p1IsRegex = p1 instanceof RegExp;
    let p2IsRegex = p2 instanceof RegExp;
    if (p1IsRegex || p2IsRegex) {
        if (p1IsRegex) {
            p1 = p1.source;
        }
        if (p2IsRegex) {
            p2 = p2.source;
        }
    }

    return `${p1}((.|\n)*?)${p2}`;
}

function removeQuotes(str) {
    return str.replace(/'|"/g, '');
}

function fixQuotes(str) {
    return str.replace(/'/g, '"');
}

function addQuotes(str) {
    return `"${str}"`;
}
