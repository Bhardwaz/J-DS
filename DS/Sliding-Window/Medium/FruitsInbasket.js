// Popular problem

// most optimal solution for this problem

var totalFruit = function(fruits) {
    let left = 0, maxLen = 0;
    const map = new Map();

    for (let right = 0; right < fruits.length; right++) {
        // Add current fruit to the map
        map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);

        // If more than 2 types, shrink window
        while (map.size > 2) {
            map.set(fruits[left], map.get(fruits[left]) - 1);
            if (map.get(fruits[left]) === 0) {
                map.delete(fruits[left]);
            }
            left++;
        }

        // Update max length
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
