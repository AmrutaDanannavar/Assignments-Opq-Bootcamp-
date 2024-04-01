// A(having MXN size) and B(having NXP). You have to multiply matrix A with B and return the resultant matrix. (i.e. return the matrix AB).

function matrixMultiplication(A, B) {
    const rowsA = A.length;
    const columnsA = A[0].length;
    const rowsB = B.length;
    const columnsB = B[0].length;

    if (columnsA !== rowsB) {
        // Matrices cannot be multiplied
        return null;
    }

    const result = [];

    for (let i = 0; i < rowsA; i++) {
        result[i] = [];
        for (let j = 0; j < columnsB; j++) {
            result[i][j] = 0;
            for (let k = 0; k < columnsA; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return result;
}

const A1 = [[1, 2], [3, 4]];
const B1 = [[5, 6], [7, 8]];

const A2 = [[1, 1]];
const B2 = [[2], [3]];

console.log(matrixMultiplication(A1, B1)); // Output: [[19, 22], [43, 50]]
console.log(matrixMultiplication(A2, B2)); // Output: [[5]]
