function isBinarySearchTree(root,lowerBound = -Infinity,upperBound = Infinity){
  if(root === null) return true; //if it is the last node, return true
  if(root.value < lowerBound || root.value > upperBound) return false;
  return isBinarySearchTree(root.left, lowerBound, root.value) && isBinarySearchTree(root.right, root.value, upperBound)
}