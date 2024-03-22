function countagpair(sent) {
    let count = 0;
    for (let i = 0; i < sent.length - 1; i++) {
        if (sent[i] === 'A' && sent[i + 1] === 'G') {
            count++;
        }
    }
    return count;
}

const sent1 = "AAG";
console.log(countagpair(sent1)); //1
const sent2 = "AGABAGAGNGA";
console.log(countagpair(sent2)); //3