// Kata link: https://www.codewars.com/kata/title-case

/**
 * Turns a normal string into a title cased string.
 * 
 * @param {String} title the title string to be converted into title case.
 * @param {String} _exceptions a list of exceptions delimited by spaces.
 * 
 * @returns {String} a title cased string representation of the string.
 */
function titleCase(title, _exceptions) {
    if (!title || title.length === 0)
        return title;

    const exceptions = (_exceptions && _exceptions.split(' ').map((w) => w.toLowerCase())) || [];

    return title
        .toLowerCase()
        .split(' ')
        .map((w, i) => (i === 0 || !exceptions.includes(w)) ? w[0].toUpperCase() + w.substr(1) : w)
        .join(' ');
}
