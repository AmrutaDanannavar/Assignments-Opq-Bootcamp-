// 2D integer matrix A, return a 1D integer array containing column-wise sums of original matrix.
function columnSum(A) {
    const rows = A.length; //3
    const columns = A[0].length; //  A[0].length retrieves the length of the first row, which corresponds to the number of columns in the matrix.  4
    const columnSums = [];

    // Initialize column sums array with zeros
    for (let j = 0; j < columns; j++) {
        columnSums[j] = 0;
    }
    

    // Iterate over each column
    for (let j = 0; j < columns; j++) {
        // Iterate over each row and accumulate column sum
        for (let i = 0; i < rows; i++) {
            columnSums[j] += A[i][j];
        }
    }

    return columnSums;
}

const A = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 2, 3, 4]
];

console.log(columnSum(A)); // Output: [15, 10, 13, 16]
