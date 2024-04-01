//Transposing a matrix involves interchanging its rows and columns.
function transposeMatrix(A) {
    const rows = A.length;
    const cols = A[0].length;
    const transposed = [];
    
    // initialize rows
    for (let j = 0; j < cols; j++) {
        transposed[j] = []; //[ [], [], [] ]
    }
   
    // Fill the transposed matrix
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            transposed[j][i] = A[i][j];
        }
    }
    
    return transposed;
}
const A1= [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const A2 = [[1, 2], [1, 2], [1, 2]];

console.log( transposeMatrix(A1));
console.log( transposeMatrix(A2));