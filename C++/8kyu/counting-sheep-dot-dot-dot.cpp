// Kata link: https://www.codewars.com/kata/counting-sheep-dot-dot-dot

#include <vector>


int count_sheep(std::vector<bool> arr) {
    int result = 0;

    for (int i = 0; i < arr.size(); i++)
        result += (int) arr[i];

    return result;
}
