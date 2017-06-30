let calendarArray = [ {startTime: 0,  endTime: 1},
                 {startTime: 3,  endTime: 5},
                 {startTime: 4,  endTime: 8},
                 {startTime: 10, endTime: 12},
                 {startTime: 9,  endTime: 10} ]
function mergeRanges(array){
  console.log(sortedArray = array.slice().sort(function(a,b){
    return a.startTime > b.startTime ? 1:-1;
  }));
  let calendar = [sortedArray[0]];
  for (let i = 1;i < array.length; i++){
    let previousEndTime = calendar[calendar.length-1].endTime
    if (array[i].startTime <= previousEndTime){
      calendar[calendar.length-1].endTime = Math.max(sortedArray[i].endTime,previousEndTime) ;
    }else{
      calendar.push(sortedArray[i])
    }
  }console.log(calendar)
}
mergeRanges(calendarArray);