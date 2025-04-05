// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// 3 cases 

// if both pointer not equal to zero then move both 
// if both pointer are equal to zero then move only fast pointer to look for where is non zero elements exist in array to swap 

// one will be equal and other not 

// slow === 0 && fast !== 0  -> then swap and move both forward

var moveZeroes = function(nums) {
    if(nums.length === 0 || nums.length === 1) return nums
    let slow = 0
    let  fast = 0

    while(fast < nums.length){
        if(nums[slow] === 0 && nums[fast] === 0){
            fast++
        }else if(nums[slow] === 0 && nums[fast] !== 0){
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
            slow++
            fast++
        }
        
        if(nums[slow] !== 0 && nums[fast] !== 0){
           slow++
           fast++
        }
    }
    return nums
};