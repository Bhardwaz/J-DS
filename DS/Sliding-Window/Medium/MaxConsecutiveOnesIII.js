
// just keep increasing end pointer until we dont hit limit k
// as soon as we hit limit of k, immediately assign -> end pointer - start pointer + 1
// and start = start + 1 -> to seee next window

var longestOnes = function(nums, k) {
    let start = 0, maxZeros = 0, maxLen = 0;

    for (let end = 0; end < nums.length; end++) {
        if (nums[end] === 0) maxZeros++;

        while (maxZeros > k) {
            if(nums[start] === 0) maxZeros--;
            start++;
        }
        
        maxLen = Math.max(maxLen, end - start + 1);
    }
    return maxLen;
};