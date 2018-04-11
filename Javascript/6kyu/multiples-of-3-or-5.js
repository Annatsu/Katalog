// Kata link: https://www.codewars.com/kata/multiples-of-3-or-5


/**
 * Gets the sum of all multiples of 3 or 5 below or equal to the range parameter.
 * 
 * @param {Number} range - the maximum number to be tested to.
 * 
 * @returns {Number}
 */
function solution(range){
    let r = 0;

    for (let i = 3; i < range; i++)
        if (i % 3 === 0 || i % 5 === 0)
            r += i;

    return r;
}
