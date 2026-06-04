class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits: number[]): number[] {
        let i = digits.length - 1;
        while (i >= 0) {
            if (digits[i] == 9) {
                digits[i] = 0;
            } else {
                    digits[i]++;
                    break;
            }
            i--;
        }

        if (digits[0] == 0) {
            digits.unshift(1);
        }
        return digits;
    }
}
