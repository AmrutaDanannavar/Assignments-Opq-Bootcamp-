// an array is said to be good if it fulfills any one of the criteria:

// 1. Length of the subarray is be even, and the sum of all the elements of the subarray must be less than B.

// 2. Length of the subarray is be odd, and the sum of all the elements of the subarray must be greater than B.


function countGoodSubarrays(A, B) {
    const n = A.length;
    let count = 0;

    for (let i = 0; i <n; i++) {
        for (let j = i; j <n; j++) {
            let subarray = A.slice(i, j + 1);
            let subarraySum = subarray.reduce((acc, curr) => acc + curr, 0); //return the subarraysum
            let subarrayLength = subarray.length;
            // Check if the subarray meets one of the criteria
            if ((subarrayLength % 2 === 0 && subarraySum < B) || (subarrayLength % 2 != 0 && subarraySum > B)) {
                count++;
            }
        }
    }

    return count;
}

const A1 = [1, 2, 3, 4, 5];
const B1 = 4;
console.log(countGoodSubarrays(A1, B1));  // Output: 6

const A2 = [13, 16, 16, 15, 9, 16, 2, 7, 6, 17, 3, 9];
const B2 = 65;
console.log(countGoodSubarrays(A2, B2));  // Output: 36
