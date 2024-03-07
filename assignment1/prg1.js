//program to print * pattern pyramid
function Pyramid(rows) {
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < rows - i - 1; j++) {
            row += ' ';
        }
        for (let k = 0; k <= i; k++) {
            row += '* ';
        }
        console.log(row);
    }
}
Pyramid(5);


/*  out put 

    * 
   * *    
  * * *   
 * * * *  
* * * * *       

*/



