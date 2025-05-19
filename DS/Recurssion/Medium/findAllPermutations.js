// with map 

var findAllPermutations = function(nums, map, ds, answer){
    if(ds.length === nums.length){
      answer.push([...ds])
      return
    }

    for(let i=0; i < nums.length; i++){
       if(!map[i]){
           map[i] = true
           ds.push(nums[i])
           findAllPermutations(nums, map, ds, answer)
           map[i] = false
           ds.pop()
       }
    }
    return answer
}

var permute = function(nums) {
   let answer = []
   
   return findAllPermutations(nums, new Array(nums.length).fill(false), new Array(), answer)
};


// with in place swap 
var swap = function(nums, index, i){
    const temp = nums[i]
    nums[i] = nums[index]
    nums[index] = temp
}

var findAllPermutations = function(nums, index, answer){
    if(index === nums.length){
      answer.push([...nums])
      return
    }

    for(let i=index; i < nums.length; i++){
       swap(nums, index, i)
       findAllPermutations(nums, index + 1, answer)
       swap(nums, index, i)
    }
    return answer
}

var permute = function(nums) {
   let answer = []
   
   return findAllPermutations(nums, 0, answer)
};