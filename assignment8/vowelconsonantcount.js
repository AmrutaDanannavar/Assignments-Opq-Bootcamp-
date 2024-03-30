// calculate the number of vowels and consonants in a String
function countVowelsandConsonant(str) {
    
    str = str.toLowerCase();
  
    const vowels = "aeiou";
    const consonants = "bcdfghjklmnpqrstvwxyz";
  
    let vowelCount = 0;
    let consonantCount = 0;
  
    for (let char of str) {
      if (vowels.includes(char)) {
        vowelCount++;
      }
      else if(consonants.includes(char)){
        consonantCount++;

      }
    }
    return {
        vowels: vowelCount,
        consonants: consonantCount
      };
   
  }
  
  const inputString = "Hello World";
  console.log(countVowelsandConsonant(inputString));
  
  //output:{ vowels: 3, consonants: 7 }

  