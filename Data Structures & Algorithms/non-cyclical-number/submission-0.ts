class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n: number): boolean {
       let seenResults = []; 

       let result = n;
        while (result !== 1) {
            result = this.replaceWithSumOftheSquareOfDigits(result);
            if (seenResults.includes(result)) {
                return false;
            }
            seenResults.push(result);
        }
        return true;
    }

    public replaceWithSumOftheSquareOfDigits(n: number): number {
        const nToString = String(n);
        let result = 0;

        for (let i = 0; i < nToString.length; i++) {
            result = result = result + ((+nToString[i]) ** 2);
        }

        return result;
    }
}
