//Rotate a given  Matrix in clockwise 
function rotateMatrix(A) {
    const rows = A.length;
    const cols = A[0].length;
    const rotatedMatrix= [];
    
    // initialize rows
    for (let j = 0; j < cols; j++) {
        rotatedMatrix[j] = []; //[ [], [], [] ]
    }
   
    // Fill the transposed matrix
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            rotatedMatrix[j][i] = A[i][j];
        }
    }
    
    // Reverse each row
    for (let i = 0; i < rows; i++) {
        rotatedMatrix[i].reverse(); // here reverse() function directly modifies the order of elements in the existing array.
    }
    
    return rotatedMatrix;
}

const A1 = [
  [1,2],
  [3,4]
];

const A2 = [
    [1, 2, 3], 
    [4, 5, 6],
     [7, 8, 9]
];

console.log( rotateMatrix(A1));
console.log( rotateMatrix(A2));
