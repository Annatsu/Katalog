// Kata link: https://www.codewars.com/kata/take-a-ten-minute-walk


public class TenMinWalk {

    public static boolean isValid(char[] walk) {
        int dx = 0;
        int dy = 0;

        if (walk.length == 10) {
            for (int i = 0; i < walk.length; i++)
                switch (walk[i]) {
                    case 'n': dy++; break;
                    case 's': dy--; break;
                    case 'w': dx--; break;
                    case 'e': dx++; break;
                }
            return dx == 0 && dy == 0;
        }

        return false;
    }

}
