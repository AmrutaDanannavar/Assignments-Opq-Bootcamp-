
//iterate over object data
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(key + ": " + obj[key]);
}


const obj1 = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
keys.forEach(function(key) {
    console.log(key + ": " + obj[key]);
});
 

/*output
a: 1
b: 2
c: 3
a: 1
b: 2
c: 3

*/