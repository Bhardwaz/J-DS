// at most K - Pattern in sliding window problems

// when we are asked to find k amount of subarrays, substrings etc. - k is integer here

// then we try to most - at most k elements not exactly K - bcz we can miss out on some count if we try to find exact k - you can do dry run as well - we struck in dillema of which pointer to move 

// so we find - less then k elements in array - and less then k - 1

// and difference of these are correct answer

Input: nums = [1,0,1,0,1], goal = 2
Output: 4

[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]

function find(nums, goal){
    if(goal < 0) return 0

    let left = 0, right = 0, sum = 0, count = 0

    while(right < nums.length){
      sum += nums[right]

      while(sum > goal){
         sum -= nums[left]
         left++
      }

      count += right - left + 1
      right++
    }
    return count
}

var numSubarraysWithSum = function(nums, goal) {
      return find(nums, goal) - find(nums, goal - 1)
};