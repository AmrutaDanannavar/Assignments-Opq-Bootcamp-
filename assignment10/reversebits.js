function reverseBits(A) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        // Extract the rightmost bit of A and add it to result
        result =result| (A & 1) << (31 - i);
        // Right shift A by 1
        A >>= 1;
    }
    return result >>> 0; // Convert result to unsigned 32-bit integer
}

console.log(reverseBits(0));  // Output: 0
console.log(reverseBits(3));  // Output: 3221225472
