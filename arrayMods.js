
//Function that returns true if duplicate vals exist
exports.arrDup = function (arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true
      };
    };
  };
  return false;
};

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
  return arr.length;
};

//Implement pop function
exports.popFrom = function(arr) {
  var val = arr[arr.length-1];
  arr.length = arr.length - 1;
  return val;
};

//Implement shift function
exports.shiftFrom = function(arr) {
  var val = arr[0];
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i+1];
  };
  arr.length--;
  return val;
};

//Implement unshift function
exports.unshiftTo = function(arr, value) {
  for (i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  };
  arr[0] = value;
  return arr.length;
};

//Implement frequency2
exports.frequency2 = function(arr) {
  //Return a hashtable where each character is key and number of char occurances is key.
  function frequencyInString(s) {
    var hashtable = {};
    //for each character in the string, do the following
    for (var i = 0; i < s.length; i++) {
      var currentCharacter = s.charAt(i);
      var currentCharacter = currentCharacter.toLowerCase();
      //Check if hashtable contains the character and if so, add 1, otherwise val for that currentCharacter = 1
      if (hashtable[currentCharacter]) {
        hashtable[currentCharacter]++;
      } else {
        (hashtable[currentCharacter]) = 1;
      }
    }
    return hashtable;
  }

  //creates one string of all array values
  var arrString = arr.join('');
  var highestHashValue = 0;
  var mostCommonLetters = [];
  var frequencies = frequencyInString(arrString);

  //This for loop will return the largest value/number in the hashtable
  for (var letter in frequencies) {
    if (frequencies[letter] > highestHashValue) {
      highestHashValue = frequencies[letter];
    }
  }
  //This loop finds the letter with largest value
  for (var letter in frequencies) {
    if (frequencies[letter] === highestHashValue) {
      mostCommonLetters.push(letter);
    }
  }
  return mostCommonLetters;
}
