https://leetcode.com/problems/container-with-most-water/description/

var maxArea = function(height) {
    let start = 0
    let end = height.length - 1
    let maxArea = -Infinity

    while(start < end){
       let area = Math.min(height[start], height[end]) * (end - start)
       maxArea = Math.max(area, maxArea)
       
       if(height[start] < height[end]){
        start++
       }else {
        end--
       }
    }
    return maxArea
};