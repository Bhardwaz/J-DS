
/** 
 *  We move two pointers from start - 
 *  one is moving pointer (which will move fast and keep comparing value with pointer 1). this moving pointer can also be i of for-loop and vice-versa for other loop
 * 
*/

// Case if both are same element - Just keep moving fast pointer 
// case if both are different then 
// PLACE MOVER POINTER VALUE AHEAD OF FIRST SLOW POINTER + 1

var removeDuplicates = function(nums) {
    let ptr1 = 0
    let ptr2 = 1

    while(ptr2 < nums.length){
        if(nums[ptr1] === nums[ptr2]){
            ptr2++
        }else if(nums[ptr1] !== nums[ptr2]){
            nums[ptr1+1] = nums[ptr2]
            ptr1++
            ptr2++
        }
    }
    return new Set(nums).size
};

// second approach - Efficient one

var removeDuplicates = function(nums) {
    let i = 1;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i - 1]) {
            nums[i] = nums[j];
            i++;
        }
    }

    return i;    
};
