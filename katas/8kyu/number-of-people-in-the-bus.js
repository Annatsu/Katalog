// Kata link: https://www.codewars.com/kata/number-of-people-in-the-bus


/**
 * A function that receives an array of arrays representing the amount of people that enters and
 * gets off the bus at each stop as a parameter and returns the final amount of people inside the
 * bus at the last stop point.
 * 
 * @param {Array} busStops
 *      an array of arrays containing the people who enters and the people who get off the
 *      bus on each stop
 * 
 * @returns {Number} the final amount of people inside the bus.
 */
function number(busStops) {
    return busStops
        .reduce((acc, [on, off]) => (on - off) + acc, 0);
}
