function climbingStairs(cost, n)

{
    let dp = new Array(n)
    if (n == 1)
        return cost[0]

    dp[1] = cost[1]
    dp[0] = cost[0]

    for (let i = 2; i < n; i++)
    {
        dp[i] = Math.min(dp[i-1], dp[i-2]) + cost[i]

    }
    return Math.min(dp[n-2], dp[n -1]);
}
     
let climb = [0, 2, 2, 1]
// let climb = [0, 2, 3, 2]
// let climb = [10, 15, 20]
// let climb = [0, 0, 0, 0, 0, 0]
   
let n = climb.length

console.log(climbingStairs(climb, n));

     