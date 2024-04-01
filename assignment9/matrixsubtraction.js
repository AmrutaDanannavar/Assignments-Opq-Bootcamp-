// You are given two matrices A & B of same size, you have to retum another matrix which is the Subtraction of A and B.
function matrixSubtraction(A, B) {
    const rows = A.length; //3
    const columns = A[0].length;//3  A[0].length retrieves the length of the first row, which corresponds to the number of columns in the matrix.
    const result = [];

    // Iterate over each row
    for (let i = 0; i < rows; i++) {
        result[i] = [];
        // Iterate over each column
        for (let j = 0; j < columns; j++) {
            // Add corresponding elements from A and B and store the result
            result[i][j] = A[i][j] - B[i][j];
        }
    }
    return result;
}

// Example usage:
const A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const B = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

const result = matrixSubtraction(A, B);
console.log(result); //[ [ -8, -6, -4 ], [ -2, 0, 2 ], [ 4, 6, 8 ] ]
