class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {

        let bestProfit = 0;
        for (let i = 0; i < prices.length; i++) {
            for (let j = i+1; j < prices.length; j++) {
                if (prices[j] - prices[i] > bestProfit) {
                    bestProfit = prices[j] - prices[i]
                }
            } 
        }
        return bestProfit;
    }
}
