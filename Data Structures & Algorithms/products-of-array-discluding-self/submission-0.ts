class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
      const numsLength = nums.length;
      let resultArray = new Array(numsLength).fill(1);

      let leftProduct = 1;
      for (let i = 0; i < numsLength; i++) {
        resultArray[i] = leftProduct;
        leftProduct *= nums[i];  
      }

      let rightProduct = 1;

      for (let i = numsLength -1; i >= 0; i--) {
        resultArray[i]*= rightProduct;
        rightProduct*= nums[i];
      }    

      return resultArray;
    }
}
