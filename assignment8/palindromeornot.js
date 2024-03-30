//A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, disregarding spaces, punctuation, and capitalization.

function isPalindrome(input) {
    const str = String(input);
  
    let left = 0; // first index of string or number
    let right = str.length - 1;// last index of string or number
  
    while (left < right) {
      
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  console.log(isPalindrome("level")); // true
  console.log(isPalindrome("hello")); // false
  console.log(isPalindrome(12321));   // true
  console.log(isPalindrome(12345));   // false
  