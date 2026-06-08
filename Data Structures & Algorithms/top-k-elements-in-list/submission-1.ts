class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let seenNumbers = new Map<number,number>;

        for (let i = 0; i < nums.length; i++) {
            let actualCount = seenNumbers.get(nums[i]) || 0;
            seenNumbers.set(nums[i], actualCount+1);
        }

        let seenNumbersToArray = Array.from(seenNumbers.entries());
        const orderedArray = seenNumbersToArray.sort((a,b) => b[1]-a[1]);

        return orderedArray.slice(0, k).map(duo => duo[0]);
    }
}
