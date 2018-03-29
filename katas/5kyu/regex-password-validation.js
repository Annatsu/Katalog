// Kata link: https://www.codewars.com/kata/regex-password-validation

// Regex conditions
const hasDigit = (pwd) => /(?:\d)+/g.test(pwd);
const hasUppercase = (pwd) => /(?:[A-Z])+/g.test(pwd);
const hasLowercase = (pwd) => /(?:[a-z])+/g.test(pwd);
const hasOnlyAlphanumeric = (pwd) => !(/(?:\W)+/g.test(pwd));


/**
 * Receives a password and measure it's complexity according to certain conditions
 *
 * @param {String} password the passphrase to be tested.
 *
 * @returns {Boolean} true if the passoword meets the conditions criteria, false otherwise.
 */
function validate(password) {
    return password.length >= 6 &&
        hasDigit(password) &&
        hasUppercase(password) &&
        hasLowercase(password) &&
        hasOnlyAlphanumeric(password);
}
