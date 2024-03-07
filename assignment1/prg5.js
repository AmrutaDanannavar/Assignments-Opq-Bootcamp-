// search function for string

function searchString(str, target) {
    for (let i = 0; i <= str.length - target.length; i++) {
        let found = true;
        for (let j = 0; j < target.length; j++) {
            if (str[i + j] !== target[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return i;
        }
    }
    return -1;
}
const str = "hello world";
const target = "world";
const index = searchString(str, target);
if (index !== -1) {
    console.log("The target string is found at index:", index);
} else {
    console.log("The target string is not found.");
}


//output : The target string is found at index: 6