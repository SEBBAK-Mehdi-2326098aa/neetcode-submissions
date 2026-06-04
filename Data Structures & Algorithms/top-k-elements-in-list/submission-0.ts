class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
      let seenNumbersMap = new Map<number, number>;

      for (let i = 0; i < nums.length; i++) {
        const number = (seenNumbersMap.get(nums[i]) || 0);
        seenNumbersMap.set(nums[i], number +1);
      }
      
      
    let sortedKeys = Array.from(seenNumbersMap.entries())
    .sort((a, b) => b[1] - a[1])
    .map(pair => pair[0]);

return sortedKeys.slice(0, k);
    }
}
