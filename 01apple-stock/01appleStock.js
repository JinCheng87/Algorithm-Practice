var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
function getMaxProfit(array){
  let lowest = array[0];
  let maxProfit = array[1] - array[0];
  for(let i =1; i < array.length - 1; i++){
    lowest = Math.min(lowest,array[i]);
    maxProfit = Math.max(maxProfit,array[i+1] - lowest)
  }
  return maxProfit;
}
getMaxProfit(stockPricesYesterday);