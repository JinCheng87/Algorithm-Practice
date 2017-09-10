function isUniqueChar(string){
  let charTable = [];
  for(let i = 0; i < string.length; i++){
    if(charTable[string[i].charCodeAt(0)] === undefined){
      charTable[string[i].charCodeAt(0)] = string[i].charCodeAt(0);
    }else{
      return false;
    }
  }
  return true;
}
console.log(isUniqueChar('iamunqe'));
console.log(isUniqueChar('iamnotquique'));