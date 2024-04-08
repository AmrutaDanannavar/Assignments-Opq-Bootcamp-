//Given two binary strings A and B. Return their sum (also a binary string).

function addBinary(A, B) {
    // Convert binary strings to decimal integers
    const numA = parseInt(A, 2);
    const numB = parseInt(B, 2);
    console.log( "decimal form of two numbers",numA,numB);
    
    // Add the decimal integers
    const sum = numA + numB;
    console.log("sum of two deciaml numbers",sum);
    
    // Convert the sum back to binary string
    const result = sum.toString(2);
     return result;
}

console.log(addBinary("100", "11"));  
console.log(addBinary("110", "10"));  
