// Kata link: https://www.codewars.com/kata/replace-every-nth


class Kata {

public:
    std::string replaceNth(std::string text, int n, char oldValue, char newValue) {
        if (n < 1)
            return text;
        
        for (int i = 0, occ = 0; i < text.length(); i++)
            if (text[i] == oldValue) {
                occ++;
                if (occ % n == 0)
                    text[i] = newValue;
            }

        return text;
    }

};
