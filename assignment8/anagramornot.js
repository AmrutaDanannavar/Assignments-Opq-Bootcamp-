//an anagram of a word is another word that uses the same letters in a different order.

//let str="World";
//let str1=str.replace(/[^a-z0-9]/gi, '');//This ensures that we only consider letters and numbers.World
//console.log(str1);
//let str2=str.toLowerCase() // world
//console.log(str2);
//let str3=str.split('');//[ 'W', 'o', 'r', 'l', 'd' ]
//console.log(str3);
//let str4=str3.sort();//[ 'W', 'd', 'l', 'o', 'r' ]
//console.log(str4);
// let str5=str4.join('');//Wdlor
// console.log(str5);

function areAnagrams(str1, str2) {
    // Clean and sort the characters of both strings
    const sortedStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase().split('').sort().join('');
    console.log(sortedStr1);
    console.log(sortedStr2);

    if(sortedStr1 === sortedStr2){
        return "yes";
    }
    else{
        return "no"
    }
  }
  
  
  const str1 = "listen";
  const str2 = "silent";
  console.log(`Are "${str1}" and "${str2}" anagrams?`, areAnagrams(str1, str2)); // Output: true
  
//  output
//  eilnst
//  eilnst
//  Are "listen" and "silent" anagrams? yes