function oneEditAway(str1, str2){
  if(str1.length === str2.length) return oneReplaceAway(str1, str2);
  else if(str1.length + 1 === str2.length) return oneInstertAway(str1, str2);
  else if(str1.length === str2.length + 1)return oneInstertAway(str2, str1);
}
function oneReplaceAway(str1, str2){
  let isOneEditAway = false;
  for(let i = 0; i < str1.length; i++){
    if(str1[i] !== str2[i]){
      if (isOneEditAway) return false;
      isOneEditAway = true;
    }
  }
  return true;
}
function oneInstertAway(str1, str2){
  let isOneInsertAway = false;
  let offset = 0;
  for(let i = 0; i < str2.length; i++){
    if(str2[i + offset] !== str1[i]){
      if(isOneInsertAway) return false;
      isOneInsertAway = true;
      offset++;
    }
  }
  return true;
}
console.log(oneEditAway('pale', 'ple') === true);
console.log(oneEditAway('pales', 'pale') === true);
console.log(oneEditAway('pale', 'bale') === true);
console.log(oneEditAway('pale', 'bae') === false);