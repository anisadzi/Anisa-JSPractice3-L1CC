function climbingStairs(cost)

{
    var length = cost.length
    let dp = new Array(length)
    if (length == 1)
        return cost[0]

    dp[1] = cost[1]
    dp[0] = cost[0]

    for (let i = 2; i < length; i++)
    {
        dp[i] = Math.min(dp[i-1], dp[i-2]) + cost[i]

    }
    return Math.min(dp[length-2], dp[length -1]);
}
     

console.log(climbingStairs([0, 2, 2, 1]));
console.log(climbingStairs([0, 2, 3, 2]));
console.log(climbingStairs([10, 15, 20]));
console.log(climbingStairs([0, 0, 0, 0, 0, 0]));

     