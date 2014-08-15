// --------------- Problem 1 ---------------

// Write a method to swap two elements in an array.

var swap = function(array, index1, index2){
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}

// What's the time complexity?
    // Constant time.
    // The number of operations executed is completely independent
    // of the size of the array and the indices passed in.
// Can you make it any better?


// --------------- Problem 2 ---------------

// Write a method to delete an element in an array.

var deleteElement = function(array, indexToDelete){
  var removedElement = array[indexToDelete];
  for(var i = indexToDelete; i < array.length; i++){
    array[i] = array[i + 1];
  }
  array.length--;  // alternatively, you could use array.pop();
  return removedElement;
}

// What's the time complexity?
    // Linear, because the worst case is that we try to remove index 0.
    // This would require iterating over all n elements in the array.
// How can you make it more efficient?
    // If we didn't care about the order of the array,
    // then we could complete this in constant time
var deleteElementFromArray = function(array, indexToDelete){
  swap(array, indexToDelete, array.length - 1); // hehe, see what I did there?
  return array.pop();
}

    // However, we were using an array, so order probably matters. We could use
    // native array functions, but that would not improve the time complexity--
    // Splice is still a linear time operation.

var deleteElementNatively = function(array, indexToDelete){
  return array.splice(indexToDelete, 1);
}


// --------------- Problem 3 ---------------

// Write a function to determine if an element exists
//                              within a sorted array

var sortedArrayContains = function(array, target){
  var middle = Math.floor(array.length / 2);
  if(array[middle] === target) return true;
  if(array[middle] > target){
    return sortedArrayContains(array.slice(0, middle), target);
  }
  if(array[middle] < target){
    return sortedArrayContains(array.slice(middle + 1), target);
  }
  return false;
}

// What's the time complexity?
    // Logarithmic
    // Each time sortedArrayContains is called, the size of the input
    // is cut approximately in half.  Because of this halving mechanism,
    // each increase in the size of the input array results in smaller
    // and smaller increases in the run time, creating a logarithmic 
    // time complexity.
// How is it different from a similar function
//         that operates on an unsorted array?
    // It's different because this function doesn't have to iterate 
    // over every item. In an unsorted array, we have no way of knowing 
    // where any given element is, so we must iterate over all items
    // of the array to find our answer.
    // This creates a linear time complexity.
