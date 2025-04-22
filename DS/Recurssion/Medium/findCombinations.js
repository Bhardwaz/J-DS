var findCombinations = function(ind, candidates, target, ans, ds){
    if(ind === candidates.length){
       if(target === 0){
          ans.push([...ds])
       }
       return
    }

    if(candidates[ind] <= target){
         ds.push(candidates[ind])
         findCombinations(ind, candidates, target - candidates[ind], ans, ds)
         ds.pop()
    }
    findCombinations(ind + 1, candidates, target, ans, ds) 
    return ans
}

var combinationSum = function(candidates, target) {
   const ans = []
   return findCombinations(0, candidates, target, ans, new Array())
};

// Find combinations 2
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b)
    let result = []

    function helper(start, target, sub){
      if(target === 0){
        result.push([...sub])
        return
      }

      for(let i= start; i < candidates.length; i++){
        if(i > start && candidates[i] === candidates[i-1]) continue
        if(candidates[i] > target) break
        sub.push(candidates[i])
        helper(i+1, target - candidates[i], sub)
        sub.pop()
      }
    }
    helper(0, target, [])
    return result
};