/**
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairs = function (cost) {
    let dp = [cost[0], cost[1]];

    for (let i = 2; i < cost.length; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i]); // 무조건 밟는다는 가정
        console.log(dp);

    }
    return Math.min(dp[dp.length - 1], dp[dp.length - 2])
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6
