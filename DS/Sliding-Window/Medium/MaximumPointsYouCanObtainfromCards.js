// easy pattern to get a taste of two pointers and sliding window problem

var maxScore = function(cardPoints, k) {
    let n = cardPoints.length;
    let sum = 0;

    // Start with picking first k cards from the start
    for (let i = 0; i < k; i++) {
        sum += cardPoints[i];
    }

    let maxScore = sum;

    // Now shift the window from end
    for (let i = 1; i <= k; i++) {
        sum = sum - cardPoints[k - i] + cardPoints[n - i];
        maxScore = Math.max(maxScore, sum);
    }

    return maxScore;
};