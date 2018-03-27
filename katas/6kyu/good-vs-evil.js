// Kata link: https://www.codewars.com/kata/good-vs-evil


// How much each troop is worth.
const goodWorth = [1, 2, 3, 3, 4, 10];
const evilWorth = [1, 2, 2, 2, 3, 5, 10];


/**
 * A generic function to calculate an entire army worth value, given a worth array.
 * 
 * @param {String} armyString
 *      a string of integers, delimited by spaces, representing the amount of each troop in the army.
 * @param {Array} armyWorth
 *      an array containing how many each troop is worth.
 * 
 * @returns {Number} the army 'power'.
 */
function getArmyForce(armyString, armyWorth) {
    return armyString
        .split(' ')
        .map((v) => parseInt(v, 10))
        .reduce((acc, a, i) => (a * armyWorth[i]) + acc, 0);
}


/**
 * The entry point function to determine each side will win the confrontation.
 * 
 * @param {String} good the good army string.
 * @param {String} evil the evil army string.
 * 
 * @returns {String} a string that announces the winner, or a tie.
 */
function goodVsEvil(good, evil) {
    const goodArmyForce = getArmyForce(good, goodWorth);
    const evilArmyForce = getArmyForce(evil, evilWorth);

    return goodArmyForce === evilArmyForce
        ? 'Battle Result: No victor on this battle field'
        : goodArmyForce > evilArmyForce
            ? 'Battle Result: Good triumphs over Evil'
            : 'Battle Result: Evil eradicates all trace of Good';
}
