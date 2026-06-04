class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        const letterCountMap = new Map<string, number>;
        for (const letter of s){
            let countForThisLetter = (letterCountMap.get(letter) || 0);
            letterCountMap.set(letter, countForThisLetter+1);
            }
        

        for (const letter of t) {
            if (!letterCountMap.has(letter) || letterCountMap.get(letter) === 0) {
                return false
            }
            const currentValueForThisLetter = letterCountMap.get(letter);
            letterCountMap.set(letter, currentValueForThisLetter -1);
        }
        return true;
    }
}
