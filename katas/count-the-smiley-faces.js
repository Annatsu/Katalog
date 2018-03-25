// Kata link: https://www.codewars.com/kata/count-the-smiley-faces

/**
 * A function used to count the amount of valid smiling faces inside an array.
 * 
 * @param {Array} arr an array of smileys to be processed.
 * 
 * @returns {Number} how many valid smiles are inside the array.
 */
function countSmileys(arr) {
  return !(arr && arr.length)
    ? 0
    : arr.filter((s) => /^[:;][-~]?[)D]$/.test(s)).length;
}
