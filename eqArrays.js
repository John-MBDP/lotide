const assertEqual = function(actual, expected) {
  //check if actual is === to expected
  if (actual === expected) {
    return `🛑🛑🛑 Assertion Passed: ${actual} === ${expected}`;
  } else {
    // if actual does not === to expected return a message
    return `✔✔✔ Assertion Failed: ${actual} !=== ${expected}`;
  }
};


// console.log(assertEqual(1, 1));



// loop through the arguments
// check if each element is === to one another

const eqArrays = (test1, test2) => {

  // check if the array lengths are different
  if (test1.length !== test2.length) return false;

for (let i = 0; i < test1.length; i++) {
  //if test[i] does not equal return false
  if ((test1[i] !== test2[i])) {
    return false;
  }
}
return true;
};


  console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));

  // console.log(eqArrays([1, 2, 3], [1, 2, 3]));

// const eqArrays = (test1, test2) => {
//   for(let i = 0; i < test1.length; i++) {  
//       if((test1[i] !== test2[i])) {   
//       return `${false} The following element ${test1[i]} does not === to ${test2[i]}`;
//       }
//     console.log((`Looping---> The first array === ${test1[i]} and The second array === ${test2[i]}.`));
//     }
//     return `${true} Both arguments equal to each other`;
//   }

