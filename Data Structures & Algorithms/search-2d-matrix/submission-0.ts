class Solution {
    searchMatrix(matrix: number[][], target: number): boolean {
        if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;

        let goodIndex = -1;

        for (let i = 0; i < matrix.length; i++) {
            if (i === matrix.length - 1 || target < matrix[i + 1][0]) {
                goodIndex = i;
                break;
            }
        }

        if (goodIndex !== -1) {
            for (let j = 0; j < matrix[goodIndex].length; j++) {
                if (matrix[goodIndex][j] === target) {
                    return true;
                }
            }
        }

        return false;
    }
}