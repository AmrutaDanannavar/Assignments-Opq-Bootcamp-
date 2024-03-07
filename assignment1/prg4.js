//find sum of n numbers
function findSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
const n = 5;
const result = findSum(n);
console.log( result);

// output : 15
