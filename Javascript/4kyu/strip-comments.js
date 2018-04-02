// Kata link: http://www.codewars.com/kata/strip-comments


/**
 * 
 * @param {String} input the input string, containing or not comments.
 * @param {Array} markers an array containing the markers that will be delimit to comments.
 * 
 * @returns {String}
 */
function solution(input, markers){
    return input
        .split('\n')
        .map((s) => s.split(new RegExp(`[${markers.join('')}]`, 'g'))[0].trim())
        .join('\n');
}
