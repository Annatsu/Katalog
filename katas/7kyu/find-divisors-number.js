// Kata link: https://www.codewars.com/kata/find-divisors-number


/**
 * Returns how many divisors does a number have.
 * 
 * @param {Number} n the number to be checked.
 * 
 * @returns {Number} how many divisors does the number have.
 */
function getDivisorsCnt(n){
    let r = 1;

    for (let i = 2; i <= n; i++)
        if (n % i === 0)
            r++;

    return r;
}
