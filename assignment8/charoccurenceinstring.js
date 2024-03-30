//number of occurrences of a character in a String

function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }
  
  const str = "hello world";
  const char = "l";
  console.log(`Number of occurrences of '${char}' in '${str}':`, countOccurrences(str, char)); 
  
  //output:Number of occurrences of 'l' in 'hello world': 3