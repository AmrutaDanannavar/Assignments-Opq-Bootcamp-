// an element is a leader if it is strictly greater than all the elements to its right side
function findLeaders(A) {
    const N = A.length;
    let maxRight = A[N - 1]; // Initialize the maximum value encountered from the right
    const leaders = [maxRight]; // The rightmost element is always a leader

    // Iterate from the second last element to the first
    for (let i = N - 2; i >= 0; i--) {
        // If the current element is greater than the maximum value encountered from the right
        if (A[i] > maxRight) {
            // Update the maximum value encountered from the right
            maxRight = A[i];
            // This element is a leader, so add it to the leaders array
            leaders.unshift(maxRight);
        }
    }

    
    console.log(leaders);
    console.log(leaders.length);
}

// Test cases
findLeaders([16, 17, 4, 3, 5, 2]); // Output: [17, 5, 2]
findLeaders([5, 4]); // Output: [5, 4]
