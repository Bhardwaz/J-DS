// First we write recursive appraoch of dp problem then go to memoization and top-down approach

// Recurssion is always if there are choices

// choices are if weight is greater than W (total capacity of knapsack) then we wont take that value

// if it is lower then W - then we compare with the available capacity - can this item go into knapsack or not - so here we also have two choices 

// in function we will have a base condition - think of the smallest valid input - in this problem we will have - n === 0 or W === 0

// we start from n - length of array and keep decreasing the size of array



function knapsackRecursive(weights, values, n, W) {
    // Base case: no items left or no capacity left
    if (n === 0 || W === 0) {
        return 0;
    }

    // If weight of current item is more than remaining capacity, skip it
    if (weights[n - 1] > W) {
        return knapsackRecursive(weights, values, n - 1, W);
    }

    // Two choices:
    // 1. Include the item → add its value + solve for remaining capacity
    // 2. Exclude the item → move to next item
    const include = values[n - 1] + knapsackRecursive(weights, values, n - 1, W - weights[n - 1]);
    const exclude = knapsackRecursive(weights, values, n - 1, W);

    // Return the maximum of including or excluding
    return Math.max(include, exclude);
}

// Knapsack Memoization