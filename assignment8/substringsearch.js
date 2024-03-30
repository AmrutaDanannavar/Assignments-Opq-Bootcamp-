function substringSearch(str, pattern) {
    for (let i = 0; i <= str.length - pattern.length; i++) { //i<=11-5=6
        let j; 
        for (j = 0; j < pattern.length; j++) { // j<5
            if (str[i + j] !== pattern[j]) {
                break;
            }
        }
        if (j === pattern.length) {
            return i; // Pattern found at index i
        }
    }
    return -1; // Pattern not found
}

const str = "Hello world";
//console.log(str.length);
const pattern = "world";
//console.log(pattern.length);
const index = substringSearch(str, pattern);
if (index !== -1) {
    console.log(`Pattern '${pattern}' found at index ${index}.`);
} else {
    console.log(`Pattern '${pattern}' not found.`);
}
