class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const map = new Map<string, number>();
        for (let i = 0; i < s.length; i++) {
            map.set(s[i], (map.get(s[i]) || 0) + 1);
        }
        for (let i = 0; i < t.length; i++) {
            const count = map.get(t[i]) || 0;

            if (count === 0) {
                return false;
            }

            map.set(t[i], count - 1);
        }
        return true;
    }
}
