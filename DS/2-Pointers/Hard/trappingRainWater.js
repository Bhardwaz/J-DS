// brute force O(N*2)

var trap = function(height) {
    let trappedWater = 0;
    
    for (let i = 1; i < height.length - 1; i++) {
        let leftMax = 0;
        let rightMax = 0;

        // Find max height to the left of current
        for (let j = 0; j <= i; j++) {
            leftMax = Math.max(leftMax, height[j]);
        }

        // Find max height to the right of current
        for (let j = i; j < height.length; j++) {
            rightMax = Math.max(rightMax, height[j]);
        }

        trappedWater += Math.min(leftMax, rightMax) - height[i];
    }

    return trappedWater;
};

// better appraoch

var trap = function(height) {
    let leftMaxArr = new Array(height.length).fill(0)
    leftMaxArr[0] = height[0]

    let rightMaxArr = new Array(height.length).fill(0)
    rightMaxArr[height.length - 1] = height[height.length - 1]

    let trappedRainWater = 0

    for(let i = 1; i < height.length; i++){
      leftMaxArr[i] = Math.max(leftMaxArr[i-1], height[i])
    }

    for(let i = height.length - 2; i >= 0; i--){
      rightMaxArr[i] = Math.max(rightMaxArr[i + 1], height[i])
    }

    for(let i = 0; i < height.length; i++){
       trappedRainWater += Math.min(leftMaxArr[i], rightMaxArr[i]) - height[i]    
    }

    return trappedRainWater
};

// 2 Pointer optimal approach

var trap = function(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }

    return water;
};

