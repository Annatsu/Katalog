// Kata link: https://www.codewars.com/kata/exclamation-marks-series-number-11-replace-all-vowel-to-exclamation-mark-in-the-sentence


/**
 * This function takes any string and replaces all of it's vowels to exclamantion marks.
 * 
 * @param {String} s the string containing (or not) the vowels to be replaced.
 * 
 * @returns {String} the new string, with exclamation marks.
 */
function replace(s) {
    return s.replace(/[aeiouAEIOU]/g, "!");
}
