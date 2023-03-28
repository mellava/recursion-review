// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// I - any type of object (string, bool, number, fn, etc)
// O - returns a stringified version of the entire obj value
// C - can't use native stringify
// E - Nested obj structures

// strategy
// eventually build out a string, mimic the structure of JSONstringify
// several subproblems:
// what to do for the case of primitives
// what to do for the case of objects
// what to do for the case of arrays
// what to do for the case of functions
// recurse over specifically the objects and arrays because those can be nested

var stringifyJSON = function(obj) {
  var result = '';
  // Edge case: invlaid input
  if (typeof obj === 'function' || obj === undefined) {
    result += '';
  }
  // Base Case: primitives
  if (typeof obj === 'string') {
    return result + '"' + obj + '"';
  }
  if (typeof obj === 'number' || typeof obj === 'null' || typeof obj === 'boolean') {
    return result + obj;
  }

  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return result + '[]';
    }
    result += '[';
    obj.forEach(function(value, index, array) {
      if (index === array.length - 1) {
        result += stringifyJSON(value) + ']';
      } else {
        result += stringifyJSON(value) + ',';
      }
    });
  } else if (typeof obj === 'object') {
    console.log(obj);
    if (Object.keys(obj).length === 0) {
      result += 'null';
    } else {
      result += '{';
      for (var key in obj) {
        result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
      }
      result += '}';
    }
  }

  return result;
  // console.log(result);
};

console.log(stringifyJSON({}));

