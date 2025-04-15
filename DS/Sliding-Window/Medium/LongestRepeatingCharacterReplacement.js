var characterReplacement = function(s, k) {
    let map = new Array(26).fill(0)
    let maxFreq = 0
    let start = 0
    let maxLen = 0

     for (let end = 0; end < s.length; end++) {
        let idx = s[end].charCodeAt(0) - 65
        map[idx]++
        maxFreq = Math.max(maxFreq, map[idx])
        
        console.log(map);
        
        while ((end - start + 1) - maxFreq > k) {
            let startIdx = s[start].charCodeAt(0) - 65
            map[startIdx]--
            start++
        }

        maxLen = Math.max(maxLen, end - start + 1)
    }

    return maxLen
};

console.log(characterReplacement("ABAB"));
console.log(characterReplacement("AABABBA"));

