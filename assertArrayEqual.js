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



// Takes in two arrays and checks if they're both equal
const assertArraysEqual = (arg1, arg2) => {
  return `${eqArrays(arg1, arg2)}`
};


console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));