//program to print diamond shape
function Diamond(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 0; j < rows - i; j++) {
            row += ' ';
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            row += '*';
        }
        console.log(row);
    }
    for (let i = rows - 1; i >= 1; i--) {
        let row = '';
        for (let j = 0; j < rows - i; j++) {
            row += ' ';
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            row += '*';
        }
        console.log(row);
    }
}
Diamond(5);


/*out put

    *    
   ***   
  *****  
 ******* 
*********
 *******
  *****
   ***
    *

*/
