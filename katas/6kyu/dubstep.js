// Kata link: https://www.codewars.com/kata/dubstep

/**
 * Receives a remixed 'song' string with a lot of WUB's. Returns a new string with the original
 * song name; without the WUB's.
 * 
 * @param {String} song a string representing the remixed song.
 * 
 * @returns {String} the original song.
 */
function songDecoder(song) {
    return song
        .replace(/(?:WUB)+/g, ' ')
        .trim();
}
