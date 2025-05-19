// https://leetcode.com/problems/unique-paths/

var helper = function(row, col, dp){
     if(row === 1 && col === 1) return 1
     if(row < 0 || col < 0) return 0
     if(dp[row][col] !== -1) return dp[row][col]

     let right = helper(row - 1, col, dp)
     let bottom = helper(row, col - 1, dp)
     return dp[row][col] = right + bottom
}

var uniquePaths = function(row, col){
  const dp = new Array(row + 1).fill(null).map(() => new Array(col + 1).fill(-1))
  return helper(row, col, dp)
}
