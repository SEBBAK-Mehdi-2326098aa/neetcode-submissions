class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
isValid(s: string): boolean {
    let validationArray: string[] = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        switch (char) {
            case '[':
            case '(':
            case '{':
                validationArray.push(char);
                break;

            case ']':
                if (validationArray[validationArray.length - 1] === '[') {
                    validationArray.pop();
                } else {
                    return false;
                }
                break;

            case ')':
                if (validationArray[validationArray.length - 1] === '(') {
                    validationArray.pop();
                } else {
                    return false;
                }
                break;

            case '}':
                if (validationArray[validationArray.length - 1] === '{') {
                    validationArray.pop();
                } else {
                    return false;
                }
                break;
            
            default:
                break;
        }
    }

    return validationArray.length === 0;
}
}

