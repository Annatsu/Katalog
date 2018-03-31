// Kata link: https://www.codewars.com/kata/growth-of-a-population


class Arge {
    public:
    static int nbYear(int population, double percent, int aug, int goal) {
        double parsedPercent = percent / 100;
        int years = 0;

        while (population < goal) {
            population += ((int) population * parsedPercent) + aug;
            years++;
        }

        return years;
    }
};