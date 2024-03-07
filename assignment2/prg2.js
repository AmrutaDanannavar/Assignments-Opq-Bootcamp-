// Calculator to find sum,subtraction ,multiplication and division using functions

function addition(n1, n2) {
    return n1 + n2;
}
function subtraction(n1, n2) {
    return n1 - n2;
}
function multiplication(n1, n2) {
    return n1 * n2;
}
function division(n1, n2) {
    if (n2 !== 0) {
        return n1 / n2;
    }
    else {
        return "Error";
    }
}
 let n1 = 12;
 let n2 = 10;

console.log("sum:", addition(n1, n2));
console.log("Difference:", subtraction(n1, n2));
console.log("product:", multiplication(n1, n2));
console.log("quotient:", division(n1, n2));

//output
//sum: 22
//Difference: 2
//product: 120
//quotient: 1.2










