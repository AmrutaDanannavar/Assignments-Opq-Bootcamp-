//Given an array A of N non-negative numbers and a non-negative number B, you need to find the number of subarrays in A with a sum less than B.. We may assume that there is no overflow.
function countSubarraysWithSumLessThanB(A, B) {
    const n = A.length;
    let count = 0;
    let sum = 0;
    let left = 0;

    for (let right = 0; right < n; right++) {
        sum += A[right];

        // If current sum exceeds or equals B, move the left pointer until sum is less than B
        while (sum >= B) {
            sum -= A[left];
            left++;
        }

        // Every time a subarray with sum less than B is found, add the count of elements to the result
        count += right - left + 1;
    }

    return count;
}

const A1 = [2, 5, 6];
const B1 = 10;
console.log(countSubarraysWithSumLessThanB(A1, B1)); // Output: 4

const A2 = [1, 11, 2, 3, 15];
const B2 = 10;
console.log(countSubarraysWithSumLessThanB(A2, B2)); // Output: 4
