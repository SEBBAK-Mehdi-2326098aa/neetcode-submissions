class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let seenNumbers = new Map<number,number>;
        for (let i = 0; i < nums.length; i++) {
            let numberNeeded = target - nums[i];
            if (seenNumbers.has(numberNeeded)) {
                return [i, seenNumbers.get(numberNeeded)];
            }
            seenNumbers.set(nums[i], i);
        }
    }
}
