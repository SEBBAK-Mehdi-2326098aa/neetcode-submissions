class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleanS = s.toLowerCase().replace(/[^a-z0-9]/g, "");

        for (let i = 0; i < cleanS.length / 2; i++) {
            if (cleanS[i] !== cleanS[cleanS.length - 1 - i]) {
                return false;
            }
        }
        
        return true;
    }
}