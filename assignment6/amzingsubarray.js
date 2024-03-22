//An amazing Substring is one that starts with a vowel (a, e, i, o, u, A, E, I, Q, U).
function countAmazingSubstrings(S) {
    const vowels = new Set("aeiouAEIOU");
    let count = 0;
    let amazingsubarray=[];
    for (let i = 0; i < S.length; i++) {
        
        if (vowels.has(S[i])) {
            for(let j=i;j<S.length;j++){
                amazingsubarray.push(S.substring(i,j+1));
            }
            count += S.length - i;
            // Number of substrings starting from S[i] is S.length - i
        }
    }
    console.log(amazingsubarray);
    return count % 10003;
}

// Test case
const S = "ABEC";
console.log(countAmazingSubstrings(S)); // Output: 6