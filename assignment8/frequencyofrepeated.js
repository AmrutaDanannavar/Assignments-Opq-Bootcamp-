// How do you get the matching elements(repeated array value) in an integer array? Also, find the frequency of the repeated element
function findDuplicates(arr) {
    const frequencyCounter = {};

    for (const num of arr) {
        frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
    }
     console.log(frequencyCounter);//{ '1': 3, '2': 2, '3': 2, '4': 1, '5': 1, '6': 1 }
     
     const duplicates = [];

    for (const key in frequencyCounter) {
        if (frequencyCounter[key] > 1) {
            duplicates.push(parseInt(key)); // Convert key to integer and push to duplicates array
        }
    }

    return duplicates;
}

const array = [1, 2, 3, 4, 2, 3, 5, 6, 1, 1];
const duplicates = findDuplicates(array);

console.log("Matching Elements (Repeated Array Values):", duplicates);

// Calculate the frequency of each repeated element
for (const num of duplicates) {
    const frequency = array.filter(item => item === num).length;
    console.log(`Frequency of ${num}: ${frequency}`);
}
