//Calculator to find sum,subtraction ,multiplication and division without  using functions

let n1 = 40;
let n2 = 30;

// addition
let sum = n1 + n2;
console.log("Sum", sum);

// Substraction
let sub = n1 - n2;
console.log("Difference", sub);

//Multiplication
let mul = n1 * n2;
console.log("Product", mul);

//division 
if (n2 !== 0) {
    let div = n1 / n2;
    console.log("Quotient", div);
}
else {
    return Error;
}

//output
//Sum 70
//Difference 10
//Product 1200
//Quotient 1.3333333333333333