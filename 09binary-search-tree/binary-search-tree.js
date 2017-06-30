function isBinarySearchTree(root) {
  let nodeList = [{node: root,lowerBound: -Infinity, upperBound: Infinity}];
  while(nodeList.length !== 0){
    let currentNode = nodeList.pop.node;
    if(currentNode.value < currentNode.lowerBound || currentNode.value > currentNode.upperBound)
      return false;
    if(currentNode.left !== null)
    nodeList.push({node:currentNode.left,lowerBound: -Infinity,upperBound: currentNode.value});
    if(currentNode.right !== null)
    nodeList.push({node:currentNode.right,lowerBound:currentNode.value,upperBound: Inifinity})
  }
  return ture;
}