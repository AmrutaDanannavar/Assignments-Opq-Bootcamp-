function findEquilibriumIndices(arr) {
    const n = arr.length;
    const cumulativeSum = [0];
    let totalSum = 0;

    // Calculate cumulative sum
    for (let i = 0; i < n; i++) {
        totalSum += arr[i];
        cumulativeSum.push(totalSum);
        console.log(cumulativeSum);
    }

    const equilibriumIndices = [];

    // Check for equilibrium index
    for (let i = 0; i < n; i++) {
        const leftSum = cumulativeSum[i];//[ 0, -7, -6, -1, 1, -3 ]
        const rightSum = totalSum - leftSum - arr[i];

        if (leftSum === rightSum) {
            equilibriumIndices.push(i);
        }
    }

    return {
        indices: equilibriumIndices,
        count: equilibriumIndices.length
    };
}


const array = [-7, 1, 5, 2, -4, 3, 0];
const result = findEquilibriumIndices(array);
console.log("Equilibrium Indices:", result.indices); // Output: [3, 6]
console.log("Count of Equilibrium Indices:", result.count); // Output: 2
