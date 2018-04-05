// Kata link: https://www.codewars.com/kata/mumbling


function accum(s) {
    return s
        .split('')
        .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
        .join('-');
}
