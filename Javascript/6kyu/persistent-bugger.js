// Kata link: https://www.codewars.com/kata/persistent-bugger


/**
 * Returns the count of the amount of time a number has to be multiplied, digit by digit, to get
 * only one number.
 * 
 * @function persistence
 * 
 * @param {Number} num - the number to test.
 * 
 * @returns {Number} how many times the multiplication needed to be done.
 */
function persistence(num) {
    const str = num.toString();
    return str.length === 1 ? 0 : 1 + persistence(eval(str.split('').join('*')))
}
