//sum of array elements using for and while loop
let array = [10, 11, 12, 13];
function sumArrayUsingFor(arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log("Sum of array elements using for loop:", sum); //out put :46

}
function sumArrayUsingWhile(arr) {
    let sum1 = 0;
    let i = 0;
    while (i < arr.length) {
        sum1 = sum1 + arr[i];
        i++;
    }
    console.log(" Sum of array elements using while loop:", sum1); //out put :46

}
sumArrayUsingFor(array);
sumArrayUsingWhile(array);