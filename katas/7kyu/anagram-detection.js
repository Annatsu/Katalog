// Kata link: https://www.codewars.com/kata/anagram-detection


/**
 * An anagram is the result of rearranging the letters of a word to produce a new word.
 * This function tests two strings and return a boolean that tells if the test parameter is an anagram.
 * 
 * @param {String} test the string to test againt the original.
 * @param {String} original the original string, any word or phrase.
 * 
 * @returns {Boolean} the result from the anagram test.
 */
function isAnagram(test, original) {
    const _original = original.toLowerCase();

    return (test.length === original.length) &&
        test
            .toLowerCase()
            .split('')
            .every((char, i) => _original.includes(char))
}
