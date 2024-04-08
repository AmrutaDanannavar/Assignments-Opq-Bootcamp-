//We have to determine that if it is possible to convert A to size 1 containing single number '0'
//after several splits and merge



function interestingArray(A) {
    let ctr = 0;
    for (let i = 0; i < A.length;i++) {
        // Check if element is odd
        if (A[i] % 2) {
            ctr++;
        }
    }

    // According to the logic
    // in above approach
    if (ctr % 2) {
        return "No";
    }
    else {
        return "Yes";
    }
}

let arr1 = [9, 17];
console.log(interestingArray(arr1));
let arr2 = [1];
console.log(interestingArray(arr2));



