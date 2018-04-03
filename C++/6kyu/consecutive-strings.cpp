#include <string>
#include <vector>

class LongestConsec {

public:

    static std::string longestConsec(std::vector<std::string>& strArr, int k) {
        int vecSize = strArr.size();

        // Test if the conditions to run the algorithm doesn't match.
        if (vecSize == 0 || k > vecSize || k <= 0)
            return "";


        // Some variables to help us manipulate the data.
        int longestIndex = -1;
        std::string longestString = "";
        std::string testString;

        for (int i = 0; i <= vecSize - k; i++) {
            testString = "";

            for (int j = 0; j < k; j++) {
                testString += strArr[i+j];
            }

            if (testString.length() > longestString.length()) {
                longestString = testString;
                longestIndex = i;
            }
        }

        return longestString;
    }

};
