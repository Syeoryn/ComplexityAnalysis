/* ================ COMPLEXITY ANALYSIS REVIEW ================
 * For all functions here, please identify the time complexity
 * Extra credit:   List the patterns that you see across various 
 *                 time complexities and identify how consistent
 *                 these trends are.
 * Nightmare Mode: Consider if/ how you could refactor the code 
 *                 to have a lower time complexity
*/

// --------------- Problem 1 ---------------

for(var i = 0; i < n; i++){
  // do something here
}

for(var j = 0; j < n; j++){
  // do something here
}

// How many iterations does the first loop go through?
// How many iterations does the second loop go through?
// What's the time complexity?


// --------------- Problem 2 ---------------

for(var i = 0; i < n; i++){
  for(var j = 0; j < n; j++){
    // do something
  }
}

// How many iterations does the first loop go through?
// How many iterations does the second loop go through?
// What's the time complexity?


// --------------- Problem 3 ---------------

var retrieve = function(key){
  var hash = 0;
  for(var i = 0; i < key.length; i++){
    hash = (hash + Math.pow(i, hash)) % array.length;
  }
  return array[hash];
}

// What's the time complexity?



/* Perhaps take a break here to go through complexityApplication.js */



// --------------- Problem 4 ---------------

Array.prototype.contains = function(target){
  for(var i = 0; i < this.length; i++){
    if(this[i] === target){
      return true;
    }
  }
  return false;
}

// What's the time complexity when used on unsorted arrays?
//            What about on sorted arrays?
//            How about overall?

// How does that function compare to this one:

var contains = function(array, target){
  if(array.indexOf(target) !== -1){
    return true;
  }
  return false;
}


// --------------- Problem 5 ---------------

var sortedArrayContains = function(array, target){

}


// --------------- Problem 6 ---------------

var findDuplicates = function(array){
  var duplicates = [];
  for (var i = 0; i < array.length; i++){
    if (array.indexOf(array[i], i + 1) !== -1){
      if(duplicates.indexOf(array[i]) === -1){
        duplicates.push(array[i]);
      }
    }
  }
  return duplicates;
}

// What's the time complexity?


// --------------- Problem 7 ---------------

var findRepeats = function(array){
  var set = {};
  var repeats = [];
  for(var i = 0; i < array.length; i++){
    if( !(array[i] in set) ){
      set[array[i]] = 1;
    } else {
      set[array[i]]++;
    }
  }
  return results;
}

// What's the time complexity?


// --------------- Problem 8 ---------------

var fibonacci = function(n){
  return n > 2 ? fibonacci(n - 1) + fibonacci(n - 2) : 1;
}

// What's the time complexity?


// --------------- Problem 9 ---------------

var nFibonacci = function(n, x, prev){
  x = x || 1;
  if(n > 1){
    return nFibonacci(n - 1, x + prev|| 0, x);
  }
  return x;
}

// What's the time complexity?


// --------------- Problem 10 ---------------

var bubbleSort = function(array){
  var continueSorting = true;

  while(continueSorting){
    continueSorting = false
    for(var i = 0; i < array.length; i++){
      if(array[i] > array[i+1]){
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        continueSorting = true;
      }
    }
  }

  return array;
}


// Do I really need to state the question again?

// Nightmare mode:  Look up other sorting functions
//                  and compare their time complexity/ efficiency.
//                  Find anything interesting?
