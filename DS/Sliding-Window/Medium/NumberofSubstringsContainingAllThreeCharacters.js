
// one approach

var numberOfSubstrings = function(s) {
    let occurences = { a:-1, b:-1, c:-1 }
    let result = 0
 
    for(let i=0; i < s.length; i++){
       occurences[s[i]] = i
 
       if(occurences['a'] > -1 && occurences['b'] > -1 && occurences['c'] > -1){
         let min = Math.min(occurences['a'], occurences['b'], occurences['c'])
         
         result += min + 1
       }
    }
     return result
 };