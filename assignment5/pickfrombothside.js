function maxSumAfterOperations(A, B) {
    const N = A.length;
    let maxSum = 0;
    const Sum = [0];

    for (let i = 0; i < N; i++) {
        Sum.push(Sum[i] + A[i]);
    }  
    console.log(Sum);  //[ 0, 5, 3, 6, 7, 9 ]
    for (let leftRemovals = 0; leftRemovals <= B; leftRemovals++) {
        const rightRemovals = B - leftRemovals;
        let currentSum = 0;
        if (leftRemovals > 0) {
            currentSum += Sum[leftRemovals];
        }
        if (rightRemovals > 0) {
            currentSum += Sum[N] - Sum[N - rightRemovals];
        }
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

console.log(maxSumAfterOperations([5, -2, 3, 1, 2], 3)); // Output: 8
//console.log(maxSumAfterOperations([2, 3, -1, 4, 2, 1], 4)); // Output: 9