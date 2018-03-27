// Kata link: https://www.codewars.com/kata/convert-string-to-camel-case


/**
 * A function that turn dash/underscore delimited words into camel cased words.
 * 
 * @param {String} str a string written in dash/underscore delimited words
 * 
 * @returns {String} the input string converted into camel case.
 */
function toCamelCase(str) {
    if (!(str && str.length))
        return str;

    return str
        .split(/[_-]/g)
        .map((s, i) => i > 0 ? s[0].toUpperCase() + s.substr(1) : s)
        .join('');
}
