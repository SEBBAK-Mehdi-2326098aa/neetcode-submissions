class Solution {
    encode(strs: string[]): string {
        let encodedString = '';
        for (const s of strs) {
            encodedString += s.length + '#' + s;
        }
        return encodedString;
    }

    decode(str: string): string[] {
        const finalArray: string[] = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }

            const lengthWord = parseInt(str.substring(i, j));
            
            const startOfWord = j + 1;
            const endOfWord = startOfWord + lengthWord;
            
            const newString = str.substring(startOfWord, endOfWord);
            finalArray.push(newString);
            
            i = endOfWord;
        }

        return finalArray;
    }
}