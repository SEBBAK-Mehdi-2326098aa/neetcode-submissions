class Solution {
    groupAnagrams(strs: string[]): string[][] {
        const finalMap = new Map<string, string[]>();

        for (const str of strs) {
            const sortedStr = this.alphabeticalSort(str);            
            const currentArray = finalMap.get(sortedStr) || [];
            currentArray.push(str);
            finalMap.set(sortedStr, currentArray);
        }

        return Array.from(finalMap.values());
    }

    private alphabeticalSort(str: string): string {
        return str.split('').sort().join('');
    }
}