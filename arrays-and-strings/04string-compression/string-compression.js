function stringCompression(str){
  let compressionResult = '';
  let count = 0;
  for(let i = 0; i < str.length; i++){
    count++;
    if(str[i] !== str[i + 1] || i == str.length - 1){
      compressionResult += `${str[i]+count}`;
      count = 0;
    }
  }
  return compressionResult;
}
stringCompression('aabbccdddddssss')