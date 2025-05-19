
// this code has o(n) space complexity

var climbStairs = function(n) {
   const memo = new Array(n + 1).fill(-1)
   
   function helper(n){
    if(n < 0) return 0
    if(n === 0) return 1

    if(memo[n] != -1) return memo[n]

    let fstep = helper(n - 1);
    let sstep = helper(n - 2);

    return memo[n] = fstep + sstep
   }
   
   return helper(n)
};

