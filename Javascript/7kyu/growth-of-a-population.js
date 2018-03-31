// Kata link: https://www.codewars.com/kata/growth-of-a-population

function nbYear(population, growthRate, aug, goal) {
    let years = 0;
    growthRate /= 100;

    while (population < goal) {
        population += parseInt(population * growthRate) + aug;
        years++;
    }

    return years;
}
