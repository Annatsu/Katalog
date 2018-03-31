// Kata link: https://www.codewars.com/kata/reverse-words

/**
 * Receives a string, and return each word in it's reversed order.
 * 
 * @param {String} str a string to have it's words reversed.
 * 
 * @returns {String} a string with each word in the reverse order.
 */
function reverseWords(str) {
    return str
        .split(' ')
        .map((s) => s.split('').reverse().join(''))
        .join(' ');
}
