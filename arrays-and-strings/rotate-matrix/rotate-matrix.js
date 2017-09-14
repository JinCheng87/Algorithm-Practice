function ratateMatrix(array){
  if(array.length === 0 || array.length !== array[0].length) return false;
  for(let i = 0; i < array.length / 2; i++){
    let leftBound = i;
    let rightBound = array.length - 1 - i;
    for(let j = leftBound; j < rightBound; j++){
      let offset = j - leftBound;
      let temp = array[leftBound][j];
      array[leftBound][j] = array[rightBound - offset][leftBound];
    }
  }
  return array;
}
ratateMatrix([[1,2,3], [4,5,6], [7,8,9]]);