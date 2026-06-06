class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        let result = [];
        nums = nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                let addition = nums[i] + nums[left] + nums[right];

                if (addition == 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;

                    while (nums[left -1] == nums[left]) {
                        left++;
                    }

                    while (nums[right + 1] == nums[right]) {
                        right--;
                    }
                } else if (addition > 0) {
                    right--;
                } else {
                    left++;
                }
            }
        }

        return result;
    }
}
