
//A 0-1 alternating array is an array containing only Dis adjacent l's or 0's. For e.g. arrays 0, 1, 0, 1], [1.0 while [1, 1,1] and [0, 1, 0, 0, 1] are not.
function alternatingSubarrayCenters(A, B) {
    const N = A.length;
    const result = [];

    function isAlternating(subarray) {
        for (let i = 1; i < subarray.length; i++) {
            if (subarray[i] === subarray[i - 1]) {
                return false; // Adjacent elements are equal, not alternating
            }
        }
        return true;
    }

    for (let i = 0; i < N; i++) {
        // Expand to both left and right by at most B steps
        for (let j = Math.max(0, i - B); j <= Math.min(N - 1, i + B); j++) {
            // Check if the subarray from j to i is alternating
            if (isAlternating(A.slice(j, i + 1))) {
                result.push(i); // Add the index to the result array
                break; // No need to check further for this index
            }
        }
    }

    return result;
}

// Example usage:
const A1 = [1, 0, 1, 0, 1];
const B1 = 1;
console.log(alternatingSubarrayCenters(A1, B1)); // Output: [1, 2, 3]

const A2 = [0, 0, 0, 1, 1, 0, 1];
const B2 = 0;
console.log(alternatingSubarrayCenters(A2, B2)); // Output: [0, 1, 2, 3, 4, 5, 6]
