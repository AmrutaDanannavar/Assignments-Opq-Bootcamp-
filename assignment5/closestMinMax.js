//  smallest subarray with min and max value of array 
function smallestSubarrayWithMinMax(A) {
    const n = A.length;

    // Find the minimum and maximum elements of the array
    const minElement = Math.min(...A);
    const maxElement = Math.max(...A);

    // Initialize variables to track the indices of the first occurrence of min and max elements
    let minIndex = -1;
    let maxIndex = -1;

    // Iterate through the array and find the first occurrence of min and max elements
    for (let i = 0; i < n; i++) {
        if (A[i] === minElement && minIndex === -1) {
            minIndex = i;
        }
        if (A[i] === maxElement && maxIndex === -1) {
            maxIndex = i;
        }
    }

    // Calculate the length of the smallest subarray containing both min and max elements
    const subarrayLength = Math.abs(maxIndex - minIndex) + 1;// abs returns absoult value  ex abs(5)=5 and abs(-5)=5

    return subarrayLength;
}

// Example usage
const A1 = [1, 3, 2];
console.log(smallestSubarrayWithMinMax(A1)); // Output: 2

const A2 = [2, 6, 1, 6, 9];
console.log(smallestSubarrayWithMinMax(A2)); // Output: 3
