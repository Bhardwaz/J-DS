// brute force

var minSubArrayLen = function(target, nums) {
    let minLen = Infinity;

    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum >= target) {
                minLen = Math.min(minLen, j - i + 1);
                break; // No need to extend this subarray further
            }
        }
    }
    return minLen === Infinity ? 0 : minLen;
};

// optimal 

var minSubArrayLen = function(target, nums) {
    let start = 0;
    let sum = 0;
    let minLen = Infinity;

    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];

        while (sum >= target) {
            minLen = Math.min(minLen, end - start + 1);
            sum -= nums[start];
            start++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
};