class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let result = new Array(temperatures.length).fill(0);
        let stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[stack[stack.length-1]] < temperatures[i]) {
                let value = stack.pop();
                result[value]=i-value;
            }
            stack.push(i);
        }

        return result;
    }
}
