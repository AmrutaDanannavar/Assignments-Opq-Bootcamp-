//Return the index of the first element of the subarray of size k that has leastaverage.
function findSubarrayWithLeastSum(A, B) {
    let minSum = Infinity;
    let minIndex = -1;

    for (let i = 0; i <= A.length - B; i++) {
        let subarraySum = 0;
        for (let j = i; j < i + B; j++) {
            subarraySum+= A[j];
        }
        if (subarraySum < minSum) {
            minSum = subarraySum;
            minIndex = i;
        }
    }

    return minIndex;
}

const A1= [3, 7, 90, 20, 10, 50, 40] ;
const B1= 3;// size of sub array
const output1 = findSubarrayWithLeastSum(A1, B1);
console.log(output1); // Output: 3
const A2=[3, 7, 5, 20,-10, 0, 12] ;
const B2 =2;
const output2= findSubarrayWithLeastSum(A2, B2);
console.log(output2); //Output: 4
