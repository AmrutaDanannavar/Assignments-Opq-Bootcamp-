function minSwitchesToTurnOnAllBulbs(A) {
    let switches = 0;
    let pressed = 0; 

    for (let i = 0; i < A.length; i++) {
      
        if (A[i] === 0 && pressed <= i) {
            switches++; 
            pressed = i + 1; 
        }
    }

    return switches;
}


const A1 = [0, 1, 0, 1];
console.log(minSwitchesToTurnOnAllBulbs(A1)); // Output: 2

const A2 = [1, 1, 1, 1];
console.log(minSwitchesToTurnOnAllBulbs(A2)); // Output: 0

const A3 = [1, 1, 1, 0];
console.log(minSwitchesToTurnOnAllBulbs(A3)); // Output: 1
