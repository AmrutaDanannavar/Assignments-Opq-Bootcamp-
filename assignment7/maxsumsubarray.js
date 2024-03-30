//find the maxmum sum of contiguous non empty subarray 
function maxSubArraySum(arr) {
    let maxEnd = arr[0]; //track the maximum sum of sub arraythat end at the current position 
    let maxSoFar = arr[0];// maximum sum of subarray seen so far during iteration 

    for (let i = 1; i < arr.length; i++) {
        maxEnd = Math.max(arr[i], maxEnd + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEnd);
    }

    return maxSoFar;
}

const array1 = [1,2,3,4,-10];
console.log(maxSubArraySum(array1)); // Output: 10
// const array2 = [-2,1,-3,4,-1,2,1,-5,4];
// console.log(maxSubArraySum(array2)); // Output: 6