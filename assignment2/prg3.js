//printing array elements using for and while loops

let array = [10, 11, 12, 13];
function printArrayUsingFor(arr) {
    console.log("printing array elements using for loop:");
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function printArrayUsingWhile(arr) {
    console.log("printing array elements using while loop:");
    let i = 0;
    while (i < arr.length) {
        console.log(arr[i]);
        i++;
    }

}
printArrayUsingFor(array);
printArrayUsingWhile(array);

/*output
 using for loop 
 10
 11
 12
 13
 using while loop
 10
 11
 12
 13

*/

