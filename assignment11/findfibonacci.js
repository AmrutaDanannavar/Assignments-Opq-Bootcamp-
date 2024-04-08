function fibonacci(A) {
    // Base case: If A is 0 or 1, return A
    if (A <= 1) {
        return A;
    }
    
    // Recursive case: Fn = Fn-1 + Fn-2
    return fibonacci(A - 1) + fibonacci(A - 2);
}

console.log(fibonacci(2)); // Output: 1
console.log(fibonacci(9)); // Output: 34
