
  ['h', 'e', 'l', 'l', 'o'] 
//    1                   4
// -> steps 
  ['o', 'e', 'l', 'l', 'h']
//       1         3

// condition becoms false - dont enter in loop

  ['o', 'l', 'l', 'e', 'h']
//            2
//            2

var reverseString = function(s) {
    let ptr1 = 0
    let ptr2 = s.length - 1

    while(ptr1 < ptr2){
        [s[ptr1], s[ptr2]] = [s[ptr2], s[ptr1]]
        ptr1++
        ptr2--
    }
    return s
};