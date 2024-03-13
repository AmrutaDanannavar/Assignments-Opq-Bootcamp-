function findSumInRange(arr, ranges) {
    // Create cumulative sum array
    let cumulativeSum = [0];
    for (let i = 0; i < arr.length; i++) {
        cumulativeSum[i + 1] = cumulativeSum[i] + arr[i];
        console.log(cumulativeSum); //[ 0, 1, 3, 6, 10, 15 ]
    }

    // Calculate sum for each range
    let result = [];
    for (let i = 0; i < ranges.length; i++) {
        let start = ranges[i][0];
        let end = ranges[i][1];
        result.push(cumulativeSum[end + 1] - cumulativeSum[start]);
    }

    return result;
}

// Test the function
const array = [1,2,3,4,5];
const ranges = [[0, 3], [1,2]];
console.log(findSumInRange(array, ranges)); // Output: [10, 5]
