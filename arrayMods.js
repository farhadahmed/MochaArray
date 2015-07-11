
//Function that returns true if duplicate vals exist
exports.arrDup = function (arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true
      }
    }
  }
  return false;
}

//Function that takes array argument and returns new array without duplicate vals

//Credit: I got the idea for this function from georg on stackoverflow:
// http://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array
exports.unique = function(arr) {
  var uniqueArr = {};
  return arr.filter(function(item) {//Filter returns an array of values that pass through the provided function.
    //The array is placed as an argument in the given function.
    return uniqueArr.hasOwnProperty(item) ? false : (uniqueArr[item] = true);
    /*If uniqueArr has a value that is the same as a value in the original array,
    the value will not be pushed to the new array.*/
  });
};

//Implement push function
exports.pushTo = function(arr, value) {
  arr[arr.length] = value;
  return arr
};

//Implement pop function
exports.popFrom = function(arr) {
  arr.length = arr.length - 1;
  return arr;
}

//Implement shift function
exports.shiftFrom = function(arr) {

}

//Implement unshift function
exports.unshiftTo = function(arr, value) {

}


//arr = process.argv[2];
//console.log(exports.arrDup(arr));
//console.log(exports.unique(arr));
