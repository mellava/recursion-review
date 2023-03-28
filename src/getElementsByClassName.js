// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// strategy: access each node, check node's classlist and match it to target, check if node has any children => recursion
var getElementsByClassName = function(className, currentElement
) {
  // your code here
  var results = [];

  currentElement = currentElement || document.body;
  if (currentElement.classList && currentElement.classList.contains(className)) {
    results.push(currentElement);
    // console.log(results);
  }
  for (var i = 0; i < currentElement.childNodes.length; i++) {
    var childResults = getElementsByClassName(className, currentElement.childNodes[i]);
    results = results.concat(childResults);
  }
  return results;
};
