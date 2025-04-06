
// one mismatch is allowed- This is second version of palindrom - leetcode 
// https://leetcode.com/problems/valid-palindrome-ii/

var validPalindrome = function(s) {
    const isPalindrome = (start, rear) => {
        while(start < rear){
            if(s[start] !== s[rear]) return false
            start++
            rear--
        }
        return true
    }

    let start = 0, rear = s.length - 1
    while(start < rear){
        if(s[start] !== s[rear]){
            return isPalindrome(start+1, rear) || isPalindrome(start, rear - 1) 
        }
        start++
        rear--
    }
    return true
};