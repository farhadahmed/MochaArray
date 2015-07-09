
exports.arrDup = function (arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true
      }
      else {
        return false;
      }
    }
  }
}

//arr = process.argv[2];
//console.log(exports.arrDup(arr));
