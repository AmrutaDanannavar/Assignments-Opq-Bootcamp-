//You are given an integer array C of size A. Now you need to find a subarray (contiguous elements) so that the sum of contiguous elements is maximum. But the sum must not exceed B.
function maximumSubarraySum(A, B, C) {
    let maxSum = 0;
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < A; end++) {
        currentSum += C[end];

        while (currentSum > B) {
            currentSum -= C[start];
            start++;
        }

        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

const A1 = 5;
const B1 = 12;
const C1 = [2, 1, 3, 4, 5];
console.log(maximumSubarraySum(A1, B1, C1));  // Output: 12

const A2 = 3;
const B2 = 1;
const C2 = [2, 2, 2];
console.log(maximumSubarraySum(A2, B2, C2));  // Output: 0
