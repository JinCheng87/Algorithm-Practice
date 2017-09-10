function permutation(str1, str2){
  if (str1.length !== str2.length) return false;
  let charCountArray = new Array(128).fill(0); //array with 128 elements fill with 0
  for(let i = 0; i < str1.length; i++){
    let charValue = str1[i].charCodeAt(0);
    charCountArray[charValue]++;
  }
  for(let i = 0; i < str2.length; i++){
    let charValue = str2[i].charCodeAt(0);
    charCountArray[charValue]--;
    if (charCountArray[charValue] < 0) return false;
  }
  return true;
}
console.log(permutation('good', 'oodg'));
console.log(permutation('goodd', 'ooodg'));