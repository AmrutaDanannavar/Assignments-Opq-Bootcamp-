//Given an array of integers A, every element appears twice except for one. Find that integer that occurs once.

function findSingleNumber(A) {
    let set = new Set();
   

    for (let i = 0; i < A.length; i++) {
        // If the element is already in the set, remove it
        if (set.has(A[i])) {
            set.delete(A[i]);
        } 
        // If the element is not in the set, add it
        else {
            set.add(A[i]);
        }
    }

    // The remaining element in the set is the single number
    return set.values().next().value;
}

console.log(findSingleNumber([1, 2, 2, 3, 1])); // Output: 3
console.log(findSingleNumber([1, 2, 2]));        // Output: 1


