/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length < 2) return 0;
    let profit = 0;

    let daliyMaxProfitArray = [0, prices[1] - prices[0]];
    let currentMin = prices[1] > prices[0] ? prices[0] : prices[1];

    for (let i = 2; i < prices.length; i++) {
        daliyMaxProfitArray.push(prices[i] - currentMin);
        if (currentMin > prices[i]) currentMin = prices[i];
    }
    profit = Math.max(...daliyMaxProfitArray);
    if (profit <= 0) return 0;
    return profit;
};



console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5