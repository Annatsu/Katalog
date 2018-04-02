// Kata link: https://www.codewars.com/kata/simple-pig-latin


function pigIt(str) {
    return str
        .split(' ')
        .map((s) => s.substr(1) + s[0] + 'ay')
        .join(' ');
}
