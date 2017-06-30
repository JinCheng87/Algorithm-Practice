let array = [-10, -10, 1, 3, 2];
highest3(array)
function highest3(array){
  let highest1 = Math.max(array[0],array[1]);
  let lowest1 = Math.min(array[0],array[1]);
  let highest2 = array[0]*array[1];
  let lowest2 = array[0]*array[1];
  let highest3Num = array[1]*array[0]*array[2]
  for(let i = 2;i < array.length; i++){
    highest3Num = Math.max(highest2*array[i],lowest2*array[i],highest3Num);
    highest2 = Math.max(highest1*array[i],lowest1*array[i],highest2);
    lowest2 = Math.min(highest1*array[i],lowest1*array[i],lowest2);
    highest1 = Math.max(highest1,array[i]);
    lowest1 = Math.min(lowest1,array[i]);
  }
  console.log(highest3Num);
}