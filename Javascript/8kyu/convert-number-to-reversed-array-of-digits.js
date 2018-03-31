// Kata link: https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits


/**
 * A function that receives any number, and returns it in an array of reversed order.
 * 
 * @param {Number} n any number.
 * 
 * @returns {Array} an array in the reversed order that the number were inputted.
 */
function digitize(n) {
    return n
        .toString()
        .split('')
        .reverse()
        .map((s) => parseInt(s, 10));
}
