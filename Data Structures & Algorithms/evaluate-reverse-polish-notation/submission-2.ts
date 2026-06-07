class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const operations: Record<string, (a: number, b: number) => number> = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "/": (a, b) => Math.trunc(a / b),
            "*": (a, b) => a * b,
        };

        let stack = [];

        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] in operations) {
                let b = stack.pop();
                let a = stack.pop();
                let result = operations[tokens[i]](a, b);
                stack.push(+result);
            } 
            else {
                stack.push(+tokens[i]);
            }
        }
        return stack[0];
    }
}
