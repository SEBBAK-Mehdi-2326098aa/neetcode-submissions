class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let numberNeeded = 0;
        for (let i = 0; i < numbers.length; i++) {
            numberNeeded = target - numbers[i];
            let foundIndex = numbers.indexOf(numberNeeded);
            if (foundIndex >= 0 && numberNeeded != numbers[i]) {
                return [i + 1, foundIndex + 1];
            }
        }
    }
}
