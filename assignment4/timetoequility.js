function minTimeToEqualize(array) {
    const max = Math.max(...array);//4
    let sum = 0;
    for(let i=0;i<array.length;i++){
        sum = sum + array[i];
    } 
    const n = array.length;
    return max * n - sum; 
}

// Example usage:
const array1 = [2, 4, 1, 3, 2];
const result1 = minTimeToEqualize(array1);
console.log(result1); // Output: 8

const array2 = [1,5,8,6,2];
const result2 = minTimeToEqualize(array2);
console.log(result2); // Output: 18
