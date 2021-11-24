"use strict";


// Create a function flatten which will take in an array containing elements including nested arrays of elements, 
// and return a "flattened" version of the array.
// Array.isArray() checks whether the value passed is an array.  Returns True or false

// outputs --> 1,2,3,4,5,6,
// const flatten = (arr) => {
//   let output = [];
//   for(let i = 0; i < arr.length; i++) {
//     // let flattened = arr[i];
//     //if the value of flattened does not === false
//     if(Array.isArray(arr[i])) {
//       //push the value of flattened to output
//       output.push(arr[i]);
//     } else {
//       //push the value of flattened in the output arr
//       output.push(arr[i]);
//     }
//   }
//   return `This is the output: ${output}`;
//   }



const flatten = (arr) => {
  let output = [];
  for(let i = 0; i < arr.length; i++) {
    //checks if the arr[i] is an array or not.  if not go to the else
    if(Array.isArray(arr[i])) {
      for(let k = 0; k < arr[i].length; k++ ) {
        output.push(arr[i][k])
      }
    } else {
      output.push(arr[i])
    }
  }
  return output;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]

