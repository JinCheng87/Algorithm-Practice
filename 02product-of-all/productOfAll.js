getProductsOfAllIntsExceptAtIndex([3,2,6,1,8,4,6]);
function getProductsOfAllIntsExceptAtIndex(array){
  let productFromBegining = [];
  productFromBegining[0] = 1;
  productFromBegining[1] = array[0];
  let productFromEnd = [] 
  productFromEnd[array.length - 1] = 1;
  productFromEnd[array.length - 2] = array[array.length - 1]
  for(let i = 2;i < array.length; i++){
    productFromBegining[i] = productFromBegining[i - 1] * array[i - 1]
  }
  for(let i = array.length-3; i >= 0; i--){
    productFromEnd[i] = productFromEnd[i + 1] * array[i + 1]
  }
  let resultArray = []
  for(let i =0; i < array.length; i++){
    resultArray[i] = productFromEnd[i] * productFromBegining[i];
  }
  console.log(resultArray)
}