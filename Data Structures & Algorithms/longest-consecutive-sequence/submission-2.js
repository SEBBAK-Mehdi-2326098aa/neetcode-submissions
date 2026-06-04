class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let lastRecord = 1;
        let currentCount = 1;

        if (nums.length == 0) {
            return 0;
        }

        let orderedArray = nums.sort((a, b) => a - b);
        let numbersSet = new Set(orderedArray);
        let numbersSetToArray = [...numbersSet];

        for (let i = 0; i < numbersSetToArray.length; i++) {
            if (numbersSetToArray[i] + 1 == numbersSetToArray[i + 1]) {
                currentCount++;
                if (currentCount > lastRecord) {
                    lastRecord = currentCount;
                }
            } else {
                currentCount = 1;
            }
        }

        return lastRecord;
    }
}
