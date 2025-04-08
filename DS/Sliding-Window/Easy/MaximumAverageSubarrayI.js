// Brute force approach

var findMaxAverage = function(nums, k) {
    let maxSum = -Infinity; 
    for (let i = 0; i <= nums.length - k; i++) {
         let sum = 0;
       for (let j = i; j < i + k; j++) {
         sum += nums[j];
    }
    maxSum = Math.max(maxSum, sum);
}
    return maxSum / k;
};

// optimal - Sliding window

var findMaxAverage = function(nums, k) {
    let windowSum = 0;

    // Calculate the sum of the first 'k' elements
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    let maxSum = windowSum;

    // Slide the window
    for (let i = k; i < nums.length; i++) {
        windowSum = windowSum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum / k;
};
