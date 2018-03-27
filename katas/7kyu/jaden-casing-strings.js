// Kata link: https://www.codewars.com/kata/jaden-casing-strings

String.prototype.toJadenCase = function() {
    return this
        .split(' ')
        .map((s, i) => s[0].toUpperCase() + s.substr(1))
        .join(' ');
};
