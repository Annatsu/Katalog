public class Kata {

    public static double[] averages(int[] numbers) {
        if (numbers == null || numbers.length <= 1)
            return new double[] {};

        double[] result = new double[numbers.length - 1];

        for (int i = 0; i < numbers.length - 1; i++)
            result[i] = (double) (numbers[i] + numbers[i+1]) / 2;

        return result;
    }

}