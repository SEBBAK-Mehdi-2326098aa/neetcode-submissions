class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length;
        let max = 0;

        while (left < right) {
            let volume = Math.min(heights[left], heights[right]) * (right - left);
            if (volume > max) {
                max = volume;
            }

            if (heights[left] < heights[right]) {
                left++;
            }
            else {
                right --;
            }
        }

        return max;
    }
}
