// Kata link: https://www.codewars.com/kata/get-the-middle-character


/**
 * Returns the middle character of a string.
 * 
 * @function getMiddle
 * 
 * @param {String} s - the string to get the middle character from.
 * 
 * @returns {String}
 */
function getMiddle(s) {
    return s.length % 2 === 0
        ? s.substr((s.length / 2) - 1, 2)
        : s.substr(s.length / 2, 1);
}