function reverseString(S){
let result=''
  for (let i = S.length - 1; i >= 0; i--){
     
     result+= S[i];
  }
  return result;
  
}
 let string1  = 'scaleracademy';
 console.log(reverseString(string1));
 let string2  = 'cool';
 console.log(reverseString(string2));