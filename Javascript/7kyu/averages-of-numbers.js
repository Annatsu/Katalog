// Kata link: https://www.codewars.com/kata/averages-of-numbers


/**
 * A function that will return representing the average of each element inside the array with the next.
 * 
 * @param {Array} numbers an array of integers
 * 
 * @returns {Array} the average array.
 */
function averages(numbers) {
    if (!numbers || numbers.length <= 1)
        return [];

    return numbers
        .map((v, i, arr) => (v + (arr[i+1] || 0)) / 2)
        .slice(0, numbers.length - 1);
}
