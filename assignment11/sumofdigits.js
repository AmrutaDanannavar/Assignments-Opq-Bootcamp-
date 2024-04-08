function sumOfDigits(A) {
    // Base case: If the number is less than 10, return the number itself
    if (A < 10) {
        return A;
    }

    // Extract the last digit of the number
    let lastDigit = A % 10;
    // Recursively call sumOfDigits with the number excluding the last digit
    // and add the last digit to the result
    return lastDigit + sumOfDigits(Math.floor(A / 10));
}

console.log(sumOfDigits(46)); // Output: 10
console.log(sumOfDigits(11)); // Output: 2
