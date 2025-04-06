
// one easy approach

var twoSum = function(nums, target) {
    let front = 0
    let rear = nums.length - 1

    while(front < rear){
       if(nums[front] + nums[rear] === target) return [front+1, rear+1]

       if(nums[front] + nums[rear] > target) rear--
       if(nums[front] + nums[rear] < target) front++
    }
};

// second approach - use map

var twoSum = function(nums, target) {
    const map = new Map()

    for(let i=0; i<nums.length; i++){
       if(map.has(target-nums[i])) {
           return [map.get(target-nums[i]), i+1]
       }
       map.set(nums[i], i+1)
    }
};