class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        let seenValues = new Set<string>();
        let skipValues = 0;
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if (board[i][j] == ".") {
                    skipValues += 3;
                    continue;
                }
                seenValues.add("Le chiffre" + board[i][j] + "vu sur cette ligne" + i);
                seenValues.add("Le chiffre" + board[i][j] + "vu sur cette colonne" + j);
                let indexX = Math.floor(i / 3);
                let indexY = Math.floor(j / 3);
                seenValues.add("le chiffre" + board[i][j] + "vu aux coordonnées" + indexX + indexY);
            }
        }
        return seenValues.size + skipValues == 81*3;
    }
}
