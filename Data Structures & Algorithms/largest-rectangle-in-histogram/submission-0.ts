class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        let max: number = 0;
        let stack: number[] = [];

        heights.push(0);

        for (let i = 0; i <= heights.length; i++) {
            while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
                const value = stack.pop()!;
                const height = heights[value];
                const length = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                
                const result = height * length;
                if (result > max) {
                    max = result;
                }  
            }

            stack.push(i);
        }
        return max;
    }
}