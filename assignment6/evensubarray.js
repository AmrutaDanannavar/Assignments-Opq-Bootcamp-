function isPossibleEvenSubarrays(A) {
    // Check if the length of the array is even and the first and last elements are even numbers
    if (A.length % 2 === 0 && A[0] % 2 === 0 && A[A.length - 1] % 2 === 0) {
        return "YES";
    } else {
        return "NO";
    }
}

console.log(isPossibleEvenSubarrays([2, 4, 8, 6])); // Output: "YES"
console.log(isPossibleEvenSubarrays([2, 4, 8, 7, 6])); // Output: "NO"