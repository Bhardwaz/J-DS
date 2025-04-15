// classic problem 

// TC O(N + N) - for loop + while loop

var lengthOfLongestSubstringKDistinct = function(s, k) {
    if (k === 0) return 0;

    let left = 0, maxLen = 0;
    const map = new Map();

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        map.set(char, (map.get(char) || 0) + 1);

        // shrink window until we have at most k distinct chars
        while (map.size > k) {
            const leftChar = s[left];
            map.set(leftChar, map.get(leftChar) - 1);
            if (map.get(leftChar) === 0) map.delete(leftChar);
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};


// TC -> O(N)

var lengthOfLongestSubstringKDistinct = function(s, k) {
    if (k === 0) return 0;

    let left = 0, maxLen = 0;
    const map = new Map();

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        map.set(char, (map.get(char) || 0) + 1);

        // shrink window until we have at most k distinct chars
        if(map.size > k) {
            const leftChar = s[left];
            map.set(leftChar, map.get(leftChar) - 1);
            if (map.get(leftChar) === 0) map.delete(leftChar);
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen; 
};



