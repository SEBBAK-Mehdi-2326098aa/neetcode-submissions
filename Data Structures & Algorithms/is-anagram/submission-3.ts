class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(firstString: string, secondString: string): boolean {

        if (firstString.length !== secondString.length) {
            return false;
        }

        let countMap = new Map<string, number>;
        for (let i = 0; i < firstString.length; i++) {
            countMap.set(firstString[i], (countMap.get(firstString[i]) || 0) +1);
        }

        for (let i = 0; i < secondString.length; i++) {
            if (!countMap.get(secondString[i]) || countMap.get(secondString[i]) === 0) {
                return false;
            }
            countMap.set(secondString[i],(countMap.get(secondString[i]) || 0) -1);
        }
        return true;
    }
}
