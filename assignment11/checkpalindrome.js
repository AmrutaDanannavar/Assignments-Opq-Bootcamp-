function isPalindrome(A) {
    // Base case: If the length of the string is 0 or 1, it's a palindrome
    if (A.length <= 1) {
        return 1;
    }
    
    // Compare the first and last characters
    if (A[0] !== A[A.length - 1]) {
        return 0;
    }
    
    // Recursively check if the substring excluding the first and last characters is a palindrome
    return isPalindrome(A.slice(1, -1));
}


console.log(isPalindrome("naman"));   // Output: 1
console.log(isPalindrome("strings")); // Output: 0
