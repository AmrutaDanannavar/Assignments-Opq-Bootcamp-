
// Anti-diagonal elements in a matrix are the elements that form a diagonal line from the top-right corner to the bottom-left corner of the matrix

function antiDiagonals(A) {
    const N = A.length;
    const result = [];

    // Initialize result array
    for (let i = 0; i < 2 * N - 1; i++) { //if N is 3, then 2 * 3 - 1 = 5, indicating that there are 5 possible anti-diagonals

        result[i] = [];

    }//[ [], [], [], [], [] ]

    // Fill result array with anti-diagonals
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            const index = i + j;
            result[index].push(A[i][j]);
        }
    }

    // Fill empty positions with zeroes
    for (let i = 0; i < result.length; i++) { // result.length=5
        while (result[i].length < N) {
            result[i].push(0);
        }
    }

    return result;
}

const A1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const A2 = [
    [1, 2],
    [3, 4]
];

console.log(antiDiagonals(A1)); // Output: [ [ 1, 0, 0 ], [ 2, 4, 0 ], [ 3, 5, 7 ], [ 6, 8, 0 ], [ 9, 0, 0 ] ]
console.log(antiDiagonals(A2)); // [ [ 1, 0 ], [ 2, 3 ], [ 4, 0 ] ]
