// finding factorial of n numbers using recursion
function factorial(n) {
    
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
const A1 = 4;
const fact1 = factorial(A1);
console.log(fact1);//24
const A2 = 1;
const fact2 = factorial(A2);
console.log(fact2);//1