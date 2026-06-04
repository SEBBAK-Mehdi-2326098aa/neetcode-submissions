class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let count :number = 0;
        let max = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == 1) {
                count++;
            }
            else {
                count = 0;
            }
            if (count > max) {
                max = count;
            }
        }
        return max;
    }
}
