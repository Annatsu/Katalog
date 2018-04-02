// Kata link: https://www.codewars.com/kata/memoized-fibonacci


((global) => {
    const fibCache = {
        0: 0,
        1: 1
    };

    global.fibonacci = (n) => {
        return n in fibCache
            ? fibCache[n]
            : fibCache[n] = global.fibonacci(n - 1) + global.fibonacci(n - 2);
    }
}) (window);
