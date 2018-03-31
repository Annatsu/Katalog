// Kata link: https://www.codewars.com/kata/are-the-numbers-in-order


function inAscOrder(arr) {
    return [...arr]
            .sort()
            .every((v, i) => v === arr[i]);
}
