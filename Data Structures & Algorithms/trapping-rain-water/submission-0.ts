class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let count = 0;

        for (let i = 0; i < height.length; i++) {
            let left = i - 1;
            let right = i + 1;
            let leftMax = 0;
            let rightMax = 0;

            while (left != -1) {
                if (height[left] > leftMax) {
                    leftMax = height[left];
                }
                left--;
            }

            while (right != height.length) {
                if (height[right] > rightMax) {
                    rightMax = height[right];
                }
                right++;
            }
            let waterOnCase = Math.min(leftMax, rightMax) - height[i];
            if (waterOnCase > 0) {
                count += waterOnCase;
            }
        }

        return count;
    }
}
