// brute force 
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        let seen = new Set();

        for (let j = i; j < s.length; j++) {
            if (seen.has(s[j])) {
                break;
            }

            seen.add(s[j]);
            maxLength = Math.max(maxLength, j - i + 1);
        }
    }

    return maxLength;
};

// Better approach

var lengthOfLongestSubstring = function(s) {
    let start = 0, end = 0;
    let maxLength = 0;
    let seen = new Set();

    while (end < s.length) {
        if (!seen.has(s[end])) {
            seen.add(s[end]);
            maxLength = Math.max(maxLength, end - start + 1);
            end++;
        } else {
            seen.delete(s[start]);
            start++;
        }
    }

    return maxLength;
};


// optimal approach -> in interview we can come up on this very last and can tell interviewer about this approach that whenever we face a repeated character according to map , we can see in map on which index we saw that character previously and can move start index + 1 of that index smartly so that our string always stay unique with no repeated character

var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let maxLength = 0;
    let map = new Map(); // store character → latest index

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        if (map.has(char) && map.get(char) >= start) {
            start = map.get(char) + 1;
        }

        map.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};
