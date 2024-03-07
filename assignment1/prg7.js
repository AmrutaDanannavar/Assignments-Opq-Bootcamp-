//array reversal 

function reverseArray(arr) {
    const reversed = []; 
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]); 
    }
    
    return reversed;
}
const inputArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(inputArray);
console.log("Original array:", inputArray);
console.log("Reversed array:", reversedArray);


//output
//Original array: [ 1, 2, 3, 4, 5 ]
//Reversed array: [ 5, 4, 3, 2, 1 ]