// Kata link: https://www.codewars.com/kata/numbers-with-this-digit-inside/train/javascript


/**
 * @param {Number} x
 * @param {Number} d
 *
 * @returns {Array}
 */
function numbersWithDigitInside(x, d) {
    let r = [0, 0, 0];
    
    for (let i = 1; i <= x; i++)
        if (i.toString().includes(d)) {
            if (r[2] === 0)
                r[2] = 1;
            
            ++r[0];
            r[1] += i;
            r[2] *= i;
        }
    
    return r;
}
