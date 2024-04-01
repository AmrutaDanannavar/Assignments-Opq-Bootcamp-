//A spiral matrix is a matrix filled with elements in a spiral order
//spiral order refers to the order in which elements are traversed or arranged in a matrix following a spiral or helical pattern.


function generateSpiralMatrix(A) {
    // Create an empty matrix filled with zeros
    const matrix = new Array(A).fill(0).map(() => new Array(A).fill(0));
    
    let top = 0; 
    let  bottom = A - 1;
    let left = 0;
    let right = A - 1;
    let num = 1;
    
    while (top <= bottom && left <= right) {
        // Fill top row
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++;
        }
        top++;
        
        // Fill right column
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--;
        
        // Fill bottom row
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = num++;
        }
        bottom--;
        
        // Fill left column
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = num++;
        }
        left++;
    }
    
    return matrix;
}

const A1= 1;
const A2= 2;
const A3= 5;
console.log(generateSpiralMatrix(A1));
console.log(generateSpiralMatrix(A2));
console.log(generateSpiralMatrix(A3));
