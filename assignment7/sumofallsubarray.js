//sum of all  sub array
function sumOfAllSubarrays(arr) {
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let subArraySum = 0;
        for (let j = i; j < arr.length; j++) {
            let subArray = arr.slice(i, j + 1);
            console.log( subArray); // printing sub arrays 
            subArraySum += arr[j];
            totalSum += subArraySum;
        }
    }
    console.log("sum of all subarries is", totalSum);
}

const array1 = [1, 2, 3];
console.log(sumOfAllSubarrays(array1)); // Output: 20
// const array2 = [2,1,3];
// console.log(sumOfAllSubarrays(array2)); // output :19