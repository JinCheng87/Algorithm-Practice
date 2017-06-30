var myRectangle = {
    // coordinates of bottom-left corner
    leftX: 1,
    bottomY: 5,
    // width and height
    width: 10,
    height: 4,
};
var yourRectangle = {
    // coordinates of bottom-left corner
    leftX: 4,
    bottomY: 7,
    // width and height
    width: 15,
    height: 4,
};

function getOverlap(startPoint1,endPoint1,startPoint2,endPoint2){
  let overlapStratPoint = null;
  let overlapEndPoint = null;
  if (endPoint1 < startPoint2 || startPoint1 > endPoint2){
    return [overlapStratPoint,overlapEndPoint]
  }else{
  overlapStratPoint = Math.max(startPoint1,startPoint2)
  overlapEndPoint = Math.min(endPoint1,endPoint2);
  }
  return [overlapStratPoint,overlapEndPoint]
}
function getOurRectangle(retangle1,retangle2){
  let ourRetangle = {}
  console.log(getOverlap(retangle1.leftX,retangle1.width+retangle1.leftX,retangle2.leftX,retangle1.width+retangle2.leftX))
  console.log(getOverlap(retangle1.bottomY,retangle1.height+retangle1.bottomY,retangle2.bottomY,retangle1.height+retangle2.bottomY))
  let ourRectangleX = getOverlap(retangle1.leftX,retangle1.width+retangle1.leftX,retangle2.leftX,retangle1.width+retangle2.leftX)
  let ourRectangleY = getOverlap(retangle1.bottomY,retangle1.height+retangle1.bottomY,retangle2.bottomY,retangle1.height+retangle2.bottomY)
  if (ourRectangleX[0] === null || ourRectangleY[0] === null) return 'No Love'
  else
  ourRetangle = {
    leftX : ourRectangleX[0],
    bottomY : ourRectangleY[0],
    width : ourRectangleX[1] - ourRectangleX[0],
    height : ourRectangleY[1] - ourRectangleY[0]
  }
  return ourRetangle
}
getOurRectangle(myRectangle,yourRectangle)