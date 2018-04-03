// Kata link: https://www.codewars.com/kata/find-the-vowels

#include <vector>
#include <string>
#include <locale>


std::vector<int> vowelIndices(std::string word) {
    static std::vector<char> vowels { 'a', 'e', 'i', 'o', 'u', 'y' };
    static std::locale loc;

    std::vector<int> res;

    for (int i = 0; i < word.length(); i++)
        for (int j = 0; j < vowels.size(); j++)
            if (std::tolower(word[i], loc) == vowels[j])
                res.push_back(i + 1);
  
	return res;
}
