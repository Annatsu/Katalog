// Kata link: https://www.codewars.com/kata/strings-mix


/**
 * 
 * @param {String} s1 
 * @param {String} s2 
 * 
 * @returns {String}
 */
function mix(s1, s2) {
    // Remove everything except lowercase letters.
    s1 = s1.replace(/[^a-z]/g, '');
    s2 = s2.replace(/[^a-z]/g, '');


    // Get the occurrence count of each character on both strings and store it inside an array.
    const occurrences = [stringOccurrencesCount(s1), stringOccurrencesCount(s2)];


    // Get all of the characters occurrences.
    const allCharacters = Object.keys({ ...occurrences[0], ...occurrences[1] });


    const result = allCharacters.reduce((acc, char) => {
        const s1HasChar = occurrences[0][char] > 1;
        const s2HasChar = occurrences[1][char] > 1;

        if (s1HasChar || s2HasChar) {
            if (s1HasChar && !s2HasChar)
                acc.push({ symbol: '1:', n: occurrences[0][char], char })
            else if (!s1HasChar && s2HasChar)
                acc.push({ symbol: '2:', n: occurrences[1][char], char })
            else {
                if (occurrences[0][char] === occurrences[1][char])
                    acc.push({ symbol: '=:', n: occurrences[0][char], char })
                else {
                    const higher = occurrences[0][char] > occurrences[1][char]
                        ? { symbol: '1:', n: occurrences[0][char], char }
                        : { symbol: '2:', n: occurrences[1][char], char }
                    acc.push(higher);
                }
            }
        }

        return acc;
    }, []);


    const symbolPrecedency = {
        '1:': 1,
        '2:': 2,
        '=:': 3
    };


    return result
        .sort((a, b) => {
            return (
                (a.n - b.n) === 0
                    ? 0
                    : a.n > b.n
                        ? -4
                        : 4

            ) +
                (
                    (a.symbol === b.symbol)
                        ? 0
                        : (symbolPrecedency[a.symbol] < symbolPrecedency[b.symbol])
                            ? -2
                            : 2
                ) +
                (
                    (a.char === b.char)
                        ? 0
                        : (a.char.charCodeAt(0) < b.char.charCodeAt(0))
                            ? -1
                            : 1
                )
        })
        .reduce((acc, res) => acc + res.symbol + res.char.repeat(res.n) + '/', '')
        .slice(0, -1);
}


/**
 * 
 * @param {String} s 
 * 
 * @returns {Object}
 */
function stringOccurrencesCount(s) {
    // Helper variable to be used inside the reducer.
    let _lastChar = '';

    return s
        .split('')
        .sort()
        .reduce((acc, c, i) => {
            if (!_lastChar || _lastChar !== c) {
                _lastChar = c;
                acc[c] = 1;
            } else {
                acc[c]++;
            }

            return acc;
        }, {});
}
