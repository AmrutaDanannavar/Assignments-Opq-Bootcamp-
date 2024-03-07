// string reversal

function reverseString(str) {
    let reversed = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; 
    }
    
    return reversed;
}
const inputString = "hello";
const reversedString = reverseString(inputString);
console.log("Original string:", inputString);
console.log("Reversed string:", reversedString);


//output :Original string: hello
//Reversed string: olleh
