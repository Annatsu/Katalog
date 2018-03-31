// Kata link: https://www.codewars.com/kata/square-every-digit

public class SquareDigit {

    public int squareDigits(int n) {
        String[] numbers = Integer.toString(n).split("");
        String result = "";

        for (String number : numbers) {
            int parsed = Integer.parseInt(number);
            result += parsed * parsed;
        }

        return Integer.parseInt(result);
    }
  
}
