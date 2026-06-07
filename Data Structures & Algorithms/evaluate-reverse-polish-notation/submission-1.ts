class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack = [];
        const operations: Record<string, (a: number, b: number) => number> = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => Math.trunc(a / b),
        };

        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] in operations) {
                let rightOperand = stack.pop();
                let leftOperand = stack.pop();
                let resultat = operations[tokens[i]](leftOperand, rightOperand);
                stack.push(resultat);
            } else {
                stack.push(+tokens[i]);
            }
        }
        return stack[0];
    }
}
