// program to print inverted pyramid
function InvertedPyramid(rows) {
    for (let i = rows; i >= 1; i--) {
        let row = '';
        for (let j = 0; j < rows - i; j++) {
            row += ' ';
        }
        for (let k = 0; k < i; k++) {
            row += '* ';
        }
        console.log(row);
    }
}

InvertedPyramid(5);


/* output

* * * * * 
 * * * * 
  * * *  
   * *   
    * 

*/