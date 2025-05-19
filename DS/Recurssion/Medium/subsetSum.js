// pick and non-pick technique

// picking the element - the stack would be
// 0 - 1 - 2 - 3 is ( base condition )

// now after base condition returns - stack starts popping already lined up function with index ( 2 - 1 - 0 ) call in stack

// when call of index 0 comes - it increase to index 1 element - by doing so we can generate all subsets of every elements


var findSubSets = function(nums, answer, ds, idx){
    if(idx === nums.length){
       answer.push([...ds])
       return
    }
  
    // pick the element
    ds.push(nums[idx])
    findSubSets(nums, answer, ds, idx + 1)

    // dont pick the element
    ds.pop()
    findSubSets(nums, answer, ds, idx + 1)

    return answer
}

var subsets = function(nums) {
   let answer = []
   let ds = []

   return findSubSets(nums, answer, ds, 0)
};