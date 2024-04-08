function countSetBits(A) {
    let count = 0;
    while (A > 0) {
        // Check if the rightmost bit is set to 1
        if (A & 1) {
            count++;
        }
        // Right shift A by 1 to check the next bit
        A >>= 1;
    }
    return count;
}

console.log(countSetBits(11)); // Output: 3
console.log(countSetBits(6));  // Output: 2
