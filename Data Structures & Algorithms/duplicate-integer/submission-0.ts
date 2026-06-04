class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let numbersSet = new Set<number>();
        for (const number of nums) {
            if (numbersSet.has(number)) {
                return true;
            }
            numbersSet.add(number);
        }
        return false
    }
}
