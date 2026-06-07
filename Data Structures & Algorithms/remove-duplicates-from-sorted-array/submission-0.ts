class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        if (nums.length === 0) return 0;

        let writer = 0;

        for (let reader = 1; reader < nums.length; reader++) {
            if (nums[writer] !== nums[reader]) {
                writer++;
                nums[writer] = nums[reader];
            }
        }
        return writer + 1;
    }
}