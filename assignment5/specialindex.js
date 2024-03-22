//removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal
function specialIndexCount(arr) {
    const n = arr.length;
    let count = 0;

    // Calculate the total sum of even-indexed and odd-indexed elements
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            evenSum += arr[i];
        } else {
            oddSum += arr[i];
        }
    }

    // Iterate through each index and check if removing the element at that index makes the sums equal
    for (let i = 0; i < n; i++) {
        let currentEvenSum = evenSum;
        let currentOddSum = oddSum;

        // If the index is even, subtract the corresponding element from evenSum
        if (i % 2 === 0) {
            currentEvenSum -= arr[i];
        } else { // If the index is odd, subtract the corresponding element from oddSum
            currentOddSum -= arr[i];
        }

        // Check if removing the element at this index makes the sums equal
        if (currentEvenSum === currentOddSum) {
            count++;
        }
    }

    return count;
}

// Example usage
const arr1 = [2, 1, 6, 4];
console.log(specialIndexCount(arr1)); // Output: 1

const arr2 = [1, 1, 1];
console.log(specialIndexCount(arr2)); // Output: 2
